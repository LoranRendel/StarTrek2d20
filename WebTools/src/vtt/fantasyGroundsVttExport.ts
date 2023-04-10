import { Character } from "../common/character";
import convert from "xml-js";
import { Attribute, AttributesHelper } from "../helpers/attributes";
import { Skill, SkillsHelper } from "../helpers/skills";
import { CHALLENGE_DICE_NOTATION, TalentsHelper } from "../helpers/talents";
import { CareersHelper } from "../helpers/careers";
import { CharacterType } from "../common/characterType";
import { Rank, RanksHelper } from "../helpers/ranks";
import { CharacterSerializer } from "../common/characterSerializer";
import { TracksHelper } from "../helpers/tracks";
import { CareerEventsHelper } from "../helpers/careerEvents";

export class FantasyGroupsVttExporter {

    private static _instance: FantasyGroupsVttExporter;

    static get instance() {
        if (FantasyGroupsVttExporter._instance == null) {
            FantasyGroupsVttExporter._instance = new FantasyGroupsVttExporter();
        }
        return FantasyGroupsVttExporter._instance;
    }


    exportCharacter(character: Character) {

        let characterNode = {
            "type": "element",
            "name": "character",
            "elements": [
                this.convertAttributes(character),
                {
                    "name": "determination",
                    "attributes": {
                        "type": "number"
                    },
                    "type": "element",
                    "elements": [{
                        "type":"text",
                        "text": 0
                    }]
                },
                this.convertCareer(character),
                this.convertCareerEvents(character),
                this.convertCareerLink(character),
                this.convertDisciplines(character),
                this.convertEnvironment(character),
                {
                    "name": "environmentlink",
                    "type": "element",
                    "attributes": {
                        "type": "windowreference"
                    },
                    "elements": [{
                        "type": "element",
                        "name": "class"
                    },{
                        "type": "element",
                        "name": "recordname"
                    }]
                },
                {
                    "name": "focuslist",
                    "type": "element",
                    "elements": [{
                        "type": "element",
                        "name": "id-00001",
                        "elements": [{
                            "name": "name",
                            "type": "element",
                            "attributes": {
                                "type": "string"
                            },
                            "elements": [{
                                "type":"text",
                                "text": character.focuses?.join("\\n") ?? ""
                            }]
                        }]
                    }]
                },
                {
                    "name": "hp",
                    "type": "element",
                    "elements": [{
                        "attributes": {
                            "type": "number"
                        },
                        "type": "element",
                        "name": "misc",
                        "elements": [{
                            "type":"text",
                            "text": 0
                        }]
                    },{
                        "attributes": {
                            "type": "number"
                        },
                        "type": "element",
                        "name": "total",
                        "elements": [{
                            "type":"text",
                            "text": character.stress
                        }]
                    },{
                        "name": "wounds",
                        "attributes": {
                            "type": "number"
                        },
                        "type": "element",
                        "elements": [{
                            "type":"text",
                            "text": 0
                        }]
                    }]
                },
                {
                    "name": "inventorylist",
                    "type": "element",
                    "elements": this.convertEquipment(character)
                },
                {
                    "name": "milestones",
                    "type": "element",
                    "elements": [{
                        "name": "arc",
                        "attributes": {
                            "type": "number"
                        },
                        "type": "element",
                        "elements": [{
                            "type":"text",
                            "text": 0
                        }]
                    },{
                        "name": "spotlight",
                        "attributes": {
                            "type": "number"
                        },
                        "type": "element",
                        "elements": [{
                            "type":"text",
                            "text": 0
                        }]
                    },{
                        "name": "standard",
                        "attributes": {
                            "type": "number"
                        },
                        "type": "element",
                        "elements": [{
                            "type":"text",
                            "text": 0
                        }]
                    }]
                },
                {
                    "name": "name",
                    "attributes": {
                        "type": "string"
                    },
                    "type": "element",
                    "elements": [{
                        "type":"text",
                        "text": character.name ?? ""
                    }]
                },
                this.convertNotes(character),
                {
                    "name": "primary_specieslink",
                    "type": "element",
                    "attributes": {
                        "type": "windowreference"
                    },
                    "elements": [{
                        "type": "element",
                        "name": "class"
                    },{
                        "type": "element",
                        "name": "recordname"
                    }]
                },
                this.convertRank(character),
                {
                    "name": "reputation",
                    "attributes": {
                        "type": "number"
                    },
                    "type": "element",
                    "elements": [{
                        "type":"text",
                        "text": character.reputation
                    }]
                },
                {
                    "name": "resistance",
                    "type": "element",
                    "elements": [{
                        "attributes": {
                            "type": "number"
                        },
                        "type": "element",
                        "name": "misc",
                        "elements": [{
                            "type":"text",
                            "text": 0
                        }]
                    },{
                        "attributes": {
                            "type": "number"
                        },
                        "type": "element",
                        "name": "total",
                        "elements": [{
                            "type":"text",
                            "text": character.resistance
                        }]
                    }]
                },
                {
                    "name": "role",
                    "attributes": {
                        "type": "string"
                    },
                    "type": "element",
                    "elements": [{
                        "type":"text",
                        "text": character.assignmentWithoutShip
                    }]
                },
                {
                    "name": "secondary_specieslink",
                    "type": "element",
                    "attributes": {
                        "type": "windowreference"
                    },
                    "elements": [{
                        "type": "element",
                        "name": "class"
                    },{
                        "type": "element",
                        "name": "recordname"
                    }]
                },
                {
                    "name": "species",
                    "attributes": {
                        "type": "string"
                    },
                    "type": "element",
                    "elements": [{
                        "type":"text",
                        "text": character.speciesName
                    }]
                },
                {
                    "name": "supportchars",
                    "type": "element"
                },
                this.convertTalents(character),
                {
                    "name": "token",
                    "attributes": {
                        "type": "token"
                    },
                    "type": "element"
                },
                this.convertTraining(character),
                {
                    "name": "traininglink",
                    "type": "element",
                    "attributes": {
                        "type": "windowreference"
                    },
                    "elements": [{
                        "type": "element",
                        "name": "class"
                    },{
                        "type": "element",
                        "name": "recordname"
                    }]
                },
                this.convertUpbringing(character),
                {
                    "name": "upbringinglink",
                    "type": "element",
                    "attributes": {
                        "type": "windowreference"
                    },
                    "elements": [{
                        "type": "element",
                        "name": "class"
                    },{
                        "type": "element",
                        "name": "recordname"
                    }]
                }
            ]
        }

        characterNode.elements = characterNode.elements.filter(e => e != null);

        let result = {
            "declaration":{"attributes":{"version":"1.0","encoding":"utf-8"}},
            "elements": [{
                "attributes": {
                    "version": "4.3",
                    "dataversion": "20230221",
                    "release": "2|CoreRPG:6"
                },
                "type": "element",
                "name": "root",
                "elements": [
                    characterNode
                ]
            }]
        };

        return convert.js2xml(result, { spaces: 2 });
    }

