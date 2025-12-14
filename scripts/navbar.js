document.addEventListener("DOMContentLoaded", function () {
  let menuBtn = document.getElementById("menu-btn"); // Sidebar toggle button
  let menu = document.getElementById("dropdown-menu"); // Sidebar menu
  let toolToggle = document.getElementById("tool-toggle"); // "Tool" submenu toggle
  let toolSubmenu = document.getElementById("tool-submenu"); // "Tool" submenu
  let databaseToggle = document.getElementById("database-toggle"); // "Databases" submenu toggle
  let databaseSubmenu = document.getElementById("database-submenu"); // "Databases" submenu
  let navLinks = document.querySelectorAll(".nav-link"); // Navbar links
  let sidebarLinks = document.querySelectorAll("#dropdown-menu a"); // Sidebar links
  let toolLinks = document.querySelectorAll("#tool-submenu a"); // Tool submenu links
  let databaseLinks = document.querySelectorAll("#database-submenu a"); // Database submenu links
  let navIndicator = document.querySelector(".nav-indicator"); // Existing red bar

  // Toggle the sidebar
  function toggleSidebar() {
    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
      menu.style.display = "block";

      requestAnimationFrame(() => {
        menu.classList.add("opacity-100", "scale-y-100");
        menu.classList.remove("opacity-0", "scale-y-95");
      });
    } else {
      closeSidebar();
    }
  }

  // Close the sidebar
  function closeSidebar() {
    menu.classList.add("opacity-0", "scale-y-95");
    menu.classList.remove("opacity-100", "scale-y-100");

    setTimeout(() => {
      menu.classList.add("hidden");
      menu.style.display = "none";
    }, 150);
  }

  // Toggle the Tool submenu
  function toggleSubmenu() {
    // Close the database submenu if open
    if (!databaseSubmenu.classList.contains("hidden")) {
      databaseSubmenu.classList.add("hidden");
    }
    toolSubmenu.classList.toggle("hidden");
  }

  // Toggle the Databases submenu
  function toggleDatabaseSubmenu() {
    // Close the tool submenu if open
    if (!toolSubmenu.classList.contains("hidden")) {
      toolSubmenu.classList.add("hidden");
    }
    databaseSubmenu.classList.toggle("hidden");
  }

  // Close the Tool submenu
  function closeSubmenu() {
    toolSubmenu.classList.add("hidden");
  }

  // Close the Databases submenu
  function closeDatabaseSubmenu() {
    databaseSubmenu.classList.add("hidden");
  }

  // Event listener for opening/closing sidebar
  menuBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    toggleSidebar();
  });

  // Close the sidebar when a link is clicked
  sidebarLinks.forEach((link) => {
    link.addEventListener("click", function () {
      closeSidebar();
    });
  });

  // Close the sidebar when clicked outside
  document.addEventListener("click", function (event) {
    if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
      closeSidebar();
    }
  });

  // Event listener for opening/closing Tool submenu
  toolToggle.addEventListener("click", function (event) {
    event.stopPropagation();
    toggleSubmenu();
  });

  // Event listener for opening/closing Databases submenu
  databaseToggle.addEventListener("click", function (event) {
    event.stopPropagation();
    toggleDatabaseSubmenu();
  });

  // Close the Tool submenu when a link is clicked
  toolLinks.forEach((link) => {
    link.addEventListener("click", function () {
      closeSubmenu();
    });
  });

  // Close the Databases submenu when a link is clicked
  databaseLinks.forEach((link) => {
    link.addEventListener("click", function () {
      closeDatabaseSubmenu();
    });
  });

  // Close the Tool submenu when clicked outside
  document.addEventListener("click", function (event) {
    if (
      !toolSubmenu.contains(event.target) &&
      !toolToggle.contains(event.target)
    ) {
      closeSubmenu();
    }
  });

  // Close the Databases submenu when clicked outside
  document.addEventListener("click", function (event) {
    if (
      !databaseSubmenu.contains(event.target) &&
      !databaseToggle.contains(event.target)
    ) {
      closeDatabaseSubmenu();
    }
  });
  function updateActiveNav() {
    let currentPage = window.location.pathname.split("/").pop(); // Get the current page

    navLinks.forEach((link) => {
      // Check if the link href matches the current page
      if (link.getAttribute("href") === currentPage) {
        link.classList.add("active"); // Add active class to the current link
      } else {
        link.classList.remove("active"); // Remove active class from other links
      }
    });

    // After updating the active class, move the nav indicator to the active link
    moveNavIndicator();
  }

  function moveNavIndicator() {
    let activeLink = document.querySelector(".nav-link.active");
    if (activeLink && navIndicator) {
      let rect = activeLink.getBoundingClientRect(); // Get active link's position
      let parentRect = activeLink.parentElement.getBoundingClientRect();
      navIndicator.style.width = `${rect.width}px`; // Adjust width of indicator
      navIndicator.style.transform = `translateX(${
        rect.left - parentRect.left
      }px)`; // Move the indicator under active link
    }
  }

  // Update indicator when clicking on nav links
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((l) => l.classList.remove("active"));
      this.classList.add("active"); // Mark the clicked link as active
      moveNavIndicator(); // Move the indicator under the active link
    });
  });
  // Initialize the nav indicator on page load
  moveNavIndicator();

  // Run on page load
  updateActiveNav();

  window.addEventListener("resize", moveNavIndicator);

  const avatarBtn = document.getElementById("avatarBtn");
  const avatarDropdown = document.getElementById("avatarDropdown");
  const logoutBtn = document.getElementById("logoutBtn");
  const menuLoggedOut = document.getElementById("menuLoggedOut");
  const menuLoggedIn = document.getElementById("menuLoggedIn");
  const avatarImage = document.getElementById("avatarImage");

  const authModal = document.getElementById("authModal");
  const authModalContent = document.getElementById("authModalContent");

  const openLoginBtn = document.getElementById("openLoginModal");
  const openRegisterBtn = document.getElementById("openRegisterModal");
  const closeAuthModal = document.getElementById("closeAuthModal");

  const loginSection = document.getElementById("loginSection");
  const registerSection = document.getElementById("registerSection");

  const forgotPasswordModal = document.getElementById("forgotPasswordModal");

  function resetForgotPasswordModal() {
    const modalContent = forgotPasswordModal.querySelector("div");
    if (!modalContent) return;

    modalContent.innerHTML = `
    <button id="closeForgotPasswordModal" class="absolute top-2 right-2 text-gray-300 hover:text-white text-xl font-bold">&times;</button>

    <h2 class="text-2xl font-semibold mb-4 text-blue-400">Reset Password</h2>

    <form id="forgotPasswordForm">
        <label class="block mb-2 text-blue-400 font-semibold">Username</label>
        <input type="text" name="fpUsername" id="fpUsername"
            class="w-full bg-gray-700 border border-gray-600 text-white px-3 py-2 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your username" required>

        <button type="submit"
            class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Next</button>
    </form>
  `;

    // Close modal binding
    document
      .getElementById("closeForgotPasswordModal")
      ?.addEventListener("click", hideForgotPasswordModal);

    // Rebind form handler
    document
      .getElementById("forgotPasswordForm")
      ?.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("fpUsername").value;

        fetch("get_function/fetch_masked_email.php", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: `username=${encodeURIComponent(username)}`,
        })
          .then((res) => res.text())
          .then((html) => {
            forgotPasswordModal.querySelector("div").innerHTML = html;
            bindVerifyEmailForm(); // 🔁 Rebind after replacing innerHTML
          })
          .catch(() => showToast("Error fetching reset info.", "error"));
      });
  }

  function bindVerifyEmailForm() {
    document
      .getElementById("verifyEmailForm")
      ?.addEventListener("submit", function (e) {
        e.preventDefault();
        const formData = new FormData(this);

        fetch("get_function/send_reset_email.php", {
          method: "POST",
          body: formData,
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              forgotPasswordModal.querySelector(
                "div"
              ).innerHTML = `<p class="text-green-400 font-semibold">✅ ${data.message}</p>`;
            } else {
              showToast(data.message || "Email verification failed.", "error");
            }
          })
          .catch(() => showToast("Something went wrong.", "error"));
      });
  }

  function showAuthModal(mode = "login") {
    authModal.classList.remove("hidden");
    if (mode === "login") {
      loginSection.classList.remove("hidden");
      registerSection.classList.add("hidden");
    } else {
      loginSection.classList.add("hidden");
      registerSection.classList.remove("hidden");
    }

    setTimeout(() => {
      authModalContent.classList.remove("opacity-0", "scale-95");
      authModalContent.classList.add("opacity-100", "scale-100");
    }, 10);
  }

  function hideAuthModal() {
    authModal.classList.add("hidden");
    authModalContent.classList.remove("opacity-100", "scale-100");
    authModalContent.classList.add("opacity-0", "scale-95");
  }

  function showForgotPasswordModal() {
    hideAuthModal();
    resetForgotPasswordModal();
    forgotPasswordModal.classList.remove("hidden");

    const modalContent = forgotPasswordModal.querySelector("div");
    setTimeout(() => {
      modalContent.classList.remove("opacity-0", "scale-95");
      modalContent.classList.add("opacity-100", "scale-100");
    }, 10);
  }

  function hideForgotPasswordModal() {
    const modalContent = forgotPasswordModal.querySelector("div");
    modalContent.classList.remove("opacity-100", "scale-100");
    modalContent.classList.add("opacity-0", "scale-95");

    setTimeout(() => {
      forgotPasswordModal.classList.add("hidden");
      resetForgotPasswordModal(); // reset on close
    }, 200);
  }

  function showToast(message, type = "success", duration = 3000) {
    const toast = document.getElementById("toast");
    const toastMessage = document.getElementById("toastMessage");

    toast.classList.remove("bg-green-600", "bg-red-600");
    toast.classList.add(type === "error" ? "bg-red-600" : "bg-green-600");

    toastMessage.textContent = message;
    toast.classList.remove("opacity-0", "-translate-y-full");
    toast.classList.add("opacity-100", "translate-y-0");

    setTimeout(() => {
      toast.classList.remove("opacity-100", "translate-y-0");
      toast.classList.add("opacity-0", "-translate-y-full");
    }, duration);
  }

  function syncFavoritesFromServer() {
    fetch("./get_data/get_favorites.php")
      .then((res) => res.json())
      .then((favorites) => {
        if (Array.isArray(favorites)) {
          localStorage.setItem("favorites", JSON.stringify(favorites));
          //console.log("Synced favorites from server:", favorites);
        } else {
          //console.warn("Failed to load favorites:", favorites);
        }
      })
      .catch((err) => {
        //console.error("Error syncing favorites:", err);
      });
  }

  function checkLoginStatus() {
    fetch("session_status.php")
      .then((res) => res.json())
      .then((data) => {
        if (data.loggedIn) {
          const username = data.username || "User";
          menuLoggedOut.classList.add("hidden");
          menuLoggedIn.classList.remove("hidden");

          const profileLink = document.getElementById("profileLink");
          if (profileLink) profileLink.textContent = username;

          avatarImage.src = "Images/avatar_icon.png";
        } else {
          menuLoggedOut.classList.remove("hidden");
          menuLoggedIn.classList.add("hidden");
          avatarImage.src = "Images/avatar_icon.png";
        }
      });
  }

  // 🔁 Initial bindings
  avatarBtn?.addEventListener("click", () => {
    avatarDropdown.classList.toggle("hidden");
  });

  document.addEventListener("click", (e) => {
    if (!avatarBtn.contains(e.target) && !avatarDropdown.contains(e.target)) {
      avatarDropdown.classList.add("hidden");
    }
  });

  logoutBtn?.addEventListener("click", () => {
    fetch("logout.php")
      .then(() => {
        checkLoginStatus();
        avatarDropdown.classList.add("hidden");
        window.location.reload();
      })
      .catch(() => showToast("Error logging out.", "error"));
  });

  openLoginBtn?.addEventListener("click", () => {
    avatarDropdown.classList.add("hidden");
    showAuthModal("login");
  });

  openRegisterBtn?.addEventListener("click", () => {
    avatarDropdown.classList.add("hidden");
    showAuthModal("register");
  });

  closeAuthModal?.addEventListener("click", hideAuthModal);

  window.addEventListener("click", (e) => {
    if (e.target === authModal) hideAuthModal();
    if (e.target === forgotPasswordModal) hideForgotPasswordModal();
  });

  document.getElementById("showRegister")?.addEventListener("click", () => {
    loginSection.classList.add("hidden");
    registerSection.classList.remove("hidden");
  });

  document.getElementById("showLogin")?.addEventListener("click", () => {
    registerSection.classList.add("hidden");
    loginSection.classList.remove("hidden");
  });

  document
    .getElementById("showForgotPassword")
    ?.addEventListener("click", showForgotPasswordModal);

  document
    .getElementById("loginForm")
    ?.addEventListener("submit", function (e) {
      e.preventDefault();
      const username = document.getElementById("loginUsername").value;
      const password = document.getElementById("loginPassword").value;

      fetch("login.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `username=${encodeURIComponent(
          username
        )}&password=${encodeURIComponent(password)}`,
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            hideAuthModal();
            showToast("Welcome " + username + "!");
            checkLoginStatus();
            syncFavoritesFromServer();
            setTimeout(() => window.location.reload(), 500);
          } else {
            showToast(data.message || "Invalid login.", "error");
          }
        })
        .catch(() => showToast("Error logging in.", "error"));
    });

  document
    .getElementById("registerForm")
    ?.addEventListener("submit", function (e) {
      e.preventDefault();
      const username = document.getElementById("registerUsername").value;
      const email = document.getElementById("registerEmail").value;
      const password = document.getElementById("registerPassword").value;
      const confirmPassword = document.getElementById("confirmPassword").value;

      if (password !== confirmPassword) {
        showToast("Passwords do not match.", "error");
        return;
      }

      fetch("register.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `username=${encodeURIComponent(
          username
        )}&password=${encodeURIComponent(password)}&email=${encodeURIComponent(
          email
        )}`,
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            hideAuthModal();
            showToast("Registered and logged in!");
            checkLoginStatus();
            syncFavoritesFromServer();
            setTimeout(() => window.location.reload(), 500);
          } else {
            showToast(data.message || "Registration failed.", "error");
          }
        })
        .catch(() => showToast("Error registering.", "error"));
    });

  checkLoginStatus();
});
