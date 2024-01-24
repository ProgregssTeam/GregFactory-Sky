/*
* chargers.js - Modify recipes about Chargers.
*/
ServerEvents.recipes(event => {
    event.remove({ mod: "chargers" });

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
    function charger_recipe(tier, voltage) {
        event.shaped(
            "chargers:charger_t" + tier,
            ["ABA", "ACA", "DED"],
            {
                A: "gtceu:" + voltage_to_cable[voltage] + "_single_wire",
                B: "#forge:chests/wooden",
                C: "gtceu:" + voltage + "_machine_hull",
                D: "gtceu:red_alloy_single_cable",
                E: "#gtceu:circuits/" + voltage
            }
        );
    }
    charger_recipe(1, "lv");
    charger_recipe(2, "mv");
    charger_recipe(3, "ev");
    charger_recipe(4, "iv");
    event.shaped(
        "chargers:wireless_charger",
        ["ABA", "ACA", "ADA"],
        {
            A: "#forge:plates/tungsten_steel",
            B: "minecraft:ender_pearl",
            C: "chargers:charger_t4",
            D: "minecraft:redstone"
        }
    );
});
