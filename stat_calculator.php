<!DOCTYPE html>
<html>
<?php include 'head.php'; ?>

<head>
    <title>VeneNako – Toram Online Stat Calculator & Equipment Build Tool</title>
    <meta name="description"
        content="Plan Toram Online stat builds and see how they interact with equipment. Use VeneNako’s stat simulator to optimize your character for any class." />

</head>

<body>
    <?php include 'navbar.php'; ?>
    <div id="loading-screen"
        class="fixed inset-0 bg-gray-900 flex items-center justify-center z-50 opacity-0 pointer-events-none transition-opacity duration-300">
        <div class="animate-spin rounded-full h-12 w-12 border-t-4 border-red-500"></div>
    </div>
    <main class="pt-16 max-w-7xl mx-auto">
        <h1 class="text-3xl font-semibold mt-6 text-center text-blue-300">Stat Calculator</h1>
        <div class="p-4">
            <div id="buildInfo"
                class="hidden bg-gray-800 text-gray-100 p-6 rounded-lg shadow-md border border-blue-500 space-y-4">

                <!-- Build Name -->
                <h1 id="buildName" class="text-2xl lg:text-4xl font-bold text-blue-300">
                    Loading Build Name...
                </h1>

                <!-- Owner -->
                <p id="buildOwner" class="text-sm lg:text-lg text-yellow-300">
                    Loading Owner...
                </p>

                <!-- Created & Updated Time -->
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

                <!-- Description -->
                <div>
                    <p class="font-semibold text-gray-400 mb-1">Description:</p>
                    <p id="buildDescription"
                        class="text-gray-200 text-sm md:text-base pr-20 break-words whitespace-pre-wrap ">
                        Loading...
                    </p>
                </div>

            </div>
        </div>


        <!-- Message shown only when NOT logged in -->
        <div class="p-2"> <!-- Outer padding to create gap between panel and border -->
            <div id="message"
                class="hidden bg-gray-700 text-blue-400 p-20 rounded-md shadow mb-6 border border-blue-400 border-dashed">
                <p class="text-center font-semibold text-xl">
                    SAVE/LOAD FUNCTION AVAILABLE WHEN LOGGED IN
                </p>
            </div>
        </div>


        <!-- Save/Load Panel shown only when logged in -->
        <div id="saveLoadPanel" class="hidden space-y-6 mb-8">
            <!-- Panel 1: Selection List & Save New -->
            <div
                class="bg-gray-700 p-4 rounded-md text-white shadow flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">

                <!-- Left Side -->
                <div class="w-full md:w-1/2 space-y-2 flex flex-col">
                    <h3 class="text-lg font-semibold">Your Saved Selections</h3>

                    <!-- Border Around Selections, using flex-grow for height -->
                    <!-- Container that fills available space and scrolls -->
                    <div class="rounded border border-blue-300 overflow-hidden max-h-64 md:max-h-80 lg:max-h-74">

                        <div class="flex-grow overflow-y-auto">
                            <select id="savedSelectionsList" class="w-full bg-gray-800 text-white p-2 outline-none"
                                size="999">
                                <option value="">--- Choose Build ---</option>
                                <!-- Dynamically inserted options -->
                            </select>
                        </div>
                    </div>

                    <!-- Load and Delete Buttons (centered and full width on smaller screens) -->
                    <div class="flex w-full justify-center space-x-4">
                        <!-- Load Build Button -->
                        <button id="loadBuildBtn"
                            class="bg-blue-400 font-semibold hover:bg-yellow-700 text-white px-4 py-2 rounded w-full sm:w-48">
                            Load Build
                        </button>

                        <!-- Delete Build Button -->
                        <button id="deleteBuildBtn"
                            class="bg-red-600 font-semibold hover:bg-red-700 text-white px-4 py-2 rounded w-full sm:w-48">
                            Delete Build
                        </button>
                    </div>
                </div>

                <!-- Right Side -->
                <div class="w-full md:w-1/2 space-y-2">
                    <h3 class="text-lg font-semibold">Save New Selection</h3>

                    <!-- Name Label and Input -->
                    <label for="selectionName" class="block text-sm font-medium text-white">Name</label>
                    <input type="text" id="selectionName" class="w-full h-12 border border-blue-400 rounded p-2"
                        placeholder="Name">

                    <!-- Description Label and Textarea -->
                    <label for="selectionDescription" class="block text-sm font-medium text-white">Description</label>
                    <textarea id="selectionDescription" class="w-full h-24 border border-blue-400 rounded p-2"
                        placeholder="Description"></textarea>

                    <!-- Privacy Label and Select -->
                    <label for="selectionPrivacy" class="block text-sm font-medium text-white">Privacy</label>
                    <select id="selectionPrivacy" class="w-full h-12 bg-gray-700 border border-blue-400 rounded p-2">
                        <option value="private">Private(Only You)</option>
                        <option value="link_only">Link Only(Shared But Only Link)</option>
                        <option value="public">Publish(Can See From Browse)</option>
                    </select>

                    <!-- Save Button -->
                    <button id="saveNewBtn" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                        Save New
                    </button>
                </div>
            </div> <!-- <-- This is the missing closing div for Panel 1 -->
        </div>
        <!-- Panel 2: Edit Existing -->
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
            <!-- Edit Name -->
            <label for="editName" class="block text-sm font-medium text-white">Rename</label>
            <input type="text" id="editName" class="w-full h-12 border border-blue-400 rounded p-2"
                placeholder="Rename">

            <!-- Edit Description -->
            <label for="editDescription" class="block text-sm font-medium text-white">Update Description</label>
            <textarea id="editDescription" class="w-full h-24 border border-blue-400 rounded p-2"
                placeholder="Update description"></textarea>

            <!-- Edit Privacy -->
            <label for="editPrivacy" class="block text-sm font-medium text-white">Privacy</label>
            <select id="editPrivacy" class="w-full h-12 bg-gray-700 border border-blue-400 rounded p-2">
                <option value="private">Private (Only You)</option>
                <option value="link_only">Link Only (Shared But Only Link)</option>
                <option value="public">Publish (Can See From Browse)</option>
            </select>

            <!-- Shareable Link Section -->
            <div id="shareLinkContainer" class="hidden">
                <label for="shareLink" class="block text-sm font-medium text-white">Shareable Link</label>
                <div class="flex space-x-2">
                    <input type="text" id="shareLink"
                        class="w-full h-10 border border-blue-400 rounded p-2 bg-gray-800 text-white" readonly>
                    <button id="copyLinkBtn" class="bg-blue-600 hover:bg-blue-700 text-white px-3 rounded">Copy</button>
                </div>
            </div>

            <!-- Save Changes Button -->
            <button id="saveChangesBtn" class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
                Save Changes
            </button>
        </div>
        <div class="max-w-[90rem] mx-auto p-6 bg-gray-900 rounded-lg shadow-lg">
            <h2 class="text-2xl font-semibold mb-4 text-center text-white">Stat Distribution</h2>

            <div class="bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 class="text-lg font-semibold text-white">Character Properties</h3>
                <p class="text-sm text-gray-400 italic mb-4">Maximum stat value can be changed from your profile's
                    setting
                </p>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm font-medium text-white"> Level </label>
                        <input type="number" id="level"
                            class="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:ring focus:ring-blue-500"
                            value="1" min="1" max="726">
                    </div>
                </div>

                <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
                    <div>
                        <label class="block text-sm font-medium text-white"> STR </label>
                        <input type="number" id="STR"
                            class="stat-input w-full p-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:ring focus:ring-blue-500"
                            value="1" min="1">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-white"> INT </label>
                        <input type="number" id="INT"
                            class="stat-input w-full p-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:ring focus:ring-blue-500"
                            value="1" min="1">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-white"> VIT </label>
                        <input type="number" id="VIT"
                            class="stat-input w-full p-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:ring focus:ring-blue-500"
                            value="1" min="1">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-white"> AGI </label>
                        <input type="number" id="AGI"
                            class="stat-input w-full p-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:ring focus:ring-blue-500"
                            value="1" min="1">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-white"> DEX </label>
                        <input type="number" id="DEX"
                            class="stat-input w-full p-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:ring focus:ring-blue-500"
                            value="1" min="1">
                    </div>

                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <div>
                        <label class="block text-sm font-medium text-white"> Choose Stat </label>
                        <select id="extra-stat"
                            class="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:ring focus:ring-blue-500"
                            onchange="">
                            <option value="NONE">-</option>
                            <option value="CRT">CRT</option>
                            <option value="LUK">LUK</option>
                            <option value="MTL">MTL</option>
                            <option value="TEC">TEC</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-white" id="extra-stat-label">NONE</label>
                        <input type="number" id="extra-stat-input"
                            class="w-full p-2 bg-gray-600 text-gray-400 border border-gray-600 rounded-md focus:ring focus:ring-blue-500"
                            value="0" min="0" max="726" oninput="" disabled>
                    </div>
                </div>
            </div>

            <h2 class="text-2xl font-semibold mt-6 mb-4 text-center text-white">Equipments</h2>
            <div class="max-w-full mx-auto bg-gray-900 rounded-lg shadow-lg space-y-6">
                <!-- Top Row: Weapon and Sub Weapon -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <!-- Weapon Section -->
                    <div class="bg-gray-800 rounded-lg shadow-md space-y-2">
                        <div class="bg-gray-800 p-6 rounded-lg shadow-md text-white">
                            <h3 class="text-lg font-semibold mb-6">Weapon</h3>
                            <!-- Main Weapon Type and Weapon Select -->
                            <div class="flex gap-4 mb-6">
                                <div class="flex-[0_0_35%]">
                                    <label class="block text-sm font-medium mb-1">Weapon Type</label>
                                    <select id="mainWeapon"
                                        class="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-white">
                                        <option value="barehand">Barehand</option>
                                        <option value="one handed sword">One Handed Sword</option>
                                        <option value="two handed sword">Two Handed Sword</option>
                                        <option value="bow">Bow</option>
                                        <option value="bowgun">Bowgun</option>
                                        <option value="staff">Staff</option>
                                        <option value="magic device">Magic Device</option>
                                        <option value="knuckles">Knuckles</option>
                                        <option value="halberd">Halberd</option>
                                        <option value="katana">Katana</option>
                                    </select>
                                </div>

                                <div class="flex-[0_0_65%]">
                                    <label for="weaponSelect" class="block text-sm font-medium mb-1">Weapon</label>
                                    <div id="weaponSelect" class="relative w-full">
                                        <button id="weaponSelectButton"
                                            class="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-white text-left flex justify-between items-center">
                                            <span id="weaponSelectLabel">Select Weapon</span>
                                            <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </button>

                                        <ul id="weaponSelectList"
                                            class="SelectListContainer absolute z-50 w-full bg-gray-700 border border-gray-600 rounded-md overflow-y-auto mt-1 hidden">

                                        </ul>
                                        <div id="weaponHoverPanel"
                                            class="absolute bg-gray-900 border border-gray-700 p-2 rounded text-white max-w-xs hidden z-50 pointer-events-none shadow-lg"
                                            style="top: 0; left: 0;"></div>
                                    </div>
                                </div>
                            </div>

                            <!-- ATK and Stability -->
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                                <div class="space-y-4">
                                    <div class="flex gap-4">
                                        <div class="flex-1">
                                            <label class="block text-sm font-medium mb-1">ATK</label>
                                            <input type="number" id="weaponATK"
                                                class="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-white" />
                                        </div>
                                        <div class="flex-[0_0_100px]">
                                            <label for="weaponRefine"
                                                class="block text-sm font-medium mb-1">Refine</label>
                                            <select id="weaponRefine"
                                                class="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-white">
                                            </select>
                                        </div>
                                    </div>

                                    <!-- Stability -->
                                    <div>
                                        <label for="weaponStability"
                                            class="block text-sm font-medium mb-1">Stability</label>
                                        <input type="number" id="weaponStability"
                                            class="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-white" />
                                    </div>
                                    <!-- Crysta Selection 1 -->
                                    <div class="relative min-w-26">
                                        <button id="dropdownButton1"
                                            class="w-full text-left p-2 bg-gray-700 text-white border border-gray-600 rounded-md flex justify-between items-center">
                                            <span id="dropdownSelected1" class="truncate font-semibold">Select
                                                Crysta</span>
                                            <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </button>
                                        <ul id="dropdownMenu1"
                                            class="dropdown-menu absolute w-full min-w-max bg-gray-700 border border-gray-600 rounded-md hidden max-h-80 overflow-auto z-10">

                                        </ul>
                                        <div id="weapon_crysta_1_container"
                                            class="mt-4 hidden bg-gray-700 text-white p-4 rounded-md">
                                        </div>
                                    </div>

                                    <!-- Crysta Selection 2 -->
                                    <div class="relative min-w-26">
                                        <button id="dropdownButton2"
                                            class="w-full text-left p-2 bg-gray-700 text-white border border-gray-600 rounded-md flex justify-between items-center">
                                            <span id="dropdownSelected2" class="truncate font-semibold">Select
                                                Crysta</span>
                                            <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </button>
                                        <ul id="dropdownMenu2"
                                            class="dropdown-menu absolute w-full min-w-max bg-gray-700 border border-gray-600 rounded-md hidden max-h-80 overflow-auto z-10">

                                        </ul>
                                        <div id="weapon_crysta_2_container"
                                            class="mt-4 hidden bg-gray-700 text-white p-4 rounded-md">
                                        </div>
                                    </div>
                                </div>

                                <!-- Stat Info -->
                                <div>
                                    <label class="block text-sm font-medium mb-2">Stat Info</label>
                                    <div id="customWeaponStatsContainer"
                                        class="bg-gray-700 border border-gray-600 rounded-md p-4 min-h-[200px] text-white overflow-auto">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Sub Weapon Section -->
                    <div class="bg-gray-800 rounded-lg shadow-md space-y-2">
                        <div class="bg-gray-800 p-6 rounded-lg shadow-md text-white">
                            <h3 class="text-lg font-semibold mb-6">Sub Weapon</h3>

                            <!-- Sub Weapon Type and Sub Weapon Select -->
                            <div class="flex gap-4 mb-6">
                                <div class="flex-[0_0_35%]">
                                    <label class="block text-sm font-medium mb-1">Sub
                                        Type</label>
                                    <select id="subWeaponType"
                                        class="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-white">
                                        <option value="none">None</option>
                                        <option value="shield">Shield</option>
                                        <option value="magic device">Magic Device</option>
                                        <option value="dagger">Dagger</option>
                                        <option value="one handed sword">One Handed Sword</option>
                                        <option value="arrow">Arrow</option>
                                        <option value="knuckles">Knuckles</option>
                                        <option value="ninjutsu scroll">Ninjutsu Scroll</option>
                                    </select>
                                </div>

                                <div class="flex-[0_0_65%]">
                                    <label for="subWeaponSelect" class="block text-sm font-medium mb-1">Sub
                                        Weapon</label>
                                    <div id="subWeaponSelect" class="relative w-full">
                                        <button id="subWeaponSelectButton"
                                            class="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-white text-left flex justify-between items-center">
                                            <span id="subWeaponSelectLabel">Select Sub Weapon</span>
                                            <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </button>

                                        <ul id="subWeaponSelectList"
                                            class="SelectListContainer absolute z-50 w-full bg-gray-700 border border-gray-600 rounded-md overflow-y-auto mt-1 hidden">

                                        </ul>
                                        <div id="subWeaponHoverPanel"
                                            class="absolute bg-gray-900 border border-gray-700 p-2 rounded text-white max-w-xs hidden z-50 pointer-events-none shadow-lg"
                                            style="top: 0; left: 0;"></div>
                                    </div>
                                </div>
                            </div>

                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                                <div class="space-y-4">
                                    <div class="flex gap-4 mb-6">
                                        <div class="flex-1">
                                            <label for="subWeaponBase" class="block text-sm font-medium mb-1">Base
                                                ATK/DEF</label>
                                            <input type="number" id="subWeaponBase"
                                                class="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-white" />
                                        </div>
                                        <div class="flex-[0_0_100px]">
                                            <label for="subWeaponRefine"
                                                class="block text-sm font-medium mb-1">Refine</label>
                                            <select id="subWeaponRefine"
                                                class="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-white">
                                            </select>
                                        </div>
                                    </div>

                                    <!-- Stability -->
                                    <div>
                                        <label for="subWeaponStability"
                                            class="block text-sm font-medium mb-1">Stability</label>
                                        <input type="number" id="subWeaponStability" min="0" step="1"
                                            class="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-white" />
                                    </div>
                                </div>

                                <!-- Stat Info -->
                                <div>
                                    <label class="block text-sm font-medium mb-2">Stat Info</label>
                                    <div id="customSubWeaponStatsContainer"
                                        class="bg-gray-700 border border-gray-600 rounded-md p-4 min-h-[200px] text-white overflow-auto">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Bottom Row: Armor, Additional, and Special Ring -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <!-- Armor Section -->
                    <div class="bg-gray-800 rounded-lg shadow-md space-y-2">
                        <div class="bg-gray-800 p-6 rounded-lg shadow-md text-white">
                            <h3 class="text-lg font-semibold mb-6">Armor</h3>
                            <!-- Main Armor Type and Armor Select -->
                            <div class="flex gap-4 mb-6">
                                <div class="flex-[0_0_35%]">
                                    <label for="armorType" class="block text-sm font-medium mb-1">Armor Type</label>
                                    <select id="armorType"
                                        class="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-white">
                                        <option value="None">Without Armor</option>
                                        <option value="Normal">Normal Armor</option>
                                        <option value="Light">Light Armor</option>
                                        <option value="Heavy">Heavy Armor</option>
                                    </select>
                                </div>

                                <div class="flex-[0_0_65%]">
                                    <label for="armorSelect" class="block text-sm font-medium mb-1">Armor</label>
                                    <div id="armorSelect" class="relative w-full">
                                        <button id="armorSelectButton"
                                            class="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-white text-left flex justify-between items-center">
                                            <span id="armorSelectLabel">Select Armor</span>
                                            <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </button>

                                        <ul id="armorSelectList"
                                            class="SelectListContainer absolute z-50 w-full bg-gray-700 border border-gray-600 rounded-md overflow-y-auto mt-1 hidden">

                                        </ul>
                                        <div id="armorHoverPanel"
                                            class="absolute bg-gray-900 border border-gray-700 p-2 rounded text-white max-w-xs hidden z-50 pointer-events-none shadow-lg"
                                            style="top: 0; left: 0;"></div>
                                    </div>
                                </div>
                            </div>

                            <!-- ATK, DEF, and Refine -->
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                                <div class="space-y-4">
                                    <div class="flex gap-4">
                                        <div class="flex-1">
                                            <label for="armorDEF" class="block text-sm font-medium mb-1">DEF</label>
                                            <input type="number" id="armorDEF"
                                                class="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-white" />
                                        </div>

                                        <div class="flex-[0_0_100px]">
                                            <label for="armorRefine"
                                                class="block text-sm font-medium mb-1">Refine</label>
                                            <select id="armorRefine"
                                                class="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-white">
                                            </select>
                                        </div>
                                    </div>

                                    <!-- Crysta Selection 1 -->
                                    <div class="relative min-w-26">
                                        <button id="dropdownButton3"
                                            class="w-full text-left p-2 bg-gray-700 text-white border border-gray-600 rounded-md flex justify-between items-center">
                                            <span id="dropdownSelected3" class="truncate font-semibold">Select
                                                Crysta</span>
                                            <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </button>
                                        <ul id="dropdownMenu3"
                                            class="dropdown-menu absolute w-full min-w-max bg-gray-700 border border-gray-600 rounded-md hidden max-h-80 overflow-auto z-10">

                                        </ul>
                                        <div id="armor_crysta_1_container"
                                            class="mt-4 hidden bg-gray-700 text-white p-4 rounded-md">
                                        </div>
                                    </div>

                                    <!-- Crysta Selection 2 -->
                                    <div class="relative min-w-26">
                                        <button id="dropdownButton4"
                                            class="w-full text-left p-2 bg-gray-700 text-white border border-gray-600 rounded-md flex justify-between items-center">
                                            <span id="dropdownSelected4" class="truncate font-semibold">Select
                                                Crysta</span>
                                            <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </button>
                                        <ul id="dropdownMenu4"
                                            class="dropdown-menu absolute w-full min-w-max bg-gray-700 border border-gray-600 rounded-md hidden max-h-80 overflow-auto z-10">

                                        </ul>
                                        <div id="armor_crysta_2_container"
                                            class="mt-4 hidden bg-gray-700 text-white p-4 rounded-md">
                                        </div>
                                    </div>
                                </div>

                                <!-- Stat Info -->
                                <div>
                                    <label class="block text-sm font-medium mb-2">Stat Info</label>
                                    <div id="customArmorStatsContainer"
                                        class="bg-gray-700 border border-gray-600 rounded-md p-4 min-h-[200px] text-white overflow-auto">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <!-- Additional Section -->
                    <div class="bg-gray-800 p-6 rounded-lg shadow-md text-white">
                        <h3 class="text-lg font-semibold mb-6">Additional</h3>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <!-- Left side: Additional Inputs -->
                            <div class="space-y-4">
                                <!-- Additional Select -->
                                <div class="flex-[0_0_65%]">
                                    <label for="additionalSelect"
                                        class="block text-sm font-medium mb-1">Additional</label>
                                    <div id="additionalSelect" class="relative w-full">
                                        <button id="additionalSelectButton"
                                            class="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-white text-left flex justify-between items-center">
                                            <span id="additionalSelectLabel">Select Additional</span>
                                            <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </button>

                                        <ul id="additionalSelectList"
                                            class="SelectListContainer absolute z-50 w-full bg-gray-700 border border-gray-600 rounded-md overflow-y-auto mt-1 hidden">
                                        </ul>
                                        <div id="additionalHoverPanel"
                                            class="absolute bg-gray-900 border border-gray-700 p-2 rounded text-white max-w-xs hidden z-50 pointer-events-none shadow-lg"
                                            style="top: 0; left: 0;"></div>
                                    </div>
                                </div>

                                <div class="flex gap-4 mb-6">
                                    <div class="flex-1">
                                        <label for="additionalDEF" class="block text-sm font-medium mb-1">DEF</label>
                                        <input type="number" id="additionalDEF"
                                            class="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-white" />
                                    </div>
                                    <div class="flex-[0_0_100px]">
                                        <label for="additionalRefine"
                                            class="block text-sm font-medium mb-1">Refine</label>
                                        <select id="additionalRefine"
                                            class="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-white">
                                        </select>
                                    </div>
                                </div>

                                <!-- Crysta Selection 1 -->
                                <div class="relative min-w-26">
                                    <button id="dropdownButton5"
                                        class="w-full text-left p-2 bg-gray-700 text-white border border-gray-600 rounded-md flex justify-between items-center">
                                        <span id="dropdownSelected5" class="truncate font-semibold">Select Crysta</span>
                                        <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </button>
                                    <ul id="dropdownMenu5"
                                        class="dropdown-menu absolute w-full min-w-max bg-gray-700 border border-gray-600 rounded-md hidden max-h-80 overflow-auto z-10">

                                    </ul>
                                    <div id="additional_crysta_1_container"
                                        class="mt-4 hidden bg-gray-700 text-white p-4 rounded-md">
                                    </div>
                                </div>

                                <!-- Crysta Selection 2 -->
                                <div class="relative min-w-26">
                                    <button id="dropdownButton6"
                                        class="w-full text-left p-2 bg-gray-700 text-white border border-gray-600 rounded-md flex justify-between items-center">
                                        <span id="dropdownSelected6" class="truncate font-semibold">Select Crysta</span>
                                        <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </button>
                                    <ul id="dropdownMenu6"
                                        class="dropdown-menu absolute w-full min-w-max bg-gray-700 border border-gray-600 rounded-md hidden max-h-80 overflow-auto z-10">

                                    </ul>
                                    <div id="additional_crysta_2_container"
                                        class="mt-4 hidden bg-gray-700 text-white p-4 rounded-md">
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label class="block text-sm font-medium mb-2">Stat Info</label>
                                <div id="customAdditionalStatsContainer"
                                    class="bg-gray-700 border border-gray-600 rounded-md p-4 min-h-[200px] text-white overflow-auto">

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- Special Ring Section -->
                <div class="bg-gray-800 p-6 rounded-lg shadow-md text-white">
                    <h3 class="text-lg font-semibold mb-6">Special Ring</h3>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="space-y-4">
                            <!-- Special Ring Select -->
                            <div class="flex-[0_0_65%]">
                                <label for="specialSelect" class="block text-sm font-medium mb-1">Special Gear</label>
                                <div id="specialSelect" class="relative w-full">
                                    <button id="specialSelectButton"
                                        class="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-white text-left flex justify-between items-center">
                                        <span id="specialSelectLabel">Select Special Gear</span>
                                        <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </button>

                                    <ul id="specialSelectList"
                                        class="SelectListContainer absolute z-50 w-full bg-gray-700 border border-gray-600 rounded-md overflow-y-auto mt-1 hidden">

                                    </ul>
                                    <div id="specialHoverPanel"
                                        class="absolute bg-gray-900 border border-gray-700 p-2 rounded text-white max-w-xs hidden z-50 pointer-events-none shadow-lg"
                                        style="top: 0; left: 0;"></div>
                                </div>
                            </div>

                            <!-- DEF Input -->
                            <label for="specialDEF" class="block text-sm font-medium mb-1">DEF</label>
                            <input type="number" id="specialDEF"
                                class="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-white" />

                            <!-- Crysta Selection 1 -->
                            <div class="relative min-w-26">
                                <button id="dropdownButton7"
                                    class="w-full text-left p-2 bg-gray-700 text-white border border-gray-600 rounded-md flex justify-between items-center">
                                    <span id="dropdownSelected7" class="truncate font-semibold">Select Crysta</span>
                                    <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </button>
                                <ul id="dropdownMenu7"
                                    class="dropdown-menu absolute w-full min-w-max bg-gray-700 border border-gray-600 rounded-md hidden max-h-80 overflow-auto z-10">

                                </ul>
                                <div id="special_crysta_1_container"
                                    class="mt-4 hidden bg-gray-700 text-white p-4 rounded-md">
                                </div>
                            </div>

                            <!-- Crysta Selection 2 -->
                            <div class="relative min-w-26">
                                <button id="dropdownButton8"
                                    class="w-full text-left p-2 bg-gray-700 text-white border border-gray-600 rounded-md flex justify-between items-center">
                                    <span id="dropdownSelected8" class="truncate font-semibold">Select Crysta</span>
                                    <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </button>
                                <ul id="dropdownMenu8"
                                    class="dropdown-menu absolute w-full min-w-max bg-gray-700 border border-gray-600 rounded-md hidden max-h-80 overflow-auto z-10">

                                </ul>
                                <div id="special_crysta_2_container"
                                    class="mt-4 hidden bg-gray-700 text-white p-4 rounded-md">
                                </div>
                            </div>
                        </div>

                        <div>
                            <label class="block text-sm font-medium mb-2">Stat Info</label>
                            <div id="customSpecialStatsContainer"
                                class="bg-gray-700 border border-gray-600 rounded-md p-4 min-h-[200px] text-white overflow-auto">

                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
        <div class="max-w-[90rem] mx-auto p-4 bg-gray-900 rounded-lg shadow-lg space-y-4">

            <div id="avatarStatsToggle"
                class="cursor-pointer bg-gray-800 hover:bg-gray-700 text-center py-2 rounded-md text-lg font-semibold text-white">
                Avatar Stat
            </div>
            <div id="avatarStatsContent" class="hidden bg-gray-700 p-4 rounded-lg shadow-md mt-2">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <!-- Accessory -->
                    <div>
                        <h3 class="text-md font-semibold text-blue-400 text-center">Accessory</h3>
                        <div class="space-y-2">
                            <div class="flex gap-2">
                                <select id="avatarSelected_7"
                                    class="p-2 bg-gray-800 text-white border border-gray-600 rounded-md w-full">
                                </select>
                                <input id="avatarStat_7" type="number"
                                    class="p-2 bg-gray-800 text-white border border-gray-600 rounded-md w-18" value="0">
                            </div>
                            <div class="flex gap-2">
                                <select id="avatarSelected_8"
                                    class="p-2 bg-gray-800 text-white border border-gray-600 rounded-md w-full">
                                </select>
                                <input id="avatarStat_8" type="number"
                                    class="p-2 bg-gray-800 text-white border border-gray-600 rounded-md w-18" value="0">
                            </div>
                            <div class="flex gap-2">
                                <select id="avatarSelected_9"
                                    class="p-2 bg-gray-800 text-white border border-gray-600 rounded-md w-full">
                                </select>
                                <input id="avatarStat_9" type="number"
                                    class="p-2 bg-gray-800 text-white border border-gray-600 rounded-md w-18" value="0">
                            </div>
                        </div>
                    </div>

                    <!-- Top -->
                    <div>
                        <h3 class="text-md font-semibold text-blue-400 text-center">Top</h3>
                        <div class="space-y-2">
                            <div class="flex gap-2">
                                <select id="avatarSelected_1"
                                    class="p-2 bg-gray-800 text-white border border-gray-600 rounded-md w-full">
                                </select>
                                <input id="avatarStat_1" type="number"
                                    class="p-2 bg-gray-800 text-white border border-gray-600 rounded-md w-18" value="0">
                            </div>
                            <div class="flex gap-2">
                                <select id="avatarSelected_2"
                                    class="p-2 bg-gray-800 text-white border border-gray-600 rounded-md w-full">
                                </select>
                                <input id="avatarStat_2" type="number"
                                    class="p-2 bg-gray-800 text-white border border-gray-600 rounded-md w-18" value="0">
                            </div>
                            <div class="flex gap-2">
                                <select id="avatarSelected_3"
                                    class="p-2 bg-gray-800 text-white border border-gray-600 rounded-md w-full">
                                </select>
                                <input id="avatarStat_3" type="number"
                                    class="p-2 bg-gray-800 text-white border border-gray-600 rounded-md w-18" value="0">
                            </div>
                        </div>
                    </div>

                    <!-- Bottom -->
                    <div>
                        <h3 class="text-md font-semibold text-blue-400 text-center">Bottom</h3>
                        <div class="space-y-2">
                            <div class="flex gap-2">
                                <select id="avatarSelected_4"
                                    class="p-2 bg-gray-800 text-white border border-gray-600 rounded-md w-full">
                                </select>
                                <input id="avatarStat_4" type="number"
                                    class="p-2 bg-gray-800 text-white border border-gray-600 rounded-md w-18" value="0">
                            </div>
                            <div class="flex gap-2">
                                <select id="avatarSelected_5"
                                    class="p-2 bg-gray-800 text-white border border-gray-600 rounded-md w-full">
                                </select>
                                <input id="avatarStat_5" type="number"
                                    class="p-2 bg-gray-800 text-white border border-gray-600 rounded-md w-18" value="0">
                            </div>
                            <div class="flex gap-2">
                                <select id="avatarSelected_6"
                                    class="p-2 bg-gray-800 text-white border border-gray-600 rounded-md w-full">
                                </select>
                                <input id="avatarStat_6" type="number"
                                    class="p-2 bg-gray-800 text-white border border-gray-600 rounded-md w-18" value="0">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="foodAndPotionStatsToggle"
                class="cursor-pointer bg-gray-800 hover:bg-gray-700 text-center py-2 rounded-md text-lg font-semibold text-white">
                Food Buff And Potion
            </div>
            <div id="foodAndPotionStatsContent" class="hidden bg-gray-700 p-4 rounded-lg shadow-md mt-2">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <!-- FOOD BUFF -->
                    <div>
                        <h3 class="text-md font-semibold text-blue-400 text-center">Food Buff</h3>
                        <div class="space-y-2">
                            <div class="flex gap-2">
                                <select id="foodBuffSelected_1"
                                    class="p-2 bg-gray-800 text-white border border-gray-600 rounded-md w-full">
                                </select>
                                <input id="foodBuffStat_1" type="number"
                                    class="p-2 bg-gray-800 text-white border border-gray-600 rounded-md w-18" value="0">
                            </div>
                            <div class="flex gap-2">
                                <select id="foodBuffSelected_2"
                                    class="p-2 bg-gray-800 text-white border border-gray-600 rounded-md w-full">
                                </select>
                                <input id="foodBuffStat_2" type="number"
                                    class="p-2 bg-gray-800 text-white border border-gray-600 rounded-md w-18" value="0">
                            </div>
                            <div class="flex gap-2">
                                <select id="foodBuffSelected_3"
                                    class="p-2 bg-gray-800 text-white border border-gray-600 rounded-md w-full">
                                </select>
                                <input id="foodBuffStat_3" type="number"
                                    class="p-2 bg-gray-800 text-white border border-gray-600 rounded-md w-18" value="0">
                            </div>
                            <div class="flex gap-2">
                                <select id="foodBuffSelected_4"
                                    class="p-2 bg-gray-800 text-white border border-gray-600 rounded-md w-full">
                                </select>
                                <input id="foodBuffStat_4" type="number"
                                    class="p-2 bg-gray-800 text-white border border-gray-600 rounded-md w-18" value="0">
                            </div>
                            <div class="flex gap-2">
                                <select id="foodBuffSelected_5"
                                    class="p-2 bg-gray-800 text-white border border-gray-600 rounded-md w-full">
                                </select>
                                <input id="foodBuffStat_5" type="number"
                                    class="p-2 bg-gray-800 text-white border border-gray-600 rounded-md w-18" value="0">
                            </div>
                        </div>
                    </div>

                    <!-- POTION 1 -->
                    <div>
                        <h3 class="text-md font-semibold text-blue-400 text-center">Potion</h3>
                        <div class="space-y-2">
                            <div class="flex gap-2">
                                <select id="potionSelected_1"
                                    class="p-2 bg-gray-800 text-white border border-gray-600 rounded-md w-full">
                                </select>
                                <input id="potionStat_1" type="number"
                                    class="p-2 bg-gray-800 text-white border border-gray-600 rounded-md w-18" value="0">
                            </div>
                            <div class="flex gap-2">
                                <select id="potionSelected_2"
                                    class="p-2 bg-gray-800 text-white border border-gray-600 rounded-md w-full">
                                </select>
                                <input id="potionStat_2" type="number"
                                    class="p-2 bg-gray-800 text-white border border-gray-600 rounded-md w-18" value="0">
                            </div>
                            <div class="flex gap-2">
                                <select id="potionSelected_3"
                                    class="p-2 bg-gray-800 text-white border border-gray-600 rounded-md w-full">
                                </select>
                                <input id="potionStat_3" type="number"
                                    class="p-2 bg-gray-800 text-white border border-gray-600 rounded-md w-18" value="0">
                            </div>
                            <div class="flex gap-2">
                                <select id="potionSelected_4"
                                    class="p-2 bg-gray-800 text-white border border-gray-600 rounded-md w-full">
                                </select>
                                <input id="potionStat_4" type="number"
                                    class="p-2 bg-gray-800 text-white border border-gray-600 rounded-md w-18" value="0">
                            </div>
                            <div class="flex gap-2">
                                <select id="potionSelected_5"
                                    class="p-2 bg-gray-800 text-white border border-gray-600 rounded-md w-full">
                                </select>
                                <input id="potionStat_5" type="number"
                                    class="p-2 bg-gray-800 text-white border border-gray-600 rounded-md w-18" value="0">
                            </div>
                        </div>
                    </div>

                    <!-- POTION 2 -->
                    <div>
                        <h3 class="text-md font-semibold text-blue-400 text-center">Potion</h3>
                        <div class="space-y-2">
                            <div class="flex gap-2">
                                <select id="potionSelected_6"
                                    class="p-2 bg-gray-800 text-white border border-gray-600 rounded-md w-full">
                                </select>
                                <input id="potionStat_6" type="number"
                                    class="p-2 bg-gray-800 text-white border border-gray-600 rounded-md w-18" value="0">
                            </div>
                            <div class="flex gap-2">
                                <select id="potionSelected_7"
                                    class="p-2 bg-gray-800 text-white border border-gray-600 rounded-md w-full">
                                </select>
                                <input id="potionStat_7" type="number"
                                    class="p-2 bg-gray-800 text-white border border-gray-600 rounded-md w-18" value="0">
                            </div>
                            <div class="flex gap-2">
                                <select id="potionSelected_8"
                                    class="p-2 bg-gray-800 text-white border border-gray-600 rounded-md w-full">
                                </select>
                                <input id="potionStat_8" type="number"
                                    class="p-2 bg-gray-800 text-white border border-gray-600 rounded-md w-18" value="0">
                            </div>
                            <div class="flex gap-2">
                                <select id="potionSelected_9"
                                    class="p-2 bg-gray-800 text-white border border-gray-600 rounded-md w-full">
                                </select>
                                <input id="potionStat_9" type="number"
                                    class="p-2 bg-gray-800 text-white border border-gray-600 rounded-md w-18" value="0">
                            </div>
                            <div class="flex gap-2">
                                <select id="potionSelected_10"
                                    class="p-2 bg-gray-800 text-white border border-gray-600 rounded-md w-full">
                                </select>
                                <input id="potionStat_10" type="number"
                                    class="p-2 bg-gray-800 text-white border border-gray-600 rounded-md w-18" value="0">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Toggle Button -->
            <div id="passiveSkillToggle"
                class="cursor-pointer bg-gray-800 hover:bg-gray-700 text-center py-2 rounded-md text-lg font-semibold text-white">
                Passive Skill(s)
            </div>

            <!-- Skill Content -->
            <div id="passiveSkillContent" class="hidden bg-gray-700 p-4 rounded-lg shadow-md mt-2">
                <div id="passive-skills-container"
                    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-2 bg-gray-800 rounded-lg shadow-lg w-full">

                </div>


            </div>
            <div id="activeSkillToggle"
                class="cursor-pointer bg-gray-800 hover:bg-gray-700 text-center py-2 rounded-md text-lg font-semibold text-white">
                Active Skill(s)
            </div>

            <!-- Skill Content -->
            <div id="activeSkillContent" class="hidden bg-gray-700 p-4 rounded-lg shadow-md mt-2">
                <div id="active-skills-container"
                    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-2 bg-gray-800 rounded-lg shadow-lg w-full">

                </div>


            </div>
        </div>



        <div id="statusContainer"
            class="max-w-[90rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 border border-gray-700 p-4 rounded-lg bg-gray-900 mx-auto text-left text-white">

        </div>
    </main>
    <script src="scripts/stat_calculator.js"></script>

    <?php include 'footer.php'; ?>
    <?php include 'support_box.php'; ?>

</body>

</html>