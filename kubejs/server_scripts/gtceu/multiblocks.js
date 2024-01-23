/*
* multiblocks.js - Add recipes for our new multiblocks.
*/
ServerEvents.recipes(event => {
    event.shaped(
        "gtceu:void_miner",
        ["AAA", "BCB", "DED"],
        {
            A: "gtceu:ev_electric_motor",
            B: "gtceu:gold_single_cable",
            C: "gtceu:ev_machine_hull",
            D: "#gtceu:circuits/ev",
            E: "gtceu:ev_sensor"
        }
    );

    function add_void_miner_recipe(name, eu, index, table) {
        let recipe = event.recipes.gtceu.void_miner("void_miner_" + name + index)
            .inputFluids(Fluid.of(tableList.basic_table.input, 100))
            .notConsumable(InputItem.of(table.input))
            .duration(30)
            .EUt(eu);
        let output_table = tableList.basic_table.output.concat(table.output);
        output_table.forEach(item => {
            recipe.chancedOutput(item[0], item[1] * 10000, item[1] * 2000);
        });
    }

    const tableList = {
        //基础表
        basic_table: {
            input: "gtceu:mysterious_matter",
            output: [
                ["gtceu:coal_ore", 0.5],
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
                ["minecraft:ancient_debris", 0.01],
            ]
        },
        //各个电压的配方表
        ev_table: {
            input: 'kubejs:ev_drill_bit',
            output: [
                ['gtceu:monazite_ore', 0.05],
            ]
        },
        iv_table: {
            input: 'kubejs:iv_drill_bit',
            output: [
                ['gtceu:tungstate_ore', 0.05],
            ]
        },
        luv_table: {
            input: 'kubejs:luv_drill_bit',
            output: [
                ['gtceu:cooperite_ore', 0.05],
                ['gtceu:naquadah_ore', 0.05],
            ]
        },
        zpm_table: {
            input: 'kubejs:zpm_drill_bit',
            output: []
        },
        uv_table: {
            input: 'kubejs:uv_drill_bit',
            output: []
        },
        uhv_table: {
            input: 'kubejs:uhv_drill_bit',
            output: []
        }
    };

    add_void_miner_recipe("ev", 1920, 0, tableList.ev_table);
    add_void_miner_recipe("iv", 1920, 1, tableList.iv_table);
    add_void_miner_recipe("luv", 1920, 2, tableList.luv_table);
    add_void_miner_recipe("zpm", 1920, 3, tableList.zpm_table);
    add_void_miner_recipe("uv", 1920, 4, tableList.uv_table);
    add_void_miner_recipe("uhv", 1920, 5, tableList.uhv_table);
});