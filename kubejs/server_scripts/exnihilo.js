/*
* exnihilo.js - Modify recipes about Ex Nihilo.
*/
ServerEvents.recipes(event => {
    function remove_recipe(name) {
        event.remove({ output: name });
    }
    const remove_items = [
        "exdeorum:unfired_porcelain_bucket",
        "exdeorum:porcelain_bucket",
        "exdeorum:mechanical_sieve"
    ];
    remove_items.forEach(remove_recipe);

    // Modify the mesh meterial
    function modify_mesh_recipe(meterial, level) {
        const mesh_id = "exdeorum:" + level + "_mesh";
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
    modify_mesh_recipe("gtceu:aluminium_rod", "golden");
    modify_mesh_recipe("gtceu:stainless_steel_rod", "diamond");
    modify_mesh_recipe("gtceu:titanium_rod", "netherite");

    event.shapeless("2x gtceu:tin_alloy_dust", ["gtceu:tin_dust", "gtceu:iron_dust"]);

    // Remove the default sieve recipes
    function remove_default_sieve_recipe(input) {
        event.remove({
            input: input,
            sieve_mesh: "#exdeorum:sieve_meshes",
            type: "exdeorum:sieve",
            mod: "exdeorum"
        });
    }
    const remove_default_sieve_recipe_list = [
        "minecraft:gravel",
        "exdeorum:crushed_deepslate",
        "minecraft:sand",
        "minecraft:red_sand",
        "exdeorum:dust",
        "exdeorum:crushed_netherrack",
        "exdeorum:crushed_blackstone",
    ];
    remove_default_sieve_recipe_list.forEach(remove_default_sieve_recipe);

    function add_sieve_recipe(name, input, itemchance_table, mesh) {
        if (itemchance_table.length == 0)
            return;

        // Add recipe for Ex Nihilo
        itemchance_table.forEach(itemchance => {
            event.custom({
                type: "exdeorum:sieve",
                ingredient: { item: input },
                mesh: "exdeorum:" + mesh + "_mesh",
                result: itemchance[0],
                result_amount: {
                    type: "minecraft:binomial",
                    n: 1.0,
                    p: itemchance[1]
                }
            });
        });

        // Add recipe for GT electric machines
        let recipe = event.recipes.gtceu.sieve("sieve_" + name + "_" + mesh)
            .itemInputs(input)
            .notConsumable("exdeorum:" + mesh + "_mesh")
            .duration(80)
            .EUt(30);
        itemchance_table.forEach(itemchance =>
            recipe.chancedOutput(itemchance[0], itemchance[1] * 10000, 200));

        // Add recipe for GT steam machines, which have 9 output slots
        let steam_recipe = event.recipes.gtceu.steam_sieve("steam_sieve_" + name + "_" + mesh)
            .itemInputs(input)
            .notConsumable("exdeorum:" + mesh + "_mesh")
            .duration(160)
            .EUt(7);
        for (let i = 0; i < itemchance_table.length && i < 9; i++)
            steam_recipe.chancedOutput(itemchance_table[i][0], itemchance_table[i][1] * 10000, 500);
    }

    // Dirt

    // Gravel
    // String
    const mesh_1_gravel_table = [
        ["minecraft:flint", 0.3],
        ["gtceu:crushed_coal_ore", 0.6],
        ["gtceu:crushed_tin_ore", 0.3],
        ["gtceu:crushed_cassiterite_ore", 0.5],
        ["gtceu:crushed_iron_ore", 0.4],
        ["gtceu:crushed_magnetite_ore", 0.4],
        ["gtceu:crushed_vanadium_magnetite_ore", 0.4],
        ["gtceu:crushed_gypsum_ore", 0.2],
        ["gtceu:crushed_bentonite_ore", 0.3],
        ["gtceu:crushed_salt_ore", 0.3],
        ["gtceu:crushed_rock_salt_ore", 0.3],
        ["gtceu:crushed_glauconite_sand_ore", 0.2],
        ["gtceu:crushed_granitic_mineral_sand_ore", 0.2],
        ["gtceu:crushed_basaltic_mineral_sand_ore", 0.2],
        ["gtceu:crushed_soapstone_ore", 0.1],
    ];

    // Tin Alloy
    const mesh_2_gravel_table = [
        ["minecraft:flint", 0.25],
        ["gtceu:crushed_copper_ore", 0.4],
        ["gtceu:crushed_pyrite_ore", 0.4],
        ["gtceu:crushed_goethite_ore", 0.4],
        ["gtceu:crushed_stibnite_ore", 0.4],
        ["gtceu:crushed_redstone_ore", 0.9],
        ["gtceu:crushed_calcite_ore", 0.9],
        ["gtceu:crushed_bornite_ore", 0.3],
        ["gtceu:crushed_chalcocite_ore", 0.3],
        ["gtceu:crushed_tetrahedrite_ore", 0.3],
        ["gtceu:crushed_magnesite_ore", 0.2],
        ["gtceu:crushed_malachite_ore", 0.3],
    ];

    // Steel
    const mesh_3_gravel_table = [
        ["minecraft:flint", 0.1],
        ["gtceu:crushed_aluminium_ore", 0.3],
        ["gtceu:crushed_nickel_ore", 0.2],
        ["gtceu:crushed_garnierite_ore", 0.2],
        ["gtceu:crushed_pentlandite_ore", 0.2],
        ["gtceu:crushed_lead_ore", 0.2],
        ["gtceu:crushed_galena_ore", 0.2],
        ["gtceu:crushed_silver_ore", 0.25],
        ["gtceu:crushed_gold_ore", 0.15],
        ["gtceu:crushed_electrotine_ore", 0.15],
    ];

    // Aluminium
    const mesh_4_gravel_table = [
        ["gtceu:crushed_pyrolusite_ore", 0.4],
        ["gtceu:crushed_garnet_sand_ore", 0.4],
        ["gtceu:crushed_oilsands_ore", 0.6],
        ["gtceu:crushed_emerald_ore", 0.5],
    ];

    // Stainless Steel
    const mesh_5_gravel_table = [
        ["gtceu:crushed_bauxite_ore", 0.55],
        ["gtceu:crushed_ilmenite_ore", 0.4],
    ];

    // Titanium
    const mesh_6_gravel_table = [
        ["gtceu:crushed_bauxite_ore", 0.2],
        ["gtceu:crushed_ilmenite_ore", 0.25],
        ["gtceu:crushed_tungstate_ore", 0.2],
        ["gtceu:crushed_scheelite_ore", 0.25],
    ];

    add_sieve_recipe("gravel", "minecraft:gravel", mesh_1_gravel_table, "string");
    add_sieve_recipe("gravel", "minecraft:gravel", mesh_2_gravel_table, "flint");
    add_sieve_recipe("gravel", "minecraft:gravel", mesh_3_gravel_table, "iron");
    add_sieve_recipe("gravel", "minecraft:gravel", mesh_4_gravel_table, "golden");
    add_sieve_recipe("gravel", "minecraft:gravel", mesh_5_gravel_table, "diamond");
    add_sieve_recipe("gravel", "minecraft:gravel", mesh_6_gravel_table, "netherite");

    // Sand
    // String
    const mesh_1_sand_table = [
    ];

    // Tin Alloy
    const mesh_2_sand_table = [
        ["minecraft:diamond", 0.05],
        ["minecraft:emerald", 0.05],
        ["minecraft:lapis_lazuli", 0.07],
        ["gtceu:lazurite_gem", 0.07],
        ["gtceu:sodalite_gem", 0.07],
        ["gtceu:apatite_gem", 0.1],
        ["gtceu:cinnabar_gem", 0.1],
    ];

    // Steel
    const mesh_3_sand_table = [
        ["minecraft:diamond", 0.15],
        ["minecraft:emerald", 0.15],
        ["gtceu:andradite_gem", 0.1],
        ["gtceu:grossular_gem", 0.1],
        ["gtceu:pyrope_gem", 0.1],
        ["gtceu:spessartine_gem", 0.1],
        ["gtceu:uvarovite_gem", 0.1],
        ["gtceu:red_garnet_gem", 0.1],
        ["gtceu:yellow_garnet_gem", 0.1],
    ];

    // Aluminium
    const mesh_4_sand_table = [
    ];

    // Stainless Steel
    const mesh_5_sand_table = [
    ];

    // Titanium
    const mesh_6_sand_table = [
    ];

    add_sieve_recipe("sand", "minecraft:sand", mesh_1_sand_table, "string");
    add_sieve_recipe("sand", "minecraft:sand", mesh_2_sand_table, "flint");
    add_sieve_recipe("sand", "minecraft:sand", mesh_3_sand_table, "iron");
    add_sieve_recipe("sand", "minecraft:sand", mesh_4_sand_table, "golden");
    add_sieve_recipe("sand", "minecraft:sand", mesh_5_sand_table, "diamond");
    add_sieve_recipe("sand", "minecraft:sand", mesh_6_sand_table, "netherite");

    // Dust

    // String
    const mesh_1_dust_table = [
    ];

    // Tin Alloy
    const mesh_2_dust_table = [
        ["minecraft:bone_meal", 0.1],
    ];

    // Steel
    const mesh_3_dust_table = [
        ["minecraft:bone_meal", 0.15],
        ["minecraft:redstone", 0.2],
        ["minecraft:glowstone_dust", 0.2],
        ["ae2:sky_dust", 0.1],
    ];

    // Aluminium
    const mesh_4_dust_table = [
        ["minecraft:bone_meal", 0.2],
        ["minecraft:redstone", 0.25],
        ["minecraft:glowstone_dust", 0.25],
        ["ae2:sky_dust", 0.15],
    ];

    // Stainless Steel
    const mesh_5_dust_table = [
        ["minecraft:bone_meal", 0.25],
        ["minecraft:redstone", 0.3],
        ["minecraft:glowstone_dust", 0.3],
        ["ae2:sky_dust", 0.2],
    ];

    // Titanium
    const mesh_6_dust_table = [
        ["minecraft:bone_meal", 0.35],
        ["minecraft:redstone", 0.4],
        ["minecraft:glowstone_dust", 0.4],
        ["ae2:sky_dust", 0.3],
    ];

    add_sieve_recipe("dust", "exdeorum:dust", mesh_1_dust_table, "string");
    add_sieve_recipe("dust", "exdeorum:dust", mesh_2_dust_table, "flint");
    add_sieve_recipe("dust", "exdeorum:dust", mesh_3_dust_table, "iron");
    add_sieve_recipe("dust", "exdeorum:dust", mesh_4_dust_table, "golden");
    add_sieve_recipe("dust", "exdeorum:dust", mesh_5_dust_table, "diamond");
    add_sieve_recipe("dust", "exdeorum:dust", mesh_6_dust_table, "netherite");
});
