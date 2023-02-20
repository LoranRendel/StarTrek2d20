﻿import {Career} from './careerEnum';
import {Role, RolesHelper} from './roles';
import {Era} from './eras';
import {Source} from './sources';
import {Track} from './trackEnum';
import {AlliedMilitaryDetails, Character } from '../common/character';
import { CharacterType } from '../common/characterType';
import { AlliedMilitaryType } from './alliedMilitary';
import { AllOfPrerequisite, AnyOfPrerequisite, CareersPrerequisite, CharacterTypePrerequisite, EnlistedPrerequisite, EraPrerequisite, IConstructPrerequisite, NotPrerequisite, OfficerPrerequisite, SourcePrerequisite } from './prerequisite';
import store from '../state/store';

export enum Rank {
    // Core
    Captain,
    Commander,
    LieutenantCommander,
    Lieutenant,
    LieutenantJunior,
    Ensign,
    MasterChiefPettyOfficer,
    MasterChiefSpecialist,
    SeniorChiefPettyOfficer,
    SeniorChiefSpecialist,
    ChiefPettyOfficer,
    ChiefSpecialist,
    PettyOfficer,
    Specialist,
    Yeoman,
    Crewman,

    // Command
    RearAdmiral,
    RearAdmiralLower,
    RearAdmiralUpper,
    ViceAdmiral,
    Admiral,
    FleetAdmiral,
    Commodore,
    FleetCaptain,

    Civilian,

    // KlingonCore
    Sergeant,
    Corporal,
    Bekk,

    // Player's Guide
    Colonel,
    Brigadier,
    General,

    MajorGeneral,
    LieutenantGeneral,
    LieutenantColonel,
    Major,
    FirstLieutenant,
    SecondLieutenant,
    MasterSergeant,
    StaffSergeant,
    Private,

    SubCommander,
    SubLieutenant,
    Centurion,
    Uhlan,

    GrandGul,
    Legate,
    Jagul,
    Gul,
    Dal,
    Glinn,
    Gil,
    Garresh,

    Trooper,

    Administrator,
    FleetCommander,

    CadetFourthClass,
    CadetThirdClass,
    CadetSecondClass,
    CadetFirstClass,
}


class AlliedMilitaryPrerequisite implements IConstructPrerequisite<Character> {

    private types: AlliedMilitaryType[];

    constructor(...alliedMilitary: AlliedMilitaryType[]) {
        this.types = alliedMilitary;
    }

    isPrerequisiteFulfilled(character: Character) {
        return character.type === CharacterType.AlliedMilitary
            && character.typeDetails
            &&  this.types.indexOf((character.typeDetails as AlliedMilitaryDetails).alliedMilitary.type) >= 0;
    }
    describe(): string {
        return "";
    }
}

class NoCareerEventsPrerequisite implements IConstructPrerequisite<Character> {

    isPrerequisiteFulfilled(character: Character) {
        return character.careerEvents == null ||  character.careerEvents.length === 0;
    }

    describe(): string {
        return "";
    }
}

class HasCareerEventsPrerequisite implements IConstructPrerequisite<Character> {

    isPrerequisiteFulfilled(character: Character) {
        return character.careerEvents != null && character.careerEvents.length > 0;
    }

    describe(): string {
        return "";
    }
}


class TrackPrerequisite implements IConstructPrerequisite<Character> {
    private _track: Track;

    constructor(track: Track) {
        this._track = track;
    }

    isPrerequisiteFulfilled(character: Character) {
        return this._track === character.track;
    }

    describe(): string {
        return "";
    }
}

class NotTrackPrerequisite implements IConstructPrerequisite<Character> {
    private _track: Track;

    constructor(track: Track) {
        this._track = track;
    }

    isPrerequisiteFulfilled(character: Character) {
        return this._track !== character.track;
    }
    describe(): string {
        return "";
    }
}

class RolesPrerequisite implements IConstructPrerequisite<Character> {
    private _roles: Role[];
    private noRoleAllowed: boolean;

