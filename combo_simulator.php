<!DOCTYPE html>
<html>
<?php include 'head.php'; ?>

<head>
    <title>Toram Online Skill Combo Simulator - VeneNako</title>
    <meta name="description"
        content="Simulate skill combos for Toram Online. Plan combo sequences, calculate MP costs, and optimize your skill builds with VeneNako’s combo simulator." />

</head>

<body>

    <!-- Loading Screen -->
    <div id="loading-screen"
        class="fixed inset-0 bg-gray-900 flex items-center justify-center z-50 opacity-0 pointer-events-none transition-opacity duration-300">
        <div class="animate-spin rounded-full h-12 w-12 border-t-4 border-red-500"></div>
    </div>

    <?php include 'navbar.php'; ?>

    <div class="flex flex-col items-center justify-start min-h-screen pt-10 space-y-6 px-4"
        id="combo-container-wrapper">

        <div id="export-preview-modal"
            class="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center z-50 hidden">
            <div class="bg-gray-700 p-4 rounded shadow max-w-full max-h-full overflow-auto text-center">
                <h2 class="text-xl text-blue-400 font-bold mb-4">Export Preview</h2>
                <img id="preview-image" class="max-w-full max-h-[80vh] loading=" lazy"" />
                <div class="mt-4">
                    <button id="download-button" class="bg-blue-400 text-white px-4 py-2 rounded">Download</button>
                    <button id="close-preview"
                        class="bg-red-800 text-white ml-2 px-4 py-2 rounded border border-gray-400">Cancel</button>
                </div>
            </div>
        </div>
        <div class="p-4 w-4xl mt-10">
            <div id="comboInfo"
                class="hidden bg-gray-800 text-gray-100 p-6 rounded-lg shadow-md border border-blue-500 space-y-4 w-full">

                <!-- Build Name -->
                <h1 id="comboNameDisplay" class="text-4xl font-bold text-blue-300">
                    Loading Build Name...
                </h1>

                <!-- Owner -->
                <p id="comboOwnerDisplay" class="text-1xl text-yellow-300">
                    Loading Owner...
                </p>

                <!-- Created & Updated Time -->
                <div class="flex flex-col md:flex-row md:space-x-6 text-1xl text-gray-200">
                    <div class="flex-1">
                        <span class="font-semibold text-gray-400">Created At: </span>
                        <span id="comboCreated">Loading...</span>
                    </div>
                    <div class="flex-1">
                        <span class="font-semibold text-gray-400">Updated At: </span>
                        <span id="comboUpdated">Loading...</span>
                    </div>
                </div>

                <!-- Description -->
                <div>
                    <p class="font-semibold text-gray-400 mb-1">Description:</p>
                    <p id="comboDescriptionDisplay" class="text-gray-200 break-words whitespace-pre-wrap">
                        Loading...
                    </p>
                </div>
            </div>
        </div>


        <!-- Message shown only when NOT logged in -->
        <div class="p-2" id="reminder-message"> <!-- Outer padding to create gap between panel and border -->
            <div id="message"
                class="hidden bg-gray-700 text-blue-400 p-20 rounded-md shadow mb-6 border border-blue-400 border-dashed">
                <p class="text-center font-semibold text-xl">
                    SAVE/LOAD FUNCTION AVAILABLE WHEN LOGGED IN
                </p>
            </div>
        </div>

        <div id="functionPanel" class="max-w-4xl">
            <div id="saveLoadPanel" class="hidden space-y-6 mb-8 w-full">
                <div
                    class="bg-gray-700 p-4 rounded-md text-white shadow flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">

                    <div class="w-full md:w-1/2 space-y-2 flex flex-col">
                        <h3 class="text-lg font-semibold">Your Saved Combo Build</h3>

                        <div class="rounded border border-blue-300 overflow-hidden max-h-64 md:max-h-80 lg:max-h-74">

                            <div class="flex-grow overflow-y-auto">
                                <select id="savedCombosList" class="w-full bg-gray-800 text-white p-2 outline-none"
                                    size="999">
                                    <option value="">--- Choose Combo Build ---</option>
                                </select>
                            </div>
                        </div>

                        <div class="flex w-full justify-center space-x-4">
                            <button id="loadComboBtn"
                                class="bg-blue-400 font-semibold hover:bg-yellow-700 text-white px-4 py-2 rounded w-full sm:w-48">
                                Load Combos
                            </button>

                            <button id="deleteComboBtn"
                                class="bg-red-600 font-semibold hover:bg-red-700 text-white px-4 py-2 rounded w-full sm:w-48">
                                Delete Combos
                            </button>
                        </div>
                    </div>

                    <div class="w-full md:w-1/2 space-y-2">
                        <h3 class="text-lg font-semibold">Save New Selection</h3>

                        <label for="comboName" class="block text-sm font-medium text-white">Name</label>
                        <input type="text" id="comboName" class="w-full h-12 border border-blue-400 rounded p-2"
                            placeholder="Name">

                        <label for="comboDescription" class="block text-sm font-medium text-white">Description</label>
                        <textarea id="comboDescription" class="w-full h-24 border border-blue-400 rounded p-2"
                            placeholder="Description"></textarea>

                        <label for="comboPrivacy" class="block text-sm font-medium text-white">Privacy</label>
                        <select id="comboPrivacy" class="w-full h-12 bg-gray-700 border border-blue-400 rounded p-2">
                            <option value="private">Private(Only You)</option>
                            <option value="link_only">Link Only(Shared But Only Link)</option>
                            <option value="public">Publish(Can See From Browse)</option>
                        </select>

                        <button id="saveNewBtn" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                            Save New Combos
                        </button>
                    </div>
                </div>
            </div>
            <div id="editPanel" class="bg-gray-700 text-white p-4 rounded-md shadow w-full space-y-2 hidden">
                <h3 class="text-lg font-semibold">Edit Selected Save</h3>

                <label for="editShareURL" class="block text-sm font-medium text-white mt-2">Shareable URL</label>
                <div class="flex space-x-2">
                    <input type="text" id="editShareURL"
                        class="w-full h-10 border border-blue-400 rounded p-2 bg-gray-600 text-white cursor-text select-all"
                        readonly>
                    <button id="copyLinkBtn" class="bg-blue-600 hover:bg-blue-700 text-white px-3 rounded">
                        Copy
                    </button>
                </div>
                <label for="editName" class="block text-sm font-medium text-white">Rename</label>
                <input type="text" id="editName" class="w-full h-12 border border-blue-400 rounded p-2"
                    placeholder="Rename">

                <label for="editDescription" class="block text-sm font-medium text-white">Update Description</label>
                <textarea id="editDescription" class="w-full h-24 border border-blue-400 rounded p-2"
                    placeholder="Update description"></textarea>

                <label for="editPrivacy" class="block text-sm font-medium text-white">Privacy</label>
                <select id="editPrivacy" class="w-full h-12 bg-gray-700 border border-blue-400 rounded p-2">
                    <option value="private">Private (Only You)</option>
                    <option value="link_only">Link Only (Shared But Only Link)</option>
                    <option value="public">Publish (Can See From Browse)</option>
                </select>

                <div id="shareLinkContainer" class="hidden">
                    <label for="shareLink" class="block text-sm font-medium text-white">Shareable Link</label>
                    <div class="flex space-x-2">
                        <input type="text" id="shareLink"
                            class="w-full h-10 border border-blue-400 rounded p-2 bg-gray-800 text-white" readonly>
                        <button id="copyLinkBtn"
                            class="bg-blue-600 hover:bg-blue-700 text-white px-3 rounded">Copy</button>
                    </div>
                </div>

                <button id="saveChangesBtn" class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
                    Save Changes
                </button>
            </div>
        </div>
        <div id="stat-equipment-setup"
            class="w-full max-w-4xl bg-gray-900 p-6 rounded-lg shadow-md text-white space-y-4">
            <h2 class="text-xl font-semibold">Stat & Equipment Setup</h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label for="hpPercent" class="block text-sm font-medium mb-1">Remaining HP%</label>
                    <input id="hpPercent" type="number" min="0" max="100"
                        class="w-full px-3 py-2 rounded bg-gray-700 text-white" placeholder="% HP Left" value=100>
                </div>
                <div>
                    <label for="mp" class="block text-sm font-medium mb-1">Current MP</label>
                    <input id="mp" type="number" min="0" class="w-full px-3 py-2 rounded bg-gray-700 text-white"
                        value=2000>
                </div>
                <div>
                    <label for="mainWeapon" class="block text-sm font-medium mb-1">Main Weapon</label>
                    <select id="mainWeapon" class="w-full px-3 py-2 rounded bg-gray-700 text-white">
                        <option value="barehand">Barehand</option>
                        <option value="ohs">One-Handed Sword</option>
                        <option value="ths">Two-Handed Sword</option>
                        <option value="bow">Bow</option>
                        <option value="bwg">Bowgun</option>
                        <option value="stf">Staff</option>
                        <option value="md">Magic Device</option>
                        <option value="knux">Knuckles</option>
                        <option value="halb">Halberd</option>
                        <option value="ktn">Katana</option>
                    </select>
                </div>

                <div>
                    <label for="subWeapon" class="block text-sm font-medium mb-1">Sub Weapon</label>
                    <select id="subWeapon" class="w-full px-3 py-2 rounded bg-gray-700 text-white">
                    </select>
                </div>

                <div class="md:col-span-2">
                    <label for="ninjutsuReduction" class="block text-sm font-medium mb-1">Ninjutsu Scroll MP Cost
                        Reduction</label>
                    <input id="ninjutsuReduction" type="number" min="0" max="3" step="1"
                        class="w-full px-3 py-2 rounded bg-gray-700 text-white" value=0>
                </div>
            </div>
        </div>

        <div id="combo-container" class="space-y-6 w-full max-w-5xl"></div>

        <div id="createCombo-container" class="w-full max-w-4xl text-center pt-4 mb-20">
            <button onclick="comboSystem.createCombo()"
                class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow">
                + Create Combo
            </button>
        </div>
    </div>

    <script src="scripts/skill_data.js"></script>
    <script src="scripts/combo_tags.js"></script>
    <script src="scripts/combo_system.js"></script>
    <?php include 'footer.php'; ?>
    <?php include 'support_box.php'; ?>

</body>

</html>