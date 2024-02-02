/*
* exnihilo.js - Modify recipes about Ex Nihilo.
*/
const RockBreakerCondition = Java.loadClass("com.gregtechceu.gtceu.common.recipe.RockBreakerCondition");

ServerEvents.recipes(event => {
    function remove_recipe(name) {
        event.remove({ output: name });
    }
    const remove_items = [
        "exdeorum:unfired_porcelain_bucket",
        "exdeorum:porcelain_bucket",
        "exdeorum:mechanical_sieve",
        "exdeorum:mechanical_hammer"
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
            .chancedInput("exdeorum:" + mesh + "_mesh", 100, -10)
            .duration(160)
            .EUt(30);
        itemchance_table.forEach(itemchance =>
            recipe.chancedOutput(itemchance[0], itemchance[1] * 10000, itemchance[1] * 2000));

        // Add recipe for GT steam machines, which have 9 output slots
        let steam_recipe = event.recipes.gtceu.steam_sieve("steam_sieve_" + name + "_" + mesh)
            .itemInputs(input)
            .chancedInput("exdeorum:" + mesh + "_mesh", 100, 0)
            .duration(200)
            .EUt(7);
        for (let i = 0; i < itemchance_table.length && i < 9; i++)
            steam_recipe.chancedOutput(itemchance_table[i][0], itemchance_table[i][1] * 10000, 0);
    }

    // Dirt
    /*// String
    const mesh_1_dirt_table = [
    ];

    // Tin Alloy
    const mesh_2_dirt_table = [
    ];

    // Steel
    const mesh_3_dirt_table = [
    ];

    // Aluminium
    const mesh_4_dirt_table = [
    ];

    // Stainless Steel
    const mesh_5_dirt_table = [
    ];

    // Titanium
    const mesh_6_dirt_table = [
    ];

    add_sieve_recipe("dirt", "minecraft:dirt", mesh_1_dirt_table, "string");
    add_sieve_recipe("dirt", "minecraft:dirt", mesh_2_dirt_table, "flint");
    add_sieve_recipe("dirt", "minecraft:dirt", mesh_3_dirt_table, "iron");
    add_sieve_recipe("dirt", "minecraft:dirt", mesh_4_dirt_table, "golden");
    add_sieve_recipe("dirt", "minecraft:dirt", mesh_5_dirt_table, "diamond");
    add_sieve_recipe("dirt", "minecraft:dirt", mesh_6_dirt_table, "netherite");*/
    event.custom({
        type: "exdeorum:sieve",
        ingredient: { item: "minecraft:dirt" },
        mesh: "exdeorum:flint_mesh",
        result: "minecraft:cocoa_beans",
        result_amount: {
            type: "minecraft:binomial",
            n: 1.0,
            p: 0.08
        }
    });

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
        ["gtceu:crushed_granitic_mineral_sand_ore", 0.2],
        ["gtceu:crushed_basaltic_mineral_sand_ore", 0.2],
        ["gtceu:crushed_soapstone_ore", 0.1],
        ["gtceu:crushed_talc_ore", 0.1],
        ["gtceu:crushed_glauconite_sand_ore", 0.15],
    ];

    // Tin Alloy
    const mesh_2_gravel_table = [
        ["minecraft:flint", 0.25],
        ["gtceu:crushed_copper_ore", 0.4],
        ["gtceu:crushed_goethite_ore", 0.4],
        ["gtceu:crushed_stibnite_ore", 0.4],
        ["gtceu:crushed_redstone_ore", 0.9],
        ["gtceu:crushed_calcite_ore", 0.9],
        ["gtceu:crushed_bornite_ore", 0.3],
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
        ["gtceu:crushed_diamond_ore", 0.1],
        ["gtceu:crushed_graphite_ore", 0.1],
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
    ];

    // Titanium
    const mesh_6_gravel_table = [
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
        ["minecraft:amethyst_shard", 0.15],
        ["minecraft:emerald", 0.15],
        ["gtceu:andradite_gem", 0.1],
        ["gtceu:grossular_gem", 0.1],
        ["gtceu:spessartine_gem", 0.1],
        ["gtceu:uvarovite_gem", 0.1],
        ["gtceu:red_garnet_gem", 0.1],
        ["gtceu:yellow_garnet_gem", 0.1],
        ["gtceu:ruby_gem", 0.15],
        ["gtceu:cinnabar_gem", 0.1],
    ];

    // Aluminium
    const mesh_4_sand_table = [
        ["minecraft:quartz", 0.25],
        ["gtceu:quartzite_gem", 0.25],
        ["ae2:certus_quartz_crystal", 0.2],
        ["ae2:charged_certus_quartz_crystal", 0.05],
        ["gtceu:almandine_gem", 0.3],
        ["gtceu:pyrope_gem", 0.2],
        ["gtceu:sapphire_gem", 0.1],
        ["gtceu:green_sapphire_gem", 0.1],
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

    event.recipes.gtceu.forge_hammer("gtceu:forge_hammer/sand_to_dust")
        .itemInputs("minecraft:sand")
        .itemOutputs("exdeorum:dust")
        .EUt(16)
        .duration(10);

    // String
    const mesh_1_dust_table = [
        ["minecraft:prismarine_shard", 0.6],
        ["minecraft:prismarine_crystals", 0.6],
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
        ["gtceu:strange_blue_matter_dust", 0.005],
    ];

    add_sieve_recipe("dust", "exdeorum:dust", mesh_1_dust_table, "string");
    add_sieve_recipe("dust", "exdeorum:dust", mesh_2_dust_table, "flint");
    add_sieve_recipe("dust", "exdeorum:dust", mesh_3_dust_table, "iron");
    add_sieve_recipe("dust", "exdeorum:dust", mesh_4_dust_table, "golden");
    add_sieve_recipe("dust", "exdeorum:dust", mesh_5_dust_table, "diamond");
    add_sieve_recipe("dust", "exdeorum:dust", mesh_6_dust_table, "netherite");

    // Crushed Netherrack
    event.recipes.gtceu.rock_breaker("gtceu:rock_breaker/netherrack")
        .notConsumable("minecraft:netherrack")
        .itemOutputs("minecraft:netherrack")
        .addCondition(RockBreakerCondition.INSTANCE)
    ["addData(java.lang.String,java.lang.String)"]("fluidA", "minecraft:lava")
    ["addData(java.lang.String,java.lang.String)"]("fluidB", "exdeorum:witch_water")
        .EUt(30)
        .duration(16);

    event.recipes.gtceu.forge_hammer("gtceu:forge_hammer/netherrack_to_crushed_netherrack")
        .itemInputs("minecraft:netherrack")
        .itemOutputs("exdeorum:crushed_netherrack")
        .EUt(16)
        .duration(10);

    // String
    const mesh_1_crushed_netherrack_table = [
    ];

    // Tin Alloy
    const mesh_2_crushed_netherrack_table = [
    ];

    // Steel
    const mesh_3_crushed_netherrack_table = [
        ["gtceu:crushed_sulfur_ore", 0.3],
        ["gtceu:crushed_cobalt_ore", 0.1],
        ["gtceu:crushed_cobaltite_ore", 0.1],
        ["gtceu:crushed_sphalerite_ore", 0.1],
        ["gtceu:crushed_pyrite_ore", 0.1],
        ["gtceu:crushed_blue_topaz_ore", 0.15],
        ["gtceu:crushed_topaz_ore", 0.1],
        ["gtceu:crushed_chalcocite_ore", 0.1],
        ["gtceu:crushed_bornite_ore", 0.05],
    ];

    // Aluminium
    const mesh_4_crushed_netherrack_table = [
        ["gtceu:crushed_sulfur_ore", 0.4],
        ["gtceu:crushed_cobalt_ore", 0.2],
        ["gtceu:crushed_cobaltite_ore", 0.2],
        ["gtceu:crushed_sphalerite_ore", 0.2],
        ["gtceu:crushed_chalcocite_ore", 0.2],
        ["gtceu:crushed_pyrite_ore", 0.1],
        ["gtceu:crushed_saltpeter_ore", 0.3],
        ["gtceu:crushed_diatomite_ore", 0.2],
        ["gtceu:crushed_electrotine_ore", 0.2],
        ["gtceu:crushed_alunite_ore", 0.1],
    ];

    // Stainless Steel
    const mesh_5_crushed_netherrack_table = [
    ];

    // Titanium
    const mesh_6_crushed_netherrack_table = [
    ];

    add_sieve_recipe("crushed_netherrack", "exdeorum:crushed_netherrack", mesh_1_crushed_netherrack_table, "string");
    add_sieve_recipe("crushed_netherrack", "exdeorum:crushed_netherrack", mesh_2_crushed_netherrack_table, "flint");
    add_sieve_recipe("crushed_netherrack", "exdeorum:crushed_netherrack", mesh_3_crushed_netherrack_table, "iron");
    add_sieve_recipe("crushed_netherrack", "exdeorum:crushed_netherrack", mesh_4_crushed_netherrack_table, "golden");
    add_sieve_recipe("crushed_netherrack", "exdeorum:crushed_netherrack", mesh_5_crushed_netherrack_table, "diamond");
    add_sieve_recipe("crushed_netherrack", "exdeorum:crushed_netherrack", mesh_6_crushed_netherrack_table, "netherite");    // Crushed Netherrack

    // End Stone
    event.recipes.gtceu.rock_breaker("gtceu:rock_breaker/end_stone")
        .notConsumable("minecraft:end_stone")
        .itemOutputs("minecraft:end_stone")
        .addCondition(RockBreakerCondition.INSTANCE)
    ["addData(java.lang.String,java.lang.String)"]("fluidA", "minecraft:lava")
    ["addData(java.lang.String,java.lang.String)"]("fluidB", "minecraft:water")
        .EUt(120)
        .duration(16);

    event.recipes.gtceu.forge_hammer("gtceu:forge_hammer/end_stone_to_crushed_end_stone")
        .itemInputs("minecraft:end_stone")
        .itemOutputs("exdeorum:crushed_end_stone")
        .EUt(16)
        .duration(10);

    // String
    const mesh_1_crushed_end_stone_table = [
    ];

    // Tin Alloy
    const mesh_2_crushed_end_stone_table = [
    ];

    // Steel
    const mesh_3_crushed_end_stone_table = [
    ];

    // Aluminium
    const mesh_4_crushed_end_stone_table = [
    ];

    // Stainless Steel
    const mesh_5_crushed_end_stone_table = [
        ["gtceu:crushed_bauxite_ore", 0.55],
        ["gtceu:crushed_ilmenite_ore", 0.4],
        ["gtceu:crushed_magnetite_ore", 0.3],
        ["gtceu:crushed_vanadium_magnetite_ore", 0.2],
        ["gtceu:crushed_chromite_ore", 0.2],
        ["gtceu:crushed_gold_ore", 0.1],
    ];

    // Titanium
    const mesh_6_crushed_end_stone_table = [
        ["gtceu:crushed_bauxite_ore", 0.55],
        ["gtceu:crushed_ilmenite_ore", 0.4],
        ["gtceu:crushed_magnetite_ore", 0.3],
        ["gtceu:crushed_vanadium_magnetite_ore", 0.2],
        ["gtceu:crushed_chromite_ore", 0.2],
        ["gtceu:crushed_gold_ore", 0.1],
        ["gtceu:crushed_platinum_ore", 0.15],
        ["gtceu:crushed_monazite_ore", 0.3],
        ["gtceu:crushed_plutonium_ore", 0.15],
        ["gtceu:crushed_wulfenite_ore", 0.1],
        ["gtceu:crushed_powellite_ore", 0.1],
    ];

    add_sieve_recipe("crushed_end_stone", "exdeorum:crushed_end_stone", mesh_1_crushed_end_stone_table, "string");
    add_sieve_recipe("crushed_end_stone", "exdeorum:crushed_end_stone", mesh_2_crushed_end_stone_table, "flint");
    add_sieve_recipe("crushed_end_stone", "exdeorum:crushed_end_stone", mesh_3_crushed_end_stone_table, "iron");
    add_sieve_recipe("crushed_end_stone", "exdeorum:crushed_end_stone", mesh_4_crushed_end_stone_table, "golden");
    add_sieve_recipe("crushed_end_stone", "exdeorum:crushed_end_stone", mesh_5_crushed_end_stone_table, "diamond");
    add_sieve_recipe("crushed_end_stone", "exdeorum:crushed_end_stone", mesh_6_crushed_end_stone_table, "netherite");
});
