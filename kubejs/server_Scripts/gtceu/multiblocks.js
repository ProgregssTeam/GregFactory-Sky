/*
* multiblocks.js - Add recipes for our new multiblocks.
*/
ServerEvents.recipes(event => {
    function add_void_miner_recipe(name, eu, circuit, table) {
        let recipe = event.recipes.gtceu.void_miner("void_miner_" + name + "_" + circuit)
            .circuit(circuit)
            .inputFluids(Fluid.of('gtceu:drilling_fluid', 100))
            .duration(30)
            .EUt(eu);
        table.forEach(itemchance =>
            recipe.chancedOutput(itemchance[0], itemchance[1] * 10000, 500));
    }
    const ev_table_overworld = [
        ["gtceu:coal_ore", 0.2],
        ["gtceu:tin_ore", 0.1],
        ["gtceu:cassiterite_ore", 0.1],
        ["gtceu:copper_ore", 0.1],
        ["gtceu:bornite_ore", 0.05],
        ["gtceu:chalcocite_ore", 0.05],
        ["gtceu:chalcopyrite_ore", 0.05],
        ["gtceu:tetrahedrite_ore", 0.05],
        ["gtceu:iron_ore", 0.1],
        ["gtceu:magnetite_ore", 0.1],
        ["gtceu:vanadium_magnetite_ore", 0.1],
        ["gtceu:hematite_ore", 0.05],
        ["gtceu:gold_ore", 0.05],
        ["gtceu:diamond_ore", 0.02],
        ["gtceu:aluminium_ore", 0.05],
        ["gtceu:bauxite_ore", 0.05],
        ["gtceu:ilmenite_ore", 0.05],
    ];
    add_void_miner_recipe("ev", 1920, 0, ev_table_overworld);
});