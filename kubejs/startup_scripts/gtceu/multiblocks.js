/*
* multiblocks.js - Register new recipe types and multiblocks.
*/
GTCEuStartupEvents.registry("gtceu:recipe_type", event => {
    event.create("void_miner")
        .category("gfs")
        .setEUIO("in")
        .setMaxIOSize(2, 30, 1, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.MINER);
});

GTCEuStartupEvents.registry("gtceu:machine", event => {
    event.create("void_miner", "multiblock")
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType("void_miner")
        .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("XXX", "#F#", "#F#", "#F#", "###", "###", "###")
            .aisle("XXX", "FCF", "FCF", "FCF", "#F#", "#F#", "#F#")
            .aisle("XSX", "#F#", "#F#", "#F#", "###", "###", "###")
            .where("S", Predicates.controller(Predicates.blocks(definition.get())))
            .where("X", Predicates.blocks("gtceu:clean_machine_casing")
                .or(Predicates.abilities(PartAbility.EXPORT_ITEMS).setMaxGlobalLimited(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_ITEMS).setExactLimit(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.IMPORT_FLUIDS).setExactLimit(1).setPreviewCount(1))
                .or(Predicates.abilities(PartAbility.INPUT_ENERGY).setMinGlobalLimited(1).setMaxGlobalLimited(3).setPreviewCount(1)))
            .where("C", Predicates.blocks("gtceu:clean_machine_casing"))
            .where("F", Predicates.frames(GTMaterials.StainlessSteel))
            .where("#", Predicates.any())
            .build()
        )
        .workableCasingRenderer(
            "gtceu:block/casings/solid/machine_casing_solid_steel",
            "gtceu:block/multiblock/implosion_compressor", false
        );
});