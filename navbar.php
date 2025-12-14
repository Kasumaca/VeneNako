<?php
$current_page = basename($_SERVER['PHP_SELF']);
?>

<style>
    .nav-link {
        position: relative;
        padding-bottom: 4px;
    }

    /* Multi-Column Dropdown */
    .multi-column-dropdown {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        /* Two equal columns */
        gap: 10px;
        background-color: #1f2937;
        border-radius: 6px;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
        border: 1px solid #374151;
        padding: 8px;
        width: auto;
        /* Remove fixed width */
        max-width: 750px;
        /* Limit max width to avoid stretching too much */
    }

    /* Dropdown column */
    .dropdown-column {
        display: flex;
        flex-direction: column;
    }

    /* Styling for each dropdown item */
    .multi-column-dropdown a {
        display: block;
        padding: 12px;
        margin-bottom: 8px;
        background-color: #1f2937;
        border-radius: 8px;
        text-align: left;
        cursor: pointer;
        transition: background-color 0.3s ease, transform 0.3s ease;
        min-width: 180px;
    }

    /* Hover effect for buttons */
    .multi-column-dropdown a:hover {
        background-color: #4b5563;
        transform: translateY(-2px);
    }

    /* Title Styling */
    .multi-column-dropdown h3 {
        margin: 0;
        font-size: 14px;
    }

    /* Description Styling */
    .multi-column-dropdown p {
        color: #d1d5db;
        font-size: 0.875rem;
        line-height: 1rem;
    }

    /* To make dropdown fully visible when hovered */
    .group:hover .multi-column-dropdown {
        visibility: visible;
        opacity: 1;
    }

    /* Ensuring the dropdown content fits properly */
    .group:hover .multi-column-dropdown {
        position: absolute;
        top: 100%;
        left: 0;
        visibility: visible;
        opacity: 1;
        z-index: 10;
    }



    .custom-font {
        font-family: wf, sans-serif;
    }

    #tool-toggle,
    #database-toggle {
        background-color: #111827;
        /* Same background */
        color: white;
    }

    .nav-container {
        position: relative;
        display: flex;
        align-items: center;
    }

    #tool-toggle:hover,
    #tool-toggle:focus,
    #database-toggle:hover,
    #database-toggle:focus {
        background-color: #1f2937 !important;
        /* Ensure hover matches */
    }

    /* Both Tools and Databases buttons have the same base styling */
    #tool-toggle,
    #database-toggle {
        background-color: #111827;
        /* Same background */
        color: white;
    }

    #tool-toggle:hover,
    #database-toggle:hover {
        background-color: #1f2937;
        /* Same hover effect */
    }

    #tool-toggle.active,
    #database-toggle.active {
        background-color: #1f2937;
        /* Same active effect */
    }

    /* Style for the Tool Submenu */
    #tool-submenu,
    #database-submenu {
        position: absolute;
        /* float the submenu */
        left: 100%;
        top: 0;
        margin-left: 4px;
        background-color: #1f2937;
        width: 200px;
        /* adjust as needed */
        border-radius: 6px;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
        border: 1px solid #374151;
        z-index: 1001;
        max-height: 400px;
        overflow-y: auto;
    }


    .nav-link custom-font hover:text-sky-400 transition-colors duration-200 cursor-pointer.active::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -2px;
        width: 100%;
        height: 3px;
        background-color: red;
        border-radius: 2px;
        transition: all 0.3s ease-in-out;
    }

    .dropdown-content {
        display: none;
        position: absolute;
        left: 0;
        top: 100%;
        background-color: #111827;
        border: 1px solid #1f2937;
        border-radius: 8px;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
        width: 200px;
        z-index: 1000;
    }

    #dropdown-menu {
        position: fixed;
        will-change: transform, opacity;
        top: 60px;
        left: 3px;
        width: 200px;
        background-color: #111827;
        color: white;
        border: 1px solid #1f2937;
        border-radius: 8px;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
        z-index: 999;
    }

    .dropdown-content a {
        display: block;
        padding: 10px;
        color: white;
        text-decoration: none;
    }

    .dropdown-content a:hover {
        background-color: #1f2937;
    }

    .nav-indicator {
        position: absolute;
        bottom: -2px;
        height: 3px;
        background-color: red;
        border-radius: 2px;
        transition: transform 0.3s ease-in-out, width 0.3s ease-in-out;
    }


    .nav-link.active {
        color: red;
    }


    .custom-dropdown-content {
        display: none;
        position: absolute;
        left: 0;
        top: 100%;
        background-color: #1f2937;
        padding: 16px;
        border-radius: 8px;
        width: 250px;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
        z-index: 1000;
        color: #e5e7eb;
    }

    .dropdown-item {
        display: block;
        width: 100%;
        padding: 12px 16px;
        margin-bottom: 8px;
        background-color: #374151;
        border: none;
        border-radius: 8px;
        text-align: left;
        cursor: pointer;
        transition: background-color 0.3s ease, transform 0.3s ease;
    }

    .dropdown-item:hover {
        background-color: #4b5563;
        transform: translateY(-2px);
    }

    .dropdown-item h3 {
        margin: 0;
    }

    .dropdown-submenu {
        display: none;
        margin-left: 20px;
    }

    .dropdown-submenu.show {
        display: block;
    }

    .dropdown-item p {
        color: #d1d5db;
        font-size: 0.875rem;
        line-height: 0.9rem;
    }

    .relative:hover .custom-dropdown-content {
        display: block;
    }

    .category-menu {
        display: none;
        position: absolute;
        left: 0;
        top: 100%;
        background-color: #1f2937;
        padding: 16px;
        border-radius: 8px;
        width: 600px;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
        z-index: 1000;
        color: #e5e7eb;
    }

    .relative:hover .category-menu {
        display: block;
    }

    .category-item {
        background-color: #374151;
        padding: 12px 16px;
        border-radius: 8px;
        text-align: left;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .category-item:hover {
        background-color: #4b5563;
    }

    .right-panel {
        flex-grow: 1;
        background-color: #1f2937;
        display: flex;
        flex-direction: column;
    }

    #crysta-btn:hover+#crysta-options {
        display: block;
    }

    #equipments-btn:hover+#equipments-options {
        display: block;
    }

    .dropdown-item {
        display: block;
        width: 100%;
        padding: 12px 16px;
        margin-bottom: 8px;
        background-color: #374151;
        border: none;
        border-radius: 8px;
        text-align: left;
        cursor: pointer;
        transition: background-color 0.3s ease, transform 0.3s ease;
    }

    .dropdown-item:hover {
        background-color: #4b5563;
        transform: translateY(-2px);
    }

    .dropdown-item h3 {
        margin: 0;
    }