    convertDisciplines(character: Character) {
        let result = {
            "name": "disciplines",
            "type": "element",
            "elements": []
        };

        SkillsHelper.getSkills().forEach(s => {
            let name = Skill[s].toLowerCase();
            let discipline = {
                "name": name,
                "type": "element",
                "elements": [{
                    "name": "careerevent",
                    "attributes": {
                        "type": "number"
                    },
                    "type": "element",
                    "elements": [{
                        "type":"text",
                        "text": 0
                    }]
                },{
                    "name": "edit",
                    "attributes": {
                        "type": "number"
                    },
                    "type": "element",
                    "elements": [{
                        "type":"text",
                        "text": character.skills[s].expertise
                    }]
                },{
                    "name": "environment",
                    "attributes": {
                        "type": "number"
                    },
                    "type": "element",
                    "elements": [{
                        "type":"text",
                        "text": 0
                    }]
                },{
                    "name": "misc",
                    "attributes": {
                        "type": "number"
                    },
                    "type": "element",
                    "elements": [{
                        "type":"text",
                        "text": 0
                    }]
                },{
                    "name": "species",
                    "attributes": {
                        "type": "number"
                    },
                    "type": "element",
                    "elements": [{
                        "type":"text",
                        "text": 0
                    }]
                },{
                    "name": "total",
                    "attributes": {
                        "type": "number"
                    },
                    "type": "element",
                    "elements": [{
                        "type":"text",
                        "text": character.skills[s].expertise
                    }]
                },{
                    "name": "training",
                    "attributes": {
                        "type": "number"
                    },
                    "type": "element",
                    "elements": [{
                        "type":"text",
                        "text": 0
                    }]
                },{
                    "name": "upbringing",
                    "attributes": {
                        "type": "number"
                    },
                    "type": "element",
                    "elements": [{
                        "type":"text",
                        "text": 0
                    }]
                }]
            }
            result.elements.push(discipline);
        });

        return result;
    }

