/*
* mining_drill_bit.js - Register Mining Drill Bit.
*/
StartupEvents.registry('item', e => {
    e.create('ev_drill_bit').maxStackSize(1).texture('gfs:item/ev_drill_bit')
    e.create('iv_drill_bit').maxStackSize(1).texture('gfs:item/iv_drill_bit')
    e.create('luv_drill_bit').maxStackSize(1).texture('gfs:item/luv_drill_bit')
    e.create('zpm_drill_bit').maxStackSize(1).texture('gfs:item/zpm_drill_bit')
    e.create('uv_drill_bit').maxStackSize(1).texture('gfs:item/uv_drill_bit')
    e.create('uhv_drill_bit').maxStackSize(1).texture('gfs:item/uhv_drill_bit')
})