﻿import * as React from 'react';
import {character} from '../../common/character';
import { CharacterType } from '../../common/characterType';
import {SpaceframeHelper, SpaceframeModel} from '../../helpers/spaceframes';
import {MissionProfileHelper, MissionProfileModel} from '../../helpers/missionProfiles';
import {TalentsHelper, TalentViewModel, ToViewModel} from "../../helpers/talents";
import {Button} from '../../components/button';
import {Refits} from "../../components/refits";
import { SmallHeader } from "../../components/smallHeader";
import {StarshipTalentSelectionList} from "../view/starshipTalentSelection";
import {CharacterSheetDialog} from '../../components/characterSheetDialog'
import {CharacterSheetRegistry} from '../../helpers/sheets';
import { ModalControl } from '../../components/modal';
import SpaceframeSelection from '../view/spaceframeSelection';
import StarshipStats from '../view/starshipStats';
import MissionProfileSelection from '../view/missionProfileSelection';
import MissionPodSelection from '../view/missionPodSelection';
import CustomSpaceframeForm from '../../components/customSpaceframeForm';
import { System } from '../../helpers/systems';
import { OutlineImage } from '../../components/outlineImage';
import { marshaller } from '../../helpers/marshaller';
import { Starship } from '../../common/starship';
import store from '../../state/store';
import { SingleTalentSelectionList } from '../../components/singleTalentSelectionList';
import RegistryNumber from '../../components/registryNumberGenerator';
import { MissionPod, MissionPodHelper } from '../../helpers/missionPods';
import { connect } from 'react-redux';

interface StarshipPageProperties {
    type: CharacterType,
    serviceYear: number
}

interface StarshipPageState {
    name: string
    registry: string
    profileTalent?: string
    refitCount: number
    refits: System[]
}

class StarshipPage extends React.Component<StarshipPageProperties, StarshipPageState> {
    private _yearInput: HTMLInputElement;
    private _talentSelection: TalentViewModel[];
    private _traits: string;

    private starship: Starship;

    constructor(props: StarshipPageProperties) {
        super(props);

        this.starship = new Starship();
        this.starship.type = this.props.type;
        this.starship.serviceYear = this.props.serviceYear;
        character.starship = this.starship;
        character.type = this.props.type;

        this._talentSelection = [];

        this.state = {
            name: this.props.type === CharacterType.KlingonWarrior ? 'I.K.S. ' : 'U.S.S. ',
            profileTalent: undefined,
            refitCount: 0,
            refits: [],
            registry: this.props.type === CharacterType.KlingonWarrior ? '' : 'NCC-'
        };
    }

    renderSpaceframeSection() {
        const spaceframes = SpaceframeHelper.getSpaceframes(this.props.serviceYear, this.props.type, true);
        // if other choices have changed, then the current spaceframe might be invalid
        if (this.starship && this.starship.spaceframeModel) {
            if (this.starship.spaceframeModel.isCustom) {
                if (character.type !== this.starship.spaceframeModel.type || this.props.serviceYear < this.starship.spaceframeModel.serviceYear) {
                    this.starship.spaceframeModel = undefined;
                }
            } else {

                let frames = spaceframes.filter(f => f.id === this.starship.spaceframeModel.id);
                if (frames.length === 0) {
                    this.starship.spaceframeModel = undefined;
                }
            }
        }

        let selectedSpaceframeDetails = (<div className="p-0"><h5 className="text-selection">No Selection</h5></div>);
        if (this.starship.spaceframeModel) {
            let talentList = this.starship.spaceframeModel.talents ? this.starship.spaceframeModel.talents.map(t => t.description).join(", ") : "None specified";
            if (!talentList) {
                talentList = "None";
            }
            selectedSpaceframeDetails = (
                <div className="p-0">
                    <h5 className="text-selection">{this.starship.spaceframeModel.name ? this.starship.spaceframeModel.name : "Unnamed Class"}</h5>
                    <OutlineImage serviceYear={this.props.serviceYear} spaceframe={this.starship.spaceframeModel} size="lg" />
                    <StarshipStats model={this.starship.spaceframeModel} type="spaceframe" />
                    <p><b className="text-selection">Talents:</b> {talentList}</p>
                </div>
            );
        }
        return selectedSpaceframeDetails;
    }