    convertCareer(character: Character) {
        let career = (character.career != null) ? CareersHelper.instance.getCareer(character.career, character) : null;
        //<career type="string">Experienced Officer</career>
        if (career) {
            return {
                "name": "career",
                "type": "element",
                "attributes": {
                    "type": "string"
                },
                "elements": [
                    {
                        "type": "text",
                        "text": career.localizedName
                    }
                ]
            }
        } else {
            return null;
        }
    }

    convertUpbringing(character: Character) {
        let upbringing = character.upbringingStep?.upbringing;
        if (upbringing) {
            return {
                "name": "upbringing",
                "type": "element",
                "attributes": {
                    "type": "string"
                },
                "elements": [
                    {
                        "type": "text",
                        "text": upbringing.name
                    }
                ]
            }
        } else {
            return null;
        }
    }

    convertTraining(character: Character) {
        let training = character.track ? TracksHelper.instance().getTrack(character.track, character) : null;
        if (training) {
            return {
                "name": "training",
                "type": "element",
                "attributes": {
                    "type": "string"
                },
                "elements": [
                    {
                        "type": "text",
                        "text": training.name
                    }
                ]
            }
        } else {
            return null;
        }
    }

    convertEnvironment(character: Character) {
        let environment = character.environmentStep ? CharacterSerializer.serializeEnvironment(character.environmentStep.environment,
            character.environmentStep.otherSpeciesWorld, character.type) : null;
        if (environment) {
            return {
                "name": "environment",
                "type": "element",
                "attributes": {
                    "type": "string"
                },
                "elements": [
                    {
                        "type": "text",
                        "text": environment
                    }
                ]
            }
        } else {
            return null;
        }
    }

    convertRank(character: Character) {
        if (character.rank != null && character.type === CharacterType.Starfleet) {
            let rank = RanksHelper.instance().getRankByName(character.rank);
            if (rank) {
                let rankNumber = undefined;
                switch (rank.id) {
                    case Rank.Ensign:
                        rankNumber = 2;
                        break;
                    case Rank.LieutenantJunior:
                        rankNumber = 3;
                        break;
                    case Rank.Lieutenant:
                        rankNumber = 4;
                        break;
                    case Rank.LieutenantCommander:
                        rankNumber = 5;
                        break;
                    case Rank.Commander:
                        rankNumber = 6;
                        break;
                    case Rank.Captain:
                    case Rank.FleetCaptain:
                        rankNumber = 7;
                        break;
                    case Rank.Commodore:
                    case Rank.RearAdmiralLower:
                        rankNumber = 8;
                        break;
                    case Rank.RearAdmiralUpper:
                    case Rank.RearAdmiral:
                    case Rank.ViceAdmiral:
                    case Rank.Admiral:
                        rankNumber = 9;
                        break;
                    default:

                }

                if (rankNumber != null) {
                    return {
                        "name": "rank",
                        "type": "element",
                        "attributes": {
                            "type": "string"
                        },
                        "elements": [
                            {
                                "type": "text",
                                "text": rankNumber
                            }
                        ]
                    }
                }
            }
        }
        return null;
    }

