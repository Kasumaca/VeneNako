<!DOCTYPE html>
<html>
<?php include 'head.php'; ?>

<head>
    <title>VeneNako – Toram Online Advanced Search Tool</title>
    <meta name="description"
        content="Powerful advanced search tool for Toram Online. Filter by stats, drops, and more to quickly find items, enemies." />

</head>

<body class="bg-gray-900">
    <div id="loading-screen"
        class="fixed inset-0 bg-gray-900 flex items-center justify-center z-50 opacity-0 pointer-events-none transition-opacity duration-300">
        <div class="animate-spin rounded-full h-12 w-12 border-t-4 border-red-500"></div>
    </div>

    <?php include 'navbar.php'; ?>

    <main class="pt-16 text-white">
        <div class="flex items-center justify-center min-h-screen">
            <div class="p-6 bg-gray-900 min-h-screen w-[95%] space-y-6 rounded-xl">
                <div>
                    <h2 class="text-xl font-semibold mb-4 mt-4 py-2 text-center rounded-xl bg-gray-700">
                        Item Search</h2>
                    <div
                        class="bg-gray-800 p-4 rounded-xl shadow space-y-4 min-h-80 w-full flex justify-center items-center">
                        <div class="grid grid-cols-1 md:grid-cols-1 gap-4 w-100">
                            <div>
                                <label class="block text-sm mb-1">Name</label>
                                <input type="text" name="name" placeholder="Item name..."
                                    class="w-full px-3 py-2 rounded-md bg-gray-700 focus:ring focus:ring-blue-500" />
                                <label class="block text-sm mb-1">Type</label>
                                <select name="type[]" multiple
                                    class="text-sm w-full px-3 py-2 rounded-md bg-gray-700 focus:ring focus:ring-blue-500 h-[200px]">
                                    <option value="any" selected>--- Anything ---</option>
                                    <option value="equipments">--- All Equipments ---</option>
                                    <option disabled class="bg-gray-800 text-white font-bold text-center">--- BASIC
                                        EQUIPMENT ---
                                    </option>
                                    <option value="additional">Additional</option>
                                    <option value="armor">Armor</option>
                                    <option value="special ring">Special Ring</option>
                                    <option disabled class="bg-gray-800 text-white font-bold text-center">--- MAIN
                                        WEAPON ---
                                    </option>
                                    <option value="one handed sword">1 Handed Sword</option>
                                    <option value="two handed sword">2 Handed Sword</option>
                                    <option value="bow">Bow</option>
                                    <option value="bowgun">Bowgun</option>
                                    <option value="staff">Staff</option>
                                    <option value="magic device">Magic Device</option>
                                    <option value="katana">Katana</option>
                                    <option value="halberd">Halberd</option>
                                    <option value="knuckles">Knuckles</option>
                                    <option disabled class="bg-gray-800 font-bold text-white text-center">--- SUB
                                        WEAPON ---
                                    </option>
                                    <option value="arrow">Arrow</option>
                                    <option value="dagger">Dagger</option>
                                    <option value="shield">Shield</option>
                                    <option value="ninjutsu scroll">Ninjutsu Scroll</option>
                                    <option disabled class="bg-gray-800 font-bold text-white text-center">--- XTALS
                                        ---
                                    </option>
                                    <option value="normal xtal">Normal Crysta (Blue)</option>
                                    <option value="weapon xtal">Weapon Crysta (Red)</option>
                                    <option value="armor xtal">Armor Crysta (Green)</option>
                                    <option value="additional xtal">Additional Crysta (Yellow)</option>
                                    <option value="special xtal">Special Crysta (Purple)</option>
                                    <option disabled class="bg-gray-800 font-bold text-white text-center">--- OTHER
                                        ---
                                    </option>
                                    <option value="usable">Usable</option>
                                    <option value="ore">Ore</option>
                                    <option value="material">Material</option>
                                    <option value="gem">Gem</option>
                                    <option value="piercer">Piercer</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <h2 class="text-xl font-semibold mb-4 mt-4 py-2 text-center rounded-xl bg-gray-700">Item Stats</h2>

                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <details class="bg-gray-800 p-4 rounded-xl shadow min-h-[60px] w-full">
                            <summary class="cursor-pointer text-base font-semibold">Base Stats</summary>
                            <div class="mt-2 space-y-2 text-sm">
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-16 shrink-0 font-semibold">STR</label>
                                    <select name="f_str_operator" class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="f_str_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                </div>

                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-16 shrink-0 font-semibold">STR %</label>
                                    <select name="p_str_operator" class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_str_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-16 shrink-0 font-semibold">INT</label>
                                    <select name="f_int_operator" class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="f_int_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                </div>

                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-16 shrink-0 font-semibold">INT %</label>
                                    <select name="p_int_operator" class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_int_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-16 shrink-0 font-semibold">VIT</label>
                                    <select name="f_vit_operator" class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="f_vỉt_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                </div>

                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-16 shrink-0 font-semibold">VIT %</label>
                                    <select name="p_vit_operator" class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_vit_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>

                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-16 shrink-0 font-semibold">AGI</label>
                                    <select name="f_agi_operator" class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="f_agi_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                </div>

                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-16 shrink-0 font-semibold">AGI %</label>
                                    <select name="p_agi_operator" class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_agi_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>

                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-16 shrink-0 font-semibold">DEX</label>
                                    <select name="f_dex_operator" class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="f_dex_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                </div>

                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-16 shrink-0 font-semibold">DEX %</label>
                                    <select name="p_dex_operator" class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_dex_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>
                            </div>
                        </details>

                        <!-- Drawer 2 Attack Defense -->
                        <details class="bg-gray-800 p-4 rounded-xl shadow min-h-[60px]">
                            <summary class="cursor-pointer text-base font-semibold">Attack <img src="icons/atk_icon.png"
                                    class="object-cover w-5 h-5 inline pb-1"><img src="icons/matk_icon.png"
                                    class="object-cover w-5 h-5 inline pb-1"> & Defense <img src="icons/def_icon.png"
                                    class="object-cover w-5 h-5 inline pb-1"><img src="icons/mdef_icon.png"
                                    class="object-cover w-5 h-5 inline pb-1"></summary>

                            <div class="mt-2 space-y-2 text-sm">
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-20 shrink-0 font-semibold">Base ATK</label>
                                    <select name="f_baseatk_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="f_baseatk_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                </div>
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-20 shrink-0 font-semibold">ATK<img src="icons/atk_icon.png"
                                            class="object-cover w-5 h-5 inline pb-1 pl-1"></label>
                                    <select name="f_atk_operator" class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="f_atk_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                </div>

                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-20 shrink-0 font-semibold">ATK %<img src="icons/atk_icon.png"
                                            class="object-cover w-5 h-5 inline pb-1 pl-1"></label>
                                    <select name="p_atk_operator" class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_atk_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>

                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-20 shrink-0 font-semibold">MATK<img src="icons/matk_icon.png"
                                            class="object-cover w-5 h-5 inline pb-1 pl-1"></label>
                                    <select name="f_matk_operator" class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="f_matk_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                </div>

                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-20 shrink-0 font-semibold">MATK %<img src="icons/matk_icon.png"
                                            class="object-cover w-5 h-5 inline pb-1 pl-1"></label>
                                    <select name="p_matk_operator" class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_matk_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>

                            </div>
                            <div class="mt-2 space-y-2 text-sm">
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-20 shrink-0 font-semibold">Base DEF</label>
                                    <select name="f_basedef_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="f_basedef_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                </div>
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-20 shrink-0 font-semibold">DEF<img src="icons/def_icon.png"
                                            class="object-cover w-5 h-5 inline pb-1 pl-1"></label>
                                    <select name="f_def_operator" class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="f_def_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                </div>

                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-20 shrink-0 font-semibold">DEF %<img src="icons/def_icon.png"
                                            class="object-cover w-5 h-5 inline pb-1 pl-1"></label>
                                    <select name="p_def_operator" class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_def_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>

                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-20 shrink-0 font-semibold">MDEF<img src="icons/mdef_icon.png"
                                            class="object-cover w-5 h-5 inline pb-1 pl-1"></label>
                                    <select name="f_mdef_operator" class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="f_mdef_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                </div>

                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-20 shrink-0 font-semibold">MDEF %<img src="icons/mdef_icon.png"
                                            class="object-cover w-5 h-5 inline pb-1 pl-1"></label>
                                    <select name="p_mdef_operator" class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_matk_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>

                            </div>
                        </details>

                        <!-- Drawer 3 Stability Accuracy Dodge -->
                        <details class="bg-gray-800 p-4 rounded-xl shadow min-h-[60px]">
                            <summary class="cursor-pointer text-base font-semibold">Stability, Accuracy<img
                                    src="icons/hit_icon.png" class="object-cover w-5 h-5 inline pb-1 pl-1"> &
                                Dodge<img src="icons/flee_icon.png" class="object-cover w-5 h-5 inline pb-1 pl-1">
                            </summary>

                            <div class="mt-2 space-y-2 text-sm">
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-25 shrink-0 font-semibold">Base Stability</label>
                                    <select name="p_basestability_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_basestability_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>

                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-25 shrink-0 font-semibold">Stability</label>
                                    <select name="p_stability_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_stability_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>

                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-25 shrink-0 font-semibold">Accuracy</label>
                                    <select name="f_accuracy_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="f_accuracy_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                </div>

                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-25 shrink-0 font-semibold">Accuracy %</label>
                                    <select name="p_accuracy_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_accuracy_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>

                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-34 shrink-0 font-semibold">Absolute Accuracy %</label>
                                    <select name="p_absolute_accuracy_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_absolute_accuracy_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>

                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-25 shrink-0 font-semibold">Dodge</label>
                                    <select name="f_dodge_operator" class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="f_dodge_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                </div>

                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-25 shrink-0 font-semibold">Dodge %</label>
                                    <select name="p_dodge_operator" class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_dodge_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>

                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-34 shrink-0 font-semibold">Absolute Dodge %</label>
                                    <select name="p_absolute_dodge_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_absolute_dodge_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>
                            </div>
                        </details>

                        <!-- Drawer 4 HP -->
                        <details class="bg-gray-800 p-4 rounded-xl shadow min-h-[60px]">
                            <summary class="cursor-pointer text-báe font-semibold">HP</summary>


                            <div class="mt-2 space-y-2 text-sm">
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-33 shrink-0 font-semibold">Max HP</label>
                                    <select name="f_maxhp_operator" class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="f_maxhp_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                </div>

                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-33 shrink-0 font-semibold">Max HP %</label>
                                    <select name="p_maxhp_operator" class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_maxhp_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>

                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-33 shrink-0 font-semibold">Natural HP Regen</label>
                                    <select name="f_natural_hp_regen_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="f_natural_hp_regen_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                </div>

                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-33 shrink-0 font-semibold">Natural HP Regen %</label>
                                    <select name="p_natural_hp_regen_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_natural_hp_regen_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>

                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-33 shrink-0 font-semibold">Recover HP</label>
                                    <select name="f_recover_hp_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="f_recover_hp_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                </div>

                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-33 shrink-0 font-semibold">Recover HP %</label>
                                    <select name="p_recover_hp_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_recover_hp_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>
                            </div>
                        </details>

                        <!-- Drawer 5 MP -->
                        <details class="bg-gray-800 p-4 rounded-xl shadow min-h-[60px]">
                            <summary class="cursor-pointer text-báe font-semibold">MP</summary>


                            <div class="mt-2 space-y-2 text-sm">
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-36 shrink-0 font-semibold">Max MP</label>
                                    <select name="f_maxmp_operator" class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="f_maxmp_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                </div>



                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-36 shrink-0 font-semibold">Natural MP Regen</label>
                                    <select name="f_natural_mp_regen_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="f_natural_mp_regen_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                </div>

                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-36 shrink-0 font-semibold">Natural MP Regen %</label>
                                    <select name="p_natural_mp_regen_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_natural_mp_regen_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>

                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-36 shrink-0 font-semibold">Recover MP</label>
                                    <select name="f_recover_mp_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="f_recover_mp_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                </div>

                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-36 shrink-0 font-semibold">Recover MP %</label>
                                    <select name="p_recover_mp_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_recover_mp_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>

                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-36 shrink-0 font-semibold">Attack MP Recovery</label>
                                    <select name="f_ampr_operator" class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="f_ampr_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                </div>

                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-36 shrink-0 font-semibold">Attack MP Recovery %</label>
                                    <select name="p_ampr_operator" class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_ampr_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>
                            </div>
                        </details>

                        <!-- Drawer 6 Speed -->
                        <details class="bg-gray-800 p-4 rounded-xl shadow min-h-[60px]">
                            <summary class="cursor-pointer text-base font-semibold">ASPD, CSPD & Motion Speed<img
                                    src="icons/aspd_icon.png" class="object-cover w-5 h-5 inline pb-1 pl-1"><img
                                    src="icons/cspd_icon.png" class="object-cover w-5 h-5 inline pb-1 pl-1">
                            </summary>

                            <div class="mt-2 space-y-2 text-sm">
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-36 shrink-0 font-semibold">ASPD</label>
                                    <select name="f_aspd_operator" class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="f_aspd_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                </div>

                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-36 shrink-0 font-semibold">ASPD %</label>
                                    <select name="p_aspd_operator" class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_aspd_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>

                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-36 shrink-0 font-semibold">CSPD</label>
                                    <select name="f_cspd_operator" class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="f_cspd_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                </div>

                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-36 shrink-0 font-semibold">CSPD %</label>
                                    <select name="p_cspd_operator" class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_cspd_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>

                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-36 shrink-0 font-semibold">Motion Speed %</label>
                                    <select name="p_motion_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_motion_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>
                            </div>
                        </details>

                        <!-- Drawer 7 Weapon ATK & Element -->
                        <details class="bg-gray-800 p-4 rounded-xl shadow min-h-[60px]">
                            <summary class="cursor-pointer text-base font-semibold">Extra Weapon ATK & Element</summary>
                            <div class="mt-2 space-y-2 text-sm">
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-36 shrink-0 font-semibold">Weapon ATK</label>
                                    <select name="f_watk_operator" class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="f_watk_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                </div>

                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-36 shrink-0 font-semibold">Weapon ATK %</label>
                                    <select name="p_watk_operator" class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_watk_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>

                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-36 shrink-0 font-semibold">Element</label>
                                    <select name="element[]" multiple
                                        class="text-sm w-full px-3 py-2 rounded-md bg-gray-700 focus:ring focus:ring-blue-500 h-[200px]">
                                        <option value="any element" selected>--- Any Element ---</option>
                                        <option value="no element">No Element</option>
                                        <option value="mana">Mana Element</option>
                                        <option value="fire">Fire Element</option>
                                        <option value="water">Water Element</option>
                                        <option value="wind">Wind Element</option>
                                        <option value="earth">Earth Element</option>
                                        <option value="light">Light Element</option>
                                        <option value="dark">Dark Element</option>
                                    </select>
                                </div>
                            </div>
                        </details>

                        <!-- Drawer 8 Damage to Element -->
                        <details class="bg-gray-800 p-4 rounded-xl shadow min-h-[60px]">
                            <summary class="cursor-pointer text-base font-semibold">Damage to Element</summary>
                            <div class="mt-2 space-y-2 text-sm">
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-34 shrink-0 font-semibold">Damage to Neutral</label>
                                    <select name="p_damage_to_neutral_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_damage_to_neutral_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>

                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-34 shrink-0 font-semibold">Damage to Fire</label>
                                    <select name="p_damage_to_fire_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_damage_to_fire_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>

                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-34 shrink-0 font-semibold">Damage to Water</label>
                                    <select name="p_damage_to_water_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_damage_to_water_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>

                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-34 shrink-0 font-semibold">Damage to Wind</label>
                                    <select name="p_damage_to_wind_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_damage_to_wind_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>

                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-34 shrink-0 font-semibold">Damage to Earth</label>
                                    <select name="p_damage_to_earth_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_damage_to_earth_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>

                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-34 shrink-0 font-semibold">Damage to Light</label>
                                    <select name="p_damage_to_light_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_damage_to_light_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>

                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-34 shrink-0 font-semibold">Damage to Dark</label>
                                    <select name="p_damage_to_dark_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_damage_to_dark_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>
                            </div>
                        </details>

                        <!-- Drawer 9 Other Offensive Stat -->
                        <details class="bg-gray-800 p-4 rounded-xl shadow min-h-[60px]">
                            <summary class="cursor-pointer text-base font-semibold">Other Offensive Stat</summary>

                            <div class="mt-2 space-y-2 text-sm">
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-25 shrink-0 font-semibold">Physical Pierce</label>
                                    <select name="p_physical_pierce_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_physical_pierce_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-25 shrink-0 font-semibold">Magic Pierce</label>
                                    <select name="p_magic_pierce_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_magic_pierce_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-35 shrink-0 font-semibold">Short Range Damage</label>
                                    <select name="p_short_range_damage_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_short_range_damage_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-35 shrink-0 font-semibold">Long Range Damage</label>
                                    <select name="p_long_range_damage_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_long_range_damage_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-35 shrink-0 font-semibold">Unsheathe Attack %</label>
                                    <select name="p_unsheathe_attack_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_unsheathe_attack_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-35 shrink-0 font-semibold">Unsheathe Attack</label>
                                    <select name="f_unsheathe_attack_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="f_unsheathe_attack_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                </div>
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-35 shrink-0 font-semibold">Additional Melee</label>
                                    <select name="p_additional_melee_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_additional_melee_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-35 shrink-0 font-semibold">Additional Magic</label>
                                    <select name="p_additional_magic_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_additional_magic_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-25 shrink-0 font-semibold">Anticipate</label>
                                    <select name="p_anticipate_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_anticipate_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-25 shrink-0 font-semibold">Guard Break</label>
                                    <select name="p_guard_break_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_guard_break_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>
                            </div>
                        </details>

                        <!-- Drawer 10 Critical Rate & Damage -->
                        <details class="bg-gray-800 p-4 rounded-xl shadow min-h-[60px]">
                            <summary class="cursor-pointer text-base font-semibold">Critical Rate & Damage</summary>
                            <div class="mt-2 space-y-2 text-sm">
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-34 shrink-0 font-semibold">Critical Rate</label>
                                    <select name="f_critical_rate_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="f_critical_rate_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                </div>
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-34 shrink-0 font-semibold">Critical Rate %</label>
                                    <select name="p_critical_rate_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_critical_rate_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-34 shrink-0 font-semibold">Critical Damage</label>
                                    <select name="f_critical_damage_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="f_critical_damage_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                </div>
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-34 shrink-0 font-semibold">Critical Damage %</label>
                                    <select name="p_critical_damage_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_critical_damage_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>
                            </div>
                        </details>

                        <!-- Drawer 11 Reduce DMG -->
                        <details class="bg-gray-800 p-4 rounded-xl shadow min-h-[60px]">
                            <summary class="cursor-pointer text-base font-semibold">Reduce DMG</summary>
                            <div class="mt-2 space-y-2 text-sm">
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-30 shrink-0 font-semibold">Reduce DMG <br>(Player Epicenter)</label>
                                    <select name="p_reduce_dmg_player_epicenter_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_reduce_dmg_player_epicenter_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-30 shrink-0 font-semibold">Reduce DMG <br>(Foe Epicenter)</label>
                                    <select name="p_reduce_dmg_foe_epicenter_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_reduce_dmg_foe_epicenter_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-30 shrink-0 font-semibold">Reduce DMG <br>(Floor)</label>
                                    <select name="p_reduce_dmg_floor_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_reduce_dmg_floor_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-30 shrink-0 font-semibold">Reduce DMG <br>(Charge)</label>
                                    <select name="p_reduce_dmg_charge_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_reduce_dmg_charge_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-30 shrink-0 font-semibold">Reduce DMG <br>(Bullet)</label>
                                    <select name="p_reduce_dmg_bullet_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_reduce_dmg_bullet_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-30 shrink-0 font-semibold">Reduce DMG <br>(Bowling)</label>
                                    <select name="p_reduce_dmg_bowling_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_reduce_dmg_bowling_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-30 shrink-0 font-semibold">Reduce DMG <br>(Meteor)</label>
                                    <select name="p_reduce_dmg_meteor_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_reduce_dmg_meteor_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-30 shrink-0 font-semibold">Reduce DMG <br>(Straight Line)</label>
                                    <select name="p_reduce_dmg_straight_line_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_reduce_dmg_straight_line_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>
                            </div>
                        </details>

                        <!-- Drawer 12 Barrier -->
                        <details class="bg-gray-800 p-4 rounded-xl shadow min-h-[60px]">
                            <summary class="cursor-pointer text-base font-semibold">Barrier</summary>
                            <div class="mt-2 space-y-2 text-sm">
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-32 shrink-0 font-semibold">Physical Barrier</label>
                                    <select name="f_physical_barrier_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="f_physical_barrier_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                </div>
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-32 shrink-0 font-semibold">Magic Barrier</label>
                                    <select name="f_magic_barrier_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="f_magic_barrier_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                </div>
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-32 shrink-0 font-semibold">Fractional Barrier %</label>
                                    <select name="p_fractional_barrier_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_fractional_barrier_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-32 shrink-0 font-semibold">Barrier Cooldown %</label>
                                    <select name="p_barrier_cooldown_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_barrier_cooldown_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>
                            </div>
                        </details>

                        <!-- Drawer 13 Element Resistance -->
                        <details class="bg-gray-800 p-4 rounded-xl shadow min-h-[60px]">
                            <summary class="cursor-pointer text-base font-semibold">Element Resistance</summary>
                            <div class="mt-2 space-y-2 text-sm">
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-31 shrink-0 font-semibold">Neutral Resistance</label>
                                    <select name="p_neutral_resistance_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_neutral_resistance_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>

                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-31 shrink-0 font-semibold">Fire Resistance</label>
                                    <select name="p_fire_resistance_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_fire_resistance_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>

                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-31 shrink-0 font-semibold">Water Resistance</label>
                                    <select name="p_water_resistance_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_water_resistance_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>

                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-31 shrink-0 font-semibold">Wind Resistance</label>
                                    <select name="p_wind_resistance_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_wind_resistance_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>

                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-31 shrink-0 font-semibold">Earth Resistance</label>
                                    <select name="p_earth_resistance_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_earth_resistance_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>

                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-31 shrink-0 font-semibold">Light Resistance</label>
                                    <select name="p_light_resistance_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_light_resistance_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>

                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-31 shrink-0 font-semibold">Dark Resistance</label>
                                    <select name="p_dark_resistance_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_dark_resistance_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>
                            </div>
                        </details>

                        <!-- Drawer 14 Other Defensive Stat -->
                        <details class="bg-gray-800 p-4 rounded-xl shadow min-h-[60px]">
                            <summary class="cursor-pointer text-base font-semibold">Other Defensive Stat</summary>

                            <div class="mt-2 space-y-2 text-sm">
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-32 shrink-0 font-semibold">Physical Resistance</label>
                                    <select name="p_physical_resistance_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_physical_resistance_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>

                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-32 shrink-0 font-semibold">Magic Resistance</label>
                                    <select name="p_magic_resistance_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_magic_resistance_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>

                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-25 shrink-0 font-semibold">Guard Power %</label>
                                    <select name="p_guard_power_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_guard_power_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>

                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-25 shrink-0 font-semibold">Guard Rate %</label>
                                    <select name="p_guard_rate_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_guard_rate_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>

                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-25 shrink-0 font-semibold">Evasion Rate %</label>
                                    <select name="p_evasion_rate_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_evasion_rate_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>

                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-25 shrink-0 font-semibold">Reflect %</label>
                                    <select name="p_reflect_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_reflect_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>

                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-25 shrink-0 font-semibold">Recoil %</label>
                                    <select name="p_recoil_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_recoil_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>

                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-25 shrink-0 font-semibold">Aggro %</label>
                                    <select name="p_aggro_operator" class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_aggro_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>

                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-35 shrink-0 font-semibold">Ailment Resistance %</label>
                                    <select name="p_ailment_resistance_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_ailment_resistance_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>

                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-35 shrink-0 font-semibold">Invicible Aid(sec)</label>
                                    <select name="f_invicible_aid_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="f_invicible_aid_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                </div>
                            </div>
                        </details>

                        <!-- Drawer 15 Unavailble & Other Stat(UNFINISHED)-->
                        <details class="bg-gray-800 p-4 rounded-xl shadow min-h-[60px]">
                            <summary class="cursor-pointer text-base font-semibold">Unavailable & Other Stat</summary>

                            <div class="mt-2 space-y-2 text-sm">
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-32 shrink-0 font-semibold">Flinch Unavailable</label>
                                    <input type="checkbox" name="f_flinch_unavailable"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                </div>
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-32 shrink-0 font-semibold">Tumble Unavailable</label>
                                    <input type="checkbox" name="f_tumble_unavailable"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                </div>
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-32 shrink-0 font-semibold">Stun Unavailable</label>
                                    <input type="checkbox" name="f_stun_unavailable"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                </div>
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-30 shrink-0 font-semibold">EXP Gain %</label>
                                    <select name="p_exp_gain_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_exp_gain_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-30 shrink-0 font-semibold">Drop Rate %</label>
                                    <select name="p_drop_rate_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_drop_rate_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-30 shrink-0 font-semibold">Base Drop Rate %</label>
                                    <select name="p_base_drop_rate_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_base_drop_rate_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-30 shrink-0 font-semibold">Potential</label>
                                    <select name="f_potential_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="f_potential_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                </div>
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-30 shrink-0 font-semibold">Pet EXP %</label>
                                    <select name="p_pet_exp_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_pet_exp_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-30 shrink-0 font-semibold">Revive Time %</label>
                                    <select name="p_revive_time_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_revive_time_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-30 shrink-0 font-semibold">Item Cooldown %</label>
                                    <select name="p_item_cooldown_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_item_cooldown_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>
                            </div>
                        </details>

                        <!-- Drawer 16 ATK UP -->
                        <details class="bg-gray-800 p-4 rounded-xl shadow min-h-[60px]">
                            <summary class="cursor-pointer text-base font-semibold">ATK UP</summary>
                            <div class="mt-2 space-y-2 text-sm">
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-25 shrink-0 font-semibold">ATK UP(STR) %</label>
                                    <select name="p_atk_up_str_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_atk_up_str_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-25 shrink-0 font-semibold">ATK UP(INT) %</label>
                                    <select name="p_atk_up_int_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_atk_up_int_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-25 shrink-0 font-semibold">ATK UP(VIT) %</label>
                                    <select name="p_atk_up_vit_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_atk_up_vit_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-25 shrink-0 font-semibold">ATK UP(AGI) %</label>
                                    <select name="p_atk_up_agi_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_atk_up_agi_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-25 shrink-0 font-semibold">ATK UP(DEX) %</label>
                                    <select name="p_atk_up_dex_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_atk_up_dex_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>
                            </div>
                        </details>

                        <!-- Drawer 17 ATK DOWN -->
                        <details class="bg-gray-800 p-4 rounded-xl shadow min-h-[60px]">
                            <summary class="cursor-pointer text-base font-semibold">ATK DOWN</summary>
                            <div class="mt-2 space-y-2 text-sm">
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-33 shrink-0 font-semibold">ATK DOWN(STR) %</label>
                                    <select name="p_atk_down_str_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_atk_down_str_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-33 shrink-0 font-semibold">ATK DOWN(INT) %</label>
                                    <select name="p_atk_down_int_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_atk_down_int_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-33 shrink-0 font-semibold">ATK DOWN(VIT) %</label>
                                    <select name="p_atk_down_vit_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_atk_down_vit_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-33 shrink-0 font-semibold">ATK DOWN(AGI) %</label>
                                    <select name="p_atk_down_agi_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_atk_down_agi_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-33 shrink-0 font-semibold">ATK DOWN(DEX) %</label>
                                    <select name="p_atk_up_dex_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_atk_down_dex_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>
                            </div>
                        </details>

                        <!-- Drawer 18 MATK UP -->
                        <details class="bg-gray-800 p-4 rounded-xl shadow min-h-[60px]">
                            <summary class="cursor-pointer text-base font-semibold">MATK UP</summary>
                            <div class="mt-2 space-y-2 text-sm">
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-28 shrink-0 font-semibold">MATK UP(STR) %</label>
                                    <select name="p_matk_up_str_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_matk_up_str_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-28 shrink-0 font-semibold">MATK UP(INT) %</label>
                                    <select name="p_matk_up_int_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_matk_up_int_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-28 shrink-0 font-semibold">MATK UP(VIT) %</label>
                                    <select name="p_matk_up_vit_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_matk_up_vit_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-28 shrink-0 font-semibold">MATK UP(AGI) %</label>
                                    <select name="p_matk_up_agi_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_matk_up_agi_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-28 shrink-0 font-semibold">MATK UP(DEX) %</label>
                                    <select name="p_matk_up_dex_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_matk_up_dex_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>
                            </div>
                        </details>

                        <!-- Drawer 19 MATK DOWN -->
                        <details class="bg-gray-800 p-4 rounded-xl shadow min-h-[60px]">
                            <summary class="cursor-pointer text-base font-semibold">MATK DOWN</summary>
                            <div class="mt-2 space-y-2 text-sm">
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-35 shrink-0 font-semibold">MATK DOWN(STR) %</label>
                                    <select name="p_matk_down_str_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_matk_down_str_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-35 shrink-0 font-semibold">MATK DOWN(INT) %</label>
                                    <select name="p_matk_down_int_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_matk_down_int_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-35 shrink-0 font-semibold">MATK DOWN(VIT) %</label>
                                    <select name="p_matk_down_vit_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_matk_down_vit_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-35 shrink-0 font-semibold">MATK DOWN(AGI) %</label>
                                    <select name="p_matk_down_agi_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_matk_down_agi_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>
                                <div class="flex items-center gap-2 w-full min-w-0">
                                    <label class="w-35 shrink-0 font-semibold">MATK DOWN(DEX) %</label>
                                    <select name="p_matk_up_dex_operator"
                                        class="w-14 px-2 py-1 rounded bg-gray-700 shrink-0">
                                        <option value="≥">≥</option>
                                        <option value=">">></option>
                                        <option value="=">=</option>
                                        <option value="≤">≤</option>
                                        <option value="&lt;">&lt</option>
                                    </select>
                                    <input type="number" name="p_matk_down_dex_value"
                                        class="flex-1 min-w-0 px-2 py-1 rounded bg-gray-700" placeholder="Value" />
                                    <label class="w-6 shrink-0 font-semibold">%</label>
                                </div>
                            </div>
                        </details>
                    </div>

                    <!-- Search Buttons -->
                    <div class="flex justify-center gap-4 mt-6">
                        <button id="searchItemBtn" type="submit"
                            class="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-xl shadow font-semibold transition">
                            🔍 Search
                        </button>
                        <button id="resetItemBtn" type="reset"
                            class="px-6 py-2 bg-red-500 hover:bg-red-900 rounded-xl shadow font-semibold transition">
                            ❌ Reset
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <?php include 'footer.php'; ?>
    <?php include 'support_box.php'; ?>

    <script src="scripts/advanced_search.js"></script>
</body>

</html>