ServerEvents.recipes(event => {
    function remove_recipe(name) {
        event.remove({ output: name });
    }
    const remove_items = [
        "buildinggadgets2:gadget_building",
        "buildinggadgets2:gadget_exchanging",
        "buildinggadgets2:gadget_copy_paste",
        "buildinggadgets2:gadget_cut_paste",
        "buildinggadgets2:gadget_destruction",
        "buildinggadgets2:template_manager",
    ];
    remove_items.forEach(remove_recipe);

    event.shaped(
        "buildinggadgets2:gadget_building",
        ["ABC", "DED", "BFB"],
        {
            A: "gtceu:lv_emitter",
            B: "gtceu:steel_plate",
            C: "gtceu:lv_sensor",
            D: "#gtceu:circuits/lv",
            E: "gtceu:red_alloy_plate",
            F: "gtceu:tin_single_cable",
        }
    );
    event.shaped(
        "buildinggadgets2:gadget_exchanging",
        ["ABC", "DED", "BFB"],
        {
            A: "gtceu:lv_emitter",
            B: "gtceu:steel_plate",
            C: "gtceu:lv_sensor",
            D: "#gtceu:circuits/lv",
            E: "gtceu:lapis_plate",
            F: "gtceu:tin_single_cable",
        }
    );
    event.shaped(
        "buildinggadgets2:gadget_copy_paste",
        ["ABC", "DED", "BFB"],
        {
            A: "gtceu:lv_emitter",
            B: "gtceu:steel_plate",
            C: "gtceu:lv_sensor",
            D: "#gtceu:circuits/lv",
            E: "gtceu:emerald_plate",
            F: "gtceu:tin_single_cable",
        }
    );
    event.shaped(
        "buildinggadgets2:gadget_cut_paste",
        ["ABC", "DED", "BFB"],
        {
            A: "gtceu:lv_emitter",
            B: "gtceu:steel_plate",
            C: "gtceu:lv_sensor",
            D: "#gtceu:circuits/lv",
            E: "gtceu:ruby_plate",
            F: "gtceu:tin_single_cable",
        }
    );
    event.shaped(
        "buildinggadgets2:gadget_destruction",
        ["ABC", "DED", "BFB"],
        {
            A: "gtceu:lv_emitter",
            B: "gtceu:steel_plate",
            C: "gtceu:lv_sensor",
            D: "#gtceu:circuits/lv",
            E: "gtceu:diamond_plate",
            F: "gtceu:tin_single_cable",
        }
    );
    event.shaped(
        "buildinggadgets2:template_manager",
        ["ABA", "CDC", "AEA"],
        {
            A: "gtceu:tin_single_cable",
            B: "#forge:chests/wooden",
            C: "#gtceu:circuits/lv",
            D: "gtceu:lv_machine_hull",
            E: "gtceu:lv_electric_piston"
        }
    );
});