    convertAttributes(character: Character) {
        let result = {
            "name": "attributes",
            "type": "element",
            "elements": []
        };

        AttributesHelper.getAllAttributes().forEach(a => {
            let name = Attribute[a].toLowerCase();
            let attribute = {
                "name": name,
                "type": "element",
                "elements": [{
                    "name": "careerevent",
                    "attributes": {
                        "type": "number"
                    },
                    "type": "element",
                    "elements": [{
                        "type":"text",
                        "text": 0
                    }]
                },{
                    "name": "edit",
                    "attributes": {
                        "type": "number"
                    },
                    "type": "element",
                    "elements": [{
                        "type":"text",
                        "text": character.attributes[a].value
                    }]
                },{
                    "name": "environment",
                    "attributes": {
                        "type": "number"
                    },
                    "type": "element",
                    "elements": [{
                        "type":"text",
                        "text": 0
                    }]
                },{
                    "name": "misc",
                    "attributes": {
                        "type": "number"
                    },
                    "type": "element",
                    "elements": [{
                        "type":"text",
                        "text": 0
                    }]
                },{
                    "name": "species",
                    "attributes": {
                        "type": "number"
                    },
                    "type": "element",
                    "elements": [{
                        "type":"text",
                        "text": 0
                    }]
                },{
                    "name": "total",
                    "attributes": {
                        "type": "number"
                    },
                    "type": "element",
                    "elements": [{
                        "type":"text",
                        "text": character.attributes[a].value
                    }]
                },{
                    "name": "training",
                    "attributes": {
                        "type": "number"
                    },
                    "type": "element",
                    "elements": [{
                        "type":"text",
                        "text": 0
                    }]
                },{
                    "name": "upbringing",
                    "attributes": {
                        "type": "number"
                    },
                    "type": "element",
                    "elements": [{
                        "type":"text",
                        "text": 0
                    }]
                }]
            }
            result.elements.push(attribute);
        });

        return result;
    }

    convertCareerLink(character: Character) {
        if (character.career != null && character.type === CharacterType.Starfleet) {
            return {
                "name": "careerlink",
                "type": "element",
                "attributes": {
                    "type": "windowreference"
                },
                "elements": [{
                    "type": "element",
                    "name": "class",
                    "elements": [
                        {
                            "type": "text",
                            "text": "career"
                        }
                    ]
                },{
                    "type": "element",
                    "name": "recordname",
                    "elements": [
                        {
                            "type": "text",
                            "text": "reference.career." + this.createNumberedId(character.career + 1) + "@Star Trek Adventures Core Rulebook"
                        }
                    ]
                }]
            }
        } else {
            return {
                "name": "careerlink",
                "type": "element",
                "attributes": {
                    "type": "windowreference"
                },
                "elements": [{
                    "type": "element",
                    "name": "class"
                },{
                    "type": "element",
                    "name": "recordname"
                }]
            }
        }
    }

    createNumberedId(n: number) {
        return "id-" + (("0000" + n).slice(-4))
    }

    convertNotes(character: Character) {
        let index = 1;
        let result = {
            "name": "notes",
            "type": "element",
            "elements": []
        }

        if (character.traits) {
            result.elements.push({
                "name": this.createNumberedId(index++),
                "type": "element",
                "elements": [
                    {
                        "name": "name",
                        "type": "element",
                        "attributes": {
                            "type": "string"
                        },
                        "elements": [{
                            "type": "text",
                            "text": "Traits: " + character.traits
                        }]
                    },{
                        "name": "text",
                        "type": "element",
                        "attributes": {
                            "type": "formattedtext"
                        },
                        "elements": [{
                            "name": "p",
                            "type": "element"
                        }]
                    }

                ]
            });
        }

        if (character.pronouns) {
            result.elements.push({
                "name": this.createNumberedId(index++),
                "type": "element",
                "elements": [
                    {
                        "name": "name",
                        "type": "element",
                        "attributes": {
                            "type": "string"
                        },
                        "elements": [{
                            "type": "text",
                            "text": "Pronouns: " + character.pronouns
                        }]
                    },{
                        "name": "text",
                        "type": "element",
                        "attributes": {
                            "type": "formattedtext"
                        },
                        "elements": [{
                            "name": "p",
                            "type": "element"
                        }]
                    }

                ]
            });
        }

        character.values?.forEach(v => {
            result.elements.push({
                "name": this.createNumberedId(index++),
                "type": "element",
                "elements": [
                    {
                        "name": "name",
                        "type": "element",
                        "attributes": {
                            "type": "string"
                        },
                        "elements": [{
                            "type": "text",
                            "text": "Value: " + v
                        }]
                    },{
                        "name": "text",
                        "type": "element",
                        "attributes": {
                            "type": "formattedtext"
                        },
                        "elements": [{
                            "name": "p",
                            "type": "element"
                        }]
                    }

                ]
            });
        });

        if (character.rank != null && this.convertRank(character) == null) {
            result.elements.push({
                "name": this.createNumberedId(index++),
                "type": "element",
                "elements": [
                    {
                        "name": "name",
                        "type": "element",
                        "attributes": {
                            "type": "string"
                        },
                        "elements": [{
                            "type": "text",
                            "text": "Rank: " + character.rank
                        }]
                    },{
                        "name": "text",
                        "type": "element",
                        "attributes": {
                            "type": "formattedtext"
                        },
                        "elements": [{
                            "name": "p",
                            "type": "element"
                        }]
                    }
                ]
            });
        }

        return result;
    }


