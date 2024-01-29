/*
* multiblocks.js - Register new recipe types and multiblocks.
*/
StartupEvents.registry("block", event => {
    event.create("gfs:void_ore_generation_core")
        .translationKey("block.gfs.void_ore_generation_core")
        .textureAll("gfs:block/void_miner/void_ore_generation_core")
        .hardness(1.0)
        .resistance(1.0)
        .soundType("metal")
        .requiresTool(true)
        .tagBlock("cucumber:mineable/paxel")
        .tagBlock("forge:mineable/wrench")
        .tagBlock("minecraft:mineable/pickaxe");
    event.create("gfs:void_ore_drill_core")
        .translationKey("block.gfs.void_ore_drill_core")
        .textureAll("gfs:block/void_miner/void_ore_drill_core_side")
        .textureSide(Direction.UP, "gfs:block/void_miner/void_ore_drill_core_bottom")
        .textureSide(Direction.DOWN, "gfs:block/void_miner/void_ore_drill_core_bottom")
        .hardness(1.0)
        .resistance(1.0)
        .soundType("metal")
        .requiresTool(true)
        .tagBlock("cucumber:mineable/paxel")
        .tagBlock("forge:mineable/wrench")
        .tagBlock("minecraft:mineable/pickaxe");
});

GTCEuStartupEvents.registry("gtceu:recipe_type", event => {
    event.create("void_miner")
        .category("gfs")
        .setEUIO("in")
        .setMaxIOSize(2, 75, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.MINER);
});

GTCEuStartupEvents.registry("gtceu:machine", event => {
    event.create("void_miner", "multiblock")
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType("void_miner")
        .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("BBBBBBB", "XGGGGGX", "XGGGGGX", "XGGGGGX", "XGGGGGX", "XGGGGGX", "XXXXXXX")
            .aisle("EXXXXXE", "GP#P#PG", "G##P##G", "G##P##G", "G##P##G", "G##D##G", "XGGGGGX")
            .aisle("EXXXXXE", "GP###PG", "G#####G", "G#####G", "G##D##G", "G#DDD#G", "XGGGGGX")
            .aisle("EXXXXXE", "GPPPPPG", "G##C##G", "G##D##G", "G#DDD#G", "GDDDDDG", "XGGGGGX")
            .aisle("EXXXXXE", "G#####G", "G#####G", "G#####G", "G##D##G", "G#DDD#G", "XGGGGGX")
            .aisle("EXXXXXE", "G#####G", "G#####G", "G#####G", "G#####G", "G##D##G", "XGGGGGX")
            .aisle("EEESEEE", "XGGGGGX", "XGGGGGX", "XGGGGGX", "XGGGGGX", "XGGGGGX", "XXXXXXX")
            .where("S", Predicates.controller(Predicates.blocks(definition.get())))
            .where("X", Predicates.blocks("gtceu:stable_machine_casing"))
            .where("B", Predicates.blocks("gtceu:stable_machine_casing")
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMinGlobalLimited(1).setPreviewCount(4))
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setExactLimit(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setExactLimit(1).setPreviewCount(1)))
            .where("E", Predicates.blocks("gtceu:stable_machine_casing")
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMinGlobalLimited(1).setMaxGlobalLimited(3).setPreviewCount(2))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1).setPreviewCount(1)))
            .where("G", Predicates.blocks("gtceu:cleanroom_glass"))
            .where("P", Predicates.blocks("gtceu:titanium_pipe_casing"))
            .where("C", Predicates.blocks("gfs:void_ore_generation_core"))
            .where("D", Predicates.blocks("gfs:void_ore_drill_core"))
            .where("#", Predicates.any())
            .build()
        )
        .workableCasingRenderer(
            "gtceu:block/casings/solid/machine_casing_stable_titanium",
            "gtceu:block/multiblock/implosion_compressor", false
        );
});
