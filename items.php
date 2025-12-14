<!DOCTYPE html>
<html lang="en">
<?php include 'head.php'; ?>

<head>
    <title>Toram Online Item Search - VeneNako</title>
    <meta name="description"
        content="Search for Toram Online items by name, view stats, drop locations, recipes, and more. Find equipments and materials easily with VeneNako.">

</head>

<body>
    <?php include 'navbar.php'; ?>
    <!-- Banner Section -->
    <section class="relative w-screen h-[18rem] sm:h-[20rem] bg-cover mt-10 banner-bg-2"
        style="background-position: top 55% center;">

        <!-- Overlay for fade effect -->
        <div class="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent opacity-100 z-0"></div>

        <!-- Banner Content -->
        <div
            class="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 pb-3 md:pb-0 md:pt-4 z-10">
            <!-- Title -->
            <h1 id="banner-title"
                class="text-3xl sm:text-4xl md:text-5xl font-bold font-russoone italic tracking-wider text-shadow-lg/30 w-full">
                Items Database
            </h1>
            <!-- Description -->
            <p id="banner-description" class="text-sm sm:text-lg text-slate-200 drop-shadow-sm">
                Database about material, equipments, consumable and xtal info.
            </p>
        </div>
    </section>
    <main>
        <div class="container mx-auto px-4 py-6 min-h-screen">
            <div class="w-full max-w-4xl mx-auto space-y-6">
                <div class="flex flex-col md:flex-row gap-6">
                    <div class="flex-1">
                        <label for="sortBy" class="block text-sm font-medium text-white mb-1">Sort By</label>
                        <select id="sortBy"
                            class="w-full font-semibold border-b border-gray-400 focus:outline-none py-2 text-blue-300 bg-gray-600">
                            <option value="az" selected>Name A-Z</option>
                            <option value="za">Name Z-A</option>
                            <option value="asc">Base ATK/DEF Ascending</option>
                            <option value="desc">Base ATK/DEF Descending</option>
                            <option value="recent">Recent Added</option>
                            <option value="favorites">Only Show Favorites</option>
                        </select>

                    </div>

                    <div class="flex-1">
                        <label for="searchBox" class="block text-sm font-medium text-white mb-1">Search Name</label>
                        <div class="flex items-center border-b border-gray-400">
                            <input type="text" id="searchBox" placeholder="Type to search..."
                                class="w-full bg-transparent focus:outline-none py-2 text-white" />
                            <a href="advanced_search.php"
                                class="flex items-center text-blue-400 hover:text-blue-300 ml-2 text-sm">
                                <i class="fa-solid fa-gear mr-1"></i>
                                <span>Advanced</span>
                            </a>
                        </div>
                    </div>


                </div>
            </div>
            <div class="w-full max-w-7xl mx-auto space-y-6">
                <div class="flex flex-col md:flex-row gap-4">

                    <div class="flex-1 min-w-0">
                        <label class="block text-sm font-medium text-white mb-2">Equipments</label>
                        <div
                            class="inline-flex overflow-hidden rounded-full bg-gray-700 shadow-inner border border-gray-600">
                            <button
                                class="category-btn flex items-center justify-center w-10 h-10 md:w-12 md:h-12 transition bg-gray-600 hover:bg-blue-600 border-r border-gray-500 rounded-l-full"
                                data-value="one handed sword">
                                <img src="./icons/ohs_icon.png" class="w-6 h-6 md:w-8 md:h-8 object-contain"
                                    alt="One Handed Sword" />
                            </button>
                            <button
                                class="category-btn flex items-center justify-center w-10 h-10 md:w-12 md:h-12 transition bg-gray-600 hover:bg-blue-600 border-r border-gray-500"
                                data-value="two handed sword">
                                <img src="./icons/ths_icon.png" class="w-6 h-6 md:w-8 md:h-8 object-contain"
                                    alt="Two Handed Sword" />
                            </button>
                            <button
                                class="category-btn flex items-center justify-center w-10 h-10 md:w-12 md:h-12 transition bg-gray-600 hover:bg-blue-600 border-r border-gray-500"
                                data-value="bow">
                                <img src="./icons/bow_icon.png" class="w-6 h-6 md:w-8 md:h-8 object-contain"
                                    alt="Bow" />
                            </button>
                            <button
                                class="category-btn flex items-center justify-center w-10 h-10 md:w-12 md:h-12 transition bg-gray-600 hover:bg-blue-600 border-r border-gray-500"
                                data-value="bowgun">
                                <img src="./icons/bwg_icon.png" class="w-6 h-6 md:w-8 md:h-8 object-contain"
                                    alt="Bowgun" />
                            </button>
                            <button
                                class="category-btn flex items-center justify-center w-10 h-10 md:w-12 md:h-12 transition bg-gray-600 hover:bg-blue-600 border-r border-gray-500"
                                data-value="staff">
                                <img src="./icons/stf_icon.png" class="w-6 h-6 md:w-8 md:h-8 object-contain"
                                    alt="Staff" />
                            </button>
                            <button
                                class="category-btn flex items-center justify-center w-10 h-10 md:w-12 md:h-12 transition bg-gray-600 hover:bg-blue-600 border-r border-gray-500"
                                data-value="magic device">
                                <img src="./icons/md_icon.png" class="w-6 h-6 md:w-8 md:h-8 object-contain"
                                    alt="Magic Device" />
                            </button>
                            <button
                                class="category-btn flex items-center justify-center w-10 h-10 md:w-12 md:h-12 transition bg-gray-600 hover:bg-blue-600 border-r border-gray-500"
                                data-value="knuckles">
                                <img src="./icons/knux_icon.png" class="w-6 h-6 md:w-8 md:h-8 object-contain"
                                    alt="Knuckles" />
                            </button>
                            <button
                                class="category-btn flex items-center justify-center w-10 h-10 md:w-12 md:h-12 transition bg-gray-600 hover:bg-blue-600 border-r border-gray-500"
                                data-value="katana">
                                <img src="./icons/katana_icon.png" class="w-6 h-6 md:w-8 md:h-8 object-contain"
                                    alt="Katana" />
                            </button>
                            <button
                                class="category-btn flex items-center justify-center w-10 h-10 md:w-12 md:h-12 transition bg-gray-600 hover:bg-blue-600 rounded-r-full"
                                data-value="halberd">
                                <img src="./icons/hb_icon.png" class="w-6 h-6 md:w-8 md:h-8 object-contain"
                                    alt="Halberd" />
                            </button>

                        </div>
                    </div>
                    <div class="flex-1 min-w-0">
                        <label class="block text-sm font-medium text-white mb-2">Equipments</label>
                        <div
                            class="inline-flex overflow-hidden rounded-full bg-gray-700 shadow-inner border border-gray-600">
                            <button
                                class="category-btn flex items-center justify-center w-10 h-10 md:w-12 md:h-12 transition bg-gray-600 hover:bg-blue-600 border-r border-gray-500 rounded-l-full"
                                data-value="arrow">
                                <img src="./icons/arrow_icon.png" class="w-6 h-6 md:w-8 md:h-8 object-contain"
                                    alt="Arrow" />
                            </button>
                            <button
                                class="category-btn flex items-center justify-center w-10 h-10 md:w-12 md:h-12 transition bg-gray-600 hover:bg-blue-600 border-r border-gray-500"
                                data-value="dagger">
                                <img src="./icons/dagger_icon.png" class="w-6 h-6 md:w-8 md:h-8 object-contain"
                                    alt="Dagger" />
                            </button>
                            <button
                                class="category-btn flex items-center justify-center w-10 h-10 md:w-12 md:h-12 transition bg-gray-600 hover:bg-blue-600 border-r border-gray-500"
                                data-value="shield">
                                <img src="./icons/shield_icon.png" class="w-6 h-6 md:w-8 md:h-8 object-contain"
                                    alt="Shield" />
                            </button>
                            <button
                                class="category-btn flex items-center justify-center w-10 h-10 md:w-12 md:h-12 transition bg-gray-600 hover:bg-blue-600 border-r border-gray-500"
                                data-value="ninjutsu scroll">
                                <img src="./icons/scroll_icon.png" class="w-6 h-6 md:w-8 md:h-8 object-contain"
                                    alt="Ninjutsu Scroll" />
                            </button>
                            <button
                                class="category-btn flex items-center justify-center w-10 h-10 md:w-12 md:h-12 transition bg-gray-600 hover:bg-blue-600 border-r border-gray-500"
                                data-value="armor">
                                <img src="./icons/armor_icon.png" class="w-6 h-6 md:w-8 md:h-8 object-contain"
                                    alt="Armor" />
                            </button>
                            <button
                                class="category-btn flex items-center justify-center w-10 h-10 md:w-12 md:h-12 transition bg-gray-600 hover:bg-blue-600 border-r border-gray-500"
                                data-value="additional">
                                <img src="./icons/add_icon.png" class="w-6 h-6 md:w-8 md:h-8 object-contain"
                                    alt="Additional" />
                            </button>
                            <button
                                class="category-btn flex items-center justify-center w-10 h-10 md:w-12 md:h-12 transition bg-gray-600 hover:bg-blue-600 rounded-r-full"
                                data-value="special ring">
                                <img src="./icons/spec_icon.png" class="w-6 h-6 md:w-8 md:h-8 object-contain"
                                    alt="Special Ring" />
                            </button>
                        </div>
                    </div>
                    <div class="flex-1 min-w-0">
                        <label class="block text-sm font-medium text-white mb-2">Crysta</label>
                        <div
                            class="inline-flex overflow-hidden rounded-full bg-gray-700 shadow-inner border border-gray-600">
                            <button
                                class="category-btn flex items-center justify-center w-10 h-10 md:w-12 md:h-12 transition bg-gray-600 hover:bg-blue-600 border-r border-gray-500 rounded-l-full"
                                data-value="normal xtal">
                                <img src="./icons/blue_crysta.png" class="w-6 h-6 md:w-8 md:h-8 object-contain"
                                    alt="Normal Crysta" />
                            </button>
                            <button
                                class="category-btn flex items-center justify-center w-10 h-10 md:w-12 md:h-12 transition bg-gray-600 hover:bg-blue-600 border-r border-gray-500"
                                data-value="weapon xtal">
                                <img src="./icons/weapon_crysta.png" class="w-6 h-6 md:w-8 md:h-8 object-contain"
                                    alt="Weapon Crysta" />
                            </button>
                            <button
                                class="category-btn flex items-center justify-center w-10 h-10 md:w-12 md:h-12 transition bg-gray-600 hover:bg-blue-600 border-r border-gray-500"
                                data-value="armor xtal">
                                <img src="./icons/armor_crysta.png" class="w-6 h-6 md:w-8 md:h-8 object-contain"
                                    alt="Armor Crysta" />
                            </button>
                            <button
                                class="category-btn flex items-center justify-center w-10 h-10 md:w-12 md:h-12 transition bg-gray-600 hover:bg-blue-600 border-r border-gray-500"
                                data-value="additional xtal">
                                <img src="./icons/add_crysta.png" class="w-6 h-6 md:w-8 md:h-8 object-contain"
                                    alt="Additional Crysta" />
                            </button>
                            <button
                                class="category-btn flex items-center justify-center w-10 h-10 md:w-12 md:h-12 transition bg-gray-600 hover:bg-blue-600 rounded-r-full"
                                data-value="special xtal">
                                <img src="./icons/special_crysta.png" class="w-6 h-6 md:w-8 md:h-8 object-contain"
                                    alt="Special Crysta" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <h2 class="text-center text-3xl font-bold text-gray-800 mt-8 mb-6">Item List</h2>

            <div id="result-header" class="text-center text-xl font-medium text-gray-700 mb-6">

            </div>

            <div id="info-container"
                class="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6"
                style="grid-auto-rows: minmax(200px, auto);">

                <div id="loading-spinner"
                    class="absolute inset-0  bg-opacity-70 flex items-center justify-center pt-16 z-10 hidden">
                    <div class="animate-spin rounded-full h-12 w-12 border-t-4 border-red-500"></div>
                </div>

            </div>



        </div>
        <div id="pagination-controls" class="flex justify-center gap-2 mt-4 items-center">
            <button id="first-page"
                class="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-300"
                aria-label="First page">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M11 19l-7-7 7-7M19 19l-7-7 7-7" />
                </svg>
            </button>

            <button id="prev-page"
                class="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-300"
                aria-label="Previous page">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <div id="page-numbers" class="flex gap-2 items-center">
            </div>

            <button id="next-page"
                class="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-300"
                aria-label="Next page">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>

            <button id="last-page"
                class="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-300"
                aria-label="Last page">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
            </button>
        </div>

        <?php include 'footer.php'; ?>
        <?php include 'support_box.php'; ?>
    </main>

    <script src="scripts/items.js"></script>
</body>

</html>