</style>

<nav class="bg-gray-900 p-2 fixed top-0 left-0 w-full z-50">
    <div class="max-w-screen-full mx-auto flex items-center justify-between relative">

        <!-- Left Section (Logo) -->
        <div class="flex items-center space-x-3 ml-3 min-w-max">
            <button id="menu-btn" class="text-white text-2xl focus:outline-none lg:hidden">☰</button>
            <a href="/"
                class="text-white text-base lg:text-lg font-semibold no-underline focus:outline-none hidden lg:block">
                Vene<span class="text-gray-300">Nako</span> <span class="text-gray-500">WIKI</span>
            </a>
        </div>

        <!-- Center Section (Nav Menu) -->
        <div class="hidden lg:flex flex-1 justify-center relative">
            <div class="nav-container ">
                <div class="flex space-x-4 bg-white px-5 py-2 rounded-lg shadow-md font-semibold relative">
                    <a href="/" class="nav-link text-gray-800 hover:text-sky-400 transition duration-200">Home</a>
                    <a href="items.php"
                        class="nav-link text-gray-800 hover:text-sky-400 transition duration-200">Items</a>
                    <a href="maps.php"
                        class="nav-link text-gray-800 hover:text-sky-400 transition duration-200">Maps</a>
                    <div class="relative group">
                        <a href="enemies.php"
                            class="nav-link text-gray-800 hover:text-sky-400 transition duration-200">Enemies▾</a>
                        <div
                            class="custom-dropdown-content invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute z-50 bg-gray-800 border border-gray-600 rounded-lg mt-1 shadow-md w-56">
                            <a href="enemies.php?type=mob" class="block px-4 py-2 hover:bg-gray-700">
                                <h3 class="text-sm font-semibold text-white">Mobs</h3>
                                <p class="text-gray-300 text-xs">Normal Monster Info</p>
                            </a>
                            <a href="enemies.php?type=miniboss" class="block px-4 py-2 hover:bg-gray-700">
                                <h3 class="text-sm font-semibold text-white">Mini Bosses</h3>
                                <p class="text-gray-300 text-xs">Mini Bosses Info</p>
                            </a>
                            <a href="enemies.php?type=boss" class="block px-4 py-2 hover:bg-gray-700">
                                <h3 class="text-sm font-semibold text-white">Bosses</h3>
                                <p class="text-gray-300 text-xs">Bosses Info</p>
                            </a>
                        </div>
                    </div>
                    <a href="skills.php"
                        class="nav-link text-gray-800 hover:text-sky-400 transition duration-200">Skill</a>

                    <!-- Tools Dropdown -->
                    <div class="relative group">
                        <a href="." class="nav-link text-gray-800 hover:text-sky-400 transition duration-200">Tools▾</a>
                        <div
                            class="multi-column-dropdown invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute z-50 bg-gray-800 border border-gray-600 rounded-lg mt-1 shadow-md w-auto max-w-full">
                            <!-- First Column -->
                            <div class="dropdown-column">
                                <a href="stat_calculator.php" class="block px-4 py-2 hover:bg-gray-700 rounded-xl">
                                    <h3 class="font-semibold text-amber-400">Stat Calculator</h3>
                                    <p class="text-gray-300 text-xs">Calculate your stats</p>
                                </a>
                                <a href="xp_calculator.php" class="block px-4 py-2 hover:bg-gray-700 rounded-xl">
                                    <h3 class="font-semibold text-purple-400">XP Calculator</h3>
                                    <p class="text-gray-300 text-xs">Calculate XP Gain From Quest</p>
                                </a>
                                <a href="trait_transfer_cost_calculator.php"
                                    class="block px-4 py-2 hover:bg-gray-700 rounded-xl">
                                    <h3 class="font-semibold text-pink-400">Trait Cost Calculator</h3>
                                    <p class="text-gray-300 text-xs">Calculate Trait Transfer Cost</p>
                                </a>
                            </div>
                            <div class="dropdown-column">
                                <a href="skill_simulator.php" class="block px-4 py-2 hover:bg-gray-700 rounded-xl">
                                    <h3 class="font-semibold text-blue-400">Skill Simulator</h3>
                                    <p class="text-gray-300 text-xs">Simulate your skills</p>
                                </a>
                                <a href="combo_simulator.php" class="block px-4 py-2 hover:bg-gray-700 rounded-xl">
                                    <h3 class="font-semibold text-red-400">Combo Simulator</h3>
                                    <p class="text-gray-300 text-xs">Simulate your combos</p>
                                </a>
                            </div>
                            <div class="dropdown-column">
                                <a href="browse_skill.php" class="block px-4 py-2 hover:bg-gray-700 rounded-xl">
                                    <h3 class="font-semibold text-blue-400">Browse Skill Build</h3>
                                    <p class="text-gray-300 text-xs">Search Others Skill Build</p>
                                </a>
                                <a href="browse_combo.php" class="block px-4 py-2 hover:bg-gray-700 rounded-xl">
                                    <h3 class="font-semibold text-red-400">Browse Combo Build</h3>
                                    <p class="text-gray-300 text-xs">Search Others Combo Build</p>
                                </a>
                                <a href="price_statistic.php" class="block px-4 py-2 hover:bg-gray-700 rounded-xl">
                                    <h3 class="font-semibold text-red-400">Price Statistic</h3>
                                    <p class="text-gray-300 text-xs">Statistic About Premium Items Price</p>
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- Database Dropdown -->
                    <div class="relative group">
                        <span
                            class="nav-link text-gray-800 hover:text-sky-400 transition duration-200 cursor-pointer select-none">Database▾</span>
                        <div
                            class="custom-dropdown-content invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute z-50 bg-gray-800 border border-gray-600 rounded-lg mt-1 shadow-md w-56">
                            <a href="foodbuff.php" class="block px-4 py-2 hover:bg-gray-700 rounded-lg">
                                <h3 class="font-semibold text-yellow-400">Food Buff</h3>
                                <p class="text-gray-300 text-xs">Info About Land Food</p>
                            </a>
                            <a href="scrolls.php" class="block px-4 py-2 hover:bg-gray-700 rounded-lg">
                                <h3 class="font-semibold text-purple-400">Ninjutsu Scroll</h3>
                                <p class="text-gray-300 text-xs">Info About Ninjutsu Scroll Combinations, Skills, Types.
                                </p>
                            </a>
                            <a href="traits.php" class="block px-4 py-2 hover:bg-gray-700 rounded-lg">
                                <h3 class="font-semibold text-red-400">Traits</h3>
                                <p class="text-gray-300 text-xs">Info About Traits, Effects.
                                </p>
                            </a>
                            <a href="regislets.php" class="block px-4 py-2 hover:bg-gray-700 rounded-lg">
                                <h3 class="font-semibold text-blue-400">Regislet</h3>
                                <p class="text-gray-300 text-xs">Info About Regislet Effects, Drop.
                                </p>
                            </a>
                        </div>
                    </div>

                    <a href="guide.php"
                        class="nav-link text-gray-800 hover:text-sky-400 transition duration-200">Guide</a>
                    <a href="quiz.php"
                        class="nav-link text-gray-800 hover:text-sky-400 transition duration-200">Quiz</a>
                    <a href="about.php"
                        class="nav-link text-gray-800 hover:text-sky-400 transition duration-200 pr-3">About</a>
                    <!-- The indicator bar, moved to the bottom of nav-container -->
                </div>
                <div class="nav-indicator bg-red-500 h-1 w-0 absolute bottom-0 left-0 transition-all duration-300">
                </div>
            </div>
        </div>


        <!-- Right Section (Search + Avatar) -->
        <div class="flex items-center space-x-4 min-w-max mr-3">
            <!-- Search -->
            <div class="relative max-w-[250px]">
                <input id="searchInput" type="text" placeholder="Search..."
                    class="px-3 py-1 rounded-lg bg-white text-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full" />
                <button class="text-gray-400 hover:text-white absolute right-3 top-2">🔍</button>

                <div id="searchSuggestions"
                    class="absolute top-full right-0 mt-1 bg-gray-700 border border-gray-500 shadow-lg rounded-lg flex-col text-sm hidden z-50 w-[250px]"
                    style="transform-origin: right top;">
                    <a href="#" id="searchItems"
                        class="block px-4 py-2 text-gray-200 hover:bg-gray-600 hover:text-white">Search in Items</a>
                    <a href="#" id="searchEnemies"
                        class="block px-4 py-2 text-gray-200 hover:bg-gray-600 hover:text-white">Search in Enemies</a>
                    <div class="border-t border-gray-600 my-1"></div>
                    <a href="advanced_search.php"
                        class="block px-4 py-2 text-blue-400 text-center hover:text-blue-300 border-t border-gray-500">Advanced
                        Search</a>
                </div>
            </div>

            <!-- Avatar -->
            <button id="avatarBtn"
                class="min-w-9 min-h-9 max-w-9 rounded-full overflow-hidden border border-gray-400 focus:outline-none">
                <img loading="lazy" id="avatarImage" src="./Images/avatar_icon.png" alt="avatar"
                    class="object-cover min-w-9 min-h-9" />
            </button>

            <!-- Avatar Dropdown -->
            <div id="avatarDropdown"
                class="absolute right-2 top-12 mt-1 w-52 bg-gray-900 text-white rounded-lg border border-gray-700 shadow-lg hidden z-50 font-semibold">
                <!-- Logged Out -->
                <div id="menuLoggedOut" class="flex flex-col">
                    <button id="openLoginModal" class="text-left px-4 py-2 hover:bg-gray-700">Login</button>
                    <button id="openRegisterModal" class="text-left px-4 py-2 hover:bg-gray-700">Register</button>
                    <a href="privacy.php" class="text-left px-4 py-2 hover:bg-gray-700">Privacy Policy</a>
                </div>

                <!-- Logged In -->
                <div id="menuLoggedIn" class="flex flex-col hidden">
                    <a href="profile.php" id="profileLink" class="text-left px-4 py-2 hover:bg-gray-700">User</a>
                    <a href="privacy.php" class="text-left px-4 py-2 hover:bg-gray-700">Privacy Policy</a>
                    <button id="logoutBtn" class="text-left px-4 py-2 hover:bg-gray-700">Logout</button>
                </div>
            </div>
        </div>
    </div>
