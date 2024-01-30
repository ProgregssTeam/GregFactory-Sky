import json
import re
from pathlib import Path

DATAPACK_RECIPES = (
    Path.cwd()
    / "datapacks/custom_recipes/data/industrialforegoing/recipes/dissolution_chamber"
)
REGEX_COMPILE_INPUT_FLUID = re.compile(r'^{Amount:(\d+),FluidName:(".+")')

"""
{
    "type": "industrialforegoing:dissolution_chamber",
    "input": [
        { "item": "gtceu:polyethylene_plate" },
        { "tag": "industrialforegoing:machine_frame/simple" },
        { "item": "gtceu:polyethylene_plate" },
        { "item": "minecraft:netherite_scrap" },
        { "item": "minecraft:netherite_scrap" },
        { "tag": "forge:ingots/gold" },
        { "tag": "forge:gears/diamond" },
        { "tag": "forge:ingots/gold" }
    ],
    "inputFluid": "{Amount:500,FluidName:\"industrialforegoing:pink_slime\"}",
    "output": {
        "count": 1,
        "item": "industrialforegoing:machine_frame_advanced"
    },
    "processingTime": 300
}

dissolution_chamber(
    [
        "gtceu:polyethylene_plate", 
        "#industrialforegoing:machine_frame/simple", 
        "gtceu:polyethylene_plate", 
        "minecraft:netherite_scrap",
        "minecraft:netherite_scrap", 
        "#forge:ingots/gold", 
        "#forge:gears/diamond", 
        "#forge:ingots/gold"
    ], 
    Fluid.of("industrialforegoing:pink_slime", 500), 
    "industrialforegoing:machine_frame_advanced", 
    300
)
"""

for filename in DATAPACK_RECIPES.glob("*.json"):
    # print(f"Processing {filename.name}")

    with open(filename, "r", encoding="utf8") as recipe_file:
        data = json.load(recipe_file)

    recipe_input_items = [
        ("#" * ("tag" in i)) + [*i.values()][0] for i in data["input"]
    ]
    _inputFluid_Amount, _inputFluid_FluidName = [
        eval(i) for i in REGEX_COMPILE_INPUT_FLUID.search(data["inputFluid"]).groups()
    ]
    recipe_input_fluid = f'Fluid.of("{_inputFluid_FluidName}", {_inputFluid_Amount})'
    _output = data["output"]
    _output_count = _output.get("count", 1)
    recipe_output = (str(_output_count) * (_output_count > 1)) + _output["item"]

    function = f'dissolution_chamber("{recipe_output}", {recipe_input_items}, {recipe_input_fluid}, {data["processingTime"]})'
    print(function)

    # break
