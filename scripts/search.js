document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const suggestionsBox = document.getElementById("searchSuggestions");
  const searchItems = document.getElementById("searchItems");
  const searchEnemies = document.getElementById("searchEnemies");

  searchInput.addEventListener("input", function () {
    const query = this.value.trim();
    if (query.length === 0) {
      suggestionsBox.classList.add("hidden");
      return;
    }

    searchItems.href = `items.php?name=${encodeURIComponent(query)}`;
    searchEnemies.href = `enemies.php?name=${encodeURIComponent(query)}`;

    searchItems.classList.add("text-white");
    searchEnemies.classList.add("text-white");

    searchItems.innerHTML = `Search <span class="font-semibold px-2 py-0.5 rounded-sm bg-gray-600">${query}</span> in <span class="font-semibold px-2 py-0.5 rounded-sm bg-gray-600">Items</span>`;
    searchEnemies.innerHTML = `Search <span class="font-semibold px-2 py-0.5 rounded-sm bg-gray-600">${query}</span> in <span class="font-semibold px-2 py-0.5 rounded-sm bg-gray-600">Enemies</span>`;

    suggestionsBox.classList.remove("hidden");
  });

  document.addEventListener("click", function (e) {
    if (!searchInput.contains(e.target) && !suggestionsBox.contains(e.target)) {
      suggestionsBox.classList.add("hidden");
    }
  });
});
