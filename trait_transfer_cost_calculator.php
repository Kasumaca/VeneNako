<!DOCTYPE html>
<html>
<?php include 'head.php'; ?>

<head>
    <title>VeneNako - Trait Transfer Cost Calculator</title>
</head>

<body>
    <!-- Loading Screen -->
    <div id="loading-screen"
        class="fixed inset-0 bg-gray-900 flex items-center justify-center z-50 opacity-0 pointer-events-none transition-opacity duration-300">
        <div class="animate-spin rounded-full h-12 w-12 border-t-4 border-red-500"></div>
    </div>
    <?php include 'navbar.php'; ?>
    <main class="pt-16 px-4 min-h-screen">
        <div class="w-full max-w-5xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
            <h1 class="text-3xl font-semibold text-center text-blue-300 mb-4">Trait Transfer Cost Calculator</h1>

            <div class="flex flex-col md:flex-row items-center justify-center gap-6">

                <div class="flex-1 bg-gray-700 p-4 rounded-lg shadow-inner w-full">
                    <h3 class="text-xl font-semibold text-white mb-4 text-center">Receiver Equipment</h3>

                    <label class="block text-white mb-1">ATK/DEF:</label>
                    <input type="number" id="atkDef1" value="0"
                        class="w-full p-2 mb-3 rounded bg-gray-600 text-white border border-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500" />

                    <label class="block text-white mb-1">Type:</label>
                    <select id="equipType"
                        class="w-full p-2 mb-3 rounded bg-gray-600 text-white border border-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500">

                    </select>
                </div>

                <div class="text-white text-4xl hidden md:flex items-center justify-center px-4">
                    &#8592;
                </div>

                <div class="flex-1 bg-gray-700 p-4 rounded-lg shadow-inner w-full">
                    <h3 class="text-xl font-semibold text-white mb-4 text-center">Giver Equipment</h3>

                    <label class="block text-white mb-1">ATK/DEF:</label>
                    <input type="number" id="atkDef2" value="0"
                        class="w-full p-2 mb-3 rounded bg-gray-600 text-white border border-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500" />

                    <label class="block text-white mb-1">Tier:</label>
                    <select id="tier2"
                        class="w-full p-2 mb-3 rounded bg-gray-600 text-white border border-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500">
                        <option value="1">Tier 1 ⚪</option>
                        <option value="2">Tier 2 🟢</option>
                        <option value="3">Tier 3 🔵</option>
                        <option value="4">Tier 4 🟣</option>
                        <option value="5">Tier 5 🟠</option>
                    </select>
                </div>
            </div>

            <div id="result" class="mt-6 bg-gray-700 text-blue-300 text-lg font-semibold text-center p-4 rounded">
                Transfer Cost: —
            </div>
            <div class="max-w-5xl mx-auto mt-4">

                <button id="toggleDrawerBtn"
                    class="w-full text-left px-4 py-2 bg-gray-600 hover:bg-gray-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-400">
                    Show Calculation Steps ▼
                </button>

                <div id="calcDrawer"
                    class="overflow-hidden max-h-0 transition-[max-height] duration-300 ease-in-out bg-gray-700 rounded mt-2 text-sm text-white"
                    style="max-height: 0;">
                    <div class="p-4" id="stepsContent"></div>
                </div>
            </div>


        </div>
    </main>
    <script src="scripts/trait_transfer_cost.js"></script>
    <?php include 'support_box.php'; ?>
    <?php include 'footer.php'; ?>
</body>

</html>