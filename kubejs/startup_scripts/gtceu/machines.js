GTCEuStartupEvents.registry("gtceu:recipe_type", event => {
    event.create("steamsieve", "steam")
        .category("gfs")
        .setEUIO("in")
        .setMaxIOSize(2, 30, 0, 0) //Max Item Inputs, Max Item Outputs, Max Fluid Inputs, Max Fluid Outputs
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_SIFT, FillDirection.UP_TO_DOWN)
        .setSound(GTSoundEntries.ELECTROLYZER);
    event.create("sieve", "electric")
        .category("gfs")
        .setEUIO("in")
        .setMaxIOSize(2, 30, 0, 0) //Max Item Inputs, Max Item Outputs, Max Fluid Inputs, Max Fluid Outputs
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_SIFT, FillDirection.UP_TO_DOWN)
        .setSound(GTSoundEntries.ELECTROLYZER);

    event.create("inscriber", "electric")
        .category("gfs")
        .setEUIO("in")
        .setMaxIOSize(3, 1, 1, 0) //Max Item Inputs, Max Item Outputs, Max Fluid Inputs, Max Fluid Outputs
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_COMPRESS, FillDirection.UP_TO_DOWN)
        .setSound(GTSoundEntries.COMPRESSOR);
});

GTCEuStartupEvents.registry("gtceu:machine", event => {
    event.create("steamsieve", "steam", true)
        .recipeType("sieve", true, true);

    event.create("sieve", "simple",
        GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
        .recipeType("sieve", true, true)
        .workableTieredHullRenderer(GTCEu.id("block/machines/test_machine"));

    event.create("inscriber", "simple",
        GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
        .recipeType("inscriber", true, true)
        .tankScalingFunction(tier => tier * 4800)
        .workableTieredHullRenderer(GTCEu.id("block/machines/test_machine"));
});