    convertCareerEvents(character: Character) {
        if (character.careerEvents?.length) {
            let result = {
                "name": "careerevent",
                "type": "element",
                "elements": []
            }

            let index = 1;
            character.careerEvents.forEach(e => {
                let event = CareerEventsHelper.getCareerEvent(e, character.type);
                if (event) {
                    let key = this.createNumberedId(index++);
                    result.elements.push({
                        "name": key,
                        "type": "element",
                        "elements": [
                            {
                                "name": "attributes",
                                "type": "element",
                                "elements": [
                                    {
                                        "name": this.createNumberedId(1),
                                        "type": "element",
                                        "elements": [
                                            {
                                                "name": "name",
                                                "type": "element",
                                                "attributes": {
                                                    "type": "string"
                                                },
                                                "elements": [{
                                                    "type": "text",
                                                    "text": event.attributes.length === 1 ? Attribute[event.attributes[0]].toLowerCase() : "any"
                                                }]
                                            }
                                        ]
                                    }
                                ]
                            },
                            this.convertToFormattedText("desc", null, event.description),
                            {
                                "name": "disciplines",
                                "type": "element",
                                "elements": [
                                    {
                                        "name": this.createNumberedId(1),
                                        "type": "element",
                                        "elements": [
                                            {
                                                "name": "name",
                                                "type": "element",
                                                "attributes": {
                                                    "type": "string"
                                                },
                                                "elements": [{
                                                    "type": "text",
                                                    "text": event.disciplines.length === 1 ? Skill[event.disciplines[0]].toLowerCase() : "any"
                                                }]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "name": "focus",
                                "type": "element",
                                "attributes": {
                                    "type": "number"
                                },
                                "elements": [{
                                    "type": "text",
                                    "text": "1"
                                }]
                            },
                            {
                                "name": "link",
                                "type": "element",
                                "attributes": {
                                    "type": "windowreference"
                                },
                                "elements": [
                                    {
                                        "name": "class",
                                        "type": "element",
                                        "elements": [{
                                            "type": "text",
                                            "text": "careerevent"
                                        }]
                                    },
                                    {
                                        "name": "recordname",
                                        "type": "element",
                                        "elements": [{
                                            "type": "text",
                                            "text": "....careerevent." + key
                                        }]
                                    }
                                ]
                            },
                            {
                                "name": "locked",
                                "type": "element",
                                "attributes": {
                                    "type": "number"
                                },
                                "elements": [{
                                    "type": "text",
                                    "text": "0"
                                }]
                            },
                            {
                                "name": "name",
                                "type": "element",
                                "attributes": {
                                    "type": "string"
                                },
                                "elements": [{
                                    "type": "text",
                                    "text": event.name
                                }]
                            },
                            {
                                "name": "trait",
                                "type": "element",
                                "attributes": {
                                    "type": "number"
                                },
                                "elements": [{
                                    "type": "text",
                                    "text": event.traitDescription ? "1" : "0"
                                }]
                            },
                            {
                                "name": "value",
                                "type": "element",
                                "attributes": {
                                    "type": "number"
                                },
                                "elements": [{
                                    "type": "text",
                                    "text": "0"
                                }]
                            }
                        ]
                    })
                }
            });


            return result;

        } else {
            return null;
        }
    }


    convertEquipment(character: Character, start: number = 0) {
        let result = [];

        character.equipment?.forEach((e, i) => {
            result.push({
                "name": this.createNumberedId(start + i + 1),
                "type": "element",
                "elements": [
                    {
                        "name": "area",
                        "attributes": {
                            "type": "number"
                        },
                        "type": "element",
                        "elements": [
                            {
                                "type": "text",
                                "text": 0
                            }
                        ]
                    },
                    {
                        "name": "category",
                        "attributes": {
                            "type": "string"
                        },
                        "type": "element",
                        "elements": [
                            {
                                "type": "text",
                                "text": "Equipment"
                            }
                        ]
                    },
                    {
                        "name": "cost",
                        "attributes": {
                            "type": "string"
                        },
                        "type": "element",
                        "elements": [
                            {
                                "type": "text",
                                "text": ""
                            }
                        ]
                    },
                    {
                        "name": "count",
                        "attributes": {
                            "type": "number"
                        },
                        "type": "element",
                        "elements": [
                            {
                                "type": "text",
                                "text": 1
                            }
                        ]
                    },
                    {
                        "name": "intense",
                        "attributes": {
                            "type": "number"
                        },
                        "type": "element",
                        "elements": [
                            {
                                "type": "text",
                                "text": 0
                            }
                        ]
                    },
                    {
                        "name": "locked",
                        "attributes": {
                            "type": "number"
                        },
                        "type": "element",
                        "elements": [
                            {
                                "type": "text",
                                "text": 0
                            }
                        ]
                    },
                    {
                        "name": "name",
                        "attributes": {
                            "type": "string"
                        },
                        "type": "element",
                        "elements": [
                            {
                                "type": "text",
                                "text": e
                            }
                        ]
                    },
                    this.convertToFormattedText("notes", e, null),
                    {
                        "name": "piercing",
                        "attributes": {
                            "type": "number"
                        },
                        "type": "element",
                        "elements": [
                            {
                                "type": "text",
                                "text": 0
                            }
                        ]
                    },
                    {
                        "name": "viscious",
                        "attributes": {
                            "type": "number"
                        },
                        "type": "element",
                        "elements": [
                            {
                                "type": "text",
                                "text": 0
                            }
                        ]
                    },
                ]
            });
        });
        return result;
    }

    convertToFormattedText(tagName: string, header: string, paragraphs: string) {
        let result = {
            "name": tagName,
            "attributes": {
                "type": "formattedtext"
            },
            "type": "element",
            "elements": [
            ]
        };

        if (header) {
            result.elements.push({
                "type": "element",
                "name": "h",
                "elements": [
                    {
                        "type": "text",
                        "text": header
                    }
                ]
            });
        }

        paragraphs?.split("\n")?.forEach(p => {
            result.elements.push({
                "type": "element",
                "name": "p",
                "elements": [
                    {
                        "type": "text",
                        "text": p
                    }
                ]
            });
        });

        return result;
    }

    convertTalents(character: Character) {
        let index = 1;
        let result = {
            "name": "talent",
            "type": "element",
            "elements": []
        }

        Object.keys(character.talents).forEach(key => {
            let characterTalent = character.talents[key];
            let talent = TalentsHelper.getTalent(key);
            if (talent) {

                result.elements.push({
                    "name": this.createNumberedId(index++),
                    "type": "element",
                    "elements": [
                        this.convertToFormattedText("desc", null, talent.description.replace(CHALLENGE_DICE_NOTATION, "CD")),
                        {
                            "name": "locked",
                            "type": "element",
                            "attributes": {
                                "type": "number"
                            },
                            "elements": [
                                {
                                    "type": "text",
                                    "text": "0"
                                }
                            ]
                        },
                        {
                            "name": "multiple",
                            "type": "element",
                            "attributes": {
                                "type": "number"
                            },
                            "elements": [
                                {
                                    "type": "text",
                                    "text": talent.maxRank > 1 ? characterTalent.rank : 0
                                }
                            ]
                        },
                        {
                            "name": "name",
                            "type": "element",
                            "attributes": {
                                "type": "string"
                            },
                            "elements": [
                                {
                                    "type": "text",
                                    "text": talent.name
                                }
                            ]
                        },
                        {
                            "name": "requirement",
                            "type": "element",
                            "attributes": {
                                "type": "string"
                            },
                            "elements": [
                                {
                                    "type": "text",
                                    "text": talent.requirement ?? "None"
                                }
                            ]
                        }
                    ]
                });
            }
        });

        return result;
    }
}