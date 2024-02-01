/*
* industrialforegoing.js - Modify recipes about Industrial Foregoing.
*/
ServerEvents.recipes(event => {
    function remove_recipe(name) {
        event.remove({ output: name });
    }
    const remove_items = [
        "industrialforegoing:machine_frame_pity",
        "industrialforegoing:pitiful_generator",
        "industrialforegoing:bioreactor",
        "industrialforegoing:biofuel_generator",
        "industrialforegoing:mycelial_reactor",
        "industrialforegoing:mycelial_furnace",
        "industrialforegoing:mycelial_slimey",
        "industrialforegoing:mycelial_culinary",
        "industrialforegoing:mycelial_potion",
        "industrialforegoing:mycelial_disenchantment",
        "industrialforegoing:mycelial_ender",
        "industrialforegoing:mycelial_explosive",
        "industrialforegoing:mycelial_frosty",
        "industrialforegoing:mycelial_halitosis",
        "industrialforegoing:mycelial_magma",
        "industrialforegoing:mycelial_pink",
        "industrialforegoing:mycelial_netherstar",
        "industrialforegoing:mycelial_death",
        "industrialforegoing:mycelial_rocket",
        "industrialforegoing:mycelial_crimed",
        "industrialforegoing:mycelial_meatallurgic",
        "industrialforegoing:infinity_charger",
        "industrialforegoing:fluid_extractor",
        "industrialforegoing:latex_processing_unit",
        "industrialforegoing:material_stonework_factory",
        "industrialforegoing:ore_laser_base",
        "industrialforegoing:laser_drill",
        "industrialforegoing:fluid_laser_base",
        "industrialforegoing:resourceful_furnace",
    ];
    remove_items.forEach(remove_recipe);

    function remove_recipe_id(name) {
        event.remove({ id: name });
    }
    const remove_recipes = [
        "industrialforegoing:iron_gear",
        "industrialforegoing:gold_gear",
        "industrialforegoing:diamond_gear",
    ];
    remove_recipes.forEach(remove_recipe_id);

    event.replaceInput({ mod: "industrialforegoing" }, "industrialforegoing:plastic", "gtceu:polyethylene_plate");
    event.recipes.gtceu.assembler("industrialforegoing:machine_frame_pity")
        .itemInputs("gtceu:mv_machine_hull", "4x gtceu:steel_frame", "4x #gtceu:circuits/mv")
        .inputFluids(Fluid.of("gtceu:polyethylene", 288))
        .itemOutputs("industrialforegoing:machine_frame_pity")
        .EUt(120)
        .duration(200);

    event.replaceInput({ mod: "industrialforegoing" }, "#forge:gears/gold", "#forge:gears/aluminium");

    event.remove({ type: "industrialforegoing:dissolution_chamber" });

    /**
     * @param {Internal.ItemStack_} output
     * @param {Array<Special.Item|Special.ItemTag>} input
     * @param {Internal.FluidStack_} inputFluid
     * @param {Number} processingTime
     * @returns {void}
     */
    function dissolution_chamber(output, input, inputFluid, processingTime) {
        event.custom({
            type: "industrialforegoing:dissolution_chamber",
            input: input.map((element) =>
                element.startsWith("#") ? { tag: element.replace("#", "") } : { item: element }
            ),
            inputFluid: `{Amount:${inputFluid.amount},FluidName:"${inputFluid.id}"}`,
            output: Item.of(output).toJson(),
            processingTime: processingTime,
        });
    }

    dissolution_chamber(
        "industrialforegoing:machine_frame_advanced",
        [
            "gtceu:polyethylene_plate",
            "#industrialforegoing:machine_frame/simple",
            "gtceu:polyethylene_plate",
            "minecraft:netherite_scrap",
            "minecraft:netherite_scrap",
            "#forge:ingots/gold",
            "#forge:gears/diamond",
            "#forge:ingots/gold",
        ],
        Fluid.of("industrialforegoing:pink_slime", 500),
        300
    );
    dissolution_chamber(
        "industrialforegoing:efficiency_addon_1",
        [
            "minecraft:redstone",
            "minecraft:redstone",
            "minecraft:glass_pane",
            "minecraft:glass_pane",
            "#forge:gears/aluminium",
            "#forge:gears/aluminium",
            "minecraft:blaze_rod",
            "minecraft:blaze_rod",
        ],
        Fluid.of("gtceu:polyethylene", 1000),
        200
    );
    dissolution_chamber(
        "industrialforegoing:efficiency_addon_2",
        [
            "minecraft:redstone",
            "minecraft:redstone",
            "minecraft:glass_pane",
            "minecraft:glass_pane",
            "#forge:gears/diamond",
            "#forge:gears/diamond",
            "minecraft:blaze_rod",
            "minecraft:blaze_rod",
        ],
        Fluid.of("gtceu:polyethylene", 1000),
        200
    );
    dissolution_chamber(
        "industrialforegoing:infinity_backpack",
        [
            "industrialforegoing:common_black_hole_unit",
            "#forge:gears/diamond",
            "industrialforegoing:common_black_hole_unit",
            "industrialforegoing:common_black_hole_tank",
            "industrialforegoing:common_black_hole_tank",
            "#forge:gears/aluminium",
            "#forge:gears/aluminium",
            "#forge:gears/aluminium",
        ],
        Fluid.of("industrialforegoing:pink_slime", 2000),
        400
    );
    dissolution_chamber(
        "industrialforegoing:infinity_drill",
        [
            "minecraft:diamond_block",
            "minecraft:diamond_shovel",
            "minecraft:diamond_block",
            "minecraft:diamond_block",
            "industrialforegoing:range_addon11",
            "#forge:gears/aluminium",
            "#forge:gears/aluminium",
            "#forge:gears/aluminium",
        ],
        Fluid.of("industrialforegoing:pink_slime", 2000),
        400
    );
    dissolution_chamber(
        "industrialforegoing:infinity_hammer",
        [
            "minecraft:diamond_block",
            "minecraft:diamond_sword",
            "minecraft:diamond_block",
            "minecraft:diamond_axe",
            "industrialforegoing:range_addon11",
            "#forge:gears/aluminium",
            "#forge:gears/aluminium",
            "#forge:gears/aluminium",
        ],
        Fluid.of("industrialforegoing:pink_slime", 2000),
        400
    );
    dissolution_chamber(
        "industrialforegoing:infinity_launcher",
        [
            "minecraft:diamond_block",
            "minecraft:bow",
            "minecraft:diamond_block",
            "industrialforegoing:mob_imprisonment_tool",
            "industrialforegoing:range_addon11",
            "#forge:gears/aluminium",
            "#forge:gears/aluminium",
            "#forge:gears/aluminium",
        ],
        Fluid.of("industrialforegoing:pink_slime", 2000),
        400
    );
    dissolution_chamber(
        "industrialforegoing:infinity_nuke",
        [
            "minecraft:tnt",
            "minecraft:tnt",
            "minecraft:tnt",
            "minecraft:tnt",
            "industrialforegoing:range_addon11",
            "minecraft:diamond_block",
            "minecraft:nether_star",
            "minecraft:nether_star",
        ],
        Fluid.of("industrialforegoing:ether_gas", 2000),
        400
    );
    dissolution_chamber(
        "industrialforegoing:infinity_saw",
        [
            "minecraft:diamond_block",
            "minecraft:diamond_pickaxe",
            "minecraft:diamond_axe",
            "minecraft:diamond_axe",
            "industrialforegoing:range_addon11",
            "#forge:gears/aluminium",
            "#forge:gears/aluminium",
            "#forge:gears/aluminium",
        ],
        Fluid.of("industrialforegoing:pink_slime", 2000),
        400
    );
    dissolution_chamber(
        "industrialforegoing:infinity_trident",
        [
            "minecraft:diamond_block",
            "minecraft:trident",
            "minecraft:diamond_block",
            "minecraft:diamond_hoe",
            "industrialforegoing:range_addon11",
            "#forge:gears/aluminium",
            "#forge:gears/aluminium",
            "#forge:gears/aluminium",
        ],
        Fluid.of("industrialforegoing:pink_slime", 2000),
        400
    );
    dissolution_chamber(
        "industrialforegoing:laser_lens0",
        [
            "#forge:glass_panes",
            "#forge:glass_panes",
            "#forge:glass_panes",
            "#forge:glass_panes",
            "#forge:dyes/white",
        ],
        Fluid.of("gtceu:polyethylene", 250),
        100
    );
    dissolution_chamber(
        "industrialforegoing:laser_lens1",
        [
            "#forge:glass_panes",
            "#forge:glass_panes",
            "#forge:glass_panes",
            "#forge:glass_panes",
            "#forge:dyes/orange",
        ],
        Fluid.of("gtceu:polyethylene", 250),
        100
    );
    dissolution_chamber(
        "industrialforegoing:laser_lens10",
        [
            "#forge:glass_panes",
            "#forge:glass_panes",
            "#forge:glass_panes",
            "#forge:glass_panes",
            "#forge:dyes/purple",
        ],
        Fluid.of("gtceu:polyethylene", 250),
        100
    );
    dissolution_chamber(
        "industrialforegoing:laser_lens11",
        [
            "#forge:glass_panes",
            "#forge:glass_panes",
            "#forge:glass_panes",
            "#forge:glass_panes",
            "#forge:dyes/blue",
        ],
        Fluid.of("gtceu:polyethylene", 250),
        100
    );
    dissolution_chamber(
        "industrialforegoing:laser_lens12",
        [
            "#forge:glass_panes",
            "#forge:glass_panes",
            "#forge:glass_panes",
            "#forge:glass_panes",
            "#forge:dyes/brown",
        ],
        Fluid.of("gtceu:polyethylene", 250),
        100
    );
    dissolution_chamber(
        "industrialforegoing:laser_lens13",
        [
            "#forge:glass_panes",
            "#forge:glass_panes",
            "#forge:glass_panes",
            "#forge:glass_panes",
            "#forge:dyes/green",
        ],
        Fluid.of("gtceu:polyethylene", 250),
        100
    );
    dissolution_chamber(
        "industrialforegoing:laser_lens14",
        [
            "#forge:glass_panes",
            "#forge:glass_panes",
            "#forge:glass_panes",
            "#forge:glass_panes",
            "#forge:dyes/red",
        ],
        Fluid.of("gtceu:polyethylene", 250),
        100
    );
    dissolution_chamber(
        "industrialforegoing:laser_lens15",
        [
            "#forge:glass_panes",
            "#forge:glass_panes",
            "#forge:glass_panes",
            "#forge:glass_panes",
            "#forge:dyes/black",
        ],
        Fluid.of("gtceu:polyethylene", 250),
        100
    );
    dissolution_chamber(
        "industrialforegoing:laser_lens2",
        [
            "#forge:glass_panes",
            "#forge:glass_panes",
            "#forge:glass_panes",
            "#forge:glass_panes",
            "#forge:dyes/magenta",
        ],
        Fluid.of("gtceu:polyethylene", 250),
        100
    );
    dissolution_chamber(
        "industrialforegoing:laser_lens3",
        [
            "#forge:glass_panes",
            "#forge:glass_panes",
            "#forge:glass_panes",
            "#forge:glass_panes",
            "#forge:dyes/light_blue",
        ],
        Fluid.of("gtceu:polyethylene", 250),
        100
    );
    dissolution_chamber(
        "industrialforegoing:laser_lens4",
        [
            "#forge:glass_panes",
            "#forge:glass_panes",
            "#forge:glass_panes",
            "#forge:glass_panes",
            "#forge:dyes/yellow",
        ],
        Fluid.of("gtceu:polyethylene", 250),
        100
    );
    dissolution_chamber(
        "industrialforegoing:laser_lens5",
        [
            "#forge:glass_panes",
            "#forge:glass_panes",
            "#forge:glass_panes",
            "#forge:glass_panes",
            "#forge:dyes/lime",
        ],
        Fluid.of("gtceu:polyethylene", 250),
        100
    );
    dissolution_chamber(
        "industrialforegoing:laser_lens6",
        [
            "#forge:glass_panes",
            "#forge:glass_panes",
            "#forge:glass_panes",
            "#forge:glass_panes",
            "#forge:dyes/pink",
        ],
        Fluid.of("gtceu:polyethylene", 250),
        100
    );
    dissolution_chamber(
        "industrialforegoing:laser_lens7",
        [
            "#forge:glass_panes",
            "#forge:glass_panes",
            "#forge:glass_panes",
            "#forge:glass_panes",
            "#forge:dyes/gray",
        ],
        Fluid.of("gtceu:polyethylene", 250),
        100
    );
    dissolution_chamber(
        "industrialforegoing:laser_lens8",
        [
            "#forge:glass_panes",
            "#forge:glass_panes",
            "#forge:glass_panes",
            "#forge:glass_panes",
            "#forge:dyes/light_gray",
        ],
        Fluid.of("gtceu:polyethylene", 250),
        100
    );
    dissolution_chamber(
        "industrialforegoing:laser_lens9",
        [
            "#forge:glass_panes",
            "#forge:glass_panes",
            "#forge:glass_panes",
            "#forge:glass_panes",
            "#forge:dyes/cyan",
        ],
        Fluid.of("gtceu:polyethylene", 250),
        100
    );
    dissolution_chamber(
        "industrialforegoing:mechanical_dirt",
        [
            "minecraft:dirt",
            "minecraft:dirt",
            "minecraft:rotten_flesh",
            "minecraft:rotten_flesh",
            "#industrialforegoing:machine_frame/pity",
        ],
        Fluid.of("industrialforegoing:meat", 1000),
        100
    );
    dissolution_chamber(
        "industrialforegoing:pink_slime",
        ["minecraft:glass_pane"],
        Fluid.of("industrialforegoing:pink_slime", 300),
        200
    );
    dissolution_chamber(
        "industrialforegoing:pink_slime_ingot",
        [
            "#forge:ingots/iron",
            "#forge:ingots/iron",
            "#forge:ingots/gold",
            "#forge:ingots/gold",
        ],
        Fluid.of("industrialforegoing:pink_slime", 1000),
        300
    );
    dissolution_chamber(
        "industrialforegoing:processing_addon_1",
        [
            "minecraft:redstone",
            "minecraft:redstone",
            "minecraft:glass_pane",
            "minecraft:glass_pane",
            "#forge:gears/aluminium",
            "#forge:gears/aluminium",
            "minecraft:furnace",
            "minecraft:crafting_table",
        ],
        Fluid.of("gtceu:polyethylene", 1000),
        200
    );
    dissolution_chamber(
        "industrialforegoing:processing_addon_2",
        [
            "minecraft:redstone",
            "minecraft:redstone",
            "minecraft:glass_pane",
            "minecraft:glass_pane",
            "#forge:gears/diamond",
            "#forge:gears/diamond",
            "minecraft:furnace",
            "minecraft:crafting_table",
        ],
        Fluid.of("gtceu:polyethylene", 1000),
        200
    );
    dissolution_chamber(
        "industrialforegoing:range_addon0",
        [
            "minecraft:redstone",
            "minecraft:redstone",
            "minecraft:glass_pane",
            "minecraft:glass_pane",
            "minecraft:cobblestone",
            "minecraft:cobblestone",
            "minecraft:cobblestone",
            "minecraft:cobblestone",
        ],
        Fluid.of("gtceu:polyethylene", 1000),
        200
    );
    dissolution_chamber(
        "industrialforegoing:range_addon1",
        [
            "minecraft:redstone",
            "minecraft:redstone",
            "minecraft:glass_pane",
            "minecraft:glass_pane",
            "minecraft:lapis_lazuli",
            "minecraft:lapis_lazuli",
            "minecraft:lapis_lazuli",
            "minecraft:lapis_lazuli",
        ],
        Fluid.of("gtceu:polyethylene", 1000),
        200
    );
    dissolution_chamber(
        "industrialforegoing:range_addon10",
        [
            "minecraft:redstone",
            "minecraft:redstone",
            "minecraft:glass_pane",
            "minecraft:glass_pane",
            "minecraft:popped_chorus_fruit",
            "minecraft:popped_chorus_fruit",
            "minecraft:popped_chorus_fruit",
            "minecraft:popped_chorus_fruit",
        ],
        Fluid.of("gtceu:polyethylene", 1000),
        200
    );
    dissolution_chamber(
        "industrialforegoing:range_addon11",
        [
            "minecraft:redstone",
            "minecraft:redstone",
            "minecraft:glass_pane",
            "minecraft:glass_pane",
            "minecraft:emerald",
            "minecraft:emerald",
            "minecraft:emerald",
            "minecraft:emerald",
        ],
        Fluid.of("gtceu:polyethylene", 1000),
        200
    );
    dissolution_chamber(
        "industrialforegoing:range_addon2",
        [
            "minecraft:redstone",
            "minecraft:redstone",
            "minecraft:glass_pane",
            "minecraft:glass_pane",
            "minecraft:bone_meal",
            "minecraft:bone_meal",
            "minecraft:bone_meal",
            "minecraft:bone_meal",
        ],
        Fluid.of("gtceu:polyethylene", 1000),
        200
    );
    dissolution_chamber(
        "industrialforegoing:range_addon3",
        [
            "minecraft:redstone",
            "minecraft:redstone",
            "minecraft:glass_pane",
            "minecraft:glass_pane",
            "minecraft:iron_nugget",
            "minecraft:iron_nugget",
            "minecraft:iron_nugget",
            "minecraft:iron_nugget",
        ],
        Fluid.of("gtceu:polyethylene", 1000),
        200
    );
    dissolution_chamber(
        "industrialforegoing:range_addon4",
        [
            "minecraft:redstone",
            "minecraft:redstone",
            "minecraft:glass_pane",
            "minecraft:glass_pane",
            "minecraft:copper_ingot",
            "minecraft:copper_ingot",
            "minecraft:copper_ingot",
            "minecraft:copper_ingot",
        ],
        Fluid.of("gtceu:polyethylene", 1000),
        200
    );
    dissolution_chamber(
        "industrialforegoing:range_addon5",
        [
            "minecraft:redstone",
            "minecraft:redstone",
            "minecraft:glass_pane",
            "minecraft:glass_pane",
            "minecraft:gold_nugget",
            "minecraft:gold_nugget",
            "minecraft:gold_nugget",
            "minecraft:gold_nugget",
        ],
        Fluid.of("gtceu:polyethylene", 1000),
        200
    );
    dissolution_chamber(
        "industrialforegoing:range_addon6",
        [
            "minecraft:redstone",
            "minecraft:redstone",
            "minecraft:glass_pane",
            "minecraft:glass_pane",
            "minecraft:iron_ingot",
            "minecraft:iron_ingot",
            "minecraft:iron_ingot",
            "minecraft:iron_ingot",
        ],
        Fluid.of("gtceu:polyethylene", 1000),
        200
    );
    dissolution_chamber(
        "industrialforegoing:range_addon7",
        [
            "minecraft:redstone",
            "minecraft:redstone",
            "minecraft:glass_pane",
            "minecraft:glass_pane",
            "minecraft:gold_ingot",
            "minecraft:gold_ingot",
            "minecraft:gold_ingot",
            "minecraft:gold_ingot",
        ],
        Fluid.of("gtceu:polyethylene", 1000),
        200
    );
    dissolution_chamber(
        "industrialforegoing:range_addon8",
        [
            "minecraft:redstone",
            "minecraft:redstone",
            "minecraft:glass_pane",
            "minecraft:glass_pane",
            "minecraft:quartz",
            "minecraft:quartz",
            "minecraft:quartz",
            "minecraft:quartz",
        ],
        Fluid.of("gtceu:polyethylene", 1000),
        200
    );
    dissolution_chamber(
        "industrialforegoing:range_addon9",
        [
            "minecraft:redstone",
            "minecraft:redstone",
            "minecraft:glass_pane",
            "minecraft:glass_pane",
            "minecraft:diamond",
            "minecraft:diamond",
            "minecraft:diamond",
            "minecraft:diamond",
        ],
        Fluid.of("gtceu:polyethylene", 1000),
        200
    );
    dissolution_chamber(
        "industrialforegoing:machine_frame_simple",
        [
            "gtceu:polyethylene_plate",
            "#industrialforegoing:machine_frame/pity",
            "gtceu:polyethylene_plate",
            "minecraft:nether_brick",
            "minecraft:nether_brick",
            "#forge:ingots/iron",
            "#forge:gears/aluminium",
            "#forge:ingots/iron",
        ],
        Fluid.of("gtceu:polyethylene", 250),
        300
    );
    dissolution_chamber(
        "industrialforegoing:speed_addon_1",
        [
            "minecraft:redstone",
            "minecraft:redstone",
            "minecraft:glass_pane",
            "minecraft:glass_pane",
            "#forge:gears/aluminium",
            "#forge:gears/aluminium",
            "minecraft:sugar",
            "minecraft:sugar",
        ],
        Fluid.of("gtceu:polyethylene", 1000),
        200
    );
    dissolution_chamber(
        "industrialforegoing:speed_addon_2",
        [
            "minecraft:redstone",
            "minecraft:redstone",
            "minecraft:glass_pane",
            "minecraft:glass_pane",
            "#forge:gears/diamond",
            "#forge:gears/diamond",
            "minecraft:sugar",
            "minecraft:sugar",
        ],
        Fluid.of("gtceu:polyethylene", 1000),
        200
    );
    dissolution_chamber(
        "industrialforegoing:machine_frame_supreme",
        [
            "gtceu:polyethylene_plate",
            "#industrialforegoing:machine_frame/advanced",
            "gtceu:polyethylene_plate",
            "minecraft:netherite_ingot",
            "minecraft:netherite_ingot",
            "#forge:gems/diamond",
            "#forge:gears/diamond",
            "#forge:gems/diamond",
        ],
        Fluid.of("gtceu:polyethylene", 135),
        300
    );
    dissolution_chamber(
        "minecraft:experience_bottle",
        [],
        Fluid.of("industrialforegoing:essence", 250),
        5
    );
});