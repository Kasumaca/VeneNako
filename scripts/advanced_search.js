document.addEventListener("DOMContentLoaded", () => {
  const searchBtn = document.getElementById("searchItemBtn");
  const resetBtn = document.getElementById("resetItemBtn");
  localStorage.removeItem("advancedSearch");
  localStorage.removeItem("isAdvancedSearch");
  localStorage.setItem("isAdvancedSearch", false);
  searchBtn?.addEventListener("click", () => {
    const rawFilters = collectFilters();
    const filtersForQuery = convertFiltersToQuery(rawFilters);

    const urlParams = new URLSearchParams();

    if (rawFilters.name) {
      urlParams.set("name", rawFilters.name);
    }

    if (Array.isArray(rawFilters.type)) {
      rawFilters.type.forEach((t) => urlParams.append("type[]", t));
    }

    localStorage.removeItem("advancedSearch");
    localStorage.removeItem("isAdvancedSearch");
    localStorage.setItem("isAdvancedSearch", true);
    localStorage.setItem("advancedSearch", JSON.stringify(filtersForQuery));

    window.location.href = `items.php?${urlParams.toString()}`;
  });

  resetBtn?.addEventListener("click", () => {
    resetFilters();
    localStorage.removeItem("advancedSearch");
  });
});

const statNameMap = {
  f_str: { stat_name: "STR", stat_type: "Flat" },
  p_str: { stat_name: "STR", stat_type: "Percentage" },
  f_int: { stat_name: "INT", stat_type: "Flat" },
  p_int: { stat_name: "INT", stat_type: "Percentage" },
  f_vit: { stat_name: "VIT", stat_type: "Flat" },
  p_vit: { stat_name: "VIT", stat_type: "Percentage" },
  f_agi: { stat_name: "AGI", stat_type: "Flat" },
  p_agi: { stat_name: "AGI", stat_type: "Percentage" },
  f_dex: { stat_name: "DEX", stat_type: "Flat" },
  p_dex: { stat_name: "DEX", stat_type: "Percentage" },

  f_baseatk: { stat_name: "BaseATK", stat_type: "Flat" },
  f_atk: { stat_name: "ATK", stat_type: "Flat" },
  p_atk: { stat_name: "ATK", stat_type: "Percentage" },
  f_matk: { stat_name: "MATK", stat_type: "Flat" },
  p_matk: { stat_name: "MATK", stat_type: "Percentage" },
  f_basedef: { stat_name: "BaseDEF", stat_type: "Flat" },
  f_def: { stat_name: "DEF", stat_type: "Flat" },
  p_def: { stat_name: "DEF", stat_type: "Percentage" },
  f_mdef: { stat_name: "MDEF", stat_type: "Flat" },
  p_mdef: { stat_name: "MDEF", stat_type: "Percentage" },

  p_basestability: { stat_name: "BaseStability", stat_type: "Percentage" },
  p_stability: { stat_name: "Stability", stat_type: "Percentage" },
  f_accuracy: { stat_name: "Accuracy", stat_type: "Flat" },
  p_accuracy: { stat_name: "Accuracy", stat_type: "Percentage" },
  p_absolute_accuracy: {
    stat_name: "Absolute Accuracy",
    stat_type: "Percentage",
  },
  f_dodge: { stat_name: "Dodge", stat_type: "Flat" },
  p_dodge: { stat_name: "Dodge", stat_type: "Percentage" },
  p_absolute_dodge: { stat_name: "Absolute Dodge", stat_type: "Percentage" },

  f_max_hp: { stat_name: "MaxHP", stat_type: "Flat" },
  p_max_hp: { stat_name: "MaxHP", stat_type: "Percentage" },
  f_natural_hp_regen: { stat_name: "Natural HP Regen", stat_type: "Flat" },
  p_natural_hp_regen: {
    stat_name: "Natural HP Regen",
    stat_type: "Percentage",
  },
  f_recover_hp: { stat_name: "Recover HP", stat_type: "Flat" },
  p_recover_hp: { stat_name: "Recover HP", stat_type: "Percentage" },

  f_maxmp: { stat_name: "MaxMP", stat_type: "Flat" },
  f_natural_mp_regen: { stat_name: "Natural MP Regen", stat_type: "Flat" },
  p_natural_mp_regen: {
    stat_name: "Natural MP Regen",
    stat_type: "Percentage",
  },
  f_recover_mp: { stat_name: "Recover MP", stat_type: "Flat" },
  p_recover_mp: { stat_name: "Recover MP", stat_type: "Percentage" },
  f_ampr: { stat_name: "Recover MP", stat_type: "Flat" },
  p_ampr: { stat_name: "Recover MP", stat_type: "Percentage" },

  f_aspd: { stat_name: "ASPD", stat_type: "Flat" },
  p_apsd: { stat_name: "ASPD", stat_type: "Percentage" },
  f_cspd: { stat_name: "CSPD", stat_type: "Flat" },
  p_cspd: { stat_name: "CSPD", stat_type: "Percentage" },
  p_motion_speed: { stat_name: "Motion Speed", stat_type: "Percentage" },

  f_watk: { stat_name: "Weapon ATK", stat_type: "Flat" },
  p_watk: { stat_name: "Weapon ATK", stat_type: "Percentage" },
  element: { stat_name: "Element", stat_type: "Flat" },

  p_damage_to_neutral: {
    stat_name: "Damage to Neutral",
    stat_type: "Percentage",
  },
  p_damage_to_fire: { stat_name: "Damage to Fire", stat_type: "Percentage" },
  p_damage_to_water: { stat_name: "Damage to Water", stat_type: "Percentage" },
  p_damage_to_wind: { stat_name: "Damage to Wind", stat_type: "Percentage" },
  p_damage_to_earth: { stat_name: "Damage to Earth", stat_type: "Percentage" },
  p_damage_to_light: { stat_name: "Damage to Light", stat_type: "Percentage" },
  p_damage_to_dark: { stat_name: "Damage to Dark", stat_type: "Percentage" },

  p_physical_pierce: { stat_name: "Physical Pierce", stat_type: "Percentage" },
  p_magic_pierce: { stat_name: "Magic Pierce", stat_type: "Percentage" },
  p_short_range_damage: {
    stat_name: "Short Range Damage",
    stat_type: "Percentage",
  },
  p_long_range_damage: {
    stat_name: "Long Range Damage",
    stat_type: "Percentage",
  },
  p_unsheathe_attack: {
    stat_name: "Unsheathe Attack",
    stat_type: "Percentage",
  },
  f_unsheathe_attack: { stat_name: "Unsheathe Attack", stat_type: "Flat" },
  p_additional_melee: {
    stat_name: "Additional Melee",
    stat_type: "Percentage",
  },
  p_additional_magic: {
    stat_name: "Additional Magic",
    stat_type: "Percentage",
  },
  p_anticipate: { stat_name: "Anticipate", stat_type: "Percentage" },
  p_guard_break: { stat_name: "Guard Break", stat_type: "Percentage" },

  f_critical_rate: { stat_name: "Critical Rate", stat_type: "Flat" },
  p_critical_rate: { stat_name: "Critical Rate", stat_type: "Percentage" },
  f_critical_damage: { stat_name: "Critical Damage", stat_type: "Flat" },
  p_critical_damage: { stat_name: "Critical Damage", stat_type: "Percentage" },

  p_reduce_dmg_player_epicenter: {
    stat_name: "Reduce DMG(Player Epicenter)",
    stat_type: "Percentage",
  },
  p_reduce_dmg_foe_epicenter: {
    stat_name: "Reduce DMG(Foe Epicenter)",
    stat_type: "Percentage",
  },
  p_reduce_dmg_floor: {
    stat_name: "Reduce DMG(Floor)",
    stat_type: "Percentage",
  },
  p_reduce_dmg_charge: {
    stat_name: "Reduce DMG(Charge)",
    stat_type: "Percentage",
  },
  p_reduce_dmg_bullet: {
    stat_name: "Reduce DMG(Bullet)",
    stat_type: "Percentage",
  },
  p_reduce_dmg_bowling: {
    stat_name: "Reduce DMG(Bowling)",
    stat_type: "Percentage",
  },
  p_reduce_dmg_meteor: {
    stat_name: "Reduce DMG(Meteor)",
    stat_type: "Percentage",
  },
  p_reduce_dmg_straight_line: {
    stat_name: "Reduce DMG(Straight Line)",
    stat_type: "Percentage",
  },

  f_physical_barrier: {
    stat_name: "Physical Barrier",
    stat_type: "Flat",
  },
  f_magic_barrier: {
    stat_name: "Magic Barrier",
    stat_type: "Flat",
  },
  p_fractional_barrier: {
    stat_name: "Fractional Barrier",
    stat_type: "Percentage",
  },
  p_barrier_cooldown: {
    stat_name: "Fractional Barrier",
    stat_type: "Percentage",
  },

  p_neutral_resistance: {
    stat_name: "Neutral Resistance",
    stat_type: "Percentage",
  },
  p_fire_resistance: { stat_name: "Fire Resistance", stat_type: "Percentage" },
  p_water_resistance: {
    stat_name: "Water Resistance",
    stat_type: "Percentage",
  },
  p_wind_resistance: { stat_name: "Wind Resistance", stat_type: "Percentage" },
  p_earth_resistance: {
    stat_name: "Earth Resistance",
    stat_type: "Percentage",
  },
  p_light_resistance: {
    stat_name: "Light Resistance",
    stat_type: "Percentage",
  },
  p_dark_resistance: { stat_name: "Dark Resistance", stat_type: "Percentage" },

  p_physical_resistance: {
    stat_name: "Physical Resistance",
    stat_type: "Percentage",
  },
  p_magic_resistance: {
    stat_name: "Magic Resistance",
    stat_type: "Percentage",
  },
  p_guard_power: { stat_name: "Guard Power", stat_type: "Percentage" },
  p_guard_rate: { stat_name: "Guard Rate", stat_type: "Percentage" },
  p_evasion_rate: { stat_name: "Evasion Rate", stat_type: "Percentage" },
  p_reflect: { stat_name: "Reflect", stat_type: "Percentage" },
  p_recoil: { stat_name: "Recoil", stat_type: "Percentage" },
  p_aggro: { stat_name: "Aggro", stat_type: "Percentage" },
  p_ailment_resistance: {
    stat_name: "Ailment Resistance",
    stat_type: "Percentage",
  },
  p_invicible_aid: { stat_name: "Invicible Aid(sec)", stat_type: "Flat" },

  f_flinch_unavailable: { stat_name: "Flinch Unavailable", stat_type: "Flat" },
  f_tumble_unavailable: { stat_name: "Tumble Unavailable", stat_type: "Flat" },
  f_stun_unavailable: { stat_name: "Stun Unavailable", stat_type: "Flat" },
  p_exp_gain: { stat_name: "EXP Gain", stat_type: "Percentage" },
  p_drop_rate: { stat_name: "Drop Rate", stat_type: "Percentage" },
  p_base_drop_rate: { stat_name: "Base Drop Rate", stat_type: "Percentage" },
  f_potential: { stat_name: "Potential", stat_type: "Flat" },
  p_pet_exp: { stat_name: "Pet EXP", stat_type: "Percentage" },
  p_revive_time: { stat_name: "Revive Time", stat_type: "Percentage" },
  p_item_cooldown: { stat_name: "Item Cooldown", stat_type: "Percentage" },

  p_atk_up_str: { stat_name: "ATK UP(STR)", stat_type: "Percentage" },
  p_atk_up_int: { stat_name: "ATK UP(INT)", stat_type: "Percentage" },
  p_atk_up_vit: { stat_name: "ATK UP(VIT)", stat_type: "Percentage" },
  p_atk_up_agi: { stat_name: "ATK UP(AGI)", stat_type: "Percentage" },
  p_atk_up_dex: { stat_name: "ATK UP(DEX)", stat_type: "Percentage" },

  p_atk_down_str: { stat_name: "ATK DOWN(STR)", stat_type: "Percentage" },
  p_atk_down_int: { stat_name: "ATK DOWN(INT)", stat_type: "Percentage" },
  p_atk_down_vit: { stat_name: "ATK DOWN(VIT)", stat_type: "Percentage" },
  p_atk_down_agi: { stat_name: "ATK DOWN(AGI)", stat_type: "Percentage" },
  p_atk_down_dex: { stat_name: "ATK DOWN(DEX)", stat_type: "Percentage" },

  p_matk_up_str: { stat_name: "MATK UP(STR)", stat_type: "Percentage" },
  p_matk_up_int: { stat_name: "MATK UP(INT)", stat_type: "Percentage" },
  p_matk_up_vit: { stat_name: "MATK UP(VIT)", stat_type: "Percentage" },
  p_matk_up_agi: { stat_name: "MATK UP(AGI)", stat_type: "Percentage" },
  p_matk_up_dex: { stat_name: "MATK UP(DEX)", stat_type: "Percentage" },

  p_matk_down_str: { stat_name: "MATK DOWN(STR)", stat_type: "Percentage" },
  p_matk_down_int: { stat_name: "MATK DOWN(INT)", stat_type: "Percentage" },
  p_matk_down_vit: { stat_name: "MATK DOWN(VIT)", stat_type: "Percentage" },
  p_matk_down_agi: { stat_name: "MATK DOWN(AGI)", stat_type: "Percentage" },
  p_matk_down_dex: { stat_name: "MATK DOWN(DEX)", stat_type: "Percentage" },
};

