Hooks.once("init", () => {
  console.log("psion_mods.js hooked");
  CONFIG.DND5E.featureTypes.class.subtypes.psionicDiscipline = "Psionic Discipline";
  CONFIG.DND5E.featureTypes.feat.subtypes.wildTalentFeat = "Wild Talent Feat";

});