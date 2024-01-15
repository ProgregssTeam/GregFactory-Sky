/*
* industrialforegoing.js - Modify recipes about Industrial Foregoing.
*/
ServerEvents.recipes(event => {
    function remove_recipe(name) {
        event.remove({ output: name });
    }
    const remove_items = [
        "industrialforegoing:machine_frame_pity"
    ];
    remove_items.forEach(remove_recipe);

    event.replaceInput({ mod: "industrialforegoing" }, "industrialforegoing:plastic", "gtceu:polyethylene_plate");
    event.recipes.gtceu.assembler("industrialforegoing:machine_frame_pity")
        .itemInputs("gtceu:mv_machine_hull", "4x gtceu:steel_frame", "4x #forge:circuits/mv")
        .inputFluids(Fluid.of("gtceu:polyethylene", 288))
        .itemOutputs("industrialforegoing:machine_frame_pity")
        .EUt(120)
        .duration(200);
});