function collectFilters() {
  const filters = {};

  const name = document.querySelector("input[name='name']")?.value.trim();
  if (name) filters["name"] = name;

  const types = Array.from(
    document.querySelector("select[name='type[]']")?.selectedOptions || []
  ).map((opt) => opt.value);
  if (types.length > 0) filters["type"] = types;

  const toTitleCase = (str) =>
    str.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());

  const elements = Array.from(
    document.querySelector("select[name='element[]']")?.selectedOptions || []
  )
    .map((opt) => toTitleCase(opt.value))
    .filter((val) => val !== "Any Element");

  if (elements.length > 0) filters["element"] = elements;

  document.querySelectorAll("details").forEach((drawer) => {
    const key = drawer.querySelector("summary")?.innerText.trim();
    const inputs = drawer.querySelectorAll("input, select");

    let values = {};
    inputs.forEach((input) => {
      const key = input.name || input.id || input.placeholder;
      if (!key) return;

      if (input.type === "checkbox" || input.type === "radio") {
        if (input.checked) {
          values[key] = "1";
        }
      } else if (input.tagName === "SELECT") {
        const selectedOption = input.options[input.selectedIndex];
        const selectedValue = selectedOption?.value?.trim();

        if (selectedValue !== undefined && selectedValue !== "") {
          values[key] = selectedValue;
        }
      } else if (input.value?.trim() !== "") {
        values[key] = input.value.trim();
      }
    });
    if (Object.keys(values).length > 0) {
      filters[key] = values;
    }
  });
  return filters;
}

