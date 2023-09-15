import { connect } from "react-redux";
import { Header } from "../../components/header";
import { Navigation } from "../../common/navigator";
import { PageIdentity } from "../../pages/pageIdentity";
import { useTranslation } from "react-i18next";
import { Button } from "../../components/button";
import store from "../../state/store";
import { StepContext, setCharacterValue } from "../../state/characterActions";
import SoloValueInput from "../component/soloValueInput";
import { ISoloCharacterProperties, soloCharacterMapStateToProperties } from "./soloCharacterProperties";
import { CareersHelper } from "../../helpers/careers";
import { Dialog } from "../../components/dialog";
import { makeKey } from "../../common/translationKey";
import { Career } from "../../helpers/careerEnum";
import SoloCharacterBreadcrumbs from "../component/soloCharacterBreadcrumbs";
import D20IconButton from "../component/d20IconButton";
import { ValueRandomTable } from "../table/valueRandomTable";

const SoloCareerLengthDetailsPage: React.FC<ISoloCharacterProperties> = ({character}) => {
    const { t } = useTranslation();

    const careerLength = CareersHelper.instance.getSoloCareerLength(character.career);

    const navigateToNextStep = () => {
        if (!character.careerValue) {
            Dialog.show(t("SoloCareerLengthDetailsPage.errorValue"));
        } else {
            Navigation.navigateToPage(PageIdentity.SoloCareerEvent1);
        }
    }

    const randomValue = () => {
        let done = false;
        while (!done) {
            let value = ValueRandomTable();
            if (character.values.indexOf(value) < 0) {
                done = true;
                store.dispatch(setCharacterValue(value, StepContext.Career));
            }
        }
    }

    return (
        <div className="page container ml-0">
            <SoloCharacterBreadcrumbs pageIdentity={PageIdentity.SoloCareerLengthDetails} />
            <Header>{careerLength.localizedName}</Header>
                <p>{careerLength.localizedDescription}</p>
                <div className="row">
                    <div className="col-lg-6 my-3">
                        <Header level={2} className="mb-3">{t('Construct.other.value')}</Header>

                        <div className="d-flex justify-content-between align-items-center flex-wrap">
                            <SoloValueInput value={character?.careerValue}
                                onValueChanged={(string) => {store.dispatch(setCharacterValue(string, StepContext.Career))}}/>
                            <div style={{ flexShrink: 0 }} className="mt-2">
                                <D20IconButton onClick={() => randomValue() }/>
                        </div>
                        <div className="py-1 text-white">{t(makeKey('Value.careerLength.', Career[careerLength.id], '.text'))}</div>

                    </div>
                </div>
            </div>
            <div className='text-right mt-4'>
                <Button text={t('Common.button.next')} buttonType={true} className="btn btn-primary" onClick={() => navigateToNextStep() }/>
            </div>
        </div>);

}


export default connect(soloCharacterMapStateToProperties)(SoloCareerLengthDetailsPage);