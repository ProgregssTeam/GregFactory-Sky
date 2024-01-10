/*
* machines.js - Add recipes for our new machines.
*/
ServerEvents.recipes(event => {
    // Steam machines
    event.shaped(
        "gtceu:lp_steamsieve",
        ["AXA", "BYB", "AAA"],
        {
            A: "gtceu:bronze_small_fluid_pipe",
            X: "#exnihilosequentia:sieves",
            B: "#forge:pistons",
            Y: "gtceu:bronze_machine_casing"
        }
    );
    event.shaped(
        "gtceu:hp_steamsieve",
        ["AAA", "BYB", "AAA"],
        {
            A: "gtceu:wrought_iron_plate",
            B: "gtceu:tin_alloy_small_fluid_pipe",
            Y: "gtceu:lp_steamsieve"
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
    }

    // Create machine recipes for a specfic voltage
    function create_recipe_voltage(voltage) {
        event.shaped(
            "gtceu:" + voltage + "_inscriber",
            ["AXA", "BYC", "DED"],
            {
                A: "gtceu:" + voltage + "_electric_piston",
                X: "ae2:inscriber",
                B: "gtceu:" + voltage + "_robot_arm",
                Y: "gtceu:" + voltage + "_machine_hull",
                C: "gtceu:" + voltage + "_conveyor_module",
                D: "#forge:circuits/" + voltage,
                E: "gtceu:" + voltage_to_cable[voltage] + "_single_cable"
            }
        );
        event.shaped(
            "gtceu:" + voltage + "_sieve",
            ["AXA", "BYB", "CAC"],
            {
                A: "gtceu:" + voltage_to_cable[voltage] + "_single_cable",
                X: "#exnihilosequentia:sieves",
                B: "gtceu:" + voltage + "_electric_piston",
                Y: "gtceu:" + voltage + "_machine_hull",
                C: "#forge:circuits/" + voltage
            }
        );
    }

    // Create all
    const voltages = [
        "lv", "mv", "hv", "ev", "iv", "luv", "zpm", "uv"
    ];
    voltages.forEach(create_recipe_voltage);
});