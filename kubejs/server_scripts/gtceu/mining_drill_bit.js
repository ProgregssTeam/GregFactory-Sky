ServerEvents.recipes(event => {
    event.shaped('gfs:ev_drill_bit', [
        ' C ',
        ' B ',
        ' A '
    ], {
        A: 'gtceu:titanium_drill_head',
        B: 'gtceu:ev_machine_hull',
        C: '#gtceu:circuits/ev'
    }
    )
    event.shaped('gfs:iv_drill_bit', [
        ' C ',
        ' B ',
        ' A '
    ], {
        A: 'gtceu:tungsten_steel_drill_head',
        B: 'gtceu:iv_machine_hull',
        C: '#gtceu:circuits/iv'
    }
    )
    event.shaped('gfs:luv_drill_bit', [
        ' C ',
        ' B ',
        ' A '
    ], {
        A: 'gtceu:hsse_drill_head',
        B: 'gtceu:luv_machine_hull',
        C: '#gtceu:circuits/luv'
    }
    )
    event.shaped('gfs:zpm_drill_bit', [
        ' C ',
        ' B ',
        ' A '
    ], {
        A: 'gtceu:hsse_drill_head',
        B: 'gtceu:zpm_machine_hull',
        C: '#gtceu:circuits/zpm'
    }
    )
    event.shaped('gfs:uv_drill_bit', [
        ' C ',
        ' B ',
        ' A '
    ], {
        A: 'gtceu:duranium_drill_head',
        B: 'gtceu:uv_machine_hull',
        C: '#gtceu:circuits/uv'
    }
    )
    event.shaped('gfs:uhv_drill_bit', [
        ' C ',
        ' B ',
        ' A '
    ], {
        A: 'gtceu:neutronium_drill_head',
        B: 'gtceu:uhv_machine_hull',
        C: '#gtceu:circuits/uhv'
    }
    )
})