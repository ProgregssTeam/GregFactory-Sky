ServerEvents.recipes(event => {
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

    event.remove({
        mod: "exnihilosequentia",
        input: ["minecraft:gravel",
            "minecraft:sand",
            "exnihilosequentia:dust",
            "exnihilosequentia:crushed_netherrack",
            "minecraft:soulsand",
            "exnihilosequentia:crushed_end_stone"]
    });
    function add_sift_recipe(input, itemchance, mesh) {
        event.recipes.exnihilosequentia.sifting(input,
            itemchance[0], [{ chance: itemchance[1], mesh: mesh }]);
    }

    const mesh_1_gravel_table = [
        ["minecraft:flint", 0.3],
        ["gtceu:tin_crushed_ore", 0.3],
        ["gtceu:cassiterite_crushed_ore", 0.5],
        ["gtceu:coal_crushed_ore", 0.6],
        ["gtceu:iron_crushed_ore", 0.4],
        ["gtceu:magnetite_crushed_ore", 0.4],
        ["gtceu:vanadium_magnetite_crushed_ore", 0.4],
        ["gtceu:bentonite_crushed_ore", 0.3],
        ["gtceu:gypsum_crushed_ore", 0.2],
    ];
    mesh_1_gravel_table.forEach(itemchance => add_sift_recipe("minecraft:gravel", itemchance, "string"));

    const mesh_2_gravel_table = [
        ["minecraft:flint", 0.25],
        ["gtceu:copper_crushed_ore", 0.4],
        ["gtceu:bornite_crushed_ore", 0.4],
        ["gtceu:chalcocite_crushed_ore", 0.4],
        ["gtceu:tetrahedrite_crushed_ore", 0.4],
        ["gtceu:pyrite_crushed_ore", 0.4],
        ["gtceu:goethite_crushed_ore", 0.4],
        ["gtceu:stibnite_crushed_ore", 0.4],
        ["gtceu:redstone_crushed_ore", 0.9],
    ];
    mesh_2_gravel_table.forEach(itemchance => add_sift_recipe("minecraft:gravel", itemchance, "flint"));

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
    mesh_3_gravel_table.forEach(itemchance => add_sift_recipe("minecraft:gravel", itemchance, "iron"));

    const mesh_4_gravel_table = [
        ["gtceu:pyrolusite_crushed_ore", 0.4],
    ];
    mesh_4_gravel_table.forEach(itemchance => add_sift_recipe("minecraft:gravel", itemchance, "diamond"));

    const mesh_5_gravel_table = [
        ["gtceu:bauxite_crushed_ore", 0.55],
        ["gtceu:ilmenite_crushed_ore", 0.4],
    ];
    mesh_5_gravel_table.forEach(itemchance => add_sift_recipe("minecraft:gravel", itemchance, "emerald"));

    const mesh_6_gravel_table = [

    ];
    mesh_6_gravel_table.forEach(itemchance => add_sift_recipe("minecraft:gravel", itemchance, "netherite"));
});
