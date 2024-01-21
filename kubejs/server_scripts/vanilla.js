ServerEvents.recipes(event => {
    event.remove({ id: "minecraft:charcoal" });
    event.remove({ output: "minecraft:crafting_table" });
    event.shaped(
        "minecraft:crafting_table",
        ["AA", "AA"],
        { A: "#minecraft:planks" }
    );
});