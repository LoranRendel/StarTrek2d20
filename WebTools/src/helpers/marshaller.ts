import { Base64 } from 'js-base64';
import pako from 'pako';
import { character, Character, CharacterAttribute, CharacterRank, CharacterSkill, CharacterTalent, EnvironmentStep, SpeciesStep, UpbringingStep } from '../common/character';
import { CharacterType, CharacterTypeModel } from '../common/characterType';
import { Stereotype } from '../common/construct';
import { ShipBuildType, ShipBuildTypeModel, ShipTalentDetailSelection, SimpleStats, Starship } from '../common/starship';
import AgeHelper from './age';
import { Attribute } from './attributes';
import { Career } from './careerEnum';
import { CareersHelper } from './careers';
import { allDepartments, Department } from './departments';
import { Environment, EnvironmentsHelper } from './environments';
import { MissionPod, MissionPodHelper } from './missionPods';
import { MissionProfile, MissionProfileHelper } from './missionProfiles';
import { RanksHelper } from './ranks';
import { Skill } from './skills';
import { Spaceframe } from './spaceframeEnum';
import { SpaceframeModel } from './spaceframeModel';
import { SpaceframeHelper } from './spaceframes';
import { SpeciesHelper } from './species';
import { Species } from './speciesEnum';
import { allSystems, System } from './systems';
import { TalentsHelper } from './talents';
import { TalentSelection } from './talentSelection';
import { getAllTracks, Track } from './trackEnum';
import { Upbringing, UpbringingsHelper } from './upbringings';
import { CaptureType, CaptureTypeModel, DeliverySystem, DeliverySystemModel, EnergyLoadType, EnergyLoadTypeModel, TorpedoLoadType, TorpedoLoadTypeModel, UsageCategory, Weapon, WeaponType } from './weapons';

class Marshaller {

    encodeSupportingCharacter(character: Character) {
        return this.encode(this.encodeSimpleCharacterAsJson("supportingCharacter", character));
    }

    encodeNpc(character: Character) {
        return this.encode(this.encodeSimpleCharacterAsJson("npc", character));
    }


    encodeSimpleCharacterAsJson(stereotype: string, character: Character) {
        let sheet = {
            "stereotype": stereotype,
            "type": CharacterType[character.type],
            "age": character.age ? character.age.name : undefined,
            "name": character.name,
            "attributes": this.toAttributeObject(character.attributes),
            "disciplines": this.toSkillObject(character.skills),
            "focuses": [...character.focuses]
        };

        if (character.career != null) {
            sheet["career"] = Career[character.career];
        }

        if (character.speciesStep) {
            sheet["species"] = { "primary": Species[character.speciesStep.species]};

            if (character.speciesStep.customSpeciesName && character.speciesStep.species === Species.Custom) {
                sheet["species"]["customName"] = character.speciesStep.customSpeciesName;
            }
        }

        if (character.role != null) {
            sheet["role"] = character.role;
        }
        if (character.jobAssignment != null) {
            sheet["jobAssignment"] = character.jobAssignment;
        }

        if (character.rank) {
            sheet["rank"] = {
                name: character.rank?.name,
                id: character.rank?.id
            }
        }

        let additionalTraits = this.parseTraits(character.additionalTraits);
        if (additionalTraits?.length) {
            sheet["traits"] = additionalTraits;
        }
        if (character.pronouns) {
            sheet["pronouns"] = character.pronouns;
        }

        if (character.values?.length) {
            sheet["values"] = character.values
        }

        let talents = this.toTalentList(character.talents);
        if (talents?.length) {
            sheet["talents"] = talents;
        }

        return sheet;
    }

    encodeMainCharacter(character: Character) {
        return this.encode(this.encodeMainCharacterAsJson(character));
    }

