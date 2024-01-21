/*
* uu_matter.js - Register uu matter.
*/
GTCEuStartupEvents.registry("gtceu:material", event => {
    event.create("mysterious_matter")
        //.dust()
        .fluid()
        .color(0x800080);
});