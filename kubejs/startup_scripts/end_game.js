/*
* end_game.js - Register End Game Items.
*/
StartupEvents.registry("item", event => {
    event.create("gfs:superconduct_ring")
        .translationKey("item.gfs.superconduct_ring")
        .texture("gfs:item/end_game/superconduct_ring");
});

GTCEuStartupEvents.registry("gtceu:material", event => {
    event.create("neutron_fluid")
        .fluid()
        .color(0x2020b0);
    event.create("proton_fluid")
        .fluid()
        .color(0xb02020);
});

GTCEuStartupEvents.registry("gtceu:recipe_type", event => {
    event.create("atom_breaker")
        .category("gfs")
        .setEUIO("in")
        .setMaxIOSize(1, 0, 1, 2)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_UNPACKER, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER);
    event.create("proton_confiner")
        .category("gfs")
        .setEUIO("in")
        .setMaxIOSize(0, 0, 1, 1)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_UNPACKER, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER);
    event.create("final_test")
        .category("gfs")
        .setEUIO("in")
        .setMaxIOSize(3, 1, 6, 1)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ASSEMBLER);
    event.create("emulator")
        .category("gfs")
        .setEUIO("in")
        .setMaxIOSize(2, 5, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ASSEMBLER);
});

GTCEuStartupEvents.registry("gtceu:machine", event => {
    event.create("atom_breaker", "simple", GTValues.UV)
        .recipeType("atom_breaker", true, true)
        .workableTieredHullRenderer("gtceu:block/machines/electrolyzer");
    event.create("proton_confiner", "simple", GTValues.UV)
        .recipeType("proton_confiner", true, true)
        .workableTieredHullRenderer("gtceu:block/machines/electrolyzer");
    event.create("final_test", "simple", GTValues.UV)
        .recipeType("final_test", true, true)
        .workableTieredHullRenderer("gtceu:block/machines/assembler");

    event.create("emulator", "multiblock")
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType("emulator")
        .appearanceBlock(GCyMBlocks.CASING_ATOMIC)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("XXXXXXXXX", "XGGGGGGGX", "XGGGGGGGX", "XGGGGGGGX", "XGGGGGGGX", "XGGGGGGGX", "XGGGGGGGX", "XGGGGGGGX", "XGGGGGGGX", "XGGGGGGGX", "XGGGGGGGX", "XXXXXXXXX")
            .aisle("XXXXXXXXX", "GAAAAAAAG", "GAAAAAAAG", "GAAAAAAAG", "GAAAAAAAG", "GAAAAAAAG", "GAAAAAAAG", "GAAAAAAAG", "GAAAAAAAG", "GAAAAAAAG", "GAAAAAAAG", "XGGGGGGGX")
            .aisle("XXXXXXXXX", "GAAAAAAAG", "GAAAAAAAG", "GAAAAAAAG", "GAAAAAAAG", "GAAAAAAAG", "GAALLLAAG", "GAALLLAAG", "GAALLLAAG", "GAAAAAAAG", "GAAAAAAAG", "XGGGGGGGX")
            .aisle("XXXXXXXXX", "GAARRRAAG", "GAAAAAAAG", "GAAAAAAAG", "GAAAAAAAG", "GAAALAAAG", "GALLLLLAG", "GALLLLLAG", "GALLLLLAG", "GAAALAAAG", "GAAAAAAAG", "XGGGGGGGX")
            .aisle("XXXXXXXXX", "GAARDRAAG", "GAAAWAAAG", "GAAAWAAAG", "GAAAWAAAG", "GAALWLAAG", "GALLWLLAG", "GALLLLLAG", "GALLLLLAG", "GAALLLAAG", "GAAAAAAAG", "XGGGGGGGX")
            .aisle("XXXXXXXXX", "GAARRRAAG", "GAAAAAAAG", "GAAAAAAAG", "GAAAAAAAG", "GAAALAAAG", "GALLLLLAG", "GALLLLLAG", "GALLLLLAG", "GAAALAAAG", "GAAAAAAAG", "XGGGGGGGX")
            .aisle("XXXXXXXXX", "GAAAAAAAG", "GAAAAAAAG", "GAAAAAAAG", "GAAAAAAAG", "GAAAAAAAG", "GAALLLAAG", "GAALLLAAG", "GAALLLAAG", "GAAAAAAAG", "GAAAAAAAG", "XGGGGGGGX")
            .aisle("XXXXXXXXX", "GAAAAAAAG", "GAAAAAAAG", "GAAAAAAAG", "GAAAAAAAG", "GAAAAAAAG", "GAAAAAAAG", "GAAAAAAAG", "GAAAAAAAG", "GAAAAAAAG", "GAAAAAAAG", "XGGGGGGGX")
            .aisle("XXXXSXXXX", "XGGGGGGGX", "XGGGGGGGX", "XGGGGGGGX", "XGGGGGGGX", "XGGGGGGGX", "XGGGGGGGX", "XGGGGGGGX", "XGGGGGGGX", "XGGGGGGGX", "XGGGGGGGX", "XXXXXXXXX")
            .where("S", Predicates.controller(Predicates.blocks(definition.get())))
            .where("X", Predicates.blocks("gtceu:atomic_casing")
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setExactLimit(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setExactLimit(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMinGlobalLimited(1).setMaxGlobalLimited(2).setPreviewCount(2))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1).setPreviewCount(1)))
            .where("G", Predicates.blocks("gtceu:fusion_glass"))
            .where("D", Predicates.blocks("minecraft:dirt"))
            .where("R", Predicates.blocks("minecraft:grass_block"))
            .where("W", Predicates.blocks("minecraft:oak_log"))
            .where("L", Predicates.blocks("minecraft:oak_leaves"))
            .where("A", Predicates.air())
            .build()
        )
        .workableCasingRenderer(
            "gtceu:block/casings/gcym/atomic_casing",
            "gtceu:block/multiblock/data_bank", false
        );
});
