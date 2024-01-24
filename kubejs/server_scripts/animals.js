ServerEvents.recipes(event => {
    function add_animal_spawn_egg_recipe(animal, ingredient1, ingredient2) {
        event.shaped(
            "minecraft:" + animal + "_spawn_egg",
            ["ABC", " D ", " E "],
            {
                A: ingredient1,
                B: "minecraft:water_bucket",
                C: ingredient2,
                D: "exdeorum:grass_seeds",
                E: "minecraft:dirt"
            }
        ).keepIngredient("minecraft:dirt");
    }
    add_animal_spawn_egg_recipe("cow", "minecraft:wheat", "minecraft:wheat");
    add_animal_spawn_egg_recipe("pig", "minecraft:carrot", "minecraft:potato");
    add_animal_spawn_egg_recipe("sheep", "minecraft:wheat_seeds", "minecraft:wheat");
    add_animal_spawn_egg_recipe("horse", "minecraft:carrot", "minecraft:carrot");
    add_animal_spawn_egg_recipe("chicken", "minecraft:wheat_seeds", "minecraft:wheat_seeds");
    add_animal_spawn_egg_recipe("cat", "#minecraft:fishes", "#minecraft:fishes");
    add_animal_spawn_egg_recipe("wolf", "minecraft:bone", "minecraft:mutton");
    add_animal_spawn_egg_recipe("parrot", "minecraft:melon_seeds", "minecraft:cocoa_beans");
    add_animal_spawn_egg_recipe("turtle", "minecraft:seagrass", "minecraft:seagrass");
});