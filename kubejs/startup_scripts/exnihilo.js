ItemEvents.modification(event => {
    function modify_mesh(level, newname) {
        event.modify("exdeorum:" + level + "_mesh", item => {
            item.nameKey = "item.gfs." + newname + "_mesh";
        });
    }
    modify_mesh("string", "string");
    modify_mesh("flint", "tin_alloy");
    modify_mesh("iron", "steel");
    modify_mesh("golden", "aluminium");
    modify_mesh("diamond", "stainless_steel");
    modify_mesh("netherite", "titanium");
});