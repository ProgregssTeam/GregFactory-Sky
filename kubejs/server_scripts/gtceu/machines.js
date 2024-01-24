/*
* machines.js - Add recipes for our new machines.
*/
ServerEvents.recipes(event => {
    // Steam machines
    event.shaped(
        "gtceu:lp_steam_sieve",
        ["AXA", "BYB", "AAA"],
        {
            A: "gtceu:bronze_small_fluid_pipe",
            X: "exdeorum:oak_sieve",
            B: "#forge:pistons",
            Y: "gtceu:bronze_machine_casing"
        }
    );
    event.shaped(
        "gtceu:hp_steam_sieve",
        ["ABA", "CDC", "AAA"],
        {
            A: "gtceu:wrought_iron_plate",
            B: "gtceu:steel_plate",
            C: "gtceu:tin_alloy_small_fluid_pipe",
            D: "gtceu:lp_steam_sieve"
        }
    );

    // Electrics
    const voltage_to_cable = {
        "lv": "tin",
        "mv": "copper",
        "hv": "gold",
        "ev": "aluminium",
        "iv": "platinum",
        "luv": "niobium_titanium",
        "zpm": "vanadium_gallium",
        "uv": "yttrium_barium_cuprate"
    };
    const voltages = [
        "lv", "mv", "hv", "ev", "iv", "luv", "zpm", "uv"
    ];

    // Create machine recipes for a specfic voltage
    function create_recipe_voltage(voltage) {
        const volt = voltages[voltage];
        if (voltage >= 2) {
            event.shaped(
                "gtceu:" + volt + "_inscriber",
                ["AXA", "BYC", "DED"],
                {
                    A: "gtceu:" + volt + "_electric_piston",
                    X: "ae2:inscriber",
                    B: "gtceu:" + volt + "_robot_arm",
                    Y: "gtceu:" + volt + "_machine_hull",
                    C: "gtceu:" + volt + "_conveyor_module",
                    D: "#gtceu:circuits/" + volt,
                    E: "gtceu:" + voltage_to_cable[volt] + "_single_cable"
                }
            );
        }
        event.shaped(
            "gtceu:" + volt + "_sieve",
            ["AXA", "BYB", "CAC"],
            {
                A: "gtceu:" + voltage_to_cable[volt] + "_single_cable",
                X: "exdeorum:oak_sieve",
                B: "gtceu:" + volt + "_electric_piston",
                Y: "gtceu:" + volt + "_machine_hull",
                C: "#gtceu:circuits/" + volt
            }
        );
    }

    // Create all
    [0, 1, 2, 3, 4, 5, 6, 7].forEach(create_recipe_voltage);
});