</nav>



<!-- Modal -->
<div id="authModal" class="fixed inset-0 bg-black/60 flex items-center justify-center z-60 hidden">
    <div id="authModalContent"
        class="bg-gray-800 text-white p-6 rounded-lg w-96 relative shadow-2xl transform scale-95 opacity-0 transition-all duration-200 ease-out z-50">

        <button id="closeAuthModal"
            class="absolute top-2 right-2 text-gray-300 hover:text-white text-xl font-bold">&times;</button>

        <!-- Login Form -->
        <div id="loginSection">
            <h2 class="text-3xl font-semibold mb-4 text-blue-400">Login</h2>
            <form id="loginForm" method="POST">
                <label class="block mb-2 text-blue-400 font-semibold">Username</label>
                <input type="text" name="username" id="loginUsername"
                    class="w-full bg-gray-700 border border-gray-600 text-white px-3 py-2 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter username" required>

                <label class="block mb-2 text-blue-400 font-semibold">Password</label>
                <input type="password" name="password" id="loginPassword"
                    class="w-full bg-gray-700 border border-gray-600 text-white px-3 py-2 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter password" required>
                <p class="text-sm text-blue-300 text-right mb-4">
                    <button type="button" id="showForgotPassword" class="text-blue-400 hover:underline">Forgot
                        Password?</button>
                </p>


                <button type="submit"
                    class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Login</button>

                <p class="mt-4 text-sm text-blue-300">Don't have an account?
                    <button type="button" id="showRegister" class="text-blue-400 hover:underline">Register</button>
                </p>
            </form>
        </div>

        <!-- Register Form -->
        <div id="registerSection" class="hidden">
            <h2 class="text-3xl font-semibold mb-4 text-blue-400">Register</h2>
            <form id="registerForm" method="POST">
                <label class="block mb-2 text-blue-400 font-semibold">Username</label>
                <input type="text" name="registerUsername" id="registerUsername"
                    class="w-full bg-gray-700 border border-gray-600 text-white px-3 py-2 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter username" required />

                <label class="block mb-2 text-blue-400 font-semibold">Email</label>
                <input type="email" name="registerEmail" id="registerEmail"
                    class="w-full bg-gray-700 border border-gray-600 text-white px-3 py-2 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter email" required />

                <label class="block mb-2 text-blue-400 font-semibold">Password</label>
                <input type="password" minlength="8" name="registerPassword" id="registerPassword"
                    class="w-full bg-gray-700 border border-gray-600 text-white px-3 py-2 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter password" required />

                <label class="block mb-2 text-blue-400 font-semibold">Confirm Password</label>
                <input type="password" minlength="8" name="confirmPassword" id="confirmPassword"
                    class="w-full bg-gray-700 border border-gray-600 text-white px-3 py-2 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Confirm password" required />

                <button type="submit"
                    class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Register</button>
            </form>
        </div>
    </div>
