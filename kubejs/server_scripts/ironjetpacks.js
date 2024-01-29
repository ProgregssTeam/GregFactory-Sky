/*
* ironjetpacks.js - Modify recipes about Iron Jetpacks.
*/
ServerEvents.recipes(event => {
    function remove_recipe(name) {
        event.remove({ output: name });
    }
    const remove_items = [
        "ironjetpacks:basic_coil",
        "ironjetpacks:advanced_coil",
        "ironjetpacks:elite_coil",
        "ironjetpacks:ultimate_coil",
    ];
    remove_items.forEach(remove_recipe);

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
    function add_jetpack_recipe(tier, material, voltage, eu) {
        event.recipes.gtceu.assembler("jetpack_tier" + tier)
            .itemInputs("8x #forge:plates/" + material,
                "4x #gtceu:circuits/" + voltage,
                "4x #gtceu:batteries/" + voltage,
                (4 + tier * 4) + "x gtceu:fluid_cell",
                "2x gtceu:" + voltage + "_electric_motor",
                "8x gtceu:" + voltage_to_cable[voltage] + "_single_cable",
                "ironjetpacks:strap"
            )
            .itemOutputs(Item.of("ironjetpacks:jetpack", { Id: "ironjetpacks:" + material }))
            .EUt(eu)
            .duration(300);
    }
    add_jetpack_recipe(0, "steel", "lv", 30);
    add_jetpack_recipe(1, "aluminium", "mv", 120);
    add_jetpack_recipe(2, "stainless_steel", "hv", 480);
    add_jetpack_recipe(3, "titanium", "ev", 1920);
    add_jetpack_recipe(4, "tungsten_steel", "iv", 7680);
    add_jetpack_recipe(5, "osmiridium", "zpm", 122880);
    add_jetpack_recipe(6, "neutronium", "uv", 491520);
});