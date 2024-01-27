/*
* end_game.js - Add Recipes About End Game Items.
*/
ServerEvents.recipes(event => {
    event.shaped(
        "gfs:superconduct_ring",
        ["ABC", "HID", "GFE"],
        {
            A: "gtceu:manganese_phosphide_single_wire",
            B: "gtceu:magnesium_diboride_single_wire",
            C: "gtceu:mercury_barium_calcium_cuprate_single_wire",
            D: "gtceu:uranium_triplatinum_single_wire",
            E: "gtceu:samarium_iron_arsenic_oxide_single_wire",
            F: "gtceu:indium_tin_barium_titanium_cuprate_single_wire",
            G: "gtceu:uranium_rhodium_dinaquadide_single_wire",
            H: "gtceu:enriched_naquadah_trinium_europium_duranide_single_wire",
            I: "gtceu:ruthenium_trinium_americium_neutronate_single_wire"
        }
    )
});