    renderMissionProfilesSection() {
        const profiles = MissionProfileHelper.getMissionProfiles(this.props.type);
        let missionProfileModel = undefined;
        // if other choices have changed, then the current spaceframe might be invalid
        if (this.starship && this.starship.missionProfileModel !== undefined) {
            let frames = profiles.filter(p => p.id === this.starship.missionProfileModel.id);
            if (frames.length === 0) {
                this.starship.missionProfileModel = undefined;
            } else {
                missionProfileModel = frames[0];
            }
        }

        let details = (<div className="p-0"><h5 className="text-selection">No Selection</h5></div>);
        if (missionProfileModel) {
            details = (
                <div className="p-0">
                    <h5 className="text-selection">{missionProfileModel.name}</h5>
                    <StarshipStats model={missionProfileModel} type="missionProfile" />
                </div>
            );
        }
        return details;
    }

    renderMissionPodsSection() {
        if (this.starship && this.starship.spaceframeModel && this.starship.spaceframeModel.isMissionPodAvailable) {
            const pods = MissionPodHelper.getMissionPods(this.starship);
            let missionPodModel = undefined;
            // if other choices have changed, then the current spaceframe might be invalid
            if (this.starship && this.starship.missionPodModel !== undefined) {
                let items = pods.filter(p => p.id === this.starship.missionPodModel.id);
                if (items.length === 0) {
                    this.starship.missionPodModel = undefined;
                } else {
                    missionPodModel = items[0];
                }
            }
    
            let details = (<div className="p-0"><h5 className="text-selection">No Selection</h5></div>);
            if (missionPodModel) {
                let talentList = missionPodModel.talents ? missionPodModel.talents.map(t => t.name).join(", ") : "None specified";
                if (!talentList) {
                    talentList = "None";
                }
                details = (
                    <div className="p-0">
                        <h5 className="text-selection">{missionPodModel.name}</h5>
                        <StarshipStats model={missionPodModel} type="missionPod" />
                        <p><b className="text-selection">Talents:</b> {talentList}</p>
                    </div>
                );
            }
            return details;
    
        } else {
            this.starship.missionPodModel = undefined;
            return undefined;
        }
    }


