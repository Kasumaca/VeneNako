<!DOCTYPE html>
<html>
<?php include 'head.php'; ?>

<head>
    <title>Toram Skill Simulator – Build Skill Trees | VeneNako</title>
    <meta name="description"
        content="Use VeneNako’s Toram Online skill planner to build and simulate skill trees. Preview SP costs." />

</head>

<body>
    <style>
        @keyframes pulse-soft {
            0% {
                box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.5);
            }

            70% {
                box-shadow: 0 0 12px 6px rgba(59, 130, 246, 0.0);
            }

            100% {
                box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.0);
            }
        }

        .animate-pulse-soft {
            animation: pulse-soft 2s infinite;
        }
    </style>
    <div id="loading-screen"
        class="fixed inset-0 bg-gray-900 flex flex-col items-center justify-center z-50 opacity-0 pointer-events-none transition-opacity duration-300 space-y-4">
        <div class="animate-spin rounded-full h-12 w-12 border-t-4 border-red-500"></div>
        <span class="text-white text-lg font-semibold select-none">Processing...</span>
    </div>


    <?php include 'navbar.php'; ?>
    <main class="pt-16 max-w-5xl mx-auto">
        <h1 class="text-3xl font-semibold mt-6 text-center text-blue-300">Skill Simulator</h1>
        <div id="export-preview-modal"
            class="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center z-50 hidden">
            <div class="bg-gray-700 p-4 rounded shadow max-w-full max-h-full overflow-auto text-center">
                <h2 class="text-xl text-blue-400 font-bold mb-4">Export Preview</h2>
                <img loading="lazy" id="preview-image" class="max-w-full max-h-[80vh]" />
                <div class="mt-4">
                    <button id="download-button" class="bg-blue-400 text-white px-4 py-2 rounded">Download</button>
                    <button id="close-preview"
                        class="bg-red-800 text-white ml-2 px-4 py-2 rounded border border-gray-400">Cancel</button>
                </div>
            </div>
        </div>
        <div class="p-4">
            <div id="buildInfo"
                class="hidden bg-gray-800 text-gray-100 p-6 rounded-lg shadow-md border border-blue-500 space-y-4">

                <h1 id="buildName" class="text-2xl lg:text-4xl font-bold text-blue-300">
                    Loading Build Name...
                </h1>

                <p id="buildOwner" class="text-sm lg:text-lg text-yellow-300">
                    Loading Owner...
                </p>

                <div class="flex flex-col md:flex-row md:space-x-6 text-1xl text-gray-200">
                    <div class="flex-1">
                        <span class="font-semibold text-gray-400">Created At: </span>
                        <span id="buildCreated">Loading...</span>
                    </div>
                    <div class="flex-1">
                        <span class="font-semibold text-gray-400">Updated At: </span>
                        <span id="buildUpdated">Loading...</span>
                    </div>
                </div>

                <div>
                    <p class="font-semibold text-gray-400 mb-1">Description:</p>
                    <p id="buildDescription"
                        class="text-gray-200 text-sm md:text-base pr-20 break-words whitespace-pre-wrap ">
                        Loading...
                    </p>
                </div>

            </div>
        </div>

        <div class="p-2">
            <div id="message"
                class="hidden bg-gray-700 text-blue-400 p-20 rounded-md shadow mb-6 border border-blue-400 border-dashed">
                <p class="text-center font-semibold text-xl">
                    SAVE/LOAD FUNCTION AVAILABLE WHEN LOGGED IN
                </p>
            </div>
        </div>

        <div id="saveLoadPanel" class="hidden space-y-6 mb-8">
            <div
                class="bg-gray-700 p-4 rounded-md text-white shadow flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">

                <!-- Left Side -->
                <div class="w-full md:w-1/2 space-y-2 flex flex-col">
                    <h3 class="text-lg font-semibold">Your Saved Selections</h3>
                    <div class="rounded border border-blue-300 overflow-hidden max-h-64 md:max-h-80 lg:max-h-74">

                        <div class="flex-grow overflow-y-auto">
                            <select id="savedSelectionsList" class="w-full bg-gray-800 text-white p-2 outline-none"
                                size="999">
                                <option value="">--- Choose Build ---</option>
                            </select>
                        </div>
                    </div>

                    <div class="flex w-full justify-center space-x-4">
                        <button id="loadBuildBtn"
                            class="bg-blue-400 font-semibold hover:bg-yellow-700 text-white px-4 py-2 rounded w-full sm:w-48">
                            Load Build
                        </button>

                        <button id="deleteBuildBtn"
                            class="bg-red-600 font-semibold hover:bg-red-700 text-white px-4 py-2 rounded w-full sm:w-48">
                            Delete Build
                        </button>
                    </div>
                </div>

                <div class="w-full md:w-1/2 space-y-2">
                    <h3 class="text-lg font-semibold">Save New Selection</h3>

                    <label for="selectionName" class="block text-sm font-medium text-white">Name</label>
                    <input type="text" id="selectionName" class="w-full h-12 border border-blue-400 rounded p-2"
                        placeholder="Name">

                    <label for="selectionDescription" class="block text-sm font-medium text-white">Description</label>
                    <textarea id="selectionDescription" class="w-full h-24 border border-blue-400 rounded p-2"
                        placeholder="Description"></textarea>

                    <label for="selectionPrivacy" class="block text-sm font-medium text-white">Privacy</label>
                    <select id="selectionPrivacy" class="w-full h-12 bg-gray-700 border border-blue-400 rounded p-2">
                        <option value="private">Private(Only You)</option>
                        <option value="link_only">Link Only(Shared But Only Link)</option>
                        <option value="public">Publish(Can See From Browse)</option>
                    </select>

                    <button id="saveNewBtn" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                        Save New
                    </button>
                </div>
            </div>
        </div>
        <div id="editPanel" class="bg-gray-700 text-white p-4 rounded-md shadow space-y-2 hidden">
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
                    <button id="copyLinkBtn" class="bg-blue-600 hover:bg-blue-700 text-white px-3 rounded">Copy</button>
                </div>
            </div>

            <button id="saveChangesBtn" class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
                Save Changes
            </button>
        </div>
        <div id="totalSPDisplay"
            class="flex items-center gap-3 text-white text-base sm:text-lg font-semibold mb-4 px-5 py-3 bg-gradient-to-r from-gray-700 to-blue-500 shadow-md rounded-md border border-blue-300">
            <span>Total SP Used: <span id="totalSPValue">0</span>
                <button id="resetAllBtn"
                    class=" px-4 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition hidden">
                    Clear All
                </button>
            </span>

        </div>
        <div class="max-w-5xl mx-auto bg-gray-700 text-white p-6 rounded-t">
            <div>
                <h2 class="text-xl font-semibold mb-4 flex items-center">
                    <image src="./icons/sg_icon.png" class="mr-2 w-8 h-auto">
                        Selected Star Gems
                        <span id="starGemSummary" class="text-blue-400 ml-2"></span>
                </h2>

                <div id="selectedSkills" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <button onclick="toggleStarGemModal()"
                        class="flex flex-col items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow p-3 text-sm transition-all h-24">
                        <svg class="w-5 h-5 mb-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 4v16m8-8H4"></path>
                        </svg>
                        Add/Remove Star Gems
                    </button>

                </div>
            </div>
        </div>

        <div id="starGemModal"
            class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 hidden">
            <div class="bg-gray-800 max-w-3xl w-full max-h-[70vh] overflow-y-auto rounded-lg shadow-2xl p-4">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-xl font-semibold text-blue-300">Manage Star Gems</h2>
                    <button onclick="toggleStarGemModal()"
                        class="text-red-500 hover:text-red-300 text-xl font-bold">&times;</button>
                </div>

                <div id="starGemAccordion" class="space-y-4">
                </div>
            </div>
        </div>

        <div id="treeDrawer" class="space-y-4 mt-8"></div>
        <div id="exportContainer" style="display: none; position: absolute; top: 0; left: 0;"></div>

        <div class="hidden md:block fixed top-1/2 right-6 -translate-y-1/2 z-50">
            <button id="helpBtn" class="relative bg-blue-600 text-white p-4 mr-10 rounded-full shadow-xl 
           hover:bg-blue-700 transition transform hover:scale-105
           animate-pulse-soft font-semibold">
                How To Use ?
            </button>

            <div id="helpPanel" class="hidden w-72 p-5 bg-gray-700 rounded-xl shadow-2xl border border-gray-400
           text-sm mt-3 transform translate-y-3 opacity-0 transition-all duration-300">
                <h2 class="font-semibold text-lg mb-3 text-blue-400 font-semibold">How to Use For Keyboard + Mouse</h2>

                <ul class="list-disc ml-4 space-y-2 text-white font-semibold">
                    <li>Left Click To Add SP.</li>
                    <li>Right Click To Substract SP.</li>
                    <li>Hold CTRL + Left/Right Click To Quick Add/Substract 10.</li>
                </ul>

                <button id="closeHelp"
                    class="font-semibold mt-4 bg-red-400 hover:bg-red-500 text-gray-200 px-3 py-1 rounded">
                    Close
                </button>
            </div>
        </div>
    </main>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
    <script src="scripts/skill_simulator_data.js"></script>
    <script src="scripts/skill_simulator.js"></script>
    <?php include 'footer.php'; ?>
    <?php include 'support_box.php'; ?>

</body>


</html>