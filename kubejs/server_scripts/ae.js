ServerEvents.recipes(event => {
    function remove_recipe(name) {
        event.remove({ output: name });
    }
    const remove_items = [
        "ae2:inscriber",
        "expatternprovider:ex_inscriber",
        "ae2:logic_processor_press",
        "ae2:calculation_processor_press",
        "ae2:engineering_processor_press",
        "ae2:silicon_press",
        "ae2:printed_logic_processor",
        "ae2:printed_calculation_processor",
        "ae2:printed_engineering_processor",
        "ae2:printed_silicon",
        "ae2:logic_processor",
        "ae2:calculation_processor",
        "ae2:engineering_processor",
        "ae2:certus_quartz_dust",
        "ae2:ender_dust",
        "ae2:fluix_dust",
        "ae2:sky_dust",
        "ae2:quartz_glass",
        "ae2:quartz_fiber",
        "ae2:fluix_glass_cable",
        "ae2:fluix_covered_cable",
        "ae2:vibration_chamber",
        "ae2:energy_acceptor",
        "ae2:charger",
        "ae2:controller",
        "ae2:chest",
        "ae2:drive",
        "expatternprovider:ex_drive",
        "expatternprovider:drive_upgrade",
        "ae2:interface",
        "expatternprovider:ex_interface",
        "expatternprovider:interface_upgrade",
        "ae2:pattern_provider",
        "expatternprovider:ex_pattern_provider",
        "expatternprovider:pattern_provider_upgrade",
        "ae2:molecular_assembler",
        "expatternprovider:ex_molecular_assembler",
        "ae2:import_bus",
        "ae2:export_bus",
        "ae2:crafting_unit",
        "ae2:cell_component_1k",
        "ae2:spatial_cell_component_2",
    ];
    remove_items.forEach(remove_recipe);

    event.shaped(
        "ae2:inscriber",
        ["ABA", "A C", "ABA"],
        {
            A: "gtceu:stainless_steel_plate",
            B: "gtceu:hv_electric_piston",
            C: "gtceu:annealed_copper_plate"
        }
    );

    function press_recipe(name, color, ingredient, circuit) {
        event.recipes.gtceu.laser_engraver("gtceu:" + name + "_press")
            .itemInputs("gtceu:stainless_steel_plate")
            .notConsumable("#forge:lenses/" + color)
            .itemOutputs("ae2:" + name + "_press")
            .EUt(480)
            .duration(1600);
        event.recipes.gtceu.inscriber("gtceu:" + name + "_print")
            .itemInputs("gtceu:" + ingredient + "_plate")
            .notConsumable("ae2:" + name + "_press")
            .itemOutputs("ae2:printed_" + name)
            .EUt(480)
            .duration(200);
        if (circuit) {
            event.recipes.gtceu.inscriber("gtceu:" + name + "_tin")
                .itemInputs("ae2:printed_" + name, "ae2:printed_silicon", "#gtceu:circuits/hv")
                .inputFluids(Fluid.of("gtceu:tin", 288))
                .itemOutputs("ae2:" + name)
                .EUt(480)
                .duration(240);
            event.recipes.gtceu.inscriber("gtceu:" + name + "_soldering_alloy")
                .itemInputs("ae2:printed_" + name, "ae2:printed_silicon", "#gtceu:circuits/hv")
                .inputFluids(Fluid.of("gtceu:soldering_alloy", 144))
                .itemOutputs("ae2:" + name)
                .EUt(480)
                .duration(240);
        }
    }
    press_recipe("logic_processor", "yellow", "gold", true);
    press_recipe("calculation_processor", "white", "certus_quartz", true);
    press_recipe("engineering_processor", "blue", "diamond", true);
    press_recipe("silicon", "gray", "silicon", false);

    // Basic Materials
    event.recipes.gtceu.mixer("gtceu:fluix_crystal")
        .itemInputs("ae2:charged_certus_quartz_crystal", "minecraft:redstone", "minecraft:quartz")
        .itemOutputs("2x ae2:fluix_crystal")
        .EUt(24)
        .duration(100);
    event.recipes.gtceu.macerator("gtceu:fluix_dust")
        .itemInputs("ae2:fluix_crystal")
        .itemOutputs("ae2:fluix_dust")
        .EUt(2)
        .duration(40);

    event.replaceInput({}, "#forge:dusts/certus_quartz", "gtceu:certus_quartz_dust");
    event.replaceInput({}, "#forge:dusts/ender_pearl", "gtceu:ender_pearl_dust");

    event.recipes.gtceu.alloy_smelter("gtceu:quartz_glass_dust")
        .itemInputs("4x gtceu:glass_dust", "5x gtceu:certus_quartz_dust")
        .itemOutputs("4x gtceu:quartz_glass_dust")
        .EUt(16)
        .duration(100);
    event.recipes.gtceu.alloy_smelter("gtceu:quartz_glass")
        .itemInputs("gtceu:quartz_glass_dust")
        .notConsumable("gtceu:block_casting_mold")
        .itemOutputs("ae2:quartz_glass")
        .EUt(16)
        .duration(100);

    event.recipes.gtceu.wiremill("gtceu:quartz_fiber")
        .itemInputs("#forge:gems/certus_quartz")
        .itemOutputs("2x ae2:quartz_fiber")
        .EUt(7)
        .duration(100);
    event.recipes.gtceu.alloy_smelter("gtceu:fluix_glass_cable")
        .itemInputs("ae2:quartz_fiber", "2x ae2:fluix_crystal")
        .itemOutputs("4x ae2:fluix_glass_cable")
        .EUt(7)
        .duration(160);
    event.recipes.gtceu.assembler("gtceu:fluix_covered_cable_rubber")
        .itemInputs("ae2:fluix_glass_cable")
        .inputFluids(Fluid.of("gtceu:rubber", 144))
        .itemOutputs("ae2:fluix_covered_cable")
        .EUt(7)
        .duration(100);
    event.recipes.gtceu.assembler("gtceu:fluix_covered_cable_silicone_rubber")
        .itemInputs("ae2:fluix_glass_cable")
        .inputFluids(Fluid.of("gtceu:silicone_rubber", 72))
        .itemOutputs("ae2:fluix_covered_cable")
        .EUt(7)
        .duration(100);
    event.recipes.gtceu.assembler("gtceu:fluix_covered_cable")
        .itemInputs("ae2:fluix_glass_cable")
        .inputFluids(Fluid.of("gtceu:styrene_butadiene_rubber", 36))
        .itemOutputs("ae2:fluix_covered_cable")
        .EUt(7)
        .duration(100);
    // Network items and blocks
    event.shaped(
        "ae2:energy_acceptor",
        ["ABA", "BCB", "ABA"],
        {
            A: "gtceu:stainless_steel_plate",
            B: "ae2:quartz_glass",
            C: "gtceu:annealed_copper_plate"
        }
    );
    event.shaped(
        "ae2:charger",
        ["ABA", "A  ", "ABA"],
        {
            A: "gtceu:stainless_steel_plate",
            B: "gtceu:annealed_copper_plate"
        }
    );
    event.recipes.gtceu.assembler("gtceu:controller")
        .itemInputs("4x ae2:smooth_sky_stone_block", "4x gtceu:stainless_steel_frame", "ae2:engineering_processor", "4x ae2:fluix_crystal", "4x ae2:fluix_glass_cable")
        .itemOutputs("ae2:controller")
        .EUt(480)
        .duration(240);
    event.recipes.gtceu.assembler("gtceu:chest")
        .itemInputs("gtceu:hv_machine_hull", "ae2:terminal", "ae2:engineering_processor", "2x ae2:fluix_glass_cable", "#forge:chests/wooden")
        .itemOutputs("ae2:chest")
        .EUt(480)
        .duration(200);
    event.recipes.gtceu.assembler("gtceu:drive")
        .itemInputs("gtceu:hv_machine_hull", "4x ae2:engineering_processor", "4x ae2:fluix_glass_cable", "2x ae2:quartz_glass", "#forge:chests/wooden")
        .itemOutputs("ae2:drive")
        .EUt(480)
        .duration(200);
    event.recipes.gtceu.assembler("gtceu:ex_drive")
        .itemInputs("gtceu:ev_machine_hull", "8x ae2:engineering_processor", "12x ae2:fluix_glass_cable", "4x ae2:quartz_glass", "2x #forge:chests/wooden")
        .itemOutputs("expatternprovider:ex_drive")
        .EUt(1920)
        .duration(400);
    event.shaped(
        "ae2:interface",
        ["ABC", "DEF", "GHG"],
        {
            A: "gtceu:hv_robot_arm",
            B: "ae2:quartz_glass",
            C: "gtceu:hv_conveyor_module",
            D: "ae2:annihilation_core",
            E: "gtceu:hv_machine_hull",
            F: "ae2:formation_core",
            G: "ae2:fluix_glass_cable",
            H: "#forge:chests/wooden"
        }
    );
    event.shaped(
        "expatternprovider:ex_interface",
        ["ABC", "DEF", "GHG"],
        {
            A: "gtceu:ev_robot_arm",
            B: "ae2:quartz_glass",
            C: "gtceu:ev_conveyor_module",
            D: "ae2:annihilation_core",
            E: "gtceu:ev_machine_hull",
            F: "ae2:formation_core",
            G: "ae2:fluix_glass_cable",
            H: "#forge:chests/wooden"
        }
    );
    event.shaped(
        "ae2:pattern_provider",
        ["ABC", "DEF", "GHG"],
        {
            A: "gtceu:hv_robot_arm",
            B: "minecraft:crafting_table",
            C: "gtceu:hv_conveyor_module",
            D: "ae2:annihilation_core",
            E: "gtceu:hv_machine_hull",
            F: "ae2:formation_core",
            G: "ae2:fluix_glass_cable",
            H: "#forge:chests/wooden"
        }
    );
    event.shaped(
        "expatternprovider:ex_pattern_provider",
        ["ABC", "DEF", "GHG"],
        {
            A: "gtceu:ev_robot_arm",
            B: "minecraft:crafting_table",
            C: "gtceu:ev_conveyor_module",
            D: "ae2:annihilation_core",
            E: "gtceu:ev_machine_hull",
            F: "ae2:formation_core",
            G: "ae2:fluix_glass_cable",
            H: "#forge:chests/wooden"
        }
    );
    event.shaped(
        "ae2:molecular_assembler",
        ["ABC", "DEF", "GHG"],
        {
            A: "gtceu:hv_robot_arm",
            B: "ae2:quartz_glass",
            C: "gtceu:hv_conveyor_module",
            D: "ae2:annihilation_core",
            E: "gtceu:hv_machine_hull",
            F: "ae2:formation_core",
            G: "ae2:fluix_glass_cable",
            H: "minecraft:crafting_table"
        }
    );
    event.shaped(
        "expatternprovider:ex_molecular_assembler",
        ["ABC", "DEF", "GHG"],
        {
            A: "gtceu:ev_robot_arm",
            B: "ae2:quartz_glass",
            C: "gtceu:ev_conveyor_module",
            D: "ae2:annihilation_core",
            E: "gtceu:ev_machine_hull",
            F: "ae2:formation_core",
            G: "ae2:fluix_glass_cable",
            H: "minecraft:crafting_table"
        }
    );
    event.shaped(
        "ae2:import_bus",
        ["ABA", "ACA", "BDB"],
        {
            A: "gtceu:stainless_steel_plate",
            B: "ae2:fluix_glass_cable",
            C: "ae2:annihilation_core",
            D: "#forge:chests/wooden"
        }
    );
    event.shaped(
        "ae2:export_bus",
        ["ABA", "ACA", "BDB"],
        {
            A: "gtceu:stainless_steel_plate",
            B: "ae2:fluix_glass_cable",
            C: "ae2:formation_core",
            D: "#forge:chests/wooden"
        }
    );
    event.shaped(
        "ae2:crafting_unit",
        ["ABA", "CDC", "ABA"],
        {
            A: "ae2:fluix_glass_cable",
            B: "ae2:calculation_processor",
            C: "ae2:logic_processor",
            D: "gtceu:hv_machine_hull"
        }
    );
    event.recipes.gtceu.assembler("gtceu:cell_component_1k")
        .itemInputs("ae2:logic_processor", "4x #forge:gems/certus_quartz", "4x gtceu:ram_chip", "4x minecraft:redstone", "2x ae2:fluix_glass_cable")
        .itemOutputs("ae2:cell_component_1k")
        .EUt(360)
        .duration(160);
    event.recipes.gtceu.assembler("gtceu:spatial_cell_component_2")
        .itemInputs("ae2:engineering_processor", "4x ae2:fluix_pearl", "4x gtceu:ilc_chip", "4x minecraft:glowstone_dust", "2x ae2:fluix_glass_cable")
        .itemOutputs("ae2:spatial_cell_component_2")
        .EUt(360)
        .duration(160);

    // For the left recipes, just replace some materials
    event.replaceInput({ mod: "ae2" }, "#forge:ingots/iron", "gtceu:stainless_steel_plate");
    event.replaceInput({ mod: "ae2" }, "#forge:ingots/gold", "gtceu:gold_plate");
    event.replaceInput({ mod: "ae2" }, "#forge:ingots/copper", "gtceu:copper_plate");
    event.replaceInput({ mod: "expatternprovider" }, "#forge:ingots/iron", "gtceu:stainless_steel_plate");
    event.replaceInput({ mod: "expatternprovider" }, "#forge:ingots/gold", "gtceu:gold_plate");
    event.replaceInput({ mod: "expatternprovider" }, "#forge:ingots/copper", "gtceu:copper_plate");
});
