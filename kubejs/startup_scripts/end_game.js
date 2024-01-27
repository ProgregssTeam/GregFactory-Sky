/*
* end_game.js - Register End Game Items.
*/
StartupEvents.registry("item", event => {
    event.create("gfs:superconduct_ring")
        .translationKey("item.gfs.superconduct_ring")
        .texture("gfs:item/end_game/superconduct_ring");
});
