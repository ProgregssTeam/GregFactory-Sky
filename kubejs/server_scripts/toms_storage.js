/*
* toms_storage.js - Modify recipes about Tom's Storage.
*/
ServerEvents.recipes(event => {
    /*
    function remove_recipe(name) {
        event.remove({ output: name });
    }
    const remove_items = [
    ];
    remove_items.forEach(remove_recipe);
    */

    event.replaceInput({ mod: "toms_storage" }, "#minecraft:planks", "gtceu:wood_plate");
    event.replaceInput({ mod: "toms_storage" }, "minecraft:diamond", "gtceu:diamond_plate");
    event.replaceInput({ mod: "toms_storage" }, "minecraft:ender_pearl", "gtceu:ender_pearl_plate");
});