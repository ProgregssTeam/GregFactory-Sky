/*
* uu_matter.js - Add recipes for our new matters.
*/
ServerEvents.recipes(event => {
    event.shapeless("9x minecraft:slime_ball", "minecraft:slime_block")
    event.recipes.gtceu.mixer("gtceu:mysterious_matter")
        .itemInputs("gtceu:exquisite_rare_blue_matter_gem",
            "16x minecraft:slime_ball",
            "64x gtceu:stone_dust",
            "8x gtceu:exquisite_coal_gem")
        .inputFluids(Fluid.of("minecraft:milk", 4000), Fluid.of("gtceu:rocket_fuel", 8000))
        .outputFluids(Fluid.of("gtceu:mysterious_matter", 12000))
        .EUt(1920)
        .duration(2000);
});

ItemEvents.foodEaten("gtceu:exquisite_strange_blue_matter_gem", event => {
    var player = event.player;
    player.tell("Hmmmmmmmmmmmm...");
    player.give("128x gtceu:rare_blue_matter_dust");
});