    constructor(roles: Role[], noRoleAllowed: boolean = false) {
        this._roles = roles;
        this.noRoleAllowed = noRoleAllowed;
    }

    isPrerequisiteFulfilled(character: Character) {
        if (character.role == null) {
            return this.noRoleAllowed;
        } else {
            const role = RolesHelper.getRoleByName(character.role);
            return this._roles.indexOf(role) > -1;
        }
    }
    describe(): string {
        return "";
    }
}

class NotRolesPrerequisite implements IConstructPrerequisite<Character> {
    private _roles: Role[];

    constructor(roles: Role[]) {
        this._roles = roles;
    }

    isPrerequisiteFulfilled(character: Character) {
        const role = RolesHelper.getRoleByName(character.role);
        return this._roles.indexOf(role) === -1;
    }
    describe(): string {
        return "";
    }
}

class NotEraPrerequisite implements IConstructPrerequisite<Character> {
    private _era: Era;

    constructor(era: Era) {
        this._era = era;
    }

    isPrerequisiteFulfilled(character: Character) {
        return store.getState().context.era !== this._era;
    }
    describe(): string {
        return "";
    }
}

class RankModel {
    id: Rank;
    name: string;
    prerequisites: IConstructPrerequisite<Character>[];
    tiers: number;
    abbreviation?: string;

    constructor(id: Rank, name: string, prerequisites: IConstructPrerequisite<Character>[], abbreviation?: string, tiers: number = 1) {
        this.id = id;
        this.abbreviation = abbreviation;
        this.name = name;
        this.prerequisites = prerequisites;
        this.tiers = tiers;
    }

    get isEnlisted() {
        return this.prerequisites.filter(p => p instanceof EnlistedPrerequisite).length > 0;
    }
}

export class RanksHelper {

    private static _instance;

    static instance() {
        if (RanksHelper._instance == null) {
            RanksHelper._instance = new RanksHelper();
        }
        return RanksHelper._instance;
    }

