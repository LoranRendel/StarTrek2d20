import React from "react";
import { connect } from "react-redux";
import { CharacterTypeModel } from "../../common/characterType";
import { navigateTo, Navigation } from "../../common/navigator";
import { ShipBuildType, ShipBuildTypeModel, SimpleStats } from "../../common/starship";
import { Button } from "../../components/button";
import { DropDownInput } from "../../components/dropDownInput";
import { Header } from "../../components/header";
import { Era } from "../../helpers/eras";
import { Source } from "../../helpers/sources";
import { SpaceframeModel } from "../../helpers/spaceframeModel";
import { PageIdentity } from "../../pages/pageIdentity";
import { hasSource } from "../../state/contextFunctions";
import { createNewStarship, setStarshipSpaceframe } from "../../state/starshipActions";
import store from "../../state/store";
import { BuildPoints } from "../model/buildPoints";
import { ShipBuildWorkflow } from "../model/shipBuildWorkflow";

interface StarshipTypeSelectionPageProperties {
    era: Era
}
interface StarshipTypeSelectionPageState {
    type?: CharacterTypeModel;
    campaignYear: number;
    buildType: ShipBuildTypeModel;
}

class StarshipTypeSelectionPage extends React.Component<StarshipTypeSelectionPageProperties, StarshipTypeSelectionPageState> {

    constructor(props) {
        super(props);
        this.state = {
            type: CharacterTypeModel.getStarshipTypes()[0],
            campaignYear: this.eraDefaultYear(this.props.era),
            buildType: ShipBuildTypeModel.allTypes()[ShipBuildType.Starship]
        }
    }

    render() {
        let typeSelection = hasSource(Source.KlingonCore)
            ? (<div className="my-3">
                    <Header level={2}>Ship Type</Header>
                    <p>What type of starship is this?</p>
                    <div>
                        <DropDownInput
                            items={ CharacterTypeModel.getStarshipTypes().map((t, i) => t.name) }
                            defaultValue={ this.state.type.name }
                            onChange={(index) => this.selectType(CharacterTypeModel.getStarshipTypes()[index] ) }/>
                    </div>
                </div>)
            : undefined;

        let buildTypeSelection = (<div className="my-3">
                <Header level={2}>Size Category</Header>
                <p>How big of a vessel is it?</p>
                <div>
                    <DropDownInput
                        items={ ShipBuildTypeModel.allTypes().map((t, i) => t.name) }
                        defaultValue={ this.state.buildType.name }
                        onChange={(index) => this.selectBuildType(ShipBuildTypeModel.allTypes()[index] ) }/>
                </div>
            </div>);

        return (
            <div className="page container ml-0">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html" onClick={(e) => navigateTo(e, PageIdentity.Selection)}>Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Starship Creation</li>
                    </ol>
                </nav>

                <Header>Starship Type Selection</Header>
                <div>
                    {this.renderServiceYear()}
                    <div className="row">
                        <div className="col-lg-6">
                            {typeSelection}
                        </div>
                        <div className="col-lg-6">
                            {buildTypeSelection}
                        </div>
                    </div>
                    <Button onClick={() => this.startWorkflow()} text='CREATE' />
                </div>
            </div>
        );
    }

    selectType(typeModel: CharacterTypeModel) {
        this.setState((state) => ({...state, type: typeModel}));
    }

    selectBuildType(buildType: ShipBuildTypeModel) {
        this.setState((state) => ({...state, buildType: buildType}));
    }

    startWorkflow() {
        if (this.state.buildType != null && this.state.buildType.type !== ShipBuildType.Starship) {
            let workflow = ShipBuildWorkflow.createSmallCraftBuildWorkflow(this.state.buildType.type);
            let stats = new SimpleStats();
            stats.scale = this.state.buildType.type === ShipBuildType.Runabout ? 2 : 1;
            stats.systems = BuildPoints.allocatePointsEvenly(BuildPoints.systemPointsForType(
                this.state.buildType.type, this.state.campaignYear, this.state.type.type, stats.scale));
            stats.departments = BuildPoints.allocatePointsEvenly(BuildPoints.departmentPointsForType(
                this.state.buildType.type));
            store.dispatch(createNewStarship(this.state.type.type, this.state.campaignYear, stats, workflow, this.state.buildType.type));
            Navigation.navigateToPage(workflow.currentStep().page);
       } else if (this.state.type != null) {
            let workflow = ShipBuildWorkflow.createStarshipBuildWorkflow();
            store.dispatch(createNewStarship(this.state.type.type, this.state.campaignYear, undefined, workflow));

            let scale = 3;
            let systems = BuildPoints.allocatePointsEvenly(BuildPoints.systemPointsForType(
                ShipBuildType.Starship, this.state.campaignYear, this.state.type.type, scale));
            let departments = BuildPoints.allocatePointsEvenly(BuildPoints.departmentPointsForType(
                ShipBuildType.Starship))
            let spaceframe = SpaceframeModel.createCustomSpaceframe(this.state.type?.type, this.state.campaignYear, systems, departments, scale);
            store.dispatch(setStarshipSpaceframe(spaceframe));

            Navigation.navigateToPage(workflow.currentStep().page);
        }
    }

    renderServiceYear() {
        return (<div className="my-5">
                    <Header level={2}>Campaign Year</Header>
                    <div>
                        <p>What is the current year in your campaign? You'll probably need to consult your GM.</p>
                        <p>A default year will be filled in automatically dependent on the chosen Era.</p>
                    </div>
                    <div className="d-sm-flex align-items-stretch">
                        <label htmlFor="campaignYear" className="textinput-label">YEAR</label>
                        <input
                            id="campaignYear"
                            type="number"
                            defaultValue={this.state.campaignYear.toString()}
                            onChange={(e) => {
                                let value = e.target.value;
                                this.setState((state) => ({...state, campaignYear: parseInt(value)}))
                            } }
                            />
                    </div>
                </div>);
    }

    private eraDefaultYear(era: Era) {
        switch (era) {
            case Era.Enterprise:
                return 2155;
            case Era.OriginalSeries:
                return 2269;
            case Era.NextGeneration:
                return 2371;
        }
    }
}

function mapStateToProps(state, ownProps) {
    return {
        era: state.context.era
    };
}

export default connect(mapStateToProps)(StarshipTypeSelectionPage);