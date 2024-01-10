/*
* exnihilo.js - Modify recipes about Ex Nihilo.
*/
ServerEvents.recipes(event => {
    // Modify the mesh meterial
    function modify_mesh_recipe(meterial, level) {
        const mesh_id = "exnihilosequentia:" + level + "_mesh";
        event.remove({ output: mesh_id });
        event.shaped(mesh_id,
            ["ABA", "BAB", "ABA"],
            {
                A: "minecraft:string",
                B: meterial
            });
    }
    modify_mesh_recipe("minecraft:string", "string");
    modify_mesh_recipe("gtceu:tin_alloy_rod", "flint");
    modify_mesh_recipe("gtceu:steel_rod", "iron");
    modify_mesh_recipe("gtceu:aluminium_rod", "diamond");
    modify_mesh_recipe("gtceu:stainless_steel_rod", "emerald");
    modify_mesh_recipe("gtceu:titanium_rod", "netherite");

    event.shapeless("2x gtceu:tin_alloy_dust", ["gtceu:tin_dust", "gtceu:iron_dust"]);

    // Remove the default sieve recipes
    event.remove({
        mod: "exnihilosequentia",
        input: ["minecraft:gravel",
            "minecraft:sand",
            "exnihilosequentia:dust",
            "exnihilosequentia:crushed_netherrack",
            "minecraft:soulsand",
            "exnihilosequentia:crushed_end_stone"],
        not: { output: ["exnihilosequentia:dust", "minecraft:clay"] }
    });
    function add_sieve_recipe(name, input, itemchance_table, mesh) {
        // Add recipe for Ex Nihilo
        itemchance_table.forEach(itemchance =>
            event.recipes.exnihilosequentia.sifting(input, itemchance[0], [{ chance: itemchance[1], mesh: mesh }]));

        // Add recipe for GT electric machines
        let recipe = event.recipes.gtceu.sieve("_sieve_" + name + "_" + mesh)
            .itemInputs(input)
            .notConsumable("exnihilosequentia:" + mesh + "_mesh")
            .duration(80)
            .EUt(30);
        itemchance_table.forEach(itemchance =>
            recipe.chancedOutput(itemchance[0], itemchance[1] * 10000, 500));

        // Add recipe for GT steam machines, which have 9 output slots
        let steam_recipe = event.recipes.gtceu.steamsieve("_steam_sieve_" + name + "_" + mesh)
            .itemInputs(input)
            .notConsumable("exnihilosequentia:" + mesh + "_mesh")
            .duration(160)
            .EUt(7);
        for (let i = 0; i < itemchance_table.length && i < 9; i++)
            steam_recipe.chancedOutput(itemchance_table[i][0], itemchance_table[i][1] * 10000, 500);
    }

    // Gravel
    const mesh_1_gravel_table = [
        ["minecraft:flint", 0.3],
        ["gtceu:coal_crushed_ore", 0.6],
        ["gtceu:tin_crushed_ore", 0.3],
        ["gtceu:cassiterite_crushed_ore", 0.5],
        ["gtceu:iron_crushed_ore", 0.4],
        ["gtceu:magnetite_crushed_ore", 0.4],
        ["gtceu:vanadium_magnetite_crushed_ore", 0.4],
        ["gtceu:gypsum_crushed_ore", 0.2],
        ["gtceu:bentonite_crushed_ore", 0.3],
    ];

    const mesh_2_gravel_table = [
        ["minecraft:flint", 0.25],
        ["gtceu:copper_crushed_ore", 0.4],
        ["gtceu:pyrite_crushed_ore", 0.4],
        ["gtceu:goethite_crushed_ore", 0.4],
        ["gtceu:stibnite_crushed_ore", 0.4],
        ["gtceu:redstone_crushed_ore", 0.9],
        ["gtceu:calcite_crushed_ore", 0.9],
        ["gtceu:bornite_crushed_ore", 0.3],
        ["gtceu:chalcocite_crushed_ore", 0.3],
        ["gtceu:tetrahedrite_crushed_ore", 0.3],
    ];

    const mesh_3_gravel_table = [
        ["minecraft:flint", 0.1],
        ["gtceu:aluminium_crushed_ore", 0.3],
        ["gtceu:nickel_crushed_ore", 0.2],
        ["gtceu:garnierite_crushed_ore", 0.2],
        ["gtceu:pentlandite_crushed_ore", 0.2],
        ["gtceu:lead_crushed_ore", 0.2],
        ["gtceu:galena_crushed_ore", 0.2],
        ["gtceu:silver_crushed_ore", 0.25],
    ];

    const mesh_4_gravel_table = [
        ["gtceu:pyrolusite_crushed_ore", 0.4],
    ];

    const mesh_5_gravel_table = [
        ["gtceu:bauxite_crushed_ore", 0.55],
        ["gtceu:ilmenite_crushed_ore", 0.4],
    ];

    const mesh_6_gravel_table = [

    ];

    add_sieve_recipe("gravel", "minecraft:gravel", mesh_1_gravel_table, "string");
    add_sieve_recipe("gravel", "minecraft:gravel", mesh_2_gravel_table, "flint");
    add_sieve_recipe("gravel", "minecraft:gravel", mesh_3_gravel_table, "iron");
    add_sieve_recipe("gravel", "minecraft:gravel", mesh_4_gravel_table, "diamond");
    add_sieve_recipe("gravel", "minecraft:gravel", mesh_5_gravel_table, "emerald");
    add_sieve_recipe("gravel", "minecraft:gravel", mesh_6_gravel_table, "netherite");
});
