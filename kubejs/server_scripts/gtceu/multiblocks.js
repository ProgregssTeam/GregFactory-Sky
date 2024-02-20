/*
* multiblocks.js - Add recipes for our new multiblocks.
*/
ServerEvents.recipes(event => {
    event.shaped(
        "gtceu:void_miner",
        ["AAA", "BCB", "DED"],
        {
            A: "gtceu:ev_electric_motor",
            B: "gtceu:aluminium_single_cable",
            C: "gtceu:ev_machine_hull",
            D: "#gtceu:circuits/ev",
            E: "gtceu:ev_sensor"
        }
    );
    event.shaped(
        "gfs:void_ore_generation_core",
        ["ABA", "CDC", "EBF"],
        {
            A: "gtceu:ev_electric_motor",
            B: "#gtceu:circuits/iv",
            C: "gtceu:aluminium_single_cable",
            D: "gtceu:ev_machine_hull",
            E: "gtceu:ev_electric_pump",
            F: "gtceu:ev_conveyor_module"
        }
    );
    event.shaped(
        "gfs:void_ore_drill_core",
        ["ABA", "CDC", "EFE"],
        {
            A: "gtceu:ev_electric_motor",
            B: "#gtceu:circuits/ev",
            C: "gtceu:aluminium_single_cable",
            D: "gtceu:ev_machine_hull",
            E: "gtceu:ev_conveyor_module",
            F: "gtceu:ev_sensor"
        }
    );

    function add_void_miner_recipe(name, dimension, eu, index, parent_table, table) {
        let recipe = event.recipes.gtceu.void_miner("void_miner_" + name + "_" + dimension + "_" + index)
            .inputFluids(Fluid.of(parent_table.basic_table.input, 100))
            .chancedInput(InputItem.of(table.input), 10, -1)
            .duration(30)
            .EUt(eu)
        let output_table = parent_table.basic_table.output.concat(table.output);
        output_table.forEach(item => {
            recipe.chancedOutput(item[0], item[1] * 10000, item[1] * 2000);
        });
    }

    const overworld_table = {
        //基础表
        basic_table: {
            input: "gtceu:overworld_matter",
            output: [
                ["gtceu:bentonite_ore", 0.06],
                ["gtceu:magnetite_ore", 0.04 + 0.24],
                ["gtceu:olivine_ore", 0.04],
                ["gtceu:glauconite_sand_ore", 0.02 + 0.08],

                ["gtceu:almandine_ore", 0.18],
                ["gtceu:pyrope_ore", 0.12],
                ["gtceu:sapphire_ore", 0.06],
                ["gtceu:green_sapphire_ore", 0.06],

                ["gtceu:goethite_ore", 0.6],
                ["gtceu:yellow_limonite_ore", 0.24],
                ["gtceu:hematite_ore", 0.24],
                ["gtceu:malachite_ore", 0.12],

                ["gtceu:soapstone_ore", 0.12],
                ["gtceu:talc_ore", 0.08],
                //["gtceu:glauconite_sand_ore", 0.08],
                ["gtceu:pentlandite_ore", 0.04],

                ["gtceu:grossular_ore", 0.06],
                ["gtceu:spessartine_ore", 0.04],
                ["gtceu:pyrolusite_ore", 0.04],
                ["gtceu:tantalite_ore", 0.02],

                ["gtceu:chalcopyrite_ore", 0.25 + 0.4],
                ["gtceu:zeolite_ore", 0.1],
                ["gtceu:cassiterite_ore", 0.1 + 0.16],
                ["gtceu:realgar_ore", 0.05],

                ["gtceu:coal_ore", 0.24 + 0.04],

                //["gtceu:chalcopyrite_ore", 0.4],
                ["gtceu:iron_ore", 0.16],
                ["gtceu:pyrite_ore", 0.16],
                ["gtceu:copper_ore", 0.16],

                //["gtceu:magnetite_ore", 0.24],
                ["gtceu:vanadium_magnetite_ore", 0.16],
                ["gtceu:gold_ore", 0.08],

                ["gtceu:lazurite_ore", 0.12],
                ["gtceu:sodalite_ore", 0.08],
                ["gtceu:lapis_ore", 0.08],
                ["gtceu:calcite_ore", 0.04],

                ["gtceu:galena_ore", 0.12],
                ["gtceu:silver_ore", 0.08],
                ["gtceu:lead_ore", 0.04],

                ["gtceu:kyanite_ore", 0.06],
                ["gtceu:mica_ore", 0.04],
                ["gtceu:bauxite_ore", 0.04],
                ["gtceu:pollucite_ore", 0.02],

                ["gtceu:tin_ore", 0.32],
                //["gtceu:cassiterite_ore", 0.16],

                ["gtceu:red_garnet_ore", 0.12],
                ["gtceu:yellow_garnet_ore", 0.08],
                ["gtceu:amethyst_ore", 0.08],
                ["gtceu:opal_ore", 0.04],

                ["gtceu:basaltic_mineral_sand_ore", 0.24],
                ["gtceu:granitic_mineral_sand_ore", 0.16],
                ["gtceu:fullers_earth_ore", 0.16],
                ["gtceu:gypsum_ore", 0.08],

                ["gtceu:rock_salt_ore", 0.15],
                ["gtceu:salt_ore", 0.1],
                ["gtceu:lepidolite_ore", 0.05],
                ["gtceu:spodumene_ore", 0.05],

                ["gtceu:redstone_ore", 0.18],
                ["gtceu:ruby_ore", 0.12],
                ["gtceu:cinnabar_ore", 0.06],

                ["gtceu:cassiterite_sand_ore", 0.24],
                ["gtceu:garnet_sand_ore", 0.16],
                ["gtceu:asbestos_ore", 0.16],
                ["gtceu:diatomite_ore", 0.08],

                ["gtceu:oilsands_ore", 0.24],

                ["gtceu:graphite_ore", 0.12],
                ["gtceu:diamond_ore", 0.08],
                //["gtceu:coal_ore", 0.04],

                ["gtceu:garnierite_ore", 0.12],
                ["gtceu:nickel_ore", 0.08],
                ["gtceu:cobaltite_ore", 0.08],
                ["gtceu:pentlandite_ore", 0.04],
            ]
        },
        //各个电压的配方表
        ev_table: {
            input: 'gfs:ev_drill_bit',
            output: [
            ]
        },
        iv_table: {
            input: 'gfs:iv_drill_bit',
            output: [
            ]
        },
        luv_table: {
            input: 'gfs:luv_drill_bit',
            output: [
                ["gtceu:apatite_ore", 0.12],
                ["gtceu:tricalcium_phosphate_ore", 0.08],
                ["gtceu:pyrochlore_ore", 0.04],
            ]
        },
        zpm_table: {
            input: 'gfs:zpm_drill_bit',
            output: [
                ["gtceu:apatite_ore", 0.12],
                ["gtceu:tricalcium_phosphate_ore", 0.08],
                ["gtceu:pyrochlore_ore", 0.04],
            ]
        },
        uv_table: {
            input: 'gfs:uv_drill_bit',
            output: [
                ["gtceu:apatite_ore", 0.12],
                ["gtceu:tricalcium_phosphate_ore", 0.08],
                ["gtceu:pyrochlore_ore", 0.04],
            ]
        },
        uhv_table: {
            input: 'gfs:uhv_drill_bit',
            output: [
                ["gtceu:apatite_ore", 0.12],
                ["gtceu:tricalcium_phosphate_ore", 0.08],
                ["gtceu:pyrochlore_ore", 0.04],
            ]
        }
    };

    const nether_table = {
        //基础表
        basic_table: {
            input: "gtceu:nether_matter",
            output: [
                ["gtceu:netherrack_tetrahedrite_ore", 0.28],
                ["gtceu:netherrack_copper_ore", 0.14],
                ["gtceu:netherrack_stibnite_ore", 0.07],

                ["gtceu:netherrack_bastnasite_ore", 0.09],
                ["gtceu:netherrack_molybdenum_ore", 0.03],
                ["gtceu:netherrack_neodymium_ore", 0.03],

                ["gtceu:netherrack_redstone_ore", 0.18],
                ["gtceu:netherrack_ruby_ore", 0.12],
                ["gtceu:netherrack_cinnabar_ore", 0.06],

                ["gtceu:netherrack_saltpeter_ore", 0.12],
                ["gtceu:netherrack_diatomite_ore", 0.08],
                ["gtceu:netherrack_electrotine_ore", 0.08],
                ["gtceu:netherrack_alunite_ore", 0.04],

                ["gtceu:netherrack_beryllium_ore", 0.09],
                ["gtceu:netherrack_emerald_ore", 0.12],

                ["gtceu:netherrack_grossular_ore", 0.06],
                ["gtceu:netherrack_pyrolusite_ore", 0.04],
                ["gtceu:netherrack_tantalite_ore", 0.02],

                ["gtceu:netherrack_wulfenite_ore", 0.15],
                ["gtceu:netherrack_molybdenite_ore", 0.1],
                ["gtceu:netherrack_molybdenum_ore", 0.05],
                ["gtceu:netherrack_powellite_ore", 0.05],

                ["gtceu:netherrack_goethite_ore", 0.09],
                ["gtceu:netherrack_yellow_limonite_ore", 0.06],
                ["gtceu:netherrack_hematite_ore", 0.06],
                ["gtceu:netherrack_gold_ore", 0.03],

                ["gtceu:netherrack_quartzite_ore", 0.12 + 0.08],
                ["gtceu:netherrack_certus_quartz_ore", 0.08],
                ["gtceu:netherrack_barite_ore", 0.04],

                ["gtceu:netherrack_blue_topaz_ore", 0.21],
                ["gtceu:netherrack_topaz_ore", 0.14],
                ["gtceu:netherrack_chalcocite_ore", 0.14],
                ["gtceu:netherrack_bornite_ore", 0.07],

                ["gtceu:netherrack_nether_quartz_ore", 0.24],
                //["gtceu:netherrack_quartzite_ore", 0.08],

                ["gtceu:netherrack_sulfur_ore", 0.3],
                ["gtceu:netherrack_pyrite_ore", 0.2],
                ["gtceu:netherrack_sphalerite_ore", 0.1],

                ["minecraft:ancient_debris", 0.05],
            ]
        },
        //各个电压的配方表
        ev_table: {
            input: 'gfs:ev_drill_bit',
            output: [
            ]
        },
        iv_table: {
            input: 'gfs:iv_drill_bit',
            output: [
            ]
        },
        luv_table: {
            input: 'gfs:luv_drill_bit',
            output: [
            ]
        },
        zpm_table: {
            input: 'gfs:zpm_drill_bit',
            output: []
        },
        uv_table: {
            input: 'gfs:uv_drill_bit',
            output: []
        },
        uhv_table: {
            input: 'gfs:uhv_drill_bit',
            output: []
        }
    };

    const end_table = {
        //基础表
        basic_table: {
            input: "gtceu:end_matter",
            output: [
                ["gtceu:endstone_magnetite_ore", 0.09],
                ["gtceu:endstone_vanadium_magnetite_ore", 0.06],
                ["gtceu:endstone_chromite_ore", 0.06],
                ["gtceu:endstone_gold_ore", 0.03],

                ["gtceu:endstone_bauxite_ore", 0.08],
                ["gtceu:endstone_ilmenite_ore", 0.04],
                ["gtceu:endstone_aluminium_ore", 0.04],
            ]
        },
        //各个电压的配方表
        ev_table: {
            input: 'gfs:ev_drill_bit',
            output: [
                ["gtceu:endstone_scheelite_ore", 0.06],
                ["gtceu:endstone_tungstate_ore", 0.04],
                ["gtceu:endstone_lithium_ore", 0.02],
            ]
        },
        iv_table: {
            input: 'gfs:iv_drill_bit',
            output: [
                ["gtceu:endstone_bornite_ore", 0.03],
                ["gtceu:endstone_cooperite_ore", 0.02],
                ["gtceu:endstone_platinum_ore", 0.02],
                ["gtceu:endstone_palladium_ore", 0.01],

                ["gtceu:endstone_scheelite_ore", 0.06],
                ["gtceu:endstone_tungstate_ore", 0.04],
                ["gtceu:endstone_lithium_ore", 0.02],
            ]
        },
        luv_table: {
            input: 'gfs:luv_drill_bit',
            output: [
                ["gtceu:endstone_bornite_ore", 0.03],
                ["gtceu:endstone_cooperite_ore", 0.02],
                ["gtceu:endstone_platinum_ore", 0.02],
                ["gtceu:endstone_palladium_ore", 0.01],

                ["gtceu:endstone_scheelite_ore", 0.06],
                ["gtceu:endstone_tungstate_ore", 0.04],
                ["gtceu:endstone_lithium_ore", 0.02],

                ["gtceu:endstone_pitchblende_ore", 0.09],
                ["gtceu:endstone_uraninite_ore", 0.06],

                ["gtceu:endstone_naquadah_ore", 0.09],
                ["gtceu:endstone_plutonium_ore", 0.03],
            ]
        },
        zpm_table: {
            input: 'gfs:zpm_drill_bit',
            output: [
                ["gtceu:endstone_bornite_ore", 0.03],
                ["gtceu:endstone_cooperite_ore", 0.02],
                ["gtceu:endstone_platinum_ore", 0.02],
                ["gtceu:endstone_palladium_ore", 0.01],

                ["gtceu:endstone_scheelite_ore", 0.06],
                ["gtceu:endstone_tungstate_ore", 0.04],
                ["gtceu:endstone_lithium_ore", 0.02],

                ["gtceu:endstone_pitchblende_ore", 0.09],
                ["gtceu:endstone_uraninite_ore", 0.06],

                ["gtceu:endstone_naquadah_ore", 0.09],
                ["gtceu:endstone_plutonium_ore", 0.03],
            ]
        },
        uv_table: {
            input: 'gfs:uv_drill_bit',
            output: [
                ["gtceu:endstone_bornite_ore", 0.03],
                ["gtceu:endstone_cooperite_ore", 0.02],
                ["gtceu:endstone_platinum_ore", 0.02],
                ["gtceu:endstone_palladium_ore", 0.01],

                ["gtceu:endstone_scheelite_ore", 0.06],
                ["gtceu:endstone_tungstate_ore", 0.04],
                ["gtceu:endstone_lithium_ore", 0.02],

                ["gtceu:endstone_pitchblende_ore", 0.09],
                ["gtceu:endstone_uraninite_ore", 0.06],

                ["gtceu:endstone_naquadah_ore", 0.09],
                ["gtceu:endstone_plutonium_ore", 0.03],
            ]
        },
        uhv_table: {
            input: 'gfs:uhv_drill_bit',
            output: [
                ["gtceu:endstone_bornite_ore", 0.03],
                ["gtceu:endstone_cooperite_ore", 0.02],
                ["gtceu:endstone_platinum_ore", 0.02],
                ["gtceu:endstone_palladium_ore", 0.01],

                ["gtceu:endstone_scheelite_ore", 0.06],
                ["gtceu:endstone_tungstate_ore", 0.04],
                ["gtceu:endstone_lithium_ore", 0.02],

                ["gtceu:endstone_pitchblende_ore", 0.09],
                ["gtceu:endstone_uraninite_ore", 0.06],

                ["gtceu:endstone_naquadah_ore", 0.09],
                ["gtceu:endstone_plutonium_ore", 0.03],
            ]
        }
    };

    add_void_miner_recipe("ev", "overworld", 1920, 0, overworld_table, overworld_table.ev_table);
    add_void_miner_recipe("iv", "overworld", 7680, 1, overworld_table, overworld_table.iv_table);
    add_void_miner_recipe("luv", "overworld", 30720, 2, overworld_table, overworld_table.luv_table);
    add_void_miner_recipe("zpm", "overworld", 122880, 3, overworld_table, overworld_table.zpm_table);
    add_void_miner_recipe("uv", "overworld", 491520, 4, overworld_table, overworld_table.uv_table);
    add_void_miner_recipe("uhv", "overworld", 1966080, 5, overworld_table, overworld_table.uhv_table);

    add_void_miner_recipe("ev", "nether", 1920, 0, nether_table, nether_table.ev_table);
    add_void_miner_recipe("iv", "nether", 7680, 1, nether_table, nether_table.iv_table);
    add_void_miner_recipe("luv", "nether", 30720, 2, nether_table, nether_table.luv_table);
    add_void_miner_recipe("zpm", "nether", 122880, 3, nether_table, nether_table.zpm_table);
    add_void_miner_recipe("uv", "nether", 491520, 4, nether_table, nether_table.uv_table);
    add_void_miner_recipe("uhv", "nether", 1966080, 5, nether_table, nether_table.uhv_table);

    add_void_miner_recipe("ev", "end", 1920, 0, end_table, end_table.ev_table);
    add_void_miner_recipe("iv", "end", 7680, 1, end_table, end_table.iv_table);
    add_void_miner_recipe("luv", "end", 30720, 2, end_table, end_table.luv_table);
    add_void_miner_recipe("zpm", "end", 122880, 3, end_table, end_table.zpm_table);
    add_void_miner_recipe("uv", "end", 491520, 4, end_table, end_table.uv_table);
    add_void_miner_recipe("uhv", "end", 1966080, 5, end_table, end_table.uhv_table);
});