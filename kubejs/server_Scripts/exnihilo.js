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
    function add_gt_sieve_recipe(name, input, itemchance_table, mesh) {
        let recipe = event.recipes.gtceu.sieve("_sieve_" + name + "_" + mesh)
            .itemInputs(input)
            .notConsumable("exnihilosequentia:" + mesh + "_mesh")
            .duration(90)
            .EUt(7);
        itemchance_table.forEach(itemchance => {
            recipe.chancedOutput(itemchance[0], itemchance[1] * 10000, 500);
        });
    }
    function add_exnihilo_sift_recipe(name, input, itemchance, mesh) {
        event.recipes.exnihilosequentia.sifting(input,
            itemchance[0], [{ chance: itemchance[1], mesh: mesh }]);
    }
    function add_sieve_recipe(name, input, itemchance_table, mesh) {
        itemchance_table.forEach(itemchance => add_exnihilo_sift_recipe(name, input, itemchance, mesh));
        add_gt_sieve_recipe(name, input, itemchance_table, mesh);
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
