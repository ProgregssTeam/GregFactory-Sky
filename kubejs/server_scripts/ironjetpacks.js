/*
* ironjetpacks.js - Modify recipes about Iron Jetpacks.
*/
ServerEvents.recipes(event => {
    function add_jetpack_recipe(tier, material, voltage, eu) {
        event.recipes.gtceu.assembler("jetpack_tier" + tier)
            .itemInputs()
            .itemOutputs(Item.of("ironjetpacks:jetpack").withNBT({ Id: "ironjetpacks:titanium", Throttle: 1.0 }))
            .EUt(eu)
            .duration(300);
    }
    add_jetpack_recipe(0, "steel", "lv", 30);
    add_jetpack_recipe(0, "aluminium", "mv", 120);
    add_jetpack_recipe(0, "stainless_steel", "lv", 480);
    add_jetpack_recipe(0, "titanium", "ev", 1920);
    add_jetpack_recipe(0, "tungsten_steel", "iv", 7680);
    add_jetpack_recipe(0, "osmiridium", "zpm", 122880);
    add_jetpack_recipe(0, "neutronium", "uv", 491520);
});