    encodeMainCharacterAsJson(character: Character) {
        let sheet = {
            "stereotype": "mainCharacter",
            "type": CharacterType[character.type],
            "upbringing": character.upbringingStep != null
                ? {
                    "id": Upbringing[character.upbringingStep.upbringing?.id],
                    "accepted": character.upbringingStep.acceptedUpbringing
                  }
                : undefined,
            "name": character.name,
            "career": character.career != null ? Career[character.career] : null,
            "careerEvents": [...character.careerEvents],
            "attributes": this.toAttributeObject(character.attributes),
            "disciplines": this.toSkillObject(character.skills),
            "focuses": [...character.focuses],
            "values": character.values
        };

        if (character.rank) {
            sheet["rank"] = {
                name: character.rank?.name,
                id: character.rank?.id
            }
        }

        if (character.reputation != null && character.reputation !== 10) {
            sheet["reputation"] = character.reputation;
        }

        if (character.speciesStep) {
            sheet["species"] = { "primary": Species[character.speciesStep.species]};

            if (character.speciesStep.customSpeciesName && character.speciesStep.species === Species.Custom) {
                sheet["species"]["customName"] = character.speciesStep.customSpeciesName;
            }

            if (character.speciesStep.mixedSpecies != null) {
                sheet["species"]["mixed"] = Species[character.speciesStep.mixedSpecies];
            }
            if (character.speciesStep.originalSpecies != null) {
                sheet["species"]["original"] = Species[character.speciesStep.originalSpecies];
            }

        }

        if (character.track != null) {
            sheet["training"] = {
                "track": Track[character.track],
                "enlisted": character.enlisted
            }
        }

        let talents = this.toTalentList(character.talents);
        if (talents?.length) {
            sheet["talents"] = talents;
        }

        let additionalTraits = this.parseTraits(character.additionalTraits);
        if (additionalTraits?.length) {
            sheet["traits"] = additionalTraits;
        }

        if (character.implants?.length) {
            sheet["implants"] = [...character.implants];
        }

        if (character.environmentStep != null) {
            let environment = {
                "id": Environment[character.environmentStep.environment]
            };
            if (character.environmentStep.otherSpeciesWorld != null) {
                environment["otherSpeciesWorld"] = character.environmentStep.otherSpeciesWorld
            }
            sheet["environment"] = environment;
        }

        if (character.age != null) {
            sheet["age"] = character.age.name;
        }
        if (character.assignedShip) {
            sheet["assignedShip"] = character.assignedShip;
        }
        if (character.jobAssignment) {
            sheet["jobAssignment"] = character.jobAssignment;
        }
        if (character.pronouns) {
            sheet["pronouns"] = character.pronouns;
        }
        if (character.lineage) {
            sheet["lineage"] = character.lineage;
        }
        if (character.house) {
            sheet["house"] = character.house;
        }
        if (character.role) {
            sheet["role"] = character.role;
        }
        if (character.track != null) {
            sheet["track"] = Track[character.track];
        }
        return sheet;
    }

    toTalentList(talents: { [name: string]: CharacterTalent }) {
        let result = [];
        for (let name in talents) {
            let talent = talents[name];
            for (let i = 0; i < talent.rank; i++) {
                result.push({ "name": name });
            }
        }
        return result;
    }

    toAttributeObject(attributes: CharacterAttribute[]) {
        let result = {};
        attributes.forEach(a => {
            result[Attribute[a.attribute]] = a.value; });
        return result;
    }

    toSkillObject(skills: CharacterSkill[]) {
        let result = {};
        skills.forEach(a => result[Skill[a.skill]] = a.expertise);
        return result;
    }

    toDepartmentObject(departments: number[]) {
        let result = {};
        allDepartments().forEach(d => result[Department[d]] = departments[d]);
        return result;
    }

    toSystemsObject(systems: number[]) {
        let result = {};
        allSystems().forEach(s => result[System[s]] = systems[s]);
        return result;
    }

    parseTraits(traits: string) {
        return traits ? traits.split(',').map(t => t.trim()).filter(t => t.length > 0) : [];
    }

