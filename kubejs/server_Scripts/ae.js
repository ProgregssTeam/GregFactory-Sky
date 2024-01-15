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
        "ae2:quartz_glass"
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
            .EUt(120)
            .duration(1600);
        event.recipes.gtceu.inscriber("gtceu:" + name + "_print")
            .itemInputs("gtceu:" + ingredient + "_plate")
            .notConsumable("ae2:" + name + "_press")
            .itemOutputs("ae2:printed_" + name)
            .EUt(120)
            .duration(200);
        if (circuit) {
            event.recipes.gtceu.inscriber("gtceu:" + name + "_tin")
                .itemInputs("ae2:printed_" + name, "ae2:printed_silicon", "#forge:circuits/hv")
                .inputFluids(Fluid.of("gtceu:tin", 288))
                .itemOutputs("ae2:" + name)
                .EUt(120)
                .duration(240);
            event.recipes.gtceu.inscriber("gtceu:" + name + "_soldering_alloy")
                .itemInputs("ae2:printed_" + name, "ae2:printed_silicon", "#forge:circuits/hv")
                .inputFluids(Fluid.of("gtceu:soldering_alloy", 144))
                .itemOutputs("ae2:" + name)
                .EUt(120)
                .duration(240);
        }
    }
    press_recipe("logic_processor", "yellow", "gold", true);
    press_recipe("calculation_processor", "white", "certus_quartz", true);
    press_recipe("engineering_processor", "blue", "diamond", true);
    press_recipe("silicon", "gray", "silicon", false);

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
})