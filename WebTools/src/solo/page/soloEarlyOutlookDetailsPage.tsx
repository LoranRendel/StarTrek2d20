import React from "react";
import { ISoloCharacterProperties } from "./soloCharacterProperties";
import { connect } from "react-redux";
import { Header } from "../../components/header";
import InstructionText from "../../components/instructionText";
import { Navigation } from "../../common/navigator";
import { PageIdentity } from "../../pages/pageIdentity";
import { useTranslation } from "react-i18next";
import { AttributeView } from "../../components/attribute";
import { AttributesHelper } from "../../helpers/attributes";
import { CheckBox } from "../../components/checkBox";
import { InputFieldAndLabel } from "../../common/inputFieldAndLabel";
import DisciplineListComponent, { IDisciplineController } from "../../components/disciplineListComponent";
import { EarlyOutlookModel } from "../../helpers/upbringings";
import { Character } from "../../common/character";
import { Skill } from "../../helpers/skills";
import store from "../../state/store";
import { StepContext, modifyCharacterDiscipline, setCharacterEarlyOutlook, setCharacterFocus } from "../../state/characterActions";
import { Button } from "../../components/button";
import { Dialog } from "../../components/dialog";
import SoloCharacterBreadcrumbs from "../component/soloCharacterBreadcrumbs";
import D20IconButton from "../component/d20IconButton";
import { FocusRandomTable } from "../table/focusRandomTable";

class SoloEarlyOutlookDiscplineController implements IDisciplineController {

    readonly character: Character;
    readonly earlyOutlook: EarlyOutlookModel;

    constructor(character: Character, earlyOutlook: EarlyOutlookModel) {
        this.character = character;
        this.earlyOutlook = earlyOutlook;
    }

    isShown(discipline: Skill) {
        return this.earlyOutlook.disciplines.indexOf(discipline) >= 0;
    }
    isEditable(discipline: Skill)  {
        return this.earlyOutlook.disciplines.length >= 1;
    }
    getValue(discipline: Skill) {
        return this.character.skills[discipline].expertise;
    }
    canIncrease(discipline: Skill) {
        return this.character.upbringingStep?.discipline == null && (this.character.skills[discipline].expertise < Character.maxDiscipline(this.character));
    }
    canDecrease(discipline: Skill) {
        return this.character.upbringingStep?.discipline === discipline;
    }
    onIncrease(discipline: Skill) {
        store.dispatch(modifyCharacterDiscipline(discipline, StepContext.EarlyOutlook, true));
    }
    onDecrease(discipline: Skill) {
        store.dispatch(modifyCharacterDiscipline(discipline, StepContext.EarlyOutlook, false));
    }
}

const SoloEarlyOutlookDetailsPage: React.FC<ISoloCharacterProperties> = ({character}) => {

    const { t } = useTranslation();
    const earlyOutlook = character.upbringingStep?.upbringing;
    const disciplineController = new SoloEarlyOutlookDiscplineController(character, earlyOutlook);

    const changeAccepted = (accepted: boolean) => {
        store.dispatch(setCharacterEarlyOutlook(earlyOutlook, accepted));
    }

    const navigateToNextPage = () => {
        if (character.upbringingStep?.discipline == null) {
            Dialog.show(t('SoloEarlyOutlookDetailsPage.errorDiscipline'));
        } else if (!character.upbringingStep?.focus) {
            Dialog.show(t('SoloEarlyOutlookDetailsPage.errorFocus'));
        } else {
            Navigation.navigateToPage(PageIdentity.SoloEducationType);
        }
    }

    const selectRandomFocus = () => {
        let done = false;
        while (!done) {
            let focus = FocusRandomTable(character.upbringingStep?.discipline);
            if (character.focuses.indexOf(focus) < 0) {
                done = true;
                store.dispatch(setCharacterFocus(focus, StepContext.EarlyOutlook));
            }
        }
    }

    const attributes = character.upbringingStep?.acceptedUpbringing
        ? (<div>
            <AttributeView name={AttributesHelper.getAttributeName(earlyOutlook.attributeAcceptPlus2) } points={2} value={character.attributes[earlyOutlook.attributeAcceptPlus2].value}/>
            <AttributeView name={AttributesHelper.getAttributeName(earlyOutlook.attributeAcceptPlus1) } points={1} value={character.attributes[earlyOutlook.attributeAcceptPlus1].value}/>
        </div>)
        : (<div>
            <AttributeView name={AttributesHelper.getAttributeName(earlyOutlook.attributeRebelPlus2) } points={2} value={character.attributes[earlyOutlook.attributeRebelPlus2].value}/>
            <AttributeView name={AttributesHelper.getAttributeName(earlyOutlook.attributeRebelPlus1) } points={1} value={character.attributes[earlyOutlook.attributeRebelPlus1].value}/>
        </div>);

    return (
        <div className="page container ml-0">
            <SoloCharacterBreadcrumbs  pageIdentity={PageIdentity.SoloEarlyOutlookDetails} />
            <Header>{earlyOutlook.localizedName}</Header>

            <InstructionText text={earlyOutlook.description} />

            <div className="row">
                <div className="col-lg-6 my-3">
                    <p>{t('UpbringingDetailPage.text')}</p>
                    <CheckBox isChecked={character.upbringingStep?.acceptedUpbringing} text={t('UpbringingDetailPage.text.accept')} value={1} onChanged={() => changeAccepted(true)}/>
                    <CheckBox isChecked={!character.upbringingStep?.acceptedUpbringing} text={t('UpbringingDetailPage.text.reject')} value={0} onChanged={() => changeAccepted(false)}/>
                </div>
                <div className="col-lg-6 my-3">
                    <Header level={2}>{t('Construct.other.attributes')}</Header>
                    {attributes}
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 my-3">
                    <Header level={2}>{t('Construct.other.disciplines')} ({t('Common.text.selectOne')})</Header>
                    <DisciplineListComponent controller={disciplineController} />
                </div>
                <div className="my-3 col-lg-6">
                    <Header level={2}>{t('Construct.other.focus')}</Header>
                    <p>{earlyOutlook.focusDescription}</p>
                    <div className="d-flex justify-content-between align-items-center flex-wrap">
                        <InputFieldAndLabel id="focus" labelName={t('Construct.other.focus')}
                            value={character.upbringingStep?.focus || ""}
                            onChange={(v) => store.dispatch(setCharacterFocus(v, StepContext.EarlyOutlook))} />
                        <div style={{ flexShrink: 0 }} className="mt-1">
                            <D20IconButton onClick={() => selectRandomFocus()}/>
                        </div>
                    </div>
                    <div className="py-1 text-white"><b>{t('Common.text.suggestions')}:</b> {earlyOutlook.focusSuggestions.join(", ")}</div>
                </div>
            </div>
            <div className='text-right mt-4'>
                <Button text={t('Common.button.next')} buttonType={true} className="btn btn-primary" onClick={() => navigateToNextPage() }/>
            </div>
        </div>);
}

function mapStateToProps(state, ownProps) {
    return {
        character: state.character?.currentCharacter
    };
}

export default connect(mapStateToProps)(SoloEarlyOutlookDetailsPage);