function convertFiltersToQuery(rawFilters) {
  const results = [];

  const operatorMap = {
    "≥": ">=",
    "≤": "<=",
    ">": ">",
    "<": "<",
    "=": "=",
  };

  for (const section in rawFilters) {
    let values = rawFilters[section];

    if (section === "element" && Array.isArray(values)) {
      const elementsClean = values
        .map((el) => el.toLowerCase().replace(" element", "").trim())
        .filter((el) => el !== "any" && el !== "");

      if (elementsClean.length > 0) {
        results.push({
          stat_name: "Element",
          stat_type: "Flat",
          operator: "=",
          value: elementsClean,
        });
      }
      continue;
    }

    for (const key in values) {
      if (key.endsWith("_operator")) {
        const statKey = key.replace("_operator", "");
        const operatorSymbol = values[key];
        const valueKey = statKey + "_value";
        const value = values[valueKey];

        if (value === undefined || value === "" || isNaN(value)) continue;
        const statInfo = statNameMap[statKey];
        if (!statInfo) continue;
        results.push({
          stat_name: statInfo.stat_name,
          stat_type: statInfo.stat_type,
          operator: operatorMap[operatorSymbol] || ">=",
          value: parseFloat(value),
        });
      }
    }
  }
  return results;
}

function resetFilters() {
  const form = document.getElementById("itemSearchForm");
  if (form) form.reset();

  document.querySelectorAll("select[multiple]").forEach((select) => {
    Array.from(select.options).forEach((opt) => (opt.selected = false));
  });
}

function applyFiltersToItems(items) {
  const filtersJSON = localStorage.getItem("advancedSearch");
  if (!filtersJSON) return items;

  const filters = JSON.parse(filtersJSON);

  return items.filter((item) => {
    for (const filter of filters) {
      const { stat_name, operator, value } = filter;

      if (stat_name === "Element" && operator === "include") {
        if (!value.includes(item.element)) return false;
        continue;
      }

      const itemStat = item[stat_name];
      if (itemStat === undefined) return false;

      switch (operator) {
        case ">":
          if (!(itemStat > value)) return false;
          break;
        case ">=":
          if (!(itemStat >= value)) return false;
          break;
        case "<":
          if (!(itemStat < value)) return false;
          break;
        case "<=":
          if (!(itemStat <= value)) return false;
          break;
        case "=":
          if (!(itemStat == value)) return false;
          break;
        default:
          return false;
      }
    }
    return true;
  });
}
