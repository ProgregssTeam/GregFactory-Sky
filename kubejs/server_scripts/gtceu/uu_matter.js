/*
* uu_matter.js - Add recipes for our new matters.
*/
ServerEvents.recipes(event => {
    event.shapeless("9x minecraft:slime_ball", "minecraft:slime_block")
    event.recipes.gtceu.mixer("gtceu:mysterious_matter")
        .itemInputs("gtceu:exquisite_rare_blue_matter_gem",
            "16x minecraft:slime_ball",
            "32x #forge:gems",
            "32x #forge:plates")
        .inputFluids(Fluid.of("minecraft:milk", 4000), Fluid.of("gtceu:rocket_fuel", 8000))
        .outputFluids(Fluid.of("gtceu:mysterious_matter", 4000))
        .EUt(1920)
        .duration(1200);
    event.recipes.gtceu.chemical_reactor("gtceu:overworld_matter")
        .itemInputs("64x gtceu:stone_dust")
        .inputFluids(Fluid.of("gtceu:mysterious_matter", 100))
        .outputFluids(Fluid.of("gtceu:overworld_matter", 1000))
        .EUt(1920)
        .duration(200);
    event.recipes.gtceu.chemical_reactor("gtceu:nether_matter")
        .itemInputs("64x gtceu:netherrack_dust")
        .inputFluids(Fluid.of("gtceu:mysterious_matter", 100))
        .outputFluids(Fluid.of("gtceu:nether_matter", 1000))
        .EUt(1920)
        .duration(200);
    event.recipes.gtceu.chemical_reactor("gtceu:end_matter")
        .itemInputs("64x gtceu:endstone_dust")
        .inputFluids(Fluid.of("gtceu:mysterious_matter", 100))
        .outputFluids(Fluid.of("gtceu:end_matter", 1000))
        .EUt(1920)
        .duration(200);
});

ItemEvents.foodEaten("gtceu:exquisite_strange_blue_matter_gem", event => {
    var player = event.player;
    player.tell("Hmmmmmmmmmmmm...");
    player.give("128x gtceu:rare_blue_matter_dust");
});
