/*
* industrialforegoing.js - Modify recipes about Industrial Foregoing.
*/
ServerEvents.recipes(event => {
    function remove_recipe(name) {
        event.remove({ output: name });
    }
    const remove_items = [
        "industrialforegoing:machine_frame_pity",
        "industrialforegoing:pitiful_generator",
        "industrialforegoing:bioreactor",
        "industrialforegoing:biofuel_generator",
        "industrialforegoing:mycelial_reactor",
        "industrialforegoing:mycelial_furnace",
        "industrialforegoing:mycelial_slimey",
        "industrialforegoing:mycelial_culinary",
        "industrialforegoing:mycelial_potion",
        "industrialforegoing:mycelial_disenchantment",
        "industrialforegoing:mycelial_ender",
        "industrialforegoing:mycelial_explosive",
        "industrialforegoing:mycelial_frosty",
        "industrialforegoing:mycelial_halitosis",
        "industrialforegoing:mycelial_magma",
        "industrialforegoing:mycelial_pink",
        "industrialforegoing:mycelial_netherstar",
        "industrialforegoing:mycelial_death",
        "industrialforegoing:mycelial_rocket",
        "industrialforegoing:mycelial_crimed",
        "industrialforegoing:mycelial_meatallurgic",
        "industrialforegoing:infinity_charger",
        "industrialforegoing:fluid_extractor",
        "industrialforegoing:latex_processing_unit",
        "industrialforegoing:material_stonework_factory",
        "industrialforegoing:ore_laser_base",
        "industrialforegoing:laser_drill",
        "industrialforegoing:fluid_laser_base",
        "industrialforegoing:resourceful_furnace",
    ];
    remove_items.forEach(remove_recipe);

    function remove_recipe_id(name) {
        event.remove({ id: name });
    }
    const remove_recipes = [
        "industrialforegoing:iron_gear",
        "industrialforegoing:gold_gear",
        "industrialforegoing:diamond_gear",
    ];
    remove_recipes.forEach(remove_recipe_id);

    event.replaceInput({ mod: "industrialforegoing" }, "industrialforegoing:plastic", "gtceu:polyethylene_plate");
    event.recipes.gtceu.assembler("industrialforegoing:machine_frame_pity")
        .itemInputs("gtceu:mv_machine_hull", "4x gtceu:steel_frame", "4x #gtceu:circuits/mv")
        .inputFluids(Fluid.of("gtceu:polyethylene", 288))
        .itemOutputs("industrialforegoing:machine_frame_pity")
        .EUt(120)
        .duration(200);

    event.replaceInput({ mod: "industrialforegoing" }, "#forge:gears/gold", "#forge:gears/aluminium");
});