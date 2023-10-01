
export enum HairType {
    Bald, BowlCutHair, StylishHair, TousledSidePart, SidePart, ShortAfro, VeryShortAfro, PulledBackPonyTail,
    Balding, Receding, DeLeve, LongHair1, MediumLengthFemaleSidePart, MediumMaleCenterPart,
    MediumLengthFemaleStraight, ChinLengthCombBack, ChinLengthBob, ShortTeasedOverEyeStyle, FeminineDreadStyle, ShoulderLengthMostlyStraight,
    ShoulderLengthBob, CornRows, HighForeheadEfrosianStyle, PinnedUpHairWithPart, ShavedSides,
    KlingonHair1, KlingonHair2, KlingonHair3, RomulanPeakedHair, Mature
}

export const allHairTypes = [ HairType.Bald, HairType.BowlCutHair, HairType.StylishHair, HairType.TousledSidePart,
    HairType.SidePart, HairType.ShortAfro,
    HairType.VeryShortAfro, HairType.PulledBackPonyTail, HairType.CornRows, HairType.Balding, HairType.Mature, HairType.Receding,
    HairType.DeLeve, HairType.LongHair1, HairType.MediumLengthFemaleSidePart,
    HairType.MediumMaleCenterPart, HairType.MediumLengthFemaleStraight,
    HairType.ChinLengthCombBack, HairType.ShortTeasedOverEyeStyle, HairType.ChinLengthBob,
    HairType.FeminineDreadStyle, HairType.ShoulderLengthMostlyStraight, HairType.ShoulderLengthBob,
    HairType.HighForeheadEfrosianStyle, HairType.PinnedUpHairWithPart, HairType.ShavedSides,
    HairType.KlingonHair1, HairType.KlingonHair2, HairType.KlingonHair3, HairType.RomulanPeakedHair ];


export const isTallForeheadHair = (hairType: HairType) => {
    return hairType === HairType.Bald || hairType === HairType.Balding || hairType === HairType.Mature ||
        hairType === HairType.Receding ||
        hairType === HairType.KlingonHair1 || hairType === HairType.KlingonHair2 || hairType === HairType.KlingonHair3 ||
        HairType[hairType].indexOf("HighForehead") === 0;
}