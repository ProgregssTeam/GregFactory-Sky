ItemEvents.modification(event => {
    function modify_mesh(level, newname) {
        event.modify("exnihilosequentia:" + level + "_mesh", item => {
            item.nameKey = "item.gfs." + newname + "_mesh";
        });
    }
    modify_mesh("flint", "tin_alloy");
    modify_mesh("iron", "steel");
    modify_mesh("diamond", "aluminium");
    modify_mesh("emerald", "stainless_steel");
    modify_mesh("netherite", "titanium");
});