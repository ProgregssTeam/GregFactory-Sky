/*
* machines.js - Register new recipe types and machines.
*/
const ItemRecipeCapability = Java.loadClass("com.gregtechceu.gtceu.api.capability.recipe.ItemRecipeCapability");
const WorkableSteamHullRenderer = Java.loadClass("com.gregtechceu.gtceu.client.renderer.machine.WorkableSteamMachineRenderer");

GTCEuStartupEvents.registry("gtceu:recipe_type", event => {
    // sieve in exnihilo
    event.create("steamsieve", "electric")
        .category("gfs")
        .setEUIO("in")
        .setMaxIOSize(2, 9, 0, 0) // ItemI, ItemO, FluidI, FluidO
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_SIFT, FillDirection.UP_TO_DOWN)
        .setSound(GTSoundEntries.ELECTROLYZER);

    event.create("sieve", "electric")
        .category("gfs")
        .setEUIO("in")
        .setMaxIOSize(2, 30, 0, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_SIFT, FillDirection.UP_TO_DOWN)
        .setSound(GTSoundEntries.ELECTROLYZER);

    // inscriber in ae
    event.create("inscriber", "electric")
        .category("gfs")
        .setEUIO("in")
        .setMaxIOSize(3, 1, 1, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_COMPRESS, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPRESSOR);
});

GTCEuStartupEvents.registry("gtceu:machine", event => {
    var high_pressure = true;
    event.create("steamsieve", "steam", true)
        .recipeType("steamsieve", true, true)
        .renderer(() => {
            high_pressure = !high_pressure;
            return WorkableSteamHullRenderer(high_pressure, GTCEu.id("block/machines/sieve"));
        });

    event.create("sieve", "simple",
        GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
        .recipeType("sieve", true, true)
        .workableTieredHullRenderer(GTCEu.id("block/machines/sieve"));

    event.create("inscriber", "simple",
        GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV)
        .recipeType("inscriber", true, true)
        .tankScalingFunction(tier => tier * 4800)
        .workableTieredHullRenderer(GTCEu.id("block/machines/inscriber"));
});