    private _ranks: RankModel[] = [
        new RankModel(
            Rank.Captain,
            "Captain",
            [
                new OfficerPrerequisite(),
                new CareersPrerequisite(Career.Experienced, Career.Veteran),
                new RolesPrerequisite([Role.CommandingOfficer, Role.Adjutant])
            ],
            "Capt.",
            1),
        new RankModel(
            Rank.Commander,
            "Commander",
            [
                new OfficerPrerequisite(),
                new CareersPrerequisite(Career.Experienced, Career.Veteran),
                new NotRolesPrerequisite([Role.Admiral]),
                new NotPrerequisite(new AlliedMilitaryPrerequisite(AlliedMilitaryType.Maco, AlliedMilitaryType.CardassianUnion))
            ],
            "Cmdr.",
            1),
        new RankModel(
            Rank.LieutenantCommander,
            "Lieutenant Commander",
            [
                new OfficerPrerequisite(),
                new CareersPrerequisite(Career.Experienced, Career.Veteran),
                new NotRolesPrerequisite([Role.Admiral, Role.CommandingOfficer]),
                new CharacterTypePrerequisite(CharacterType.Starfleet)
            ],
            "LCdr.",
            1),
        new RankModel(
            Rank.Lieutenant,
            "Lieutenant",
            [
                new OfficerPrerequisite(),
                new NotRolesPrerequisite([Role.Admiral, Role.CommandingOfficer]),
                new AnyOfPrerequisite(
                    new AllOfPrerequisite(
                        new CharacterTypePrerequisite(CharacterType.Starfleet),
                        new CareersPrerequisite(Career.Experienced)
                    ),
                    new CharacterTypePrerequisite(CharacterType.KlingonWarrior),
                    new AlliedMilitaryPrerequisite(AlliedMilitaryType.KlingonDefenceForce, AlliedMilitaryType.RomulanStarEmpire,
                        AlliedMilitaryType.AndorianImperialGuard, AlliedMilitaryType.VulcanHighCommand, AlliedMilitaryType.BajoranMilitia)),
            ],
            "Lt."),
        new RankModel(
            Rank.LieutenantJunior,
            "Lieutenant (Junior Grade)",
            [
                new OfficerPrerequisite(),
                new CareersPrerequisite(Career.Young, Career.Experienced),
                new NotRolesPrerequisite([Role.Admiral, Role.CommandingOfficer]),
                new CharacterTypePrerequisite(CharacterType.Starfleet)
            ],
            "Lt. (J.G.)",
            1),
        new RankModel(
            Rank.Ensign,
            "Ensign",
            [
                new OfficerPrerequisite(),
                new CareersPrerequisite(Career.Young, Career.Experienced),
                new RolesPrerequisite([Role.CommunicationsOfficer, Role.FlightController, Role.OperationsManager, Role.ScienceOfficer, Role.ShipsCounselor, Role.WeaponsOfficer], true),
                new AnyOfPrerequisite(new CharacterTypePrerequisite(CharacterType.Starfleet, CharacterType.KlingonWarrior),
                    new AlliedMilitaryPrerequisite(AlliedMilitaryType.KlingonDefenceForce)),
            ],
            "Ens.",
            1),
        new RankModel(
            Rank.MasterChiefPettyOfficer,
            "Master Chief Petty Officer",
            [
                new EnlistedPrerequisite(),
                new CareersPrerequisite(Career.Experienced, Career.Veteran),
                new CharacterTypePrerequisite(CharacterType.Starfleet)
            ],
            "MCPO",
            1),
        new RankModel(
            Rank.MasterChiefSpecialist,
            "Master Chief Specialist",
            [
                new EnlistedPrerequisite(),
                new CareersPrerequisite(Career.Experienced, Career.Veteran),
                new CharacterTypePrerequisite(CharacterType.Starfleet)
            ],
            "MCSP",
            1),
        new RankModel(
            Rank.SeniorChiefPettyOfficer,
            "Senior Chief Petty Officer",
            [
                new EnlistedPrerequisite(),
                new CareersPrerequisite(Career.Experienced, Career.Veteran),
                new CharacterTypePrerequisite(CharacterType.Starfleet)
            ],
            "SCPO",
            1),
        new RankModel(
            Rank.SeniorChiefSpecialist,
            "Senior Chief Specialist",
            [
                new EnlistedPrerequisite(),
                new CareersPrerequisite(Career.Experienced, Career.Veteran),
                new CharacterTypePrerequisite(CharacterType.Starfleet)
            ],
            "SCSP",
            1),
        new RankModel(
            Rank.ChiefPettyOfficer,
            "Chief Petty Officer",
            [
                new EnlistedPrerequisite(),
                new CareersPrerequisite(Career.Experienced, Career.Veteran),
                new CharacterTypePrerequisite(CharacterType.Starfleet)
            ],
            "Chief",
            1),
        new RankModel(
            Rank.ChiefSpecialist,
            "Chief Specialist",
            [
                new EnlistedPrerequisite(),
                new CareersPrerequisite(Career.Experienced, Career.Veteran),
                new CharacterTypePrerequisite(CharacterType.Starfleet)
            ],
            "Chief",
            1),
        new RankModel(
            Rank.PettyOfficer,
            "Petty Officer",
            [
                new EnlistedPrerequisite(),
                new CareersPrerequisite(Career.Young, Career.Experienced),
                new CharacterTypePrerequisite(CharacterType.Starfleet)
            ],
            "P.O.",
            3),
        new RankModel(
            Rank.Specialist,
            "Specialist",
            [
                new EnlistedPrerequisite(),
                new CareersPrerequisite(Career.Young, Career.Experienced),
                new CharacterTypePrerequisite(CharacterType.Starfleet)
            ],
            "SP",
            3),
        new RankModel(
            Rank.Yeoman,
            "Yeoman",
            [
                new EnlistedPrerequisite(),
                new CareersPrerequisite(Career.Young, Career.Experienced),
                new CharacterTypePrerequisite(CharacterType.Starfleet)
            ],
            "Yeo",
            3),
        new RankModel(
            Rank.Crewman,
            "Crewman",
            [
                new EnlistedPrerequisite(),
                new CareersPrerequisite(Career.Young, Career.Experienced),
                new CharacterTypePrerequisite(CharacterType.Starfleet)
            ],
            "Crew.",
            3),
        new RankModel(
            Rank.RearAdmiral,
            "Rear Admiral",
            [
                new OfficerPrerequisite(),
                new CareersPrerequisite(Career.Veteran),
                new NotEraPrerequisite(Era.NextGeneration),
                new SourcePrerequisite(Source.CommandDivision, Source.PlayersGuide),
                new RolesPrerequisite([Role.Admiral]),
                new CharacterTypePrerequisite(CharacterType.Starfleet)
            ],
            "Adm.",
            1),
        new RankModel(
            Rank.RearAdmiralLower,
            "Rear Admiral, Lower Half",
            [
                new OfficerPrerequisite(),
                new CareersPrerequisite(Career.Veteran),
                new EraPrerequisite(Era.NextGeneration),
                new SourcePrerequisite(Source.CommandDivision, Source.PlayersGuide),
                new RolesPrerequisite([Role.Admiral]),
                new CharacterTypePrerequisite(CharacterType.Starfleet)
            ],
            "Adm.",
            1),
        new RankModel(
            Rank.RearAdmiral,
            "Rear Admiral, Upper Half",
            [
                new OfficerPrerequisite(),
                new CareersPrerequisite(Career.Veteran),
                new EraPrerequisite(Era.NextGeneration),
                new SourcePrerequisite(Source.CommandDivision, Source.PlayersGuide),
                new RolesPrerequisite([Role.Admiral]),
                new CharacterTypePrerequisite(CharacterType.Starfleet)
            ],
            "Adm",
            1),
        new RankModel(
            Rank.ViceAdmiral,
            "Vice-Admiral",
            [
                new OfficerPrerequisite(),
                new CareersPrerequisite(Career.Veteran),
                new SourcePrerequisite(Source.CommandDivision, Source.PlayersGuide),
                new RolesPrerequisite([Role.Admiral]),
                new CharacterTypePrerequisite(CharacterType.Starfleet)
            ],
            "Adm",
            1),
        new RankModel(
            Rank.ViceAdmiral,
            "Admiral",
            [
                new OfficerPrerequisite(),
                new CareersPrerequisite(Career.Veteran),
                new SourcePrerequisite(Source.CommandDivision, Source.PlayersGuide),
                new RolesPrerequisite([Role.Admiral]),
                new AnyOfPrerequisite(
                    new CharacterTypePrerequisite(CharacterType.Starfleet),
                    new AlliedMilitaryPrerequisite(AlliedMilitaryType.RomulanStarEmpire)
                )
            ],
            "Adm",
            1),
        new RankModel(
            Rank.ViceAdmiral,
            "Fleet Admiral",
            [
                new OfficerPrerequisite(),
                new CareersPrerequisite(Career.Veteran),
                new SourcePrerequisite(Source.CommandDivision),
                new RolesPrerequisite([Role.Admiral]),
                new CharacterTypePrerequisite(CharacterType.Starfleet)
            ],
            "Adm",
            1),
        new RankModel(
            Rank.Commodore,
            "Commodore",
            [
                new OfficerPrerequisite(),
                new CareersPrerequisite(Career.Veteran),
                new SourcePrerequisite(Source.CommandDivision, Source.PlayersGuide),
                new RolesPrerequisite([Role.CommandingOfficer]),
                new CharacterTypePrerequisite(CharacterType.Starfleet)
            ],
            "Comm",
            1),
        new RankModel(
            Rank.FleetCaptain,
            "Fleet Captain",
            [
                new OfficerPrerequisite(),
                new SourcePrerequisite(Source.CommandDivision),
                new RolesPrerequisite([Role.CommandingOfficer]),
                new CharacterTypePrerequisite(CharacterType.Starfleet)
            ],
            "Fl. Capt.",
            1),
        new RankModel(
            Rank.Civilian,
            "Civilian",
            [
                new AnyOfPrerequisite(new RolesPrerequisite([Role.DiplomaticAttache]), new TrackPrerequisite(Track.Laborer))
            ]),
        new RankModel(
            Rank.Sergeant,
            "Sergeant (bu')",
            [
                new EnlistedPrerequisite(),
                new NotTrackPrerequisite(Track.Laborer),
                new CharacterTypePrerequisite(CharacterType.KlingonWarrior)
            ],
            "bu'"),
        new RankModel(
            Rank.Corporal,
            "Corporal (Da')",
            [
                new EnlistedPrerequisite(),
                new NotTrackPrerequisite(Track.Laborer),
                new CharacterTypePrerequisite(CharacterType.KlingonWarrior)
            ],
            "Da'"),
        new RankModel(
            Rank.Bekk,
            "Bekk (beq)",
            [
                new EnlistedPrerequisite(),
                new NotTrackPrerequisite(Track.Laborer),
                new CharacterTypePrerequisite(CharacterType.KlingonWarrior)
            ],
            "beq"),
        new RankModel(
            Rank.General,
            "General",
            [
                new OfficerPrerequisite(),
                new SourcePrerequisite(Source.PlayersGuide),
                new CareersPrerequisite(Career.Veteran),
                new AnyOfPrerequisite(
                    new CharacterTypePrerequisite(CharacterType.KlingonWarrior),
                    new AlliedMilitaryPrerequisite(AlliedMilitaryType.Maco, AlliedMilitaryType.BajoranMilitia,
                        AlliedMilitaryType.AndorianImperialGuard,
                        AlliedMilitaryType.RomulanStarEmpire,
                        AlliedMilitaryType.KlingonDefenceForce)
                )
            ],
            "Gen."),
        new RankModel(
            Rank.LieutenantGeneral,
            "Lieutenant General",
            [
                new OfficerPrerequisite(),
                new SourcePrerequisite(Source.PlayersGuide),
                new CareersPrerequisite(Career.Veteran),
                new AlliedMilitaryPrerequisite(AlliedMilitaryType.Maco)
            ],
            "Lt.Gen."),
        new RankModel(
            Rank.MajorGeneral,
            "Major General",
            [
                new OfficerPrerequisite(),
                new SourcePrerequisite(Source.PlayersGuide),
                new CareersPrerequisite(Career.Veteran),
                new AlliedMilitaryPrerequisite(AlliedMilitaryType.Maco)
            ],
            "Maj.Gen."),
        new RankModel(
            Rank.Brigadier,
            "Brigadier",
            [
                new OfficerPrerequisite(),
                new SourcePrerequisite(Source.PlayersGuide),
                new CareersPrerequisite(Career.Veteran),
                new AnyOfPrerequisite(
                    new CharacterTypePrerequisite(CharacterType.KlingonWarrior),
                    new AlliedMilitaryPrerequisite(AlliedMilitaryType.Maco, AlliedMilitaryType.KlingonDefenceForce)
                )
            ],
            "Brig."),
        new RankModel(
            Rank.Colonel,
            "Colonel",
            [
                new OfficerPrerequisite(),
                new SourcePrerequisite(Source.PlayersGuide),
                new AnyOfPrerequisite(
                    new AlliedMilitaryPrerequisite(AlliedMilitaryType.Maco, AlliedMilitaryType.BajoranMilitia,
                        AlliedMilitaryType.RomulanStarEmpire, AlliedMilitaryType.KlingonDefenceForce),
                    new CharacterTypePrerequisite(CharacterType.KlingonWarrior)
                )
            ],
            "Col"),
        new RankModel(
            Rank.LieutenantColonel,
            "Lieutenant Colonel",
            [
                new OfficerPrerequisite(),
                new SourcePrerequisite(Source.PlayersGuide),
                new AlliedMilitaryPrerequisite(AlliedMilitaryType.Maco)
            ],
            "Lt.Col."),
        new RankModel(
            Rank.Major,
            "Major",
            [
                new OfficerPrerequisite(),
                new SourcePrerequisite(Source.PlayersGuide),
                new AlliedMilitaryPrerequisite(AlliedMilitaryType.Maco, AlliedMilitaryType.BajoranMilitia,
                    AlliedMilitaryType.RomulanStarEmpire, AlliedMilitaryType.VulcanHighCommand)
            ],
            "Maj."),
        new RankModel(
            Rank.Captain,
            "Captain",
            [
                new OfficerPrerequisite(),
                new SourcePrerequisite(Source.PlayersGuide),
                new AlliedMilitaryPrerequisite(AlliedMilitaryType.Maco, AlliedMilitaryType.BajoranMilitia)
            ],
            "Capt."),
        new RankModel(
            Rank.Lieutenant,
            "Lieutenant",
            [
                new OfficerPrerequisite(),
                new SourcePrerequisite(Source.PlayersGuide),
                new AlliedMilitaryPrerequisite(AlliedMilitaryType.BajoranMilitia)
            ],
            "Lt."),
        new RankModel(
            Rank.FirstLieutenant,
            "First Lieutenant",
            [
                new OfficerPrerequisite(),
                new SourcePrerequisite(Source.PlayersGuide),
                new AlliedMilitaryPrerequisite(AlliedMilitaryType.Maco)
            ],
            "1st.Lt."),
        new RankModel(
            Rank.SecondLieutenant,
            "Second Lieutenant",
            [
                new OfficerPrerequisite(),
                new SourcePrerequisite(Source.PlayersGuide),
                new AlliedMilitaryPrerequisite(AlliedMilitaryType.Maco)
            ],
            "2nd.Lt."),
        new RankModel(
            Rank.MasterSergeant,
            "Master Sergeant",
            [
                new EnlistedPrerequisite(),
                new SourcePrerequisite(Source.PlayersGuide),
                new AlliedMilitaryPrerequisite(AlliedMilitaryType.Maco)
            ],
            "Sgt."),
        new RankModel(
            Rank.Sergeant,
            "Sergeant",
            [
                new EnlistedPrerequisite(),
                new SourcePrerequisite(Source.PlayersGuide),
                new AlliedMilitaryPrerequisite(AlliedMilitaryType.Maco)
            ],
            "Sgt."),
        new RankModel(
            Rank.Corporal,
            "Corporal",
            [
                new EnlistedPrerequisite(),
                new SourcePrerequisite(Source.PlayersGuide),
                new AlliedMilitaryPrerequisite(AlliedMilitaryType.Maco)
            ],
            "Cpl."),
        new RankModel(
            Rank.Private,
            "Private",
            [
                new SourcePrerequisite(Source.PlayersGuide),
                new EnlistedPrerequisite(),
                new CareersPrerequisite(Career.Young),
                new AlliedMilitaryPrerequisite(AlliedMilitaryType.Maco)
            ],
            "Pvt."),

        // Cardassian Ranks
        new RankModel(
            Rank.GrandGul,
            "Grand Gul",
            [
                new OfficerPrerequisite(),
                new SourcePrerequisite(Source.PlayersGuide),
                new CareersPrerequisite(Career.Veteran),
                new AlliedMilitaryPrerequisite(AlliedMilitaryType.CardassianUnion)
            ]),
        new RankModel(
            Rank.Legate,
            "Legate",
            [
                new OfficerPrerequisite(),
                new SourcePrerequisite(Source.PlayersGuide),
                new CareersPrerequisite(Career.Veteran),
                new AlliedMilitaryPrerequisite(AlliedMilitaryType.CardassianUnion)
            ]),
        new RankModel(
            Rank.Jagul,
            "Jagul",
            [
                new OfficerPrerequisite(),
                new SourcePrerequisite(Source.PlayersGuide),
                new AlliedMilitaryPrerequisite(AlliedMilitaryType.CardassianUnion)
            ]),
        new RankModel(
            Rank.Gul,
            "Gul",
            [
                new OfficerPrerequisite(),
                new SourcePrerequisite(Source.PlayersGuide),
                new AlliedMilitaryPrerequisite(AlliedMilitaryType.CardassianUnion)
            ],
            "Gul"),
        new RankModel(
            Rank.Dal,
            "Dal / Dalin",
            [
                new OfficerPrerequisite(),
                new SourcePrerequisite(Source.PlayersGuide),
                new AlliedMilitaryPrerequisite(AlliedMilitaryType.CardassianUnion)
            ]),
        new RankModel(
            Rank.Glinn,
            "Glinn / Gil",
            [
                new OfficerPrerequisite(),
                new CareersPrerequisite(Career.Young, Career.Experienced),
                new SourcePrerequisite(Source.PlayersGuide),
                new AlliedMilitaryPrerequisite(AlliedMilitaryType.CardassianUnion)
            ]),
        new RankModel(
            Rank.Gil,
            "Gil",
            [
                new OfficerPrerequisite(),
                new CareersPrerequisite(Career.Young),
                new SourcePrerequisite(Source.PlayersGuide),
                new AlliedMilitaryPrerequisite(AlliedMilitaryType.CardassianUnion)
            ]),
        new RankModel(
            Rank.Gil,
            "Gil",
            [
                new EnlistedPrerequisite(),
                new SourcePrerequisite(Source.PlayersGuide),
                new AlliedMilitaryPrerequisite(AlliedMilitaryType.CardassianUnion)
            ]),
        new RankModel(
            Rank.Garresh,
            "Garresh / Gorr",
            [
                new EnlistedPrerequisite(),
                new CareersPrerequisite(Career.Young),
                new SourcePrerequisite(Source.PlayersGuide),
                new AlliedMilitaryPrerequisite(AlliedMilitaryType.CardassianUnion)
            ]),

        new RankModel(
            Rank.Trooper,
            "Trooper",
            [
                new EnlistedPrerequisite(),
                new SourcePrerequisite(Source.PlayersGuide),
                new AlliedMilitaryPrerequisite(AlliedMilitaryType.AndorianImperialGuard)
            ]),

        // Romulan Star Empire
        new RankModel(
            Rank.SubCommander,
            "Sub-Commander",
            [
                new OfficerPrerequisite(),
                new SourcePrerequisite(Source.PlayersGuide),
                new AlliedMilitaryPrerequisite(AlliedMilitaryType.RomulanStarEmpire, AlliedMilitaryType.VulcanHighCommand)
            ]),
        new RankModel(
            Rank.SubLieutenant,
            "Sub-Lieutenant",
            [
                new OfficerPrerequisite(),
                new SourcePrerequisite(Source.PlayersGuide),
                new AlliedMilitaryPrerequisite(AlliedMilitaryType.RomulanStarEmpire, AlliedMilitaryType.VulcanHighCommand)
            ]),
        new RankModel(
            Rank.Centurion, // Junior officer
            "Centurion",
            [
                new SourcePrerequisite(Source.PlayersGuide),
                new OfficerPrerequisite(),
                new CareersPrerequisite(Career.Young),
                new AlliedMilitaryPrerequisite(AlliedMilitaryType.RomulanStarEmpire)
            ]),
        new RankModel(
            Rank.Centurion, // Enlisted
            "Centurion",
            [
                new SourcePrerequisite(Source.PlayersGuide),
                new EnlistedPrerequisite(),
                new AlliedMilitaryPrerequisite(AlliedMilitaryType.RomulanStarEmpire)
            ]),
        new RankModel(
            Rank.Uhlan,
            "Uhlan",
            [
                new SourcePrerequisite(Source.PlayersGuide),
                new CareersPrerequisite(Career.Young),
                new EnlistedPrerequisite(),
                new AlliedMilitaryPrerequisite(AlliedMilitaryType.RomulanStarEmpire)
            ]),

        // Vulcan High Command
        new RankModel(
            Rank.Administrator,
            "Administrator",
            [
                new OfficerPrerequisite(),
                new SourcePrerequisite(Source.PlayersGuide),
                new CareersPrerequisite(Career.Veteran),
                new AlliedMilitaryPrerequisite(AlliedMilitaryType.VulcanHighCommand)
            ]),
        new RankModel(
            Rank.FleetCommander,
            "Fleet Commander",
            [
                new OfficerPrerequisite(),
                new SourcePrerequisite(Source.PlayersGuide),
                new CareersPrerequisite(Career.Veteran),
                new AlliedMilitaryPrerequisite(AlliedMilitaryType.VulcanHighCommand)
            ]),


        // Cadets
        new RankModel(
            Rank.CadetFourthClass,  // first year cadet
            "Cadet, fourth class",
            [
                new OfficerPrerequisite(),
                new SourcePrerequisite(Source.PlayersGuide),
                new CharacterTypePrerequisite(CharacterType.Cadet),
                new NoCareerEventsPrerequisite(),
            ],
            "Cdt."),
        new RankModel(
            Rank.CadetThirdClass, // second-year cadet
            "Cadet, third class",
            [
                new OfficerPrerequisite(),
                new SourcePrerequisite(Source.PlayersGuide),
                new CharacterTypePrerequisite(CharacterType.Cadet),
                new NoCareerEventsPrerequisite(),
            ],
            "Cdt."),
        new RankModel(
            Rank.CadetSecondClass, // third-year cadet
            "Cadet, second class",
            [
                new OfficerPrerequisite(),
                new SourcePrerequisite(Source.PlayersGuide),
                new CharacterTypePrerequisite(CharacterType.Cadet),
                new HasCareerEventsPrerequisite(),
            ],
            "Cdt."),
        new RankModel(
            Rank.CadetFirstClass, // fourth-year cadet
            "Cadet, first class",
            [
                new OfficerPrerequisite(),
                new SourcePrerequisite(Source.PlayersGuide),
                new CharacterTypePrerequisite(CharacterType.Cadet),
                new HasCareerEventsPrerequisite(),
            ],
            "Cdt."),
        ];

