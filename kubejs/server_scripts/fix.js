ServerEvents.recipes(event => {
    event.remove({ id: "minecraft:charcoal" });
    event.remove({ output: "minecraft:crafting_table" });
    event.shaped(
        "minecraft:crafting_table",
        ["AA", "AA"],
        { A: "#minecraft:planks" }
    );

    event.remove({ id: "gtceu:shapeless/compressed_clay" });
    event.shapeless(
        "gtceu:compressed_clay",
        ["gtceu:brick_wooden_form", "minecraft:clay_ball"]
    ).keepIngredient("gtceu:brick_wooden_form");

    event.remove({ id: "gtceu:shaped/compressed_coke_clay" });
    event.shaped(
        "3x gtceu:compressed_coke_clay",
        ["AAA", "BXB", "BBB"],
        {
            A: "minecraft:clay_ball",
            B: "#minecraft:sand",
            X: "gtceu:brick_wooden_form"
        }
    ).keepIngredient("gtceu:brick_wooden_form");

    event.custom({
        type: "exdeorum:barrel_mixing",
        fluid: "minecraft:milk",
        fluid_amount: 1000,
        ingredient: { tag: "forge:mushrooms" },
        result: "minecraft:slime_block"
    });

    event.recipes.gtceu.macerator("gtceu:macerator/macerate_obsidian")
        .itemInputs("minecraft:obsidian")
        .itemOutputs("gtceu:obsidian_dust")
        .EUt(30)
        .duration(240);

    event.recipes.gtceu.bender("gtceu:bender/bend_obsidian_plate_to_dense_plate")
        .itemInputs("9x #forge:plates/obsidian")
        .circuit(9)
        .itemOutputs("gtceu:dense_obsidian_plate")
        .EUt(96)
        .duration(400);

    event.shaped(
        "minecraft:elytra",
        ["ABA", "ACA", "ABA"],
        {
            A: "minecraft:phantom_membrane",
            B: "minecraft:string",
            C: "ironjetpacks:strap"
        }
    );

    event.shaped(
        "4x minecraft:chest",
        ["AAA", "A A", "AAA"],
        {
            A: "#minecraft:logs"
        }
    );
});