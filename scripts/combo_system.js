window.comboSystem = (function () {
  let comboData = [];

  let viewOnly = false;
  let selectingTag = false;
  let draggedComboId = null;

  const skillSlotBg = "./icons/skill_panel.png";
  const addSlotIcon = "./icons/add_button.png";
  const maxSlots = 10;

  const comboContainer = document.getElementById("combo-container");

  let openSelector = { comboId: null, slotIndex: null };

  function getSkillData(skillId) {
    for (let tree of window.skillData) {
      const skill = tree.skills.find((skill) => skill.id === skillId);
      if (skill) {
        return skill;
      }
    }
    return null;
  }
  function getSkillTreeBySkillId(skillId) {
    for (let tree of window.skillData) {
      if (tree.skills.some((skill) => skill.id === skillId)) {
        return tree;
      }
    }
    return null;
  }

  function getTagData(tagId) {
    return window.comboTags.find((tag) => tag.id === tagId) || null;
  }

  function getStatEquipmentSetupValues() {
    return {
      hpPercent: Number(document.getElementById("hpPercent").value),
      mp: Number(document.getElementById("mp").value),
      mainWeapon: document.getElementById("mainWeapon").value,
      subWeapon: document.getElementById("subWeapon").value,
      ninjutsuReduction: Number(
        document.getElementById("ninjutsuReduction").value
      ),
    };
  }

  function halveMP(cost) {
    return Math.ceil(cost / 100 / 2) * 100;
  }
  function calculateComboStats(combo) {
    let gearSetup = getStatEquipmentSetupValues();
    let totalMpNeeded = 0;
    let totalMpUsed = 0;
    let totalHpUsed = 0;
    let consecutiveCount = 1;
    let saveFlag = false;
    let savedMp = 0;
    let saveIndex = -1;
    let availableMp = gearSetup.mp;
    let smitePenalty = false;
    let halveMPCost = false;

    combo.skills.forEach((skillSlot, index) => {
      if (!skillSlot.skillId) return;

      const skill = getSkillData(skillSlot.skillId);
      const isLastSkill = index === combo.skills.length - 1;
      if (!skill) return;
      let tree = getSkillTreeBySkillId(skill.id);

      let damagePercent = 100;
      let mpCost = skill.cost;
      let hpCost = skill.hpCost;

      if (smitePenalty) {
        damagePercent -= 50;
        smitePenalty = false;
      }
      if (halveMPCost) {
        mpCost = halveMP(skill.cost);
        halveMPCost = false;
      }
      const skillSetup = combo.skillSetup || {};
      const gearSetup = getStatEquipmentSetupValues();

      if (skill.id === "shadowstep") {
        let mode = skillSetup.shadowstepLevel || "1";
        switch (mode) {
          case "2":
            mpCost = 300;
            break;
          case "3":
            mpCost = 200;
            break;
          default:
            mpCost = 400;
            break;
        }
      }
      if (tree.id === "scroll") {
        mpCost = Math.max(100, mpCost - gearSetup.ninjutsuReduction * 100);
      }
      if (tree.id === "slash_reaper" && skillSetup.slashReaperHit) {
        mpCost = 100;
      }
      if (skill.id === "ad_lib") {
        let mode = skillSetup.minstrelBuff || "1";
        switch (mode) {
          case "2":
            mpCost = 200;
            break;
          case "3":
            mpCost = 400;
            break;
          default:
            mpCost = 100;
            break;
        }
      }
      if (skill.id === "hard_hit" && gearSetup.mainWeapon === "ths") {
        mpCost = 200;
      }
      if (skill.id === "trigger_slash" && skillSetup.triggerSlashLv6) {
        mpCost = 200;
      }
      if (
        skill.id === "swift_attack" &&
        gearSetup.mainWeapon === "ohs" &&
        gearSetup.subWeapon === "ohs"
      ) {
        mpCost = 200;
      }
      const skillConditions = {
        swift_attack: skillSetup.swiftAttackLv10,
        magic_impact: !skillSetup.nextQ,
        breathwork: skillSetup.breathworkAnni10,
        rage_sword: skillSetup.rageSwordAggro,
        exorcism: true,
        holy_grace: true,
        float_dash: true,
        qadal: true,
      };

      if (skillConditions[skill.id]) {
        halveMPCost = true;
      }
      if (skill.id === "multiple_hunt" && gearSetup.subWeapon === "dagger") {
        halveMPCost = true;
      }

      const zeroMpSkills = {
        cross_fire: "crossFireRelease",
        goliath_punch: "goliathPunchRelease",
      };

      if (zeroMpSkills[skill.id] && skillSetup[zeroMpSkills[skill.id]]) {
        mpCost = 0;
      }

      if (skill.id === "magic_cannon" && skillSetup.magicCannonRelease) {
        mpCost = 700;
      }

      if (skill.id === "vanquisher" && gearSetup.subWeapon === "ktn") {
        mpCost = 600;
      }
      if (skill.id === "sprite_shield") {
        hpCost = 30 - 2 * skillSetup.spriteShieldLevel;
      }
      if (skill.id === "teleport" && gearSetup.mainWeapon === "ohs")
        if (
          skill.id === "sneak_attack" &&
          ["bow", "bwg"].includes(gearSetup.subWeapon)
        ) {
          mpCost = 200;
        }
      if (["protection", "aegis"].includes(skill.id)) {
        mpCost = 100;
      }
      if (skill.id === "throwing_knife" && skillSetup.throwingKnifeLv10) {
        mpCost = 0;
      }
      if (skill.id === "horizon_cut") {
        halveMPCost = true;
        if (index === 0 || isLastSkill) {
          mpCost = 300;
        }
      }
      if (skill.id === "deadly_spear" && skillSetup.deadlySpearCrit) {
        halveMPCost = true;
      }
      if (skill.id === "tenryu_ransei" && skillSetup.tenryuBuffActive) {
        mpCost = 100;
      }
      if (skillSetup.dauntlessStacks90) {
        let tree = getSkillTreeBySkillId(skill.id);
        if (["mononofu"].includes(tree.id)) {
          mpCost = halveMP(skill.cost);
        }
      }
      if (skill.id === "bouncing_blade" && skillSetup.bouncingBladeGetHit) {
        halveMPCost = true;
      }
      if (skillSetup.asuraAuraActive) {
        if (!["martial", "crusher"].includes(tree.id)) {
          mpCost += 100;
        }
      }
      if (skillSetup.crescentSaberBuff) {
        if (!["magic"].includes(tree.id)) {
          mpCost = halveMP(skill.cost);
        }
      }
      // Apply tag effects
      if (skillSlot.tag) {
        let tag = getTagData(skillSlot.tag);
        if (tag) {
          switch (tag.id) {
            case "consecutive":
              // Apply Consecutive logic
              damagePercent -= 10 * consecutiveCount;
              mpCost -= 100 * index;
              consecutiveCount++; // Track number of consecutive uses
              break;

            case "mindeye":
              // No change to damage or MP
              break;

            case "save":
              damagePercent -= 80; // -80% damage for this skill
              saveFlag = true;
              saveIndex = index;
              savedMp += mpCost; // Save the MP cost for later use
              mpCost = 0; // No MP cost for this skill
              if (savedMp <= 0) {
                saveFlag = false;
                saveIndex = -1;
              }
              break;

            case "swift":
              break;
            case "bloodsucker_spirit":
              damagePercent += 10 + index + 1;
              break;

            case "smite":
              if (index < combo.skills.length - 1) {
                const nextSkillSlot = combo.skills[index + 1];
                if (nextSkillSlot.skillId) {
                  // Refund MP for next skill if necessary
                  // Adjust the next skill MP cost after Smite doubling
                  if (nextSkillSlot.calculatedMpCost > availableMp) {
                    nextSkillSlot.calculatedMpCost = Math.max(
                      nextSkillSlot.calculatedMpCost,
                      100
                    );
                  }
                }
              } else {
                // If there's no next skill, double the MP cost
                mpCost *= 2;
              }
              // Apply +50% damage for all Smite skills
              damagePercent += 50;
              smitePenalty = true;
              break;

            case "reflection":
              if (index < combo.skills.length - 1) {
                const nextSkillSlot = combo.skills[index + 1];
                if (nextSkillSlot.skillId) {
                  nextSkillSlot.reflectionMpCost = Math.max(
                    0,
                    nextSkillSlot.calculatedMpCost - 100
                  );
                }
              }
              break;

            case "reflection_hit":
              break;

            default:
              break;
          }
        }
      }

      if (skill.id === "qi_charge") {
        mpCost = availableMp;
      }

      if (saveFlag && index > saveIndex) {
        const skillDistanceFromSave = index - saveIndex;
        const damageReduction = Math.max(80 - 20 * skillDistanceFromSave, 0);
        damagePercent -= damageReduction;
      }

      if (savedMp > 0 && mpCost > 0) {
        if (savedMp >= mpCost) {
          savedMp -= mpCost;
          mpCost = 0;
        } else {
          mpCost -= savedMp;
          savedMp = 0;
        }
      }

      if (isLastSkill && savedMp > 0) {
        mpCost += savedMp;
        savedMp = 0;
      }
      if (mpCost < 0) mpCost = 0;

      if (skill.id === "aerial_cut" && skillSetup.aerialCutAdditionalHit) {
        mpCost += 200;
      }
      totalMpNeeded += mpCost;
      damagePercent = Math.max(damagePercent, 0);
      if (mpCost <= availableMp) {
        totalMpUsed += mpCost;
        availableMp -= mpCost;
      } else {
        combo.skills[index].calculatedDamage = damagePercent;
        combo.skills[index].calculatedMpCost = mpCost;
        combo.skills[index].calculatedHpCost = hpCost;
        return;
      }

      totalHpUsed += hpCost;

      combo.skills[index].calculatedDamage = damagePercent;
      combo.skills[index].calculatedMpCost = mpCost;
      combo.skills[index].calculatedHpCost = hpCost;
    });

    combo.mpNeeded = totalMpNeeded;
    combo.mpUsed = totalMpUsed;
    combo.hpUsed = totalHpUsed;
  }

  function updateComboStats(comboId) {
    const combo = comboData.find((c) => c.id === comboId);
    if (combo) {
      calculateComboStats(combo);
      renderCombos();
    }
  }

  // Create a new combo
  function createCombo() {
    const getNextComboName = () => {
      const existingNames = comboData.map((c) => c.name).filter(Boolean);
      let i = 1;
      while (existingNames.includes(`Combo ${i}`)) {
        i++;
      }
      return `Combo ${i}`;
    };

    // Create the new combo
    const newCombo = {
      id: Date.now(),
      name: getNextComboName(),
      skills: [
        {
          skillId: null,
          tag: null,
          calculatedDamage: 100,
          calculatedMpCost: 0,
          calculatedHpCost: 0,
        },
      ],
      expanded: true,
      damage: 100,
      mpNeeded: 0,
      hpUsed: 0,
      mpUsed: 0,
    };

    comboData.push(newCombo);
    renderCombos();
  }

  const mainWeaponSelect = document.getElementById("mainWeapon");
  const subWeaponSelect = document.getElementById("subWeapon");

  subWeaponSelect.value = "none";

  const weaponMap = {
    barehand: [
      { label: "None", value: "none" },
      { label: "Shield", value: "shield" },
      { label: "Dagger", value: "dagger" },
      { label: "Arrow", value: "arrow" },
      { label: "Magic Device", value: "md" },
      { label: "Knuckles", value: "knux" },
      { label: "Ninjutsu Scroll", value: "scroll" },
    ],
    ohs: [
      { label: "None", value: "none" },
      { label: "Shield", value: "shield" },
      { label: "Dagger", value: "dagger" },
      { label: "Arrow", value: "arrow" },
      { label: "One-Handed Sword", value: "ohs" },
      { label: "Magic Device", value: "md" },
      { label: "Knuckles", value: "knux" },
      { label: "Ninjutsu Scroll", value: "scroll" },
    ],
    ths: [{ label: "None", value: "none" }],
    bow: [
      { label: "None", value: "none" },
      { label: "Arrow", value: "arrow" },
      { label: "Katana", value: "ktn" },
    ],
    bwg: [
      { label: "None", value: "none" },
      { label: "Shield", value: "shield" },
      { label: "Dagger", value: "dagger" },
      { label: "Arrow", value: "arrow" },
      { label: "Magic Device", value: "md" },
      { label: "Knuckles", value: "knux" },
    ],
    stf: [
      { label: "None", value: "none" },
      { label: "Shield", value: "shield" },
      { label: "Dagger", value: "dagger" },
      { label: "Magic Device", value: "md" },
      { label: "Knuckles", value: "knux" },
      { label: "Ninjutsu Scroll", value: "scroll" },
    ],
    md: [
      { label: "None", value: "none" },
      { label: "Ninjutsu Scroll", value: "scroll" },
    ],
    knux: [
      { label: "None", value: "none" },
      { label: "Shield", value: "shield" },
      { label: "Dagger", value: "dagger" },
      { label: "Arrow", value: "arrow" },
      { label: "Magic Device", value: "md" },
    ],
    halb: [
      { label: "None", value: "none" },
      { label: "Dagger", value: "dagger" },
      { label: "Arrow", value: "arrow" },
    ],
    ktn: [
      { label: "None", value: "none" },
      { label: "Dagger", value: "dagger" },
      { label: "Ninjutsu Scroll", value: "scroll" },
    ],
  };

  function populateSubWeapons(mainWeapon) {
    subWeaponSelect.innerHTML = "";

    const subWeapons = weaponMap[mainWeapon] || [];

    subWeapons.forEach((sub) => {
      const option = document.createElement("option");
      option.value = sub.value;
      option.textContent = sub.label;
      subWeaponSelect.appendChild(option);
    });
  }

  if (mainWeaponSelect) {
    mainWeaponSelect.addEventListener("change", (e) => {
      populateSubWeapons(e.target.value);
    });

    populateSubWeapons(mainWeaponSelect.value);
  }

  function addSkillSlot(comboId) {
    const combo = comboData.find((c) => c.id === comboId);
    if (!combo) return;
    if (combo.skills.length >= maxSlots) return;
    combo.skills.push({
      skillId: null,
      tag: null,
      calculatedDamage: 100,
      calculatedMpCost: 0,
    });
    renderCombos();
    updateComboStats(comboId);
  }
  function createConfirmationModal(callback) {
    const modalContainer = document.createElement("div");
    modalContainer.className =
      "fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"; // Cover entire screen with semi-transparent background

    const modal = document.createElement("div");
    modal.className = "bg-gray-800 p-6 rounded-lg w-96";

    const modalHeader = document.createElement("h2");
    modalHeader.className = "text-white text-lg font-semibold mb-4";
    modalHeader.textContent = "Are you sure you want to delete this combo?";

    const modalActions = document.createElement("div");
    modalActions.className = "flex justify-between gap-4";

    const cancelButton = document.createElement("button");
    cancelButton.className =
      "bg-gray-600 hover:bg-gray-700 text-white p-2 w-40 rounded-lg";
    cancelButton.textContent = "Cancel";
    cancelButton.onclick = () => {
      document.body.removeChild(modalContainer);
    };

    const confirmButton = document.createElement("button");
    confirmButton.className =
      "bg-red-600 hover:bg-red-700 text-white p-2 w-40 rounded-lg";
    confirmButton.textContent = "Delete Combo";
    confirmButton.onclick = () => {
      callback();
      document.body.removeChild(modalContainer);
    };

    modalActions.appendChild(cancelButton);
    modalActions.appendChild(confirmButton);

    modal.appendChild(modalHeader);
    modal.appendChild(modalActions);

    modalContainer.appendChild(modal);
    document.body.appendChild(modalContainer);
  }

  function createSkillSetupUI(combo) {
    const skillSetup = document.createElement("div");
    skillSetup.className =
      "w-full bg-gray-900 p-4 rounded-lg shadow-md font-semibold text-white mt-4";

    const title = document.createElement("h3");
    title.className = "text-lg font-semibold mb-3";
    title.textContent = "Skill Setup";
    skillSetup.appendChild(title);

    const grid = document.createElement("div");
    grid.className = "grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-3";

    // === Helper functions ===
    const createCheckbox = (label, key) => {
      const container = document.createElement("label");
      container.className = "flex items-center gap-2 text-sm";

      const input = document.createElement("input");
      input.type = "checkbox";
      input.checked = !!combo.skillSetup?.[key];

      if (viewOnly) {
        container.style.pointerEvents = "none";
        input.classList.add("cursor-default", "opacity-100");
      } else {
        input.addEventListener("change", (e) => {
          combo.skillSetup = combo.skillSetup || {};
          combo.skillSetup[key] = e.target.checked;
          calculateComboStats(combo);
          renderCombos();
        });
      }

      container.appendChild(input);
      container.appendChild(document.createTextNode(label));
      return container;
    };

    const createSelect = (label, key, options) => {
      const container = document.createElement("div");
      container.className = "flex flex-col text-sm";

      const labelEl = document.createElement("label");
      labelEl.textContent = label;
      labelEl.className = "mb-1";

      const select = document.createElement("select");
      select.className =
        "bg-gray-800 border border-white text-white rounded px-2 py-1";

      if (viewOnly) {
        select.disabled = true;
        select.classList.add("opacity-50", "cursor-not-allowed");
      }

      options.forEach((opt) => {
        const option = document.createElement("option");
        option.value = opt.value;
        option.textContent = opt.label;
        select.appendChild(option);
      });

      select.value = combo.skillSetup?.[key] || options[0].value;

      if (!viewOnly) {
        select.addEventListener("change", (e) => {
          combo.skillSetup = combo.skillSetup || {};
          combo.skillSetup[key] = e.target.value;
          calculateComboStats(combo);
          renderCombos();
        });
      }

      container.appendChild(labelEl);
      container.appendChild(select);
      return container;
    };

    const createNumber = (label, key, min = 1, max = 10, defaultVal = 1) => {
      const container = document.createElement("div");
      container.className = "flex flex-col text-sm font-semibold";

      const labelEl = document.createElement("label");
      labelEl.textContent = label;
      labelEl.className = "mb-1";

      const input = document.createElement("input");
      input.type = "number";
      input.min = min;
      input.max = max;
      input.value = combo.skillSetup?.[key] || defaultVal;
      input.className =
        "bg-gray-800 border border-white text-white rounded px-2 py-1 w-20";

      if (viewOnly) {
        input.disabled = true;
        input.classList.add("opacity-50", "cursor-not-allowed");
      } else {
        input.addEventListener("input", (e) => {
          combo.skillSetup = combo.skillSetup || {};
          combo.skillSetup[key] = parseInt(e.target.value) || defaultVal;
          calculateComboStats(combo);
          renderCombos();
        });
      }

      container.appendChild(labelEl);
      container.appendChild(input);
      return container;
    };

    let checkboxes = [
      ["Trigger Slash - Lv 6+", "triggerSlashLv6"],
      ["Asura Aura - Active", "asuraAuraActive"],

      ["Swift Attack - Lv 10", "swiftAttackLv10"],
      ["Crescent Saber - Buff Active", "crescentSaberBuff"],

      ["Cross Fire - Release", "crossFireRelease"],
      ["Deadly Spear - Critical Hit", "deadlySpearCrit"],

      ["Magic Cannon - Release", "magicCannonRelease"],
      ["Tenryu Ransei - Buff Active", "tenryuBuffActive"],

      ["Goliath Punch - Release", "goliathPunchRelease"],
      ["Bouncing Blade - Get Hit", "bouncingBladeGetHit"],

      ["Dauntless - 90+ Stacks", "dauntlessStacks90"],
      ["Breathwork - Annihilator Lv 10", "breathworkAnni10"],

      ["Throwing Knife - Lv 10", "throwingKnifeLv10"],
      ["Rage Sword - Is Aggro Holder", "rageSwordAggro"],

      ["Next Q - No Halves Magic: Impact", "nextQ"],
      ["Slash Reaper - Hit", "slashReaperHit"],

      ["Aerial Cut - Additional Hit", "aerialCutAdditionalHit"],
    ];

    const column1 = document.createElement("div");
    const column2 = document.createElement("div");
    checkboxes.forEach(([label, key], idx) => {
      const checkbox = createCheckbox(label, key);
      (idx % 2 === 0 ? column1 : column2).appendChild(checkbox);
    });

    const column3 = document.createElement("div");
    column3.className = "space-y-3";

    column3.appendChild(
      createSelect("Shadowstep Skill Level", "shadowstepLevel", [
        { value: "1", label: "1~2" },
        { value: "2", label: "3~6" },
        { value: "3", label: "7~10" },
      ])
    );

    column3.appendChild(
      createNumber("Sprite Shield Skill Level", "spriteShieldLevel", 1, 10, 1)
    );

    column3.appendChild(
      createSelect("Minstrel Buff Active", "minstrelBuff", [
        { value: "1", label: "None" },
        {
          value: "2",
          label: "Healing-Fairy-Life-Fantasy",
        },
        { value: "3", label: "Passion-Wisdom" },
      ])
    );

    grid.appendChild(column1);
    grid.appendChild(column2);
    grid.appendChild(column3);

    skillSetup.appendChild(grid);
    return skillSetup;
  }

  function renderCombos() {
    comboContainer.innerHTML = "";
    comboData.forEach((combo) => {
      updateComboStats(combo);
      const comboEl = document.createElement("div");
      comboEl.className =
        "bg-gray-700 border p-4 rounded-lg shadow-lg max-w-[1400px] mx-auto mb-6";
      comboEl.style.position = "relative";

      comboEl.style.borderColor = "#ada196";
      comboEl.draggable = true;
      comboEl.dataset.comboId = combo.id;

      const header = document.createElement("div");
      header.className =
        "flex justify-between items-center mb-2 border-b border-[#ada196] pb-2";

      const nameInput = document.createElement("input");
      nameInput.type = "text";
      nameInput.value = combo.name || "";
      nameInput.placeholder = "Unnamed Combo";
      nameInput.className =
        "bg-gray-700 text-white px-2 py-1 w-full rounded border-none outline-none";
      nameInput.oninput = (e) => {
        combo.name = e.target.value;
      };

      const toggleBtn = document.createElement("button");
      toggleBtn.className =
        "ml-3 shrink-0 cursor-pointer bg-gray-600 p-1 rounded border border-gray-500 flex items-center justify-center";
      toggleBtn.style.width = "24px";
      toggleBtn.style.height = "24px";

      const icon = document.createElement("img");
      icon.src = combo.expanded
        ? "./icons/drawer_active.png"
        : "./icons/drawer_inactive.png";
      icon.alt = combo.expanded ? "Collapse" : "Expand";
      icon.style.width = "20px";
      icon.style.height = "20px";

      toggleBtn.appendChild(icon);
      toggleBtn.onclick = () => {
        combo.expanded = !combo.expanded;
        renderCombos();
      };

      header.appendChild(nameInput);
      header.appendChild(toggleBtn);

      comboEl.appendChild(header);

      if (combo.expanded) {
        // === FULL EXPANDED VIEW ===
        comboEl.appendChild(createSkillSetupUI(combo));

        const skillSelectionContainer = document.createElement("div");
        skillSelectionContainer.className = "text-white mb-2 select-none";
        skillSelectionContainer.textContent =
          "Click a skill slot to select skill/tag. Tag button selects tag.";
        comboEl.appendChild(skillSelectionContainer);

        const slotsContainer = document.createElement("div");
        slotsContainer.className = "flex flex-wrap justify-center gap-2 py-2";

        combo.skills.forEach((skillSlot, index) => {
          const slotEl = document.createElement("div");
          slotEl.className = "relative flex flex-col items-center group";

          const skillBtn = document.createElement("button");
          skillBtn.style.width = "88px";
          skillBtn.style.height = "88px";
          skillBtn.style.backgroundImage = `url('${skillSlotBg}')`;
          skillBtn.style.backgroundRepeat = "no-repeat";
          skillBtn.style.backgroundSize = "contain";
          skillBtn.style.backgroundPosition = "center";
          skillBtn.style.cursor = "pointer";
          skillBtn.style.border = "none";
          skillBtn.style.padding = "0";
          skillBtn.style.outline = "none";
          skillBtn.onclick = (e) => {
            e.stopPropagation();
            toggleSkillSelector(combo.id, index);
          };
          if (!viewOnly) {
            if (index !== 0) {
              const deleteSkillBtn = document.createElement("button");
              deleteSkillBtn.className =
                "absolute top-1 right-1 bg-red-900 hover:bg-red-800 text-white p-1 rounded-full z-20 shadow-md";
              deleteSkillBtn.title = "Remove skill";

              const trashIcon = document.createElement("img");
              trashIcon.src = "./icons/white_cross_icon.png";
              trashIcon.alt = "Delete";
              trashIcon.className = "w-4 h-4 pointer-events-none";

              deleteSkillBtn.appendChild(trashIcon);

              deleteSkillBtn.onclick = (e) => {
                e.stopPropagation();
                combo.skills.splice(index, 1);
                calculateComboStats(combo);
                renderCombos();
              };

              slotEl.appendChild(deleteSkillBtn);
            }
          }

          if (skillSlot.skillId) {
            skillBtn.style.position = "relative";

            const skillIconImg = document.createElement("img");
            skillIconImg.src = getSkillIcon(skillSlot.skillId);
            skillIconImg.style.width = "56px";
            skillIconImg.style.height = "auto";
            skillIconImg.style.marginTop = "8px";
            skillIconImg.style.marginLeft = "8px";
            skillIconImg.style.pointerEvents = "none";

            skillBtn.appendChild(skillIconImg);

            if (skillSlot.tag) {
              const tagIconImg = document.createElement("img");
              tagIconImg.src = `./icons/tag_${skillSlot.tag}_icon.png`;
              tagIconImg.alt = "Tag icon";
              tagIconImg.style.width = "36px";
              tagIconImg.style.height = "auto";
              tagIconImg.style.position = "absolute";
              tagIconImg.style.bottom = "4px";
              tagIconImg.style.right = "4px";
              tagIconImg.style.zIndex = "5";
              tagIconImg.style.pointerEvents = "none";

              skillBtn.appendChild(tagIconImg);
            }
          }

          slotEl.appendChild(skillBtn);

          const tagBtn = document.createElement("button");
          const isFirstSlot = index === 0;

          tagBtn.textContent = isFirstSlot
            ? ""
            : skillSlot.tag
            ? getTagName(skillSlot.tag)
            : "Tag";

          tagBtn.style.marginTop = "6px";
          tagBtn.style.border = "none";
          tagBtn.style.color = isFirstSlot ? "#1D4ED8" : "white";
          tagBtn.style.cursor = isFirstSlot ? "not-allowed" : "pointer";
          tagBtn.style.fontSize = "12px";
          tagBtn.style.fontWeight = "600";
          tagBtn.style.padding = "6px 12px";
          tagBtn.style.outline = "none";
          tagBtn.style.borderRadius = "6px";
          tagBtn.style.backgroundColor = isFirstSlot
            ? "transparent"
            : "#1D4ED8";
          tagBtn.style.boxShadow = isFirstSlot
            ? "none"
            : "0 2px 6px rgba(55, 65, 81, 0.6)";

          tagBtn.disabled = isFirstSlot;

          if (!viewOnly) {
            tagBtn.onclick = (e) => {
              if (isFirstSlot) return;
              e.stopPropagation();
              openTagSelector(combo.id, index);
            };
          }

          slotEl.appendChild(tagBtn);

          // Inline selector panel
          if (
            openSelector.comboId === combo.id &&
            openSelector.slotIndex === index &&
            !viewOnly
          ) {
            const panelContainer = document.createElement("div");
            panelContainer.className =
              "relative flex items-center justify-center";

            const selectorPanel = document.createElement("div");
            selectorPanel.className =
              "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 " +
              "w-[70%] max-h-[80%] bg-gray-800 border border-gray-400 rounded-lg p-5 " +
              "z-50 overflow-y-auto shadow-2xl flex flex-col gap-4";

            panelContainer.appendChild(selectorPanel);
            document.body.appendChild(panelContainer);

            function closePanel() {
              document.removeEventListener("mousedown", onDocMouseDown);
              document.removeEventListener("keydown", onKeyDown);
              panelContainer.remove();
            }

            function onDocMouseDown(e) {
              if (selectorPanel.contains(e.target)) return;
              closePanel();
            }

            function onKeyDown(e) {
              if (e.key === "Escape") closePanel();
            }

            setTimeout(function () {
              document.addEventListener("mousedown", onDocMouseDown);
              document.addEventListener("keydown", onKeyDown);
            }, 0);

            if (selectingTag) {
              // Tag selector
              window.comboTags.forEach((tag) => {
                const tagBtn = document.createElement("button");
                tagBtn.className =
                  "w-full flex items-center gap-3 p-3 bg-gray-700 hover:bg-gray-600 text-white rounded text-base text-left";

                tagBtn.onclick = () => setTag(combo.id, index, tag.id);

                const icon = document.createElement("img");
                icon.src = `./icons/tag_${tag.id}_icon.png`;
                icon.alt = `${tag.name} icon`;
                icon.className = "w-10 h-auto rounded-full flex-none";

                const text = document.createElement("div");
                text.innerHTML = `<div class="font-semibold text-lg">${tag.name}</div>
                      <div class="text-sm text-yellow-100">${tag.description}</div>`;

                tagBtn.appendChild(icon);
                tagBtn.appendChild(text);
                selectorPanel.appendChild(tagBtn);
              });
            } else {
              // Skill drawer container
              window.skillData.forEach((tree) => {
                const filteredSkills = tree.skills.filter((skill) => {
                  if (!skill.active) return false;
                  return index === 0 ? skill.starter : skill.middle;
                });

                if (filteredSkills.length === 0) return;
                const drawer = document.createElement("div");
                drawer.className =
                  "bg-gray-800 rounded-lg border border-blue-400";

                const drawerHeader = document.createElement("div");
                drawerHeader.className =
                  "bg-gray-600 hover:bg-gray-500 rounded-lg border font-semibold text-white border-blue-400 w-full p-3 flex items-center gap-3 cursor-pointer";

                const treeIcon = document.createElement("img");
                treeIcon.src = tree.icon;
                treeIcon.alt = tree.label;
                treeIcon.className = "w-8 h-auto rounded-full";

                const treeLabel = document.createElement("span");
                treeLabel.textContent = tree.label;

                drawerHeader.appendChild(treeIcon);
                drawerHeader.appendChild(treeLabel);

                const drawerContent = document.createElement("div");
                drawerContent.className =
                  "px-5 py-3 bg-gray-800 space-y-3 hidden w-full max-h-[60vh] overflow-y-auto";

                let isOpen = false;
                drawerHeader.onclick = () => {
                  isOpen = !isOpen;
                  drawerContent.classList.toggle("hidden", !isOpen);
                };

                tree.skills
                  .filter((skill) => {
                    if (!skill.active) return false;
                    if (!skill.starter && !skill.middle) return false;
                    return true;
                  })
                  .forEach((skill) => {
                    const isStarterSlot = index === 0;
                    const isUsable = isStarterSlot
                      ? skill.starter
                      : skill.middle;

                    const skillContainer = document.createElement("div");
                    skillContainer.className =
                      "relative flex flex-col gap-4 items-center";

                    if (!isUsable) {
                      const unavailableMessage = document.createElement("div");

                      unavailableMessage.className =
                        "absolute top-0 left-0 right-0 text-center text-red-400 font-semibold text-base bg-gray-700 rounded-md p-1 flex items-center justify-center";

                      unavailableMessage.style.height = "100%";
                      unavailableMessage.style.background =
                        "rgba(55, 65, 81, 0.6)";
                      unavailableMessage.style.zIndex = "10";

                      if (isStarterSlot && !skill.starter) {
                        unavailableMessage.textContent = "Starter Unavailable";
                      } else if (!isStarterSlot && !skill.middle) {
                        unavailableMessage.textContent = "Middle Unavailable";
                      }

                      unavailableMessage.style.display = "flex";
                      unavailableMessage.style.alignItems = "center";
                      unavailableMessage.style.justifyContent = "center";

                      skillContainer.appendChild(unavailableMessage);
                    }

                    // Create the button for the skill
                    const skillBtn = document.createElement("button");
                    skillBtn.className =
                      "w-full flex items-center justify-between gap-4 p-4 bg-gray-600 hover:bg-gray-500 rounded-md text-white text-base transition";

                    const isSkillSelected = combo.skills.some(
                      (slot) => slot.skillId === skill.id
                    );

                    // Disable skill if it's unavailable
                    if (!isUsable || isSkillSelected) {
                      skillBtn.disabled = true;
                      skillBtn.classList.add(
                        "opacity-50",
                        "cursor-not-allowed"
                      );
                    } else {
                      skillBtn.onclick = () => {
                        setSkill(combo.id, index, skill.id);
                      };
                    }

                    // Skill icon
                    const icon = document.createElement("img");
                    icon.src = `./icons/skills/sk_${skill.id}.png`;
                    icon.alt = skill.name;
                    icon.className = "w-9 h-auto flex-none rounded";

                    const info = document.createElement("div");
                    info.className = "flex flex-col text-left";

                    const skillName = document.createElement("div");
                    skillName.className = "font-semibold";
                    skillName.textContent = skill.name;

                    const skillCost = document.createElement("div");
                    skillCost.className = "text-white text-sm font-semibold";
                    skillCost.textContent = `MP: ${skill.cost}`;

                    info.appendChild(skillName);
                    info.appendChild(skillCost);

                    const leftGroup = document.createElement("div");
                    leftGroup.className = "flex items-center gap-4";
                    leftGroup.appendChild(icon);
                    leftGroup.appendChild(info);
                    skillBtn.appendChild(leftGroup);

                    // Add available weapon icons
                    const availableIcons = document.createElement("div");
                    availableIcons.className = "flex gap-1 items-center";

                    // Loop over skills
                    if (skill.available && Array.isArray(skill.available)) {
                      skill.available.forEach((weapon) => {
                        // Container box
                        const iconBox = document.createElement("div");
                        iconBox.className =
                          "relative w-8 h-8 flex items-center justify-center";
                        iconBox.style.position = "relative";

                        // Background layer
                        const bgLayer = document.createElement("img");
                        bgLayer.src = "./icons/itembox_bg.png";
                        bgLayer.alt = "bg";
                        bgLayer.className = "absolute inset-0 w-full h-full";
                        bgLayer.style.zIndex = "0";

                        // Weapon icon
                        const weaponIcon = document.createElement("img");
                        weaponIcon.src = `./icons/${weapon}_icon.png`;
                        weaponIcon.alt = weapon;
                        weaponIcon.className = "w-5 h-auto z-10";
                        weaponIcon.style.pointerEvents = "none";

                        // Border layer
                        const borderLayer = document.createElement("img");
                        borderLayer.src = "./icons/itembox_border.png";
                        borderLayer.alt = "border";
                        borderLayer.className =
                          "absolute inset-0 w-full h-full";
                        borderLayer.style.zIndex = "20";
                        borderLayer.style.pointerEvents = "none";

                        iconBox.appendChild(bgLayer);
                        iconBox.appendChild(weaponIcon);
                        iconBox.appendChild(borderLayer);

                        availableIcons.appendChild(iconBox);
                      });
                    }

                    skillBtn.appendChild(availableIcons);
                    skillContainer.appendChild(skillBtn);

                    drawerContent.appendChild(skillContainer);
                  });

                drawer.appendChild(drawerHeader);
                drawer.appendChild(drawerContent);
                selectorPanel.appendChild(drawer);
              });
            }

            slotEl.appendChild(panelContainer);
          }

          slotsContainer.appendChild(slotEl);
        });

        if (combo.skills.length < maxSlots && !viewOnly) {
          const addSlotEl = document.createElement("div");
          addSlotEl.className = "flex items-center";

          const addSlotBtn = document.createElement("button");
          addSlotBtn.style.width = "64px";
          addSlotBtn.style.height = "64px";
          addSlotBtn.style.backgroundImage = `url('${addSlotIcon}')`;
          addSlotBtn.style.backgroundRepeat = "no-repeat";
          addSlotBtn.style.backgroundSize = "contain";
          addSlotBtn.style.backgroundPosition = "center";
          addSlotBtn.style.cursor = "pointer";
          addSlotBtn.style.marginTop = "-15px";
          addSlotBtn.style.border = "none";
          addSlotBtn.style.padding = "0";
          addSlotBtn.style.outline = "none";
          addSlotBtn.onclick = () => addSkillSlot(combo.id);

          addSlotEl.appendChild(addSlotBtn);
          slotsContainer.appendChild(addSlotEl);
        }
        updateComboStats(combo);
        // === Stats Table Panel Section ===
        const statsPanel = document.createElement("div");
        statsPanel.className =
          "mt-4 p-2 sm:p-4 bg-gray-800 border rounded-lg text-white text-xs sm:text-sm";

        const tableWrapper = document.createElement("div");
        tableWrapper.className = "overflow-x-auto";

        const table = document.createElement("table");
        table.className = "table-auto w-full border-collapse min-w-[600px]"; // Min width to keep table readable

        const thead = document.createElement("thead");
        const headerRow = document.createElement("tr");

        const headers = [
          "Skill Position",
          "Skill",
          "Skill Tag",
          "Damage%",
          "MP Cost",
          "Weapon Available",
        ];
        headers.forEach((headerText, index) => {
          const th = document.createElement("th");

          th.className =
            index === 0
              ? "border-b px-4 py-2 text-center"
              : "border-b px-4 py-2 text-left";

          th.textContent = headerText;
          headerRow.appendChild(th);
        });

        thead.appendChild(headerRow);
        table.appendChild(thead);

        let availableMp = 2000;

        const tbody = document.createElement("tbody");

        // Add rows for each skill in the combo
        combo.skills.forEach((skillSlot, index) => {
          const row = document.createElement("tr");

          // Skill Position
          const tdPosition = document.createElement("td");
          tdPosition.className = "border-b px-4 py-2 text-center";
          tdPosition.textContent = index + 1;
          row.appendChild(tdPosition);

          // Skill Icon + Name
          const tdName = document.createElement("td");
          tdName.className = "border-b px-4 py-2";
          const skill = getSkillData(skillSlot.skillId);
          const skillIcon = document.createElement("img");
          skillIcon.src = skill
            ? getSkillIcon(skillSlot.skillId)
            : `./icons/question_mark_icon.png`;
          skillIcon.alt = skill ? skill.name : "Skill";
          skillIcon.className = "w-6 h-auto mr-2 inline";
          tdName.textContent = skill ? skill.name : "No Skill Selected";
          tdName.prepend(skillIcon);
          row.appendChild(tdName);

          // Skill Tag
          const tdTag = document.createElement("td");
          tdTag.className = "border-b px-4 py-2";

          if (index === 0) {
            // First slot: show "Unavailable"
            tdTag.textContent = "Unavailable";
          } else {
            // Normal tag display
            const tagData = window.comboTags.find(
              (tag) => tag.id === skillSlot.tag
            );
            const tagName = tagData ? tagData.name : "";
            const tagContainer = document.createElement("div");
            tagContainer.className = "flex items-center gap-2";

            const tagIcon = tagData
              ? `./icons/tag_${skillSlot.tag}_icon.png`
              : `./icons/question_mark_icon.png`;

            const iconImg = document.createElement("img");
            iconImg.src = tagIcon;
            iconImg.alt = `${tagName} icon`;
            iconImg.className = "w-6 h-auto";
            tagContainer.appendChild(iconImg);

            const tagNameElement = document.createElement("span");
            tagNameElement.textContent = tagName;
            tagContainer.appendChild(tagNameElement);

            tdTag.appendChild(tagContainer);
          }

          row.appendChild(tdTag);

          // Skill Damage%
          const tdDamage = document.createElement("td");
          tdDamage.className = "border-b px-4 py-2";
          tdDamage.textContent = `${skillSlot.calculatedDamage || 0}%`;
          row.appendChild(tdDamage);

          // Skill MP Cost (Display the original MP cost, even if it failed to cast)
          const tdMpCost = document.createElement("td");
          tdMpCost.className = "border-b px-4 py-2";

          const skillMpCost = skillSlot.calculatedMpCost || 0;
          tdMpCost.textContent = skillMpCost;

          // Now, let's handle the "failed to cast" logic
          const isFailedToCast = skillSlot.calculatedMpCost > availableMp;

          if (isFailedToCast) {
            tdMpCost.innerHTML = `${skillMpCost} <span class="text-red-500">(Failed to cast, not enough MP)</span>`;
          } else {
            availableMp -= skillSlot.calculatedMpCost;
          }

          row.appendChild(tdMpCost);

          // Weapon Available
          const tdWeapon = document.createElement("td");
          tdWeapon.className = "border-b px-4 py-2";

          // Only add icons if skill is defined and has `available`
          if (skill && Array.isArray(skill.available)) {
            const iconContainer = document.createElement("div");
            iconContainer.className = "flex gap-1";

            skill.available.forEach((weapon) => {
              const boxWrapper = document.createElement("div");
              boxWrapper.className = "relative w-6 h-6";

              // Border
              const border = document.createElement("img");
              border.src = "./icons/itembox_border.png";
              border.className = "absolute inset-0 w-full h-full z-10";
              boxWrapper.appendChild(border);

              // Background
              const bg = document.createElement("img");
              bg.src = "./icons/itembox_bg.png";
              bg.className = "absolute inset-0 w-full h-full z-0";
              boxWrapper.appendChild(bg);

              // Weapon icon
              const icon = document.createElement("img");
              icon.src = `./icons/${weapon}_icon.png`;
              icon.alt = weapon;
              icon.className =
                "absolute inset-0 w-full h-full z-20 object-contain";
              boxWrapper.appendChild(icon);

              iconContainer.appendChild(boxWrapper);
            });

            tdWeapon.appendChild(iconContainer);
          }

          row.appendChild(tdWeapon);

          tbody.appendChild(row);
        });

        // Last Row (Total MP Needed)
        const lastRowNeeded = document.createElement("tr");
        const tdLastRowNeeded = document.createElement("td");
        tdLastRowNeeded.colSpan = 5;
        tdLastRowNeeded.className = "text-right px-4 py-2 font-bold";
        tdLastRowNeeded.textContent = "Total MP Needed:";
        lastRowNeeded.appendChild(tdLastRowNeeded);

        const tdTotalMpNeeded = document.createElement("td");
        tdTotalMpNeeded.className = "border-t px-4 py-2";
        tdTotalMpNeeded.textContent = combo.mpNeeded;
        lastRowNeeded.appendChild(tdTotalMpNeeded);

        tbody.appendChild(lastRowNeeded);

        // Last Row (Total MP Used)
        const lastRowUsed = document.createElement("tr");
        const tdLastRowUsed = document.createElement("td");
        tdLastRowUsed.colSpan = 5;
        tdLastRowUsed.className = "text-right px-4 py-2 font-bold";
        tdLastRowUsed.textContent = "Total MP Used:";
        lastRowUsed.appendChild(tdLastRowUsed);

        const tdTotalMpUsed = document.createElement("td");
        tdTotalMpUsed.className = "border-t px-4 py-2";
        tdTotalMpUsed.textContent = combo.mpUsed;

        if (combo.mpUsed > combo.mpNeeded) {
          tdTotalMpUsed.classList.add("text-red-500");
          tdTotalMpUsed.innerHTML += ` <span>(Combo failed, not enough MP)</span>`;
        }

        lastRowUsed.appendChild(tdTotalMpUsed);

        tbody.appendChild(lastRowUsed);

        table.appendChild(tbody);
        tableWrapper.appendChild(table);
        statsPanel.appendChild(tableWrapper);

        comboEl.appendChild(slotsContainer);
        comboEl.appendChild(statsPanel);

        if (!viewOnly) {
          const trashBtnContainer = document.createElement("div");
          trashBtnContainer.id = "deleteComboContainer";
          trashBtnContainer.className = "mt-4";

          const trashBtn = document.createElement("button");
          trashBtn.className =
            "w-full bg-red-600 hover:bg-red-700 text-white p-3 rounded-lg";
          trashBtn.textContent = "Delete Combo";
          trashBtn.onclick = () => {
            createConfirmationModal(() => {
              comboData = comboData.filter((c) => c.id !== combo.id);
              renderCombos();
            });
          };

          trashBtnContainer.appendChild(trashBtn);
          comboEl.appendChild(trashBtnContainer);
        }
      } else {
        const summary = document.createElement("div");
        summary.className = "flex gap-2 justify-center py-2";

        combo.skills.forEach((skillSlot) => {
          const slotEl = document.createElement("div");
          slotEl.style.width = "66px";
          slotEl.style.height = "66px";
          slotEl.style.backgroundImage = `url('${skillSlotBg}')`;
          slotEl.style.backgroundRepeat = "no-repeat";
          slotEl.style.backgroundSize = "contain";
          slotEl.style.backgroundPosition = "center";
          slotEl.style.display = "flex";
          slotEl.style.alignItems = "center";
          slotEl.style.justifyContent = "center";
          slotEl.style.borderRadius = "0.5rem";
          slotEl.style.cursor = "default";

          const skillIcon = document.createElement("img");
          skillIcon.src = skillSlot.skillId
            ? getSkillIcon(skillSlot.skillId)
            : "./icons/question_mark_icon.png";
          skillIcon.alt = skillSlot.skillId
            ? `Skill ${skillSlot.skillId}`
            : "Empty slot";
          skillIcon.style.width = "42px";
          skillIcon.style.height = "auto";
          skillIcon.style.marginRight = "10px";
          skillIcon.style.pointerEvents = "none";
          if (skillSlot.tag) {
            const tagIconImg = document.createElement("img");
            tagIconImg.src = `./icons/tag_${skillSlot.tag}_icon.png`;
            tagIconImg.alt = "Tag icon";
            tagIconImg.style.width = "24px";
            tagIconImg.style.height = "auto";
            tagIconImg.style.position = "absolute";
            tagIconImg.style.bottom = "4px";
            tagIconImg.style.right = "4px";
            tagIconImg.style.zIndex = "5";
            tagIconImg.style.pointerEvents = "none";

            slotEl.style.position = "relative";
            slotEl.appendChild(tagIconImg);
          }

          slotEl.appendChild(skillIcon);
          summary.appendChild(slotEl);
        });

        comboEl.appendChild(summary);
      }
      const trashBtn = document.createElement("button");
      trashBtn.className =
        "absolute bottom-2 right-2 bg-transparent p-1 rounded hover:bg-gray-600";
      trashBtn.onclick = () => {
        comboData = comboData.filter((c) => c.id !== combo.id);
        renderCombos();
      };

      comboContainer.appendChild(comboEl);
      comboEl.addEventListener("dragstart", (e) => {
        draggedComboId = combo.id;
        e.dataTransfer.effectAllowed = "move";
        comboEl.style.opacity = "0.5";
      });

      comboEl.addEventListener("dragend", () => {
        draggedComboId = null;
        comboEl.style.opacity = "1";
      });

      comboEl.addEventListener("dragover", (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
      });

      comboEl.addEventListener("drop", (e) => {
        e.preventDefault();
        if (draggedComboId !== null && draggedComboId !== combo.id) {
          const draggedIndex = comboData.findIndex(
            (c) => c.id === draggedComboId
          );
          const targetIndex = comboData.findIndex((c) => c.id === combo.id);
          const [movedCombo] = comboData.splice(draggedIndex, 1);
          comboData.splice(targetIndex, 0, movedCombo);
          renderCombos();
        }
      });
    });
  }

  function getSkillIcon(skillId) {
    if (!skillId) return "";
    return `./icons/skills/sk_${skillId}.png`;
  }

  function getTagName(tagId) {
    if (!window.comboTags) return "";
    const tag = window.comboTags.find((t) => t.id === tagId);
    return tag ? tag.name : "";
  }

  // Toggle selector panel open/close
  function toggleSkillSelector(comboId, slotIndex) {
    if (
      openSelector.comboId === comboId &&
      openSelector.slotIndex === slotIndex &&
      !selectingTag
    ) {
      // Close if already open for skill
      openSelector = { comboId: null, slotIndex: null };
    } else {
      openSelector = { comboId, slotIndex };
      selectingTag = false;
    }
    updateComboStats(comboId);
    renderCombos();
  }

  // Open tag selector inline panel
  function openTagSelector(comboId, slotIndex) {
    if (
      openSelector.comboId === comboId &&
      openSelector.slotIndex === slotIndex &&
      selectingTag
    ) {
      openSelector = { comboId: null, slotIndex: null };
    } else {
      openSelector = { comboId, slotIndex };
      selectingTag = true;
    }
    updateComboStats(comboId);
    renderCombos();
  }

  function setSkill(comboId, slotIndex, skillId) {
    const combo = comboData.find((c) => c.id === comboId);
    if (!combo) return;
    const slot = combo.skills[slotIndex];
    if (!slot) return;

    slot.skillId = skillId;
    slot.tag = null;

    openSelector = { comboId: null, slotIndex: null };
    updateComboStats(comboId);
    renderCombos();
  }

  function setTag(comboId, slotIndex, tagId) {
    const combo = comboData.find((c) => c.id === comboId);
    if (!combo) return;
    const slot = combo.skills[slotIndex];
    if (!slot) return;

    slot.tag = tagId;

    openSelector = { comboId: null, slotIndex: null };
    updateComboStats(comboId);
    renderCombos();
  }
  // Close selector panel when clicking outside
  document.addEventListener("click", (e) => {
    if (openSelector.comboId === null) return;

    const comboEl = comboContainer.querySelector(
      `[data-combo-id='${openSelector.comboId}']`
    );
    if (!comboEl) return;

    const selectorPanel = comboEl.querySelector("div.absolute.top-0.left-full");

    if (!selectorPanel) return;

    if (selectorPanel.contains(e.target)) return;

    openSelector = { comboId: null, slotIndex: null };
    renderCombos();
  });
  function recalculateAllCombos() {
    comboData.forEach((combo) => {
      calculateComboStats(combo);
    });
    renderCombos();
  }
  function setGearSetupReadOnly() {
    const inputIds = ["hpPercent", "mp", "ninjutsuReduction"];
    const selectIds = ["mainWeapon", "subWeapon"];

    inputIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        el.disabled = viewOnly;
        el.classList.toggle("opacity-50", viewOnly);
        el.classList.toggle("cursor-not-allowed", viewOnly);
      }
    });

    selectIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        el.disabled = viewOnly;
        el.classList.toggle("opacity-50", viewOnly);
        el.classList.toggle("cursor-not-allowed", viewOnly);
      }
    });
  }

  function setupStatEquipmentListeners() {
    const inputIds = ["hpPercent", "mp", "ninjutsuReduction"];
    const selectIds = ["mainWeapon", "subWeapon"];

    inputIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener("input", () => {
          recalculateAllCombos();
        });
      }
    });

    selectIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener("change", () => {
          recalculateAllCombos();
        });
      }
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    setupStatEquipmentListeners();
  });
  function generateCode(length = 16) {
    const byteLength = Math.ceil(length / 2);
    const bytes = new Uint8Array(byteLength);
    crypto.getRandomValues(bytes);
    return Array.from(bytes)
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("")
      .slice(0, length);
  }
  document.addEventListener("DOMContentLoaded", () => {
    const saveLoadPanel = document.getElementById("saveLoadPanel");
    const message = document.getElementById("message");

    // Check session status
    fetch("session_status.php")
      .then((res) => res.json())
      .then((data) => {
        if (data.loggedIn) {
          saveLoadPanel.classList.remove("hidden");
          message.classList.add("hidden");
          loadSavedCombos();
        } else {
          saveLoadPanel.classList.add("hidden");
          message.classList.remove("hidden");
        }
      });

    // Save new combo
    document.getElementById("saveNewBtn")?.addEventListener("click", () => {
      const name = document.getElementById("comboName").value.trim();
      const description = document
        .getElementById("comboDescription")
        .value.trim();
      const privacy = document.getElementById("comboPrivacy").value;
      const code = generateCode();

      if (!name) {
        showToast("Please enter a name for the combo.", "error");
        return;
      }

      const cleanedCombos = comboData.map((combo) => {
        const cleanedSkills = combo.skills.filter(
          (skill) => skill.skillId !== null
        );
        return { ...combo, skills: cleanedSkills };
      });

      const filteredCombos = cleanedCombos.filter(
        (combo) => combo.skills.length > 0
      );
      comboData = filteredCombos;
      const finalComboSave = filteredCombos.map((combo) =>
        calculateComboStats(combo)
      );
      if (filteredCombos.length === 0) {
        showToast(
          "You must include at least one combo with a valid skill.",
          "error"
        );
        return;
      }

      const data = {
        name,
        description,
        privacy,
        code,
        comboData: comboData,
        gearData: getStatEquipmentSetupValues(),
      };

      fetch("get_function/save_combo.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then(async (res) => {
          const text = await res.text();
          const json = JSON.parse(text);
          if (json.success) {
            loadSavedCombos();
            loadCombo(code);
            showToast("Combo saved successfully!");
          } else {
            showToast(json.message || "Failed to save combo.", "error");
          }
        })
        .catch((err) => {
          showToast("Fetch error while saving combo.", "error");
        });
    });
  });

  function loadSavedCombos() {
    fetch("get_function/load_combos.php")
      .then((res) => res.json())
      .then((data) => {
        const comboList = document.getElementById("savedCombosList");
        comboList.innerHTML = '<option value="">--- Choose Combo ---</option>';

        if (data.success && Array.isArray(data.combos)) {
          data.combos.forEach((combo) => {
            const option = document.createElement("option");
            option.value = combo.code;
            option.textContent = combo.name;
            comboList.appendChild(option);
          });
        } else {
          showToast("No saved combos found.", "error");
        }
      })
      .catch((err) => {
        showToast("Error loading combos.", "error");
      });
  }

  function loadCombo(code, readOnly = false) {
    fetch(`get_function/load_combos.php?code=${code}`)
      .then((res) => res.json())
      .then((data) => {
        try {
          if (!data.success || !data.combo) {
            showToast("Failed to load combo.", "error");
            return;
          }
        } catch (err) {}
        const combo = data.combo;
        backgroundCode = combo.code || code;

        viewOnly = readOnly;
        comboData = Array.isArray(combo.comboData) ? combo.comboData : [];
        gearSetup = combo.gearSetup || {};

        renderGearSetupUI(gearSetup);
        renderCombos();
        if (viewOnly) {
          setGearSetupReadOnly();
          document.getElementById("functionPanel")?.classList.add("hidden");
          document.getElementById("reminder-message")?.classList.add("hidden");
          const createComboContainer = document.getElementById(
            "createCombo-container"
          );
          if (createComboContainer) {
            createComboContainer.remove();
          }

          updateComboInfo({
            name: combo.name,
            description: combo.description,
            created_at: combo.created_at,
            updated_at: combo.updated_at,
            owner: combo.owner,
          });
        } else {
          document.getElementById("editPanel").classList.remove("hidden");
          document.getElementById("editName").value = combo.name || "";
          document.getElementById("editDescription").value =
            combo.description || "";
          document.getElementById("editPrivacy").value =
            combo.privacy || "private";

          const shareURL = `${window.location.origin}${window.location.pathname}?code=${combo.code}`;
          const shareInput = document.getElementById("editShareURL");
          if (shareInput) shareInput.value = shareURL;
        }

        showToast(`Loaded combo: ${combo.name}`, "success");
      })
      .catch((err) => {
        showToast("Error loading combo.", "error");
      });
  }
  function updateComboInfo(data) {
    const panel = document.getElementById("comboInfo");
    if (!panel) return;

    panel.classList.remove("hidden");

    const formatDateOnly = (dt) => {
      if (!dt) return "Unknown";
      const date = new Date(dt);
      return isNaN(date) ? "Invalid Date" : date.toISOString().slice(0, 10);
    };

    document.getElementById("comboNameDisplay").textContent =
      data.name || "Unnamed Combo";
    document.getElementById("comboOwnerDisplay").textContent = `By ${
      data.owner || "Unknown"
    }`;
    document.getElementById("comboCreated").textContent = formatDateOnly(
      data.created_at
    );
    document.getElementById("comboUpdated").textContent = formatDateOnly(
      data.updated_at
    );
    document.getElementById("comboDescriptionDisplay").textContent =
      data.description || "No description.";
  }
  function deleteCombo(code) {
    if (!confirm("Are you sure you want to delete this combo?")) return;

    fetch("get_function/delete_combo.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          showToast("Combo deleted successfully!");
          loadSavedCombos();

          if (backgroundCode === code) {
            backgroundCode = null;
            comboData = [];
            gearSetup = {};

            // Clear the UI
            renderGearSetupUI({});
            renderCombos();

            // Hide edit/view panels
            document.getElementById("editPanel")?.classList.add("hidden");

            // ✅ Clear form inputs
            document.getElementById("editName").value = "";
            document.getElementById("editDescription").value = "";
            document.getElementById("editPrivacy").value = "private";

            // Optional: clear share URL if you're using it
            const shareInput = document.getElementById("editShareURL");
            if (shareInput) shareInput.value = "";
          }
        } else {
          showToast(data.message || "Error deleting combo.", "error");
        }
      })
      .catch((err) => {
        showToast("An error occurred while deleting combo.", "error");
      });
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
  let backgroundCode = generateCode(50);
  function renderGearSetupUI(setup) {
    document.getElementById("hpPercent").value = setup.hpPercent || 100;
    document.getElementById("mp").value = setup.mp || 2000;
    document.getElementById("mainWeapon").value =
      setup.mainWeapon || "barehand";
    document.getElementById("subWeapon").value = setup.subWeapon || "none";
    document.getElementById("ninjutsuReduction").value =
      setup.ninjutsuReduction || 0;
  }
  document.getElementById("copyLinkBtn").addEventListener("click", () => {
    const input = document.getElementById("editShareURL");
    input.select();
    input.setSelectionRange(0, 99999);
    document.execCommand("copy");
    showToast("Link copied to clipboard!");
  });
  document.getElementById("deleteComboBtn")?.addEventListener("click", () => {
    const code = document.getElementById("savedCombosList").value.trim();
    if (code) {
      deleteCombo(code);
    } else {
      showToast("Please select a build to delete.", "error");
    }
  });
  document.getElementById("saveChangesBtn")?.addEventListener("click", () => {
    const code = backgroundCode;
    const name = document.getElementById("editName").value.trim();
    const description = document.getElementById("editDescription").value.trim();
    const privacy = document.getElementById("editPrivacy").value;

    if (!code) return showToast("No combo selected to update.", "error");
    if (!name) return showToast("Name cannot be empty.", "error");

    const currentComboData = comboData || [];
    const currentGearSetup = gearSetup || getStatEquipmentSetupValues();

    const updatedData = {
      code,
      name,
      description,
      privacy,
      comboData: currentComboData,
      gearSetup: currentGearSetup,
    };

    fetch("get_function/update_combo.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    })
      .then(async (res) => {
        const text = await res.text();
        try {
          return JSON.parse(text);
        } catch (e) {
          throw e;
        }
      })
      .then((data) => {
        if (data.success) {
          showToast("Combo updated successfully!");
          loadSavedCombos();
        } else {
          showToast(data.message || "Failed to update combo.", "error");
        }
      })
      .catch((err) => {
        showToast("An error occurred while updating.", "error");
      });
  });

  // Handle shared link loading
  const sharedCode = new URLSearchParams(window.location.search).get("code");
  if (sharedCode) {
    loadCombo(sharedCode, true);
  }
  document.getElementById("loadComboBtn")?.addEventListener("click", () => {
    const code = document.getElementById("savedCombosList").value.trim();
    if (code) {
      loadCombo(code);
    } else {
      showToast("Please select a build to load.", "error");
    }
  });
  return {
    createCombo,
    addSkillSlot,
    updateComboStats,
  };
})();