    getRanks(character: Character, ignorePrerequisites?: boolean) {
        let ranks: RankModel[] = [];

        for (let rank in this._ranks) {
            let r = this._ranks[rank];
            let valid = true;

            if (ignorePrerequisites === undefined || ignorePrerequisites === false) {
                r.prerequisites.forEach(req => {
                    if (!req.isPrerequisiteFulfilled(character)) {
                        valid = false;
                    }
                });
            }

            if (valid) {
                ranks.push(r);
            }
        }
        return ranks;
    }

    getRank(rank: Rank) {
        let ranks = this._ranks.filter(r => r.id === rank);
        return ranks?.length ? ranks[0] : null;
    }

    getRankByName(name: string) {
        for (const rank in this._ranks) {
            const r = this._ranks[rank];
            if (r.name === name) {
                return r;
            }
            if (r.tiers > 1) {
                for (let i = 1; i <= r.tiers; i++) {
                    let tieredName = r.name + " " + this.tierToString(i) + " Class";
                    if (tieredName === name) {
                        return r;
                    }
                    tieredName = r.name + " " + this.tierToString(i) + " class";
                    if (tieredName === name) {
                        return r;
                    }
                }
            }
        }

        return null;
    }

    applyRank(character: Character, rank: Rank, tier: number) {
        const r = this.getRank(rank);
        character.rank = r.name;

        if (r.tiers > 1) {
            character.rank += ` ${this.tierToString(tier)} Class`;
        }
    }

    private tierToString(tier: number) {
        let result = "";

        switch (tier) {
            case 1:
                result = "1st";
                break;
            case 2:
                result = "2nd";
                break;
            case 3:
                result = "3rd";
                break;
        }

        return result;
    }
}

export const getNameAndShortRankOf = (character: Character) => {
    if (character.rank) {
        let rank = RanksHelper.instance().getRankByName(character.rank);
        let abbreviation = (rank && rank.abbreviation) ? rank.abbreviation : "";
        return abbreviation + " " + character.name;
    } else {
        return character.name;
    }
}

