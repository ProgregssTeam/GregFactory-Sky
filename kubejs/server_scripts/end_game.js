/*
* end_game.js - Add Recipes About End Game Items.
*/
ServerEvents.recipes(event => {
    event.shaped(
        "gfs:superconduct_ring",
        ["ABC", "HID", "GFE"],
        {
            A: "gtceu:manganese_phosphide_single_wire",
            B: "gtceu:magnesium_diboride_single_wire",
            C: "gtceu:mercury_barium_calcium_cuprate_single_wire",
            D: "gtceu:uranium_triplatinum_single_wire",
            E: "gtceu:samarium_iron_arsenic_oxide_single_wire",
            F: "gtceu:indium_tin_barium_titanium_cuprate_single_wire",
            G: "gtceu:uranium_rhodium_dinaquadide_single_wire",
            H: "gtceu:enriched_naquadah_trinium_europium_duranide_single_wire",
            I: "gtceu:ruthenium_trinium_americium_neutronate_single_wire"
        }
    );

    event.shaped(
        "gtceu:uv_atom_breaker",
        ["ABA", "CDE", "FGH"],
        {
            A: "#gtceu:circuits/uhv",
            B: "gfs:superconduct_ring",
            C: "gtceu:uv_electric_pump",
            D: "gtceu:uv_machine_hull",
            E: "gtceu:uv_conveyor_module",
            F: "gtceu:uv_sensor",
            G: "gtceu:uv_field_generator",
            H: "gtceu:uv_emitter"
        }
    );
    function add_atom_breaker_recipe(name, input, isitem, hydrogen, neutron) {
        var recipe = event.recipes.gtceu.atom_breaker("atom_breaker/" + name)
            .outputFluids(Fluid.of("gtceu:hydrogen", hydrogen * 1000),
                Fluid.of("gtceu:neutron_fluid", neutron * 1000))
            .EUt(300000)
            .duration(20 * (hydrogen + neutron));
        if (isitem)
            recipe.itemInputs(input);
        else
            recipe.inputFluids(Fluid.of(input, 1000));
    }
    add_atom_breaker_recipe("deuterium", "gtceu:deuterium", false, 1, 1);
    add_atom_breaker_recipe("tritium", "gtceu:tritium", false, 1, 2);
    add_atom_breaker_recipe("helium", "gtceu:helium", false, 2, 2);
    add_atom_breaker_recipe("lithium_dust", "gtceu:lithium_dust", true, 3, 4);
    add_atom_breaker_recipe("beryllium_dust", "gtceu:beryllium_dust", true, 4, 5);
    add_atom_breaker_recipe("boron_dust", "gtceu:boron_dust", true, 5, 6);

    event.shaped(
        "gtceu:uv_proton_confiner",
        ["ABA", "CDC", "EFE"],
        {
            A: "#gtceu:circuits/uhv",
            B: "gfs:superconduct_ring",
            C: "gtceu:uv_electric_pump",
            D: "gtceu:uv_machine_hull",
            E: "gtceu:uv_field_generator",
            F: "gtceu:uv_sensor"
        }
    );
    event.recipes.gtceu.proton_confiner("proton_confine")
        .inputFluids(Fluid.of("gtceu:hydrogen", 1000))
        .outputFluids(Fluid.of("gtceu:proton_fluid", 1000))
        .EUt(300000)
        .duration(100);

    event.shaped(
        "gtceu:uv_final_test",
        ["ABA", "CDE", "ABA"],
        {
            A: "gtceu:yttrium_barium_cuprate_single_cable",
            B: "#gtceu:circuits/uv",
            C: "gtceu:uv_robot_arm",
            D: "gtceu:uv_machine_hull",
            E: "gtceu:uv_electric_piston",
        }
    );
    event.recipes.gtceu.final_test("final_test")
        .circuit(16)
        .itemInputs("gtceu:neutronium_plate", "#minecraft:music_discs")
        .inputFluids(Fluid.of("gtceu:proton_fluid", 128000), Fluid.of("gtceu:neutron_fluid", 128000))
        .itemOutputs("gtceu:nan_certificate")
        .outputFluids(Fluid.of("minecraft:water", 1000))
        .EUt(7)
        .duration(65535 * 20);

    event.recipes.gtceu.assembly_line("casing_atomic_mixing")
        .itemInputs("gtceu:neutronium_frame",
            "6x gtceu:neutronium_plate",
            "#gtceu:circuits/uhv",
            "2x gtceu:ruthenium_trinium_americium_neutronate_single_wire")
        .inputFluids(Fluid.of("gtceu:proton_fluid", 1024), Fluid.of("gtceu:neutron_fluid", 1024))
        .itemOutputs("2x gtceu:atomic_casing")
        .EUt(1200000)
        .duration(50);

    event.recipes.gtceu.assembly_line("emulator")
        .itemInputs("gtceu:atomic_casing",
            "gtceu:max_battery",
            "8x #gtceu:circuits/uhv",
            "4x gtceu:quantum_star",
            "6x gtceu:double_neutronium_plate",
            "gtceu:uv_robot_arm",
            "8x gtceu:uv_field_generator",
            "64x gtceu:ruthenium_trinium_americium_neutronate_single_wire")
        .inputFluids(Fluid.of("gtceu:soldering_alloy", 5760),
            Fluid.of("gtceu:europium", 5760))
        .itemOutputs("gtceu:emulator")
        .EUt(1200000)
        .duration(400);

    event.recipes.gtceu.emulator("final_emulate")
        .itemInputs("ftbquests:book")
        .notConsumable("gtceu:nan_certificate")
        .itemOutputs("ftbquests:book", "gtceu:nan_certificate",
            "2x gtceu:creative_chest", "gtceu:creative_tank", "gtceu:creative_energy")
        .EUt(1200000)
        .duration(20 * 60 * 16);
});