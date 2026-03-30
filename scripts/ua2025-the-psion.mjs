const MODULE_ID = "ua2025-the-psion";

Hooks.once("init", () => {
	CONFIG.DND5E.featureTypes.class.subtypes.psionicDiscipline =
		"FEATURES.PSIONICDISCIPLINE";
	CONFIG.DND5E.featureTypes.feat.subtypes.wildTalentFeat =
		"FEATURES.WILDTALENTFEAT";

	game.settings.register(MODULE_ID, "lastVersion", {
		name: "Last Version",
		hint: "The last version checked against to determine whether to show the changelog.",
		scope: "world",
		config: false,
		type: String,
		default: "2.0.1",
	});

	console.log("ua2025-the-psion.mjs hooked");
});

Hooks.once("ready", async () => {
	const currentVersion = game.modules.get(MODULE_ID).version;
	const lastVersion = game.settings.get(MODULE_ID, "lastVersion");
	if (foundry.utils.isNewerVersion(currentVersion, lastVersion)) {
		const journal = await fromUuid(
			"Compendium.ua2025-the-psion.content.JournalEntry.uaPsionChangelog",
		);
		const page = journal.pages.contents.at(-1);
		journal.sheet.render(true, { pageId: page.id });
		game.settings.set(MODULE_ID, "lastVersion", currentVersion);
	}
});
