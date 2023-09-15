import { ConstructType } from "../../common/construct";
import { IPageFactoryRegistry } from "../../pages/pageFactory";
import { PageIdentity } from "../../pages/pageIdentity";
import SoloConstructTypePage from "./soloConstructTypePage";
import SoloEnvironmentDetailsPage from "./soloEnvironmentDetailsPage";
import SoloEnvironmentPage from "./soloEnvironmentPage";
import SoloEraSelectionPage from "./soloEraSelectionPage";
import SoloSpeciesDetailsPage from "./soloSpeciesDetailsPage";
import SoloSpeciesPage from "./soloSpeciesPage";
import SoloEarlyOutlookPage from "./soloEarlyOutlookPage";
import SoloEarlyOutlookDetailsPage from "./soloEarlyOutlookDetailsPage";
import SoloEducationTypePage from "./soloEducationTypePage";
import SoloEducationPage from "./soloEducationPage";
import SoloEducationDetailsPage from "./soloEducationDetailsPage";
import SoloCareerLengthPage from "./soloCareerLengthPage";
import SoloCareerEventPage from "./soloCareerEventPage";
import { StepContext } from "../../state/characterActions";
import SoloCareerLengthDetailsPage from "./soloCareerLengthDetailsPage";
import SoloCareerEventDetailPage from "./soloCareerEventDetailPage";
import SoloFinishingTouchesPage from "./soloFinishingTouchesPage";
import SoloFinalPage from "./soloFinalPage";

export class CaptainsLogPageFactory implements IPageFactoryRegistry {

    private static _instance;

    static get instance() {
        if (CaptainsLogPageFactory._instance == null) {
            CaptainsLogPageFactory._instance = new CaptainsLogPageFactory();
        }
        return CaptainsLogPageFactory._instance;
    }

    private factories = {};

    constructor() {
        this.factories = {};

        this.factories[PageIdentity.SoloConstructType] = () => <SoloConstructTypePage />;
        this.factories[PageIdentity.SoloCharacterEra] = () => <SoloEraSelectionPage type={ConstructType.Character} />;
        this.factories[PageIdentity.SoloSpecies] = () => <SoloSpeciesPage />;
        this.factories[PageIdentity.SoloSpeciesDetails] = () => <SoloSpeciesDetailsPage />;
        this.factories[PageIdentity.SoloEnvironment] = () => <SoloEnvironmentPage />;
        this.factories[PageIdentity.SoloEnvironmentDetails] = () => <SoloEnvironmentDetailsPage />;
        this.factories[PageIdentity.SoloEarlyOutlook] = () => <SoloEarlyOutlookPage />;
        this.factories[PageIdentity.SoloEarlyOutlookDetails] = () => <SoloEarlyOutlookDetailsPage />;
        this.factories[PageIdentity.SoloEducationType] = () => <SoloEducationTypePage />;
        this.factories[PageIdentity.SoloEducationPage] = () => <SoloEducationPage />;
        this.factories[PageIdentity.SoloEducationDetailsPage] = () => <SoloEducationDetailsPage />;
        this.factories[PageIdentity.SoloCareerLength] = () => <SoloCareerLengthPage />;
        this.factories[PageIdentity.SoloCareerLengthDetails] = () => <SoloCareerLengthDetailsPage />;
        this.factories[PageIdentity.SoloCareerEvent1] = () => <SoloCareerEventPage context={StepContext.CareerEvent1} />;
        this.factories[PageIdentity.SoloCareerEventDetails1] = () => <SoloCareerEventDetailPage context={StepContext.CareerEvent1} />;
        this.factories[PageIdentity.SoloCareerEvent2] = () => <SoloCareerEventPage context={StepContext.CareerEvent2} />;
        this.factories[PageIdentity.SoloCareerEventDetails2] = () => <SoloCareerEventDetailPage context={StepContext.CareerEvent2} />;
        this.factories[PageIdentity.SoloFinishingTouches] = () => <SoloFinishingTouchesPage />;
        this.factories[PageIdentity.SoloFinal] = () => <SoloFinalPage />;
    }

    findFactory(page: PageIdentity) {
        return this.factories[page];
    }
}