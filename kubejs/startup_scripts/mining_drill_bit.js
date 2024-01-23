/*
* mining_drill_bit.js - Register Mining Drill Bit.
*/
StartupEvents.registry('item', e => {
    e.create('ev_drill_bit').maxStackSize(96000).texture('gfs:item/ev_drill_bit')
    e.create('iv_drill_bit').maxStackSize(131200).texture('gfs:item/iv_drill_bit')
    e.create('luv_drill_bit').maxStackSize(205600).texture('gfs:item/luv_drill_bit')
    e.create('zpm_drill_bit').maxStackSize(323200).texture('gfs:item/zpm_drill_bit')
    e.create('uv_drill_bit').maxStackSize(446900).texture('gfs:item/uv_drill_bit')
    e.create('uhv_drill_bit').maxStackSize(600888).texture('gfs:item/uhv_drill_bit')
})