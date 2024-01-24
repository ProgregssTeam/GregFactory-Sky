/*
* sophisticatedbackpacks.js - Modify recipes about Sophisticatedbackpacks.
*/
ServerEvents.recipes(event => {
    event.remove({ id: "sophisticatedbackpacks:upgrade_base" });
    event.recipes.gtceu.assembler("sophisticatedbackpacks:upgrade_base")
        .itemInputs("#forge:plates/steel",
            "2x minecraft:leather",
            "4x minecraft:string",
            "2x #gtceu:circuits/lv",
            "gtceu:lv_sensor",
            "gtceu:lv_emitter",
            "4x gtceu:tin_single_cable"
        )
        .itemOutputs("sophisticatedbackpacks:upgrade_base")
        .EUt(30)
        .duration(300);
});