    encodeStarship(starship: Starship) {
        let sheet = {
            "stereotype": "starship",
            "type": CharacterType[starship.type],
            "buildType": ShipBuildType[starship.buildType],
            "year": starship.serviceYear,
            "name": starship.name,
            "registry": starship.registry,
            "refits": [],
            "talents": [],
            "traits": this.parseTraits(starship.traits)
        };

        starship.additionalTalents.forEach(t =>  {
            sheet.talents.push({ "name": t.name });
        });
        if (starship.spaceframeModel) {
            if (starship.spaceframeModel.isCustom) {
                sheet['spaceframe'] = {
                    "custom": {
                        "name": starship.spaceframeModel.name,
                        "serviceYear": starship.spaceframeModel.serviceYear,
                        "systems": this.toSystemsObject(starship.spaceframeModel.systems),
                        "departments": this.toDepartmentObject(starship.spaceframeModel.departments),
                        "attacks": starship.spaceframeModel.attacks,
                        "scale": starship.spaceframeModel.scale,
                        "talents": starship.spaceframeModel.talents ? starship.spaceframeModel.talents.map(t => t.description) : []
                    }
                }
            } else {
                sheet['spaceframe'] = {
                    "name": Spaceframe[starship.spaceframeModel.id]
                }
            }
        }
        if (starship.missionProfileModel) {
            let temp = {
                "name": MissionProfile[starship.missionProfileModel.id]
            }
            if (starship.profileTalent) {
                temp['talent'] = { "name": starship.profileTalent.name }
            }
            sheet['missionProfile'] = temp;
        }
        if (starship.missionPodModel) {
            sheet['missionPod'] = {
                "name": MissionPod[starship.missionPodModel.id]
            }
        }
        if (starship.refits != null) {
            starship.refits.forEach(s => sheet.refits.push(System[s]));
        }
        if (starship.simpleStats != null) {
            sheet['simpleStats'] = {
                "systems": [...starship.simpleStats.systems],
                "departments": [...starship.simpleStats.departments],
                "className": starship.simpleStats.className,
                "scale": starship.simpleStats.scale
            }
        }
        if (starship.additionalWeapons.length > 0) {
            sheet['additionalWeapons'] = starship.additionalWeapons.map(w => this.encodeWeapon(w));
        }
        if (starship.talentDetailSelections) {
            sheet['talentDetails'] = starship.talentDetailSelections.map(s => ({
                weapon: this.encodeWeapon(s.weapon)
            }));
        }
        return this.encode(sheet);
    }

    private encodeWeapon(w: Weapon) {
        return {
            "usageCategory": w.usageCategory == null ? null : UsageCategory[w.usageCategory],
            "type": w.type == null ? null : WeaponType[w.type],
            "name": w.name,
            "baseDice": w.baseDice,
            "loadType": this.convertLoadType(w.loadType),
            "deliverySystem": w.deliveryType == null ? null : DeliverySystem[w.deliveryType.type]
        };
    }

    private convertLoadType(loadType: EnergyLoadTypeModel|TorpedoLoadTypeModel|CaptureTypeModel) {
        if (loadType == null) {
            return null;
        } else if (loadType instanceof EnergyLoadTypeModel) {
            let temp = loadType as EnergyLoadTypeModel;
            return EnergyLoadType[temp.type];
        } else if (loadType instanceof TorpedoLoadTypeModel) {
            let temp = loadType as TorpedoLoadTypeModel;
            return TorpedoLoadType[temp.type];
        } else if (loadType instanceof CaptureTypeModel) {
            let temp = loadType as CaptureTypeModel;
            return CaptureType[temp.type];
        } else {
            return null;
        }
    }

    encode(json: any) {
        let text = JSON.stringify(json);
        let encoded = pako.deflate(new TextEncoder().encode(text));
        let result = Base64.fromUint8Array(encoded, true);
        return result;
    }

    decode(s: string) {
        if (s) {
            try {
                let encoded = Base64.toUint8Array(s);
                let text = new TextDecoder().decode(pako.inflate(encoded));
                return JSON.parse(text);
            } catch (e) {
                return undefined;
            }
        } else {
            return undefined;
        }
    }

