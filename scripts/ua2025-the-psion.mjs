Hooks.once("init", () => {
  CONFIG.DND5E.featureTypes.class.subtypes.psionicDiscipline = "FEATURES.PSIONICDISCIPLINE";
  CONFIG.DND5E.featureTypes.feat.subtypes.wildTalentFeat = "FEATURES.WILDTALENTFEAT";
  console.log("ua2025-the-psion.js hooked");
});