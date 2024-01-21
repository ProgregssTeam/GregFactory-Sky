/*
* uu_matter.js - Add recipes for our new matters.
*/
ServerEvents.recipes(event => {
    event.shapeless("9x minecraft:slime_ball", "minecraft:slime_block")
    event.recipes.gtceu.mixer("gtceu:mysterious_matter")
        .itemInputs("16x minecraft:slime_ball", "64x gtceu:stone_dust", "8x gtceu:exquisite_coal_gem")
        .inputFluids(Fluid.of("minecraft:milk", 4000), Fluid.of("gtceu:rocket_fuel", 8000))
        .outputFluids(Fluid.of("gtceu:mysterious_matter", 12000))
        .EUt(1920)
        .duration(2000);
});