    decodeStarship(s: string) {
        let json = this.decode(s);
        let result = new Starship();
        result.name = json.name;
        result.registry = json.registry;
        result.traits = json.traits;
        result.serviceYear = json.year;
        CharacterTypeModel.getAllTypes().forEach(t => {
            if (CharacterType[t.type] === json.type) {
                result.type = t.type;
            }
        });
        ShipBuildTypeModel.allTypes().forEach(t => {
            if (ShipBuildType[t.type] === json.buildType) {
                result.buildType = t.type;
            }
        });
        if (json.spaceframe) {
            if (json.spaceframe.custom) {
                let frame = SpaceframeModel.createCustomSpaceframe(result.type, json.spaceframe.custom.serviceYear);
                frame.name = json.spaceframe.custom.name;
                frame.scale = json.spaceframe.custom.scale;
                frame.attacks = json.spaceframe.custom.attacks;
                allDepartments().forEach(d => frame.departments[d] = json.spaceframe.custom.departments[Department[d]]);
                allSystems().forEach(s => frame.systems[s] = json.spaceframe.custom.systems[System[s]]);
                frame.talents = [];

                if (json.spaceframe.custom.talents) {
                    json.spaceframe.custom.talents.forEach(t => {
                        let model = TalentSelection.selectTalent(t);
                        if (model) {
                            frame.talents.push(model);
                        }
                    })
                }
                result.spaceframeModel = frame;
            } else {
                result.spaceframeModel = SpaceframeHelper.instance().getSpaceframeByName(json.spaceframe.name);
            }
        }
        if (json.missionProfile && result.type != null) {
            result.missionProfileModel = MissionProfileHelper.getMissionProfileByName(json.missionProfile.name, result.type);

            if (json.missionProfile.talent) {
                let talent = TalentsHelper.getTalentViewModel(json.missionProfile.talent.name);
                if (talent) {
                    result.profileTalent = talent;
                }
            }
        }
        if (json.missionPod) {
            result.missionPodModel = MissionPodHelper.instance().getMissionPodByName(json.missionPod.name);
        }
        if (json.traits) {
            result.traits = json.traits.join(", ");
        }
        if (json.refits) {
            json.refits.forEach((r) => {
                allSystems().forEach(s => {
                    if (System[s] === r) {
                        result.refits.push(s);
                    }
                });
            });
        }

        if (json.talents) {
            json.talents.forEach(t => {
                let talent = TalentsHelper.getTalentViewModel(t.name);
                if (talent) {
                    result.additionalTalents.push(talent);
                }
            });
        }

        if (json.simpleStats) {
            result.simpleStats = new SimpleStats();
            result.simpleStats.scale = json.simpleStats.scale;
            result.simpleStats.className = json.simpleStats.className;
            result.simpleStats.systems = [...json.simpleStats.systems];
            result.simpleStats.departments = [...json.simpleStats.departments];
        }

        if (json.additionalWeapons) {
            result.additionalWeapons = json.additionalWeapons.map(j => this.decodeWeapon(j));
        }

        if (json.talentDetails) {
            result.talentDetailSelections = json.talentDetails.map(detail => {
                let w = detail.weapon;
                return new ShipTalentDetailSelection(this.decodeWeapon(w));
            });
        }

        Starship.updateSystemAndDepartments(result);

        return result;
    }

    private decodeWeapon(json) {

        let usageCategory = null;
        [UsageCategory.Character, UsageCategory.Starship].forEach(c => { if (UsageCategory[c] === json["usageCategory"]) usageCategory = c; });

        let name = json["name"];
        let baseDice = json["baseDice"];

        let weaponType = null;
        [WeaponType.MELEE, WeaponType.ENERGY, WeaponType.TORPEDO, WeaponType.MINE, WeaponType.CAPTURE].forEach(t => {
            if (WeaponType[t] === json["type"]) {
                weaponType = t;
            }
        });

        let deliverySystem = null;
        DeliverySystemModel.allTypes().forEach(d => {
            if (DeliverySystem[d.type] === json["deliverySystem"]) {
                deliverySystem = d;
            }
        });

        let loadType = null;
        if (weaponType === WeaponType.ENERGY) {
            EnergyLoadTypeModel.allTypes().forEach(l => {
                if (EnergyLoadType[l.type] === json["loadType"]) {
                    loadType = l;
                }
            });
        } else if (weaponType === WeaponType.TORPEDO) {
            TorpedoLoadTypeModel.allTypes().forEach(l => {
                if (TorpedoLoadType[l.type] === json["loadType"]) {
                    loadType = l;
                }
            });
        } else if (weaponType === WeaponType.CAPTURE) {
            CaptureTypeModel.allTypes().forEach(l => {
                if (CaptureType[l.type] === json["loadType"]) {
                    loadType = l;
                }
            });
        }

        return new Weapon(usageCategory, name, baseDice, weaponType, loadType, deliverySystem);
    }

