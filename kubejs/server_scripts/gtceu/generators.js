/*
* generators.js - Modify recipes about generators.
*/
ServerEvents.recipes(event => {
    function remove_recipe(name) {
        event.remove({ id: name });
    }
    const remove_recipes = [
        "minecraft:steam_boiler/lava_bucket",
        "minecraft:large_boiler/lava_bucket",
    ];
    remove_recipes.forEach(remove_recipe);
});