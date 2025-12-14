function saveFavoritesToServer() {
  const raw = localStorage.getItem("favorites");
  let favorites = [];

  try {
    favorites = JSON.parse(raw);
    if (!Array.isArray(favorites)) favorites = [];
  } catch (e) {
    // console.warn("Invalid favorites format in localStorage");
  }

  fetch("./get_function/save_favorites.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ favorites }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (!data.success) {
        // console.warn("Failed to save favorites:", data.error || data);
      }
    })
    .catch((err) => console.error("Error saving favorites:", err));
}
function toggleFavorite(itemId, favoriteBtn) {
  if (!itemId) {
    // console.warn("Invalid itemId:", itemId);
    return;
  }

  itemId = itemId;

  let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
  favorites = favorites.filter((id) => id != null);

  if (favorites.includes(itemId)) {
    favorites = favorites.filter((id) => id !== itemId);
    favoriteBtn.innerHTML = "&#9734;";
    favoriteBtn.classList.remove("text-yellow-400");
    favoriteBtn.classList.add("text-gray-400");
  } else {
    favorites.push(itemId);
    favoriteBtn.innerHTML = "&#9733;";
    favoriteBtn.classList.add("text-yellow-400");
    favoriteBtn.classList.remove("text-gray-400");
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
}
function getStatValue(stats, statName) {
  if (!Array.isArray(stats)) return 0;
  const stat = stats.find((s) => s.stat_name === statName);
  if (!stat) return 0;

  let val = stat.formatted_value;
  if (typeof val === "string" && val.includes("%")) {
    val = val.replace("%", "");
  }
  return parseFloat(val) || 0;
}
function sortItems(data, sortBy) {
  const sorted = [...data];

  const getName = (item) => item.item_name?.toLowerCase() || "";
  const getAtk = (item) => getStatValue(item.stats, "BaseATK");
  const getDef = (item) => getStatValue(item.stats, "BaseDEF");

  if (sortBy === "recent") {
    return [...sorted].reverse();
  }

  sorted.sort((a, b) => {
    const nameA = getName(a);
    const nameB = getName(b);
    const atkA = getAtk(a);
    const atkB = getAtk(b);
    const defA = getDef(a);
    const defB = getDef(b);

    const hasAtkA = atkA > 0;
    const hasAtkB = atkB > 0;
    const hasDefA = defA > 0;
    const hasDefB = defB > 0;

    if (sortBy === "az") return nameA.localeCompare(nameB);
    if (sortBy === "za") return nameB.localeCompare(nameA);

    if (sortBy === "asc" || sortBy === "desc") {
      // Prioritize items with ATK > DEF > none
      if (hasAtkA && !hasAtkB) return -1;
      if (!hasAtkA && hasAtkB) return 1;
      if (!hasAtkA && hasDefA && !hasDefB) return -1;
      if (!hasAtkA && !hasDefA && hasDefB) return 1;

      if (hasAtkA && hasAtkB) {
        return sortBy === "asc" ? atkA - atkB : atkB - atkA;
      }
      if (hasDefA && hasDefB) {
        return sortBy === "asc" ? defA - defB : defB - defA;
      }
      return 0;
    }

    return 0;
  });

  return sorted;
}
function showLoading() {
  const spinner = document.getElementById("loading-spinner");
  if (spinner) spinner.classList.remove("hidden");
}

function hideLoading() {
  const spinner = document.getElementById("loading-spinner");
  if (spinner) spinner.classList.add("hidden");
}

document.addEventListener("DOMContentLoaded", () => {
  const queryParams = new URLSearchParams(window.location.search);
  const firstButton = document.getElementById("first-page");
  const prevButton = document.getElementById("prev-page");
  const nextButton = document.getElementById("next-page");
  const lastButton = document.getElementById("last-page");
  const pageNumbersContainer = document.getElementById("page-numbers");
  let pageParam = queryParams.get("page") || 1;
  const limit = 40;

  let currentPage = pageParam;
  let itemsPerPage = parseInt(limit, 10);
  let allItems = [];
  let totalPages = 1;

  if (
    [...queryParams.keys()].length === 0 &&
    !localStorage.getItem("isAdvancedSearch")
  ) {
    localStorage.removeItem("advancedSearch");
  }

  function fetchItems() {
    let url = "get_data/get_item_data.php";

    const params = new URLSearchParams(queryParams);

    const savedSearch = localStorage.getItem("advancedSearch");
    if (savedSearch) {
      try {
        const searchParams = JSON.parse(savedSearch);
        for (const [key, value] of Object.entries(searchParams)) {
          if (typeof value === "object") {
            params.append(key, JSON.stringify(value));
          } else {
            params.append(key, value);
          }
        }
      } catch (e) {}
    }

    pageParam = parseInt(queryParams.get("page") || "1", 10);
    url += "?" + params.toString();

    let sortBy = document.getElementById("sortBy").value;
    let searchValue = "";
    let selectedCategories = [];

    showLoading();

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        allItems = data;

        const displayItems = () => {
          showLoading();

          let filtered = [...allItems];

          if (searchValue.trim() !== "") {
            const s = searchValue.toLowerCase();
            filtered = filtered.filter((item) =>
              item.item_name?.toLowerCase().includes(s)
            );
          }

          if (selectedCategories.length > 0) {
            filtered = filtered.filter((item) =>
              selectedCategories.includes(item.item_type)
            );
          }

          if (sortBy === "favorites") {
            const favorites = JSON.parse(
              localStorage.getItem("favorites") || "[]"
            )
              .filter((id) => id != null)
              .map(Number);

            filtered = filtered.filter((item) =>
              favorites.includes(item.item_id)
            );
          }

          const sorted =
            sortBy === "favorites" ? filtered : sortItems(filtered, sortBy);

          totalPages = Math.ceil(sorted.length / itemsPerPage);
          if (currentPage > totalPages) currentPage = totalPages || 1;

          const startIndex = (currentPage - 1) * itemsPerPage;
          const endIndex = startIndex + itemsPerPage;
          const itemsToDisplay = sorted.slice(startIndex, endIndex);

          renderItems(itemsToDisplay, queryParams);
          updatePaginationControls();
          hideLoading();
        };
        document.getElementById("sortBy").addEventListener("change", (e) => {
          sortBy = e.target.value;
          currentPage = 1;
          displayItems();
        });

        document.getElementById("searchBox").addEventListener("input", (e) => {
          searchValue = e.target.value;
          currentPage = 1;
          displayItems();
        });

        document.querySelectorAll(".category-btn").forEach((btn) => {
          btn.addEventListener("click", () => {
            const value = btn.dataset.value;
            const isActive = selectedCategories.includes(value);

            if (isActive) {
              selectedCategories = selectedCategories.filter(
                (v) => v !== value
              );
              btn.classList.remove("bg-blue-300");
              btn.classList.add("bg-gray-600");
            } else {
              selectedCategories.push(value);
              btn.classList.remove("bg-gray-600");
              btn.classList.add("bg-blue-300");
            }

            currentPage = 1;
            displayItems();
          });
        });

        const updatePaginationControls = () => {
          pageNumbersContainer.innerHTML = "";

          prevButton.disabled = currentPage === 1;
          nextButton.disabled = currentPage === totalPages;
          firstButton.disabled = currentPage === 1;
          lastButton.disabled = currentPage === totalPages;

          const range = 5;
          let startPage = Math.max(1, currentPage - 2);
          let endPage = Math.min(totalPages, startPage + range - 1);

          if (endPage - startPage < range - 1) {
            startPage = Math.max(1, endPage - range + 1);
          }

          for (let i = startPage; i <= endPage; i++) {
            const pageButton = document.createElement("button");
            pageButton.textContent = i;
            pageButton.classList.add(
              "px-2",
              "py-1",
              "text-white",
              "rounded",
              "hover:bg-blue-600",
              i === currentPage ? "bg-blue-800" : "bg-blue-500",
              i === currentPage ? "text-lg" : "text-sm"
            );

            pageButton.addEventListener("click", () => {
              currentPage = i;
              window.history.pushState({}, "", `?page=${currentPage}`);
              displayItems();
              setTimeout(() => window.scrollTo(0, 0), 100);
            });

            pageNumbersContainer.appendChild(pageButton);
          }
        };

        firstButton.addEventListener("click", () => {
          if (currentPage !== 1) {
            currentPage = 1;
            window.history.pushState({}, "", `?page=${currentPage}`);
            displayItems();
            setTimeout(() => window.scrollTo(0, 0), 100);
          }
        });

        prevButton.addEventListener("click", () => {
          if (currentPage > 1) {
            currentPage--;
            window.history.pushState({}, "", `?page=${currentPage}`);
            displayItems();
            setTimeout(() => window.scrollTo(0, 0), 100);
          }
        });

        nextButton.addEventListener("click", () => {
          if (currentPage < totalPages) {
            currentPage++;
            window.history.pushState({}, "", `?page=${currentPage}`);
            displayItems();
            setTimeout(() => window.scrollTo(0, 0), 100);
          }
        });

        lastButton.addEventListener("click", () => {
          if (currentPage !== totalPages) {
            currentPage = totalPages;
            window.history.pushState({}, "", `?page=${currentPage}`);
            displayItems();
            setTimeout(() => window.scrollTo(0, 0), 100);
          }
        });

        displayItems();
      });
  }

  function switchTab(button, targetClass) {
    const parent = button.closest(".item-card");
    const targetTabContent = parent.querySelector(
      `.tab-content.${targetClass}`
    );

    if (!targetTabContent) {
      return;
    }

    const allTabs = parent.querySelectorAll(".tab-content");
    allTabs.forEach((tab) => tab.classList.add("hidden"));

    targetTabContent.classList.remove("hidden");

    const allButtons = parent.querySelectorAll(".tab-btn");
    allButtons.forEach((btn) => {
      btn.classList.remove("bg-blue-300", "px-3");
      btn.classList.add("bg-gray-700", "px-2.5");
    });

    button.classList.add("bg-blue-300", "px-3");
    button.classList.remove("bg-gray-700");
  }

  function formatStat(value, name = "") {
    if (!name) {
      return "";
    }
    let number = parseFloat(value);
    let statName = name.toLocaleLowerCase();
    let returnText = "";
    if (statName.includes("element") || statName.includes("unavailable")) {
      return returnText;
    }

    const sign = number < 0 ? "" : "+";

    if (value.includes("%")) {
      returnText = `${number.toFixed(2).replace(/\.00$/, "")}%`;
    } else {
      returnText = `${number.toFixed(0).replace(/\.00$/, "")}`;
    }

    if (!statName.includes("base") && !statName.includes("potential")) {
      returnText = `${sign}${returnText}`;
    }
    return returnText;
  }

  function toTitle(str) {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }
  function renderItems(items, id, name) {
    const container = document.getElementById("info-container");
    container.classList.add("font-semibold", "text-white", "text-lg");
    const resultHeader = document.getElementById("result-header");
    container.innerHTML = "";

    resultHeader.classList.add(
      "flex",
      "flex-wrap",
      "items-center",
      "gap-2",
      "mb-2"
    );

    let headerText = "";
    let savedSearch = localStorage.getItem("advancedSearch");
    let searchName = queryParams.get("name");
    let statChips = [];

    if (searchName) {
      headerText = `Results for: ${searchName}`;
    } else if (queryParams.get("id")) {
      headerText = `Results for item ID: ${queryParams.get("id")}`;
    }

    if (savedSearch) {
      try {
        const searchParams = JSON.parse(savedSearch);

        if (searchParams.name && !searchName) {
          headerText = `Results for: ${searchParams.name}`;
        }

        for (const [key, value] of Object.entries(searchParams)) {
          if (!isNaN(parseInt(key))) {
            try {
              const stat =
                typeof value === "string" ? JSON.parse(value) : value;
              const chipText = `${stat.stat_name} ${stat.operator} ${
                stat.value
              }${stat.stat_type === "Percentage" ? "%" : ""}`;
              statChips.push(chipText);
            } catch (e) {}
          }
        }
      } catch (e) {}
    }

    if (!headerText) {
      headerText = `Showing ${items.length} items out of ${allItems.length}`;
    }

    const headerTextEl = document.createElement("span");
    headerTextEl.textContent = headerText;
    headerTextEl.classList.add("text-white", "font-semibold", "text-lg");
    resultHeader.innerHTML = "";
    resultHeader.appendChild(headerTextEl);

    if (statChips.length > 0) {
      statChips.forEach((chip) => {
        const chipEl = document.createElement("span");
        chipEl.textContent = chip;

        chipEl.classList.add(
          "inline-flex",
          "items-center",
          "bg-blue-500",
          "text-white",
          "text-sm",
          "px-3",
          "py-1",
          "rounded-full",
          "shadow-sm",
          "whitespace-nowrap"
        );

        resultHeader.appendChild(chipEl);
      });
    }

    if (items.length === 0) {
      container.innerHTML = "<p>No items found.</p>";
      return;
    }
    items.forEach((item, index) => {
      const card = document.createElement("div");
      card.classList.add(
        "bg-gray-800",
        "overflow-hidden",
        "text-white",
        "text-sm",
        "item-card",
        "transition-all",
        "duration-300",
        "ease-in-out",
        "min-h-[200px]"
      );

      const content = document.createElement("div");
      content.classList.add(
        "p-4",
        "border",
        "border-gray-700",
        "box-border",
        "rounded-lg",
        "shadow-lg"
      );

      const name = document.createElement("h2");
      name.classList.add("text-lg", "font-bold");
      name.innerText = item.item_name;

      item.item_type = item.item_type.toLowerCase() || "???";
      const typeColorClass = {
        "normal xtal": "blue-500",
        "special xtal": "purple-300",
        "weapon xtal": "red-400",
        "armor xtal": "green-300",
        "additional xtal": "yellow-300",
      };
      const typeColor = typeColorClass[item.item_type] || "amber-400";
      const type = document.createElement("span");
      type.classList.add("text-sm", `text-${typeColor}`);
      type.innerText = `[${toTitle(item.item_type)}]`;

      const favoriteBtn = document.createElement("button");
      favoriteBtn.innerHTML = "&#9734;";
      favoriteBtn.classList.add(
        "favorite-toggle",
        "text-2xl",
        "ml-2",
        "transition"
      );

      const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
      const isFavorited = favorites.includes(item.item_id);
      if (isFavorited) item.item_name;

      if (isFavorited) {
        favoriteBtn.innerHTML = "&#9733;";
        favoriteBtn.classList.add("text-yellow-400");
      } else {
        favoriteBtn.classList.add("text-gray-300");
      }

      favoriteBtn.addEventListener("click", () => {
        toggleFavorite(item.item_id, favoriteBtn);
      });

      const headerRow = document.createElement("div");
      headerRow.classList.add("flex", "items-center", "justify-between");
      headerRow.appendChild(name);
      headerRow.appendChild(favoriteBtn);

      let imageContainer = null;
      if (item.image_location && item.image_location.trim() !== "") {
        imageContainer = document.createElement("div");
        imageContainer.classList.add("mt-2", "mb-2", "w-full", "h-[200px]");
        const image = document.createElement("img");
        image.src = item.image_location;
        image.alt = `${item.item_name} image`;
        image.classList.add(
          "w-full",
          "h-full",
          "object-contain",
          "rounded-md",
          "bg-black"
        );
        imageContainer.appendChild(image);
      }

      const materialInfo = document.createElement("div");
      materialInfo.classList.add("flex", "flex-wrap", "gap-2", "mt-2");

      const sellInfo = document.createElement("span");
      sellInfo.innerText = "Sell: ??? Spina";
      sellInfo.classList.add(
        "bg-blue-600",
        "px-2.5",
        "py-0.5",
        "rounded-full",
        "text-xs"
      );

      const processInfo = document.createElement("span");
      processInfo.innerText = "Sell: ??? ???";
      processInfo.classList.add(
        "bg-green-600",
        "px-2.5",
        "py-0.5",
        "rounded-full",
        "text-xs"
      );
      materialInfo.appendChild(sellInfo);
      materialInfo.appendChild(processInfo);

      if (
        (item.pre_upgrade && item.pre_upgrade.id && item.pre_upgrade.name) ||
        (item.next_upgrades && item.next_upgrades.length > 0)
      ) {
        const upgradeContainer = document.createElement("div");
        upgradeContainer.classList.add(
          "flex",
          "justify-between",
          "mt-2",
          "gap-4"
        );

        if (item.pre_upgrade && item.pre_upgrade.id && item.pre_upgrade.name) {
          const upgradeFrom = document.createElement("div");
          upgradeFrom.classList.add(
            `text-${typeColor}`,
            "text-xs",
            "font-semibold"
          );
          upgradeFrom.innerHTML = `<span class='text-white'>Upgrade From:</span> <a href="items.php?id=${item.pre_upgrade.id}" class="underline">${item.pre_upgrade.name}</a>`;
          upgradeContainer.appendChild(upgradeFrom);
        }

        if (item.next_upgrades && item.next_upgrades.length > 0) {
          const upgradeTo = document.createElement("div");
          upgradeTo.classList.add(
            `text-${typeColor}`,
            "text-xs",
            "font-semibold"
          );

          const links = item.next_upgrades.map((upgrade) => {
            if (upgrade.id && upgrade.name) {
              return `<a href="items.php?id=${upgrade.id}" class="underline">${upgrade.name}</a>`;
            }
            return upgrade.name || "";
          });

          upgradeTo.innerHTML = `<span class='text-white'>Upgrade To:</span> ${links.join(
            ", "
          )}`;
          upgradeContainer.appendChild(upgradeTo);
        }

        materialInfo.appendChild(upgradeContainer);
      }

      const tabs = document.createElement("div");
      tabs.classList.add(
        "mt-4",
        "border-t",
        "border-gray-700",
        "pt-3",
        "space-y-2"
      );

      const tabButtonsContainer = document.createElement("div");
      tabButtonsContainer.classList.add("flex", "gap-3", "mb-4");

      const tabsData = [
        { label: "Stats/Effects", key: `stats-${index}` },
        { label: "Obtain", key: `where-${index}` },
        { label: "Recipe", key: `recipe-${index}` },
      ];

      tabsData.forEach((tabData) => {
        const tabButton = document.createElement("button");
        tabButton.classList.add(
          "tab-btn",
          "bg-gray-700",
          "text-white",
          "px-3",
          "py-1",
          "rounded",
          "text-xs",
          "font-semibold"
        );
        tabButton.innerText = tabData.label;
        tabButton.dataset.tab = tabData.key;

        if (tabData.key === `stats-${index}`) {
          tabButton.classList.remove("bg-gray-700");
          tabButton.classList.add("bg-blue-300", "text-white");
        }

        tabButton.addEventListener("click", function () {
          switchTab(tabButton, tabData.key);
        });

        tabButtonsContainer.appendChild(tabButton);
      });

      tabs.appendChild(tabButtonsContainer);

      const tabContentsContainer = document.createElement("div");
      tabContentsContainer.classList.add("tab-content-container");

      const statsTab = document.createElement("div");
      statsTab.classList.add("tab-content", "text-base");
      statsTab.classList.add(`stats-${index}`);

      let conditionStats = {};
      let normalStats = [];

      const statNameDict = {
        BaseATK: "Base ATK",
        BaseDEF: "Base DEF",
        BaseStability: "Base Stability",
      };
      item.stats.forEach((stat) => {
        const statRow = document.createElement("div");
        statRow.classList.add("flex", "justify-between");

        const statName = document.createElement("span");

        statName.innerText = statNameDict[stat.stat_name] || stat.stat_name;

        const statValue = document.createElement("span");
        statValue.innerText = formatStat(stat.formatted_value, stat.stat_name);

        statRow.appendChild(statName);
        statRow.appendChild(statValue);

        if (parseFloat(stat.formatted_value) < 0) {
          statRow.classList.add("text-red-400");
        } else if (parseFloat(stat.formatted_value) > 0) {
          statRow.classList.add("text-blue-200");
        }

        if (stat.stat_condition) {
          if (!conditionStats[stat.stat_condition]) {
            conditionStats[stat.stat_condition] = [];
          }
          conditionStats[stat.stat_condition].push(statRow);
        } else {
          normalStats.push(statRow);
        }
      });

      normalStats.forEach((row) => {
        statsTab.appendChild(row);
      });

      Object.keys(conditionStats).forEach((condition) => {
        const conditionSection = document.createElement("div");
        const conditionTitle = document.createElement("h4");
        conditionTitle.classList.add(
          "text-sm",
          "font-semibold",
          "text-green-400"
        );
        conditionTitle.innerText = `${condition}: `;
        conditionSection.appendChild(conditionTitle);

        conditionStats[condition].forEach((statRow) => {
          statRow.classList.add("ml-4");
          conditionSection.appendChild(statRow);
        });

        statsTab.appendChild(conditionSection);
      });

      const whereTab = document.createElement("div");
      whereTab.classList.add(
        "tab-content",
        "text-sm",
        "hidden",
        `where-${index}`
      );

      if (item.drops && item.drops.length > 0) {
        const dropsContainer = document.createElement("div");
        dropsContainer.style.display = "grid";
        dropsContainer.style.gridTemplateColumns = "auto 1fr";
        dropsContainer.style.gap = "4px 12px";
        dropsContainer.style.alignItems = "center";

        item.drops.forEach((drop) => {
          const col1 = document.createElement("div");
          col1.style.whiteSpace = "normal";

          const enemyLink = document.createElement("a");
          enemyLink.href = `enemies.php?id=${encodeURIComponent(
            drop.enemy_id || "unknown"
          )}`;
          enemyLink.target = "_blank";
          enemyLink.rel = "noopener noreferrer";
          enemyLink.classList.add(
            "text-blue-400",
            "hover:text-blue-600",
            "font-semibold"
          );

          const enemyNameSpan = document.createElement("span");
          enemyNameSpan.textContent = drop.enemy_name || "Unknown";
          enemyNameSpan.classList.add("text-white");

          const difficultyOrLevelSpan = document.createElement("span");
          if (drop.difficulty && drop.difficulty.trim() !== "") {
            difficultyOrLevelSpan.textContent = ` (${drop.difficulty})`;
            difficultyOrLevelSpan.classList.add("text-yellow-300");
          } else {
            difficultyOrLevelSpan.textContent = ` (Lv${
              drop.boss_level || "N/A"
            })`;
            difficultyOrLevelSpan.classList.add("text-green-300");
          }

          const raritySpan = document.createElement("span");
          raritySpan.textContent = ` (${drop.rarity || "Unknown"})`;
          raritySpan.classList.add("text-red-400", "italic");

          enemyLink.appendChild(enemyNameSpan);
          enemyLink.appendChild(difficultyOrLevelSpan);
          enemyLink.appendChild(raritySpan);

          col1.appendChild(enemyLink);

          const col2 = document.createElement("div");
          col2.style.whiteSpace = "normal";
          col2.textContent = drop.location_name || "Unknown";
          col2.classList.add("text-gray-300", "italic");

          dropsContainer.appendChild(col1);
          dropsContainer.appendChild(col2);
        });

        whereTab.appendChild(dropsContainer);
      } else {
        whereTab.innerText = "No drops available";
      }

      const recipeTab = document.createElement("div");
      recipeTab.classList.add("tab-content", "text-sm", "hidden");
      recipeTab.classList.add(`recipe-${index}`);
      recipeTab.innerText = item.recipe || "N/A";

      tabContentsContainer.appendChild(statsTab);
      tabContentsContainer.appendChild(whereTab);
      tabContentsContainer.appendChild(recipeTab);

      tabs.appendChild(tabContentsContainer);

      content.appendChild(headerRow);
      content.appendChild(type);
      if (imageContainer) content.appendChild(imageContainer);
      content.appendChild(materialInfo);
      content.appendChild(tabs);

      card.appendChild(content);
      container.appendChild(card);
    });
  }

  fetchItems();
});
window.addEventListener("beforeunload", function (e) {
  localStorage.removeItem("isAdvancedSearch");
  localStorage.removeItem("advancedSearch");
  saveFavoritesToServer();
});