</div>
<!-- Forgot Password Modal -->
<div id="forgotPasswordModal" class="fixed inset-0 bg-black/60 flex items-center justify-center z-60 hidden">
    <div class="bg-gray-800 text-white p-6 rounded-lg w-96 relative shadow-2xl">
        <button id="closeForgotPasswordModal"
            class="absolute top-2 right-2 text-gray-300 hover:text-white text-xl font-bold">&times;</button>

        <h2 class="text-2xl font-semibold mb-4 text-blue-400">Reset Password</h2>

        <form id="forgotPasswordForm" method="POST">
            <label class="block mb-2 text-blue-400 font-semibold">Username</label>
            <input type="text" name="fpUsername" id="fpUsername"
                class="w-full bg-gray-700 border border-gray-600 text-white px-3 py-2 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your username" required>

            <button type="submit"
                class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Next</button>
        </form>
    </div>
</div>

<div id="dropdown-menu"
    class="absolute top-16 left-3 bg-gray-900 text-white w-48 rounded-lg shadow-xl z-50 border border-gray-700 opacity-0 scale-y-95 origin-top transition-all duration-150 hidden lg:hidden">
    <!-- Existing links -->
    <a href="/" class="block px-4 py-2 hover:bg-gray-800">Home</a>
    <a href="items.php" class="block px-4 py-2 hover:bg-gray-800">Items</a>
    <a href="maps.php" class="block px-4 py-2 hover:bg-gray-800">Maps</a>
    <a href="enemies.php" class="block px-4 py-2 hover:bg-gray-800">Enemies</a>
    <a href="skills.php" class="block px-4 py-2 hover:bg-gray-800">Skill</a>

    <!-- Tool Button -->
    <div class="relative">
        <button id="tool-toggle"
            class="block w-full text-left px-4 py-2 bg-gray-800 hover:bg-gray-700 focus:outline-none items-center">
            Tools <span class="mr-2">▼</span>
        </button>
        <div id="tool-submenu" class="hidden bg-gray-800">
            <a href="stat_calculator.php" class="block px-4 py-2 hover:bg-gray-700">Stat Calculator</a>
            <a href="xp_calculator.php" class="block px-4 py-2 hover:bg-gray-700">XP Calculator</a>
            <a href="trait_transfer_cost_calculator.php" class="block px-4 py-2 hover:bg-gray-700">Trail Cost
                Calculator</a>
            <a href="skill_simulator.php" class="block px-4 py-2 hover:bg-gray-700">Skill Simulator</a>
            <a href="statting_simulator.php" class="block px-4 py-2 hover:bg-gray-700">Statting Simulator</a>
            <a href="combo_simulator.php" class="block px-4 py-2 hover:bg-gray-700">Combo Simulator</a>
            <a href="browse_skill.php" class="block px-4 py-2 hover:bg-gray-700">Skill Build Browse</a>
            <a href="browse_combo.php" class="block px-4 py-2 hover:bg-gray-700">Combo Build Browse</a>
            <a href="price_statistic.php" class="block px-4 py-2 hover:bg-gray-700">Price Statistic</a>
        </div>
    </div>

    <!-- Databases Button -->
    <div class="relative">
        <button id="database-toggle"
            class="block w-full text-left px-4 py-2 bg-gray-800 hover:bg-gray-700 focus:outline-none items-center">
            Databases <span class="mr-2">▼</span>
        </button>
        <div id="database-submenu" class="hidden bg-gray-800">
            <a href="foodbuff.php" class="block px-4 py-2 hover:bg-gray-700">Land Food</a>
            <a href="scrolls.php" class="block px-4 py-2 hover:bg-gray-700">Ninjutsu Scroll Combination</a>
            <a href="traits.php" class="block px-4 py-2 hover:bg-gray-700">Traits Database</a>
            <a href="regislets.php" class="block px-4 py-2 hover:bg-gray-700">Regislet Database</a>
        </div>
    </div>

    <a href="guide.php" class="block px-4 py-2 hover:bg-gray-800">Guide</a>
    <a href="quiz.php" class="block px-4 py-2 hover:bg-gray-800">Quiz</a>
    <a href="about.php" class="block px-4 py-2 hover:bg-gray-800">About</a>
</div>



<!-- Toast Notification -->
<div id="toast"
    class="fixed top-0 left-1/2 transform -translate-x-1/2 -translate-y-full px-4 py-2 mt-4 rounded-md bg-green-600 text-white shadow-lg transition-all duration-500 opacity-0 z-50 pointer-events-none">
    <span id="toastMessage">Success!</span>
</div>
<script src="scripts/navbar.js?v=1.0.6" defer></script>
<script src="scripts/search.js" defer></script>