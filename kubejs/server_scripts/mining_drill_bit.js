ServerEvents.recipes(event => {
    event.shaped('kubejs:ev_drill_bit', [
        ' C ',
        ' B ',
        ' A '
    ], {
        A: 'gtceu:titanium_drill_head',
        B: 'gtceu:ev_machine_casing',
        C: '#gtceu:circuits/ev'
    }
    )
    event.shaped('kubejs:iv_drill_bit', [
        ' C ',
        ' B ',
        ' A '
    ], {
        A: 'gtceu:tungsten_steel_drill_head',
        B: 'gtceu:iv_machine_casing',
        C: '#gtceu:circuits/iv'
    }
    )
    event.shaped('kubejs:luv_drill_bit', [
        ' C ',
        ' B ',
        ' A '
    ], {
        A: 'gtceu:hsse_drill_head',
        B: 'gtceu:luv_machine_casing',
        C: '#gtceu:circuits/luv'
    }
    )
    event.shaped('kubejs:zpm_drill_bit', [
        ' C ',
        ' B ',
        ' A '
    ], {
        A: 'gtceu:hsse_drill_head',
        B: 'gtceu:zpm_machine_casing',
        C: '#gtceu:circuits/zpm'
    }
    )
    event.shaped('kubejs:uv_drill_bit', [
        ' C ',
        ' B ',
        ' A '
    ], {
        A: 'gtceu:duranium_drill_head',
        B: 'gtceu:uv_machine_casing',
        C: '#gtceu:circuits/uv'
    }
    )
    event.shaped('kubejs:uhv_drill_bit', [
        ' C ',
        ' B ',
        ' A '
    ], {
        A: 'gtceu:neutronium_drill_head',
        B: 'gtceu:uhv_machine_casing',
        C: '#gtceu:circuits/uhv'
    }
    )
})