    render() {
        const selectedSpaceframeDetails = this.renderSpaceframeSection();
        const missionProfilesDetails = this.renderMissionProfilesSection();
        
        let spaceframeTalents = [];
        let missionPodDetails = undefined;
        if (this.starship.spaceframeModel) {
            spaceframeTalents = this.starship.spaceframeModel.talents.map(t => { return t.talent.name });
            if (this.starship.spaceframeModel.isMissionPodAvailable) {
                missionPodDetails = (<div className="panel">
                        <div className="header-small">Mission Pod</div>
                        <div className="page-text-aligned">
                            This class of starship is fitted with a single Mission Pod.
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                                {this.renderMissionPodsSection()}
                                <div className="p-0">
                                    <Button className="button-small" text="Choose" onClick={() => this.showModal('missionPod')} buttonType={true}/>
                                </div>
                            </div>
                    </div>);
                if (this.starship.missionPodModel !== undefined) {
                    this.starship.missionPodModel.talents.forEach(t => {
                        spaceframeTalents.push(t.name);
                    });
                }
            }
        }

        let talents: TalentViewModel[] = [];
        if (this.starship.missionProfileModel !== undefined) {
            this.starship.missionProfileModel.talents
                .forEach(t => {
                    if (spaceframeTalents.indexOf(t.name) === -1) {
                        talents.push(ToViewModel(t));
                    } else {
                        talents.push(ToViewModel(t, 2));
                    }
                });
        }

        let defaultTrait = character.type === CharacterType.KlingonWarrior ? ["Klingon Starship"] : ["Federation Starship"];
        if (this.starship.spaceframeModel) {
            const frame = this.starship.spaceframeModel;
            defaultTrait = frame.additionalTraits;
        }

        const refits = this.state.refitCount > 0
            ? (
                <div className="panel" style={{ marginTop: "2em" }}>
                    <div className="header-small">Refits</div>
                    <div className="page-text-aligned">
                        Your ship is entitled to <b>{this.state.refitCount}</b> {(this.state.refitCount === 1 ? ' Refit' : ' Refits')}.
                        Each refit grants a point that can be used to increase a System attribute by one.
                        No System attribute may go above 12.
                    </div>
                    <Refits refits={this.state.refits} points={this.state.refitCount} starship={this.starship}
                        onIncrease={(s) => { this.addRefit(s)} } onDecrease={(s) => { this.removeRefit(s); } }/>
                </div>
            )
            : undefined;

        const numAdditionalTalents = this.calculateTalents();
        const additionalTalentOptions = numAdditionalTalents < this.starship.scale
            ? (
                <div className="panel" style={{ marginTop: "2em" }}>
                    <div className="header-small">Additional Talents</div>
                    <div className="page-text-aligned">
                        Select {this.starship.scale - numAdditionalTalents} additional {(this.starship.scale - numAdditionalTalents === 1) ? ' talent ' : ' talents '} for your starship.
                    </div>
                    <StarshipTalentSelectionList
                        points={this.starship.scale - numAdditionalTalents}
                        talents={TalentsHelper.getStarshipTalents(this.starship)}
                        construct={this.starship}
                        onSelection={(talents) => { this._talentSelection = talents; this.starship.additionalTalents = this._talentSelection; this.forceUpdate(); } }/>
                </div>
              )
            : undefined;

        const traitList = defaultTrait.map((t, i) => {
            return (
                <li key={'trait-' + i}>
                    {t}
                </li>
            );
        });
    

        let nameSection = this.props.type === CharacterType.KlingonWarrior 
            ?   (<div className="panel">
                    <div className="page-text-aligned">
                    <SmallHeader>Name</SmallHeader>
                        Every Starship needs a name.
                        The Empire has no universal convention for the naming of ships, often naming them after locations, brave warriors, 
                        ancient ships, mythical figures, or even important objects from history, great beasts, or boasts relating to a 
                        House's conquests.
                        In many cases, these vague naming conventions overlap — a ship may be named after an ancient ship that was itself 
                        named after a location, for example — but this shouldn’t cause any issues.
                        The name should ideally be a single word or, more rarely, two.
                        <br/><br/>
                        A Klingon starship's name is prefixed with I.K.S., standing for Imperial Klingon Ship, if it is not part of a 
                        House fleet and serves the Empire as a whole. House vessels may continue to use the I.K.S. prefix, though they 
                        may also not have any prefix at all or one made by the leader of that House.
                    </div>
                    <div className="textinput-label">NAME</div>
                    <input
                        type="text"
                        onChange={(ev) => {
                            let name = (ev.target as HTMLInputElement).value;
                            this.starship.name = name;
                            let state = this.state;
                            this.setState({
                                ...state,
                                name: name
                            });
                        } }
                        value={this.state.name} />
                </div>)
            : (<div className="panel">
                    <SmallHeader>Name</SmallHeader>
                    <div className="page-text-aligned">
                        Every Starship needs a name.
                        The Federation has no universal convention for the naming of ships, often naming them after locations, important historical persons (normally only the person’s surname), ancient ships, mythical figures, or even more abstract ideals, virtues, or concepts.
                        In many cases, these vague naming conventions overlap — a ship may be named after an ancient ship that was itself named after a location, for example — but this shouldn’t cause any issues.
                        The name should ideally be a single word or, more rarely, two.
                        <br/><br/>
                        In all cases, a Federation starship’s name will be prefixed with U.S.S.
                    </div>
                    <div className="textinput-label">NAME</div>
                    <input
                        type="text"
                        onChange={(ev) => {
                            let name = (ev.target as HTMLInputElement).value;
                            this.starship.name = name;
                            let state = this.state;
                            this.setState({
                                ...state,
                                name: name
                            });
                        } }
                        value={this.state.name} />
                </div>);

        let registrySection = this.props.type === CharacterType.KlingonWarrior ? undefined
            : (<div className="panel">
            <SmallHeader>Registry Number</SmallHeader>
            <div className="page-text-aligned">
                To go with the name, each Federation starship has a registry number.
                This is a four- (for games set in the Original Series era), or five-digit number (for games set in the Next Generation era), prefixed by either the letters NCC, or NX.
                NCC is used for most ships, but NX is reserved for prototype vessels and the first ship of a class, in honor of the first Human starships able to reach warp 5. 
            </div>
            <div className="row">
                <div className="col-lg-9 mt-3">
                    <div className="textinput-label">REGISTRY NUMBER</div>
                    
                    <input
                        type="text"
                        onChange={(ev) => {
                            let registry = (ev.target as HTMLInputElement).value;
                            this.starship.registry = registry;
                            this.setState((state) => ({...state, registry: registry }));
                        } }
                        value={this.state.registry} />
                </div>
                <div className="col-lg-3 text-right mt-3">
                    <Button className="button-small" text="Random" onClick={() => this.generateRegistryNumber()} buttonType={true}/>
                </div>
            </div>
        </div>);

        return (
            <div className="page container ml-0">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Starship Creation</li>
                    </ol>
                </nav>

                <div className="starship-container">
                    <div className="starship-panel">
                        <br/><br/>
                        <div className="panel">
                            <div className="header-small">Spaceframe</div>
                            <div className="page-text-aligned">
                                The vessel's spaceframe is its basic superstructure, core systems, operation infrastructure, 
                                and all the other elements that are common to every vessel of the same class.
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                                {selectedSpaceframeDetails}
                                <div className="p-0">
                                    <div className="p-0">
                                        <Button className="button-small" text="Choose" onClick={() => this.showModal('spaceframes')} buttonType={true}/>
                                    </div>
                                    <div className="p-0 pt-2">
                                        <Button className="button-small" text="Custom" onClick={() => this.showModal('customSpaceframe')} buttonType={true}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br/><br/>
                        {missionPodDetails}
                        <div className="panel">
                            <SmallHeader>Mission Profile</SmallHeader>
                            <div className="page-text-aligned">
                                The ship’s Mission Profile is a key part of what distinguishes it from her sister ships.
                                It determines how the ship will be equipped, what facilities and personnel are assigned to
                                it, and what kind of operations it will be expected to perform.
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                                {missionProfilesDetails}
                                <div className="p-0">
                                    <Button className="button-small" text="Choose" onClick={() => this.showModal('missionProfile')} buttonType={true}/>
                                </div>
                            </div>
                        </div>
                        <br/><br/>
                        <div className="panel">
                            <SmallHeader>Talent</SmallHeader>
                            <div className="page-text-aligned">
                                Select one talent from those offered by the ship's Mission Profile.
                            </div>
                            <SingleTalentSelectionList
                                talents={talents}
                                construct={this.starship}
                                onSelection={(talent) => {
                                    if (talent != null) {
                                        this.setState((state) => ({...state, profileTalent: talent.name}));
                                        this.starship.profileTalent = talent;
                                    } else {
                                        this.setState((state) => ({...state, profileTalent: undefined}));
                                        this.starship.profileTalent = undefined;
                                    }
                                } }/>
                        </div>
                        {refits}
                        {additionalTalentOptions}
                        <br/><br/>
                        <div className="panel">
                            <SmallHeader>Traits</SmallHeader>
                            <div className="page-text-aligned">
                                You may now define additional Traits for your starship.
                                Your starship already has these traits:
                                <ul>
                                    {traitList}
                                </ul>
                                Your GM may allow you to pick additional traits that describe your
                                vessel. Examples include: Prototype, Legacy Vessel, Renowned and Long-Serving.
                            </div>
                            <textarea
                                rows={8}
                                onChange={(ev) => {
                                    this._traits = ((ev.target as HTMLTextAreaElement).value);
                                    this.starship.traits = this._traits;
                                    this.forceUpdate();
                                } }
                                onBlur={(ev) => {
                                    this._traits = ((ev.target as HTMLTextAreaElement).value.replace(/\n/g, ', '));
                                    this.forceUpdate();
                                } }
                                value={this._traits} />
                        </div>
                        <br/><br/>
                        {nameSection}
                        <br/><br/>
                        {registrySection}
                    </div>
                    <br/><br/>
                    <div className="starship-panel">
                        <div className="button-container mb-3">
                            <Button text="Export to PDF" className="button-small mr-2 mb-2" onClick={() => this.showExportDialog() } buttonType={true} />
                            <Button text="View" className="button-small mr-2 mb-2" onClick={() => this.showViewPage() } buttonType={true} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    generateRegistryNumber() {
        let registryNumber = RegistryNumber.generate(this.props.serviceYear, this.props.type, this.starship.spaceframeModel);
        this.starship.registry = registryNumber;

        this.setState((state) => ({...state, registry: registryNumber }));
    }

    showViewPage() {
        const value = marshaller.encodeStarship(this.starship);
        window.open('/view?s=' + value, "_blank");
    }

    addRefit(system: System) {
        this.starship.refits = [...this.state.refits, system];
        this.setState((state) => ({
            ...state,
            refits: [...state.refits, system]
        }));
    }

    removeRefit(system: System) {
        let initial = [ ...this.state.refits ];
        let index = initial.indexOf(system);
        if (index >= 0) {
            initial.splice(index, 1);
            this.starship.refits = initial;
            this.setState((state) => ({
                ...state,
                refits: initial
            }));
        }
    }

    closeModal() {
        ModalControl.hide();
        this.forceUpdate();
    }

    showModal(name: string) {
        ModalControl.show("lg", () => this.closeModal(), this.modalContents(name), this.modalHeader(name));
    }

    modalHeader(name: string) {
        if (name === 'spaceframes') {
            return "Select a Spaceframe";
        } else if (name === 'missionProfile') {
            return "Select a Mission Profile";
        } else if (name === 'missionPod') {
            return "Select a Mission Pod";
        } else if (name === 'customSpaceframe') {
            return "Provide details about your Spaceframe";
        } else {
            return undefined;
        }
    }

    modalContents(name: string) {
        if (name === 'spaceframes') {
            return (<SpaceframeSelection serviceYear={this.props.serviceYear} type={character.type} 
                initialSelection={this.starship.spaceframeModel} onSelection={(s) => { this.onSpaceframeSelected(s); this.closeModal() }} />);
        } else if (name === 'customSpaceframe') {
            return (<CustomSpaceframeForm  
                initialSelection={this.createOrReuseCustomSpaceframe()} onComplete={(s) => { this.onSpaceframeSelected(s); this.closeModal() }} />);
        } else if (name === 'missionProfile') {
            return (<MissionProfileSelection type={character.type} 
                initialSelection={this.starship.missionProfileModel} onSelection={(m) => { this.onMissionProfileSelected(m); this.closeModal() }} />);
        } else if (name === 'missionPod') {
            return (<MissionPodSelection starship={this.starship}
                initialSelection={this.starship.missionPodModel} onSelection={(m) => { this.onMissionPodSelected(m); this.closeModal() }} />);
        } else {
            return undefined;
        }
    }

    private showExportDialog() {
        CharacterSheetDialog.show(CharacterSheetRegistry.getStarshipSheets(this.starship, store.getState().context.era), "starship", this.starship);
    }

    createOrReuseCustomSpaceframe() {
        if (this.starship && this.starship.spaceframeModel && this.starship.spaceframeModel.isCustom) {
            return this.starship.spaceframeModel;
        } else {
            return SpaceframeModel.createCustomSpaceframe(character.type, this.props.serviceYear, [ store.getState().context.era ]);
        }
    }

    private onSpaceframeSelected(spaceframe: SpaceframeModel) {
        this.starship.spaceframeModel = spaceframe;
        this.updateSystemAndDepartments();
        this.forceUpdate();
    }

    private onMissionPodSelected(pod: MissionPod) {
        this.starship.missionPodModel = MissionPodHelper.getMissionPod(pod);
        this.updateSystemAndDepartments();
        this.forceUpdate();
    }

    private onMissionProfileSelected(profile: MissionProfileModel) {
        this.starship.missionProfileModel = profile;
        this.updateSystemAndDepartments();
        this.forceUpdate();
    }

    private updateSystemAndDepartments() {
        if (this.starship.spaceframeModel === undefined || this.starship.missionProfileModel === undefined) {
            return;
        }

        let numRefits = 0;
        if (this.starship.spaceframeModel) {
            const frame = this.starship.spaceframeModel;
            numRefits = Math.floor((this.props.serviceYear - frame.serviceYear) / 10);
        }

        this.starship.refits = [];
        Starship.updateSystemAndDepartments(this.starship);

        this.setState((state) => ({
            ...state,
            refitCount: numRefits,
            refits: []
         }));
    }

    private calculateTalents() {
        let numTalents = 1; // the mission profile talent should always be counted

        if (this.starship.spaceframeModel !== undefined) {
            this.starship.spaceframeModel.talents.forEach(t => numTalents += t.rank);

            if (this.starship.spaceframeModel.isMissionPodAvailable) {
                numTalents += 2;
            }
        }

        return numTalents;
    }
}

function mapStateToProps(state, ownProps) {
    return { 
        type: state.starship.starship.type,
        serviceYear: state.starship.starship.serviceYear
    };
}

export default connect(mapStateToProps)(StarshipPage);