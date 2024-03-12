ServerEvents.recipes(event => {
    const color_list = [
        "white",
        "light_gray",
        "gray",
        "black",
        "brown",
        "red",
        "orange",
        "yellow",
        "lime",
        "green",
        "cyan",
        "light_blue",
        "blue",
        "purple",
        "magenta",
        "pink",
    ];

    color_list.forEach(color => {
        event.remove({ output: "minecraft:" + color + "_bed" });
        BlockCrafting.addMultiblockStructure(MultiblockStructureBuilder.create("gfs:" + color + "_bed")
            .pattern("f f", "ppp", "wcc")
            .center('w', "minecraft:white_wool")
            .where('c', "minecraft:" + color + "_wool")
            .whereTag('p', "minecraft:planks")
            .whereTag('f', "forge:fences")
            .where(' ', Blocks.AIR)
            .craftingItemTag("forge:tools/mallets")
            .resultItem("minecraft:" + color + "_bed")
            .build());
    });
});