    decodeCharacter(json: any) {
        let result = new Character();
        if (json["stereotype"] === "npc") {
            character.stereotype = Stereotype.Npc;
        } else if (json["stereotype"] === "supportingCharacter") {
            character.stereotype = Stereotype.SupportingCharacter;
        }
        let type = CharacterTypeModel.getCharacterTypeByTypeName(json.type);
        if (type) {
            result.type = type.type;
        }
        result.name = json.name;
        result.additionalTraits = json.traits ? json.traits.join(", ") : "";
        let rank = json.rank;
        if (rank) {
            if (typeof rank === "string") {
                result.rank = new CharacterRank(rank as string);
            } else if (rank.name) {
                result.rank = new CharacterRank(rank.name, rank.id);
            }
        }
        result.role = json.role;
        result.jobAssignment = json.jobAssignment;
        result.assignedShip = json.assignedShip;
        result.pronouns = json.pronouns;
        if (json.careerEvents) {
            result.careerEvents = [...json.careerEvents];
        }
        if (json.lineage) {
            result.lineage = json.lineage;
        }
        if (json.house) {
            result.house = json.house;
        }
        if (json.age) {
            let age = AgeHelper.getAge(json.age);
            if (age) {
                result.age = age;
            }
        }
        if (json.species != null) {
            if (typeof json.species === 'string') { // backward compatibility
                let speciesCode = SpeciesHelper.getSpeciesTypeByName(json.species);

                let species = SpeciesHelper.getSpeciesByType(speciesCode);
                if (species != null) {
                    result.speciesStep = new SpeciesStep(speciesCode);
                    result.addTrait(species.trait);

                    if (json.mixedSpecies != null) {
                        let speciesCode = SpeciesHelper.getSpeciesTypeByName(json.mixedSpecies);
                        if (speciesCode != null) {
                            result.speciesStep.mixedSpecies = speciesCode;
                        }
                    }
                    if (json.originalSpecies != null) {
                        let speciesCode = SpeciesHelper.getSpeciesTypeByName(json.originalSpecies);
                        if (speciesCode != null) {
                            result.speciesStep.originalSpecies = speciesCode;
                        }
                    }
                }
            } else {
                let speciesBlock = json.species;
                if (speciesBlock.primary != null) {
                    let speciesCode = SpeciesHelper.getSpeciesTypeByName(speciesBlock.primary);

                    if (speciesCode === Species.Custom) {
                        result.speciesStep = new SpeciesStep(speciesCode);
                        if (speciesBlock.customName) {
                            result.speciesStep.customSpeciesName = speciesBlock.customName;
                        }
                    } else {
                        let species = SpeciesHelper.getSpeciesByType(speciesCode);
                        if (species != null) {
                            result.speciesStep = new SpeciesStep(speciesCode);
                            result.addTrait(species.trait);
                        }
                    }

                    if (speciesBlock.mixed != null) {
                        let speciesCode = SpeciesHelper.getSpeciesTypeByName(speciesBlock.mixed);
                        if (speciesCode != null) {
                            result.speciesStep.mixedSpecies = speciesCode;
                        }
                    }
                    if (speciesBlock.original != null) {
                        let speciesCode = SpeciesHelper.getSpeciesTypeByName(speciesBlock.original);
                        if (speciesCode != null) {
                            result.speciesStep.originalSpecies = speciesCode;
                        }
                    }
                }

            }
        }
        if (json.career) {
            let career = CareersHelper.instance.getCareerByTypeName(json.career, result.type);
            result.career = career ? career.id : undefined;
        }
        if (json.implants) {
            result.implants = [...json.implants];
        }
        if (json.reputation != null) {
            result.reputation = json.reputation;
        }
        if (json.training != null) {
            let trackAsString = json.training.track;
            getAllTracks().forEach(t => {
                if (Track[t] === trackAsString) {
                    result.track = t;
                }
            });
            result.enlisted = json.training.enlisted;
        } else {
            let rank = result.rank == null ? null : RanksHelper.instance().getRankByName(result.rank?.name);
            if (rank) {
                result.enlisted = rank.isEnlisted;
            }
        }
        result.focuses = [...json.focuses];
        if (json.attributes) {
            result.attributes.forEach(a => {
                let value = json.attributes[Attribute[a.attribute]];
                if (value != null) {
                    a.value = value;
                }
            });
        }
        if (json.disciplines) {
            result.skills.forEach(s => {
                let value = json.disciplines[Skill[s.skill]];
                if (value != null) {
                    s.expertise = value;
                }
            });
        }
        if (json.values) {
            json.values.forEach(v => {
                result.addValue(v);
            });
        }
        if (json.environment) {
            let environment = EnvironmentsHelper.getEnvironmentByTypeName(json.environment.id, result.type);
            if (environment) {
                if (environment.id === Environment.AnotherSpeciesWorld) {
                    result.environmentStep = new EnvironmentStep(environment.id, json.environment.otherSpeciesWorld);
                } else {
                    result.environmentStep = new EnvironmentStep(environment.id);
                }
            }
        }

        if (json.upbringing) {
            let step = new UpbringingStep(UpbringingsHelper.getUpbringingByTypeName(json.upbringing.id, result.type), json.upbringing.accepted);
            result.upbringingStep = step;
        }

        if (json.talents) {
            json.talents.forEach(t => {
                let talent = TalentsHelper.getTalentViewModel(t.name);
                if (talent) {
                    result.addTalent(talent);
                }
            });
        }
        return result;
    }
}

export const marshaller = new Marshaller();
