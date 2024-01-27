/*
* mining_drill_bit.js - Register Mining Drill Bits.
*/
StartupEvents.registry('item', event => {
    function create_drill_bit(voltage) {
        event.create("gfs:" + voltage + "_drill_bit")
            .translationKey("item.gfs." + voltage + "_drill_bit")
            .texture("gfs:item/drill_bit/" + voltage + "_drill_bit")
            .unstackable();
    }
    const drill_bit_voltages = [
        "ev", "iv", "luv", "zpm", "uv", "uhv"
    ];
    drill_bit_voltages.forEach(create_drill_bit);
});
