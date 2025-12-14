window.CHARACTERSTATS = {
  level: 1,
  STR: 1,
  INT: 1,
  VIT: 1,
  AGI: 1,
  DEX: 1,
  extraType: "NONE",
  extraValue: 0,
};
window.allowedSubWeaponTypes = {
  barehand: [
    "None",
    "Shield",
    "Dagger",
    "Arrow",
    "Magic Device",
    "Knuckles",
    "Ninjutsu Scroll",
  ],
  "one handed sword": [
    "None",
    "Shield",
    "Dagger",
    "Arrow",
    "Magic Device",
    "Knuckles",
    "Ninjutsu Scroll",
    "One Handed Sword",
  ],
  "two handed sword": ["None"],
  bow: ["None", "Arrow", "Katana"],
  bowgun: ["None", "Shield", "Dagger", "Arrow", "Magic Device", "Knuckles"],
  staff: [
    "None",
    "Shield",
    "Dagger",
    "Arrow",
    "Magic Device",
    "Knuckles",
    "Ninjutsu Scroll",
  ],
  "magic device": ["None", "Ninjutsu Scroll"],
  knuckles: ["None", "Shield", "Dagger", "Arrow", "Magic Device"],
  halberd: ["None", "Arrow", "Dagger"],
  katana: ["None", "Dagger", "Ninjutsu Scroll"],
};

window.avatarStats = [
  "--- None ---",
  "MaxHP",
  "MaxHP%",
  "MaxMP",
  "STR",
  "INT",
  "VIT",
  "AGI",
  "DEX",
  "STR%",
  "INT%",
  "VIT%",
  "AGI%",
  "DEX%",
  "Weapon ATK",
  "Weapon ATK%",
  "ATK",
  "ATK%",
  "MATK",
  "MATK%",
  "Stability",
  "Accuracy",
  "Accuracy%",
  "Dodge",
  "Dodge%",
  "DEF",
  "DEF%",
  "MDEF",
  "MDEF%",
  "ASPD",
  "ASPD%",
  "CSPD",
  "CSPD%",
  "Natural HP Regen",
  "Natural HP Regen%",
  "Natural MP Regen",
  "Natural MP Regen%",
  "Attack MP Recovery",
  "Critical Rate",
  "Critical Rate%",
  "Critical Damage",
  "Critical Damage%",
  "Ailment Resistance%",
  "Guard Recharge%",
  "Guard Power%",
  "Evasion Recharge%",
  "Physical Resistance%",
  "Magic Resistance%",
  "Physical Pierce%",
  "Magic Pierce%",
  "Neutral Resistance%",
  "Light Resistance%",
  "Dark Resistance%",
  "Fire Resistance%",
  "Water Resistance%",
  "Earth Resistance%",
  "Wind Resistance%",
  "Damage To Neutral%",
  "Damage To Light%",
  "Damage To Dark%",
  "Damage To Fire%",
  "Damage To Water%",
  "Damage To Wind%",
  "Damage To Earth%",
  "Physical Barrier",
  "Magic Barrier",
  "Fractional Barrier%",
  "Aggro%",
  "Long Range Damage%",
  "Short Range Damage%",
  "Guard Break",
  "Additional Melee%",
  "Additional Magic%",
  "Reflect%",
  "Barrier Cooldown%",
];
window.potionStats = [
  "--- None ---",
  "MaxHP",
  "MaxHP%",
  "MaxMP",
  "Critical Rate",
  "Critical Rate%",
  "Attack MP Recovery",
  "ASPD",
  "ASPD%",
  "Motion Speed",
  "CSPD",
  "CSPD%",
  "Magic Pierce%",
  "Physical Pierce%",
  "Aggro%",
  "Dodge",
  "Magic Resistance%",
  "Physical Resistance%",
  "DEF",
  "DEF%",
  "MDEF",
  "MDEF%",
  "Accuracy",
  "Accuracy%",
  "Weapon ATK",
  "Weapon ATK%",
  "Physical Resistance%",
  "Neutral Resistance%",
  "Light Resistance%",
  "Dark Resistance%",
  "Fire Resistance%",
  "Water Resistance%",
  "Earth Resistance%",
  "Wind Resistance%",
  "Damage To Neutral%",
  "Damage To Light%",
  "Damage To Dark%",
  "Damage To Fire%",
  "Damage To Water%",
  "Damage To Wind%",
  "Damage To Earth%",
  "Ailment Resistance%",
  "Unsheathe Attack",
  "Unsheathe Attack%",
];

window.foodBuffStats = [
  "--- None ---",
  "STR",
  "INT",
  "VIT",
  "AGI",
  "DEX",
  "Accuracy",
  "Dodge",
  "DEF",
  "MDEF",
  "MATK",
  "Weapon ATK",
  "Physical Resistance%",
  "Magic Resistance%",
  "Neutral Resistance%",
  "Light Resistance%",
  "Dark Resistance%",
  "Fire Resistance%",
  "Water Resistance%",
  "Earth Resistance%",
  "Wind Resistance%",
  "Damage To Neutral%",
  "Damage To Light %",
  "Damage To Dark%",
  "Damage To Fire%",
  "Damage To Water%",
  "Damage To Wind%",
  "Damage To Earth%",
  "Physical Barrier",
  "Magic Barrier",
  "Fractional Barrier%",
  "Critical Rate",
  "Attack MP Recovery",
  "Aggro%",
  "MaxMP",
  "MaxHP",
];
window.availableStats = {
  MaxHP: { stat: "MaxHP", type: "Flat" },
  "MaxHP%": { stat: "MaxHP", type: "Percentage" },
  MaxMP: { stat: "MaxMP", type: "Flat" },
  "ATK%": { stat: "ATK", type: "Percentage" },
  ATK: { stat: "ATK", type: "Flat" },
  "MATK%": { stat: "MATK", type: "Percentage" },
  MATK: { stat: "MATK", type: "Flat" },
  "Physical Pierce%": { stat: "Physical Pierce", type: "Percentage" },
  "Magic Pierce%": { stat: "Magic Pierce", type: "Percentage" },
  "STR%": { stat: "STR", type: "Percentage" },
  "INT%": { stat: "INT", type: "Percentage" },
  "VIT%": { stat: "VIT", type: "Percentage" },
  "AGI%": { stat: "AGI", type: "Percentage" },
  "DEX%": { stat: "DEX", type: "Percentage" },
  STR: { stat: "STR", type: "Flat" },
  INT: { stat: "INT", type: "Flat" },
  VIT: { stat: "VIT", type: "Flat" },
  AGI: { stat: "AGI", type: "Flat" },
  DEX: { stat: "DEX", type: "Flat" },
  "DEF%": { stat: "DEF", type: "Percentage" },
  DEF: { stat: "DEF", type: "Flat" },
  "MDEF%": { stat: "MDEF", type: "Percentage" },
  MDEF: { stat: "MDEF", type: "Flat" },
  Stability: { stat: "Stability", type: "Percentage" },
  "Attack MP Recovery": { stat: "Attack MP Recovery", type: "Flat" },
  "Attack MP Recovery%": { stat: "Attack MP Recovery", type: "Percentage" },
  "Accuracy%": { stat: "Accuracy", type: "Percentage" },
  Accuracy: { stat: "Accuracy", type: "Flat" },
  "Dodge%": { stat: "Dodge", type: "Percentage" },
  Dodge: { stat: "Dodge", type: "Flat" },
  "Critical Rate": { stat: "Critical Rate", type: "Flat" },
  "Critical Rate%": { stat: "Critical Rate", type: "Percentage" },
  "Critical Damage": { stat: "Critical Damage", type: "Flat" },
  "Critical Damage%": { stat: "Critical Damage", type: "Percentage" },
  ASPD: { stat: "ASPD", type: "Flat" },
  "ASPD%": { stat: "ASPD", type: "Percentage" },
  CSPD: { stat: "CSPD", type: "Flat" },
  "CSPD%": { stat: "CSPD", type: "Percentage" },
  "Motion Speed": { stat: "Motion Speed", type: "Percentage" },
  "Weapon ATK": { stat: "Weapon ATK", type: "Flat" },
  "Weapon ATK%": { stat: "Weapon ATK", type: "Percentage" },
  "Light Element": { stat: "Light Element", type: "Flat" },
  "Dark Element": { stat: "Dark Element", type: "Flat" },
  "Fire Element": { stat: "Fire Element", type: "Flat" },
  "Water Element": { stat: "Water Element", type: "Flat" },
  "Earth Element": { stat: "Earth Element", type: "Flat" },
  "Wind Element": { stat: "Wind Element", type: "Flat" },
  "Neutral Resistance%": { stat: "Neutral Resistance", type: "Percentage" },
  "Light Resistance%": { stat: "Light Resistance", type: "Percentage" },
  "Dark Resistance%": { stat: "Dark Resistance", type: "Percentage" },
  "Fire Resistance%": { stat: "Fire Resistance", type: "Percentage" },
  "Water Resistance%": { stat: "Water Resistance", type: "Percentage" },
  "Earth Resistance%": { stat: "Earth Resistance", type: "Percentage" },
  "Wind Resistance%": { stat: "Wind Resistance", type: "Percentage" },
  "Damage To Neutral%": { stat: "Damage To Neutral", type: "Percentage" },
  "Damage To Light%": { stat: "Damage To Light", type: "Percentage" },
  "Damage To Dark%": { stat: "Damage To Dark", type: "Percentage" },
  "Damage To Fire%": { stat: "Damage To Fire", type: "Percentage" },
  "Damage To Water%": { stat: "Damage To Water", type: "Percentage" },
  "Damage To Wind%": { stat: "Damage To Wind", type: "Percentage" },
  "Damage To Earth%": { stat: "Damage To Earth", type: "Percentage" },
  "Physical Barrier": { stat: "Physical Barrier", type: "Flat" },
  "Magic Barrier": { stat: "Magic Barrier", type: "Flat" },
  "Fractional Barrier%": { stat: "Fractional Barrier", type: "Percentage" },
  "Barrier Cooldown%": { stat: "Barrier Cooldown", type: "Percentage" },
  "Physical Resistance%": { stat: "Physical Resistance", type: "Percentage" },
  "Magic Resistance%": { stat: "Magic Resistance", type: "Percentage" },
  "Guard Power%": { stat: "Guard Power", type: "Percentage" },
  "Guard Recharge%": { stat: "Guard Recharge", type: "Percentage" },
  "Evasion Rate%": { stat: "Evasion Rate", type: "Percentage" },
  "Reflect%": { stat: "Reflect", type: "Percentage" },
  "Recoil%": { stat: "Recoil", type: "Percentage" },
  "Aggro%": { stat: "Aggro", type: "Percentage" },
  "Ailment Resistance%": { stat: "Ailment Resistance", type: "Percentage" },
  "Invincible Aid(Sec)": { stat: "Invincible Aid(Sec)", type: "Flat" },
  "Short Range Damage%": { stat: "Short Range Damage", type: "Percentage" },
  "Long Range Damage%": { stat: "Long Range Damage", type: "Percentage" },
  "Unsheathe Attack": { stat: "Unsheathe Attack", type: "Flat" },
  "Unsheathe Attack%": { stat: "Unsheathe Attack", type: "Percentage" },
  "Additional Melee%": { stat: "Additional Melee", type: "Percentage" },
  "Additional Magic%": { stat: "Additional Magic", type: "Percentage" },
  "Anticipate%": { stat: "Anticipate", type: "Percentage" },
  "Guard Break%": { stat: "Guard Break", type: "Percentage" },
  "ATK UP(STR)%": { stat: "ATK UP(STR)", type: "Percentage" },
  "ATK UP(INT)%": { stat: "ATK UP(INT)", type: "Percentage" },
  "ATK UP(VIT)%": { stat: "ATK UP(VIT)", type: "Percentage" },
  "ATK UP(AGI)%": { stat: "ATK UP(AGI)", type: "Percentage" },
  "ATK UP(DEX)%": { stat: "ATK UP(DEX)", type: "Percentage" },
  "ATK DOWN(STR)%": { stat: "ATK DOWN(STR)", type: "Percentage" },
  "ATK DOWN(INT)%": { stat: "ATK DOWN(INT)", type: "Percentage" },
  "ATK DOWN(VIT)%": { stat: "ATK DOWN(VIT)", type: "Percentage" },
  "ATK DOWN(AGI)%": { stat: "ATK DOWN(AGI)", type: "Percentage" },
  "ATK DOWN(DEX)%": { stat: "ATK DOWN(DEX)", type: "Percentage" },
  "MATK UP(STR)%": { stat: "MATK UP(STR)", type: "Percentage" },
  "MATK UP(INT)%": { stat: "MATK UP(INT)", type: "Percentage" },
  "MATK UP(VIT)%": { stat: "MATK UP(VIT)", type: "Percentage" },
  "MATK UP(AGI)%": { stat: "MATK UP(AGI)", type: "Percentage" },
  "MATK UP(DEX)%": { stat: "MATK UP(DEX)", type: "Percentage" },
  "MATK DOWN(STR)%": { stat: "MATK DOWN(STR)", type: "Percentage" },
  "MATK DOWN(INT)%": { stat: "MATK DOWN(INT)", type: "Percentage" },
  "MATK DOWN(VIT)%": { stat: "MATK DOWN(VIT)", type: "Percentage" },
  "MATK DOWN(AGI)%": { stat: "MATK DOWN(AGI)", type: "Percentage" },
  "MATK DOWN(DEX)%": { stat: "MATK DOWN(DEX)", type: "Percentage" },
  "Reduce DMG(Player Epicenter)%": {
    stat: "Reduce DMG(Player Epicenter)",
    type: "Percentage",
  },
  "Reduce DMG(Foe Epicenter)%": {
    stat: "Reduce DMG(Foe Epicenter)",
    type: "Percentage",
  },
  "Reduce DMG(Floor)%": { stat: "Reduce DMG(Floor)", type: "Percentage" },
  "Reduce DMG(Charge)%": { stat: "Reduce DMG(Charge)", type: "Percentage" },
  "Reduce DMG(Bullet)%": { stat: "Reduce DMG(Bullet)", type: "Percentage" },
  "Reduce DMG(Bowling)%": { stat: "Reduce DMG(Bowling)", type: "Percentage" },
  "Reduce DMG(Explosion)%": {
    stat: "Reduce DMG(Explosion)",
    type: "Percentage",
  },
  "Flinch Unavailable": { stat: "Flinch Unavailable", type: "Flat" },
  "Tumble Unavailable": { stat: "Tumble Unavailable", type: "Flat" },
  "Stun Unavailable": { stat: "Stun Unavailable", type: "Flat" },
};

window.skillPassive = [
  {
    skillName: "Sword Mastery",
    skillLevel: 0,
    icon: "icons/skills/sk_sword_mastery.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Quick Slash",
    skillLevel: 0,
    icon: "icons/skills/sk_quick_slash.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Shot Mastery",
    skillLevel: 0,
    icon: "icons/skills/sk_shot_mastery.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Samurai Archery",
    skillLevel: 0,
    icon: "icons/skills/sk_samurai_archery.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Magic Mastery",
    skillLevel: 0,
    icon: "icons/skills/sk_magic_mastery.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Martial Mastery",
    skillLevel: 0,
    icon: "icons/skills/sk_martial_mastery.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Martial Discipline",
    skillLevel: 0,
    icon: "icons/skills/sk_martial_discipline.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Aggravate",
    skillLevel: 0,
    icon: "icons/skills/sk_aggravate.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Strong Chase Attack",
    skillLevel: 0,
    icon: "icons/skills/sk_strong_chase_attack.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Halberd Mastery",
    skillLevel: 0,
    icon: "icons/skills/sk_halberd_mastery.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Critical Spear",
    skillLevel: 0,
    icon: "icons/skills/sk_critical_spear.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Bushido",
    skillLevel: 0,
    icon: "icons/skills/sk_bushido.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Two-Handed",
    skillLevel: 0,
    icon: "icons/skills/sk_two_handed.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Auspicious Wind",
    skillLevel: 0,
    icon: "icons/skills/sk_auspicious_wind.png",
    isStackable: true,
    stackNumber: [3, 1],
  },
  {
    skillName: "Dual Sword Mastery",
    skillLevel: 0,
    icon: "icons/skills/sk_dual_sword_mastery.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Dual Sword Control",
    skillLevel: 0,
    icon: "icons/skills/sk_dual_sword_control.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Godspeed",
    skillLevel: 0,
    icon: "icons/skills/sk_godspeed.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Unarmed Mastery",
    skillLevel: 0,
    icon: "icons/skills/sk_unarmed_mastery.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Ultima Qi Charge",
    skillLevel: 0,
    icon: "icons/skills/sk_ultima_qi_charge.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Hidden Talent",
    skillLevel: 0,
    icon: "icons/skills/sk_hidden_talent.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Hunter Bowgun",
    skillLevel: 0,
    icon: "icons/skills/sk_hunter_bowgun.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Camouflage(Passive)",
    skillLevel: 0,
    icon: "icons/skills/sk_camouflage.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Magic Warrior Mastery",
    skillLevel: 0,
    icon: "icons/skills/sk_magic_warrior_mastery.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Conversion",
    skillLevel: 0,
    icon: "icons/skills/sk_conversion.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Magic Skin(Max MP)",
    skillLevel: 0,
    icon: "icons/skills/sk_magic_skin.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Safe Rest",
    skillLevel: 0,
    icon: "icons/skills/sk_safe_rest.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Short Rest",
    skillLevel: 0,
    icon: "icons/skills/sk_short_rest.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Ninja Spirit",
    skillLevel: 0,
    icon: "icons/skills/sk_ninja_spirit.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Frontliner II",
    skillLevel: 0,
    icon: "icons/skills/sk_frontliner.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Shield Mastery",
    skillLevel: 0,
    icon: "icons/skills/sk_shield_mastery.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Force Shield",
    skillLevel: 0,
    icon: "icons/skills/sk_force_shield.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Magical Shield",
    skillLevel: 0,
    icon: "icons/skills/sk_magical_shield.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Heavy Armor Mastery",
    skillLevel: 0,
    icon: "icons/skills/sk_heavy_arm_mastery.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Light Armor Mastery",
    skillLevel: 0,
    icon: "icons/skills/sk_light_arm_mastery.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Advanced Evasion",
    skillLevel: 0,
    icon: "icons/skills/sk_advanced_evasion.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Advanced Guard",
    skillLevel: 0,
    icon: "icons/skills/sk_advanced_guard.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "HP Boost",
    skillLevel: 0,
    icon: "icons/skills/sk_hp_boost.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "MP Boost",
    skillLevel: 0,
    icon: "icons/skills/sk_mp_boost.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Magic UP",
    skillLevel: 0,
    icon: "icons/skills/sk_magic_up.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Increased Energy",
    skillLevel: 0,
    icon: "icons/skills/sk_increased_energy.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Spell Burst",
    skillLevel: 0,
    icon: "icons/skills/sk_spell_burst.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Attack UP",
    skillLevel: 0,
    icon: "icons/skills/sk_attack_up.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Intimidating Power",
    skillLevel: 0,
    icon: "icons/skills/sk_intimidating_power.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Critical UP",
    skillLevel: 0,
    icon: "icons/skills/sk_critical_up.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Defense UP",
    skillLevel: 0,
    icon: "icons/skills/sk_defense_up.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Defense Mastery",
    skillLevel: 0,
    icon: "icons/skills/sk_defense_mastery.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Dodge UP",
    skillLevel: 0,
    icon: "icons/skills/sk_dodge_up.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Accuracy UP",
    skillLevel: 0,
    icon: "icons/skills/sk_accuracy_up.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Cast Mastery",
    skillLevel: 0,
    icon: "icons/skills/sk_cast_mastery.png",
    isStackable: true,
    stackNumber: [1, 10],
  },
];
window.skillActive = [
  {
    skillName: "Astute",
    skillLevel: 0,
    icon: "icons/skills/sk_astute.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Berserk",
    skillLevel: 0,
    icon: "icons/skills/sk_berserk.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "War Cry",
    skillLevel: 0,
    icon: "icons/skills/sk_warcry.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Buster Blade",
    skillLevel: 0,
    icon: "icons/skills/sk_buster_blade.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Aura Blade",
    skillLevel: 0,
    icon: "icons/skills/sk_aura_blade.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Paralysis Shot",
    skillLevel: 0,
    icon: "icons/skills/sk_paralysis_shot.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Smoke Dust",
    skillLevel: 0,
    icon: "icons/skills/sk_smoke_dust.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Twin Storm",
    skillLevel: 0,
    icon: "icons/skills/sk_twin_storm.png",
    isStackable: true,
    stackNumber: 0,
  },
  {
    skillName: "Gust (Dual Katana State)",
    skillLevel: 0,
    icon: "icons/skills/sk_gust.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Kairiki Ranshin",
    skillLevel: 0,
    icon: "icons/skills/sk_kairiki.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Chain Cast",
    skillLevel: 0,
    icon: "icons/skills/sk_chain_cast.png",
    isStackable: true,
    stackNumber: 0,
  },
  {
    skillName: "Magic: Laser",
    skillLevel: 0,
    icon: "icons/skills/sk_magic_laser.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Rapid Charge",
    skillLevel: 0,
    icon: "icons/skills/sk_mp_charge.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Rush",
    skillLevel: 0,
    icon: "icons/skills/sk_rush.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Asura Aura",
    skillLevel: 0,
    icon: "icons/skills/sk_ashura.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Chakra",
    skillLevel: 0,
    icon: "icons/skills/sk_chakra.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Energy Control",
    skillLevel: 0,
    icon: "icons/skills/sk_energy_control.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Cross Parry",
    skillLevel: 0,
    icon: "icons/skills/sk_cross_parry.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Annihilator",
    skillLevel: 0,
    icon: "icons/skills/sk_annihilator.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Reflex",
    skillLevel: 0,
    icon: "icons/skills/sk_reflex.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Saber Aura",
    skillLevel: 0,
    icon: "icons/skills/sk_saber_aura.png",
    isStackable: true,
    stackNumber: 0,
  },
  {
    skillName: "Crescent Saber",
    skillLevel: 0,
    icon: "icons/skills/sk_crescent_saber.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Flash Blast",
    skillLevel: 0,
    icon: "icons/skills/sk_flash_blast.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Thor's Hammer",
    skillLevel: 0,
    icon: "icons/skills/sk_thors_hammer.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Quick Aura",
    skillLevel: 0,
    icon: "icons/skills/sk_quick_aura.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "God Speed Wield",
    skillLevel: 0,
    icon: "icons/skills/sk_god_speed_wield.png",
    isStackable: true,
    stackNumber: 0,
  },
  {
    skillName: "Earthshaker(ON)",
    skillLevel: 0,
    icon: "icons/skills/sk_earthshaker.png",
    isStackable: true,
    stackNumber: 0,
  },
  {
    skillName: "Enhance",
    skillLevel: 0,
    icon: "icons/skills/sk_enhance.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Dual Shield",
    skillLevel: 0,
    icon: "icons/skills/sk_dual_shields.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Protection",
    skillLevel: 0,
    icon: "icons/skills/sk_protection.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Aegis",
    skillLevel: 0,
    icon: "icons/skills/sk_aegis.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Guardian(Self)",
    skillLevel: 0,
    icon: "icons/skills/sk_guardian.png",
    isStackable: true,
    stackNumber: 0,
  },
  {
    skillName: "Guardian(Party)",
    skillLevel: 0,
    icon: "icons/skills/sk_guardian.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Fareth",
    skillLevel: 0,
    icon: "icons/skills/sk_fareth.png",
    isStackable: true,
    stackNumber: 0,
  },
  {
    skillName: "Knight's Stance",
    skillLevel: 0,
    icon: "icons/skills/sk_knight_stance.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Gloria",
    skillLevel: 0,
    icon: "icons/skills/sk_gloria.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Sacred Teaching",
    skillLevel: 0,
    icon: "icons/skills/sk_sacred_teaching.png",
    isStackable: true,
    stackNumber: 0,
  },
  {
    skillName: "Prayer",
    skillLevel: 0,
    icon: "icons/skills/sk_prayer.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Sicarius",
    skillLevel: 0,
    icon: "icons/skills/sk_sicarius.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Camouflage",
    skillLevel: 0,
    icon: "icons/skills/sk_camouflage.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Detection",
    skillLevel: 0,
    icon: "icons/skills/sk_detection.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Healing Song",
    skillLevel: 0,
    icon: "icons/skills/sk_healing_song.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Resonance (Power Regislet)",
    skillLevel: 0,
    icon: "icons/skills/sk_resonance.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Resonance (Focus Regislet)",
    skillLevel: 0,
    icon: "icons/skills/sk_resonance.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Resonance (Speed Regislet)",
    skillLevel: 0,
    icon: "icons/skills/sk_resonance.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Dual Bringer",
    skillLevel: 0,
    icon: "icons/skills/sk_dual_bringer.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Brave Aura",
    skillLevel: 0,
    icon: "icons/skills/sk_brave_aura.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "High Cycle",
    skillLevel: 0,
    icon: "icons/skills/sk_high_cycle.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Quick Motion",
    skillLevel: 0,
    icon: "icons/skills/sk_quick_motion.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Wind Release",
    skillLevel: 0,
    icon: "icons/skills/sk_wind_release.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Overlimit",
    skillLevel: 0,
    icon: "icons/skills/sk_overlimit.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Sorcery Guide",
    skillLevel: 0,
    icon: "icons/skills/sk_overlimit.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Familia",
    skillLevel: 0,
    icon: "icons/skills/sk_familia.png",
    isStackable: false,
    stackNumber: 0,
  },
  {
    skillName: "Dauntless",
    skillLevel: 0,
    icon: "icons/skills/sk_dauntless.png",
    isStackable: true,
    stackNumber: 0,
  },
];
window.ElementTable = {
  Neutral: { "Phy Power": "100%", "Mag Power": "100%", Resistance: "0%" },
  Fire: { "Phy Power": "100%", "Mag Power": "100%", Resistance: "0%" },
  Water: { "Phy Power": "100%", "Mag Power": "100%", Resistance: "0%" },
  Wind: { "Phy Power": "100%", "Mag Power": "100%", Resistance: "0%" },
  Earth: { "Phy Power": "100%", "Mag Power": "100%", Resistance: "0%" },
  Light: { "Phy Power": "100%", "Mag Power": "100%", Resistance: "0%" },
  Dark: { "Phy Power": "100%", "Mag Power": "100%", Resistance: "0%" },
};

window.elementList = [
  "Neutral",
  "Fire",
  "Water",
  "Wind",
  "Earth",
  "Light",
  "Dark",
];
window.basicStats = {
  MaxHP: 0,
  MaxMP: 0,
  "Natural HP Regen": 0,
  "Natural MP Regen": 0,
  "Attack MP Recovery": 0,
  DEF: 0,
  MDEF: 0,
  Dodge: 0,
  "Guard Recharge %": "0%",
  "Guard Recharge Rate": "0/s",
  "Guard Power %": "0%",
  "Guard Power Value": "0",
  "Guard MP Recovery": "0",
  "Guard Rate": "0/0",
  "Evasion Recharge %": "0%",
  "Physical Resistance %": "0%",
  "Physical Damage Reduction %": "0%",
  "Magic Resistance %": "0%",
  "Magic Damage Reduction %": "0%",
  "Damage Reduction %": "0%",
  "Refine Damage Resistance %": "0%",
  "Ailment Resistance %": "0%",
  "Aggro %": "100%",
  "Barrier Cooldown %": "0%",
  "Physical Barrier": 0,
  "Magic Barrier": 0,
  "Fractional Reduction %": "0%",
  "Fractional Barrier %": "0%",
  "Reflect %": "0%",
};
window.offensive_physical = {
  ATK: 0,
  "ATK (when critical)": 0,
  "Stability %": "0%",
  "Dual Bringer ATK": 0,
  "Sub-Hand ATK": 0,
  "Sub-Hand Stability %": "0%",
  "Total Dual Sword ATK": 0,
  ASPD: 0,
  "Motion Speed %": "0%",
  "Physical Pierce%": "0%",
  Accuracy: 0,
  "Critical Rate": "0%",
  "Critical Damage": "0%",
  "Unsheathe Attack %": "100%",
  "Unsheathe Attack Flat": 0,
  "Additional Melee %": "0%",
};
window.offensive_magic = {
  MATK: 0,
  "Hidden MATK": 0,
  "Wizard MATK": 0,
  "Dual Bringer MATK": 0,
  "Magic Stability %": "0%",
  "Magic Pierce%": "0%",
  CSPD: 0,
  "Magic Critical Rate": "0%",
  "Magic Critical Damage": "0%",
  "Additional Magic %": "0%",
};

window.offensive_general = {
  "Short Range Damage %": "100%",
  "Long Range Damage %": "100%",
  "Anticipate %": "0%",
  "Guard Break %": "0%",
};

window.interrupt_skill = {
  "Flinch Unavailable": "No",
  "Tumble Unavailable": "No",
  "Stun Unavailable": "No",
};

let CHARACTER_STAT = window.CHARACTERSTATS;

// ############################## STAT DISTRIBUTION ########################################

function updateCharacterStat(event) {
  let stat = event.target.id;
  let value = parseInt(event.target.value) || 0;

  if (CHARACTER_STAT.hasOwnProperty(stat)) {
    CHARACTER_STAT[stat] = value;
  }
  onUserInputChanged();
}

function updateExtraStat() {
  let selectElement = document.getElementById("extra-stat");
  let inputElement = document.getElementById("extra-stat-input");
  let labelElement = document.getElementById("extra-stat-label");

  let selectedStat = selectElement.value;
  CHARACTER_STAT.extraType = selectedStat;

  labelElement.textContent = selectedStat;

  if (selectedStat === "NONE") {
    inputElement.value = 0;
    inputElement.disabled = true;
    inputElement.classList.add(
      "opacity-50",
      "cursor-not-allowed",
      "text-gray-400"
    );
    CHARACTER_STAT.extraValue = 0;
  } else {
    inputElement.disabled = false;
    inputElement.classList.remove(
      "opacity-50",
      "cursor-not-allowed",
      "text-gray-400"
    );
    inputElement.classList.add("text-white");
    inputElement.value = CHARACTER_STAT.extraValue;
  }
}

function updateExtraStatValue(event) {
  let value = parseInt(event.target.value) || 0;
  CHARACTER_STAT.extraValue = value;
}

function initStatDistribution() {
  let stats = ["level", "STR", "INT", "VIT", "AGI", "DEX"];

  stats.forEach((stat) => {
    let element = document.getElementById(stat);
    if (element) {
      element.addEventListener("input", updateCharacterStat);
    }
  });

  let extraStatSelect = document.getElementById("extra-stat");
  let extraStatInput = document.getElementById("extra-stat-input");

  if (extraStatSelect) {
    extraStatSelect.addEventListener("change", updateExtraStat);
  }

  if (extraStatInput) {
    extraStatInput.addEventListener("input", updateExtraStatValue);
  }
}
document.addEventListener("DOMContentLoaded", () => {
  initStatDistribution();
});

//######################################### ITEM FETCH & FILTER ##########################################
let allItems = [];
let filteredItems = [];
const allowedSubWeaponTypes = window.allowedSubWeaponTypes;
async function fetchItemData() {
  try {
    const response = await fetch("get_data/get_item_stats.php");
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const data = await response.json();
    allItems = data;
    filterItems();
  } catch (error) {
    console.warn("Error fetching item data:", error);
  }
}

function filterItems() {
  const uniqueItems = allItems.reduce((acc, item) => {
    if (!acc[item.item_id]) {
      acc[item.item_id] = {
        item_id: item.item_id,
        item_name: item.item_name,
        type_name: item.type_name,
        stats: [],
      };
    }
    acc[item.item_id].stats.push({
      stat_name: item.stat_name,
      value: item.value,
      stat_type: item.stat_type,
      stat_condition: item.stat_condition,
    });
    return acc;
  }, {});
  filteredItems = Object.values(uniqueItems);
}
//######################################### HELPER FUNCTION ##########################################
function populateRefineSelects() {
  const refineSelectIds = [
    "weaponRefine",
    "subWeaponRefine",
    "armorRefine",
    "additionalRefine",
  ];

  const levelToLetter = {
    10: "E",
    11: "D",
    12: "C",
    13: "B",
    14: "A",
    15: "S",
  };

  refineSelectIds.forEach((id) => {
    const select = document.getElementById(id);
    if (!select) return;

    select.innerHTML = "";

    for (let i = 0; i <= 15; i++) {
      const option = document.createElement("option");
      option.value = i;

      const label = i >= 10 ? `+${levelToLetter[i]}` : `+${i}`;
      option.textContent = label;

      select.appendChild(option);
    }
  });
}

//######################################### WEAPON ##########################################
let selectedWeapon = null;

const mainWeaponSelect = document.getElementById("mainWeapon");
const weaponSelectButton = document.getElementById("weaponSelectButton");
const weaponSelectList = document.getElementById("weaponSelectList");
const weaponHoverPanel = document.getElementById("weaponHoverPanel");

const weaponATK = document.getElementById("weaponATK");
const weaponRefine = document.getElementById("weaponRefine");
const weaponStability = document.getElementById("weaponStability");

function setWeaponInputsEnabled(enabled) {
  [weaponATK, weaponRefine, weaponStability].forEach((input) => {
    input.disabled = !enabled;
    input.classList.toggle("opacity-50", !enabled);
    input.classList.toggle("cursor-not-allowed", !enabled);
  });
}

function setWeaponSelectEnabled(enabled) {
  if (enabled) {
    weaponSelectButton.classList.remove("opacity-50", "cursor-not-allowed");
    weaponSelectButton.disabled = false;
  } else {
    weaponSelectButton.classList.add("opacity-50", "cursor-not-allowed");
    weaponSelectButton.disabled = true;
    closeWeaponDropdown();
  }
}

function clearWeaponSelect() {
  weaponSelectButton.textContent = "Select Weapon";
  weaponSelectList.innerHTML = "";
  weaponRefine.value = 0;
  weaponStability.value = 0;
  weaponATK.value = 0;
  hideWeaponHoverPanel();
}

function populateWeaponSelect(weapons) {
  clearWeaponSelect();

  const noneLi = document.createElement("li");
  noneLi.textContent = "--- None ---";
  noneLi.dataset.id = "None";
  noneLi.classList.add(
    "p-2",
    "cursor-pointer",
    "hover:bg-gray-600",
    "truncate",
    "font-semibold",
    "text-white"
  );
  weaponSelectList.appendChild(noneLi);
  const customLi = document.createElement("li");
  customLi.textContent = "➕ Custom Weapon";
  customLi.dataset.id = "custom";
  customLi.classList.add(
    "p-2",
    "cursor-pointer",
    "hover:bg-gray-600",
    "truncate",
    "font-semibold",
    "text-red-300"
  );
  weaponSelectList.appendChild(customLi);

  weapons.forEach((weapon) => {
    const li = document.createElement("li");
    li.textContent = weapon.item_name;
    li.dataset.id = weapon.item_id;
    li.classList.add("p-2", "cursor-pointer", "hover:bg-gray-600", "truncate");
    weaponSelectList.appendChild(li);
  });
}

function openWeaponDropdown() {
  weaponSelectList.classList.remove("hidden");
}

function closeWeaponDropdown() {
  weaponSelectList.classList.add("hidden");
  hideWeaponHoverPanel();
}

function toggleWeaponDropdown() {
  if (weaponSelectList.classList.contains("hidden")) {
    openWeaponDropdown();
  } else {
    closeWeaponDropdown();
  }
}

function onWeaponTypeChange() {
  const selectedType = mainWeaponSelect.value;

  // --- Reset main weapon ---
  selectedWeapon = null;
  setWeaponInputsEnabled(false);
  setWeaponSelectEnabled(false);
  clearWeaponSelect();

  // --- Handle Sub Weapon Logic ---
  const allowedSubTypes = allowedSubWeaponTypes[selectedType] || [];
  populateSubWeaponTypeOptions(allowedSubTypes);
  selectedSubWeapon = null;
  clearSubWeaponSelect();
  setSubWeaponSelectEnabled(false);
  displaySelectedSubWeaponStats();

  if (selectedType === "barehand") {
    refreshCrystaAccess();
    displaySelectedWeaponStats();
    return;
  }

  // --- Continue with main weapon selection logic ---
  const matchingWeapons = filteredItems.filter(
    (item) => item.type_name.toLowerCase() === selectedType.toLowerCase()
  );

  if (matchingWeapons.length === 0) {
    return;
  }

  populateWeaponSelect(matchingWeapons);
  setWeaponSelectEnabled(true);
  initWeaponHoverPanel(matchingWeapons);
  displaySelectedWeaponStats();
}

function onWeaponListClick(event) {
  if (event.target.tagName !== "LI") return;
  const selectedId = event.target.dataset.id;

  if (selectedId === "None") {
    weaponSelectButton.textContent = "Select Weapon";
    selectedWeapon = null;
    setWeaponInputsEnabled(false);
    populateAtkAndStability();
    displaySelectedWeaponStats();
    refreshCrystaAccess();
    closeWeaponDropdown();
    return;
  }
  if (selectedId === "custom") {
    const originalItem = filteredItems.find(
      (item) => item.item_id === event.target.dataset.originalId
    );

    selectedWeapon = {
      item_id: null,
      item_name: originalItem?.item_name || "Custom Weapon",
      stats: [
        {
          stat_name: "BaseATK",
          value: 0,
          stat_type: "Flat",
          stat_condition: null,
        },
        {
          stat_name: "BaseStability",
          value: 0,
          stat_type: "Percentage",
          stat_condition: null,
        },
      ],
    };

    weaponSelectButton.textContent = selectedWeapon.item_name;
    closeWeaponDropdown();
    setWeaponInputsEnabled(true);
    populateAtkAndStability();
    displaySelectedWeaponStats();
    refreshCrystaAccess();
    return;
  }

  // Normal weapon selected
  selectedWeapon = filteredItems.find((item) => item.item_id === selectedId);
  weaponSelectButton.textContent = event.target.textContent;
  closeWeaponDropdown();
  setWeaponInputsEnabled(true);
  populateAtkAndStability();
  displaySelectedWeaponStats();
  refreshCrystaAccess();
}

function populateAtkAndStability() {
  if (!selectedWeapon || !selectedWeapon.stats) {
    weaponATK.value = "0";
    weaponStability.value = "0";
    return;
  }

  const baseAtkStat = selectedWeapon.stats.find(
    (stat) => stat.stat_name === "BaseATK"
  );
  const baseStabilityStat = selectedWeapon.stats.find(
    (stat) => stat.stat_name === "BaseStability"
  );

  weaponATK.value = baseAtkStat ? Math.floor(baseAtkStat.value) : "";
  weaponStability.value = baseStabilityStat
    ? Math.floor(baseStabilityStat.value)
    : "";
}

function initWeaponHoverPanel(weapons) {
  const listItems = weaponSelectList.querySelectorAll("li");
  listItems.forEach((li) => {
    li.addEventListener("mouseenter", () => {
      const weapon = weapons.find((w) => w.item_id === li.dataset.id);
      if (weapon) {
        showWeaponHoverStats(weapon, li);
      }
    });
    li.addEventListener("mouseleave", () => {
      hideWeaponHoverPanel();
    });
  });
}

function initWeaponSection() {
  setWeaponInputsEnabled(false);
  setWeaponSelectEnabled(false);
  displaySelectedWeaponStats();
  clearWeaponSelect();

  mainWeaponSelect.addEventListener("change", (event) => {
    onWeaponTypeChange(event);
    onUserInputChanged();
  });
  weaponSelectButton.addEventListener("click", (event) => {
    toggleWeaponDropdown(event);
    onUserInputChanged();
  });
  weaponSelectList.addEventListener("click", (event) => {
    onWeaponListClick(event);
    onUserInputChanged();
  });

  document.addEventListener("click", (e) => {
    if (
      !weaponSelectButton.contains(e.target) &&
      !weaponSelectList.contains(e.target)
    ) {
      closeWeaponDropdown();
    }
  });

  weaponRefine.addEventListener("change", (event) => {
    onWeaponRefineChange(event);
    onUserInputChanged();
  });
  weaponATK.addEventListener("input", (event) => {
    onWeaponATKChange(event);
    onUserInputChanged();
  });
  weaponStability.addEventListener("input", (event) => {
    onWeaponStabilityChange(event);
    onUserInputChanged();
  });
  initWeaponHoverPanel(filteredItems);
  onWeaponTypeChange();
}

function onWeaponRefineChange(event) {
  weaponRefine.value = event.target.value;
}
function displaySelectedWeaponStats() {
  const container = document.getElementById("customWeaponStatsContainer");
  container.innerHTML = "";

  if (!selectedWeapon) {
    container.textContent = "No stats available";
    return;
  }

  const isCustom =
    !selectedWeapon.item_id ||
    selectedWeapon.item_name?.toLowerCase().includes("custom") ||
    selectedWeapon.stats?.some((stat) =>
      stat.stat_name.toLowerCase().includes("potential")
    );

  if (isCustom) {
    // Show custom input fields instead of read-only stats
    createCustomStatsInputs(
      "customWeaponStatsContainer",
      () => selectedWeapon,
      "weapon"
    );
    return;
  }

  if (
    !Array.isArray(selectedWeapon.stats) ||
    selectedWeapon.stats.length === 0
  ) {
    container.textContent = "No stats available";
    return;
  }

  function formatValue(stat) {
    if (stat.stat_name === "BaseATK") return parseInt(weaponATK.value);
    if (stat.stat_name === "BaseStability")
      return parseInt(weaponStability.value);
    const val = parseFloat(stat.value);
    return Number.isInteger(val) ? val : val.toFixed(2);
  }

  function formatLabel(statName) {
    if (statName === "BaseATK") return "Base ATK";
    if (statName === "BaseStability") return "Base Stability";
    return statName;
  }

  const groupedStats = groupStatsByCondition(selectedWeapon.stats);

  Object.entries(groupedStats).forEach(([condition, stats]) => {
    if (condition !== "default") {
      const conditionLabel = document.createElement("div");
      conditionLabel.textContent = condition;
      conditionLabel.classList.add("text-green-400", "font-semibold", "mt-3");
      container.appendChild(conditionLabel);
    }

    const orderedStats = sortStats(stats);

    orderedStats.forEach((stat) => {
      const isElement = stat.stat_name.toLowerCase().includes("element");
      const isUnavailable = stat.stat_name
        .toLowerCase()
        .includes("unavailable");
      const isBaseATK = stat.stat_name === "BaseATK";
      const isBaseStab = stat.stat_name === "BaseStability";

      const statLine = document.createElement("div");
      statLine.classList.add("mb-1");
      if (condition !== "default") statLine.classList.add("ml-2");

      const label = formatLabel(stat.stat_name);

      if (isElement) {
        const elementLabel = document.createElement("div");
        elementLabel.textContent = label;
        elementLabel.classList.add("text-blue-300", "font-semibold", "mb-1");
        container.insertBefore(elementLabel, container.firstChild);
        return;
      }

      const value = formatValue(stat);
      let displayText;

      if (isBaseATK) {
        displayText = `${label}: ${value}`;
      } else if (isBaseStab) {
        displayText = `${label}: ${value}%`;
      } else if (isUnavailable) {
        displayText = `${label}`;
      } else {
        const prefix = value >= 0 ? "+" : "";
        const valWithPrefix = `${prefix}${value}`;
        const valFinal =
          stat.stat_type === "Percentage" ? `${valWithPrefix}%` : valWithPrefix;
        displayText = `${label} ${valFinal}`;
        statLine.classList.add(getTextColorClasses(value));
      }

      statLine.classList.add("text-blue-300");
      statLine.textContent = displayText;
      container.appendChild(statLine);
    });
  });
}

function onWeaponATKChange() {
  displaySelectedWeaponStats();
}

function onWeaponStabilityChange() {
  displaySelectedWeaponStats();
}
function showWeaponHoverStats(weapon, liElement) {
  weaponHoverPanel.innerHTML = "";

  if (!weapon || !weapon.stats || weapon.stats.length === 0) {
    weaponHoverPanel.textContent = "No stats available";
    return;
  }

  function formatValue(stat) {
    if (stat.stat_name === "BaseATK" || stat.stat_name === "BaseStability") {
      return Math.floor(stat.value);
    }
    const val = parseFloat(stat.value);
    return Number.isInteger(val) ? val : val.toFixed(2);
  }

  function formatLabel(statName) {
    if (statName === "BaseATK") return "Base ATK";
    if (statName === "BaseStability") return "Base Stability";
    return statName;
  }

  function getColor(value) {
    if (value < 0) return "red-300";
    if (value === 0) return "white";
    return "blue-300";
  }

  const groupedStats = groupStatsByCondition(weapon.stats);

  Object.entries(groupedStats).forEach(([condition, stats]) => {
    if (condition !== "default") {
      const conditionLabel = document.createElement("div");
      conditionLabel.textContent = condition;
      conditionLabel.style.color = "lightgreen";
      conditionLabel.style.fontWeight = "bold";
      conditionLabel.style.marginTop = "6px";
      weaponHoverPanel.appendChild(conditionLabel);
    }

    const orderedStats = sortStats(stats);

    orderedStats.forEach((stat) => {
      const statLine = document.createElement("div");

      const label = formatLabel(stat.stat_name);
      const value = formatValue(stat);
      const prefix = value >= 0 ? "+" : "";

      const isElementOrUnavailable =
        stat.stat_name.toLowerCase().includes("element") ||
        stat.stat_name.toLowerCase().includes("unavailable");

      if (isElementOrUnavailable) {
        statLine.textContent = label;
        statLine.classList.add("mb-1");
      } else {
        const displayVal =
          stat.stat_type === "Percentage"
            ? `${prefix}${value}%`
            : `${prefix}${value}`;

        const lineText =
          stat.stat_name === "BaseATK" || stat.stat_name === "BaseStability"
            ? `${label}: ${value}${
                stat.stat_name === "BaseStability" ? "%" : ""
              }`
            : `${label} ${displayVal}`;

        statLine.textContent = lineText;
        statLine.classList.add(`text-${getColor(value)}`, "font-semibold");
      }

      statLine.style.marginBottom = "4px";
      if (condition !== "default") statLine.style.marginLeft = "10px";

      weaponHoverPanel.appendChild(statLine);
    });
  });

  const rect = liElement.getBoundingClientRect();

  weaponHoverPanel.style.position = "fixed";
  weaponHoverPanel.style.top = `${rect.bottom + 5}px`;
  weaponHoverPanel.style.left = `${rect.left}px`;
  weaponHoverPanel.style.display = "block";
}

function hideWeaponHoverPanel() {
  weaponHoverPanel.style.display = "none";
}
//######################################### SUB WEAPON ##########################################
let selectedSubWeapon = null;

const subWeaponSelectButton = document.getElementById("subWeaponSelectButton");
const subWeaponSelectList = document.getElementById("subWeaponSelectList");
const subWeaponTypeSelect = document.getElementById("subWeaponType");

const subWeaponATKDEF = document.getElementById("subWeaponBase");
const subWeaponRefine = document.getElementById("subWeaponRefine");
const subWeaponStability = document.getElementById("subWeaponStability");

const subWeaponHoverPanel = document.getElementById("subWeaponHoverPanel");
function setSubWeaponInputsEnabled(enabled) {
  [subWeaponATKDEF, subWeaponRefine, subWeaponStability].forEach((input) => {
    input.disabled = !enabled;
    input.classList.toggle("opacity-50", !enabled);
    input.classList.toggle("cursor-not-allowed", !enabled);
  });
}
function clearSubWeaponSelect() {
  subWeaponSelectButton.textContent = "Select Sub Weapon";
  subWeaponSelectList.innerHTML = "";
  subWeaponRefine.value = 0;
  subWeaponATKDEF.value = 0;
  subWeaponStability.value = 0;
  hideSubWeaponHoverPanel();
}
function populateSubWeaponSelect(weapons) {
  clearSubWeaponSelect();

  const noneLi = document.createElement("li");
  noneLi.textContent = "--- None ---";
  noneLi.dataset.id = "None";
  noneLi.classList.add(
    "p-2",
    "cursor-pointer",
    "hover:bg-gray-600",
    "truncate",
    "font-semibold",
    "text-white"
  );
  subWeaponSelectList.appendChild(noneLi);
  const customLi = document.createElement("li");
  customLi.textContent = "➕ Custom SubWeapon";
  customLi.dataset.id = "custom";
  customLi.classList.add(
    "p-2",
    "cursor-pointer",
    "hover:bg-gray-600",
    "truncate",
    "font-semibold",
    "text-red-300"
  );
  subWeaponSelectList.appendChild(customLi);

  weapons.forEach((weapon) => {
    const li = document.createElement("li");
    li.textContent = weapon.item_name;
    li.dataset.id = weapon.item_id;
    li.classList.add("p-2", "cursor-pointer", "hover:bg-gray-600", "truncate");
    subWeaponSelectList.appendChild(li);
  });
}
function onSubWeaponTypeChange() {
  const selectedType = subWeaponTypeSelect.value;

  selectedSubWeapon = null;
  if (!selectedType) {
    clearSubWeaponSelect();
    setSubWeaponSelectEnabled(false);
    displaySelectedSubWeaponStats();
    return;
  }

  const matchingSubWeapons = filteredItems.filter(
    (item) => item.type_name.toLowerCase() === selectedType.toLowerCase()
  );

  if (matchingSubWeapons.length === 0) {
    clearSubWeaponSelect();
    setSubWeaponSelectEnabled(false);
    displaySelectedSubWeaponStats();
    return;
  }

  populateSubWeaponSelect(matchingSubWeapons);
  setSubWeaponSelectEnabled(true);
  initSubWeaponHoverPanel(matchingSubWeapons);
  displaySelectedSubWeaponStats();
}

function populateSubWeaponTypeOptions(types) {
  subWeaponTypeSelect.innerHTML = ""; // Clear existing options

  types.forEach((type) => {
    const option = document.createElement("option");
    option.value = type;
    option.textContent = type;
    subWeaponTypeSelect.appendChild(option);
  });
  subWeaponTypeSelect.select = 0;
}

function onSubWeaponListClick(event) {
  if (event.target.tagName !== "LI") return;

  const selectedId = event.target.dataset.id;
  if (selectedId === "None") {
    subWeaponSelectButton.textContent = "Select Sub Weapon";
    selectedSubWeapon = null;
    setSubWeaponInputsEnabled(false);
    populateSubAtkDefAndStability();
    displaySelectedSubWeaponStats();
    refreshCrystaAccess();
    closeSubWeaponDropdown();
    return;
  }
  if (selectedId === "custom") {
    selectedSubWeapon = {
      item_id: null,
      item_name: "Custom SubWeapon",
      stats: [
        {
          stat_name: "BaseATKDEF",
          value: 0,
          stat_type: "Flat",
          stat_condition: null,
        },
        {
          stat_name: "BaseStability",
          value: 0,
          stat_type: "Percentage",
          stat_condition: null,
        },
      ],
    };

    subWeaponSelectButton.textContent = "Custom SubWeapon";
    closeSubWeaponDropdown();
    setSubWeaponInputsEnabled(true);
    populateSubAtkDefAndStability();
    displaySelectedSubWeaponStats();
    return;
  }

  selectedSubWeapon = filteredItems.find((item) => item.item_id === selectedId);
  subWeaponSelectButton.textContent = event.target.textContent;
  closeSubWeaponDropdown();
  setSubWeaponInputsEnabled(true);
  populateSubAtkDefAndStability();
  displaySelectedSubWeaponStats();
}
function populateSubAtkDefAndStability() {
  if (!selectedSubWeapon || !selectedSubWeapon.stats) {
    subWeaponATKDEF.value = "0";
    subWeaponStability.value = "0";
    return;
  }

  const baseAtkDef = selectedSubWeapon.stats.find(
    (s) => s.stat_name === "BaseATK" || s.stat_name === "BaseDEF"
  );
  const baseStab = selectedSubWeapon.stats.find(
    (s) => s.stat_name === "BaseStability"
  );

  subWeaponATKDEF.value = baseAtkDef ? Math.floor(baseAtkDef.value) : "0";
  subWeaponStability.value = baseStab ? Math.floor(baseStab.value) : "0";
}
function displaySelectedSubWeaponStats() {
  const container = document.getElementById("customSubWeaponStatsContainer");
  container.innerHTML = "";

  if (!selectedSubWeapon) {
    container.textContent = "No stats available";
    return;
  }

  const isCustom =
    !selectedSubWeapon.item_id ||
    selectedSubWeapon.item_name?.toLowerCase().includes("custom") ||
    selectedSubWeapon.stats?.some((stat) =>
      stat.stat_name.toLowerCase().includes("potential")
    );

  if (isCustom) {
    createCustomStatsInputs(
      "customSubWeaponStatsContainer",
      () => selectedSubWeapon,
      "subWeapon"
    );
    return;
  }

  if (
    !Array.isArray(selectedSubWeapon.stats) ||
    selectedSubWeapon.stats.length === 0
  ) {
    container.textContent = "No stats available";
    return;
  }

  function formatValue(stat) {
    if (stat.stat_name === "BaseATK" || stat.stat_name === "BaseDEF")
      return parseInt(subWeaponATKDEF.value);
    if (stat.stat_name === "BaseStability")
      return parseInt(subWeaponStability.value);
    const val = parseFloat(stat.value);
    return Number.isInteger(val) ? val : val.toFixed(2);
  }

  function formatLabel(statName) {
    if (statName === "BaseATK") return "Base ATK";
    if (statName === "BaseDEF") return "Base DEF";
    if (statName === "BaseStability") return "Base Stability";
    return statName;
  }

  const groupedStats = groupStatsByCondition(selectedSubWeapon.stats);

  Object.entries(groupedStats).forEach(([condition, stats]) => {
    if (condition !== "default") {
      const conditionLabel = document.createElement("div");
      conditionLabel.textContent = condition;
      conditionLabel.classList.add("text-green-400", "font-semibold", "mt-3");
      container.appendChild(conditionLabel);
    }

    const orderedStats = sortStats(stats);

    orderedStats.forEach((stat) => {
      const isElement = stat.stat_name.toLowerCase().includes("element");
      const isUnavailable = stat.stat_name
        .toLowerCase()
        .includes("unavailable");
      const isBaseATKDEF =
        stat.stat_name === "BaseATK" || stat.stat_name === "BaseDEF";
      const isBaseStab = stat.stat_name === "BaseStability";

      const statLine = document.createElement("div");
      statLine.classList.add("mb-1");
      if (condition !== "default") statLine.classList.add("ml-2");

      const label = formatLabel(stat.stat_name);

      if (isElement) {
        const elementLabel = document.createElement("div");
        elementLabel.textContent = label;
        elementLabel.classList.add("text-blue-300", "font-semibold", "mb-1");
        container.insertBefore(elementLabel, container.firstChild);
        return;
      }

      const value = formatValue(stat);
      let displayText;

      if (isBaseATKDEF) {
        displayText = `${label}: ${value}`;
      } else if (isBaseStab) {
        displayText = `${label}: ${value}%`;
      } else if (isUnavailable) {
        displayText = `${label}`;
      } else {
        const prefix = value >= 0 ? "+" : "";
        const valWithPrefix = `${prefix}${value}`;
        const valFinal =
          stat.stat_type === "Percentage" ? `${valWithPrefix}%` : valWithPrefix;
        displayText = `${label} ${valFinal}`;
        statLine.classList.add(getTextColorClasses(value));
      }

      statLine.classList.add("text-blue-300");
      statLine.textContent = displayText;
      container.appendChild(statLine);
    });
  });
}
function toggleSubWeaponDropdown() {
  subWeaponSelectList.classList.toggle("hidden");
}
function showSubWeaponHoverStats(subWeapon, liElement) {
  subWeaponHoverPanel.innerHTML = "";

  if (!subWeapon || !subWeapon.stats || subWeapon.stats.length === 0) {
    subWeaponHoverPanel.textContent = "No stats available";
    return;
  }

  function formatValue(stat) {
    if (
      stat.stat_name === "BaseATK" ||
      stat.stat_name === "BaseDEF" ||
      stat.stat_name === "BaseStability"
    ) {
      return Math.floor(stat.value);
    }
    const val = parseFloat(stat.value);
    return Number.isInteger(val) ? val : val.toFixed(2);
  }

  function formatLabel(statName) {
    if (statName === "BaseATK") return "Base ATK";
    if (statName === "BaseDEF") return "Base DEF";
    if (statName === "BaseStability") return "Base Stability";
    return statName;
  }

  function getColor(value) {
    if (value < 0) return "red-300";
    if (value === 0) return "white";
    return "blue-300";
  }

  const groupedStats = groupStatsByCondition(subWeapon.stats);

  Object.entries(groupedStats).forEach(([condition, stats]) => {
    if (condition !== "default") {
      const conditionLabel = document.createElement("div");
      conditionLabel.textContent = condition;
      conditionLabel.style.color = "lightgreen";
      conditionLabel.style.fontWeight = "bold";
      conditionLabel.style.marginTop = "6px";
      subWeaponHoverPanel.appendChild(conditionLabel);
    }

    const orderedStats = sortStats(stats);

    orderedStats.forEach((stat) => {
      const statLine = document.createElement("div");

      const label = formatLabel(stat.stat_name);
      const value = formatValue(stat);
      const prefix = value >= 0 ? "+" : "";

      const isElementOrUnavailable =
        stat.stat_name.toLowerCase().includes("element") ||
        stat.stat_name.toLowerCase().includes("unavailable");

      if (isElementOrUnavailable) {
        statLine.textContent = label;
        statLine.classList.add("mb-1");
      } else {
        const displayVal =
          stat.stat_type === "Percentage"
            ? `${prefix}${value}%`
            : `${prefix}${value}`;

        const lineText =
          stat.stat_name === "BaseATK" || stat.stat_name === "BaseStability"
            ? `${label}: ${value}${
                stat.stat_name === "BaseStability" ? "%" : ""
              }`
            : `${label} ${displayVal}`;

        statLine.textContent = lineText;
        statLine.classList.add(`text-${getColor(value)}`, "font-semibold");
      }

      statLine.style.marginBottom = "4px";
      if (condition !== "default") statLine.style.marginLeft = "10px";

      subWeaponHoverPanel.appendChild(statLine);
    });
  });

  const rect = liElement.getBoundingClientRect();

  subWeaponHoverPanel.style.position = "fixed";
  subWeaponHoverPanel.style.top = `${rect.bottom + 5}px`;
  subWeaponHoverPanel.style.left = `${rect.left}px`;
  subWeaponHoverPanel.style.display = "block";
}
function hideSubWeaponHoverPanel() {
  subWeaponHoverPanel.style.display = "none";
}
function initSubWeaponHoverPanel(subWeapons) {
  const listItems = subWeaponSelectList.querySelectorAll("li");
  listItems.forEach((li) => {
    li.addEventListener("mouseenter", () => {
      const subWeapon = subWeapons.find((w) => w.item_id === li.dataset.id);
      if (subWeapon) {
        showSubWeaponHoverStats(subWeapon, li);
      }
    });
    li.addEventListener("mouseleave", hideSubWeaponHoverPanel);
  });
}
function onSubWeaponATKDEFChange() {
  displaySelectedSubWeaponStats();
}
function onSubWeaponStabilityChange() {
  displaySelectedSubWeaponStats();
}
function onSubWeaponRefineChange(event) {
  subWeaponRefine.value = event.target.value;
}
function closeSubWeaponDropdown() {
  subWeaponSelectList.classList.add("hidden");
  hideSubWeaponHoverPanel();
}
function setSubWeaponSelectEnabled(enabled) {
  if (enabled) {
    subWeaponSelectButton.classList.remove("opacity-50", "cursor-not-allowed");
    subWeaponSelectButton.disabled = false;
  } else {
    subWeaponSelectButton.classList.add("opacity-50", "cursor-not-allowed");
    subWeaponSelectButton.disabled = true;
    closeSubWeaponDropdown();
  }
}

function initSubWeaponSection() {
  setSubWeaponInputsEnabled(false);

  displaySelectedSubWeaponStats();
  clearSubWeaponSelect();
  subWeaponType.addEventListener("change", (event) => {
    onSubWeaponTypeChange(event);
    onUserInputChanged();
  });
  mainWeaponSelect.addEventListener("change", () => {
    selectedSubWeapon = null;
    setSubWeaponInputsEnabled(false);
    clearSubWeaponSelect();
    hideSubWeaponHoverPanel();
    const mainWeaponType = mainWeaponSelect.value;
    const allowedSubTypes = allowedSubWeaponTypes[mainWeaponType] || [];

    if (allowedSubTypes.length === 0) {
      setSubWeaponSelectEnabled(false);
      return;
    }

    const matchingSubWeapons = filteredItems.filter(
      (item) =>
        allowedSubTypes.includes(item.type_name) &&
        item.type_name.toLowerCase() !== mainWeaponType.toLowerCase()
    );

    if (matchingSubWeapons.length === 0) {
      setSubWeaponSelectEnabled(false);
      return;
    }

    populateSubWeaponSelect(matchingSubWeapons);
    setSubWeaponSelectEnabled(true);
    onUserInputChanged();
  });

  // Dropdown toggle
  subWeaponSelectButton.addEventListener("click", (event) => {
    toggleSubWeaponDropdown(event);
    onUserInputChanged();
  });

  // Handle selection from dropdown
  subWeaponSelectList.addEventListener("click", (event) => {
    onSubWeaponListClick(event);
    onUserInputChanged();
  });

  // Close dropdown if clicking outside
  document.addEventListener("click", (e) => {
    if (
      !subWeaponSelectButton.contains(e.target) &&
      !subWeaponSelectList.contains(e.target)
    ) {
      closeSubWeaponDropdown();
    }
    onUserInputChanged();
  });

  // Input listeners
  subWeaponATKDEF.addEventListener("input", (event) => {
    onSubWeaponATKDEFChange(event);
    onUserInputChanged();
  });
  subWeaponStability.addEventListener("input", (event) => {
    onSubWeaponStabilityChange(event);
    onUserInputChanged();
  });
  subWeaponRefine.addEventListener("change", (event) => {
    onSubWeaponRefineChange(event);
    onUserInputChanged();
  });
}

//######################################### ARMOR ##########################################
let selectedArmor = null;

const armorTypeSelect = document.getElementById("armorType");
const armorSelectButton = document.getElementById("armorSelectButton");
const armorSelectList = document.getElementById("armorSelectList");
const armorHoverPanel = document.getElementById("armorHoverPanel");

const armorDEF = document.getElementById("armorDEF");
const armorRefine = document.getElementById("armorRefine");

function setArmorInputsEnabled(enabled) {
  [armorDEF, armorRefine].forEach((input) => {
    input.disabled = !enabled;
    input.classList.toggle("opacity-50", !enabled);
    input.classList.toggle("cursor-not-allowed", !enabled);
  });
}

function setArmorSelectEnabled(enabled) {
  armorSelectButton.disabled = !enabled;
  armorSelectButton.classList.toggle("opacity-50", !enabled);
  armorSelectButton.classList.toggle("cursor-not-allowed", !enabled);
  if (!enabled) closeArmorDropdown();
}

function clearArmorSelect() {
  armorSelectButton.textContent = "Select Armor";
  armorSelectList.innerHTML = "";
  armorDEF.value = 0;
  armorRefine.value = 0;
  hideArmorHoverPanel();
}

function populateArmorSelect(armors) {
  hideArmorHoverPanel();

  const noneLi = document.createElement("li");
  noneLi.textContent = "--- None ---";
  noneLi.dataset.id = "None";
  noneLi.classList.add(
    "p-2",
    "cursor-pointer",
    "hover:bg-gray-600",
    "truncate",
    "font-semibold",
    "text-white"
  );
  armorSelectList.appendChild(noneLi);

  const customOption = document.createElement("li");
  customOption.textContent = "➕ Custom Armor";
  customOption.dataset.id = "custom";
  customOption.classList.add(
    "p-2",
    "cursor-pointer",
    "hover:bg-gray-600",
    "truncate",
    "text-green-300"
  );
  armorSelectList.appendChild(customOption);

  // Add real armor items
  armors.forEach((armor) => {
    const li = document.createElement("li");
    li.textContent = armor.item_name;
    li.dataset.id = armor.item_id;
    li.classList.add("p-2", "cursor-pointer", "hover:bg-gray-600", "truncate");
    armorSelectList.appendChild(li);
  });
}

function openArmorDropdown() {
  armorSelectList.classList.remove("hidden");
}

function closeArmorDropdown() {
  armorSelectList.classList.add("hidden");
  hideArmorHoverPanel();
}

function toggleArmorDropdown() {
  armorSelectList.classList.contains("hidden")
    ? openArmorDropdown()
    : closeArmorDropdown();
}

function onArmorTypeChange() {
  const selectedType = armorTypeSelect.value;
  setArmorInputsEnabled(false);
  setArmorSelectEnabled(false);
  //clearArmorSelect();

  if (selectedType === "None") {
    selectedArmor = null;
    clearArmorSelect();
    refreshCrystaAccess();
    displaySelectedArmorStats();
    return;
  }

  const matchingArmors = filteredItems.filter(
    (item) => item.type_name.toLowerCase() === "armor"
  );
  if (matchingArmors.length === 0) {
    selectedArmor = null;
    clearArmorSelect();
    displaySelectedArmorStats();
    refreshCrystaAccess();
    return;
  }

  populateArmorSelect(matchingArmors);
  setArmorSelectEnabled(true);
  initArmorHoverPanel(matchingArmors);
  displaySelectedArmorStats();
}

function onArmorListClick(event) {
  if (event.target.tagName !== "LI") return;

  const selectedId = event.target.dataset.id;
  if (selectedId === "None") {
    armorSelectButton.textContent = "Select Armor";
    selectedArmor = null;
    setArmorInputsEnabled(false);
    populateArmorDEF();
    displaySelectedArmorStats();
    refreshCrystaAccess();
    closeArmorDropdown();
    return;
  }
  if (selectedId === "custom") {
    selectedArmor = {
      item_id: null,
      item_name: "Custom Armor",
      type_name: "armor",
      stats: [
        {
          stat_name: "BaseDEF",
          value: 0,
          stat_type: "Flat",
          stat_condition: null,
        },
      ],
    };

    armorSelectButton.textContent = "Custom Armor";
    setArmorInputsEnabled(true); // enable DEF input
    populateArmorDEF();
    displaySelectedArmorStats();
    closeArmorDropdown();
    refreshCrystaAccess();
    return;
  }

  // Handle normal armor
  selectedArmor = filteredItems.find((item) => item.item_id === selectedId);

  if (selectedArmor) {
    armorSelectButton.textContent = selectedArmor.item_name;
    setArmorInputsEnabled(true);
    populateArmorDEF();
    displaySelectedArmorStats();
  }

  closeArmorDropdown();
  refreshCrystaAccess();
}

function populateArmorDEF() {
  if (!selectedArmor || !selectedArmor.stats) {
    armorDEF.value = "0";
    return;
  }

  const baseDefStat = selectedArmor.stats.find(
    (stat) => stat.stat_name === "BaseDEF"
  );

  armorDEF.value = baseDefStat ? Math.floor(baseDefStat.value) : "";
}

function displaySelectedArmorStats() {
  const container = document.getElementById("customArmorStatsContainer");
  container.innerHTML = "";

  if (!selectedArmor) {
    container.textContent = "No stats available";
    return;
  }

  const isCustom =
    !selectedArmor.item_id ||
    selectedArmor.item_name?.toLowerCase().includes("custom") ||
    selectedArmor.stats?.some((stat) =>
      stat.stat_name.toLowerCase().includes("potential")
    );

  if (isCustom) {
    createCustomStatsInputs(
      "customArmorStatsContainer",
      () => selectedArmor,
      "armor"
    );
    return;
  }

  if (!Array.isArray(selectedArmor.stats) || selectedArmor.stats.length === 0) {
    container.textContent = "No stats available";
    return;
  }

  function formatLabel(statName) {
    return statName === "BaseDEF" ? "Base DEF" : statName;
  }

  function formatValue(stat) {
    if (stat.stat_name === "BaseDEF") return parseInt(armorDEF.value);
    const val = parseFloat(stat.value);
    return Number.isInteger(val) ? val : val.toFixed(2);
  }

  const groupedStats = groupStatsByCondition(selectedArmor.stats);

  Object.entries(groupedStats).forEach(([condition, stats]) => {
    if (condition !== "default") {
      const conditionLabel = document.createElement("div");
      conditionLabel.textContent = condition;
      conditionLabel.classList.add("text-green-400", "font-semibold", "mt-3");
      container.appendChild(conditionLabel);
    }

    const orderedStats = sortStats(stats);

    orderedStats.forEach((stat) => {
      const statLine = document.createElement("div");
      statLine.classList.add("mb-1");
      if (condition !== "default") statLine.classList.add("ml-2");

      const value = formatValue(stat);
      const label = formatLabel(stat.stat_name);
      let displayText;

      if (stat.stat_name === "BaseDEF") {
        displayText = `${label}: ${value}`;
      } else {
        const prefix = value >= 0 ? "+" : "";
        const valWithPrefix = `${prefix}${value}`;
        const valFinal =
          stat.stat_type === "Percentage" ? `${valWithPrefix}%` : valWithPrefix;
        displayText = `${label} ${valFinal}`;
        statLine.classList.add(getTextColorClasses(value));
      }

      statLine.classList.add("text-blue-300");
      statLine.textContent = displayText;
      container.appendChild(statLine);
    });
  });
}

function showArmorHoverStats(armor, liElement) {
  armorHoverPanel.innerHTML = "";

  if (!armor || !armor.stats || armor.stats.length === 0) {
    armorHoverPanel.textContent = "No stats available";
    return;
  }

  function formatValue(stat) {
    if (stat.stat_name === "BaseDEF") {
      return Math.floor(stat.value);
    }
    const val = parseFloat(stat.value);
    return Number.isInteger(val) ? val : val.toFixed(2);
  }

  function formatLabel(statName) {
    if (statName === "BaseDEF") return "Base DEF";
    return statName;
  }

  function getColor(value) {
    if (value < 0) return "red-300";
    if (value === 0) return "white";
    return "blue-300";
  }

  const groupedStats = groupStatsByCondition(armor.stats);

  Object.entries(groupedStats).forEach(([condition, stats]) => {
    if (condition !== "default") {
      const conditionLabel = document.createElement("div");
      conditionLabel.textContent = condition;
      conditionLabel.style.color = "lightgreen";
      conditionLabel.style.fontWeight = "bold";
      conditionLabel.style.marginTop = "6px";
      armorHoverPanel.appendChild(conditionLabel);
    }

    const orderedStats = sortStats(stats);

    orderedStats.forEach((stat) => {
      const statLine = document.createElement("div");

      const label = formatLabel(stat.stat_name);
      const value = formatValue(stat);
      const prefix = value >= 0 ? "+" : "";

      const isUnavailable = stat.stat_name
        .toLowerCase()
        .includes("unavailable");

      if (isUnavailable) {
        statLine.textContent = label;
        statLine.classList.add("mb-1");
      } else {
        const displayVal =
          stat.stat_type === "Percentage"
            ? `${prefix}${value}%`
            : `${prefix}${value}`;

        const lineText =
          stat.stat_name === "BaseDEF"
            ? `${label}: ${value}`
            : `${label} ${displayVal}`;

        statLine.textContent = lineText;
        statLine.classList.add(`text-${getColor(value)}`, "font-semibold");
      }

      statLine.style.marginBottom = "4px";
      if (condition !== "default") statLine.style.marginLeft = "10px";

      armorHoverPanel.appendChild(statLine);
    });
  });

  const rect = liElement.getBoundingClientRect();

  armorHoverPanel.style.position = "fixed";
  armorHoverPanel.style.top = `${rect.bottom + 5}px`;
  armorHoverPanel.style.left = `${rect.left}px`;
  armorHoverPanel.style.display = "block";
}

function hideArmorHoverPanel() {
  armorHoverPanel.style.display = "none";
}

function initArmorHoverPanel(armors) {
  const listItems = armorSelectList.querySelectorAll("li");
  listItems.forEach((li) => {
    li.addEventListener("mouseenter", () => {
      const armor = armors.find((a) => a.item_id === li.dataset.id);
      if (armor) showArmorHoverStats(armor, li);
    });
    li.addEventListener("mouseleave", hideArmorHoverPanel);
  });
}

function initArmorSection() {
  setArmorInputsEnabled(false);
  setArmorSelectEnabled(false);
  displaySelectedArmorStats();
  clearArmorSelect();

  armorTypeSelect.addEventListener("change", (event) => {
    onArmorTypeChange(event);
    onUserInputChanged();
  });
  armorSelectButton.addEventListener("click", (event) => {
    toggleArmorDropdown(event);
    onUserInputChanged();
  });
  armorSelectList.addEventListener("click", (event) => {
    onArmorListClick(event);
    onUserInputChanged();
  });

  armorDEF.addEventListener("input", (event) => {
    displaySelectedArmorStats(event);
    onUserInputChanged();
  });
  armorRefine.addEventListener("change", (event) => {
    displaySelectedArmorStats(event);
    onUserInputChanged();
  });

  document.addEventListener("click", (e) => {
    if (
      !armorSelectButton.contains(e.target) &&
      !armorSelectList.contains(e.target)
    ) {
      closeArmorDropdown();
    }
    onUserInputChanged();
  });
}
//######################################### ADDITIONAL ##########################################
let selectedAdditional = null;

const additionalSelectButton = document.getElementById(
  "additionalSelectButton"
);
const additionalSelectLabel = document.getElementById("additionalSelectLabel");
const additionalSelectList = document.getElementById("additionalSelectList");
const additionalHoverPanel = document.getElementById("additionalHoverPanel");

const additionalDEF = document.getElementById("additionalDEF");
const additionalRefine = document.getElementById("additionalRefine");
const additionalStatsContainer = document.getElementById(
  "customAdditionalStatsContainer"
);

function setAdditionalInputsEnabled(enabled) {
  [additionalDEF, additionalRefine].forEach((input) => {
    input.disabled = !enabled;
    input.classList.toggle("opacity-50", !enabled);
    input.classList.toggle("cursor-not-allowed", !enabled);
  });
}

function clearAdditionalSelect() {
  additionalSelectLabel.textContent = "Select Additional";
  additionalSelectList.innerHTML = "";
  additionalRefine.value = 0;
  additionalDEF.value = 0;
  hideAdditionalHoverPanel();
}

function populateAdditionalSelect(items) {
  clearAdditionalSelect();

  const noneLi = document.createElement("li");
  noneLi.textContent = "--- None ---";
  noneLi.dataset.id = "None";
  noneLi.classList.add(
    "p-2",
    "cursor-pointer",
    "hover:bg-gray-600",
    "truncate",
    "font-semibold",
    "text-white"
  );
  additionalSelectList.appendChild(noneLi);

  const customOption = document.createElement("li");
  customOption.textContent = "➕ Custom Additional";
  customOption.dataset.id = "custom";
  customOption.classList.add(
    "p-2",
    "cursor-pointer",
    "hover:bg-gray-600",
    "truncate",
    "text-yellow-300"
  );
  additionalSelectList.appendChild(customOption);

  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item.item_name;
    li.dataset.id = item.item_id;
    li.classList.add("p-2", "cursor-pointer", "hover:bg-gray-600", "truncate");
    additionalSelectList.appendChild(li);
  });

  initAdditionalHoverPanel(items);
}

function toggleAdditionalDropdown() {
  additionalSelectList.classList.toggle("hidden");
}

function closeAdditionalDropdown() {
  additionalSelectList.classList.add("hidden");
  hideAdditionalHoverPanel();
}

function onAdditionalSelectClick(event) {
  if (event.target.tagName !== "LI") return;

  const selectedId = event.target.dataset.id;
  if (selectedId === "None") {
    additionalSelectButton.textContent = "Select Additional";
    selectedAdditional = null;
    setAdditionalInputsEnabled(false);
    populateAdditionalDEF();
    displaySelectedAdditionalStats();
    refreshCrystaAccess();
    closeAdditionalDropdown();
    return;
  }
  if (selectedId === "custom") {
    selectedAdditional = {
      item_id: null,
      item_name: "Custom Additional",
      type_name: "additional",
      stats: [
        {
          stat_name: "BaseDEF",
          value: 0,
          stat_type: "Flat",
          stat_condition: null,
        },
      ],
    };

    additionalSelectButton.textContent = "Custom Additional";
    setAdditionalInputsEnabled(true);
    populateAdditionalDEF();
    displaySelectedAdditionalStats();
    closeAdditionalDropdown();
    refreshCrystaAccess();
    return;
  }

  // Handle regular additional item
  selectedAdditional = filteredItems.find(
    (item) => item.item_id === selectedId
  );

  if (selectedAdditional) {
    additionalSelectButton.textContent = selectedAdditional.item_name;
    setAdditionalInputsEnabled(true);
    populateAdditionalDEF();
    displaySelectedAdditionalStats();
  }

  refreshCrystaAccess();
  closeAdditionalDropdown();
}

function populateAdditionalDEF() {
  if (!selectedAdditional || !selectedAdditional.stats) {
    additionalDEF.value = 0;
    return;
  }

  const baseDefStat = selectedAdditional.stats.find(
    (stat) => stat.stat_name === "BaseDEF"
  );
  additionalDEF.value = baseDefStat ? Math.floor(baseDefStat.value) : "";
}

function displaySelectedAdditionalStats() {
  additionalStatsContainer.innerHTML = "";

  if (!selectedAdditional) {
    additionalStatsContainer.textContent = "No stats available";
    return;
  }

  const isCustom =
    selectedAdditional?.item_name?.toLowerCase() === "custom additional";

  if (isCustom) {
    createCustomStatsInputs(
      "customAdditionalStatsContainer",
      () => selectedAdditional,
      "additional"
    );
    return;
  }

  if (
    !Array.isArray(selectedAdditional.stats) ||
    selectedAdditional.stats.length === 0
  ) {
    additionalStatsContainer.textContent = "No stats available";
    return;
  }

  const groupedStats = groupStatsByCondition(selectedAdditional.stats);

  Object.entries(groupedStats).forEach(([condition, stats]) => {
    if (condition !== "default") {
      const label = document.createElement("div");
      label.textContent = condition;
      label.classList.add("text-green-400", "font-semibold", "mt-3");
      additionalStatsContainer.appendChild(label);
    }

    const orderedStats = sortStats(stats);

    orderedStats.forEach((stat) => {
      const value = formatStatValue(stat);
      const label = formatStatLabel(stat.stat_name);
      const statLine = document.createElement("div");
      statLine.classList.add("text-blue-300", "mb-1");

      if (condition !== "default") statLine.classList.add("ml-2");

      let displayText;
      if (stat.stat_name === "BaseDEF") {
        displayText = `${label}: ${value}`;
      } else {
        const prefix = value >= 0 ? "+" : "";
        const valFinal =
          stat.stat_type === "Percentage"
            ? `${prefix}${value}%`
            : `${prefix}${value}`;
        displayText = `${label} ${valFinal}`;
        statLine.classList.add(getTextColorClasses(value));
      }

      statLine.textContent = displayText;
      additionalStatsContainer.appendChild(statLine);
    });
  });
}

function groupStatsByCondition(stats) {
  return stats.reduce((groups, stat) => {
    const key = stat.stat_condition || "default";
    if (!groups[key]) groups[key] = [];
    groups[key].push(stat);
    return groups;
  }, {});
}

function showAdditionalHoverStats(additional, liElement) {
  additionalHoverPanel.innerHTML = "";

  if (!additional || !additional.stats || additional.stats.length === 0) {
    additionalHoverPanel.textContent = "No stats available";
    return;
  }

  function formatValue(stat) {
    if (stat.stat_name === "BaseDEF") {
      return Math.floor(stat.value);
    }
    const val = parseFloat(stat.value);
    return Number.isInteger(val) ? val : val.toFixed(2);
  }

  function formatLabel(statName) {
    if (statName === "BaseDEF") return "Base DEF";
    return statName;
  }

  function getColor(value) {
    if (value < 0) return "red-300";
    if (value === 0) return "white";
    return "blue-300";
  }

  const groupedStats = groupStatsByCondition(additional.stats);

  Object.entries(groupedStats).forEach(([condition, stats]) => {
    if (condition !== "default") {
      const conditionLabel = document.createElement("div");
      conditionLabel.textContent = condition;
      conditionLabel.style.color = "lightgreen";
      conditionLabel.style.fontWeight = "bold";
      conditionLabel.style.marginTop = "6px";
      armorHoverPanel.appendChild(conditionLabel);
    }

    const orderedStats = sortStats(stats);

    orderedStats.forEach((stat) => {
      const statLine = document.createElement("div");

      const label = formatLabel(stat.stat_name);
      const value = formatValue(stat);
      const prefix = value >= 0 ? "+" : "";

      const isUnavailable = stat.stat_name
        .toLowerCase()
        .includes("unavailable");

      if (isUnavailable) {
        statLine.textContent = label;
        statLine.classList.add("mb-1");
      } else {
        const displayVal =
          stat.stat_type === "Percentage"
            ? `${prefix}${value}%`
            : `${prefix}${value}`;

        const lineText =
          stat.stat_name === "BaseDEF"
            ? `${label}: ${value}`
            : `${label} ${displayVal}`;

        statLine.textContent = lineText;
        statLine.classList.add(`text-${getColor(value)}`, "font-semibold");
      }

      statLine.style.marginBottom = "4px";
      if (condition !== "default") statLine.style.marginLeft = "10px";

      additionalHoverPanel.appendChild(statLine);
    });
  });

  const rect = liElement.getBoundingClientRect();

  additionalHoverPanel.style.position = "fixed";
  additionalHoverPanel.style.top = `${rect.bottom + 5}px`;
  additionalHoverPanel.style.left = `${rect.left}px`;
  additionalHoverPanel.style.display = "block";
}

function hideAdditionalHoverPanel() {
  additionalHoverPanel.style.display = "none";
}

function initAdditionalHoverPanel(items) {
  const listItems = additionalSelectList.querySelectorAll("li");

  listItems.forEach((li) => {
    li.addEventListener("mouseenter", () => {
      const item = items.find((i) => i.item_id === li.dataset.id);
      if (item) showAdditionalHoverStats(item, li);
    });
    li.addEventListener("mouseleave", hideAdditionalHoverPanel);
  });
}

function initAdditionalSection() {
  setAdditionalInputsEnabled(false);
  displaySelectedAdditionalStats();
  clearAdditionalSelect();

  additionalSelectButton.addEventListener("click", (event) => {
    toggleAdditionalDropdown(event);
    onUserInputChanged();
  });
  additionalSelectList.addEventListener("click", (event) => {
    onAdditionalSelectClick(event);
    onUserInputChanged();
  });

  additionalDEF.addEventListener("input", (event) => {
    displaySelectedAdditionalStats(event);
    onUserInputChanged();
  });
  additionalRefine.addEventListener("change", (event) => {
    displaySelectedAdditionalStats(event);
    onUserInputChanged();
  });

  document.addEventListener("click", (e) => {
    if (
      !additionalSelectButton.contains(e.target) &&
      !additionalSelectList.contains(e.target)
    ) {
      closeAdditionalDropdown();
    }
  });

  // Initial population (use filter if needed)
  const additionalItems = filteredItems.filter(
    (item) => item.type_name.toLowerCase() === "additional"
  );

  if (additionalItems.length > 0) {
    populateAdditionalSelect(additionalItems);
  }
}
//######################################### SPECIAL GEAR ##########################################
let selectedSpecial = null;

const specialSelectButton = document.getElementById("specialSelectButton");
const specialSelectLabel = document.getElementById("specialSelectLabel");
const specialSelectList = document.getElementById("specialSelectList");
const specialHoverPanel = document.getElementById("specialHoverPanel");

const specialDEF = document.getElementById("specialDEF");
const specialStatsContainer = document.getElementById(
  "customSpecialStatsContainer"
);

function setSpecialInputsEnabled(enabled) {
  specialDEF.disabled = !enabled;
  specialDEF.classList.toggle("opacity-50", !enabled);
  specialDEF.classList.toggle("cursor-not-allowed", !enabled);
}

function clearSpecialSelect() {
  specialSelectLabel.textContent = "Select Special Gear";
  specialSelectList.innerHTML = "";
  specialDEF.value = 0;
  hideSpecialHoverPanel();
}

function populateSpecialSelect(items) {
  clearSpecialSelect();

  const customOption = document.createElement("li");
  customOption.textContent = "➕ Custom Special";
  customOption.dataset.id = "custom_special";
  customOption.classList.add(
    "p-2",
    "cursor-pointer",
    "hover:bg-gray-600",
    "truncate",
    "text-purple-300"
  );
  specialSelectList.appendChild(customOption);

  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item.item_name;
    li.dataset.id = item.item_id;
    li.classList.add("p-2", "cursor-pointer", "hover:bg-gray-600", "truncate");
    specialSelectList.appendChild(li);
  });

  initSpecialHoverPanel(items);
}

function toggleSpecialDropdown() {
  specialSelectList.classList.toggle("hidden");
}

function closeSpecialDropdown() {
  specialSelectList.classList.add("hidden");
  hideSpecialHoverPanel();
}

function onSpecialSelectClick(event) {
  if (event.target.tagName !== "LI") return;

  const selectedId = event.target.dataset.id;

  if (selectedId === "None") {
    specialSelectButton.textContent = "Select Special Gear";
    selectedSpecial = null;
    setSpecialInputsEnabled(false);
    populateSpecialDEF();
    displaySelectedSpecialStats();
    refreshCrystaAccess();
    closeSpecialDropdown();
    return;
  }

  if (selectedId === "custom_special") {
    selectedSpecial = {
      item_id: null,
      item_name: "Custom Special",
      type_name: "special",
      stats: [
        {
          stat_name: "BaseDEF",
          value: 0,
          stat_type: "Flat",
          stat_condition: null,
        },
      ],
    };

    specialSelectLabel.textContent = "Custom Special";
    setSpecialInputsEnabled(true);
    populateSpecialDEF();
    displaySelectedSpecialStats();
    closeSpecialDropdown();
    refreshCrystaAccess();
    return;
  }

  // Handle regular special item
  selectedSpecial = filteredItems.find((item) => item.item_id === selectedId);

  if (selectedSpecial) {
    specialSelectLabel.textContent = selectedSpecial.item_name;
    setSpecialInputsEnabled(true);
    populateSpecialDEF();
    displaySelectedSpecialStats();
  }
  refreshCrystaAccess();
  closeSpecialDropdown();
}

function populateSpecialDEF() {
  if (!selectedSpecial || !selectedSpecial.stats) {
    specialDEF.value = 0;
    return;
  }

  const baseDefStat = selectedSpecial.stats.find(
    (stat) => stat.stat_name === "BaseDEF"
  );
  specialDEF.value = baseDefStat ? Math.floor(baseDefStat.value) : "";
}

function displaySelectedSpecialStats() {
  specialStatsContainer.innerHTML = "";

  if (!selectedSpecial) {
    specialStatsContainer.textContent = "No stats available";
    return;
  }

  const isCustom =
    selectedSpecial?.item_name?.toLowerCase() === "custom special";

  if (isCustom) {
    createCustomStatsInputs(
      "customSpecialStatsContainer",
      () => selectedSpecial,
      "special"
    );
    return;
  }

  if (
    !Array.isArray(selectedSpecial.stats) ||
    selectedSpecial.stats.length === 0
  ) {
    specialStatsContainer.textContent = "No stats available";
    return;
  }

  const groupedStats = groupStatsByCondition(selectedSpecial.stats);

  Object.entries(groupedStats).forEach(([condition, stats]) => {
    if (condition !== "default") {
      const label = document.createElement("div");
      label.textContent = condition;
      label.classList.add("text-green-400", "font-semibold", "mt-3");
      specialStatsContainer.appendChild(label);
    }

    const orderedStats = sortStats(stats);

    orderedStats.forEach((stat) => {
      const value = formatStatValue(stat);
      const label = formatStatLabel(stat.stat_name);
      const statLine = document.createElement("div");
      statLine.classList.add("text-blue-300", "mb-1");

      if (condition !== "default") statLine.classList.add("ml-2");

      let displayText;
      if (stat.stat_name === "BaseDEF") {
        displayText = `${label}: ${value}`;
      } else {
        const prefix = value >= 0 ? "+" : "";
        const valFinal =
          stat.stat_type === "Percentage"
            ? `${prefix}${value}%`
            : `${prefix}${value}`;
        displayText = `${label} ${valFinal}`;
        statLine.classList.add(getTextColorClasses(value));
      }

      statLine.textContent = displayText;
      specialStatsContainer.appendChild(statLine);
    });
  });
}

function formatStatValue(stat) {
  if (stat.stat_name === "BaseDEF") return parseInt(stat.value);
  const val = parseFloat(stat.value);
  return Number.isInteger(val) ? val : val.toFixed(2);
}

function formatStatLabel(statName) {
  return statName === "BaseDEF" ? "Base DEF" : statName;
}

function getTextColorClasses(value) {
  if (value < 0) return "text-red-300";
  if (value === 0) return "text-gray-300";
  return "text-blue-300";
}

function sortStats(stats) {
  const priorityMap = {
    BaseATK: 0,
    BaseDEF: 2,
    BaseStability: 3,
  };

  return [...stats].sort((a, b) => {
    const getPriority = (stat) => {
      if (stat.stat_name in priorityMap) return priorityMap[stat.stat_name];
      if (stat.stat_name.toLowerCase().includes("element")) return 4;
      return 99;
    };
    return getPriority(a) - getPriority(b);
  });
}
function sortStatCrysta(stats) {
  return stats.sort((a, b) => a.stat_name.localeCompare(b.stat_name));
}

function showSpecialHoverStats(special, liElement) {
  specialHoverPanel.innerHTML = "";

  if (!special || !special.stats || special.stats.length === 0) {
    specialHoverPanel.textContent = "No stats available";
    return;
  }

  function formatValue(stat) {
    if (stat.stat_name === "BaseDEF") {
      return Math.floor(stat.value);
    }
    const val = parseFloat(stat.value);
    return Number.isInteger(val) ? val : val.toFixed(2);
  }

  function formatLabel(statName) {
    if (statName === "BaseDEF") return "Base DEF";
    return statName;
  }

  function getColor(value) {
    if (value < 0) return "red-300";
    if (value === 0) return "white";
    return "blue-300";
  }

  const groupedStats = groupStatsByCondition(special.stats);

  Object.entries(groupedStats).forEach(([condition, stats]) => {
    if (condition !== "default") {
      const conditionLabel = document.createElement("div");
      conditionLabel.textContent = condition;
      conditionLabel.style.color = "lightgreen";
      conditionLabel.style.fontWeight = "bold";
      conditionLabel.style.marginTop = "6px";
      armorHoverPanel.appendChild(conditionLabel);
    }

    const orderedStats = sortStats(stats);

    orderedStats.forEach((stat) => {
      const statLine = document.createElement("div");

      const label = formatLabel(stat.stat_name);
      const value = formatValue(stat);
      const prefix = value >= 0 ? "+" : "";

      const isUnavailable = stat.stat_name
        .toLowerCase()
        .includes("unavailable");

      if (isUnavailable) {
        statLine.textContent = label;
        statLine.classList.add("mb-1");
      } else {
        const displayVal =
          stat.stat_type === "Percentage"
            ? `${prefix}${value}%`
            : `${prefix}${value}`;

        const lineText =
          stat.stat_name === "BaseDEF"
            ? `${label}: ${value}`
            : `${label} ${displayVal}`;

        statLine.textContent = lineText;
        statLine.classList.add(`text-${getColor(value)}`, "font-semibold");
      }

      statLine.style.marginBottom = "4px";
      if (condition !== "default") statLine.style.marginLeft = "10px";

      specialHoverPanel.appendChild(statLine);
    });
  });

  const rect = liElement.getBoundingClientRect();

  specialHoverPanel.style.position = "fixed";
  specialHoverPanel.style.top = `${rect.bottom + 5}px`;
  specialHoverPanel.style.left = `${rect.left}px`;
  specialHoverPanel.style.display = "block";
}

function hideSpecialHoverPanel() {
  specialHoverPanel.style.display = "none";
}

function initSpecialHoverPanel(items) {
  const listItems = specialSelectList.querySelectorAll("li");

  listItems.forEach((li) => {
    li.addEventListener("mouseenter", () => {
      const item = items.find((i) => i.item_id === li.dataset.id);
      if (item) showSpecialHoverStats(item, li);
    });
    li.addEventListener("mouseleave", hideSpecialHoverPanel);
  });
}

function initSpecialSection() {
  setSpecialInputsEnabled(false);
  displaySelectedSpecialStats();
  clearSpecialSelect();

  specialSelectButton.addEventListener("click", (event) => {
    toggleSpecialDropdown(event);
    onUserInputChanged();
  });
  specialSelectList.addEventListener("click", (event) => {
    onSpecialSelectClick(event);
    onUserInputChanged();
  });
  specialDEF.addEventListener("input", (event) => {
    displaySelectedSpecialStats(event);
    onUserInputChanged();
  });

  document.addEventListener("click", (e) => {
    if (
      !specialSelectButton.contains(e.target) &&
      !specialSelectList.contains(e.target)
    ) {
      closeSpecialDropdown();
    }
  });

  // Initial population
  const specialItems = filteredItems.filter(
    (item) => item.type_name.toLowerCase() === "special ring"
  );

  if (specialItems.length > 0) {
    populateSpecialSelect(specialItems);
  }
}
//######################################### CRYSTA ##########################################
let selectedCrysta = {
  weapon_crysta_1: null,
  weapon_crysta_2: null,
  armor_crysta_1: null,
  armor_crysta_2: null,
  additional_crysta_1: null,
  additional_crysta_2: null,
  special_crysta_1: null,
  special_crysta_2: null,
};
const crystaKeyToGear = {
  weapon_crysta_1: "weapon",
  weapon_crysta_2: "weapon",
  armor_crysta_1: "armor",
  armor_crysta_2: "armor",
  additional_crysta_1: "additional",
  additional_crysta_2: "additional",
  special_crysta_1: "special",
  special_crysta_2: "special",
};

const crystaDropdown = {
  "weapon xtal": ["dropdownMenu1", "dropdownMenu2"],
  "armor xtal": ["dropdownMenu3", "dropdownMenu4"],
  "additional xtal": ["dropdownMenu5", "dropdownMenu6"],
  "special xtal": ["dropdownMenu7", "dropdownMenu8"],
};

const crystaColorMap = {
  "normal xtal": "text-blue-500",
  "weapon xtal": "text-red-500",
  "armor xtal": "text-green-400",
  "additional xtal": "text-yellow-400",
  "special xtal": "text-purple-400",
};
const typePriority = {
  "normal xtal": 0,
  "weapon xtal": 1,
  "armor xtal": 2,
  "additional xtal": 3,
  "special xtal": 4,
};
const crystaKeyToDropdownNum = {
  weapon_crysta_1: 1,
  weapon_crysta_2: 2,
  armor_crysta_1: 3,
  armor_crysta_2: 4,
  additional_crysta_1: 5,
  additional_crysta_2: 6,
  special_crysta_1: 7,
  special_crysta_2: 8,
};
function clearCrystaSection(section) {
  const prefix = section.split(" ")[0]; // "weapon", "armor", etc.
  const keysToClear = Object.keys(selectedCrysta).filter((key) =>
    key.startsWith(prefix)
  );
  keysToClear.forEach((key) => updateSelectedCrysta(key, null));
}
function setCrystaSelectEnabled(section, isEnabled) {
  const dropdownIds = crystaDropdown[section] || [];

  dropdownIds.forEach((dropdownId) => {
    const indexMatch = dropdownId.match(/\d+$/);
    const index = indexMatch ? parseInt(indexMatch[0], 10) : 1;
    const button = document.getElementById(`dropdownButton${index}`);

    if (button) {
      button.disabled = !isEnabled;
      button.classList.toggle("opacity-50", !isEnabled);
      button.classList.toggle("cursor-not-allowed", !isEnabled);
    }
  });
}

function refreshCrystaAccess() {
  Object.keys(selectedCrysta).forEach((crystaKey) => {
    const gearType = crystaKeyToGear[crystaKey];
    const gearObj = {
      weapon: selectedWeapon,
      armor: selectedArmor,
      additional: selectedAdditional,
      special: selectedSpecial,
    }[gearType];

    const index = crystaKeyToDropdownNum[crystaKey];
    const button = document.getElementById(`dropdownButton${index}`);

    const shouldEnable = gearObj !== null;

    if (button) {
      button.disabled = !shouldEnable;
      button.classList.toggle("opacity-50", !shouldEnable);
      button.classList.toggle("cursor-not-allowed", !shouldEnable);
    }

    if (!shouldEnable) {
      updateSelectedCrysta(crystaKey, null);
    }
  });
  onUserInputChanged();
}

function populateCrystaDropdowns() {
  Object.entries(crystaDropdown).forEach(([typeKey, dropdownIds]) => {
    const itemsOfType = filteredItems.filter(
      (item) => item.type_name === "normal xtal" || item.type_name === typeKey
    );

    const sortedItems = itemsOfType.sort((a, b) => {
      const priorityA = typePriority[a.type_name] ?? 99;
      const priorityB = typePriority[b.type_name] ?? 99;

      if (priorityA !== priorityB) return priorityA - priorityB;
      return a.item_name.localeCompare(b.item_name);
    });

    dropdownIds.forEach((dropdownId) => {
      const dropdown = document.getElementById(dropdownId);
      if (!dropdown) return;

      dropdown.innerHTML = "";

      const noneLi = document.createElement("li");
      noneLi.className = "p-2 truncate hover:bg-gray-700 cursor-pointer";
      noneLi.textContent = "None";
      noneLi.dataset.id = "";
      dropdown.appendChild(noneLi);

      sortedItems.forEach((item) => {
        const li = document.createElement("li");
        const colorClass = crystaColorMap[item.type_name] || "text-white";
        li.className = `p-2 truncate hover:bg-gray-600 font-semibold cursor-pointer ${colorClass}`;
        li.textContent = item.item_name;
        li.dataset.id = item.item_id;
        dropdown.appendChild(li);
      });
    });
  });
}
function displayCrystaInfo(crysta, container) {
  container.innerHTML = "";

  if (!crysta || !crysta.stats || crysta.stats.length === 0) {
    container.textContent = "No stats available";
    return;
  }

  function formatValue(stat) {
    const val = parseFloat(stat.value);
    return Number.isInteger(val) ? val : val.toFixed(2);
  }

  function getColor(value) {
    const num = parseFloat(value);
    if (isNaN(num)) return "gray-200";
    if (num < 0) return "red-300";
    if (num === 0) return "gray-300";
    return "blue-300";
  }

  const title = document.createElement("div");
  title.textContent = crysta.item_name || "Crysta";
  title.classList.add(`${crystaColorMap[crysta.type_name]}`, "font-bold");
  title.style.marginBottom = "6px";
  container.appendChild(title);

  const groupedStats = groupStatsByCondition(crysta.stats);

  Object.entries(groupedStats).forEach(([condition, stats]) => {
    if (condition !== "default") {
      const conditionLabel = document.createElement("div");
      conditionLabel.textContent = condition;
      conditionLabel.style.color = "lightgreen";
      conditionLabel.style.fontWeight = "bold";
      conditionLabel.style.marginTop = "6px";
      container.appendChild(conditionLabel);
    }

    const orderedStats = sortStatCrysta(stats);

    orderedStats.forEach((stat) => {
      const statLine = document.createElement("div");
      const label = stat.stat_name;
      const value = formatValue(stat);
      const prefix = value >= 0 ? "+" : "";

      const isUnavailable = label.toLowerCase().includes("unavailable");

      if (isUnavailable) {
        statLine.textContent = label;
        statLine.classList.add("mb-1");
      } else {
        const displayVal =
          stat.stat_type === "Percentage"
            ? `${prefix}${value}%`
            : `${prefix}${value}`;
        statLine.textContent = `${label} ${displayVal}`;
        statLine.classList.add(
          `text-${getColor(value)}`,
          "font-semibold",
          "mb-1"
        );
      }

      statLine.style.marginBottom = "4px";
      if (condition !== "default") statLine.style.marginLeft = "10px";

      container.appendChild(statLine);
    });
  });
}

function updateSelectedCrysta(crystaKey, crystaData) {
  selectedCrysta[crystaKey] = crystaData || null;

  const index = crystaKeyToDropdownNum[crystaKey];
  if (!index) {
    return;
  }

  const selectedSpanId = `dropdownSelected${index}`;
  const selectedSpan = document.getElementById(selectedSpanId);

  if (selectedSpan) {
    selectedSpan.textContent = crystaData
      ? crystaData.item_name
      : "Select Crysta";

    selectedSpan.classList.remove(...Object.values(crystaColorMap));

    const colorClass = crystaData
      ? crystaColorMap[crystaData.type_name] || "text-white"
      : "text-white";

    selectedSpan.classList.add("truncate", colorClass);
  } else {
    // console.warn(`Element with ID ${selectedSpanId} not found`);
  }

  const containerId = `${crystaKey}_container`;
  const container = document.getElementById(containerId);

  if (container) {
    if (crystaData) {
      displayCrystaInfo(crystaData, container);
      container.classList.remove("hidden");
    } else {
      container.innerHTML = "";
      container.classList.add("hidden");
    }
  } else {
    // console.warn(`Container with ID ${containerId} not found`);
  }

  const dropdownMenu = document.getElementById(`dropdownMenu${index}`);
  if (dropdownMenu) {
    dropdownMenu.classList.add("hidden");
  }
  onUserInputChanged();
}

function initCrystaSelects() {
  populateCrystaDropdowns();

  const dropdownIdToCrystaKey = {};

  Object.entries(crystaDropdown).forEach(([typeKey, dropdownIds]) => {
    dropdownIds.forEach((dropdownId, idx) => {
      const prefix = typeKey.split(" ")[0];
      const crystaKey = `${prefix}_crysta_${idx + 1}`;
      dropdownIdToCrystaKey[dropdownId] = crystaKey;
    });
  });

  const crystaHoverPanel = document.createElement("div");
  Object.assign(crystaHoverPanel.style, {
    position: "absolute",
    background: "#1F2937",
    padding: "8px",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.5)",
    zIndex: 9999,
    display: "none",
    maxWidth: "300px",
    fontSize: "14px",
    pointerEvents: "none",
  });
  document.body.appendChild(crystaHoverPanel);

  function hideCrystaHoverPanel() {
    crystaHoverPanel.style.display = "none";
  }

  function showCrystaHoverPanel(crysta, liElement) {
    crystaHoverPanel.innerHTML = "";

    if (!crysta || !crysta.stats || crysta.stats.length === 0) {
      crystaHoverPanel.textContent = "No stats available";
      return;
    }

    function formatValue(stat) {
      const val = parseFloat(stat.value);
      return Number.isInteger(val) ? val : val.toFixed(2);
    }

    function getColor(value) {
      const num = parseFloat(value);
      if (isNaN(num)) return "gray-400";
      if (num < 0) return "red-300";
      if (num === 0) return "gray-200";
      return "blue-300";
    }

    const title = document.createElement("div");
    title.textContent = crysta.item_name || "Crysta";
    title.classList.add(`${crystaColorMap[crysta.type_name]}`, "font-bold");
    title.style.marginBottom = "6px";
    crystaHoverPanel.appendChild(title);

    const groupedStats = groupStatsByCondition(crysta.stats);

    Object.entries(groupedStats).forEach(([condition, stats]) => {
      if (condition !== "default") {
        const conditionLabel = document.createElement("div");
        conditionLabel.textContent = condition;
        conditionLabel.style.color = "lightgreen";
        conditionLabel.style.fontWeight = "bold";
        conditionLabel.style.marginTop = "6px";
        crystaHoverPanel.appendChild(conditionLabel);
      }

      const orderedStats = sortStatCrysta(stats);

      orderedStats.forEach((stat) => {
        const statLine = document.createElement("div");
        const label = stat.stat_name;
        const value = formatValue(stat);
        const prefix = value >= 0 ? "+" : "";

        const isUnavailable = stat.stat_name
          .toLowerCase()
          .includes("unavailable");

        if (isUnavailable) {
          statLine.textContent = label;
          statLine.classList.add("mb-1");
        } else {
          const displayVal =
            stat.stat_type === "Percentage"
              ? `${prefix}${value}%`
              : `${prefix}${value}`;

          statLine.textContent = `${label} ${displayVal}`;
          statLine.classList.add(`text-${getColor(value)}`, "font-semibold");
        }

        statLine.style.marginBottom = "4px";
        if (condition !== "default") statLine.style.marginLeft = "10px";

        crystaHoverPanel.appendChild(statLine);
      });
    });

    const rect = liElement.getBoundingClientRect();
    crystaHoverPanel.style.top = `${rect.bottom + window.scrollY + 5}px`;
    crystaHoverPanel.style.left = `${rect.left + window.scrollX}px`;
    crystaHoverPanel.style.display = "block";
  }

  Object.keys(dropdownIdToCrystaKey).forEach((dropdownId) => {
    const dropdown = document.getElementById(dropdownId);
    const indexMatch = dropdownId.match(/\d+$/);
    const index = indexMatch ? parseInt(indexMatch[0], 10) : 1;
    const button = document.getElementById(`dropdownButton${index}`);
    const crystaKey = dropdownIdToCrystaKey[dropdownId];

    if (!dropdown || !button) return;

    button.addEventListener("click", (e) => {
      e.stopPropagation();

      document.querySelectorAll(".dropdown-menu").forEach((menu) => {
        if (menu !== dropdown) menu.classList.add("hidden");
      });

      dropdown.classList.toggle("hidden");
      hideCrystaHoverPanel();
      onUserInputChanged();
    });

    dropdown.addEventListener("mouseover", (e) => {
      const li = e.target.closest("li");
      if (!li) return;

      const itemId = li.dataset.id;
      if (!itemId) {
        hideCrystaHoverPanel();
        return;
      }

      const crysta = filteredItems.find((c) => c.item_id === itemId);
      if (crysta) {
        showCrystaHoverPanel(crysta, li);
      }
    });

    dropdown.addEventListener("mouseout", (e) => {
      const related = e.relatedTarget;
      if (!dropdown.contains(related)) {
        hideCrystaHoverPanel();
      }
    });

    dropdown.addEventListener("click", (e) => {
      const li = e.target.closest("li");
      if (!li) return;

      const itemId = li.dataset.id;
      const crysta = filteredItems.find((c) => c.item_id === itemId) || null;
      updateSelectedCrysta(crystaKey, crysta);
      dropdown.classList.add("hidden");
      hideCrystaHoverPanel();
      onUserInputChanged();
    });
  });

  document.addEventListener("click", (e) => {
    const isDropdown = e.target.closest(".dropdown-menu");
    const isButton = e.target.closest("button[id^='dropdownButton']");
    const isHoverPanel = crystaHoverPanel.contains(e.target);

    if (!isDropdown && !isButton && !isHoverPanel) {
      document.querySelectorAll(".dropdown-menu").forEach((menu) => {
        menu.classList.add("hidden");
      });

      hideCrystaHoverPanel();
      onUserInputChanged();
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

// common.js or top of main.js
let appInitialized = false;
const appInitCallbacks = [];

function onAppInitialized(callback) {
  if (appInitialized) callback();
  else appInitCallbacks.push(callback);
}

async function initApp() {
  showLoading();
  await fetchItemData();
  populateRefineSelects();
  initWeaponSection();
  initSubWeaponSection();
  initArmorSection();
  initAdditionalSection();
  initSpecialSection();
  initCrystaSelects();
  refreshCrystaAccess();

  hideLoading();
  appInitialized = true;
  appInitCallbacks.forEach((cb) => cb());
}

const customGearConfigs = [
  {
    type: "weapon",
    selectId: "weaponSelectButton",
    containerId: "customWeaponStatsContainer",
    selectedRef: () => selectedWeapon,
  },

  {
    type: "armor",
    selectId: "armorSelectButton", // The *button* that sets gear, not the dropdown itself
    containerId: "customArmorStatsContainer",
    selectedRef: () => selectedArmor,
  },
  {
    type: "additional",
    selectId: "additionalSelectButton",
    containerId: "customAdditionalStatsContainer",
    selectedRef: () => selectedAdditional,
  },
  {
    type: "special",
    selectId: "specialSelectButton",
    containerId: "customSpecialStatsContainer",
    selectedRef: () => selectedSpecial,
  },
];
const availableStats = window.availableStats;
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function updateCustomStats(selectedItemRef, type, prefix = "") {
  const selectedItem = selectedItemRef();
  if (!selectedItem) return;

  selectedItem.item_id = null;
  selectedItem.item_name = `Custom ${capitalizeFirstLetter(type)}`;
  selectedItem.stats = [];

  for (let i = 0; i < 10; i++) {
    const statSelect = document.getElementById(`${prefix}CustomStat${i + 1}`);
    const statInput = document.getElementById(
      `${prefix}CustomStat${i + 1}Input`
    );

    if (statSelect && statSelect.value && statInput && statInput.value !== "") {
      const statKey = statSelect.value;
      const statInfo = availableStats[statKey];

      selectedItem.stats.push({
        stat_name: statInfo?.stat || statKey,
        value: parseFloat(statInput.value).toFixed(2),
        stat_type: statInfo?.type || "Flat",
        stat_condition: null,
      });
    }
  }
}
function createCustomStatsInputs(containerId, selectedItemRef, type) {
  type = type.replace(/\s+/g, "");

  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = "";

  for (let i = 0; i < 10; i++) {
    const row = document.createElement("div");
    row.classList.add("flex", "gap-2", "mb-2");

    const select = document.createElement("select");
    select.id = `${type}CustomStat${i + 1}`;
    select.classList.add(
      "w-7/10",
      "p-2",
      "bg-gray-600",
      "text-white",
      "border",
      "border-gray-600",
      "rounded-md"
    );

    const noneOption = document.createElement("option");
    noneOption.value = "";
    noneOption.textContent = "None";
    select.appendChild(noneOption);

    Object.keys(availableStats).forEach((key) => {
      const option = document.createElement("option");
      option.value = key;
      option.textContent = key;
      select.appendChild(option);
    });

    const input = document.createElement("input");
    input.type = "number";
    input.id = `${type}CustomStat${i + 1}Input`;
    input.classList.add(
      "w-3/10",
      "p-2",
      "bg-gray-600",
      "text-white",
      "border",
      "border-gray-600",
      "rounded-md"
    );
    input.placeholder = "Value";
    input.disabled = true;

    input.classList.add(
      "opacity-50",
      "cursor-not-allowed",
      "bg-gray-700",
      "text-gray-400"
    );
    input.classList.remove("bg-gray-600");

    select.addEventListener("change", () => {
      const disabled = select.value === "";
      input.disabled = disabled;

      input.classList.toggle("opacity-50", disabled);
      input.classList.toggle("cursor-not-allowed", disabled);

      if (disabled) {
        input.classList.remove("bg-gray-600");
        input.classList.add("bg-gray-700", "text-gray-400");
      } else {
        input.classList.add("bg-gray-600");
        input.classList.remove("bg-gray-700", "text-gray-400");
      }

      updateCustomStats(selectedItemRef, type, type);
    });

    input.addEventListener("input", () => {
      updateCustomStats(selectedItemRef, type, type);
    });

    row.appendChild(select);
    row.appendChild(input);
    container.appendChild(row);
  }
}
function initCustomGear() {
  customGearConfigs.forEach(({ selectId, containerId, selectedRef, type }) => {
    const selectBtn = document.getElementById(selectId);
    if (!selectBtn) return;
  });
}
function isCustomItem(item) {
  return (
    !item?.item_id ||
    item?.item_name?.toLowerCase().includes("custom") ||
    item?.stats?.some((stat) =>
      stat.stat_name?.toLowerCase().includes("potential")
    )
  );
}

document.addEventListener("DOMContentLoaded", () => {
  initCustomGear();
});

document
  .getElementById("avatarStatsToggle")
  .addEventListener("click", function () {
    const content = document.getElementById("avatarStatsContent");
    content.classList.toggle("hidden");
  });
document
  .getElementById("foodAndPotionStatsToggle")
  .addEventListener("click", function () {
    const content = document.getElementById("foodAndPotionStatsContent");
    content.classList.toggle("hidden");
  });

const selectedAvatar = {};
const selectedFoodbuff = {};
const selectedPotion = {};
//######################################### HELP ##########################################
function toggleInputState(inputEl, disabled) {
  if (!inputEl) return;
  if (disabled) {
    inputEl.disabled = true;
    inputEl.classList.add("bg-gray-600", "text-gray-400", "cursor-not-allowed");
    inputEl.classList.remove("bg-gray-800", "text-white", "cursor-auto");
    inputEl.value = 0;
  } else {
    inputEl.disabled = false;
    inputEl.classList.remove(
      "bg-gray-600",
      "text-gray-600",
      "cursor-not-allowed"
    );
    inputEl.classList.add("bg-gray-800", "text-white", "cursor-auto");
  }
}

//######################################### AVATAR ##########################################
function initAvatarSection() {
  const avatarStatsOptions = window.avatarStats;
  const availableStats = window.availableStats;

  function populateSelects() {
    const selects = document.querySelectorAll('select[id^="avatarSelected_"]');
    selects.forEach((select) => {
      select.innerHTML = "";
      avatarStatsOptions.forEach((optionText) => {
        const option = document.createElement("option");
        option.value = optionText;
        option.textContent = optionText;
        select.appendChild(option);
      });
    });
  }

  function updateSelected(selectId, statKey, value) {
    const inputId = selectId.replace("avatarSelected", "avatarStat");
    const inputEl = document.getElementById(inputId);

    if (statKey === "--- None ---") {
      delete selectedAvatar[selectId];
      toggleInputState(inputEl, true);
    } else {
      selectedAvatar[selectId] = {
        ...availableStats[statKey],
        value: Number(value) || 0,
      };
      toggleInputState(inputEl, false);
    }
  }

  function handleSelectChange(e) {
    const selectId = e.target.id;
    const statKey = e.target.value;
    const inputId = selectId.replace("avatarSelected", "avatarStat");
    const value = document.getElementById(inputId)?.value || 0;
    updateSelected(selectId, statKey, value);
  }

  function handleInputChange(e) {
    const inputId = e.target.id;
    const selectId = inputId.replace("avatarStat", "avatarSelected");
    const statKey = document.getElementById(selectId)?.value;
    if (statKey && statKey !== "--- None ---") {
      updateSelected(selectId, statKey, e.target.value);
    }
    onUserInputChanged();
  }

  function addListeners() {
    document
      .querySelectorAll('select[id^="avatarSelected_"]')
      .forEach((el) => el.addEventListener("change", handleSelectChange));
    document
      .querySelectorAll('input[id^="avatarStat_"]')
      .forEach((el) => el.addEventListener("input", handleInputChange));
  }

  function initInputs() {
    document
      .querySelectorAll('select[id^="avatarSelected_"]')
      .forEach((select) => {
        const inputId = select.id.replace("avatarSelected", "avatarStat");
        const input = document.getElementById(inputId);
        if (select.value === "--- None ---" || !select.value) {
          toggleInputState(input, true);
        } else {
          toggleInputState(input, false);
        }
      });
  }

  populateSelects();
  addListeners();
  initInputs();
}

//######################################### FOODBUFF ##########################################
function initFoodBuffSection() {
  const foodBuffStatsOptions = window.foodBuffStats;
  const availableStats = window.availableStats;

  function populateSelects() {
    const selects = document.querySelectorAll(
      'select[id^="foodBuffSelected_"]'
    );
    selects.forEach((select) => {
      select.innerHTML = "";
      foodBuffStatsOptions.forEach((optionText) => {
        const option = document.createElement("option");
        option.value = optionText;
        option.textContent = optionText;
        select.appendChild(option);
      });
    });
  }

  function updateSelected(selectId, statKey, value) {
    const inputId = selectId.replace("foodBuffSelected", "foodBuffStat");
    const inputEl = document.getElementById(inputId);

    if (statKey === "--- None ---") {
      delete selectedFoodbuff[selectId];
      toggleInputState(inputEl, true);
    } else {
      selectedFoodbuff[selectId] = {
        ...availableStats[statKey],
        value: Number(value) || 0,
      };
      toggleInputState(inputEl, false);
    }
  }

  function handleSelectChange(e) {
    const selectId = e.target.id;
    const statKey = e.target.value;
    const inputId = selectId.replace("foodBuffSelected", "foodBuffStat");
    const value = document.getElementById(inputId)?.value || 0;
    updateSelected(selectId, statKey, value);
  }

  function handleInputChange(e) {
    const inputId = e.target.id;
    const selectId = inputId.replace("foodBuffStat", "foodBuffSelected");
    const statKey = document.getElementById(selectId)?.value;
    if (statKey && statKey !== "--- None ---") {
      updateSelected(selectId, statKey, e.target.value);
    }
    onUserInputChanged();
  }

  function addListeners() {
    document
      .querySelectorAll('select[id^="foodBuffSelected_"]')
      .forEach((el) => el.addEventListener("change", handleSelectChange));
    document
      .querySelectorAll('input[id^="foodBuffStat_"]')
      .forEach((el) => el.addEventListener("input", handleInputChange));
  }

  function initInputs() {
    document
      .querySelectorAll('select[id^="foodBuffSelected_"]')
      .forEach((select) => {
        const inputId = select.id.replace("foodBuffSelected", "foodBuffStat");
        const input = document.getElementById(inputId);
        if (select.value === "--- None ---" || !select.value) {
          toggleInputState(input, true);
        } else {
          toggleInputState(input, false);
        }
      });
  }

  populateSelects();
  addListeners();
  initInputs();
}

//######################################### POTION ##########################################
function initPotionSection() {
  const potionStatsOptions = window.potionStats;
  const availableStats = window.availableStats;

  function populateSelects() {
    const selects = document.querySelectorAll('select[id^="potionSelected_"]');
    selects.forEach((select) => {
      select.innerHTML = "";
      potionStatsOptions.forEach((optionText) => {
        const option = document.createElement("option");
        option.value = optionText;
        option.textContent = optionText;
        select.appendChild(option);
      });
    });
  }

  function updateSelected(selectId, statKey, value) {
    const inputId = selectId.replace("potionSelected", "potionStat");
    const inputEl = document.getElementById(inputId);

    if (statKey === "--- None ---") {
      delete selectedPotion[selectId];
      toggleInputState(inputEl, true);
    } else {
      selectedPotion[selectId] = {
        ...availableStats[statKey],
        value: Number(value) || 0,
      };
      toggleInputState(inputEl, false);
    }
  }

  function handleSelectChange(e) {
    const selectId = e.target.id;
    const statKey = e.target.value;
    const inputId = selectId.replace("potionSelected", "potionStat");
    const value = document.getElementById(inputId)?.value || 0;
    updateSelected(selectId, statKey, value);
  }

  function handleInputChange(e) {
    const inputId = e.target.id;
    const selectId = inputId.replace("potionStat", "potionSelected");
    const statKey = document.getElementById(selectId)?.value;
    if (statKey && statKey !== "--- None ---") {
      updateSelected(selectId, statKey, e.target.value);
    }
    onUserInputChanged();
  }

  function addListeners() {
    document
      .querySelectorAll('select[id^="potionSelected_"]')
      .forEach((el) => el.addEventListener("change", handleSelectChange));
    document
      .querySelectorAll('input[id^="potionStat_"]')
      .forEach((el) => el.addEventListener("input", handleInputChange));
  }

  function initInputs() {
    document
      .querySelectorAll('select[id^="potionSelected_"]')
      .forEach((select) => {
        const inputId = select.id.replace("potionSelected", "potionStat");
        const input = document.getElementById(inputId);
        if (select.value === "--- None ---" || !select.value) {
          toggleInputState(input, true);
        } else {
          toggleInputState(input, false);
        }
      });
  }

  populateSelects();
  addListeners();
  initInputs();
}

document.addEventListener("DOMContentLoaded", () => {
  initAvatarSection();
  initFoodBuffSection();
  initPotionSection();
});

const activeSkills = window.skillActive;
let renderActiveSkills;

document
  .getElementById("activeSkillToggle")
  .addEventListener("click", function () {
    const content = document.getElementById("activeSkillContent");
    content.classList.toggle("hidden");
  });
function handleActiveSkillChange(event) {
  const target = event.target;
  const index = target.dataset.index;
  if (index === undefined) return;

  if (target.classList.contains("active-skill-select")) {
    activeSkills[index].skillLevel = parseInt(target.value);
  } else if (target.classList.contains("stack-number-input")) {
    if (Array.isArray(activeSkills[index].stackNumber)) {
      const stackIndex = target.dataset.stack;
      activeSkills[index].stackNumber[stackIndex] = parseInt(target.value);
    } else {
      activeSkills[index].stackNumber = parseInt(target.value);
    }
  }
}

function initActiveSkill() {
  const skillsContainer = document.getElementById("active-skills-container");
  const skills = activeSkills;

  renderActiveSkills = function displaySkills() {
    skillsContainer.innerHTML = "";

    skills.forEach((skill, index) => {
      let stackInputHTML = "";

      if (skill.isStackable) {
        if (Array.isArray(skill.stackNumber)) {
          stackInputHTML = skill.stackNumber
            .map(
              (value, i) => `
              <input type="number" min="0" value="${value}"
                class="stack-number-input border p-0.5 rounded bg-gray-600 text-white w-14 text-center focus:outline-none"
                data-index="${index}" data-stack="${i}" />
            `
            )
            .join("");
        } else {
          stackInputHTML = `
            <input type="number" min="0" value="${skill.stackNumber}"
              class="stack-number-input border p-0.5 rounded bg-gray-600 text-white w-14 text-center focus:outline-none"
              data-index="${index}" />
          `;
        }
      }

      const skillDiv = document.createElement("div");
      skillDiv.classList.add(
        "flex",
        "items-center",
        "p-2",
        "border",
        "rounded-md",
        "bg-gray-700",
        "shadow-md",
        "w-full",
        "transition",
        "duration-300",
        "hover:bg-gray-600"
      );

      skillDiv.innerHTML = `
        <div class="flex items-center space-x-2 w-full">
          <img loading="lazy" src="${skill.icon}" alt="${
        skill.skillName
      }" class="w-8 h-8" />
          <span class="text-white truncate flex-grow">${skill.skillName}</span>

          ${stackInputHTML}

          <select class="border p-0.5 rounded bg-gray-600 text-white w-12 text-center focus:outline-none ml-auto active-skill-select"
            data-index="${index}">
            ${[...Array(11)]
              .map(
                (_, i) =>
                  `<option value="${i}" ${
                    i === skill.skillLevel ? "selected" : ""
                  }>${i}</option>`
              )
              .join("")}
          </select>
        </div>
      `;

      skillsContainer.appendChild(skillDiv);
      onUserInputChanged();
    });
  };

  // Attach event listener with the named function
  skillsContainer.addEventListener("change", handleActiveSkillChange);

  // Initial render
  renderActiveSkills();
}

document.addEventListener("DOMContentLoaded", () => {
  initActiveSkill();
});

const passiveSkills = window.skillPassive;
let renderPassiveSkills;

document
  .getElementById("passiveSkillToggle")
  .addEventListener("click", function () {
    const content = document.getElementById("passiveSkillContent");
    content.classList.toggle("hidden");
  });

function handlePassiveSkillChange(event) {
  const target = event.target;
  const index = target.dataset.index;
  if (index === undefined) return;

  // Skill level
  if (target.classList.contains("skill-select")) {
    passiveSkills[index].skillLevel = parseInt(target.value);

    // Stack number
  } else if (target.classList.contains("stack-number-input")) {
    // If stackNumber is an array, update specific one
    if (Array.isArray(passiveSkills[index].stackNumber)) {
      const stackIndex = target.dataset.stack;
      passiveSkills[index].stackNumber[stackIndex] =
        parseInt(target.value) || 0;

      // Single value
    } else {
      passiveSkills[index].stackNumber = parseInt(target.value) || 0;
    }
  }

  onUserInputChanged();
}

function initPassiveSkill() {
  const skillsContainer = document.getElementById("passive-skills-container");
  const skills = passiveSkills;

  renderPassiveSkills = function displaySkills() {
    skillsContainer.innerHTML = "";

    skills.forEach((skill, index) => {
      let stackInputHTML = "";

      // Handle stackable skills
      if (skill.isStackable) {
        if (Array.isArray(skill.stackNumber)) {
          // Multi-stack input (same as active skills)
          stackInputHTML = skill.stackNumber
            .map(
              (value, i) => `
                <input type="number" min="0" value="${value}"
                  class="stack-number-input border p-0.5 rounded bg-gray-600 text-white w-14 text-center focus:outline-none"
                  data-index="${index}" data-stack="${i}" />
              `
            )
            .join("");
        } else {
          // Single-stack value
          stackInputHTML = `
            <input type="number" min="0" value="${skill.stackNumber}"
              class="stack-number-input border p-0.5 rounded bg-gray-600 text-white w-14 text-center focus:outline-none"
              data-index="${index}" />
          `;
        }
      }

      // Build passive skill UI row
      const skillDiv = document.createElement("div");
      skillDiv.classList.add(
        "flex",
        "items-center",
        "p-2",
        "border",
        "rounded-md",
        "bg-gray-700",
        "shadow-md",
        "w-full",
        "transition",
        "duration-300",
        "hover:bg-gray-600"
      );

      skillDiv.innerHTML = `
        <div class="flex items-center space-x-2 w-full">
          <img loading="lazy" src="${skill.icon}" alt="${skill.skillName}" 
               class="w-8 h-8" />

          <span class="text-white truncate flex-grow">${skill.skillName}</span>

          ${stackInputHTML}

          <select class="border p-0.5 rounded bg-gray-600 text-white w-12 text-center focus:outline-none ml-auto skill-select"
              data-index="${index}">
            ${[...Array(11)]
              .map(
                (_, i) => `
                  <option value="${i}" ${
                  i === skill.skillLevel ? "selected" : ""
                }>${i}</option>
                `
              )
              .join("")}
          </select>
        </div>
      `;

      skillsContainer.appendChild(skillDiv);
    });

    onUserInputChanged();
  };

  // Attach event listener
  skillsContainer.addEventListener("change", handlePassiveSkillChange);

  // Initial render
  renderPassiveSkills();
}

document.addEventListener("DOMContentLoaded", () => {
  initPassiveSkill();
});

//######################################### TEXT DEFINE ##########################################

//######################################### HELPER FUNCTION ##########################################

function formatNumber(value, roundingMode = "normal") {
  if (typeof value !== "number" || isNaN(value)) return 0;

  value = parseFloat(value.toFixed(2));

  switch (roundingMode.toLowerCase()) {
    case "down":
      return Math.floor(value);
    case "up":
      return Math.ceil(value);
    case "trunc":
      return value < 0 ? Math.ceil(value) : Math.floor(value);
    case "normal":
    default:
      return Number(value % 1 === 0 ? value.toFixed(0) : value.toFixed(1));
  }
}

function getDefenseReduction(defValue) {
  let reduction = 0;

  if (defValue <= 250) {
    reduction += Math.floor(defValue / 10) * 0.8;
    return Math.min(reduction, 20);
  } else {
    reduction += 20;
  }

  if (defValue <= 1250) {
    const tier2Points = defValue - 250;
    reduction += Math.floor(tier2Points / 100) * 1;
    return Math.min(reduction, 30);
  } else {
    reduction += 10;
  }

  const tier3Points = defValue - 1250;
  reduction += Math.floor(tier3Points / 333.333) * 1;

  return reduction;
}
function applyResReduction(resist) {
  if (resist >= 0) {
    let effective = 0;
    let chunk = 50;
    let value = resist;
    let factor = 1;

    while (value >= chunk) {
      effective += chunk * factor;
      value -= chunk;
      factor /= 2;
    }

    effective += value * factor;
    return effective;
  } else {
    let effective = 0;
    let chunk = 50;
    let value = -resist;
    let factor = 1;

    while (value >= chunk) {
      effective += chunk * factor;
      value -= chunk;
      factor *= 2;
    }

    effective += value * factor;
    return -effective;
  }
}

function setBreakdownText(name, sources) {
  const parts = sources
    .filter((s) => s.value > 0 || s.value < 0)
    .map((s) => `${s.value} (${s.label})`);
  window[`${name}_Text`] = parts.join(" + ");
}

//######################################### GET FUNCTION ##########################################
function getEquipmentStat(statKey, valueType = "All") {
  const subWeaponRules = {
    barehand: {
      shield: "all",
      dagger: "all",
      arrow: "except-element",
      "magic device": "element-only",
      knuckles: "none",
      "ninjutsu scroll": "all",
    },
    "one handed sword": {
      "one handed sword": "element-only",
      arrow: "except-element",
      "magic device": "element-only",
      shield: "all",
      dagger: "all",
      knuckles: "none",
      "ninjutsu scroll": "all",
    },

    bow: {
      arrow: "all",
      katana: "none",
    },
    bowgun: {
      arrow: "all",
      dagger: "all",
      "magic device": "element-only",
      knuckles: "none",
      shield: "all",
    },
    staff: {
      arrow: "except-element",
      dagger: "all",
      "magic device": "element-only",
      knuckles: "none",
      shield: "all",
      "ninjutsu scroll": "all",
    },
    "magic device": {
      "ninjutsu scroll": "all",
    },
    knuckles: {
      arrow: "except-element",
      dagger: "all",
      "magic device": "element-only",
      shield: "all",
    },
    halberd: {
      arrow: "except-element",
      dagger: "all",
    },
    katana: {
      "ninjutsu scroll": "all",
      dagger: "all",
    },
  };

  const availableStat = window.availableStats?.[statKey];
  if (!availableStat) return 0;

  const { stat, type } = availableStat;

  const equipmentList = [
    selectedWeapon,
    selectedSubWeapon,
    selectedArmor,
    selectedAdditional,
    selectedSpecial,
  ];

  const mainWeaponType = mainWeapon?.value.toLowerCase() || "";
  const subWeaponType = subWeaponTypeSelect?.value.toLowerCase() || "";
  const armorType = armorTypeSelect?.value.toLowerCase() + " armor" || "";

  let totalValue = 0;

  for (let i = 0; i < equipmentList.length; i++) {
    const equipment = equipmentList[i];
    if (!equipment || !Array.isArray(equipment.stats)) continue;

    const isSubWeapon = i === 1;

    for (const s of equipment.stats) {
      if (s.stat_name !== stat || s.stat_type !== type) continue;

      if (isSubWeapon) {
        const rule = subWeaponRules?.[mainWeaponType]?.[subWeaponType];

        if (!rule || rule === "none") {
          continue;
        }

        if (rule === "all") {
        } else if (rule === "element-only" && s.stat_name !== "element") {
          continue;
        } else if (rule === "except-element" && s.stat_name === "element") {
          continue;
        }
      }

      if (s.stat_condition) {
        const conditions = s.stat_condition
          .split(",")
          .map((c) => c.trim().toLowerCase());

        const equippedTypes = [
          mainWeaponType?.toLowerCase(),
          subWeaponType?.toLowerCase(),
          armorType?.toLowerCase(),
        ];

        const matchesCondition = conditions.some((cond) => {
          const cleaned = cond.replace(/\b(with|only)\b/gi, "").trim();

          if (cleaned === "magic tools") {
            return ["staff", "magic device"].some((type) =>
              [mainWeaponType, subWeaponType].includes(type)
            );
          }
          if (cleaned === "dual sword") {
            return (
              mainWeaponType === "one handed sword" &&
              subWeaponType === "one handed sword"
            );
          }

          return equippedTypes.includes(cleaned);
        });

        if (!matchesCondition) {
          continue;
        }
      }

      const value = parseFloat(s.value);
      if (!isNaN(value)) {
        if (
          (valueType === "Positive" && value < 0) ||
          (valueType === "Negative" && value >= 0)
        ) {
          continue;
        }

        totalValue += value;
      }
    }
  }

  return totalValue;
}

function getCrystaStat(statKey, valueType = "All") {
  if (!window.availableStats || !window.availableStats[statKey]) {
    return 0;
  }

  const { stat, type } = window.availableStats[statKey];
  const crystaList = selectedCrysta;

  // Get currently equipped types
  const mainWeaponType = mainWeapon?.value.toLowerCase() || "";
  const subWeaponType = subWeaponTypeSelect?.value.toLowerCase() || "";
  const armorType = armorTypeSelect?.value.toLowerCase() + " armor" || "none";

  const equippedTypes = [mainWeaponType, subWeaponType, armorType];

  let totalValue = 0;

  for (const crysta of Object.values(crystaList)) {
    if (!crysta || !Array.isArray(crysta.stats)) continue;

    for (const s of crysta.stats) {
      if (s.stat_name !== stat || s.stat_type !== type) continue;

      if (s.stat_condition) {
        const conditions = s.stat_condition
          .split(",")
          .map((c) => c.trim().toLowerCase());

        const matchesCondition = conditions.some((cond) => {
          const cleaned = cond.replace(/\b(with|only)\b/gi, "").trim();

          if (cleaned === "magic tools") {
            return ["staff", "magic device"].some((type) =>
              [mainWeaponType, subWeaponType].includes(type)
            );
          }
          if (cleaned === "dual sword") {
            return (
              mainWeaponType === "one handed sword" &&
              subWeaponType === "one handed sword"
            );
          }

          return equippedTypes.includes(cleaned);
        });

        if (!matchesCondition) continue;
      }

      const value = parseFloat(s.value);
      if (!isNaN(value)) {
        if (
          (valueType === "Positive" && value < 0) ||
          (valueType === "Negative" && value >= 0)
        ) {
          continue;
        }

        totalValue += value;
      }
    }
  }

  return totalValue;
}

function getAvatarPotionFoodbuffStat(
  statKey,
  typeName = null,
  valueType = "All"
) {
  if (!window.availableStats || !window.availableStats[statKey] || !typeName) {
    return 0;
  }

  const { stat, type } = window.availableStats[statKey];

  let totalValue = 0;

  let selectedType;

  if (typeName === "Avatar") selectedType = selectedAvatar;
  else if (typeName === "Potion") selectedType = selectedPotion;
  else if (typeName === "FoodBuff") selectedType = selectedFoodbuff;

  for (const key in selectedType) {
    const category = selectedType[key];

    if (!category) continue;

    if (category.stat === stat && category.type === type) {
      const value = parseFloat(category.value);
      if (!isNaN(value)) {
        if (
          (valueType === "Positive" && value < 0) ||
          (valueType === "Negative" && value >= 0)
        ) {
          continue;
        }

        totalValue += value;
      }
    }
  }

  return Number(totalValue) || 0;
}

function getTotalSTR() {
  let total =
    CHARACTER_STAT.STR +
    getEquipmentStat("STR") +
    getCrystaStat("STR") +
    getAvatarPotionFoodbuffStat("STR", "Avatar") +
    getAvatarPotionFoodbuffStat("STR", "Potion") +
    getAvatarPotionFoodbuffStat("STR", "FoodBuff") +
    formatNumber(
      CHARACTER_STAT.STR *
        ((getAvatarPotionFoodbuffStat("STR%", "Avatar") +
          getAvatarPotionFoodbuffStat("STR%", "Potion") +
          getAvatarPotionFoodbuffStat("STR%", "FoodBuff") +
          getEquipmentStat("STR%") +
          getCrystaStat("STR%")) /
          100),
      "trunc"
    );

  return total;
}
function getTotalINT() {
  let total =
    CHARACTER_STAT.INT +
    getEquipmentStat("INT") +
    getCrystaStat("INT") +
    getAvatarPotionFoodbuffStat("INT", "Avatar") +
    getAvatarPotionFoodbuffStat("INT", "Potion") +
    getAvatarPotionFoodbuffStat("INT", "FoodBuff") +
    formatNumber(
      CHARACTER_STAT.INT *
        ((getAvatarPotionFoodbuffStat("INT%", "Avatar") +
          getAvatarPotionFoodbuffStat("INT%", "Potion") +
          getAvatarPotionFoodbuffStat("INT%", "FoodBuff") +
          getEquipmentStat("INT%") +
          getCrystaStat("INT%")) /
          100),
      "trunc"
    );

  return total;
}
function getTotalVIT() {
  let total =
    CHARACTER_STAT.VIT +
    getEquipmentStat("VIT") +
    getCrystaStat("VIT") +
    getAvatarPotionFoodbuffStat("VIT", "Avatar") +
    getAvatarPotionFoodbuffStat("VIT", "Potion") +
    getAvatarPotionFoodbuffStat("VIT", "FoodBuff") +
    formatNumber(
      CHARACTER_STAT.VIT *
        ((getAvatarPotionFoodbuffStat("VIT%", "Avatar") +
          getAvatarPotionFoodbuffStat("VIT%", "Potion") +
          getAvatarPotionFoodbuffStat("VIT%", "FoodBuff") +
          getEquipmentStat("VIT%") +
          getCrystaStat("VIT%")) /
          100),
      "trunc"
    ) +
    getKnightStance().VIT_Flat;
  return total;
}
function getTotalAGI() {
  let total =
    CHARACTER_STAT.AGI +
    getEquipmentStat("AGI") +
    getCrystaStat("AGI") +
    getAvatarPotionFoodbuffStat("AGI", "Avatar") +
    getAvatarPotionFoodbuffStat("AGI", "Potion") +
    getAvatarPotionFoodbuffStat("AGI", "FoodBuff") +
    formatNumber(
      CHARACTER_STAT.AGI *
        ((getAvatarPotionFoodbuffStat("AGI%", "Avatar") +
          getAvatarPotionFoodbuffStat("AGI%", "Potion") +
          getAvatarPotionFoodbuffStat("AGI%", "FoodBuff") +
          getEquipmentStat("AGI%") +
          getCrystaStat("AGI%")) /
          100),
      "trunc"
    ) +
    getGodspeed().AGI_Flat;
  return total;
}
function getTotalDEX() {
  let total =
    CHARACTER_STAT.DEX +
    getEquipmentStat("DEX") +
    getCrystaStat("DEX") +
    getAvatarPotionFoodbuffStat("DEX", "Avatar") +
    getAvatarPotionFoodbuffStat("DEX", "Potion") +
    getAvatarPotionFoodbuffStat("DEX", "FoodBuff") +
    formatNumber(
      CHARACTER_STAT.DEX *
        ((getAvatarPotionFoodbuffStat("DEX%", "Avatar") +
          getAvatarPotionFoodbuffStat("DEX%", "Potion") +
          getAvatarPotionFoodbuffStat("DEX%", "FoodBuff") +
          getEquipmentStat("DEX%") +
          getCrystaStat("DEX%")) /
          100),
      "trunc"
    );
  return total;
}
function getTotalTEC() {
  if (CHARACTER_STAT.extraType !== "TEC" || !CHARACTER_STAT.extraValue)
    return 0;
  let total = CHARACTER_STAT.extraValue || 0;
  return total;
}
function getTotalCRT() {
  if (CHARACTER_STAT.extraType !== "CRT" || !CHARACTER_STAT.extraValue)
    return 0;
  let total = CHARACTER_STAT.extraValue || 0;
  return total;
}
function getTotalMTL() {
  if (CHARACTER_STAT.extraType !== "MTL" || !CHARACTER_STAT.extraValue)
    return 0;
  let total = CHARACTER_STAT.extraValue || 0;
  return total;
}
function getBaseMaxHP() {
  const level = CHARACTER_STAT.level;
  const totalVIT = getTotalVIT();

  const baseHP = 93;
  const baseHPFromVIT = formatNumber((totalVIT + 22.4) * (level / 3), "down");

  return {
    baseHP,
    baseHPFromVIT,
  };
}

function getBaseMaxMP() {
  let baseMP = 100 + CHARACTER_STAT.level;
  let baseMPFromINT = formatNumber(getTotalINT() / 10, "down");
  let baseMPFromTEC = Math.max(0, getTotalTEC() - 1);
  let BaseMaxMP = baseMP + baseMPFromINT + baseMPFromTEC;
  return { BaseMaxMP, baseMP, baseMPFromINT, baseMPFromTEC };
}
function getBaseCriticalRate() {
  let baseCriticalRateFromCRT = Math.max(0, getTotalCRT() / 3.4);
  let baseCriticalRate = 25 + baseCriticalRateFromCRT;
  return {
    baseCriticalRate,
    baseCriticalRateFromCRT,
  };
}
function getRefineReduction() {
  let subWeaponType = subWeaponTypeSelect.value.toLowerCase();
  let RefineReduction =
    Number(armorRefine.value) + Number(additionalRefine.value) || 0;

  if (subWeaponType === "shield") {
    RefineReduction += Number(subWeaponRefine.value) || 0;
  }
  if (subWeaponType === "magic device") {
    RefineReduction += Number(getMagicSkin().RefineReduction || 0);
  }

  return RefineReduction;
}
function getMaxHP() {
  const base = getBaseMaxHP();
  const baseHP = base.baseHP;
  const baseHPFromVIT = base.baseHPFromVIT;

  const percentSources = [
    getEquipmentStat("MaxHP%"),
    getCrystaStat("MaxHP%"),
    getHPBoost().MaxHP_Percent,
    getAvatarPotionFoodbuffStat("MaxHP%", "Avatar"),
    getAvatarPotionFoodbuffStat("MaxHP%", "Potion"),
    getAvatarPotionFoodbuffStat("MaxHP%", "Foodbuff"),
  ];
  let totalPercent = percentSources.reduce((sum, val) => sum + (val || 0), 0);
  totalPercent = Math.max(totalPercent, -99);

  const percentBonus = formatNumber(
    (totalPercent / 100) * (baseHPFromVIT + baseHP),
    "down"
  );

  const flatSources = [
    { value: baseHP, label: "Base HP (No VIT)" },
    { value: baseHPFromVIT, label: "Base HP from VIT" },
    { value: getEquipmentStat("MaxHP"), label: "Equipment" },
    { value: getCrystaStat("MaxHP"), label: "Crysta" },
    { value: getBushido().MaxHP, label: "Bushido" },
    { value: getFrontlinerII().MaxHP, label: "Frontliner II" },
    { value: getForceShield().MaxHP_Flat, label: "Force Shield" },
    { value: getMagicalShield().MaxHP_Flat, label: "Magical Shield" },
    { value: getHPBoost().MaxHP_Flat, label: "HP Boost" },
    { value: getAvatarPotionFoodbuffStat("MaxHP", "Avatar"), label: "Avatar" },
    {
      value: getAvatarPotionFoodbuffStat("MaxHP", "Potion"),
      label: "Consumable",
    },
    {
      value: getAvatarPotionFoodbuffStat("MaxHP", "Foodbuff"),
      label: "Food Buff",
    },
    { value: percentBonus, label: "Total % Bonus (applied to VIT HP)" },
  ];

  const MaxHP = flatSources.reduce((sum, s) => sum + (s.value || 0), 0);

  setBreakdownText("MaxHP", flatSources);

  return MaxHP;
}

function getMaxMP() {
  const sources = [
    { value: getBaseMaxMP().baseMP, label: "Base MP" },
    { value: getBaseMaxMP().baseMPFromINT, label: "INT" },
    {
      value: getBaseMaxMP().baseMPFromTEC,
      label: "TEC",
    },
    { value: getEquipmentStat("MaxMP"), label: "Equipment" },
    { value: getCrystaStat("MaxMP"), label: "Crysta" },
    { value: getBushido().MaxMP, label: "Bushido" },
    {
      value: getGodSpeedWield().MaxMP,
      label: "God Speed Wield " + getGodSpeedWield().stackNumber + " Stacks",
    },
    {
      value: getFamilia().MaxMP,
      label: "Familia",
    },
    {
      value: getMPBoost().MaxMP,
      label: "MP Boost",
    },
    {
      value: getAvatarPotionFoodbuffStat("MaxMP", "Avatar"),
      label: "Avatar",
    },
    {
      value: getAvatarPotionFoodbuffStat("MaxMP", "Potion"),
      label: "Consumable",
    },
    {
      value: getAvatarPotionFoodbuffStat("MaxMP", "FoodBuff"),
      label: "Food Buff",
    },
  ];

  const total = sources.reduce((sum, s) => sum + (s.value || 0), 0);
  const MaxMP = Math.max(0, total);

  setBreakdownText("MaxMP", sources);

  return MaxMP;
}
function computePercentWithBorrow(selfPercent) {
  const base = getBaseCriticalRate().baseCriticalRate;

  // Get all percent sources
  const others = [
    getEquipmentStat("Critical Rate%"),
    getCrystaStat("Critical Rate%"),
    getCriticalSpear().CriticalRate_Percent,
    getDualSwordControl().CriticalRate_Percent,
    getDualSwordMastery().CriticalRate_Percent,
    getAvatarPotionFoodbuffStat("Critical Rate%", "Avatar"),
    getAvatarPotionFoodbuffStat("Critical Rate%", "Potion"),
    getAvatarPotionFoodbuffStat("Critical Rate%", "FoodBuff"),
  ];

  const totalOthers = others.reduce((a, b) => a + b, 0) - selfPercent;

  const combined = ((selfPercent + totalOthers) / 100) * base;

  const roundedCombined =
    combined < 0 ? Math.floor(combined) : Math.trunc(combined);

  const othersContribution = (totalOthers / 100) * base;

  return (
    roundedCombined -
    (othersContribution < 0
      ? Math.floor(othersContribution)
      : Math.trunc(othersContribution))
  );
}

function getCriticalRate() {
  let CRFromEquipment =
    getEquipmentStat("Critical Rate") +
    computePercentWithBorrow(getEquipmentStat("Critical Rate%"));

  let CRFromCrysta =
    getCrystaStat("Critical Rate") +
    computePercentWithBorrow(getCrystaStat("Critical Rate%"));
  let CRFromCriticalSpear =
    getCriticalSpear().CriticalRate_Flat +
    formatNumber(
      (getCriticalSpear().CriticalRate_Percent / 100) *
        getBaseCriticalRate().baseCriticalRate,
      "trunc"
    );
  let CRFromDualSwordControl = formatNumber(
    (getDualSwordControl().CriticalRate_Percent / 100) *
      getBaseCriticalRate().baseCriticalRate,
    "trunc"
  );
  let CRFromDualSwordMastery = formatNumber(
    (getDualSwordMastery().CriticalRate_Percent / 100) *
      getBaseCriticalRate().baseCriticalRate,
    "trunc"
  );
  let CRFromAvatar =
    getAvatarPotionFoodbuffStat("Critical Rate", "Avatar") +
    formatNumber(
      (getAvatarPotionFoodbuffStat("Critical Rate%", "Avatar") / 100) *
        getBaseCriticalRate().baseCriticalRate,
      "trunc"
    );
  let CRFromPotion =
    getAvatarPotionFoodbuffStat("Critical Rate", "Potion") +
    formatNumber(
      (getAvatarPotionFoodbuffStat("Critical Rate%", "Potion") / 100) *
        getBaseCriticalRate().baseCriticalRate,
      "trunc"
    );
  let CRFromFoodBuff =
    getAvatarPotionFoodbuffStat("Critical Rate", "FoodBuff") +
    formatNumber(
      (getAvatarPotionFoodbuffStat("Critical Rate%", "FoodBuff") / 100) *
        getBaseCriticalRate().baseCriticalRate,
      "trunc"
    );
  const sources = [
    {
      value: formatNumber(getBaseCriticalRate().baseCriticalRate, "down"),
      label: "Base Critical Rate",
    },
    {
      value: CRFromEquipment,
      label: "Equipment",
    },
    {
      value: CRFromCrysta,
      label: "Crysta",
    },
    {
      value: CRFromCriticalSpear,
      label: "Critical Spear",
    },
    {
      value: getAsuraAura().CriticalRate_Flat,
      label: "Asura Aura",
    },
    {
      value: getTwoHanded().CriticalRate_Flat,
      label: "Two-Handed",
    },
    {
      value: getCriticalUP().CriticalRate_Flat,
      label: "Critical UP",
    },
    {
      value: getCrescentSaber().CriticalRate_Flat,
      label: "Crescent Saber",
    },
    {
      value: getAstute().CriticalRate_Flat,
      label: "Astute",
    },
    {
      value: getBerserk().CriticalRate_Flat,
      label: "Berserk",
    },
    {
      value: getCamouflage().CriticalRate_Flat,
      label: "Camouflage - " + getCamouflage().ActiveType,
    },
    {
      value: getDetection().CriticalRate_Flat,
      label: "Detection",
    },
    {
      value: getResonanceFocus().CriticalRate_Flat,
      label: "Resonance(Focus)",
    },
    {
      value: getWindRelease().CriticalRate_Flat,
      label: "Wind Release",
    },
    {
      value: CRFromDualSwordMastery,
      label: "Dual Sword Mastery",
    },
    {
      value: CRFromDualSwordControl,
      label: "Dual Sword Control",
    },
    {
      value: CRFromAvatar,
      label: "Avatar",
    },
    {
      value: CRFromPotion,
      label: "Consumable",
    },
    {
      value: CRFromFoodBuff,
      label: "Food Buff",
    },
  ];

  const total = sources.reduce((sum, s) => sum + (s.value || 0), 0);

  setBreakdownText("CriticalRate", sources);

  return total;
}
function getCriticalDamage() {
  let CriticalDamage = 150;
  let CriticalDamageFromEquipment =
    getEquipmentStat("Critical Damage") +
    formatNumber(
      (getEquipmentStat("Critical Damage%") / 100) * getBaseCriticalDamage(),
      "down"
    );
  let CriticalDamageFromCrysta =
    getCrystaStat("Critical Damage") +
    formatNumber(
      (getCrystaStat("Critical Damage%") / 100) * getBaseCriticalDamage(),
      "down"
    );
  let CriticalDamageFromCritUP = formatNumber(
    (getCriticalUP().CriticalDamage_Percent / 100) * getBaseCriticalDamage(),
    "down"
  );
  let CriticalDamageFromAvatar =
    getAvatarPotionFoodbuffStat("Critical Damage", "Avatar") +
    formatNumber(
      (getAvatarPotionFoodbuffStat("Critical Damage%", "Avatar") / 100) *
        getBaseCriticalDamage(),
      "down"
    );
  let CriticalDamageFromPotion =
    getAvatarPotionFoodbuffStat("Critical Damage", "Potion") +
    formatNumber(
      (getAvatarPotionFoodbuffStat("Critical Damage%", "Potion") / 100) *
        getBaseCriticalDamage(),
      "down"
    );
  let CriticalDamageFromFoodBuff =
    getAvatarPotionFoodbuffStat("Critical Damage", "FoodBuff") +
    formatNumber(
      (getAvatarPotionFoodbuffStat("Critical Damage%", "FoodBuff") / 100) *
        getBaseCriticalDamage(),
      "down"
    );
  const sources = [
    {
      value: CriticalDamage,
      label: "Base Critical Damage",
    },
    {
      value: getBaseCriticalDamage() - 150,
      label: "Base Critical Damage STR+AGI",
    },
    {
      value: CriticalDamageFromEquipment,
      label: "Equipment",
    },
    {
      value: CriticalDamageFromCrysta,
      label: "Crysta",
    },
    {
      value: getAuspiciousWind().CriticalDamage,
      label: "Auspicious Wind",
    },
    {
      value: CriticalDamageFromCritUP,
      label: "Critical UP",
    },
    {
      value: CriticalDamageFromAvatar,
      label: "Avatar",
    },
    {
      value: CriticalDamageFromPotion,
      label: "Consumable",
    },
    {
      value: CriticalDamageFromFoodBuff,
      label: "Food Buff",
    },
  ];

  const totalCriticalDamage = sources.reduce(
    (sum, s) => sum + (s.value || 0),
    0
  );
  CriticalDamage = totalCriticalDamage;
  if (CriticalDamage > 300) {
    CriticalDamage = 300 + formatNumber((CriticalDamage - 300) / 2, "down");
  }
  setBreakdownText("CriticalDamage", sources);

  return { CriticalDamage, totalCriticalDamage };
}
function getBaseAMPR() {
  let BaseAMPR =
    10 + (getMaxMP() > 2000 ? 20 : formatNumber(getMaxMP() / 100, "down"));
  return BaseAMPR;
}
function getAMPR() {
  let AMPRFromEquipment =
    getEquipmentStat("Attack MP Recovery") +
    formatNumber(
      (getEquipmentStat("Attack MP Recovery%") / 100) * getBaseAMPR(),
      "down"
    );
  let AMPRFromCrysta =
    getCrystaStat("Attack MP Recovery") +
    formatNumber(
      (getCrystaStat("Attack MP Recovery%") / 100) * getBaseAMPR(),
      "down"
    );
  let AMPRFromHighCycle = formatNumber(
    (getHighCycle().AMPR_Percent / 100) * getBaseAMPR(),
    "trunc"
  );
  let AMPRFromQuickMotion = formatNumber(
    (getQuickMotion().AMPR_Percent / 100) * getBaseAMPR(),
    "trunc"
  );
  let AMPRFromAvatar =
    getAvatarPotionFoodbuffStat("Attack MP Recovery", "Avatar") +
    formatNumber(
      (getAvatarPotionFoodbuffStat("Attack MP Recovery%", "Avatar") / 100) *
        getBaseAMPR(),
      "down"
    );
  let AMPRFromPotion =
    getAvatarPotionFoodbuffStat("Attack MP Recovery", "Potion") +
    formatNumber(
      (getAvatarPotionFoodbuffStat("Attack MP Recovery%", "Potion") / 100) *
        getBaseAMPR(),
      "down"
    );
  let AMPRFromFoodBuff =
    getAvatarPotionFoodbuffStat("Attack MP Recovery", "FoodBuff") +
    formatNumber(
      (getAvatarPotionFoodbuffStat("Attack MP Recovery%", "FoodBuff") / 100) *
        getBaseAMPR(),
      "down"
    );
  let sources = [
    { value: getBaseAMPR(), label: "Base AMPR" },
    { value: AMPRFromEquipment, label: "Equipment" },
    { value: AMPRFromCrysta, label: "Crysta" },
    { value: getAggravate().AMPR_Flat, label: "Aggravate" },
    { value: getChakra().AMPR_Flat, label: "Chakra" },
    { value: getUltimaQiCharge().AMPR_Flat, label: "Ultima Qi Charge" },
    {
      value: getSaberAura().AMPR_Flat,
      label: "Saber Aura " + getSaberAura().skillStack + " stack(s)",
    },
    { value: getCrescentSaber().AMPR_Flat, label: "Crescent Saber" },
    { value: getKairikiRanshin().AMPR_Flat, label: "Kairiki Ranshin" },
    { value: AMPRFromHighCycle, label: "High Cycle" },
    { value: AMPRFromQuickMotion, label: "Quick Motion" },
    { value: getGuardian().AMPR_Flat, label: "Guardian" },
    { value: AMPRFromAvatar, label: "Avatar" },
    { value: AMPRFromPotion, label: "Consumable" },
    { value: AMPRFromFoodBuff, label: "Food Buff" },
  ];

  let totalAMPR = sources.reduce((sum, s) => sum + (s.value || 0), 0);

  let finalAMPR = totalAMPR;
  if (getDualSwordMastery().DoubleAMPR) {
    sources.push({
      value: totalAMPR,
      label: "Dual Sword Mastery Double AMPR",
    });

    finalAMPR += totalAMPR;
  }
  if (getTwinStorm().DoubleAMPR) {
    sources.push({
      value: totalAMPR,
      label: "Twin Storm Double AMPR",
    });

    finalAMPR += totalAMPR;
  }

  const AMPR = formatNumber(finalAMPR, "trunc");

  setBreakdownText("AttackMPRecovery", sources);

  return AMPR;
}
function getBaseDEF() {
  let subWeaponType = subWeaponTypeSelect.value.toLowerCase();
  let BaseDEF = 0;
  let BaseDefFromEquipment =
    (Number(armorDEF?.value) || 0) +
    (Number(additionalDEF?.value) || 0) +
    (Number(specialDEF?.value) || 0) +
    (subWeaponType === "shield" ? Number(subWeaponATKDEF?.value) || 0 : 0);

  switch (armorTypeSelect.value.toLowerCase()) {
    case "light":
      BaseDEF =
        CHARACTER_STAT.level * 0.8 + getTotalVIT() / 4 + BaseDefFromEquipment;
      break;
    case "normal":
      BaseDEF = CHARACTER_STAT.level + getTotalVIT() + BaseDefFromEquipment;
      break;
    case "heavy":
      BaseDEF =
        CHARACTER_STAT.level * 1.2 + getTotalVIT() * 2 + BaseDefFromEquipment;
      break;
    default:
      BaseDEF =
        CHARACTER_STAT.level * 0.4 + getTotalVIT() / 10 + BaseDefFromEquipment;
  }

  return formatNumber(BaseDEF, "down");
}
function getDEF() {
  let DEFFromForceShield =
    getForceShield().DEF_Flat +
    formatNumber((getForceShield().DEF_Percent / 100) * getBaseDEF(), "down");
  let DEFFromBerserk = formatNumber(
    (getBerserk().DEF_Percent / 100) * getBaseDEF(),
    "down"
  );
  let DEFFromReflex = formatNumber(
    (getReflex().DEF_Percent / 100) * getBaseDEF(),
    "down"
  );
  let DEFFromGloria = formatNumber(
    (getGloria().DEF_Percent / 100) * getBaseDEF(),
    "down"
  );
  let DEFFromEquipment =
    getEquipmentStat("DEF") +
    formatNumber((getEquipmentStat("DEF%") / 100) * getBaseDEF(), "down");
  let DEFFromCrysta =
    getCrystaStat("DEF") +
    formatNumber((getCrystaStat("DEF%") / 100) * getBaseDEF(), "down");
  let DEFFromAvatar =
    getAvatarPotionFoodbuffStat("DEF", "Avatar") +
    formatNumber(
      (getAvatarPotionFoodbuffStat("DEF%", "Avatar") / 100) * getBaseDEF(),
      "down"
    );
  let DEFFromPotion =
    getAvatarPotionFoodbuffStat("DEF", "Potion") +
    formatNumber(
      (getAvatarPotionFoodbuffStat("DEF%", "Potion") / 100) * getBaseDEF(),
      "down"
    );
  let DEFFromFoodBuff =
    getAvatarPotionFoodbuffStat("DEF", "FoodBuff") +
    formatNumber(
      (getAvatarPotionFoodbuffStat("DEF%", "FoodBuff") / 100) * getBaseDEF(),
      "down"
    );
  const sources = [
    {
      value: getBaseDEF(),
      label: "Base DEF",
    },
    {
      value: DEFFromEquipment,
      label: "Equipment",
    },
    {
      value: DEFFromCrysta,
      label: "Crysta",
    },
    {
      value: DEFFromForceShield,
      label: "Force Shield",
    },
    {
      value: getDefenseUP().DEF_Flat,
      label: "Defense UP",
    },
    {
      value: getDefenseMastery().DEF_Flat,
      label: "Defense Mastery",
    },
    {
      value: DEFFromBerserk,
      label: "Berserk",
    },
    {
      value: DEFFromReflex,
      label: "Reflex",
    },
    {
      value: DEFFromGloria,
      label: "Gloria",
    },
    {
      value: DEFFromAvatar,
      label: "Avatar",
    },
    {
      value: DEFFromPotion,
      label: "Consumable",
    },
    {
      value: DEFFromFoodBuff,
      label: "Food Buff",
    },
  ];

  const total = sources.reduce((sum, s) => sum + (s.value || 0), 0);
  const DEF = total;
  setBreakdownText("DEF", sources);

  return DEF;
}
function getBaseMDEF() {
  let subWeaponType = subWeaponTypeSelect.value.toLowerCase();
  let BaseMDEF = 0;
  let BaseDefFromEquipment =
    (Number(armorDEF?.value) || 0) +
    (Number(additionalDEF?.value) || 0) +
    (Number(specialDEF?.value) || 0) +
    (subWeaponType === "shield" ? Number(subWeaponATKDEF?.value) || 0 : 0);

  switch (armorTypeSelect.value.toLowerCase()) {
    case "light":
      BaseMDEF =
        CHARACTER_STAT.level * 0.8 + getTotalINT() / 4 + BaseDefFromEquipment;
      break;
    case "normal":
      BaseMDEF = CHARACTER_STAT.level + getTotalINT() + BaseDefFromEquipment;
      break;
    case "heavy":
      BaseMDEF =
        CHARACTER_STAT.level * 1.2 + getTotalINT() * 2 + BaseDefFromEquipment;
      break;
    default:
      BaseMDEF =
        CHARACTER_STAT.level * 0.4 + getTotalINT() / 10 + BaseDefFromEquipment;
  }

  return formatNumber(BaseMDEF, "down");
}
function getMDEF() {
  let MDEFFromMagicalShield =
    getMagicalShield().MDEF_Flat +
    formatNumber(
      (getMagicalShield().MDEF_Percent / 100) * getBaseMDEF(),
      "down"
    );
  let MDEFFromBerserk = formatNumber(
    (getBerserk().MDEF_Percent / 100) * getBaseMDEF(),
    "down"
  );
  let MDEFFromReflex = formatNumber(
    (getReflex().MDEF_Percent / 100) * getBaseMDEF(),
    "down"
  );
  let MDEFFromGloria = formatNumber(
    (getGloria().MDEF_Percent / 100) * getBaseMDEF(),
    "down"
  );
  let MDEFFromEquipment =
    getEquipmentStat("MDEF") +
    formatNumber((getEquipmentStat("MDEF%") / 100) * getBaseMDEF(), "down");
  let MDEFFromCrysta =
    getCrystaStat("MDEF") +
    formatNumber((getCrystaStat("MDEF%") / 100) * getBaseMDEF(), "down");
  let MDEFFromAvatar =
    getAvatarPotionFoodbuffStat("MDEF", "Avatar") +
    formatNumber(
      (getAvatarPotionFoodbuffStat("MDEF%", "Avatar") / 100) * getBaseMDEF(),
      "down"
    );
  let MDEFFromPotion =
    getAvatarPotionFoodbuffStat("MDEF", "Potion") +
    formatNumber(
      (getAvatarPotionFoodbuffStat("MDEF%", "Potion") / 100) * getBaseMDEF(),
      "down"
    );
  let MDEFFromFoodBuff =
    getAvatarPotionFoodbuffStat("MDEF", "FoodBuff") +
    formatNumber(
      (getAvatarPotionFoodbuffStat("MDEF%", "FoodBuff") / 100) * getBaseMDEF(),
      "down"
    );
  const sources = [
    {
      value: getBaseMDEF(),
      label: "Base DEF",
    },
    {
      value: MDEFFromEquipment,
      label: "Equipment",
    },
    {
      value: MDEFFromCrysta,
      label: "Crysta",
    },
    {
      value: MDEFFromMagicalShield,
      label: "Force Shield",
    },
    {
      value: getDefenseUP().MDEF_Flat,
      label: "Defense UP",
    },
    {
      value: getDefenseMastery().MDEF_Flat,
      label: "Defense Mastery",
    },
    {
      value: MDEFFromBerserk,
      label: "Berserk",
    },
    {
      value: MDEFFromReflex,
      label: "Reflex",
    },
    {
      value: MDEFFromGloria,
      label: "Gloria",
    },
    {
      value: MDEFFromAvatar,
      label: "Avatar",
    },
    {
      value: MDEFFromPotion,
      label: "Consumable",
    },
    {
      value: MDEFFromFoodBuff,
      label: "Food Buff",
    },
  ];

  const total = sources.reduce((sum, s) => sum + (s.value || 0), 0);
  const MDEF = total;
  setBreakdownText("MDEF", sources);

  return MDEF;
}

function getBaseFlee() {
  let BaseDodge = 0;
  switch (armorTypeSelect.value.toLowerCase()) {
    case "light":
      BaseDodge = CHARACTER_STAT.level * 1.25 + getTotalAGI() * 1.75 + 30;
      break;
    case "normal":
      BaseDodge = CHARACTER_STAT.level + getTotalAGI();
      break;
    case "heavy":
      BaseDodge = CHARACTER_STAT.level * 0.5 + getTotalAGI() * 0.75 - 15;
      break;
    default:
      BaseDodge = CHARACTER_STAT.level * 1.5 + getTotalAGI() * 2 + 75;
  }
  return BaseDodge;
}
function getFlee() {
  const sources = [
    { value: formatNumber(getBaseFlee(), "trunc"), label: "Base Flee" },
    {
      value:
        getEquipmentStat("Dodge") +
        formatNumber(
          (getEquipmentStat("Dodge%") / 100) * getBaseFlee(),
          "trunc"
        ),
      label: "Equipment",
    },
    {
      value:
        getCrystaStat("Dodge") +
        formatNumber((getCrystaStat("Dodge%") / 100) * getBaseFlee(), "trunc"),
      label: "Crysta",
    },
    {
      value: getDodgeUP().Flee_Flat,
      label: "Dodge UP",
    },
  ];

  const total = sources.reduce((sum, s) => sum + (s.value || 0), 0);
  const Flee = total;

  setBreakdownText("Dodge", sources);

  return Flee;
}
function getBaseGuardRecharge() {
  let mainWeapon = mainWeaponSelect.value.toLowerCase();
  let subWeaponType = subWeaponTypeSelect.value.toLowerCase();
  let armorType = armorTypeSelect.value.toLowerCase();
  let baseGuardRecharge = 0;

  baseGuardRecharge += getHiddenTalent().baseGuardRecharge;
  if (armorType === "heavy") baseGuardRecharge += 25;
  if (subWeaponType === "shield") baseGuardRecharge += 75;
  if (mainWeapon === "two handed sword") baseGuardRecharge += 50;
  if (mainWeapon === "halberd") baseGuardRecharge += 25;

  return baseGuardRecharge;
}
function getGuardRecharge() {
  const sources = [
    {
      value: getEquipmentStat("Guard Recharge%"),
      label: "Equipment",
    },
    {
      value: getCrystaStat("Guard Recharge%"),
      label: "Crysta",
    },
    {
      value: getHeavyArmorMastery().guardRecharge,
      label: "Heavy Armor Mastery",
    },
    {
      value: getAdvancedGuard().guardRecharge,
      label: "Advanced Guard",
    },
    {
      value: getGuardian().guardRecharge,
      label: "Guardian",
    },
  ];

  const total = sources.reduce((sum, s) => sum + (s.value || 0), 0);
  const guardRecharge = total;

  setBreakdownText("GuardRecharge", sources);

  return guardRecharge;
}
function getGuardRechargeRate() {
  const sources = [
    {
      value: getBaseGuardRecharge() - getHiddenTalent().baseGuardRecharge,
      label: "Base Guard Recharge",
    },
    {
      value: getHiddenTalent().baseGuardRecharge,
      label: "Base Guard Recharge Hidden Talent",
    },
    {
      value: formatNumber(
        getBaseGuardRecharge() * (getEquipmentStat("Guard Recharge%") / 100),
        "trunc"
      ),
      label: "Equipment",
    },
    {
      value: formatNumber(
        getBaseGuardRecharge() * (getCrystaStat("Guard Recharge%") / 100),
        "trunc"
      ),
      label: "Crysta",
    },
    {
      value: formatNumber(
        getBaseGuardRecharge() * (getHeavyArmorMastery().guardRecharge / 100),
        "trunc"
      ),
      label: "Heavy Armor Mastery",
    },
    {
      value: formatNumber(
        getBaseGuardRecharge() * (getAdvancedGuard().guardRecharge / 100),
        "trunc"
      ),
      label: "Advanced Guard",
    },
  ];

  const total = sources.reduce((sum, s) => sum + (s.value || 0), 0);
  const guardRechargeRate = total;

  setBreakdownText("GuardRechargeRate", sources);

  return guardRechargeRate;
}
function getBaseGuardPower() {
  let mainWeapon = mainWeaponSelect.value.toLowerCase();
  let subWeaponType = subWeaponTypeSelect.value.toLowerCase();
  let armorType = armorTypeSelect.value.toLowerCase();
  let baseGuardPower = 0;

  if (armorType === "heavy") baseGuardPower += 5000;
  if (subWeaponType === "shield") baseGuardPower += 7500;
  if (mainWeapon === "two handed sword") baseGuardPower += 5000;
  if (mainWeapon === "halberd") baseGuardPower += 2500;
  baseGuardPower += getHiddenTalent().baseGuardPower;

  baseGuardPower = Math.min(10000, baseGuardPower);
  return baseGuardPower;
}

function getGuardPower() {
  const sources = [
    {
      value: getEquipmentStat("Guard Power%"),
      label: "Equipment",
    },
    {
      value: getCrystaStat("Guard Power%"),
      label: "Crysta",
    },
    {
      value: getAdvancedGuard().guardPower,
      label: "Advanced Guard",
    },
  ];

  const total = sources.reduce((sum, s) => sum + (s.value || 0), 0);
  const guardPower = total;

  setBreakdownText("GuardPower", sources);

  return guardPower;
}
function getGuardPowerValue() {
  const sources = [
    {
      value: getBaseGuardPower() - getHiddenTalent().baseGuardPower,
      label: "Base Guard Power",
    },
    {
      value: getHiddenTalent().baseGuardPower,
      label: "Base Guard Power Hidden Talent",
    },
    {
      value: formatNumber(
        getBaseGuardPower() * (getEquipmentStat("Guard Power%") / 100),
        "trunc"
      ),
      label: "Equipment",
    },
    {
      value: formatNumber(
        getBaseGuardPower() * (getEquipmentStat("Guard Power%") / 100),
        "trunc"
      ),
      label: "Crysta",
    },

    {
      value: formatNumber(
        getBaseGuardPower() * (getAdvancedGuard().guardPower / 100),
        "trunc"
      ),
      label: "Advanced Guard",
    },
  ];

  const total = sources.reduce((sum, s) => sum + (s.value || 0), 0);
  const guardPowerValue = total;

  setBreakdownText("GuardPowerValue", sources);

  return guardPowerValue;
}
function getBaseEvasionRecharge() {
  let baseEvasionRecharge = 0;
  let armorType = armorTypeSelect.value.toLowerCase();
  switch (armorType) {
    case "light":
      baseEvasionRecharge += 10;
      break;
    case "heavy":
      baseEvasionRecharge += -10;
      break;
    default:
      baseEvasionRecharge = 0;
  }
  return baseEvasionRecharge;
}
function getEvasionRecharge() {
  const sources = [
    {
      value: getBaseEvasionRecharge(),
      label: "Base Evasion Recharge",
    },
    {
      value: getEquipmentStat("Evasion Recharge%"),
      label: "Equipment",
    },
    {
      value: getCrystaStat("Evasion Recharge%"),
      label: "Crysta",
    },
    {
      value: getLightArmorMastery().evasionRecharge,
      label: "Light Armor Mastery",
    },
    {
      value: getAdvancedEvasion().evasionRecharge,
      label: "Advanced Evasion",
    },
    {
      value: getReflex().evasionRecharge,
      label: "Reflex",
    },
    {
      value: getGodSpeedWield().evasionRecharge,
      label: "God Speed Wield",
    },
  ];

  const total = sources.reduce((sum, s) => sum + (s.value || 0), 0);
  const evasionRecharge = total;

  setBreakdownText("EvasionRecharge", sources);

  return evasionRecharge;
}
function getPhysicalResistance() {
  const sources = [
    {
      value: getEquipmentStat("Physical Resistance%"),
      label: "Equipment",
    },
    {
      value: getCrystaStat("Physical Resistance%"),
      label: "Crysta",
    },
    {
      value: getForceShield().physicalResistance,
      label: "Force Shield",
    },
    {
      value: getGodSpeedWield().physicalResistance,
      label: "God Speed Wield",
    },
    {
      value: getProtection().physicalResistance,
      label: "Protection",
    },
    {
      value: getAegis().physicalResistance,
      label: "Aegis",
    },
    {
      value: getAvatarPotionFoodbuffStat("Physical Resistance%", "Avatar"),
      label: "Avatar",
    },
    {
      value: getAvatarPotionFoodbuffStat("Physical Resistance%", "Potion"),
      label: "Consumable",
    },
    {
      value: getAvatarPotionFoodbuffStat("Physical Resistance%", "FoodBuff"),
      label: "Food Buff",
    },
  ];

  const total = sources.reduce((sum, s) => sum + (s.value || 0), 0);
  const physicalResistance = applyResReduction(total);

  setBreakdownText("PhysicalResistance", sources);

  return { physicalResistance, total };
}
function getMagicResistance() {
  const sources = [
    {
      value: getEquipmentStat("Magic Resistance%"),
      label: "Equipment",
    },
    {
      value: getCrystaStat("Magic Resistance%"),
      label: "Crysta",
    },
    {
      value: getMagicalShield().magicResistance,
      label: "Magical Shield",
    },
    {
      value: getGodSpeedWield().magicResistance,
      label: "God Speed Wield",
    },
    {
      value: getProtection().magicResistance,
      label: "Protection",
    },
    {
      value: getAegis().magicResistance,
      label: "Aegis",
    },
    {
      value: getAvatarPotionFoodbuffStat("Magic Resistance%", "Avatar"),
      label: "Avatar",
    },
    {
      value: getAvatarPotionFoodbuffStat("Magic Resistance%", "Potion"),
      label: "Consumable",
    },
    {
      value: getAvatarPotionFoodbuffStat("Magic Resistance%", "FoodBuff"),
      label: "Food Buff",
    },
  ];

  const total = sources.reduce((sum, s) => sum + (s.value || 0), 0);
  const magicResistance = applyResReduction(total);

  setBreakdownText("MagicResistance", sources);

  return { magicResistance, total };
}
function getPhysicalDamageReduction() {
  const sources = [
    {
      value: getMagicSkin().physicalDamageReduction,
      label: "Magic Skin",
    },
  ];

  const total = sources.reduce((sum, s) => sum + (s.value || 0), 0);
  const physicalDamageReduction = formatNumber(total, "truc");

  setBreakdownText("PhysicalDamageReduction", sources);

  return physicalDamageReduction;
}
function getMagicDamageReduction() {
  const sources = [
    {
      value: getMagicSkin().magicDamageReduction,
      label: "Magic Skin",
    },
  ];

  const total = sources.reduce((sum, s) => sum + (s.value || 0), 0);
  const magicDamageReduction = formatNumber(total, "truc");

  setBreakdownText("MagicDamageReduction", sources);

  return magicDamageReduction;
}
function getAilmentResistance() {
  let AilmentResistanceFromMTL = formatNumber(getTotalMTL() / 3.4, "trunc");

  const sources = [
    {
      value: AilmentResistanceFromMTL,
      label: "MTL",
    },
    {
      value: getEquipmentStat("Ailment Resistance%"),
      label: "Equipment",
    },
    {
      value: getCrystaStat("Ailment Resistance%"),
      label: "Crysta",
    },
    {
      value: getAsuraAura().AilmentResistance,
      label: "Asura Aura",
    },
    {
      value: getAvatarPotionFoodbuffStat("Ailment Resistance%", "Avatar"),
      label: "Avatar",
    },
    {
      value: getAvatarPotionFoodbuffStat("Ailment Resistance%", "Potion"),
      label: "Consumable",
    },
    {
      value: getAvatarPotionFoodbuffStat("Ailment Resistance%", "FoodBuff"),
      label: "Food Buff",
    },
  ];

  const total = sources.reduce((sum, s) => sum + (s.value || 0), 0);
  const AilmentResistance = formatNumber(total, "truc");

  setBreakdownText("AilmentResistance", sources);
  return AilmentResistance;
}
function getAggro() {
  const sources = [
    {
      value: 100,
      label: "Base Aggro",
    },
    {
      value: getEquipmentStat("Aggro%"),
      label: "Equipment",
    },
    {
      value: getCrystaStat("Aggro%"),
      label: "Crysta",
    },
    {
      value: getKnightStance().Aggro,
      label: "Knight's Stance",
    },
    {
      value: getCamouflage().Aggro,
      label: "Camouflage",
    },
    {
      value: getDetection().Aggro,
      label: "Detection",
    },
    {
      value: getAvatarPotionFoodbuffStat("Aggro%", "Avatar"),
      label: "Avatar",
    },
    {
      value: getAvatarPotionFoodbuffStat("Aggro%", "Potion"),
      label: "Consumable",
    },
    {
      value: getAvatarPotionFoodbuffStat("Aggro%", "FoodBuff"),
      label: "Food Buff",
    },
  ];

  const total = sources.reduce((sum, s) => sum + (s.value || 0), 0);

  setBreakdownText("Aggro", sources);
  return total;
}
function getBarrierCooldown() {
  const sources = [
    {
      value: getEquipmentStat("Barrier Cooldown%"),
      label: "Equipment",
    },
    {
      value: getCrystaStat("Barrier Cooldown%"),
      label: "Crysta",
    },
    {
      value: getAvatarPotionFoodbuffStat("Barrier Cooldown%", "Avatar"),
      label: "Avatar",
    },
    {
      value: getAvatarPotionFoodbuffStat("Barrier Cooldown%", "Potion"),
      label: "Consumable",
    },
    {
      value: getAvatarPotionFoodbuffStat("Barrier Cooldown%", "FoodBuff"),
      label: "Food Buff",
    },
  ];
  const total = sources.reduce((sum, s) => sum + (s.value || 0), 0);

  setBreakdownText("BarrierCooldown", sources);

  return total;
}
function getPhysicalBarrier() {
  const sources = [
    {
      value: getEquipmentStat("Physical Barrier"),
      label: "Equipment",
    },
    {
      value: getCrystaStat("Physical Barrier"),
      label: "Crysta",
    },
    {
      value: getEarthshaker().PhysicalBarrier,
      label: "Earthshaker",
    },
    {
      value: getAvatarPotionFoodbuffStat("Physical Barrier", "Avatar"),
      label: "Avatar",
    },
    {
      value: getAvatarPotionFoodbuffStat("Physical Barrier", "Potion"),
      label: "Consumable",
    },
    {
      value: getAvatarPotionFoodbuffStat("Physical Barrier", "FoodBuff"),
      label: "Food Buff",
    },
  ];
  const total = sources.reduce((sum, s) => sum + (s.value || 0), 0);

  setBreakdownText("PhysicalBarrier", sources);

  return total;
}

function getMagicBarrier() {
  const sources = [
    {
      value: getEquipmentStat("Magic Barrier"),
      label: "Equipment",
    },
    {
      value: getCrystaStat("Magic Barrier"),
      label: "Crysta",
    },
    {
      value: getEarthshaker().MagicBarrier,
      label: "Earthshaker",
    },
    {
      value: getAvatarPotionFoodbuffStat("Magic Barrier", "Avatar"),
      label: "Avatar",
    },
    {
      value: getAvatarPotionFoodbuffStat("Magic Barrier", "Potion"),
      label: "Consumable",
    },
    {
      value: getAvatarPotionFoodbuffStat("Magic Barrier", "FoodBuff"),
      label: "Food Buff",
    },
  ];
  const total = sources.reduce((sum, s) => sum + (s.value || 0), 0);

  setBreakdownText("Magic Barrier", sources);

  return total;
}
function getFractionalBarrier() {
  const sources = [
    {
      value: getEquipmentStat("Fractional Barrier%"),
      label: "Equipment",
    },
    {
      value: getCrystaStat("Fractional Barrier%"),
      label: "Crysta",
    },
    {
      value: getAvatarPotionFoodbuffStat("Fractional Barrier%", "Avatar"),
      label: "Avatar",
    },
    {
      value: getAvatarPotionFoodbuffStat("Fractional Barrier%", "Potion"),
      label: "Consumable",
    },
    {
      value: getAvatarPotionFoodbuffStat("Fractional Barrier%", "FoodBuff"),
      label: "Food Buff",
    },
  ];
  const total = sources.reduce((sum, s) => sum + (s.value || 0), 0);

  setBreakdownText("FractionalBarrier", sources);

  return total;
}
function getFractionalDamageReduction() {
  if (armorTypeSelect.value.toLowerCase() !== "heavy") return 0;
  let armorRefineValue = Number(armorRefine.value) || 0;
  const sources = [
    {
      value: armorRefineValue,
      label: "Heavy Armor Model",
    },
  ];
  const total = sources.reduce((sum, s) => sum + (s.value || 0), 0);

  setBreakdownText("FractionalDamageReduction", sources);

  return total;
}
function getReflect() {
  const sources = [
    {
      value: getEquipmentStat("Reflect%"),
      label: "Equipment",
    },
    {
      value: getCrystaStat("Reflect%"),
      label: "Crysta",
    },
    {
      value: getAvatarPotionFoodbuffStat("Reflect%", "Avatar"),
      label: "Avatar",
    },
    {
      value: getAvatarPotionFoodbuffStat("Reflect%", "Potion"),
      label: "Consumable",
    },
    {
      value: getAvatarPotionFoodbuffStat("Reflect%", "FoodBuff"),
      label: "Food Buff",
    },
  ];
  const total = sources.reduce((sum, s) => sum + (s.value || 0), 0);

  setBreakdownText("Reflect", sources);

  return total;
}
function getBaseASPD() {
  let mainWeapon = mainWeaponSelect.value.toLowerCase();
  let primaryASPD = 0;
  let ASPDFromStat = 0;
  let baseASPD = 0;

  switch (mainWeapon) {
    case "one handed sword":
      primaryASPD = 100;
      ASPDFromStat = 0.2 * getTotalSTR() + 4.2 * getTotalAGI();
      break;
    case "two handed sword":
      primaryASPD = 50;
      ASPDFromStat = 0.2 * getTotalSTR() + 2.1 * getTotalAGI();
      break;
    case "bow":
      primaryASPD = 75;
      ASPDFromStat = 3.1 * getTotalAGI() + 0.2 * getTotalDEX();
      break;
    case "bowgun":
      primaryASPD = 30;
      ASPDFromStat = 2.2 * getTotalAGI() + 0.2 * getTotalDEX();
      break;
    case "staff":
      primaryASPD = 60;
      ASPDFromStat = 0.2 * getTotalINT() + 1.8 * getTotalAGI();
      break;
    case "magic device":
      primaryASPD = 90;
      ASPDFromStat = 0.2 * getTotalINT() + 4 * getTotalAGI();
      break;
    case "knuckles":
      primaryASPD = 120;
      ASPDFromStat =
        0.1 * getTotalSTR() + 4.6 * getTotalAGI() + 0.1 * getTotalDEX();
      break;
    case "halberd":
      primaryASPD = 25;
      ASPDFromStat = 0.2 * getTotalSTR() + 3.5 * getTotalAGI();
      break;
    case "katana":
      primaryASPD = 200;
      ASPDFromStat = 0.3 * getTotalSTR() + 3.9 * getTotalAGI();
      break;
    case "barehand":
      primaryASPD = 1000;
      ASPDFromStat = 9.6 * getTotalAGI();
      break;
    default:
      primaryASPD = 0;
      ASPDFromStat = 0;
  }
  baseASPD = primaryASPD + CHARACTER_STAT.level + ASPDFromStat;
  return formatNumber(baseASPD, "trunc");
}
function getASPD() {
  let armorMultiplier = 1;
  let armorType = armorTypeSelect.value.toLowerCase();
  switch (armorType) {
    case "light":
      armorMultiplier = 50;
      break;
    case "heavy":
      armorMultiplier = -50;
      break;
    default:
      armorMultiplier = 0;
      break;
  }
  const sources = [
    {
      value: getBaseASPD(),
      label: "Base ASPD",
    },
    {
      value: formatNumber((getBaseASPD() * armorMultiplier) / 100, "trunc"),
      label: "Armor Model",
    },
    {
      value:
        getEquipmentStat("ASPD") +
        formatNumber(
          getBaseASPD() * (getEquipmentStat("ASPD%") / 100),
          "trunc"
        ),
      label: "Equipment",
    },
    {
      value:
        getCrystaStat("ASPD") +
        formatNumber(getBaseASPD() * (getCrystaStat("ASPD%") / 100), "trunc"),
      label: "Crysta",
    },
    {
      value:
        getQuickSlash().ASPD_Flat +
        formatNumber(
          getBaseASPD() * (getQuickSlash().ASPD_Percent / 100),
          "trunc"
        ),
      label: "Quick Slash",
    },
    {
      value: getDualSwordControl().ASPD_Flat,
      label: "Dual Sword Control",
    },
    {
      value:
        getMartialDiscipline().ASPD_Flat +
        formatNumber(
          getBaseASPD() * (getMartialDiscipline().ASPD_Percent / 100),
          "trunc"
        ),
      label: "Martial Discipline",
    },
    {
      value: formatNumber(
        getBaseASPD() * (getShieldMastery().ASPD_Percent / 100),
        "trunc"
      ),
      label: "Shield Mastery",
    },
    {
      value: formatNumber(
        getBaseASPD() * (getDualShield().ASPD_Percent / 100),
        "trunc"
      ),
      label: "Dual Shield",
    },
    {
      value:
        getBerserk().ASPD_Flat +
        formatNumber(
          getBaseASPD() * (getBerserk().ASPD_Percent / 100),
          "trunc"
        ),
      label: "Berserk",
    },
    {
      value: getGodSpeedWield().ASPD_Flat,
      label: "God Speed Wield " + getGodSpeedWield().skillStack + " Stacks",
    },
    {
      value: getTwinStorm().ASPD_Flat,
      label: "Twin Storm",
    },
    {
      value:
        getQuickAura().ASPD_Flat +
        formatNumber(
          getBaseASPD() * (getQuickAura().ASPD_Percent / 100),
          "trunc"
        ),
      label: "Quick Aura",
    },
    {
      value: getFareth().ASPD_Flat,
      label: "Fareth",
    },
    {
      value: getResonanceSpeed().ASPD_Flat,
      label: "Resonance(Speed)",
    },
    {
      value: getWindRelease().ASPD_Flat,
      label: "Wind Release",
    },
    {
      value: formatNumber(
        getBaseASPD() * (getSaberAura().ASPD_Percent / 100),
        "trunc"
      ),
      label: "Saber Aura " + getSaberAura().skillStack + " stack(s)",
    },
    {
      value:
        getQuickMotion().ASPD_Flat +
        formatNumber(
          getBaseASPD() * (getQuickMotion().ASPD_Percent / 100),
          "trunc"
        ),
      label: "Quick Motion",
    },
    {
      value:
        getAvatarPotionFoodbuffStat("ASPD", "Avatar") +
        formatNumber(
          getBaseASPD() *
            (getAvatarPotionFoodbuffStat("ASPD%", "Avatar") / 100),
          "trunc"
        ),
      label: "Avatar",
    },
    {
      value:
        getAvatarPotionFoodbuffStat("ASPD", "Potion") +
        formatNumber(
          getBaseASPD() *
            (getAvatarPotionFoodbuffStat("ASPD%", "Potion") / 100),
          "trunc"
        ),
      label: "Consumable",
    },
    {
      value:
        getAvatarPotionFoodbuffStat("ASPD", "FoodBuff") +
        formatNumber(
          getBaseASPD() *
            (getAvatarPotionFoodbuffStat("ASPD%", "FoodBuff") / 100),
          "trunc"
        ),
      label: "Food Buff",
    },
  ];
  const total = sources.reduce((sum, s) => sum + (s.value || 0), 0);

  setBreakdownText("ASPD", sources);

  return total;
}
function getMotionSpeed() {
  let motionSpeedFromASPD =
    getASPD() > 1000 ? formatNumber((getASPD() - 1000) / 180, "trunc") : 0;
  const sources = [
    {
      value: motionSpeedFromASPD,
      label: "ASPD",
    },
    {
      value: getEquipmentStat("Motion Speed"),
      label: "Equipment",
    },
    {
      value: getCrystaStat("Motion Speed"),
      label: "Crysta",
    },
    {
      value: getRush().motionSpeed,
      label: "Rush",
    },
    {
      value: getGodSpeedWield().motionSpeed,
      label: "God Speed Wield",
    },
    {
      value: getDauntless().motionSpeed,
      label: "Dauntless",
    },
    {
      value: getAvatarPotionFoodbuffStat("Motion Speed", "Avatar"),
      label: "Avatar",
    },
    {
      value: getAvatarPotionFoodbuffStat("Motion Speed", "Potion"),
      label: "Consumable",
    },
    {
      value: getAvatarPotionFoodbuffStat("Motion Speed", "FoodBuff"),
      label: "Food Buff",
    },
  ];
  const total = sources.reduce((sum, s) => sum + (s.value || 0), 0);
  let motionSpeed = formatNumber(total, "trunc");

  setBreakdownText("MotionSpeed", sources);

  return motionSpeed;
}
function getPhysicalPierce() {
  const sources = [
    {
      value: getEquipmentStat("Physical Pierce%"),
      label: "Equipment",
    },
    {
      value: getCrystaStat("Physical Pierce%"),
      label: "Crysta",
    },
    {
      value: getFareth().physicalPierce,
      label: "Fareth",
    },
    {
      value: getEarthshaker().physicalPierce,
      label: "Earthshaker",
    },
    {
      value: getSicarius().physicalPierce,
      label: "Sicarius",
    },
    {
      value: getAvatarPotionFoodbuffStat("Physical Pierce%", "Avatar"),
      label: "Avatar",
    },
    {
      value: getAvatarPotionFoodbuffStat("Physical Pierce%", "Potion"),
      label: "Consumable",
    },
    {
      value: getAvatarPotionFoodbuffStat("Physical Pierce%", "FoodBuff"),
      label: "Food Buff",
    },
  ];
  const total = sources.reduce((sum, s) => sum + (s.value || 0), 0);

  setBreakdownText("PhysicalPierce", sources);

  return total;
}

function getMagicPierce() {
  const sources = [
    {
      value: getEquipmentStat("Magic Pierce%"),
      label: "Equipment",
    },
    {
      value: getCrystaStat("Magic Pierce%"),
      label: "Crysta",
    },
    {
      value: getThorHammer().MagicPierce,
      label: "Thor's Hammer",
    },
    {
      value: getAvatarPotionFoodbuffStat("Magic Pierce%", "Avatar"),
      label: "Avatar",
    },
    {
      value: getAvatarPotionFoodbuffStat("Magic Pierce%", "Potion"),
      label: "Consumable",
    },
    {
      value: getAvatarPotionFoodbuffStat("Magic Pierce%", "FoodBuff"),
      label: "Food Buff",
    },
  ];
  let total = sources.reduce((sum, s) => sum + (s.value || 0), 0);

  return total;
}
function getFinalMagicPierce() {
  const sources = [
    {
      value: getEquipmentStat("Magic Pierce%"),
      label: "Equipment",
    },
    {
      value: getCrystaStat("Magic Pierce%"),
      label: "Crysta",
    },
    {
      value: getThorHammer().MagicPierce,
      label: "Thor's Hammer",
    },
    {
      value: getAvatarPotionFoodbuffStat("Magic Pierce%", "Avatar"),
      label: "Avatar",
    },
    {
      value: getAvatarPotionFoodbuffStat("Magic Pierce%", "Potion"),
      label: "Consumable",
    },
    {
      value: getAvatarPotionFoodbuffStat("Magic Pierce%", "FoodBuff"),
      label: "Food Buff",
    },
  ];
  let total = getMagicPierce();

  let magicPierceRapidCharge = getRapidCharge(total).magicPierce;
  sources.push({
    value: magicPierceRapidCharge,
    label: "Rapid Charge",
  });
  total += magicPierceRapidCharge;

  let magicPierceMagicLaser = getMagicLaser().magicPierce;
  sources.push({
    value: magicPierceMagicLaser,
    label: "Magic: Laser",
  });

  total += magicPierceMagicLaser;

  setBreakdownText("MagicPierce", sources);
  return total;
}
function getBaseAccuracy() {
  let baseAccuracy = CHARACTER_STAT.level + getTotalDEX();
  return baseAccuracy;
}
function getAccuracy() {
  const sources = [
    {
      value: getBaseAccuracy(),
      label: "Base Accuracy",
    },
    {
      value:
        getEquipmentStat("Accuracy") +
        formatNumber(
          getBaseAccuracy() * (getEquipmentStat("Accuracy%") / 100),
          "trunc"
        ),
      label: "Equipment",
    },
    {
      value:
        getCrystaStat("Accuracy") +
        formatNumber(
          getBaseAccuracy() * (getCrystaStat("Accuracy%") / 100),
          "trunc"
        ),
      label: "Equipment",
    },
    {
      value: getThorHammer().Accuracy_Flat,
      label: "Thor's Hammer",
    },
    {
      value: getBushido().Accuracy_Flat,
      label: "Bushido",
    },
    {
      value: getDauntless().Accuracy_Flat,
      label: "Dauntless",
    },
    {
      value: getAccuracyUP().Accuracy_Flat,
      label: "Accuracy UP",
    },
    {
      value: formatNumber(
        getBaseAccuracy() * (getStrongChaseAttack().Accuracy_Percent / 100),
        "trunc"
      ),
      label: "Strong Chase Attack",
    },
    {
      value: getAuspiciousWind().Accuracy_Flat,
      label: "Auspicious Wind",
    },
    {
      value: formatNumber(
        getBaseAccuracy() * (getTwoHanded().Accuracy_Percent / 100),
        "trunc"
      ),
      label: "Two-Handed",
    },
    {
      value: formatNumber(
        getBaseAccuracy() * (getDualSwordMastery().Accuracy_Percent / 100),
        "trunc"
      ),
      label: "Dual Sword Mastery",
    },
    {
      value: formatNumber(
        getBaseAccuracy() * (getDualSwordControl().Accuracy_Percent / 100),
        "trunc"
      ),
      label: "Dual Sword Control",
    },
    {
      value: getDualShield().Accuracy_Flat,
      label: "Dual Shield",
    },
    {
      value: getSaberAura().Accuracy_Flat,
      label: "Saber Aura " + getSaberAura().skillStack + " stack(s)",
    },
    {
      value: getSmokeDust().Accuracy_Flat,
      label: "Smoke Dust",
    },
    {
      value: getResonanceFocus().Accuracy_Flat,
      label: "Resonance(Focus)",
    },
    {
      value: formatNumber(
        getBaseAccuracy() * (getBraveAura().Accuracy_Percent / 100),
        "trunc"
      ),
      label: "Brave Aura",
    },
    {
      value:
        getAvatarPotionFoodbuffStat("Accuracy", "Avatar") +
        formatNumber(
          getBaseAccuracy() *
            (getAvatarPotionFoodbuffStat("Accuracy%", "Avatar") / 100),
          "trunc"
        ),
      label: "Avatar",
    },
    {
      value:
        getAvatarPotionFoodbuffStat("Accuracy", "Potion") +
        formatNumber(
          getBaseAccuracy() *
            (getAvatarPotionFoodbuffStat("Accuracy%", "Potion") / 100),
          "trunc"
        ),
      label: "Consumable",
    },
    {
      value:
        getAvatarPotionFoodbuffStat("Accuracy", "FoodBuff") +
        formatNumber(
          getBaseAccuracy() *
            (getAvatarPotionFoodbuffStat("Accuracy%", "FoodBuff") / 100),
          "trunc"
        ),
      label: "Food Buff",
    },
  ];
  let total = sources.reduce((sum, s) => sum + (s.value || 0), 0);

  setBreakdownText("Accuracy", sources);
  return total;
}
function getBaseCSPD() {
  let baseCSPD =
    CHARACTER_STAT.level + 1.16 * getTotalAGI() + 2.94 * getTotalDEX();
  return baseCSPD;
}
function getCSPD() {
  const sources = [
    {
      value: formatNumber(getBaseCSPD(), "trunc"),
      label: "Base CSPD",
    },
    {
      value:
        getEquipmentStat("CSPD") +
        formatNumber(
          getBaseCSPD() * (getEquipmentStat("CSPD%") / 100),
          "trunc"
        ),
      label: "Equipment",
    },
    {
      value:
        getCrystaStat("CSPD") +
        formatNumber(getBaseCSPD() * (getCrystaStat("CSPD%") / 100), "trunc"),
      label: "Crysta",
    },
    {
      value:
        getCastMastery().CSPD_Flat +
        formatNumber(
          getBaseCSPD() * (getCastMastery().CSPD_Percent / 100),
          "trunc"
        ),
      label: "Cast Mastery",
    },
    {
      value:
        getMagicWarriorMastery().CSPD_Flat +
        formatNumber(
          getBaseCSPD() * (getMagicWarriorMastery().CSPD_Percent / 100),
          "trunc"
        ),
      label: "Cast Mastery",
    },
    {
      value: getOverlimit().CSPD_Flat,
      label: "Overlimit",
    },
    {
      value: getResonanceSpeed().CSPD_Flat,
      label: "Resonance(Speed)",
    },
    {
      value:
        getHighCycle().CSPD_Flat +
        formatNumber(
          getBaseCSPD() * (getHighCycle().CSPD_Percent / 100),
          "trunc"
        ),
      label: "High Cycle",
    },
    {
      value:
        getAvatarPotionFoodbuffStat("CSPD", "Avatar") +
        formatNumber(
          getBaseAccuracy() *
            (getAvatarPotionFoodbuffStat("CSPD%", "Avatar") / 100),
          "trunc"
        ),
      label: "Avatar",
    },
    {
      value:
        getAvatarPotionFoodbuffStat("CSPD", "Potion") +
        formatNumber(
          getBaseAccuracy() *
            (getAvatarPotionFoodbuffStat("CSPD%", "Potion") / 100),
          "trunc"
        ),
      label: "Consumable",
    },
    {
      value:
        getAvatarPotionFoodbuffStat("CSPD", "FoodBuff") +
        formatNumber(
          getBaseAccuracy() *
            (getAvatarPotionFoodbuffStat("CSPD%", "FoodBuff") / 100),
          "trunc"
        ),
      label: "Food Buff",
    },
  ];
  let total = sources.reduce((sum, s) => sum + (s.value || 0), 0);

  setBreakdownText("CSPD", sources);
  return total;
}
function getUnsheatheAttack() {
  const sources = [
    {
      value: getEquipmentStat("Unsheathe Attack%"),
      label: "Equipment",
    },
    {
      value: getCrystaStat("Unsheathe Attack%"),
      label: "Crysta",
    },
    {
      value: getGodspeed().UnsheatheAttack_Percent,
      label: "Godspeed",
    },
    {
      value: getFlashBlast().UnsheatheAttack_Percent,
      label: "Flash Blast",
    },
    {
      value: getWindRelease().UnsheatheAttack_Percent,
      label: "Wind Release",
    },
    {
      value: getDauntless().UnsheatheAttack_Percent,
      label: "Dauntless",
    },
    {
      value: getAvatarPotionFoodbuffStat("Unsheathe Attack%", "Avatar"),
      label: "Avatar",
    },
    {
      value: getAvatarPotionFoodbuffStat("Unsheathe Attack%", "Potion"),
      label: "Consumable",
    },
    {
      value: getAvatarPotionFoodbuffStat("Unsheathe Attack%", "FoodBuff"),
      label: "Food Buff",
    },
  ];
  let total = 100 + sources.reduce((sum, s) => sum + (s.value || 0), 0);

  setBreakdownText("UnsheatheAttack", sources);
  return total;
}
function getFlatUnsheatheAttack() {
  const sources = [
    {
      value: getEquipmentStat("Unsheathe Attack"),
      label: "Equipment",
    },
    {
      value: getCrystaStat("Unsheathe Attack"),
      label: "Crysta",
    },
    {
      value: getAvatarPotionFoodbuffStat("Unsheathe Attack", "Avatar"),
      label: "Avatar",
    },
    {
      value: getAvatarPotionFoodbuffStat("Unsheathe Attack", "Potion"),
      label: "Consumable",
    },
    {
      value: getAvatarPotionFoodbuffStat("Unsheathe Attack", "FoodBuff"),
      label: "Food Buff",
    },
  ];
  let total = sources.reduce((sum, s) => sum + (s.value || 0), 0);

  setBreakdownText("UnsheatheAttackFlat", sources);
  return total;
}
function getAdditionalMelee() {
  const sources = [
    {
      value: getEquipmentStat("Additional Melee%"),
      label: "Equipment",
    },
    {
      value: getCrystaStat("Additional Melee%"),
      label: "Crysta",
    },
    {
      value: getAvatarPotionFoodbuffStat("Additional Melee%", "Avatar"),
      label: "Avatar",
    },
    {
      value: getAvatarPotionFoodbuffStat("Additional Melee%", "Potion"),
      label: "Consumable",
    },
    {
      value: getAvatarPotionFoodbuffStat("Additional Melee%", "FoodBuff"),
      label: "Food Buff",
    },
  ];
  let total = sources.reduce((sum, s) => sum + (s.value || 0), 0);

  setBreakdownText("AdditionalMelee", sources);
  return total;
}
function getAdditionalMagic() {
  const sources = [
    {
      value: getEquipmentStat("Additional Magic%"),
      label: "Equipment",
    },
    {
      value: getCrystaStat("Additional Magic%"),
      label: "Crysta",
    },
    {
      value: getFamilia().Additional_Magic,
      label: "Familia",
    },
    {
      value: getThorHammer().Additional_Magic,
      label: "Thor's Hammer",
    },
    {
      value: getAvatarPotionFoodbuffStat("Additional Magic%", "Avatar"),
      label: "Avatar",
    },
    {
      value: getAvatarPotionFoodbuffStat("Additional Magic%", "Potion"),
      label: "Consumable",
    },
    {
      value: getAvatarPotionFoodbuffStat("Additional Magic%", "FoodBuff"),
      label: "Food Buff",
    },
  ];
  let total = sources.reduce((sum, s) => sum + (s.value || 0), 0);

  setBreakdownText("AdditionalMagic", sources);
  return total;
}
function getShortRangeDamage() {
  const sources = [
    {
      value: getEquipmentStat("Short Range Damage%"),
      label: "Equipment",
    },
    {
      value: getCrystaStat("Short Range Damage%"),
      label: "Crysta",
    },
    {
      value: getAuspiciousWind().ShortRangeDamage,
      label: "Auspicious Wind",
    },
    {
      value: getAvatarPotionFoodbuffStat("Short Range Damage%", "Avatar"),
      label: "Avatar",
    },
    {
      value: getAvatarPotionFoodbuffStat("Short Range Damage%", "Potion"),
      label: "Consumable",
    },
    {
      value: getAvatarPotionFoodbuffStat("Short Range Damage%", "FoodBuff"),
      label: "Food Buff",
    },
  ];
  let total = 100 + sources.reduce((sum, s) => sum + (s.value || 0), 0);

  setBreakdownText("ShortRangeDamage", sources);
  return total;
}
function getLongRangeDamage() {
  const sources = [
    {
      value: getEquipmentStat("Long Range Damage%"),
      label: "Equipment",
    },
    {
      value: getCrystaStat("Long Range Damage%"),
      label: "Crysta",
    },
    {
      value: getAvatarPotionFoodbuffStat("Long Range Damage%", "Avatar"),
      label: "Avatar",
    },
    {
      value: getAvatarPotionFoodbuffStat("Long Range Damage%", "Potion"),
      label: "Consumable",
    },
    {
      value: getAvatarPotionFoodbuffStat("Long Range Damage%", "FoodBuff"),
      label: "Food Buff",
    },
  ];
  let total = 100 + sources.reduce((sum, s) => sum + (s.value || 0), 0);

  setBreakdownText("LongRangeDamage", sources);
  return total;
}
function getAnticipate() {
  const sources = [
    {
      value: getEquipmentStat("Anticipate%"),
      label: "Equipment",
    },
    {
      value: getCrystaStat("Anticipate%"),
      label: "Crysta",
    },
    {
      value: getAvatarPotionFoodbuffStat("Anticipate%", "Avatar"),
      label: "Avatar",
    },
    {
      value: getAvatarPotionFoodbuffStat("Anticipate%", "Potion"),
      label: "Consumable",
    },
    {
      value: getAvatarPotionFoodbuffStat("Anticipate%", "FoodBuff"),
      label: "Food Buff",
    },
  ];
  let total = sources.reduce((sum, s) => sum + (s.value || 0), 0);

  setBreakdownText("Anticipate", sources);
  return total;
}
function getGuardBreak() {
  const sources = [
    {
      value: getEquipmentStat("Guard Break%"),
      label: "Equipment",
    },
    {
      value: getCrystaStat("Guard Break%"),
      label: "Crysta",
    },
    {
      value: getAvatarPotionFoodbuffStat("Guard Break%", "Avatar"),
      label: "Avatar",
    },
    {
      value: getAvatarPotionFoodbuffStat("Guard Break%", "Potion"),
      label: "Consumable",
    },
    {
      value: getAvatarPotionFoodbuffStat("Guard Break%", "FoodBuff"),
      label: "Food Buff",
    },
  ];
  let total = sources.reduce((sum, s) => sum + (s.value || 0), 0);

  setBreakdownText("GuardBreak", sources);
  return total;
}
function getFlinchUnavailable() {
  let FlinchUnavailable = false;
  const sources = [
    {
      value: getEquipmentStat("Flinch Unavailable"),
      label: "Equipment",
    },
    {
      value: getCrystaStat("Flinch Unavailable"),
      label: "Crysta",
    },
    {
      value: getAvatarPotionFoodbuffStat("Flinch Unavailable", "Avatar"),
      label: "Avatar",
    },
    {
      value: getAvatarPotionFoodbuffStat("Flinch Unavailable", "Potion"),
      label: "Consumable",
    },
    {
      value: getAvatarPotionFoodbuffStat("Flinch Unavailable", "FoodBuff"),
      label: "Food Buff",
    },
  ];
  let total = sources.reduce((sum, s) => sum + (s.value || 0), 0);

  if (total > 0) FlinchUnavailable = true;
  setBreakdownText("FlinchUnavailable", sources);
  return FlinchUnavailable;
}
function getTumbleUnavailable() {
  let TumbleUnavailable = false;
  const sources = [
    {
      value: getEquipmentStat("Tumble Unavailable"),
      label: "Equipment",
    },
    {
      value: getCrystaStat("Tumble Unavailable"),
      label: "Crysta",
    },
    {
      value: getAvatarPotionFoodbuffStat("Tumble Unavailable", "Avatar"),
      label: "Avatar",
    },
    {
      value: getAvatarPotionFoodbuffStat("Tumble Unavailable", "Potion"),
      label: "Consumable",
    },
    {
      value: getAvatarPotionFoodbuffStat("Tumble Unavailable", "FoodBuff"),
      label: "Food Buff",
    },
  ];
  let total = sources.reduce((sum, s) => sum + (s.value || 0), 0);

  if (total > 0) TumbleUnavailable = true;
  setBreakdownText("TumbleUnavailable", sources);
  return TumbleUnavailable;
}
function getStunUnavailable() {
  let StunUnavailable = false;
  const sources = [
    {
      value: getEquipmentStat("Stun Unavailable"),
      label: "Equipment",
    },
    {
      value: getCrystaStat("Stun Unavailable"),
      label: "Crysta",
    },
    {
      value: getAvatarPotionFoodbuffStat("Stun Unavailable", "Avatar"),
      label: "Avatar",
    },
    {
      value: getAvatarPotionFoodbuffStat("Stun Unavailable", "Potion"),
      label: "Consumable",
    },
    {
      value: getAvatarPotionFoodbuffStat("Stun Unavailable", "FoodBuff"),
      label: "Food Buff",
    },
  ];
  let total = sources.reduce((sum, s) => sum + (s.value || 0), 0);

  if (total > 0) StunUnavailable = true;
  setBreakdownText("StunUnavailable", sources);
  return StunUnavailable;
}

function getMagicCriticalRate() {
  let SpellBurstConversion = getSpellBurst().MCR;
  let DualBringerConversion = getDualBringerValue().MCR;

  let TotalConversion = SpellBurstConversion + DualBringerConversion;
  const baseCriticalRate = getCriticalRate();

  const MagicCriticalRate = formatNumber(
    baseCriticalRate * TotalConversion,
    "trunc"
  );

  const MagicCriticalRateWeaken = formatNumber(
    baseCriticalRate * (TotalConversion + 0.5),
    "trunc"
  );

  return {
    MagicCriticalRate,
    MagicCriticalRateWeaken,
  };
}
function getMagicCriticalDamage() {
  let MagicCriticalDamage = 0;
  let SpellBurstConversion = getSpellBurst().MCD;
  let DualBringerConversion = getDualBringerValue().MCD;

  let TotalConversion = SpellBurstConversion + DualBringerConversion;
  let MagicCriticalDamageRatio = TotalConversion + 0.5;
  MagicCriticalDamage =
    100 + (getCriticalDamage().CriticalDamage - 100) * MagicCriticalDamageRatio;
  return formatNumber(MagicCriticalDamage, "trunc");
}
function getEquippedElement() {
  const elements = ["Fire", "Water", "Wind", "Earth", "Light", "Dark"];

  for (let element of elements) {
    if (getEquipmentStat(`${element} Element`) > 0) {
      return element;
    }
  }

  return null;
}
function getElementDamageBonus(targetElement) {
  let elementWeakness = {
    Fire: "Earth",
    Earth: "Wind",
    Wind: "Water",
    Water: "Fire",
    Light: "Dark",
    Dark: "Light",
  };
  let weaponElement = getEquippedElement();

  let elementDamage = { physical: 100, magic: 100 };

  let elementBonus = 100;

  if (weaponElement && elementWeakness[weaponElement] === targetElement) {
    elementBonus += 25;
  }

  let damageToElementBonus =
    getEquipmentStat(`Damage To ${targetElement}%`) +
      getCrystaStat(`Damage To ${targetElement}%`) +
      getAvatarPotionFoodbuffStat(`Damage To ${targetElement}%`, "Avatar") +
      getAvatarPotionFoodbuffStat(`Damage To ${targetElement}%`, "Consumable") +
      getAvatarPotionFoodbuffStat(`Damage To ${targetElement}%`, "FoodBuff") +
      getEarthshaker().DTE || 0;

  let physicalElementBonus = elementBonus + damageToElementBonus;
  let magicElementBonus = elementBonus + damageToElementBonus;
  if (weaponElement) {
    magicElementBonus += formatNumber(CHARACTER_STAT.INT / 10, "down");
  }
  elementDamage.physical = physicalElementBonus;
  elementDamage.magic = magicElementBonus;
  return elementDamage;
}
function getElementResistance(element) {
  if (!element) return 0;
  let resistanceToElementBonus =
    getEquipmentStat(`${element} Resistance%`) +
      getCrystaStat(`${element} Resistance%`) +
      getAvatarPotionFoodbuffStat(`${element} Resistance%`, "Avatar") +
      getAvatarPotionFoodbuffStat(`${element} Resistance%`, "Consumable") +
      getAvatarPotionFoodbuffStat(`${element} Resistance%`, "FoodBuff") || 0;
  return resistanceToElementBonus;
}
function getStability() {
  let mainWeapon = mainWeaponSelect.value.toLowerCase();
  let mainWeaponStabilityValue = Number(weaponStability.value) || 0;
  let subWeapon = subWeaponTypeSelect.value.toLowerCase();
  let subWeaponStabilityValue = Number(subWeaponStability.value) || 0;
  let statStability = 0;
  if (mainWeapon === "one handed sword" && subWeapon === "one handed sword") {
    statStability = 0.025 * getTotalSTR() + 0.075 * getTotalDEX();
  } else {
    switch (mainWeapon) {
      case "one handed sword":
        statStability = 0.025 * getTotalSTR() + 0.075 * getTotalDEX();
        break;
      case "two handed sword":
        statStability = 0.1 * getTotalDEX();
        break;
      case "bow":
        statStability = 0.05 * getTotalSTR() + 0.05 * getTotalDEX();
        break;
      case "bowgun":
        statStability = 0.05 * getTotalSTR();
        break;
      case "staff":
        statStability = 0.05 * getTotalSTR();
        break;
      case "magic device":
        statStability = 0.1 * getTotalDEX();
        break;
      case "knuckles":
        statStability = 0.025 * getTotalDEX();
        break;
      case "halberd":
        statStability = 0.05 * getTotalSTR() + 0.05 * getTotalDEX();
        break;
      case "katana":
        statStability = 0.075 * getTotalSTR() + 0.025 * getTotalDEX();
        break;
      case "barehand":
        statStability = formatNumber(getTotalDEX() / 2.85, "trunc");
        break;
      default:
        statStability = 0;
    }
  }
  const sources = [
    {
      value: mainWeaponStabilityValue,
      label: "Weapon Stability",
    },
    {
      value: mainWeapon === "barehand" ? 1 : 0,
      label: "Barehand Base Stability",
    },
    {
      value:
        subWeapon === "arrow"
          ? mainWeapon === "bow"
            ? formatNumber(subWeaponStabilityValue, "trunc")
            : mainWeapon === "bowgun"
            ? formatNumber(subWeaponStabilityValue / 2, "trunc")
            : 0
          : 0,

      label: "Sub Weapon Stability",
    },
    {
      value: parseFloat(statStability.toFixed(2)),
      label: "Stat Stability",
    },
    {
      value: getEquipmentStat("Stability"),
      label: "Equipment",
    },
    {
      value: getCrystaStat("Stability"),
      label: "Crysta",
    },
    {
      value: getParalysisShot().Stability,
      label: "Paralysis Shot",
    },
    {
      value: getSamuraiArchery().Stability,
      label: "Samurai Archery",
    },
    {
      value: getTwoHanded().Stability,
      label: "Two-Handed",
    },
    {
      value: getBerserk().Stability,
      label: "Berserk",
    },
    {
      value: getEarthshaker().Stability,
      label: "Earthshaker",
    },
    {
      value: getEnergyControl().Stability,
      label: "Energy Control",
    },
    {
      value: getAnnihilator().Stability,
      label: "Annihilator",
    },
    {
      value: getAvatarPotionFoodbuffStat("Stability", "Avatar"),
      label: "Avatar",
    },
    {
      value: getAvatarPotionFoodbuffStat("Stability", "Potion"),
      label: "Consumable",
    },
    {
      value: getAvatarPotionFoodbuffStat("Stability", "FoodBuff"),
      label: "Food Buff",
    },
  ];
  let total = formatNumber(
    sources.reduce((sum, s) => sum + (s.value || 0), 0),
    "trunc"
  );

  let final = Math.min(100, total);
  setBreakdownText("Stability", sources);
  return { total, final };
}
function getMagicStability() {
  let MagicStability =
    (100 + getStability().total) / 2 + getChainCast().MagicStability;
  return formatNumber(MagicStability, "trunc");
}
function getMinMagicStability() {
  let MinMagicStability = Math.min(
    90,
    (100 + getStability().total) / 2 + getChainCast().MagicStability
  );
  return formatNumber(MinMagicStability, "trunc");
}
function getMaxMagicStability() {
  let MaxMagicStability = Math.max(100, 100 + (getMagicStability() - 90));
  MaxMagicStability = Math.min(110, MaxMagicStability);
  return formatNumber(MaxMagicStability, "trunc");
}
function getWeaponMastery() {
  let mainWeapon = mainWeaponSelect.value.toLowerCase();
  let masterySkill = null;
  switch (mainWeapon) {
    case "one handed sword":
      masterySkill = "Sword Mastery";
      break;
    case "two handed sword":
      masterySkill = "Sword Mastery";
      break;
    case "bow":
      masterySkill = "Shot Mastery";
      break;
    case "bowgun":
      masterySkill = "Shot Mastery";
      break;
    case "staff":
      masterySkill = "Magic Mastery";
      break;
    case "magic device":
      masterySkill = "Magic Mastery";
      break;
    case "halberd":
      masterySkill = "Halberd Mastery";
      break;
    case "knuckles":
      masterySkill = "Martial Mastery";
      break;
    case "katana":
      masterySkill = "Bushido";
      break;
    default:
      masterySkill = null;
  }
  let weaponATK_Percent = 0;
  let ATK_Percent = 0;
  let MATK_Percent = 0;
  if (!masterySkill)
    return { weaponATK_Percent, ATK_Percent, MATK_Percent, masterySkill };

  let skillLevel = passiveSkills.find(
    (skill) => skill.skillName === masterySkill
  ).skillLevel;

  if (skillLevel > 0) {
    weaponATK_Percent = 3 * skillLevel;
    let physicalMastery = [
      "one handed sword",
      "two handed sword",
      "bow",
      "bowgun",
      "knuckles",
      "halberd",
      "katana",
    ];
    if (physicalMastery.includes(mainWeapon)) {
      if (skillLevel <= 2) {
        ATK_Percent = 1;
      } else if (skillLevel <= 7) {
        ATK_Percent = 2;
      } else {
        ATK_Percent = 3;
      }
    } else if (["staff", "magic device"].includes(mainWeapon)) {
      if (skillLevel <= 2) {
        MATK_Percent = 1;
      } else if (skillLevel <= 7) {
        MATK_Percent = 2;
      } else {
        MATK_Percent = 3;
      }
    }
  }

  return { weaponATK_Percent, ATK_Percent, MATK_Percent, masterySkill };
}
function getATKFromStat() {
  let weaponATK_Flat = 0;
  let mainWeapon = mainWeaponSelect.value.toLowerCase();
  let subWeapon = subWeaponTypeSelect.value.toLowerCase();
  if (mainWeapon === "one handed sword" && subWeapon === "one handed sword") {
    weaponATK_Flat = getTotalSTR() + getTotalAGI() + 2 * getTotalDEX();
  } else {
    switch (mainWeapon) {
      case "one handed sword":
        weaponATK_Flat = 2 * getTotalSTR() + 2 * getTotalDEX();
        break;
      case "two handed sword":
        weaponATK_Flat = 3 * getTotalSTR() + 1 * getTotalDEX();
        break;
      case "bow":
        weaponATK_Flat = 1 * getTotalSTR() + 3 * getTotalDEX();
        break;
      case "bowgun":
        weaponATK_Flat = 4 * getTotalDEX();
        break;
      case "staff":
        weaponATK_Flat = 3 * getTotalSTR() + 1 * getTotalINT();
        break;
      case "magic device":
        weaponATK_Flat = 2 * getTotalINT() + 2 * getTotalAGI();
        break;
      case "knuckles":
        weaponATK_Flat = 2 * getTotalAGI() + 0.5 * getTotalDEX();
        break;
      case "halberd":
        weaponATK_Flat = 2.5 * getTotalSTR() + 1.5 * getTotalAGI();
        break;
      case "katana":
        weaponATK_Flat = 1.5 * getTotalSTR() + 2.5 * getTotalDEX();
        break;
      case "barehand":
        weaponATK_Flat = 1 + 1 * getTotalSTR();
        break;
      default:
        weaponATK_Flat = 1;
        break;
    }
  }
  return { weaponATK_Flat };
}
function getMATKFromStat() {
  let weaponMATK_Flat = 0;
  let mainWeapon = mainWeaponSelect.value.toLowerCase();

  switch (mainWeapon) {
    case "one handed sword":
      weaponMATK_Flat = 3 * getTotalINT() + 1 * getTotalDEX();
      break;
    case "two handed sword":
      weaponMATK_Flat = 3 * getTotalINT() + 1 * getTotalDEX();
      break;
    case "bow":
      weaponMATK_Flat = 3 * getTotalINT() + 1 * getTotalDEX();
      break;
    case "bowgun":
      weaponMATK_Flat = 3 * getTotalINT() + 1 * getTotalDEX();
      break;
    case "staff":
      weaponMATK_Flat = 4 * getTotalINT() + 1 * getTotalDEX();
      break;
    case "magic device":
      weaponMATK_Flat = 4 * getTotalINT() + 1 * getTotalDEX();
      break;
    case "knuckles":
      weaponMATK_Flat = 4 * getTotalINT() + 1 * getTotalDEX();
      break;
    case "halberd":
      weaponMATK_Flat =
        2 * getTotalINT() + 1 * getTotalAGI() + 1 * getTotalDEX();
      break;
    case "katana":
      weaponMATK_Flat =
        2 * getTotalINT() + 1 * getTotalAGI() + 1 * getTotalDEX();
      break;
    case "barehand":
      weaponMATK_Flat = 3 * getTotalINT() + 1 * getTotalDEX();
      break;
    default:
      weaponMATK_Flat = 0;
      break;
  }
  return { weaponMATK_Flat };
}
function getATKFromSub() {
  let mainWeapon = mainWeaponSelect.value.toLowerCase();
  let subWeaponATKValue = Number(subWeaponATKDEF?.value) || 0;
  let subWeaponType = subWeaponTypeSelect.value.toLowerCase();
  let weaponATK_Flat = 0;
  if (subWeaponType === "arrow" && ["bow", "bowgun"].includes(mainWeapon)) {
    weaponATK_Flat = subWeaponATKValue;
    if (mainWeapon === "bowgun") weaponATK_Flat = subWeaponATKValue / 2;
  }
  weaponATK_Flat = formatNumber(weaponATK_Flat, "trunc");
  return { weaponATK_Flat };
}
function getTotalATKAndMATK() {
  let mainWeapon = mainWeaponSelect.value.toLowerCase();
  let mainWeaponRefineValue =
    (Number(weaponRefine?.value) || 0) + getDauntless().RefineBonus;
  let baseMainWeaponATKValue = Number(weaponATK.value) || 0;
  let bonusBaseWeaponATKFromEnergyControlAnnihilator =
    baseMainWeaponATKValue *
    (getEnergyControlAnnihilator().weaponATK_Percent / 100);
  let bonusBaseWeaponATKFromGust =
    baseMainWeaponATKValue * (getGust().bonusBaseWeaponATK / 100);
  let bonusBaseWeaponATK =
    bonusBaseWeaponATKFromEnergyControlAnnihilator + bonusBaseWeaponATKFromGust;

  let mainWeaponATKValue = baseMainWeaponATKValue + bonusBaseWeaponATK;

  let weaponATKFromStatUP =
    0 +
    (getEquipmentStat("ATK UP(STR)%") / 100) * CHARACTER_STAT.STR +
    (getEquipmentStat("ATK UP(INT)%") / 100) * CHARACTER_STAT.INT +
    (getEquipmentStat("ATK UP(VIT)%") / 100) * CHARACTER_STAT.VIT +
    (getEquipmentStat("ATK UP(AGI)%") / 100) * CHARACTER_STAT.AGI +
    (getEquipmentStat("ATK UP(DEX)%") / 100) * CHARACTER_STAT.DEX;
  let weaponATKFromStatDOWN =
    0 -
    (getEquipmentStat("ATK DOWN(STR)%") / 100) * CHARACTER_STAT.STR -
    (getEquipmentStat("ATK DOWN(INT)%") / 100) * CHARACTER_STAT.INT -
    (getEquipmentStat("ATK DOWN(VIT)%") / 100) * CHARACTER_STAT.VIT -
    (getEquipmentStat("ATK DOWN(AGI)%") / 100) * CHARACTER_STAT.AGI -
    (getEquipmentStat("ATK DOWN(DEX)%") / 100) * CHARACTER_STAT.DEX;

  let weaponMATKFromStatUP =
    0 +
    (getEquipmentStat("MATK UP(STR)%") / 100) * CHARACTER_STAT.STR +
    (getEquipmentStat("MATK UP(INT)%") / 100) * CHARACTER_STAT.INT +
    (getEquipmentStat("MATK UP(VIT)%") / 100) * CHARACTER_STAT.VIT +
    (getEquipmentStat("MATK UP(AGI)%") / 100) * CHARACTER_STAT.AGI +
    (getEquipmentStat("MATK UP(DEX)%") / 100) * CHARACTER_STAT.DEX;
  let weaponMATKFromStatDOWN =
    0 -
    (getEquipmentStat("MATK DOWN(STR)%") / 100) * CHARACTER_STAT.STR -
    (getEquipmentStat("MATK DOWN(INT)%") / 100) * CHARACTER_STAT.INT -
    (getEquipmentStat("MATK DOWN(VIT)%") / 100) * CHARACTER_STAT.VIT -
    (getEquipmentStat("MATK DOWN(AGI)%") / 100) * CHARACTER_STAT.AGI -
    (getEquipmentStat("MATK DOWN(DEX)%") / 100) * CHARACTER_STAT.DEX;

  let sources = [
    {
      value: baseMainWeaponATKValue,
      label: "Base Weapon ATK",
    },
    {
      value: getATKFromSub().weaponATK_Flat,
      label: "Sub Weapon ATK",
    },
    {
      value:
        getEquipmentStat("Weapon ATK") +
        formatNumber(
          mainWeaponATKValue * (getEquipmentStat("Weapon ATK%") / 100),
          "trunc"
        ),
      label: "+WeaponATK Equipment",
    },
    {
      value:
        getCrystaStat("Weapon ATK") +
        formatNumber(
          mainWeaponATKValue * (getCrystaStat("Weapon ATK%") / 100),
          "trunc"
        ),
      label: "+WeaponATK Crysta",
    },
    {
      value: formatNumber(
        mainWeaponATKValue *
          ((mainWeaponRefineValue * mainWeaponRefineValue) / 100) +
          mainWeaponRefineValue,
        "trunc"
      ),
      label: "Refinement",
    },
    {
      value: getUnarmedMastery().weaponATK_Flat,
      label: "Unarmed Mastery",
    },
    {
      value: formatNumber(
        mainWeaponATKValue * (getWeaponMastery().weaponATK_Percent / 100),
        "trunc"
      ),
      label: "Weapon ATK " + getWeaponMastery().masterySkill,
    },
    {
      value: getHunterBowgun().weaponATK_Flat,
      label: "Hunter Bowgun",
    },
    {
      value: bonusBaseWeaponATKFromEnergyControlAnnihilator,
      label: "Energy Control + Annihilator",
    },
    {
      value: bonusBaseWeaponATKFromGust,
      label: "Gust Base Weapon ATK",
    },
    {
      value: formatNumber(
        mainWeaponATKValue * (getTwoHanded().weaponATK_Percent / 100),
        "trunc"
      ),
      label: "Two-Handed",
    },
    {
      value: formatNumber(
        mainWeaponATKValue * (getBusterBlade().weaponATK_Percent / 100),
        "trunc"
      ),
      label: "Buster Blade",
    },
    {
      value: formatNumber(
        mainWeaponATKValue * (getBraveAura().weaponATK_Percent / 100),
        "trunc"
      ),
      label: "Brave Aura",
    },
    {
      value: formatNumber(
        mainWeaponATKValue * (getFlashBlast().weaponATK_Percent / 100),
        "trunc"
      ),
      label: "Flash Blast",
    },
    {
      value: Number(
        getAvatarPotionFoodbuffStat("Weapon ATK", "Avatar") +
          formatNumber(
            mainWeaponATKValue *
              (getAvatarPotionFoodbuffStat("Weapon ATK%", "FoodBuff") / 100)
          )
      ),
      label: "Avatar",
    },
    {
      value: Number(
        getAvatarPotionFoodbuffStat("Weapon ATK", "Potion") +
          formatNumber(
            mainWeaponATKValue *
              (getAvatarPotionFoodbuffStat("Weapon ATK%", "Potion") / 100)
          )
      ),
      label: "Consumable",
    },
    {
      value: Number(
        getAvatarPotionFoodbuffStat("Weapon ATK", "FoodBuff") +
          formatNumber(
            mainWeaponATKValue *
              (getAvatarPotionFoodbuffStat("Weapon ATK%", "FoodBuff") / 100)
          )
      ),
      label: "Food Buff",
    },
  ];

  let totalPhysicalWeaponATKSource = [
    ...sources,
    {
      value: CHARACTER_STAT.level,
      label: "Level",
    },
    {
      value: formatNumber(getATKFromStat().weaponATK_Flat, "trunc"),
      label: "Stat",
    },
    {
      value: formatNumber(weaponATKFromStatUP, "trunc"),
      label: "ATK UP Equipment",
    },
    {
      value: formatNumber(weaponATKFromStatDOWN, "trunc"),
      label: "ATK DOWN Equipment",
    },
  ];
  let totalWeaponATK = totalPhysicalWeaponATKSource.reduce(
    (sum, s) => sum + (s.value || 0),
    0
  );
  const ATK_Source = [
    ...totalPhysicalWeaponATKSource,
    {
      value:
        getEquipmentStat("ATK") +
        formatNumber(
          totalWeaponATK * (getEquipmentStat("ATK%") / 100),
          "trunc"
        ),
      label: "Equipment",
    },
    {
      value:
        getCrystaStat("ATK") +
        formatNumber(totalWeaponATK * (getCrystaStat("ATK%") / 100), "trunc"),
      label: "Crysta",
    },
    {
      value:
        getGust().ATK_Flat +
        formatNumber(totalWeaponATK * (getGust().ATK_Percent / 100), "trunc"),
      label: "Gust ATK",
    },
    {
      value: formatNumber(
        totalWeaponATK * (getWeaponMastery().ATK_Percent / 100),
        "trunc"
      ),
      label: getWeaponMastery().masterySkill,
    },
    {
      value: formatNumber(
        totalWeaponATK * (getMagicWarriorMastery().ATK_Percent / 100),
        "trunc"
      ),
      label: "Magic Warrior Mastery",
    },
    {
      value: getSamuraiArchery().ATK_Flat,
      label: "Samurai Archery",
    },
    {
      value: getAttackUP().ATK_Flat,
      label: "Attack UP",
    },
    {
      value: getIntimidatingPower().ATK_Flat,
      label: "Intimidating Power",
    },
    {
      value: formatNumber(
        totalWeaponATK * (getWarCry().ATK_Percent / 100),
        "trunc"
      ),
      label: "War Cry",
    },
    {
      value: getCamouflage().ATK_Flat,
      label: "Camouflage",
    },
    {
      value: getKairikiRanshin().ATK_Flat,
      label: "Kairiki Ranshin",
    },
    {
      value: getEnhance().ATK_Flat,
      label: "Enhance",
    },
    {
      value: getSacredTeaching().ATK_Flat,
      label: "Sacred Teaching",
    },
    {
      value: getResonancePower().ATK_Flat,
      label: "Resonance(Power)",
    },
    {
      value: formatNumber(
        totalWeaponATK * (getGuardian().ATK_Percent / 100),
        "trunc"
      ),
      label: "Guardian",
    },
    {
      value: getSicarius().ATK_Flat,
      label: "Sicarius",
    },
    {
      value:
        getAvatarPotionFoodbuffStat("ATK", "Avatar") +
        formatNumber(
          totalWeaponATK *
            (getAvatarPotionFoodbuffStat("ATK%", "Avatar") / 100),
          "trunc"
        ),
      label: "Avatar",
    },
    {
      value:
        getAvatarPotionFoodbuffStat("ATK", "Potion") +
        formatNumber(
          totalWeaponATK *
            (getAvatarPotionFoodbuffStat("ATK%", "Potion") / 100),
          "trunc"
        ),
      label: "Consumable",
    },
    {
      value:
        getAvatarPotionFoodbuffStat("ATK", "FoodBuff") +
        formatNumber(
          totalWeaponATK *
            (getAvatarPotionFoodbuffStat("ATK%", "FoodBuff") / 100),
          "trunc"
        ),
      label: "Food Buff",
    },
  ];
  let totalATKNoCastMastery = ATK_Source.reduce(
    (sum, s) => sum + (s.value || 0),
    0
  );
  ATK_Source.push({
    value: formatNumber(
      totalWeaponATK * (getCastMastery().ATK_Percent / 100),
      "trunc"
    ),
    label: "Cast Mastery",
  });

  let totalMagicRatio = 0;
  if (["staff", "magic device"].includes(mainWeapon)) {
    totalMagicRatio = 1;
  } else if (mainWeapon === "knuckles") {
    totalMagicRatio = 0.5;
  } else {
    totalMagicRatio = 0;
  }

  let totalWeaponATKValue = sources.reduce((sum, s) => sum + (s.value || 0), 0);

  let adjustedMagicWeaponMATKSource = sources.map((s) => ({
    ...s,
    value: formatNumber((s.value || 0) * totalMagicRatio, "trunc"),
  }));

  let totalMagicWeaponMATKSource = [
    ...adjustedMagicWeaponMATKSource,
    {
      value: CHARACTER_STAT.level,
      label: "Level",
    },
    {
      value: formatNumber(getMATKFromStat().weaponMATK_Flat, "trunc"),
      label: "Stat",
    },
    {
      value: formatNumber(getConversion().baseMATKFromINT, "trunc"),
      label: "Conversion INT",
    },
    {
      value: formatNumber(weaponMATKFromStatUP, "trunc"),
      label: "MATK UP Equipment",
    },
    {
      value: formatNumber(weaponMATKFromStatDOWN, "trunc"),
      label: "MATK DOWN Equipment",
    },
  ];
  let totalMagicWeaponATK = totalMagicWeaponMATKSource.reduce(
    (sum, s) => sum + (s.value || 0),
    0
  );
  const MATK_Source = [
    ...totalMagicWeaponMATKSource,

    {
      value:
        getEquipmentStat("MATK") +
        formatNumber(
          totalMagicWeaponATK * (getEquipmentStat("MATK%") / 100),
          "trunc"
        ),
      label: "Equipment",
    },
    {
      value:
        getCrystaStat("MATK") +
        formatNumber(
          totalMagicWeaponATK * (getCrystaStat("MATK%") / 100),
          "trunc"
        ),
      label: "Crysta",
    },
    {
      value: formatNumber(
        totalMagicWeaponATK * (getWeaponMastery().MATK_Percent / 100),
        "trunc"
      ),
      label: getWeaponMastery().masterySkill,
    },
    {
      value: formatNumber(
        totalWeaponATKValue * (getConversion().baseMATK_Percent / 100),
        "trunc"
      ),
      label: "Conversion Weapon ATK",
    },
    {
      value: getMagicUP().MATK_Flat,
      label: "Magic UP",
    },
    {
      value: getFamilia().MATK_Flat,
      label: "Familia",
    },
    {
      value: getIncreasedEnergy().MATK_Flat,
      label: "Increased Energy",
    },
    {
      value: getChainCast().MATK_Flat,
      label: "Chain Cast",
    },
    {
      value: getRapidCharge().MATK_Flat,
      label: "Rapid Charge",
    },
    {
      value: formatNumber(
        totalWeaponATKValue * (getPrayer().MATK_Percent / 100),
        "trunc"
      ),
      label: "Prayer",
    },
    {
      value: getEnhance().MATK_Flat,
      label: "Enhance",
    },
    {
      value: getSacredTeaching().MATK_Flat,
      label: "Sacred Teaching",
    },
    {
      value: getResonancePower().MATK_Flat,
      label: "Resonance(Power)",
    },
    {
      value: formatNumber(
        totalWeaponATKValue * (getGuardian().MATK_Percent / 100),
        "trunc"
      ),
      label: "Guardian",
    },
    {
      value:
        getAvatarPotionFoodbuffStat("MATK", "Avatar") +
        formatNumber(
          totalMagicWeaponATK *
            (getAvatarPotionFoodbuffStat("MATK%", "Avatar") / 100),
          "trunc"
        ),
      label: "Avatar",
    },
    {
      value:
        getAvatarPotionFoodbuffStat("MATK", "Potion") +
        formatNumber(
          totalMagicWeaponATK *
            (getAvatarPotionFoodbuffStat("MATK%", "Potion") / 100),
          "trunc"
        ),
      label: "Consumable",
    },
    {
      value:
        getAvatarPotionFoodbuffStat("MATK", "FoodBuff") +
        formatNumber(
          totalMagicWeaponATK *
            (getAvatarPotionFoodbuffStat("MATK%", "FoodBuff") / 100),
          "trunc"
        ),
      label: "Food Buff",
    },
  ];
  let totalATK = ATK_Source.reduce((sum, s) => sum + (s.value || 0), 0);
  setBreakdownText("ATK", ATK_Source);

  let totalMATK = MATK_Source.reduce((sum, s) => sum + (s.value || 0), 0);
  setBreakdownText("MATK", MATK_Source);
  return { totalATK, totalMATK, totalATKNoCastMastery };
}
function getATKWhenCritical() {
  let skillLevel = passiveSkills.find(
    (skill) => skill.skillName === "Two-Handed"
  ).skillLevel;
  let criticalTotalATK = getTotalATKAndMATK().totalATK;
  if (getTwoHanded().KatanaCritical) {
    criticalTotalATK = getTotalATKAndMATK().totalATK * (1 + 0.05 * skillLevel);
  }
  return { criticalTotalATK };
}
function getSubHandATK() {
  let mainWeapon = mainWeaponSelect.value.toLowerCase();
  let subWeaponType = subWeaponTypeSelect.value.toLowerCase();
  let subWeaponATKValue = Number(subWeaponATKDEF?.value) || 0;
  let subWeaponRefineValue = Number(subWeaponRefine.value) || 0;
  let finalSubATK = 0;
  if (
    mainWeapon === "one handed sword" &&
    subWeaponType === "one handed sword"
  ) {
    let weaponATKFromStatUP =
      0 +
      (getEquipmentStat("ATK UP(STR)%") / 100) * CHARACTER_STAT.STR +
      (getEquipmentStat("ATK UP(INT)%") / 100) * CHARACTER_STAT.INT +
      (getEquipmentStat("ATK UP(VIT)%") / 100) * CHARACTER_STAT.VIT +
      (getEquipmentStat("ATK UP(AGI)%") / 100) * CHARACTER_STAT.AGI +
      (getEquipmentStat("ATK UP(DEX)%") / 100) * CHARACTER_STAT.DEX;
    let weaponATKFromStatDOWN =
      0 -
      (getEquipmentStat("ATK DOWN(STR)%") / 100) * CHARACTER_STAT.STR -
      (getEquipmentStat("ATK DOWN(INT)%") / 100) * CHARACTER_STAT.INT -
      (getEquipmentStat("ATK DOWN(VIT)%") / 100) * CHARACTER_STAT.VIT -
      (getEquipmentStat("ATK DOWN(AGI)%") / 100) * CHARACTER_STAT.AGI -
      (getEquipmentStat("ATK DOWN(DEX)%") / 100) * CHARACTER_STAT.DEX;

    let sources = [
      {
        value: subWeaponATKValue,
        label: "Base Weapon ATK",
      },
      {
        value: getATKFromSub().weaponATK_Flat,
        label: "Sub Weapon ATK",
      },
      {
        value:
          getEquipmentStat("Weapon ATK") +
          formatNumber(
            subWeaponATKValue * (getEquipmentStat("Weapon ATK%") / 100),
            "trunc"
          ),
        label: "+WeaponATK Equipment",
      },
      {
        value:
          getCrystaStat("Weapon ATK") +
          formatNumber(
            subWeaponATKValue * (getCrystaStat("Weapon ATK%") / 100),
            "trunc"
          ),
        label: "+WeaponATK Crysta",
      },
      {
        value:
          subWeaponATKValue *
            ((subWeaponRefineValue * subWeaponRefineValue) / 200) +
          subWeaponRefineValue,
        label: "Refinement",
      },
      {
        value: formatNumber(
          subWeaponATKValue * (getWeaponMastery().weaponATK_Percent / 100),
          "trunc"
        ),
        label: "Weapon ATK " + getWeaponMastery().masterySkill,
      },
      {
        value: Number(
          getAvatarPotionFoodbuffStat("Weapon ATK", "Avatar") +
            formatNumber(
              subWeaponATKValue *
                (getAvatarPotionFoodbuffStat("Weapon ATK%", "FoodBuff") / 100)
            )
        ),
        label: "Avatar",
      },
      {
        value: Number(
          getAvatarPotionFoodbuffStat("Weapon ATK", "Potion") +
            formatNumber(
              subWeaponATKValue *
                (getAvatarPotionFoodbuffStat("Weapon ATK%", "Potion") / 100)
            )
        ),
        label: "Consumable",
      },
      {
        value: Number(
          getAvatarPotionFoodbuffStat("Weapon ATK", "FoodBuff") +
            formatNumber(
              subWeaponATKValue *
                (getAvatarPotionFoodbuffStat("Weapon ATK%", "FoodBuff") / 100)
            )
        ),
        label: "Food Buff",
      },
    ];
    let subATK = [
      ...sources,
      {
        value: CHARACTER_STAT.level,
        label: "Level",
      },
      {
        value: getTotalSTR() + getTotalAGI() * 3,
        label: "Stat",
      },
      {
        value: weaponATKFromStatUP,
        label: "ATK UP Equipment",
      },
      {
        value: weaponATKFromStatDOWN,
        label: "ATK DOWN Equipment",
      },
    ];
    let totalWeaponATK = subATK.reduce((sum, s) => sum + (s.value || 0), 0);
    const subATK_Source = [
      ...subATK,
      {
        value:
          getEquipmentStat("ATK") +
          formatNumber(
            totalWeaponATK * (getEquipmentStat("ATK%") / 100),
            "trunc"
          ),
        label: "Equipment",
      },
      {
        value:
          getCrystaStat("ATK") +
          formatNumber(totalWeaponATK * (getCrystaStat("ATK%") / 100), "trunc"),
        label: "Crysta",
      },
      {
        value: formatNumber(
          totalWeaponATK * (getWeaponMastery().ATK_Percent / 100),
          "trunc"
        ),
        label: getWeaponMastery().masterySkill,
      },
      {
        value: formatNumber(
          totalWeaponATK * (getCastMastery().ATK_Percent / 100),
          "trunc"
        ),
        label: "Cast Mastery",
      },
      {
        value: formatNumber(
          totalWeaponATK * (getMagicWarriorMastery().ATK_Percent / 100),
          "trunc"
        ),
        label: "Magic Warrior Mastery",
      },
      {
        value: getSamuraiArchery().ATK_Flat,
        label: "Samurai Archery",
      },
      {
        value: getAttackUP().ATK_Flat,
        label: "Attack UP",
      },
      {
        value: getIntimidatingPower().ATK_Flat,
        label: "Intimidating Power",
      },
      {
        value: formatNumber(
          totalWeaponATK * (getWarCry().ATK_Percent / 100),
          "trunc"
        ),
        label: "War Cry",
      },
      {
        value: getKairikiRanshin().ATK_Flat,
        label: "Kairiki Ranshin",
      },
      {
        value: getEnhance().ATK_Flat,
        label: "Enhance",
      },
      {
        value: getSacredTeaching().ATK_Flat,
        label: "Sacred Teaching",
      },
      {
        value: getResonancePower().ATK_Flat,
        label: "Resonance(Power)",
      },
      {
        value: formatNumber(
          totalWeaponATK * (getGuardian().ATK_Percent / 100),
          "trunc"
        ),
        label: "Guardian",
      },
      {
        value: getSicarius().ATK_Flat,
        label: "Sicarius",
      },
      {
        value:
          getAvatarPotionFoodbuffStat("ATK", "Avatar") +
          formatNumber(
            totalWeaponATK *
              (getAvatarPotionFoodbuffStat("ATK%", "Avatar") / 100),
            "trunc"
          ),
        label: "Avatar",
      },
      {
        value:
          getAvatarPotionFoodbuffStat("ATK", "Potion") +
          formatNumber(
            totalWeaponATK *
              (getAvatarPotionFoodbuffStat("ATK%", "Potion") / 100),
            "trunc"
          ),
        label: "Consumable",
      },
      {
        value:
          getAvatarPotionFoodbuffStat("ATK", "FoodBuff") +
          formatNumber(
            totalWeaponATK *
              (getAvatarPotionFoodbuffStat("ATK%", "FoodBuff") / 100),
            "trunc"
          ),
        label: "Food Buff",
      },
    ];
    finalSubATK = subATK_Source.reduce((sum, s) => sum + (s.value || 0), 0);
    setBreakdownText("Sub-HandATK", subATK_Source);
  }
  return formatNumber(finalSubATK, "trunc");
}
function getSubHandStability() {
  let mainWeapon = mainWeaponSelect.value.toLowerCase();
  let subWeaponType = subWeaponTypeSelect.value.toLowerCase();
  let subWeaponStabilityValue = Number(subWeaponStability?.value) || 0;
  let subStability = 0;
  if (
    mainWeapon === "one handed sword" &&
    subWeaponType == "one handed sword"
  ) {
    subStability =
      subWeaponStabilityValue / 2 +
      getTotalSTR() * 0.06 +
      getTotalAGI() * 0.04 +
      getEquipmentStat("Stability") +
      getCrystaStat("Stability") +
      getAvatarPotionFoodbuffStat("Stability", "Avatar") +
      getAvatarPotionFoodbuffStat("Stability", "Potion") +
      getAvatarPotionFoodbuffStat("Stability", "FoodBuff");
  }

  return formatNumber(subStability, "down");
}
function getNHPR() {
  let baseNHPR = formatNumber(Math.min(getMaxHP(), 99999) / 25, "trunc");
  const sources = [
    {
      value: baseNHPR,
      label: "Base Natural HP Regen",
    },
    {
      value:
        getEquipmentStat("Natural HP Regen") +
        formatNumber(
          baseNHPR * (getEquipmentStat("Natural HP Regen%") / 100),
          "trunc"
        ),
      label: "Equipment",
    },
    {
      value:
        getCrystaStat("Natural HP Regen") +
        formatNumber(
          baseNHPR * (getCrystaStat("Natural HP Regen%") / 100),
          "trunc"
        ),
      label: "Crysta",
    },
    {
      value:
        getAvatarPotionFoodbuffStat("Natural HP Regen", "Avatar") +
        formatNumber(
          baseNHPR *
            (getAvatarPotionFoodbuffStat("Natural HP Regen%", "Avatar") / 100),
          "trunc"
        ),
      label: "Avatar",
    },
    {
      value:
        getAvatarPotionFoodbuffStat("Natural HP Regen", "Potion") +
        formatNumber(
          baseNHPR *
            (getAvatarPotionFoodbuffStat("Natural HP Regen%", "Potion") / 100),
          "trunc"
        ),
      label: "Consumable",
    },
    {
      value:
        getAvatarPotionFoodbuffStat("Natural HP Regen", "FoodBuff") +
        formatNumber(
          baseNHPR *
            (getAvatarPotionFoodbuffStat("Natural HP Regen%", "FoodBuff") /
              100),
          "trunc"
        ),
      label: "Food Buff",
    },
  ];
  let NHPR = sources.reduce((sum, s) => sum + (s.value || 0), 0);
  let finalNHPRSource = [
    ...sources,
    {
      value:
        getSafeRest().NHPR_Flat +
        formatNumber(NHPR * (getSafeRest().NHPR_Percent / 100), "trunc"),
      label: "Safe Rest",
    },
  ];
  let finalNHPR = finalNHPRSource.reduce((sum, s) => sum + (s.value || 0), 0);
  setBreakdownText("NaturalHPRegen", finalNHPRSource);
  return finalNHPR;
}
function getNMPR() {
  let baseNMPR = Math.max(Math.floor(Math.min(getMaxMP(), 2000) / 100), 0);
  const sources = [
    {
      value: baseNMPR,
      label: "Base Natural MP Regen",
    },
    {
      value:
        getEquipmentStat("Natural MP Regen") +
        formatNumber(
          baseNMPR * (getEquipmentStat("Natural MP Regen%") / 100),
          "trunc"
        ),
      label: "Equipment",
    },
    {
      value:
        getCrystaStat("Natural MP Regen") +
        formatNumber(
          baseNMPR * (getCrystaStat("Natural MP Regen%") / 100),
          "trunc"
        ),
      label: "Crysta",
    },
    {
      value:
        getAvatarPotionFoodbuffStat("Natural MP Regen", "Avatar") +
        formatNumber(
          baseNMPR *
            (getAvatarPotionFoodbuffStat("Natural MP Regen%", "Avatar") / 100),
          "trunc"
        ),
      label: "Avatar",
    },
    {
      value:
        getAvatarPotionFoodbuffStat("Natural MP Regen", "Potion") +
        formatNumber(
          baseNMPR *
            (getAvatarPotionFoodbuffStat("Natural MP Regen%", "Potion") / 100),
          "trunc"
        ),
      label: "Consumable",
    },
    {
      value:
        getAvatarPotionFoodbuffStat("Natural MP Regen", "FoodBuff") +
        formatNumber(
          baseNMPR *
            (getAvatarPotionFoodbuffStat("Natural MP Regen%", "FoodBuff") /
              100),
          "trunc"
        ),
      label: "Food Buff",
    },
  ];
  let NMPR = sources.reduce((sum, s) => sum + (s.value || 0), 0);
  let finalNMPRSource = [
    ...sources,
    {
      value:
        getShortRest().NMPR_Flat +
        formatNumber(NMPR * (getShortRest().NMPR_Percent / 100), "trunc"),
      label: "Short Rest",
    },
    {
      value: formatNumber(NMPR * (getHighCycle().NMPR_Percent / 100), "trunc"),
      label: "High Cycle",
    },
    {
      value: formatNumber(
        NMPR * (getQuickMotion().NMPR_Percent / 100),
        "trunc"
      ),
      label: "Quick Motion",
    },
  ];
  let finalNMPR = finalNMPRSource.reduce((sum, s) => sum + (s.value || 0), 0);
  setBreakdownText("NaturalMPRegen", finalNMPRSource);
  return finalNMPR;
}
function getGMPR() {
  let GMPR = getAMPR() * Math.min(2, 1 + getGuardPowerValue() / 100);
  return GMPR;
}
function getHiddenMATK() {
  let mainWeapon = mainWeaponSelect.value.toLowerCase();
  let mainWeaponRefineValue =
    (Number(weaponRefine?.value) || 0) + getDauntless().RefineBonus;
  let baseMainWeaponATKValue = Number(weaponATK.value) || 0;
  let bonusBaseWeaponATKFromEnergyControlAnnihilator =
    baseMainWeaponATKValue *
    (getEnergyControlAnnihilator().weaponATK_Percent / 100);
  let bonusBaseWeaponATKFromGust =
    baseMainWeaponATKValue * (getGust().bonusBaseWeaponATK / 100);
  let bonusBaseWeaponATK =
    bonusBaseWeaponATKFromEnergyControlAnnihilator + bonusBaseWeaponATKFromGust;
  let mainWeaponATKValue = baseMainWeaponATKValue + bonusBaseWeaponATK;
  let hiddenMATK = 0;
  if (mainWeapon !== "halberd") return hiddenMATK;

  let sources = [
    {
      value: baseMainWeaponATKValue,
      label: "Base Weapon ATK",
    },
    {
      value: getATKFromSub().weaponATK_Flat,
      label: "Sub Weapon ATK",
    },
    {
      value:
        getEquipmentStat("Weapon ATK") +
        formatNumber(
          mainWeaponATKValue * (getEquipmentStat("Weapon ATK%") / 100),
          "trunc"
        ),
      label: "+WeaponATK Equipment",
    },
    {
      value:
        getCrystaStat("Weapon ATK") +
        formatNumber(
          mainWeaponATKValue * (getCrystaStat("Weapon ATK%") / 100),
          "trunc"
        ),
      label: "+WeaponATK Crysta",
    },
    {
      value: formatNumber(
        mainWeaponATKValue *
          ((mainWeaponRefineValue * mainWeaponRefineValue) / 100) +
          mainWeaponRefineValue,
        "trunc"
      ),
      label: "Refinement",
    },
    {
      value: getUnarmedMastery().weaponATK_Flat,
      label: "Unarmed Mastery",
    },
    {
      value: formatNumber(
        mainWeaponATKValue * (getWeaponMastery().weaponATK_Percent / 100),
        "trunc"
      ),
      label: "Weapon ATK " + getWeaponMastery().masterySkill,
    },
    {
      value: getHunterBowgun().weaponATK_Flat,
      label: "Hunter Bowgun",
    },
    {
      value: bonusBaseWeaponATKFromEnergyControlAnnihilator,
      label: "Energy Control + Annihilator",
    },
    {
      value: bonusBaseWeaponATKFromGust,
      label: "Gust Base Weapon ATK",
    },
    {
      value: formatNumber(
        mainWeaponATKValue * (getTwoHanded().weaponATK_Percent / 100),
        "trunc"
      ),
      label: "Two-Handed",
    },
    {
      value: formatNumber(
        mainWeaponATKValue * (getBusterBlade().weaponATK_Percent / 100),
        "trunc"
      ),
      label: "Buster Blade",
    },
    {
      value: formatNumber(
        mainWeaponATKValue * (getBraveAura().weaponATK_Percent / 100),
        "trunc"
      ),
      label: "Brave Aura",
    },
    {
      value: formatNumber(
        mainWeaponATKValue * (getFlashBlast().weaponATK_Percent / 100),
        "trunc"
      ),
      label: "Flash Blast",
    },
    {
      value: Number(
        getAvatarPotionFoodbuffStat("Weapon ATK", "Avatar") +
          formatNumber(
            mainWeaponATKValue *
              (getAvatarPotionFoodbuffStat("Weapon ATK%", "FoodBuff") / 100)
          )
      ),
      label: "Avatar",
    },
    {
      value: Number(
        getAvatarPotionFoodbuffStat("Weapon ATK", "Potion") +
          formatNumber(
            mainWeaponATKValue *
              (getAvatarPotionFoodbuffStat("Weapon ATK%", "Potion") / 100)
          )
      ),
      label: "Consumable",
    },
    {
      value: Number(
        getAvatarPotionFoodbuffStat("Weapon ATK", "FoodBuff") +
          formatNumber(
            mainWeaponATKValue *
              (getAvatarPotionFoodbuffStat("Weapon ATK%", "FoodBuff") / 100)
          )
      ),
      label: "Food Buff",
    },
  ];
  let totalWeaponATK = sources.reduce((sum, s) => sum + (s.value || 0), 0);
  let totalMATK_Percent =
    getEquipmentStat("MATK%") +
    getCrystaStat("MATK%") +
    getWeaponMastery().MATK_Percent +
    getPrayer().MATK_Percent +
    getGuardian().MATK_Percent +
    getAvatarPotionFoodbuffStat("MATK%", "Avatar") +
    getAvatarPotionFoodbuffStat("MATK%", "FoodBuff") +
    getAvatarPotionFoodbuffStat("MATK%", "Potion");

  let totalMATK_Flat =
    getEquipmentStat("MATK") +
    getCrystaStat("MATK") +
    getMagicUP().MATK_Flat +
    getIncreasedEnergy().MATK_Flat +
    getChainCast().MATK_Flat +
    getRapidCharge().MATK_Flat +
    getEnhance().MATK_Flat +
    getSacredTeaching().MATK_Flat +
    getResonancePower().MATK_Flat +
    getAvatarPotionFoodbuffStat("MATK", "Avatar") +
    getAvatarPotionFoodbuffStat("MATK", "Potion") +
    getAvatarPotionFoodbuffStat("MATK", "FoodBuff");
  hiddenMATK =
    formatNumber(
      (CHARACTER_STAT.level +
        getTotalINT() * 2 +
        getTotalAGI() +
        getTotalDEX()) *
        (1 + totalMATK_Percent / 100),
      "trunc"
    ) +
    formatNumber(
      (totalWeaponATK * 0.625 + getTotalINT() * 2 - getTotalDEX()) *
        (1 + totalMATK_Percent / 100),
      "trunc"
    ) +
    formatNumber(totalMATK_Flat, "trunc");
  return hiddenMATK;
}
function getWizardMATK() {
  let mainWeapon = mainWeaponSelect.value.toLowerCase();
  let subWeaponType = subWeaponTypeSelect.value.toLowerCase();
  let isAllowed = ["staff", "magic device"].some((t) =>
    [mainWeapon, subWeaponType].includes(t)
  );
  let skillLevel = activeSkills.find(
    (skill) => skill.skillName === "Familia"
  ).skillLevel;
  let wizardMATK = 0;
  if (skillLevel > 0 && isAllowed) {
    wizardMATK =
      Math.floor(getTotalATKAndMATK().totalMATK * 0.75) +
      Math.floor(getTotalATKAndMATK().totalATKNoCastMastery * 0.25);
  }
  return { wizardMATK };
}
function getTotalDSATK() {
  let totalDSATK = 0;
  let mainWeapon = mainWeaponSelect.value.toLowerCase();
  let subWeaponType = subWeaponTypeSelect.value.toLowerCase();
  let skillLevel = passiveSkills.find(
    (skill) => skill.skillName === "Dual Sword Mastery"
  ).skillLevel;
  let isDS =
    mainWeapon === "one handed sword" && subWeaponType === "one handed sword";
  if (skillLevel > 0 && isDS) {
    totalDSATK = formatNumber(
      getTotalATKAndMATK().totalATK +
        getSubHandATK() * (getSubHandStability() / 100),
      "trunc"
    );
  }
  return { totalDSATK };
}
function getDualBringerValue() {
  let mainWeapon = mainWeaponSelect.value.toLowerCase();
  let subWeaponType = subWeaponTypeSelect.value.toLowerCase();
  let skillLevel = activeSkills.find(
    (skill) => skill.skillName === "Dual Bringer"
  ).skillLevel;
  let DualBringerATK = 0;
  let DualBringerMATK = 0;
  let MCR = 0;
  let MCD = 0;

  if (skillLevel > 0 && subWeaponType === "magic device") {
    if (CHARACTER_STAT.STR >= CHARACTER_STAT.INT) {
      MCR = 0.025 * skillLevel;
    } else {
      MCD = 0.025 * skillLevel;
    }
    DualBringerATK = getTotalATKAndMATK().totalATK;
    DualBringerMATK = getTotalATKAndMATK().totalMATK;
    if (DualBringerATK >= DualBringerMATK) {
      DualBringerMATK =
        DualBringerATK *
        ((100 +
          getEquipmentStat("MATK%", "Negative") +
          getCrystaStat("MATK%", "Negative") +
          getGuardian().MATK_Percent +
          getAvatarPotionFoodbuffStat("MATK%", "Avatar", "Negative") +
          getAvatarPotionFoodbuffStat("MATK%", "Potion", "Negative") +
          getAvatarPotionFoodbuffStat("MATK%", "FoodBuff", "Negative")) /
          100);
    } else if (DualBringerMATK > DualBringerATK) {
      DualBringerATK =
        DualBringerMATK *
        ((100 +
          getEquipmentStat("ATK%", "Negative") +
          getCrystaStat("ATK%", "Negative") +
          getGuardian().ATK_Percent +
          getMagicWarriorMastery().ATK_Percent +
          getAvatarPotionFoodbuffStat("MATK%", "Avatar", "Negative") +
          getAvatarPotionFoodbuffStat("MATK%", "Potion", "Negative") +
          getAvatarPotionFoodbuffStat("MATK%", "FoodBuff", "Negative")) /
          100);
    }
  }
  return { DualBringerATK, DualBringerMATK, MCR, MCD };
}
function getSpellBurst() {
  let skillLevel = passiveSkills.find(
    (skill) => skill.skillName === "Spell Burst"
  ).skillLevel;
  let MCR = 0.025 * skillLevel;
  let MCD = 0.025 * skillLevel;
  return { MCR, MCD };
}
//######################################### SKILL FUNCTION ##########################################
function getFamilia() {
  let skillLevel = activeSkills.find(
    (skill) => skill.skillName === "Familia"
  ).skillLevel;
  let mainWeapon = mainWeaponSelect.value.toLowerCase();
  let subWeaponType = subWeaponTypeSelect.value.toLowerCase();
  let Additional_Magic = 0;
  let MaxMP = 0;
  let MATK_Flat = 0;
  let isAllowed = ["staff", "magic device"].some((t) =>
    [mainWeapon, subWeaponType].includes(t)
  );

  if (skillLevel > 0 && isAllowed) {
    Additional_Magic = 5 * skillLevel;
    MaxMP = 100 + 10 * skillLevel;
    MATK_Flat = formatNumber(
      CHARACTER_STAT.level / (10 - skillLevel * 0.6),
      "down"
    );
  }
  return { Additional_Magic, MaxMP, MATK_Flat };
}
function getDualShield() {
  let skillLevel = activeSkills.find(
    (skill) => skill.skillName === "Dual Shield"
  ).skillLevel;
  let subWeaponType = subWeaponTypeSelect.value.toLowerCase();
  let subWeaponDEFValue = Number(subWeaponATKDEF.value) || 0;
  let subWeaponRefineValue = Number(subWeaponRefine.value) || 0;
  let ASPD_Percent = 0;
  let Accuracy_Flat = 0;
  if (subWeaponType === "shield" && skillLevel > 0) {
    ASPD_Percent = -(150 - 10 * skillLevel - 2 * subWeaponRefineValue);
    Accuracy_Flat = 10 * skillLevel + subWeaponDEFValue;
  }
  return { ASPD_Percent, Accuracy_Flat };
}
function getEarthshaker() {
  let skillLevel = activeSkills.find(
    (skill) => skill.skillName === "Earthshaker(ON)"
  ).skillLevel;
  let skillStack = activeSkills.find(
    (skill) => skill.skillName === "Earthshaker(ON)"
  ).stackNumber;
  let DTE = 0;
  let Stability = 0;
  let physicalPierce = 0;
  let PhysicalBarrier = 0;
  let MagicBarrier = 0;
  if (skillLevel > 0) {
    DTE = 2 * skillLevel + formatNumber(CHARACTER_STAT.level / 10, "trunc");
    Stability = skillLevel;
    physicalPierce = skillLevel * 2 + Math.max(0, skillLevel - 5);
    PhysicalBarrier =
      skillStack * 2 * skillLevel + CHARACTER_STAT.level * skillLevel;
    MagicBarrier =
      skillStack * 2 * skillLevel + CHARACTER_STAT.level * skillLevel;
  }
  return { DTE, Stability, physicalPierce, PhysicalBarrier, MagicBarrier };
}
function getAstute() {
  let mainWeapon = mainWeaponSelect.value.toLowerCase();
  let skillLevel = activeSkills.find(
    (skill) => skill.skillName === "Astute"
  ).skillLevel;
  let CriticalRate_Flat = 0;
  if (
    skillLevel > 0 &&
    ["one handed sword", "two handed sword"].includes(mainWeapon)
  ) {
    CriticalRate_Flat = 25;
    if (mainWeapon === "two handed sword") {
      CriticalRate_Flat *= 2;
    }
  }
  return { CriticalRate_Flat };
}
function getCrescentSaber() {
  let mainWeapon = mainWeaponSelect.value.toLowerCase();
  let subWeaponType = subWeaponTypeSelect.value.toLowerCase();
  let skillLevel = activeSkills.find(
    (skill) => skill.skillName === "Crescent Saber"
  ).skillLevel;
  let CriticalRate_Flat = 0;
  let AMPR_Flat = 0;
  if (
    skillLevel > 0 &&
    mainWeapon === "one handed sword" &&
    subWeaponType === "one handed sword"
  ) {
    CriticalRate_Flat = 10 * skillLevel;
    AMPR_Flat = 2 * skillLevel;
  }
  return { CriticalRate_Flat, AMPR_Flat };
}
function getSaberAura() {
  let mainWeapon = mainWeaponSelect.value.toLowerCase();
  let subWeaponType = subWeaponTypeSelect.value.toLowerCase();
  let skillLevel = activeSkills.find(
    (skill) => skill.skillName === "Saber Aura"
  ).skillLevel;
  let skillStack = activeSkills.find(
    (skill) => skill.skillName === "Saber Aura"
  ).stackNumber;

  if (skillStack < 0) skillStack = 0;
  if (skillStack > 20) skillStack = 20;
  let ASPD_Percent = 0;
  let Accuracy_Flat = 0;
  let AMPR_Flat = 0;

  if (
    skillLevel > 0 &&
    mainWeapon === "one handed sword" &&
    subWeaponType === "one handed sword"
  ) {
    ASPD_Percent = 10 * skillLevel * skillStack;
    Accuracy_Flat = 5 * skillLevel * skillStack;
    AMPR_Flat = Math.ceil(0.5 * skillLevel) * skillStack;
  }
  return { ASPD_Percent, Accuracy_Flat, AMPR_Flat, skillStack };
}
function getThorHammer() {
  let mainWeapon = mainWeaponSelect.value.toLowerCase();
  let skillLevel = activeSkills.find(
    (skill) => skill.skillName === "Thor's Hammer"
  ).skillLevel;
  let Additional_Magic = 0;
  let MagicPierce = 0;
  let Accuracy_Flat = 0;
  if (skillLevel > 0 && mainWeapon === "halberd") {
    Additional_Magic = 10 * skillLevel;
    MagicPierce = 2 * skillLevel;
    Accuracy_Flat = formatNumber(
      (CHARACTER_STAT.INT * skillLevel) / 10,
      "trunc"
    );
  }
  return { Additional_Magic, MagicPierce, Accuracy_Flat };
}
function getGust() {
  let mainWeapon = mainWeaponSelect.value.toLowerCase();
  let subWeaponType = subWeaponTypeSelect.value.toLowerCase();
  let skillLevel = activeSkills.find(
    (skill) => skill.skillName === "Gust (Dual Katana State)"
  ).skillLevel;
  let ATK_Percent = 0;
  let ATK_Flat = 0;
  let bonusBaseWeaponATK = 0;
  if (
    skillLevel > 0 &&
    (mainWeapon === "katana" || subWeaponType === "katana")
  ) {
    ATK_Percent = formatNumber(
      0.1 * skillLevel * (getUnsheatheAttack() - 100),
      "trunc"
    );
    ATK_Flat = formatNumber(
      0.1 * skillLevel * getFlatUnsheatheAttack(),
      "trunc"
    );
    bonusBaseWeaponATK = formatNumber(
      0.1 * skillLevel * (getUnsheatheAttack() - 100),
      "trunc"
    );
  }
  return { ATK_Percent, ATK_Flat, bonusBaseWeaponATK };
}
function getAuspiciousWind() {
  let mainWeapon = mainWeaponSelect.value.toLowerCase();
  let subWeaponType = subWeaponTypeSelect.value.toLowerCase();
  let skillLevel = passiveSkills.find(
    (skill) => skill.skillName === "Auspicious Wind"
  ).skillLevel;
  let skillStack = passiveSkills.find(
    (skill) => skill.skillName === "Auspicious Wind"
  ).stackNumber;
  let skillTreeLevel = skillStack[0];
  let skillStackValue = skillStack[1] > 3 ? 3 : skillStack[1];
  skillStackValue = skillStackValue < 1 ? 1 : skillStackValue;
  let Accuracy_Flat = 0;
  let ShortRangeDamage = 0;
  let CriticalDamage = 0;
  if (
    skillLevel > 0 &&
    (mainWeapon === "katana" || subWeaponType === "katana")
  ) {
    Accuracy_Flat = 10 * skillTreeLevel * skillStackValue;
    ShortRangeDamage = skillTreeLevel * skillStackValue;
    CriticalDamage = skillTreeLevel * skillStackValue;
  }
  return { Accuracy_Flat, ShortRangeDamage, CriticalDamage };
}
function getSafeRest() {
  let NHPR_Flat = 0;
  let NHPR_Percent = 0;
  let skillLevel = passiveSkills.find(
    (skill) => skill.skillName === "Safe Rest"
  ).skillLevel;
  if (skillLevel > 0) {
    NHPR_Flat = 10 * skillLevel;
    NHPR_Percent = 10 * skillLevel;
  }
  return { NHPR_Flat, NHPR_Percent };
}
function getShortRest() {
  let NMPR_Flat = 0;
  let NMPR_Percent = 0;
  let skillLevel = passiveSkills.find(
    (skill) => skill.skillName === "Short Rest"
  ).skillLevel;
  if (skillLevel > 0) {
    NMPR_Flat = skillLevel;
    NMPR_Percent = 5 * skillLevel;
  }
  return { NMPR_Flat, NMPR_Percent };
}
function getTwinStorm() {
  let mainWeapon = mainWeaponSelect.value.toLowerCase();
  let skillLevel = activeSkills.find(
    (skill) => skill.skillName === "Twin Storm"
  ).skillLevel;
  let skillStack = activeSkills.find(
    (skill) => skill.skillName === "Twin Storm"
  ).stackNumber;
  let Stability = 0;
  let DoubleAMPR = false;
  let ASPD_Flat = 0;
  if (mainWeapon === "bowgun" && skillLevel > 0) {
    if (skillStack < 0) skillStack = 0;
    if (skillStack > 99) skillStack = 99;
    ASPD_Flat = 100 * skillLevel;
    DoubleAMPR = true;
    Stability = -Math.max(0, Math.floor((skillStack - 31) / 10)) * 10;
  }
  return { ASPD_Flat, Stability, DoubleAMPR, skillStack };
}

function getHiddenTalent() {
  let mainWeapon = mainWeaponSelect.value.toLowerCase();
  let skillLevel = passiveSkills.find(
    (skill) => skill.skillName === "Hidden Talent"
  ).skillLevel;
  let baseGuardPower = 0;
  let baseGuardRecharge = 0;
  let baseEvasionRecharge = 0;
  if (skillLevel > 0 && mainWeapon === "barehand") {
    baseGuardPower = 500 * skillLevel;
    baseGuardRecharge = 5 + 2 * skillLevel;
    baseEvasionRecharge = 0.1 * skillLevel;
  }
  return { baseGuardPower, baseGuardRecharge, baseEvasionRecharge };
}

function getPrayer() {
  let subWeaponType = subWeaponTypeSelect.value.toLowerCase();
  let mainWeapon = mainWeaponSelect.value.toLowerCase();
  let skillLevel = activeSkills.find(
    (skill) => skill.skillName === "Prayer"
  ).skillLevel;
  let MATK_Percent = 0;
  if (skillLevel > 0) {
    MATK_Percent = skillLevel;
    if (mainWeapon === "magic device" || subWeaponType === "magic device")
      MATK_Percent += 5;
  }
  return { MATK_Percent };
}
function getConversion() {
  let mainWeapon = mainWeaponSelect.value.toLowerCase();
  let skillLevel = passiveSkills.find(
    (skill) => skill.skillName === "Conversion"
  ).skillLevel;
  let baseMATK_Percent = 0;
  let baseMATKFromINT = 0;
  if (
    skillLevel > 0 &&
    ["one handed sword", "two handed sword", "bowgun", "knuckles"].includes(
      mainWeapon
    )
  ) {
    if (
      ["one handed sword", "two handed sword", "bowgun"].includes(mainWeapon)
    ) {
      baseMATKFromINT = 0.1 * skillLevel * getTotalINT();
    }
    baseMATK_Percent = skillLevel * skillLevel;
    if (mainWeapon === "knuckles") {
      baseMATK_Percent = formatNumber(baseMATK_Percent / 2, "trunc");
    }
  }
  return { baseMATK_Percent, baseMATKFromINT };
}
function getResonancePower() {
  let subWeaponType = subWeaponTypeSelect.value.toLowerCase();
  let subWeaponRefineValue = Number(subWeaponRefine.value) || 0;
  let skillLevel = activeSkills.find(
    (skill) => skill.skillName === "Resonance (Power Regislet)"
  ).skillLevel;
  let ATK_Flat = 0;
  let MATK_Flat = 0;
  if (skillLevel > 0 && subWeaponType === "magic device") {
    ATK_Flat = formatNumber(
      (skillLevel * 2 + subWeaponRefineValue * 2) / 2,
      "trunc"
    );
    MATK_Flat = ATK_Flat;
  }
  return { ATK_Flat, MATK_Flat };
}
function getSacredTeaching() {
  let skillLevel = activeSkills.find(
    (skill) => skill.skillName === "Sacred Teaching"
  ).skillLevel;
  let skillStack = activeSkills.find(
    (skill) => skill.skillName === "Sacred Teaching"
  ).stackNumber;
  let ATK_Flat = 0;
  let MATK_Flat = 0;
  if (skillLevel > 0) {
    if (skillStack > 100) skillStack = 100;
    if (skillStack < 0) skillLevel = 0;
    ATK_Flat = 20 * skillLevel * (skillStack / 100);
    MATK_Flat = 20 * skillLevel * (skillStack / 100);
  }
  return { ATK_Flat, MATK_Flat };
}
function getEnhance() {
  let skillLevel = activeSkills.find(
    (activeSkills) => activeSkills.skillName === "Enhance"
  ).skillLevel;
  let ATK_Flat = 0;
  let MATK_Flat = 0;
  let damageBoost = 0;
  if (skillLevel > 0) {
    damageBoost = skillLevel;
    ATK_Flat = (skillLevel * getDEF()) / 20;
    MATK_Flat = (skillLevel * getMDEF()) / 20;
    if (ATK_Flat > CHARACTER_STAT.level) {
      ATK_Flat = CHARACTER_STAT.level;
    }
    if (MATK_Flat > CHARACTER_STAT.level) {
      MATK_Flat = CHARACTER_STAT.level;
    }
  }

  return { ATK_Flat, MATK_Flat, damageBoost };
}
function getMagicUP() {
  let MATK_Flat = 0;
  let skillLevel = passiveSkills.find(
    (skill) => skill.skillName === "Magic UP"
  ).skillLevel;
  MATK_Flat = formatNumber(
    CHARACTER_STAT.level * (0.025 * skillLevel),
    "trunc"
  );
  return { MATK_Flat };
}
function getIncreasedEnergy() {
  let MATK_Flat = 0;
  let skillLevel = passiveSkills.find(
    (skill) => skill.skillName === "Increased Energy"
  ).skillLevel;
  MATK_Flat = formatNumber(
    CHARACTER_STAT.level * (0.025 * skillLevel),
    "trunc"
  );
  return { MATK_Flat };
}
function getAttackUP() {
  let ATK_Flat = 0;
  let skillLevel = passiveSkills.find(
    (skill) => skill.skillName === "Attack UP"
  ).skillLevel;
  ATK_Flat = formatNumber(CHARACTER_STAT.level * (0.025 * skillLevel), "trunc");
  return { ATK_Flat };
}
function getIntimidatingPower() {
  let { ATK_Flat } = 0;
  let skillLevel = passiveSkills.find(
    (skill) => skill.skillName === "Intimidating Power"
  ).skillLevel;
  ATK_Flat = formatNumber(CHARACTER_STAT.level * (0.025 * skillLevel), "trunc");
  return { ATK_Flat };
}

function getWarCry() {
  let ATK_Percent = 0;
  let skillLevel = activeSkills.find(
    (activeSkills) => activeSkills.skillName === "War Cry"
  ).skillLevel;
  ATK_Percent = skillLevel;
  if (mainWeapon === "two handed sword" && skillLevel > 0) {
    ATK_Percent += 5;
  }
  return { ATK_Percent };
}
function getUnarmedMastery() {
  let mainWeapon = mainWeaponSelect.value.toLowerCase();
  let subWeaponType = subWeaponTypeSelect.value.toLowerCase();
  let weaponATK_Flat = 0;
  let skillLevel = passiveSkills.find(
    (skill) => skill.skillName === "Unarmed Mastery"
  ).skillLevel;
  if (
    ((mainWeapon === "barehand" || mainWeapon === "none") &&
      subWeaponType === "none") ||
    skillLevel > 0
  ) {
    weaponATK_Flat = formatNumber(
      CHARACTER_STAT.level * (skillLevel / 10),
      "trunc"
    );
  }
  return { weaponATK_Flat };
}
function getBusterBlade() {
  let mainWeapon = mainWeaponSelect.value.toLowerCase();
  let subWeaponType = subWeaponTypeSelect.value.toLowerCase();
  let subWeaponRefineValue = Number(subWeaponRefine.value) || 0;
  let skillLevel = activeSkills.find(
    (activeSkills) => activeSkills.skillName === "Buster Blade"
  ).skillLevel;
  let weaponATK_Percent = 0;
  if (
    skillLevel > 0 &&
    ["one handed sword", "two handed sword"].includes(mainWeapon)
  ) {
    if (
      mainWeapon === "one handed sword" ||
      mainWeapon === "two handed sword"
    ) {
      weaponATK_Percent = skillLevel;
    }
    if (mainWeapon === "one handed sword" && subWeaponType === "shield") {
      weaponATK_Percent += subWeaponRefineValue;
    }
  }
  return { weaponATK_Percent };
}
function getMagicWarriorMastery() {
  let subWeaponType = subWeaponTypeSelect.value.toLowerCase();
  let ATK_Percent = 0;
  let MATK_Percent = 0;
  let CSPD_Flat = 0;
  let CSPD_Percent = 0;
  if (subWeaponType === "magic device") {
    let skillLevel = passiveSkills.find(
      (skill) => skill.skillName === "Magic Warrior Mastery"
    ).skillLevel;
    ATK_Percent = 15 - 1 * skillLevel;
    if (mainWeapon === "one handed sword" && skillLevel > 0) ATK_Percent -= 5;
    MATK_Percent = skillLevel * 2 + Math.max([skillLevel - 5, 0]);
    CSPD_Flat = skillLevel * 10;
    CSPD_Percent = skillLevel * 1 + Math.max([skillLevel - 5, 0]);
  }
  return { ATK_Percent, MATK_Percent, CSPD_Flat, CSPD_Percent };
}
function getHunterBowgun() {
  let mainWeapon = mainWeaponSelect.value.toLowerCase();
  let mainWeaponATKValue = Number(weaponATK?.value) || 0;
  let subWeaponType = subWeaponTypeSelect.value.toLowerCase();
  let weaponATK_Flat = 0;
  let skillLevel = passiveSkills.find(
    (skill) => skill.skillName === "Hunter Bowgun"
  ).skillLevel;
  if (
    mainWeapon === "bowgun" &&
    subWeaponType &&
    subWeaponType != "arrow" &&
    skillLevel > 0
  ) {
    weaponATK_Flat =
      mainWeaponATKValue * ((Math.floor(skillLevel * 1.5) * 5) / 3 / 100);
  }
  weaponATK_Flat = formatNumber(weaponATK_Flat, "trunc");
  return { weaponATK_Flat };
}
function getChainCast() {
  let mainWeapon = mainWeaponSelect.value.toLowerCase();
  let skillLevel = activeSkills.find(
    (activeSkills) => activeSkills.skillName === "Chain Cast"
  ).skillLevel;
  let skillStack = activeSkills.find(
    (activeSkills) => activeSkills.skillName === "Chain Cast"
  ).stackNumber;
  let MATK_Flat = 0;
  let MagicStability = 0;
  if (skillLevel > 0) {
    MagicStability = skillLevel * 0.1 * skillStack;
    MATK_Flat = skillLevel * skillStack;
    if (mainWeapon === "staff") {
      MagicStability = MagicStability * 2;
    } else if (mainWeapon === "magic device") {
      MATK_Flat = MATK_Flat * 2;
    }
  }
  return { MATK_Flat, MagicStability };
}
function getEnergyControl() {
  let mainWeapon = mainWeaponSelect.value.toLowerCase();
  let subWeaponType = subWeaponTypeSelect.value.toLowerCase();
  let Stability = 0;
  let WeaponATK_Percent = 0;
  let skillLevel = activeSkills.find(
    (skill) => skill.skillName === "Energy Control"
  ).skillLevel;
  if (mainWeapon === "knuckles" && skillLevel > 0) {
    WeaponATK_Percent = 5 * skillLevel;
  }
  if (
    skillLevel > 0 &&
    (mainWeapon === "knuckles" || subWeaponType === "knuckles")
  ) {
    Stability = 10;
  }
  return { WeaponATK_Percent, Stability };
}
function getAnnihilator() {
  let mainWeapon = mainWeaponSelect.value.toLowerCase();
  let subWeaponType = subWeaponTypeSelect.value.toLowerCase();
  let Stability = 0;
  let WeaponATK_Percent = 0;
  let FTSUnavailable = 0;
  let skillLevel = activeSkills.find(
    (skill) => skill.skillName === "Annihilator"
  ).skillLevel;
  if (mainWeapon === "knuckles" && skillLevel > 0) {
    WeaponATK_Percent = 5 * skillLevel;
  }
  if (
    skillLevel > 0 &&
    (mainWeapon === "knuckles" || subWeaponType === "knuckles")
  ) {
    Stability = -10;
    FTSUnavailable = 1;
  }
  return { WeaponATK_Percent, Stability, FTSUnavailable };
}
function getEnergyControlAnnihilator() {
  let EnergyControl = getEnergyControl();
  let Annihilator = getAnnihilator();
  let weaponATK_Percent =
    EnergyControl.WeaponATK_Percent + Annihilator.WeaponATK_Percent;
  if (weaponATK_Percent > 50) weaponATK_Percent = 50;
  let Stability = EnergyControl.Stability + Annihilator.Stability;
  return { weaponATK_Percent, Stability };
}
function getParalysisShot() {
  let mainWeapon = mainWeaponSelect.value.toLowerCase();
  let subWeaponType = subWeaponTypeSelect.value.toLowerCase();
  let skillLevel = activeSkills.find(
    (activeSkills) => activeSkills.skillName === "Paralysis Shot"
  ).skillLevel;
  let Stability = 0;
  if (["bow", "bowgun"].includes(mainWeapon) || subWeaponType === "arrow") {
    Stability = skillLevel;
  }
  return { Stability };
}
function getSamuraiArchery() {
  let mainWeapon = mainWeaponSelect.value.toLowerCase();
  let mainWeaponATKValue = Number(weaponATK.value) || 0;
  let mainWeaponStabilityValue = Number(weaponStability.value) || 0;

  let subWeaponType = subWeaponTypeSelect.value.toLowerCase();
  let subWeaponATKValue = Number(subWeaponATKDEF.value) || 0;
  let subWeaponStabilityValue = Number(subWeaponStability.value) || 0;

  let skillLevel = passiveSkills.find(
    (skill) => skill.skillName === "Samurai Archery"
  ).skillLevel;
  let ATK_Flat = 0;
  let Stability = 0;

  if (skillLevel > 0 && mainWeapon === "bow" && subWeaponType === "katana") {
    Stability = formatNumber(subWeaponStabilityValue / 4, "trunc");
    ATK_Flat = subWeaponATKValue * 0.1 * skillLevel;
    let MaxATKGain =
      mainWeaponATKValue * (mainWeaponStabilityValue / 100) * 0.1 * skillLevel;
    if (ATK_Flat > MaxATKGain) ATK_Flat = MaxATKGain;
  }
  return { ATK_Flat, Stability };
}
function getFlashBlast() {
  let mainWeapon = mainWeaponSelect.value.toLowerCase();
  let subWeaponType = subWeaponTypeSelect.value.toLowerCase();
  let skillLevel = activeSkills.find(
    (activeSkills) => activeSkills.skillName === "Flash Blast"
  ).skillLevel;
  let UnsheatheAttack_Percent = 0;
  let weaponATK_Percent = 0;
  if (skillLevel > 0) {
    UnsheatheAttack_Percent = skillLevel;
    if (
      mainWeapon === "one handed sword" &&
      subWeaponType === "one handed sword"
    ) {
      weaponATK_Percent = 25;
    }
  }
  return { UnsheatheAttack_Percent, weaponATK_Percent };
}

function getCastMastery() {
  let mainWeapon = mainWeaponSelect.value.toLowerCase();
  let CSPD_Flat = 0;
  let CSPD_Percent = 0;
  let ATK_Percent = 0;
  let skillLevel = passiveSkills.find(
    (skill) => skill.skillName === "Cast Mastery"
  ).skillLevel;
  let skillStack = passiveSkills.find(
    (skill) => skill.skillName === "Cast Mastery"
  ).stackNumber;
  let skillAmount = skillStack[0];
  let spAmount = skillStack[1];

  if (skillLevel > 0 && ["staff", "magic device"].includes(mainWeapon)) {
    CSPD_Percent =
      Math.floor(skillLevel * 1.5) +
      (skillAmount - 1) * Math.floor(skillLevel / 2);
    CSPD_Flat = skillLevel * spAmount;
    ATK_Percent = -Math.ceil(50 - 2.5 * skillLevel);
  }

  return { CSPD_Flat, CSPD_Percent, ATK_Percent };
}
function getOverlimit() {
  let mainWeapon = mainWeaponSelect.value.toLowerCase();
  let skillLevel = activeSkills.find(
    (skill) => skill.skillName === "Overlimit"
  ).skillLevel;
  let CSPD_Flat = 0;
  let DamageToElement = 0;
  if (skillLevel > 0 && ["staff", "magic device"].includes(mainWeapon)) {
    CSPD_Flat = -1000 + getSorceryGuide().CSPD_Flat;
    DamageToElement = 10 + skillLevel;
  }
  return { CSPD_Flat, DamageToElement };
}
function getSorceryGuide() {
  let mainWeapon = mainWeaponSelect.value.toLowerCase();
  let skillLevel = activeSkills.find(
    (skill) => skill.skillName === "Sorcery Guide"
  ).skillLevel;
  let CSPD_Flat = 0;
  if (skillLevel > 0 && ["staff", "magic device"].includes(mainWeapon)) {
    CSPD_Flat = 50 * skillLevel;
  }
  return { CSPD_Flat };
}
function getBraveAura() {
  let weaponATK_Percent = 0;
  let Accuracy_Percent = 0;
  let damageBoost = 0;
  let skillLevel = activeSkills.find(
    (skill) => skill.skillName === "Brave Aura"
  ).skillLevel;
  if (skillLevel > 0) {
    weaponATK_Percent = 10 + 2 * skillLevel;
    Accuracy_Percent = -(75 - skillLevel * 2.5);
    damageBoost = skillLevel * 2;
  }
  return { weaponATK_Percent, Accuracy_Percent, damageBoost };
}
function getStrongChaseAttack() {
  let mainWeapon = mainWeaponSelect.value.toLowerCase();
  let subWeaponType = subWeaponTypeSelect.value.toLowerCase();

  let skillLevel = passiveSkills.find(
    (skill) => skill.skillName === "Strong Chase Attack"
  ).skillLevel;
  let Accurary_Percent = 0;

  if (skillLevel > 0) {
    if (
      ["knuckles", "barehand"].includes(mainWeapon) ||
      ["knuckles"].includes(subWeaponType)
    ) {
      Accurary_Percent = skillLevel * 1;
      if (mainWeapon === "knuckles") {
        Accurary_Percent = Accurary_Percent * 2;
      }
    }
  }
  return { Accurary_Percent };
}
function getSmokeDust() {
  let mainWeapon = mainWeaponSelect.value.toLowerCase();
  let subWeaponType = subWeaponTypeSelect.value.toLowerCase();
  let skillLevel = activeSkills.find(
    (activeSkills) => activeSkills.skillName === "Smoke Dust"
  ).skillLevel;
  let Accuracy_Flat = 0;
  if (skillLevel > 0) {
    if (["bow", "bowgun"].includes(mainWeapon) || subWeaponType === "arrow") {
      Accuracy_Flat = formatNumber(
        (skillLevel * skillLevel) / 2 + 5 * skillLevel,
        "trunc"
      );
    }
  }
  return { Accuracy_Flat };
}
function getAccuracyUP() {
  let Accuracy_Flat = 0;
  let skillLevel = passiveSkills.find(
    (skill) => skill.skillName === "Accuracy UP"
  ).skillLevel;
  Accuracy_Flat = skillLevel;
  return { Accuracy_Flat };
}
function getRapidCharge(currentMagicPierce) {
  let mainWeapon = mainWeaponSelect.value.toLowerCase();
  let skillLevel = activeSkills.find(
    (activeSkills) => activeSkills.skillName === "Rapid Charge"
  ).skillLevel;
  let MATK_Flat = 0;
  let magicPierce = 0;
  if (skillLevel > 0) {
    if (mainWeapon === "staff") {
      MPRecover = Math.min(1500, getMaxMP());
      MATK_Flat =
        MPRecover / 10 +
        Math.max(
          0,
          Math.min((currentMagicPierce - 20) * 5, 150) - (1500 - MPRecover) / 10
        );
      magicPierce = Math.max(
        0,
        MPRecover / 50 - Math.max(0, currentMagicPierce - 20)
      );
    } else if (mainWeapon === "magic device") {
      MPRecover = Math.min(1700, getMaxMP());
      MATK_Flat =
        MPRecover / 10 +
        Math.max(
          0,
          Math.min((currentMagicPierce - 16) * 5, 170) - (MPRecover - 1700) / 10
        );
      magicPierce = Math.max(
        0,
        MPRecover / 50 - Math.max(0, currentMagicPierce - 16)
      );
    }
  }
  return { MATK_Flat, magicPierce };
}
function getMagicLaser() {
  let mainWeapon = mainWeaponSelect.value.toLowerCase();
  let skillLevel = activeSkills.find(
    (skill) => skill.skillName === "Magic: Laser"
  ).skillLevel;
  let magicPierce = 0;
  if (
    skillLevel > 0 &&
    ["one handed sword", "staff", "magic device"].includes(mainWeapon)
  ) {
    magicPierce = 10;
    if (mainWeapon === "staff") magicPierce = 15;
  }
  return { magicPierce };
}
function getSicarius() {
  let subWeaponType = subWeaponTypeSelect.value.toLowerCase();
  let skillLevel = activeSkills.find(
    (skill) => skill.skillName === "Sicarius"
  ).skillLevel;
  let ATK_Flat = 0;
  let physicalPierce = 0;
  if (skillLevel > 0) {
    ATK_Flat = 5 * skillLevel;
    physicalPierce = skillLevel;
    if (["dagger", "ninjutsu scroll"].includes(subWeaponType)) {
      ATK_Flat = ATK_Flat * 2;
      physicalPierce = physicalPierce + 15;
    }
  }
  return { ATK_Flat, physicalPierce };
}
function getDauntless() {
  let mainWeapon = mainWeaponSelect.value.toLowerCase();
  let skillLevel = activeSkills.find(
    (skill) => skill.skillName === "Dauntless"
  ).skillLevel;
  let skillStack = activeSkills.find(
    (skill) => skill.skillName === "Dauntless"
  ).stackNumber;
  let Accuracy_Flat = 0;
  let weaponATK_Flat = 0;
  let UnsheatheAttack_Percent = 0;
  let motionSpeed = 0;
  let RefineBonus = 0;
  if (skillLevel > 0 && mainWeapon === "katana") {
    if (stacks >= 10) Accuracy_Flat = (skillStack / 10) * 10;
    if (stacks >= 20) weaponATK_Flat += (skillStack / 10) * 5;
    if (stacks >= 30) UnsheatheAttack_Percent += skillStack / 10;
    if (stacks >= 40) motionSpeed += 12.5;
    if (stacks >= 60) weaponATK_Flat += (skillStack / 10) * 5;
    if (stacks >= 70) UnsheatheAttack_Percent += skillStack / 10;
    if (stacks >= 80) motionSpeed += 12.5;
    if (stacks >= 100) RefineBonus = 1;
  }
  return {
    Accuracy_Flat,
    weaponATK_Flat,
    UnsheatheAttack_Percent,
    motionSpeed,
    RefineBonus,
  };
}
function getRush() {
  let mainWeapon = mainWeaponSelect.value.toLowerCase();
  let subWeaponType = subWeaponTypeSelect.value.toLowerCase();
  let skillLevel = activeSkills.find(
    (activeSkills) => activeSkills.skillName === "Rush"
  ).skillLevel;
  let motionSpeed = 0;
  if (skillLevel >= 1 && skillLevel <= 3) {
    motionSpeed = 2;
  } else if (skillLevel >= 4 && skillLevel <= 6) {
    motionSpeed = 3;
  } else if (skillLevel >= 7 && skillLevel <= 9) {
    motionSpeed = 4;
  } else if (skillLevel >= 10) {
    motionSpeed = 5;
  }
  if (mainWeapon === "knuckles" || subWeaponType === "knuckles") {
    motionSpeed = motionSpeed * 2;
  }
  return { motionSpeed };
}
function getResonanceSpeed() {
  let subWeaponRefineValue = Number(subWeaponRefine.value) || 0;
  let subWeaponType = subWeaponTypeSelect.value.toLowerCase();
  let skillLevel = activeSkills.find(
    (skill) => skill.skillName === "Resonance (Speed Regislet)"
  ).skillLevel;
  let ASPD_Flat = 0;
  let CSPD_Flat = 0;
  if (skillLevel > 0 && subWeaponType === "magic device") {
    ASPD_Flat = formatNumber(
      (skillLevel * 25 + subWeaponRefineValue * 50) / 2,
      "trunc"
    );
    CSPD_Flat = formatNumber(
      (skillLevel * 25 + subWeaponRefineValue * 50) / 2,
      "trunc"
    );
  }
  return { ASPD_Flat, CSPD_Flat };
}
function getFareth() {
  let subWeaponType = subWeaponTypeSelect.value.toLowerCase();
  let skillLevel = activeSkills.find(
    (skill) => skill.skillName === "Fareth"
  ).skillLevel;
  let skillStack = activeSkills.find(
    (skill) => skill.skillName === "Fareth"
  ).stackNumber;
  let fractionalDamageReduction = 0;
  let ASPD_Flat = 0;
  let physicalPierce = 0;
  if (skillLevel > 0 && subWeaponType === "shield") {
    fractionalDamageReduction = (skillLevel / 2.5) * skillStack;
    ASPD_Flat = formatNumber(
      ((getTotalVIT() * skillLevel) / 10) * skillStack,
      "trunc"
    );
    physicalPierce = Math.floor(getTotalVIT() / 100) * skillStack;
  }
  return { fractionalDamageReduction, ASPD_Flat, physicalPierce };
}
function getGodspeed() {
  let mainWeapon = mainWeaponSelect.value.toLowerCase();
  let subWeaponType = subWeaponTypeSelect.value.toLowerCase();
  let skillLevel = passiveSkills.find(
    (skill) => skill.skillName === "Godspeed"
  ).skillLevel;
  let AGI_Flat = 0;
  let AGI_List = [1, 2, 3, 4, 5, 7, 9, 11, 13, 15];
  let UnsheatheAttack_Percent = 0;
  let isDualSword =
    mainWeapon === "one handed sword" && subWeaponType === "one handed sword";
  if (skillLevel > 0) {
    AGI_Flat = AGI_List[skillLevel - 1] || 0;
    UnsheatheAttack_Percent = 5 + skillLevel;
    if (isDualSword) UnsheatheAttack_Percent += 10;
  }
  return { AGI_Flat, UnsheatheAttack_Percent };
}
function getQuickAura() {
  let skillLevel = activeSkills.find(
    (activeSkills) => activeSkills.skillName === "Quick Aura"
  ).skillLevel;
  let ASPD_Flat = 0;
  let ASPD_Percent = 0;
  ASPD_Percent = 2.5 * skillLevel;
  ASPD_Flat = 50 * skillLevel;
  return { ASPD_Percent, ASPD_Flat };
}
function getDualSwordControl() {
  let mainWeapon = mainWeaponSelect.value.toLowerCase();
  let subWeaponType = subWeaponTypeSelect.value.toLowerCase();
  let ASPD_Flat = 0;
  let Accuracy_Percent = 0;
  let CriticalRate_Percent = 0;
  let skillLevel = passiveSkills.find(
    (skill) => skill.skillName === "Dual Sword Control"
  ).skillLevel;
  if (skillLevel > 0) {
    if (
      mainWeapon === "one handed sword" &&
      subWeaponType === "one handed sword"
    ) {
      Accuracy_Percent = 5 + 3 * skillLevel;
      CriticalRate_Percent = 5 + 3 * skillLevel;
      ASPD_Flat = 50 * skillLevel;
    }
  }
  return { ASPD_Flat, Accuracy_Percent, CriticalRate_Percent };
}
function getShieldMastery() {
  let subWeaponType = subWeaponTypeSelect.value.toLowerCase();
  let ASPD_Percent = 0;
  let skillLevel = passiveSkills.find(
    (skill) => skill.skillName === "Shield Mastery"
  ).skillLevel;
  if (subWeaponType === "shield") {
    ASPD_Percent = -50 + 5 * skillLevel;
  }
  return { ASPD_Percent };
}
function getMartialDiscipline() {
  let mainWeapon = mainWeaponSelect.value.toLowerCase();
  let subWeaponType = subWeaponTypeSelect.value.toLowerCase();
  let damageBoost = 0;
  let ASPD_Flat = 0;
  let ASPD_Percent = 0;
  let skillLevel = passiveSkills.find(
    (skill) => skill.skillName === "Martial Discipline"
  ).skillLevel;
  if (skillLevel > 0) {
    if (mainWeapon === "knuckles" || subWeaponType === "knuckles") {
      damageBoost = skillLevel;
      if (mainWeapon === "knuckles") {
        ASPD_Percent = skillLevel;
        ASPD_Flat = 10 * skillLevel;
      }
    }
  }
  return { ASPD_Percent, ASPD_Flat, damageBoost };
}
function getQuickSlash() {
  let mainWeapon = mainWeaponSelect.value.toLowerCase();
  let ASPD_Percent = 0;
  let ASPD_Flat = 0;
  let skillLevel = passiveSkills.find(
    (skill) => skill.skillName === "Quick Slash"
  ).skillLevel;
  if (skillLevel > 0) {
    if (["one handed sword", "two handed sword"].includes(mainWeapon)) {
      ASPD_Percent = skillLevel;
      ASPD_Flat = 10 * skillLevel;
    }
  }
  return { ASPD_Percent, ASPD_Flat };
}
function getKnightStance() {
  let mainWeapon = mainWeaponSelect.value.toLowerCase();
  let subWeaponType = subWeaponTypeSelect.value.toLowerCase();
  let VIT_Flat = 0;
  let Aggro = 0;
  let FractionalReduction = 0;
  let skillLevel = activeSkills.find(
    (activeSkills) => activeSkills.skillName === "Knight's Stance"
  ).skillLevel;
  if (mainWeapon === "one handed sword") {
    VIT_Flat = 1 * skillLevel;
    Aggro = 2 * skillLevel;
    FractionalReduction = Math.floor(0.5 * skillLevel);

    if (subWeaponType === "shield") {
      FractionalReduction *= 2;
      Aggro = Aggro + skillLevel;
    }
  }
  return { VIT_Flat, Aggro, FractionalReduction };
}
function getGuardian() {
  let subWeaponType = subWeaponTypeSelect.value.toLowerCase();
  let subRefine = Number(subWeaponRefine.value) || 0;
  let skillLevelSelf = activeSkills.find(
    (skill) => skill.skillName === "Guardian(Self)"
  ).skillLevel;
  let skillStackSelf = activeSkills.find(
    (skill) => skill.skillName === "Guardian(Self)"
  ).stackNumber;
  let skillLevelParty = activeSkills.find(
    (skill) => skill.skillName === "Guardian(Party)"
  ).skillLevel;

  let AggroMultiplier = 0;
  let ATK_Percent = 0;
  let MATK_Percent = 0;
  let AMPR_Flat = 0;
  let guardRecharge = 0;
  let DamageReduction = 0;
  if (skillLevelSelf > 0 && subWeaponType === "shield") {
    AggroMultiplier +=
      (40 + 2 * skillLevelSelf + 2 * subRefine) * skillStackSelf;
    ATK_Percent = -(20 - skillLevelSelf * 1.5) * skillStackSelf;
    MATK_Percent = -(30 - skillLevelSelf * 2) * skillStackSelf;
    AMPR_Flat += (5 + 1 * skillLevelSelf) * skillStackSelf;
    guardRecharge += 15 + subRefine;
  }
  if (skillLevelParty > 0) {
    DamageReduction = 20 + 1.5 * skillLevelParty + subRefine;
    AggroMultiplier += -(40 + 2 * skillLevelParty + 2 * subRefine);
    AMPR_Flat += 5 + 1 * skillLevelParty;
  }
  return {
    AggroMultiplier,
    ATK_Percent,
    MATK_Percent,
    AMPR_Flat,
    guardRecharge,
    DamageReduction,
  };
}
function getAsuraAura() {
  let mainWeapon = mainWeaponSelect.value.toLowerCase();
  let subWeaponType = subWeaponTypeSelect.value.toLowerCase();
  let skillLevel = activeSkills.find(
    (skill) => skill.skillName === "Asura Aura"
  ).skillLevel;

  let CriticalRate_Flat = 0;
  let AilmentResistance = 0;
  let DamageReduction = 0;
  if (
    skillLevel > 0 &&
    (mainWeapon === "knuckles" || subWeaponType === "knuckles")
  ) {
    CriticalRate_Flat = 7.5 * skillLevel;
    if (subWeaponType === "knuckles")
      CriticalRate_Flat = formatNumber(CriticalRate_Flat / 3, "trunc");
    AilmentResistance = Math.min(formatNumber(getMaxMP() / 10, "trunc"), 100);
    DamageReduction = Math.min(
      formatNumber(Math.min(getMaxMP(), 2000) * 0.04, "trunc"),
      75
    );
  }
  return { CriticalRate_Flat, AilmentResistance, DamageReduction };
}
function getProtection() {
  let skillLevel = activeSkills.find(
    (skill) => skill.skillName === "Protection"
  ).skillLevel;

  let physicalResistance = 0;
  let magicResistance = 0;
  if (skillLevel > 0) {
    physicalResistance = 10 + Math.ceil(skillLevel / 3) * 5;
    magicResistance = Math.ceil(skillLevel / 3) * 5 - 35;
  }
  return { physicalResistance, magicResistance };
}
function getAegis() {
  let skillLevel = activeSkills.find(
    (skill) => skill.skillName === "Aegis"
  ).skillLevel;
  let physicalResistance = 0;
  let magicResistance = 0;
  if (skillLevel > 0) {
    physicalResistance = Math.ceil(skillLevel / 3) * 5 - 35;
    magicResistance = 10 + Math.ceil(skillLevel / 3) * 5;
  }
  return { physicalResistance, magicResistance };
}
function getLightArmorMastery() {
  let evasionRecharge = 0;
  let armorType = armorTypeSelect.value.toLowerCase();
  let skillLevel = passiveSkills.find(
    (skill) => skill.skillName === "Light Armor Mastery"
  ).skillLevel;

  if (armorType === "light") {
    evasionRecharge = 1 * skillLevel;
  }
  return { evasionRecharge };
}
function getAdvancedEvasion() {
  let evasionRecharge = 0;
  let armorType = armorTypeSelect.value.toLowerCase();
  let skillLevel = passiveSkills.find(
    (skill) => skill.skillName === "Advanced Evasion"
  ).skillLevel;

  if (armorType === "light") {
    evasionRecharge = 1 * skillLevel;
  }
  return { evasionRecharge };
}
function getHeavyArmorMastery() {
  let guardRecharge = 0;
  let skillLevel = passiveSkills.find(
    (skill) => skill.skillName === "Heavy Armor Mastery"
  ).skillLevel;

  if (armorTypeSelect.value.toLowerCase() === "heavy" && skillLevel > 0) {
    guardRecharge = 1 * skillLevel;
  }
  return { guardRecharge };
}

function getAdvancedGuard() {
  let guardRecharge = 0;
  let guardPower = 0;
  let skillLevel = passiveSkills.find(
    (skill) => skill.skillName === "Advanced Guard"
  ).skillLevel;

  if (armorTypeSelect.value.toLowerCase() === "heavy" && skillLevel > 0) {
    guardRecharge = 1 * skillLevel;
    guardPower = formatNumber((1 * skillLevel) / 2, "trunc");
  }
  return { guardRecharge, guardPower };
}
function getDodgeUP() {
  let Flee_Flat = 0;
  let skillLevel = passiveSkills.find(
    (skill) => skill.skillName === "Dodge UP"
  ).skillLevel;
  Flee_Flat = skillLevel;
  return { Flee_Flat };
}
function getGloria() {
  skillLevel = activeSkills.find(
    (activeSkills) => activeSkills.skillName === "Gloria"
  ).skillLevel;
  let DEF_Percent = 0;
  let MDEF_Percent = 0;
  if (skillLevel > 0) {
    DEF_Percent = 50 + 1.5 * (skillLevel * skillLevel);
    MDEF_Percent = 50 + 1.5 * (skillLevel * skillLevel);
  }
  return { DEF_Percent, MDEF_Percent };
}
function getReflex() {
  skillLevel = activeSkills.find(
    (activeSkills) => activeSkills.skillName === "Reflex"
  ).skillLevel;
  let evasionRecharge = 0;
  let DEF_Percent = 0;
  let MDEF_Percent = 0;
  if (skillLevel > 0) {
    evasionRecharge = 10 + 2 * skillLevel;
    DEF_Percent = -(100 - skillLevel);
    MDEF_Percent = -(100 - skillLevel);
  }
  return { evasionRecharge, DEF_Percent, MDEF_Percent };
}
function getDefenseUP() {
  let DEF_Flat = 0;
  let MDEF_Flat = 0;
  let skillLevel = passiveSkills.find(
    (skill) => skill.skillName === "Defense UP"
  ).skillLevel;
  if (skillLevel > 0) {
    DEF_Flat = formatNumber(
      CHARACTER_STAT.level * (0.025 * skillLevel),
      "down"
    );
    MDEF_Flat = formatNumber(
      CHARACTER_STAT.level * (0.025 * skillLevel),
      "down"
    );
  }
  return { DEF_Flat, MDEF_Flat };
}
function getDefenseMastery() {
  let DEF_Flat = 0;
  let MDEF_Flat = 0;
  let skillLevel = passiveSkills.find(
    (skill) => skill.skillName === "Defense Mastery"
  ).skillLevel;
  if (skillLevel > 0) {
    DEF_Flat = formatNumber(
      CHARACTER_STAT.level * (0.025 * skillLevel),
      "down"
    );
    MDEF_Flat = formatNumber(
      CHARACTER_STAT.level * (0.025 * skillLevel),
      "down"
    );
  }
  return { DEF_Flat, MDEF_Flat };
}
function getHighCycle() {
  let CSPD_Flat = 0;
  let CSPD_Percent = 0;
  let NMPR_Percent = 0;
  let AMPR_Percent = 0;
  let skillLevel = activeSkills.find(
    (skill) => skill.skillName === "High Cycle"
  ).skillLevel;
  if (skillLevel > 0) {
    CSPD_Flat = 50 + skillLevel * 50;
    CSPD_Percent = 25 * skillLevel;
    NMPR_Percent = -(50.5 - skillLevel * 2.5);
    AMPR_Percent = -(90.5 - skillLevel * 1.5);
  }
  return { CSPD_Flat, CSPD_Percent, NMPR_Percent, AMPR_Percent };
}
function getQuickMotion() {
  let ASPD_Flat = 0;
  let ASPD_Percent = 0;
  let AMPR_Percent = 0;
  let skillLevel = activeSkills.find(
    (skill) => skill.skillName === "Quick Motion"
  ).skillLevel;
  if (skillLevel > 0) {
    ASPD_Flat = 100 + skillLevel * 100;
    ASPD_Percent = 25 * skillLevel;
    AMPR_Percent = -(100 - skillLevel * 3);
  }
  return { ASPD_Flat, ASPD_Percent, AMPR_Percent };
}
function getChakra() {
  let AMPR_Flat = 0;
  let skillLevel = activeSkills.find(
    (skill) => skill.skillName === "Chakra"
  ).skillLevel;
  if (skillLevel > 0) {
    AMPR_Flat = skillLevel + Math.max(0, skillLevel - 5);
  }
  return { AMPR_Flat };
}
function getKairikiRanshin() {
  let skillLevel = activeSkills.find(
    (activeSkills) => activeSkills.skillName === "Kairiki Ranshin"
  ).skillLevel;
  let ATK_Flat = 0;
  let AMPR_Flat = 0;
  const amprValues = [6, 7, 8, 9, 10, 16, 17, 18, 19, 25];
  if (skillLevel > 0) {
    ATK_Flat = 10 * skillLevel;
    AMPR_Flat = amprValues[skillLevel - 1];
  }
  return { ATK_Flat, AMPR_Flat };
}
function getUltimaQiCharge() {
  let mainWeapon = mainWeaponSelect.value.toLowerCase();
  let subWeaponType = subWeaponTypeSelect.value.toLowerCase();
  let AMPR_Flat = 0;
  skillLevel = passiveSkills.find(
    (skill) => skill.skillName === "Ultima Qi Charge"
  ).skillLevel;
  if (mainWeapon === "barehand" && subWeaponType === "none" && skillLevel > 0) {
    AMPR_Flat = formatNumber(skillLevel / 2, "down");
  }
  return { AMPR_Flat };
}
function getAggravate() {
  let mainWeapon = mainWeaponSelect.value.toLowerCase();
  let subWeaponType = subWeaponTypeSelect.value.toLowerCase();
  let AMPR_Flat = 0;
  let skillLevel = passiveSkills.find(
    (skill) => skill.skillName === "Aggravate"
  ).skillLevel;
  if (skillLevel > 0) {
    if (
      mainWeapon === "knuckles" ||
      subWeaponType === "knuckles" ||
      mainWeapon === "barehand"
    ) {
      AMPR_Flat = formatNumber(0.5 * skillLevel, "up");
    }
  }
  return { AMPR_Flat };
}
function getMagicSkin() {
  let subWeaponType = subWeaponTypeSelect.value.toLowerCase();
  let RefineReduction = 0;
  let physicalDamageReduction = 0;
  let magicDamageReduction = 0;
  let skillLevel = passiveSkills.find(
    (skill) => skill.skillName === "Magic Skin(Max MP)"
  ).skillLevel;

  if (skillLevel > 0 && subWeaponType === "magic device") {
    physicalDamageReduction = Math.max(
      0,
      formatNumber((Math.min(2000, getMaxMP()) / 400) * skillLevel, "down")
    );
    magicDamageReduction = Math.max(
      0,
      formatNumber((Math.min(2000, getMaxMP()) / 400) * skillLevel, "down")
    );
    RefineReduction = Number(subWeaponRefine.value) || 0;
  }
  return { RefineReduction, physicalDamageReduction, magicDamageReduction };
}
function getBaseCriticalDamage() {
  let baseCriticalDamage = 150;
  if (CHARACTER_STAT.AGI > CHARACTER_STAT.STR) {
    baseCriticalDamage =
      150 + formatNumber((getTotalSTR() + getTotalAGI()) / 10, "down");
  } else {
    baseCriticalDamage = 150 + formatNumber(getTotalSTR() / 5, "down");
  }
  return baseCriticalDamage;
}

function getDualSwordMastery() {
  let mainWeapon = mainWeaponSelect.value.toLowerCase();
  let subWeaponType = subWeaponTypeSelect.value.toLowerCase();
  let skillLevel = passiveSkills.find(
    (skill) => skill.skillName === "Dual Sword Mastery"
  ).skillLevel;
  let Accuracy_Percent = 0;
  let CriticalRate_Percent = 0;
  let DoubleAMPR = false;
  if (
    mainWeapon === "one handed sword" &&
    subWeaponType === "one handed sword"
  ) {
    Accuracy_Percent = -(55 - 3 * skillLevel);
    CriticalRate_Percent = -(55 - 3 * skillLevel);
    DoubleAMPR = true;
  }
  return { Accuracy_Percent, CriticalRate_Percent, DoubleAMPR };
}
function getWindRelease() {
  let mainWeapon = mainWeaponSelect.value.toLowerCase();
  let subWeaponType = subWeaponTypeSelect.value.toLowerCase();
  let skillLevel = activeSkills.find(
    (skill) => skill.skillName === "Wind Release"
  ).skillLevel;
  let CriticalRate_Flat = 0;
  let ASPD_Flat = 0;
  let UnsheatheAttack_Percent = 0;
  if (skillLevel > 0 && subWeaponType === "ninjutsu scroll") {
    CriticalRate_Flat = skillLevel;
    ASPD_Flat = getTotalDEX();
    if (mainWeapon === "katana") UnsheatheAttack_Percent = skillLevel;
  }
  return { CriticalRate_Flat, ASPD_Flat, UnsheatheAttack_Percent };
}
function getResonanceFocus() {
  let subWeaponRefineValue = Number(subWeaponRefine.value) || 0;
  let subWeaponType = subWeaponTypeSelect.value.toLowerCase();
  let CriticalRate_Flat = 0;
  let Accuracy_Flat = 0;
  let skillLevel = activeSkills.find(
    (skill) => skill.skillName === "Resonance (Focus Regislet)"
  ).skillLevel;

  if (skillLevel > 0 && subWeaponType.toLowerCase() === "magic device") {
    CriticalRate_Flat = formatNumber(
      (10 + skillLevel * 2 + subWeaponRefineValue * 3) / 2,
      "trunc"
    );

    Accuracy_Flat = formatNumber(
      (35 + skillLevel * 2 + subWeaponRefineValue * 3) / 2,
      "trunc"
    );
  }
  return { CriticalRate_Flat, Accuracy_Flat };
}
function getDetection() {
  let mainWeapon = mainWeaponSelect.value.toLowerCase();
  skillLevel = activeSkills.find(
    (skill) => skill.skillName === "Detection"
  ).skillLevel;
  let Aggro = 0;
  let CriticalRate_Flat = 0;
  if (skillLevel > 0) {
    if (["bow", "bowgun"].includes(mainWeapon)) {
      Aggro = -(10 + skillLevel);
      CriticalRate_Flat = skillLevel;
    }
  }
  return { Aggro, CriticalRate_Flat };
}
function getCamouflage() {
  let mainWeapon = mainWeaponSelect.value.toLowerCase();
  let skillLevel = 0;
  let Aggro = 0;
  let CriticalRate_Flat = 0;
  let ActiveType = "";
  let ATK_Flat = 0;

  skillLevelActive = activeSkills.find(
    (skill) => skill.skillName === "Camouflage"
  ).skillLevel;
  skillLevelPassive = passiveSkills.find(
    (skill) => skill.skillName === "Camouflage(Passive)"
  ).skillLevel;

  if (skillLevelActive >= skillLevelPassive) {
    skillLevel = skillLevelActive;
    ActiveType = "Active";
  } else {
    skillLevel = skillLevelPassive;
    ActiveType = "Passive";
  }

  if (skillLevel > 0) {
    Aggro = -(2 + 4 * skillLevel);
    CriticalRate_Flat = 4 * skillLevel;
    if (ActiveType === "Active") {
      ATK_Flat = formatNumber(
        ((CHARACTER_STAT.level / 2) * skillLevel) / 10,
        "down"
      );
      if (["bow", "bowgun"].includes(mainWeapon)) {
        ATK_Flat = ATK_Flat * 2;
      }
    }
    if (ActiveType === "Passive") {
      if (mainWeapon === "bow") {
        Aggro = formatNumber(Aggro / 2);
        CriticalRate_Flat = 0;
      }
      if (mainWeapon === "bowgun") {
        Aggro = 0;
        CriticalRate_Flat = formatNumber(CriticalRate_Flat / 2);
      }
    }
  }

  return { Aggro, CriticalRate_Flat, ATK_Flat, ActiveType };
}

function getBerserk() {
  let subWeaponType = subWeaponTypeSelect.value.toLowerCase();
  let mainWeapon = mainWeaponSelect.value.toLowerCase();
  let ASPD_Percent = 0;
  let ASPD_Flat = 0;
  let CriticalRate_Flat = 0;
  let Stability = 0;
  let DEF_Percent = 0;
  let MDEF_Percent = 0;

  skillLevel = activeSkills.find(
    (activeSkills) => activeSkills.skillName === "Berserk"
  ).skillLevel;
  if (skillLevel > 0) {
    ASPD_Percent = 10 * skillLevel;
    ASPD_Flat = 100 * skillLevel;
    CriticalRate_Flat = formatNumber(2.5 * skillLevel, "down");
    Stability = -(100 - 5 * skillLevel);
    DEF_Percent = -(100 - 5 * skillLevel);
    MDEF_Percent = -(100 - 5 * skillLevel);
    if (
      mainWeapon === "one handed sword" &&
      subWeaponType.toLowerCase() === "one handed sword"
    ) {
      Stability = formatNumber(Stability / 2, "down");
    } else if (mainWeapon === "one handed sword") {
      Stability = formatNumber(Stability / 2, "down");
      DEF_Percent = DEF_Percent / 2;
      MDEF_Percent = MDEF_Percent / 2;
    } else if (mainWeapon === "two handed sword") {
      Stability = formatNumber(Stability / 2, "down");
      CriticalRate_Flat = CriticalRate_Flat * 2;
    }
  }
  return {
    ASPD_Percent,
    ASPD_Flat,
    CriticalRate_Flat,
    Stability,
    DEF_Percent,
    MDEF_Percent,
  };
}
function getCriticalUP() {
  let skillLevel = passiveSkills.find(
    (skill) => skill.skillName === "Critical UP"
  ).skillLevel;

  let CriticalRate_Flat = 0;
  let CriticalDamage_Percent = 0;

  CriticalRate_Flat = formatNumber(skillLevel / 2, "trunc");
  CriticalDamage_Percent = formatNumber(skillLevel / 2, "trunc");
  return { CriticalRate_Flat, CriticalDamage_Percent };
}
function getTwoHanded() {
  let skillLevel = passiveSkills.find(
    (skill) => skill.skillName === "Two-Handed"
  ).skillLevel;

  let subWeaponType = subWeaponTypeSelect.value.toLowerCase();
  let mainWeapon = mainWeaponSelect.value.toLowerCase();
  let weaponATK_Percent = 0;
  let Accuracy_Percent = 0;
  let CriticalRate_Flat = 0;
  let Stability = 0;
  let KatanaCritical = false;

  let ninjaSpiritSkillLevel = passiveSkills.find(
    (skill) => skill.skillName === "Ninja Spirit"
  ).skillLevel;

  if (skillLevel > 0) {
    if (
      subWeaponType === "none" ||
      (ninjaSpiritSkillLevel === 10 && subWeaponType === "ninjutsu scroll")
    ) {
      weaponATK_Percent = skillLevel;
      Accuracy_Percent = skillLevel;
      CriticalRate_Flat = skillLevel;
      Stability = skillLevel;
      if (mainWeapon !== "katana") {
        CriticalRate_Flat = formatNumber(CriticalRate_Flat / 2, "truc");
        Stability = formatNumber(Stability / 2, "truc");
      }
      if (mainWeapon === "katana") {
        KatanaCritical = true;
      }
    }
  }
  return {
    weaponATK_Percent,
    Accuracy_Percent,
    CriticalRate_Flat,
    Stability,
    KatanaCritical,
  };
}
function getCriticalSpear() {
  let mainWeapon = mainWeaponSelect.value.toLowerCase();
  let skillLevel = passiveSkills.find(
    (skill) => skill.skillName === "Critical Spear"
  ).skillLevel;
  let CriticalRate_Percent = 0;
  let CriticalRate_Flat = 0;
  if (skillLevel > 0) {
    if (mainWeapon === "halberd") {
      CriticalRate_Percent = Math.floor((skillLevel - 1) / 2);
      if (skillLevel >= 10) CriticalRate_Percent = 5;

      CriticalRate_Flat = Math.ceil(skillLevel / 2);
    }
  }
  return { CriticalRate_Flat, CriticalRate_Percent };
}
function getGodSpeedWield() {
  let skillLevel = activeSkills.find(
    (activeSkills) => activeSkills.skillName === "God Speed Wield"
  ).skillLevel;

  let skillStack = activeSkills.find(
    (activeSkills) => activeSkills.skillName === "God Speed Wield"
  ).stackNumber;

  let mainWeapon = mainWeaponSelect.value.toLowerCase();
  let ASPD_Flat = 0;
  let motionSpeed = 0;
  let evasionRecharge = 0;
  let MaxMP = 0;
  let physicalResistance = 0;
  let magicResistance = 0;
  if (skillLevel > 0 && skillStack > 0) {
    if (skillStack > 3) skillStack = 3;
    ASPD_Flat = 30 * skillLevel * skillStack;
    motionSpeed = skillLevel * skillStack;
    evasionRecharge = skillLevel * skillStack;
    MaxMP = -(100 * skillStack);
    physicalResistance = -(100 - 3 * skillLevel) * skillStack;
    magicResistance = -(100 - 3 * skillLevel) * skillStack;
    if (mainWeapon === "halberd") {
      ASPD_Flat += 100 * skillStack;
      physicalResistance = physicalResistance + 45 * skillStack;
      magicResistance = magicResistance + 45 * skillStack;
    }
  }
  return {
    ASPD_Flat,
    motionSpeed,
    evasionRecharge,
    MaxMP,
    physicalResistance,
    magicResistance,
    skillStack,
  };
}
function getMPBoost() {
  let skillLevel = passiveSkills.find(
    (skill) => skill.skillName === "MP Boost"
  ).skillLevel;
  let MaxMP = 0;
  MaxMP = 30 * skillLevel;
  return { MaxMP };
}
function getHPBoost() {
  let MaxHP_Flat = 0;
  let MaxHP_Percent = 0;
  let skillLevel = passiveSkills.find(
    (skill) => skill.skillName === "HP Boost"
  ).skillLevel;
  MaxHP_Flat = 100 * skillLevel;
  MaxHP_Percent = 2 * skillLevel;
  return { MaxHP_Flat, MaxHP_Percent };
}
function getMagicalShield() {
  let subWeaponType = subWeaponTypeSelect.value;
  let MDEF_Flat = 0;
  let MDEF_Percent = 0;
  let MaxHP_Flat = 0;
  let magicResistance = 0;
  let skillLevel = passiveSkills.find(
    (skill) => skill.skillName === "Magical Shield"
  ).skillLevel;
  if (subWeaponType.toLowerCase() === "shield") {
    MDEF_Flat = 2 * skillLevel;
    MDEF_Percent = (1 * skillLevel) / 100;
    MaxHP_Flat = 50 * skillLevel;
    magicResistance = 1 * skillLevel;
  }
  return { MDEF_Flat, MDEF_Percent, MaxHP_Flat, magicResistance };
}
function getForceShield() {
  let subWeaponType = subWeaponTypeSelect.value;
  let DEF_Flat = 0;
  let DEF_Percent = 0;
  let MaxHP_Flat = 0;
  let physicalResistance = 0;
  let skillLevel = passiveSkills.find(
    (skill) => skill.skillName === "Force Shield"
  ).skillLevel;
  if (subWeaponType.toLowerCase() === "shield") {
    DEF_Flat = 2 * skillLevel;
    DEF_Percent = 1 * skillLevel;
    MaxHP_Flat = 50 * skillLevel;
    physicalResistance = 1 * skillLevel;
  }
  return { DEF_Flat, DEF_Percent, MaxHP_Flat, physicalResistance };
}
function getFrontlinerII() {
  let MaxHP = 0;
  let skillLevel = passiveSkills.find(
    (skill) => skill.skillName === "Frontliner II"
  ).skillLevel;
  if (skillLevel > 0) {
    MaxHP = 100 * skillLevel + CHARACTER_STAT.level * 10;
  }
  return { MaxHP };
}
function getBushido() {
  let mainWeapon = mainWeaponSelect.value.toLowerCase();
  let MaxHP = 0;
  let MaxMP = 0;
  let Accuracy_Flat = 0;
  let WeaponATK_Percent = 0;
  let ATK_Percent = 0;
  let skillLevel = passiveSkills.find(
    (skill) => skill.skillName === "Bushido"
  ).skillLevel;
  if (skillLevel > 0) {
    MaxHP = 10 * skillLevel;
    MaxMP = 10 * skillLevel;
    Accuracy_Flat = 1 * skillLevel;

    if (mainWeapon === "katana") {
      WeaponATK_Percent = 3 * skillLevel;
      if (skillLevel >= 1 && skillLevel <= 2) {
        ATK_Percent = 1;
      } else if (skillLevel >= 3 && skillLevel <= 7) {
        ATK_Percent = 2;
      } else if (skillLevel >= 8 && skillLevel <= 10) {
        ATK_Percent = 3;
      }
    }
  }
  return { MaxHP, MaxMP, Accuracy_Flat, ATK_Percent, WeaponATK_Percent };
}

let elements = window.ElementTable;
let elementList = window.elementList;
let characterStatus = window.basicStats;
let offensive_physical = window.offensive_physical;
let offensive_magic = window.offensive_magic;
let offensive_general = window.offensive_general;
let interrupt_skill = window.interrupt_skill;
function createStatElement(label, value, breakdownText = "") {
  const p = document.createElement("p");
  p.className = "relative";

  if (breakdownText) {
    const wrapper = document.createElement("span");
    wrapper.className = "ml-1 cursor-pointer";

    const icon = document.createElement("span");
    icon.className = "text-blue-300 font-bold";
    icon.textContent = "[?]";

    const tooltip = document.createElement("div");
    tooltip.className = `
      stat-tooltip
      fixed z-50 hidden 
      bg-gray-700 font-semibold text-blue-300 text-sm 
      px-4 py-2 rounded shadow-lg w-max max-w-xs
      pointer-events-none
    `;
    tooltip.textContent = breakdownText;

    document.body.appendChild(tooltip);

    function positionTooltip() {
      const iconRect = icon.getBoundingClientRect();
      const tooltipRect = tooltip.getBoundingClientRect();
      const padding = 8;

      let top = iconRect.bottom + padding;
      let left = iconRect.left + iconRect.width / 2 - tooltipRect.width / 2;

      if (left < padding) left = padding;
      if (left + tooltipRect.width > window.innerWidth - padding) {
        left = window.innerWidth - tooltipRect.width - padding;
      }

      tooltip.style.top = `${top}px`;
      tooltip.style.left = `${left}px`;
    }

    // Hover support (desktop)
    icon.addEventListener("mouseenter", () => {
      tooltip.classList.remove("hidden");
      positionTooltip();
    });
    icon.addEventListener("mouseleave", () => {
      tooltip.classList.add("hidden");
    });

    // Click support (mobile)
    icon.addEventListener("click", (e) => {
      e.stopPropagation();

      const alreadyVisible = !tooltip.classList.contains("hidden");
      document.querySelectorAll(".stat-tooltip").forEach((el) => {
        if (el !== tooltip) el.classList.add("hidden");
      });

      if (alreadyVisible) {
        tooltip.classList.add("hidden");
      } else {
        tooltip.classList.remove("hidden");
        positionTooltip();
      }
    });

    document.addEventListener("click", () => {
      tooltip.classList.add("hidden");
    });

    wrapper.appendChild(icon);
    p.innerHTML = `<strong class="text-blue-400">${label}:</strong> <span class="font-mono">${value}</span>`;
    p.appendChild(wrapper);
  } else {
    p.innerHTML = `<strong class="text-blue-400">${label}:</strong> <span class="font-mono">${value}</span>`;
  }

  return p;
}

function renderStatus() {
  const container = document.getElementById("statusContainer");
  if (!container) {
    return;
  }
  container.innerHTML = "";

  const categories = [
    { title: "Defensive", data: characterStatus },
    { title: "Offensive (Physical)", data: offensive_physical },
    { title: "Offensive (Magic)", data: offensive_magic },
    { title: "Offensive (General)", data: offensive_general },
    { title: "Interrupt Skill", data: interrupt_skill },
  ];

  categories.forEach(({ title, data }) => {
    const section = document.createElement("div");
    section.className =
      "bg-gray-800 p-4 rounded-lg shadow-md min-w-0 w-full overflow-visible break-words whitespace-normal mb-4";

    const titleElem = document.createElement("h2");
    titleElem.className = "font-bold text-blue-400 text-xl mb-2";
    titleElem.textContent = title;
    section.appendChild(titleElem);

    for (const [key, val] of Object.entries(data)) {
      const breakdownText =
        window[`${key.replace(/[^a-zA-Z0-9]/g, "")}_Text`] || "";
      const element = createStatElement(key, val, breakdownText);
      section.appendChild(element);
    }

    container.appendChild(section);
  });

  let tableHTML = `<table class="w-full border-collapse border border-gray-600 text-white">
  <thead>
    <tr>
      <th class="border border-gray-600 px-2 py-1"></th>
      <th class="border border-gray-600 px-2 py-1">Phy. Power</th>
      <th class="border border-gray-600 px-2 py-1">Mag. Power</th>
      <th class="border border-gray-600 px-2 py-1">Resistance</th>
    </tr>
  </thead>
  <tbody>`;

  function getTextColorClass(value) {
    if (value < 100) return "text-red-400";
    if (value > 100) return "text-blue-400";
    return "text-white";
  }

  function getTextColorClass(value, isResistance = false) {
    const baseline = isResistance ? 0 : 100;

    if (value < baseline) return "text-red-400";
    if (value > baseline) return "text-blue-400";
    return "text-white";
  }

  function getTextColorClass(value, isResistance = false) {
    const baseline = isResistance ? 0 : 100;

    if (value < baseline) return "text-red-400";
    if (value > baseline) return "text-blue-400";
    return "text-white";
  }

  elementList.forEach((element) => {
    const phy = elements[element]["Phy Power"];
    const mag = elements[element]["Mag Power"];
    const res = elements[element]["Resistance"];

    tableHTML += `<tr>
    <td class="border border-gray-600 px-2 py-1">${element}</td>
    <td class="border border-gray-600 px-2 py-1 ${getTextColorClass(
      phy
    )}">${phy}%</td>
    <td class="border border-gray-600 px-2 py-1 ${getTextColorClass(
      mag
    )}">${mag}%</td>
    <td class="border border-gray-600 px-2 py-1 ${getTextColorClass(
      res,
      true
    )}">${res}%</td>
  </tr>`;
  });

  tableHTML += `</tbody></table>`;

  const tableContainer = document.createElement("div");
  tableContainer.className = "bg-gray-800 p-4 rounded-lg shadow-md";
  const heading = document.createElement("h2");
  heading.className = "font-bold text-blue-400 text-xl mb-2";
  heading.textContent = "Element Table";
  tableContainer.appendChild(heading);
  tableContainer.innerHTML += tableHTML;

  container.appendChild(tableContainer);
}
function roundTo(value, decimals = 0) {
  return Math.round(value * 10 ** decimals) / 10 ** decimals;
}

function calculateStat() {
  let MaxHP = getMaxHP() || 0;
  let MaxMP = getMaxMP() || 0;
  let NaturalHPRegen = getNHPR() || 0;
  let NaturalMPRegen = getNMPR() || 0;
  let CriticalRate = getCriticalRate() || 0;
  let CriticalDamage = getCriticalDamage() || 0;
  let AMPR = getAMPR();
  let DEF = getDEF() || 0;
  let MDEF = getMDEF() || 0;
  let Dodge = getFlee() || 0;
  let GuardRecharge = getGuardRecharge() || 0;
  let GuardRechargeRate = getGuardRechargeRate() || 0;
  let GuardPower = getGuardPower() || 0;
  let GuardPowerValue = getGuardPowerValue() || 0;
  let GuardMPRecovery = getGMPR() || 0;
  let GuardRate =
    formatNumber(GuardPowerValue, "trunc") +
    " (" +
    (roundTo((GuardRechargeRate / GuardPowerValue) * 100, 1) || 0) +
    "%/s)";
  let EvasionRecharge = getEvasionRecharge() || 0;
  let PhysicalResistance =
    getPhysicalResistance().total.toString() +
      "% (" +
      getPhysicalResistance().physicalResistance.toString() +
      "%)" || 0;
  let PhysicalDamageReduction = getPhysicalDamageReduction() || 0;
  let MagicResistance =
    getMagicResistance().total.toString() +
      "% (" +
      getMagicResistance().magicResistance.toString() +
      "%)" || 0;
  let MagicDamageReduction = getMagicDamageReduction() || 0;
  let RefineReduction = getRefineReduction() || 0;
  let AilmentResistance = getAilmentResistance() || 0;
  let Aggro = getAggro() || 100;
  let BarrierCooldown = getBarrierCooldown() || 0;
  let PhysicalBarrier = getPhysicalBarrier() || 0;
  let MagicBarrier = getMagicBarrier() || 0;
  let FractionalDamageReduction = getFractionalDamageReduction() || 0;
  let FractionalBarrier = getFractionalBarrier() || 0;
  let Reflect = getReflect() || 0;

  let PhysicalATK = getTotalATKAndMATK().totalATK || 0;
  let PhysicalATKWhenCrit = getATKWhenCritical().criticalTotalATK || 0;
  let PhysicalStability = getStability() || { total: 0, final: 0 };
  let SubHandATK = getSubHandATK() || 0;
  let SubHandStability = getSubHandStability() || 0;
  let TotalDSATK = getTotalDSATK().totalDSATK || 0;
  let DualBringerATK = getDualBringerValue().DualBringerATK;
  let ASPD = getASPD() || 0;
  let MotionSpeed = getMotionSpeed() || 0;
  let PhysicalPierce = getPhysicalPierce() || 0;
  let Accuracy = getAccuracy() || 0;
  let UnsheatheAttack = getUnsheatheAttack() || 0;
  let FlatUnsheatheAttack = getFlatUnsheatheAttack() || 0;
  let AdditionalMelee = getAdditionalMelee() || 0;

  let MagicATK = getTotalATKAndMATK().totalMATK || 0;
  let HiddenMagicATK = getHiddenMATK() || 0;
  let WizardMATK = getWizardMATK().wizardMATK || 0;
  let DualBringerMATK = getDualBringerValue().DualBringerMATK;
  let AdditionalMagic = getAdditionalMagic() || 0;
  let MagicStability = getMagicStability() || 0;
  let MinMagicStability = getMinMagicStability() || 0;
  let MaxMagicStability = getMaxMagicStability() || 0;
  let MagicPierce = getFinalMagicPierce() || 0;
  let CSPD = getCSPD() || 0;
  let MagicCriticalRate = getMagicCriticalRate().MagicCriticalRate || 0;
  let MagicCriticalRateWeaken =
    getMagicCriticalRate().MagicCriticalRateWeaken || 0;
  let MagicCriticalDamage = getMagicCriticalDamage() || 0;

  let ShortRangeDamage = getShortRangeDamage() || 0;
  let LongRangeDamage = getLongRangeDamage() || 0;
  let Anticipate = getAnticipate() || 0;
  let GuardBreak = getGuardBreak() || 0;

  let FlinchUnavailable = getFlinchUnavailable() ? "Yes" : "No";
  let TumbleUnavailable = getTumbleUnavailable() ? "Yes" : "No";
  let StunUnavailable = getStunUnavailable() ? "Yes" : "No";

  //################# Defensive ##################
  if (MaxHP <= 0) {
    characterStatus["MaxHP"] = MaxHP + " (NOT ENOUGH HP TO LIVE)";
  } else if (MaxHP > 99999) {
    characterStatus["MaxHP"] = `99999 (${MaxHP})`;
  } else {
    characterStatus["MaxHP"] = MaxHP;
  }

  characterStatus["MaxMP"] = MaxMP > 2000 ? "2000 (" + MaxMP + ")" : MaxMP;
  offensive_physical["Critical Rate"] = CriticalRate + "%";
  offensive_physical["Critical Damage"] =
    CriticalDamage.totalCriticalDamage > 300
      ? CriticalDamage.CriticalDamage +
        "% (" +
        CriticalDamage.totalCriticalDamage +
        "%)"
      : CriticalDamage.CriticalDamage + "%";
  characterStatus["Natural HP Regen"] = formatNumber(NaturalHPRegen, "trunc");
  characterStatus["Natural MP Regen"] = formatNumber(NaturalMPRegen, "trunc");
  characterStatus["Attack MP Recovery"] = formatNumber(AMPR, "trunc");
  characterStatus["DEF"] = Math.floor(DEF);
  characterStatus["MDEF"] = Math.floor(MDEF);
  characterStatus["Dodge"] = formatNumber(Dodge, "trunc");
  characterStatus["Guard Recharge %"] =
    formatNumber(GuardRecharge, "trunc") + "%";
  characterStatus["Guard Recharge Rate"] =
    formatNumber(GuardRechargeRate, "trunc") + "/s";
  characterStatus["Guard Power %"] = formatNumber(GuardPower, "trunc") + "%";
  characterStatus["Guard Power Value"] =
    formatNumber(GuardPowerValue, "trunc") +
    " (" +
    formatNumber(GuardPowerValue / 100, "trunc") +
    " Gauge)";
  characterStatus["Guard MP Recovery"] = formatNumber(GuardMPRecovery, "trunc");
  characterStatus["Guard Rate"] = GuardRate;
  characterStatus["Evasion Recharge %"] =
    formatNumber(EvasionRecharge, "truc") + "%";
  characterStatus["Physical Resistance %"] = PhysicalResistance;
  characterStatus["Physical Damage Reduction %"] =
    PhysicalDamageReduction + "%";
  characterStatus["Magic Resistance %"] = MagicResistance;
  characterStatus["Magic Damage Reduction %"] = MagicDamageReduction + "%";
  characterStatus["Refine Damage Resistance %"] = RefineReduction + "%";
  characterStatus["Ailment Resistance %"] = AilmentResistance + "%";
  characterStatus["Aggro %"] = Aggro + "%";
  characterStatus["Barrier Cooldown %"] = BarrierCooldown + "%";
  characterStatus["Physical Barrier"] = PhysicalBarrier;
  characterStatus["Magic Barrier"] = MagicBarrier;
  characterStatus["Fractional Reduction %"] = FractionalDamageReduction + "%";
  characterStatus["Fractional Barrier %"] = FractionalBarrier + "%";
  characterStatus["Reflect %"] = Reflect + "%";

  //################# Offensive (Phy) ##################
  offensive_physical["ATK"] = formatNumber(PhysicalATK, "trunc");
  offensive_physical["ATK (when critical)"] = formatNumber(
    PhysicalATKWhenCrit,
    "down"
  );
  offensive_physical["Stability %"] =
    PhysicalStability.total +
    "% (" +
    Math.max(1, PhysicalStability.final) +
    "~100%)";
  offensive_physical["Sub-Hand ATK"] = SubHandATK;
  offensive_physical["Sub-Hand Stability %"] = SubHandStability + "%";
  offensive_physical["Total Dual Sword ATK"] = TotalDSATK;
  offensive_physical["Dual Bringer ATK"] = formatNumber(
    DualBringerATK,
    "trunc"
  );
  offensive_physical["ASPD"] = formatNumber(ASPD, "trunc");
  offensive_physical["Motion Speed %"] =
    MotionSpeed > 50 ? "50% (" + MotionSpeed + "%)" : MotionSpeed + "%";
  offensive_physical["Physical Pierce%"] = PhysicalPierce + "%";
  offensive_physical["Accuracy"] = Accuracy;
  offensive_physical["Unsheathe Attack %"] = UnsheatheAttack + "%";
  offensive_physical["Unsheathe Attack Flat"] = FlatUnsheatheAttack;
  offensive_physical["Additional Melee %"] = AdditionalMelee + "%";

  //################# Offensive (Mag) ##################
  offensive_magic["MATK"] = formatNumber(MagicATK, "trunc");
  offensive_magic["Hidden MATK"] = formatNumber(HiddenMagicATK, "trunc");
  offensive_magic["Wizard MATK"] = formatNumber(WizardMATK, "trunc");
  offensive_magic["Dual Bringer MATK"] = formatNumber(DualBringerMATK, "trunc");
  offensive_magic["Additional Magic %"] = AdditionalMagic + "%";
  offensive_magic["Magic Stability %"] =
    MagicStability + "% (" + MinMagicStability + "~" + MaxMagicStability + "%)";
  offensive_magic["Magic Pierce%"] = MagicPierce + "%";
  offensive_magic["CSPD"] = CSPD;
  offensive_magic["Magic Critical Rate"] =
    MagicCriticalRate + "% (" + MagicCriticalRateWeaken + "% with Weaken)";
  offensive_magic["Magic Critical Damage"] = MagicCriticalDamage + "%";

  //################# Offensive (General) ##################
  offensive_general["Short Range Damage %"] = ShortRangeDamage + "%";
  offensive_general["Long Range Damage %"] = LongRangeDamage + "%";
  offensive_general["Anticipate %"] = Anticipate + "%";
  offensive_general["Guard Break %"] = GuardBreak + "%";

  //################# Interupt ##################
  interrupt_skill["Flinch Unavailable"] = FlinchUnavailable;
  interrupt_skill["Tumble Unavailable"] = TumbleUnavailable;
  interrupt_skill["Stun Unavailable"] = StunUnavailable;

  //################# Elements ##################

  elementList.forEach((element) => {
    let DamageToElement = 0;
    if (element !== "Neutral") DamageToElement = getOverlimit().DamageToElement;
    let ElementDamage = getElementDamageBonus(element);
    let ElementResistance = getElementResistance(element) || 0;
    elements[element]["Phy Power"] = ElementDamage.physical;
    elements[element]["Mag Power"] = ElementDamage.magic + DamageToElement;
    elements[element]["Resistance"] = applyResReduction(ElementResistance);
  });
}
function onUserInputChanged() {
  calculateStat();
  renderStatus();
}
onUserInputChanged();
let debounceTimer;
document.addEventListener("input", (event) => {
  const target = event.target;
  if (target.matches("input, select, textarea")) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      onUserInputChanged();
    }, 200);
  }
});
document.addEventListener("click", (event) => {
  const target = event.target;
  if (target.matches("button")) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      onUserInputChanged();
    }, 200);
  }
});
function updateStatInputsFromCharacterStats() {
  const stats = ["level", "STR", "INT", "VIT", "AGI", "DEX"];

  stats.forEach((stat) => {
    const input = document.getElementById(stat);
    if (input && window.CHARACTERSTATS.hasOwnProperty(stat)) {
      input.value = window.CHARACTERSTATS[stat];
    }
  });

  const extraStatSelect = document.getElementById("extra-stat");
  const extraStatInput = document.getElementById("extra-stat-input");
  const extraType = window.CHARACTERSTATS.extraType || "NONE";
  const extraValue = window.CHARACTERSTATS.extraValue || 0;

  if (extraStatSelect) {
    extraStatSelect.value = extraType;
  }

  if (extraStatInput) {
    extraStatInput.value = extraValue;

    if (extraType === "NONE") {
      extraStatInput.disabled = true;
      extraStatInput.classList.add(
        "opacity-50",
        "cursor-not-allowed",
        "text-gray-400"
      );
    } else {
      extraStatInput.disabled = false;
      extraStatInput.classList.remove(
        "opacity-50",
        "cursor-not-allowed",
        "text-gray-400"
      );
      extraStatInput.classList.add("text-white");
    }
  }
  onUserInputChanged();
}
function loadExternalBuffs(externalBuff) {
  if (!externalBuff) return;

  function loadBuffCategory(
    categoryName,
    selectedObj,
    selectPrefix,
    inputPrefix
  ) {
    const buffs = externalBuff[categoryName];
    if (!buffs) return;

    Object.entries(buffs).forEach(([selectId, data]) => {
      const selectEl = document.getElementById(selectId);
      const inputId = selectId.replace(selectPrefix, inputPrefix);
      const inputEl = document.getElementById(inputId);

      if (selectEl && inputEl) {
        // 🔍 Find the correct key in availableStats
        const matchedKey = Object.keys(window.availableStats).find((key) => {
          const statObj = window.availableStats[key];
          return statObj.stat === data.stat && statObj.type === data.type;
        });

        // Set select and input
        if (matchedKey) {
          selectEl.value = matchedKey;
          inputEl.value = data.value || 0;

          toggleInputState(inputEl, false);
          selectedObj[selectId] = {
            value: Number(data.value) || 0,
            ...window.availableStats[matchedKey],
          };
        } else {
          console.warn(`No matching stat found for`, data);
          selectEl.value = "--- None ---";
          inputEl.value = 0;
          toggleInputState(inputEl, true);
          delete selectedObj[selectId];
        }
      }
    });
  }

  loadBuffCategory("avatar", selectedAvatar, "avatarSelected", "avatarStat");
  loadBuffCategory(
    "foodbuff",
    selectedFoodbuff,
    "foodBuffSelected",
    "foodBuffStat"
  );
  loadBuffCategory("potion", selectedPotion, "potionSelected", "potionStat");

  onUserInputChanged();
}

function loadSkills(selection) {
  if (Array.isArray(selection.skillPassive)) {
    selection.skillPassive.forEach((savedSkill) => {
      const skill = window.skillPassive.find(
        (s) => s.skillName === savedSkill.skillName
      );
      if (skill) {
        skill.skillLevel = savedSkill.skillLevel;
        skill.isStackable = savedSkill.isStackable;
        skill.stackNumber = savedSkill.stackNumber;
      }
    });
  }

  if (Array.isArray(selection.skillActive)) {
    selection.skillActive.forEach((savedSkill) => {
      const skill = window.skillActive.find(
        (s) => s.skillName === savedSkill.skillName
      );
      if (skill) {
        skill.skillLevel = savedSkill.skillLevel;
        skill.isStackable = savedSkill.isStackable;
        skill.stackNumber = savedSkill.stackNumber;
      }
    });
  }

  initPassiveSkill();
  initActiveSkill();
  onUserInputChanged();
}
function findAvailableStatKey(stat_name, stat_type) {
  for (const key in window.availableStats) {
    const entry = window.availableStats[key];
    if (
      entry.stat === stat_name &&
      entry.type.toLowerCase() === stat_type.toLowerCase()
    ) {
      return key;
    }
  }
  return null;
}

function restoreWeaponData(savedEquipment) {
  if (!savedEquipment || !savedEquipment.weapon) return;

  const weaponData = savedEquipment.weapon;

  if (mainWeaponSelect) {
    mainWeaponSelect.value = weaponData.selectedType || "";
    onWeaponTypeChange();
  }

  if (!weaponData.selectedWeapon) {
    selectedWeapon = null;
    weaponSelectButton.textContent = "Select Weapon";
    setWeaponInputsEnabled(false);
    displaySelectedWeaponStats();
  } else {
    const savedWeaponId =
      weaponData.selectedWeapon.item_id || weaponData.selectedWeapon;

    if (
      savedWeaponId === "None" ||
      savedWeaponId === null ||
      savedWeaponId === ""
    ) {
      selectedWeapon = null;
      weaponSelectButton.textContent = "Select Weapon";
      setWeaponInputsEnabled(false);
      displaySelectedWeaponStats();
    } else if (
      savedWeaponId === "custom" ||
      weaponData.selectedWeapon.item_name?.toLowerCase().includes("custom")
    ) {
      selectedWeapon = weaponData.selectedWeapon;
      weaponSelectButton.textContent =
        selectedWeapon.item_name || "Custom Weapon";
      setWeaponInputsEnabled(true);

      displaySelectedWeaponStats();

      if (selectedWeapon.stats && Array.isArray(selectedWeapon.stats)) {
        selectedWeapon.stats.forEach((stat, index) => {
          const selectElem = document.getElementById(
            `weaponCustomStat${index + 1}`
          );
          const inputElem = document.getElementById(
            `weaponCustomStat${index + 1}Input`
          );

          if (selectElem && inputElem) {
            selectElem.value =
              findAvailableStatKey(stat.stat_name, stat.stat_type) || "";

            if (selectElem.value) {
              inputElem.disabled = false;
              inputElem.classList.remove(
                "opacity-50",
                "cursor-not-allowed",
                "bg-gray-700",
                "text-gray-400"
              );
              inputElem.value = parseInt(stat.value, 10);
            } else {
              inputElem.disabled = true;
              inputElem.classList.add(
                "opacity-50",
                "cursor-not-allowed",
                "bg-gray-700",
                "text-gray-400"
              );
              inputElem.value = 0;
            }
          }
        });
      }
    } else {
      const foundWeapon = filteredItems.find(
        (item) => item.item_id === savedWeaponId
      );

      if (!foundWeapon) {
        selectedWeapon = null;
        weaponSelectButton.textContent = "Select Weapon";
        setWeaponInputsEnabled(false);
        displaySelectedWeaponStats();
      } else {
        selectedWeapon = foundWeapon;
        weaponSelectButton.textContent = foundWeapon.item_name;
        setWeaponInputsEnabled(true);
        populateAtkAndStability();
        displaySelectedWeaponStats();
        closeWeaponDropdown();
      }
    }
  }

  if (weaponATK && weaponData.selectedATK !== undefined) {
    weaponATK.value = weaponData.selectedATK;
  }

  if (weaponRefine && weaponData.selectedRefine !== undefined) {
    weaponRefine.value = weaponData.selectedRefine;
  }

  if (weaponStability && weaponData.selectedStability !== undefined) {
    weaponStability.value = weaponData.selectedStability;
  }

  updateSelectedCrysta("weapon_crysta_1", weaponData.selectedWeaponCrysta1);
  updateSelectedCrysta("weapon_crysta_2", weaponData.selectedWeaponCrysta2);

  refreshCrystaAccess();
  onUserInputChanged();
}
function restoreSubWeaponData(savedEquipment) {
  if (!savedEquipment || !savedEquipment.subWeapon) return;

  const subWeaponData = savedEquipment.subWeapon;

  if (subWeaponTypeSelect) {
    subWeaponTypeSelect.value = subWeaponData.selectedType || "";
    onSubWeaponTypeChange();
  }

  if (!subWeaponData.selectedSubWeapon) {
    selectedSubWeapon = null;
    subWeaponSelectButton.textContent = "Select Sub Weapon";
    setSubWeaponInputsEnabled(false);
    displaySelectedSubWeaponStats();
  } else {
    const savedSubWeaponId =
      subWeaponData.selectedSubWeapon.item_id ||
      subWeaponData.selectedSubWeapon;

    // Handle case where no sub weapon is selected or it's "None"
    if (
      savedSubWeaponId === "None" ||
      savedSubWeaponId === null ||
      savedSubWeaponId === ""
    ) {
      selectedSubWeapon = null;
      subWeaponSelectButton.textContent = "Select Sub Weapon";
      setSubWeaponInputsEnabled(false);
      displaySelectedSubWeaponStats();
      return;
    }

    if (
      savedSubWeaponId === "custom" ||
      subWeaponData.selectedSubWeapon.item_name
        ?.toLowerCase()
        .includes("custom")
    ) {
      selectedSubWeapon = subWeaponData.selectedSubWeapon;
      subWeaponSelectButton.textContent =
        selectedSubWeapon.item_name || "Custom Sub Weapon";
      setSubWeaponInputsEnabled(true);

      displaySelectedSubWeaponStats();

      // Handle custom stats
      if (selectedSubWeapon.stats && Array.isArray(selectedSubWeapon.stats)) {
        selectedSubWeapon.stats.forEach((stat, index) => {
          const selectElem = document.getElementById(
            `subWeaponCustomStat${index + 1}`
          );
          const inputElem = document.getElementById(
            `subWeaponCustomStat${index + 1}Input`
          );

          if (selectElem && inputElem) {
            selectElem.value =
              findAvailableStatKey(stat.stat_name, stat.stat_type) || "";

            if (selectElem.value) {
              inputElem.disabled = false;
              inputElem.classList.remove(
                "opacity-50",
                "cursor-not-allowed",
                "bg-gray-700",
                "text-gray-400"
              );
              inputElem.value = parseInt(stat.value, 10);
            } else {
              inputElem.disabled = true;
              inputElem.classList.add(
                "opacity-50",
                "cursor-not-allowed",
                "bg-gray-700",
                "text-gray-400"
              );
              inputElem.value = 0;
            }
          }
        });
      }

      if (subWeaponATKDEF && subWeaponData.selectedATKDEF !== undefined) {
        subWeaponATKDEF.value = subWeaponData.selectedATKDEF;
      }

      if (subWeaponRefine && subWeaponData.selectedRefine !== undefined) {
        subWeaponRefine.value = subWeaponData.selectedRefine;
      }

      if (subWeaponStability && subWeaponData.selectedStability !== undefined) {
        subWeaponStability.value = subWeaponData.selectedStability;
      }
      selectedSubWeapon.stats.forEach((stat) => {
        if (stat.stat_name === "BaseATK" || stat.stat_name === "BaseDEF") {
          subWeaponATKDEF.value = Number(stat.value);
        }
        if (stat.stat_name === "BaseStability") {
          subWeaponStability.value = Number(stat.value);
        }
      });
      return;
    }

    const matchedSubWeapon = filteredItems.find(
      (item) => item.item_id === savedSubWeaponId
    );

    if (!matchedSubWeapon) {
      selectedSubWeapon = null;
      subWeaponSelectButton.textContent = "Select Sub Weapon";
      setSubWeaponInputsEnabled(false);
      displaySelectedSubWeaponStats();
      return;
    }

    selectedSubWeapon = matchedSubWeapon;
    subWeaponSelectButton.textContent = matchedSubWeapon.item_name;

    // Populate stats for matched sub weapon
    populateSubAtkDefAndStability();
    displaySelectedSubWeaponStats();
  }

  if (subWeaponATKDEF && subWeaponData.selectedATKDEF !== undefined) {
    subWeaponATKDEF.value = subWeaponData.selectedATKDEF;
  }

  if (subWeaponRefine && subWeaponData.selectedRefine !== undefined) {
    subWeaponRefine.value = subWeaponData.selectedRefine;
  }

  if (subWeaponStability && subWeaponData.selectedStability !== undefined) {
    subWeaponStability.value = subWeaponData.selectedStability;
  }

  onUserInputChanged();
}

function restoreArmorData(savedEquipment) {
  if (!savedEquipment || !savedEquipment.armor) return;

  const armorData = savedEquipment.armor;

  if (armorTypeSelect) {
    armorTypeSelect.value = armorData.selectedArmorType || "";
    onArmorTypeChange();
  }

  if (!armorData.selectedArmor) {
    selectedArmor = null;
    armorSelectButton.textContent = "Select Armor";
    setArmorInputsEnabled(false);
    displaySelectedArmorStats();
  } else {
    const savedArmorId =
      armorData.selectedArmor.item_id || armorData.selectedArmor;

    if (
      savedArmorId === "None" ||
      savedArmorId === null ||
      savedArmorId === ""
    ) {
      selectedArmor = null;
      armorSelectButton.textContent = "Select Armor";
      setArmorInputsEnabled(false);
      displaySelectedArmorStats();
    } else if (
      savedArmorId === "custom" ||
      armorData.selectedArmor.item_name?.toLowerCase().includes("custom")
    ) {
      selectedArmor = armorData.selectedArmor;
      armorSelectButton.textContent = selectedArmor.item_name || "Custom Armor";
      setArmorInputsEnabled(true);

      displaySelectedArmorStats();

      if (selectedArmor.stats && Array.isArray(selectedArmor.stats)) {
        selectedArmor.stats.forEach((stat, index) => {
          const selectElem = document.getElementById(
            `armorCustomStat${index + 1}`
          );
          const inputElem = document.getElementById(
            `armorCustomStat${index + 1}Input`
          );

          if (selectElem && inputElem) {
            selectElem.value =
              findAvailableStatKey(stat.stat_name, stat.stat_type) || "";

            if (selectElem.value) {
              inputElem.disabled = false;
              inputElem.classList.remove(
                "opacity-50",
                "cursor-not-allowed",
                "bg-gray-700",
                "text-gray-400"
              );
              inputElem.value = parseInt(stat.value, 10);
            } else {
              inputElem.disabled = true;
              inputElem.classList.add(
                "opacity-50",
                "cursor-not-allowed",
                "bg-gray-700",
                "text-gray-400"
              );
              inputElem.value = 0;
            }
          }
        });
      }
    } else {
      const foundArmor = filteredItems.find(
        (item) => item.item_id === savedArmorId
      );

      if (!foundArmor) {
        selectedArmor = null;
        armorSelectButton.textContent = "Select Armor";
        setArmorInputsEnabled(false);
        displaySelectedArmorStats();
      } else {
        selectedArmor = foundArmor;
        armorSelectButton.textContent = foundArmor.item_name;
        setArmorInputsEnabled(true);
        populateArmorDEF();
        displaySelectedArmorStats();
        closeArmorDropdown();
      }
    }
  }

  if (armorRefine && armorData.selectedRefine !== undefined) {
    armorRefine.value = armorData.selectedRefine;
  }

  if (armorDEF && armorData.selectedDEF !== undefined) {
    armorDEF.value = armorData.selectedDEF;
  }

  updateSelectedCrysta("armor_crysta_1", armorData.selectedArmorCrysta1);
  updateSelectedCrysta("armor_crysta_2", armorData.selectedArmorCrysta2);

  refreshCrystaAccess();
  onUserInputChanged();
}
function restoreAdditionalData(savedEquipment) {
  if (!savedEquipment || !savedEquipment.additional) return;

  const additionalData = savedEquipment.additional;

  if (!additionalData.selectedAdditional) {
    selectedAdditional = null;
    additionalSelectButton.textContent = "Select Additional";
    setAdditionalInputsEnabled(false);
    displaySelectedAdditionalStats();
  } else {
    const savedAdditionalId =
      additionalData.selectedAdditional.item_id ||
      additionalData.selectedAdditional;

    if (
      savedAdditionalId === "None" ||
      savedAdditionalId === null ||
      savedAdditionalId === ""
    ) {
      selectedAdditional = null;
      additionalSelectButton.textContent = "Select Additional";
      setAdditionalInputsEnabled(false);
      displaySelectedAdditionalStats();
    } else if (
      savedAdditionalId === "custom" ||
      additionalData.selectedAdditional.item_name
        ?.toLowerCase()
        .includes("custom")
    ) {
      selectedAdditional = additionalData.selectedAdditional;
      additionalSelectButton.textContent =
        selectedAdditional.item_name || "Custom Additional";
      setAdditionalInputsEnabled(true);

      displaySelectedAdditionalStats();

      if (selectedAdditional.stats && Array.isArray(selectedAdditional.stats)) {
        selectedAdditional.stats.forEach((stat, index) => {
          const selectElem = document.getElementById(
            `additionalCustomStat${index + 1}`
          );
          const inputElem = document.getElementById(
            `additionalCustomStat${index + 1}Input`
          );

          if (selectElem && inputElem) {
            selectElem.value =
              findAvailableStatKey(stat.stat_name, stat.stat_type) || "";

            if (selectElem.value) {
              inputElem.disabled = false;
              inputElem.classList.remove(
                "opacity-50",
                "cursor-not-allowed",
                "bg-gray-700",
                "text-gray-400"
              );
              inputElem.value = parseInt(stat.value, 10);
            } else {
              inputElem.disabled = true;
              inputElem.classList.add(
                "opacity-50",
                "cursor-not-allowed",
                "bg-gray-700",
                "text-gray-400"
              );
              inputElem.value = 0;
            }
          }
        });
      }
    } else {
      const foundAdditional = filteredItems.find(
        (item) => item.item_id === savedAdditionalId
      );

      if (!foundAdditional) {
        selectedAdditional = null;
        additionalSelectButton.textContent = "Select Additional";
        setAdditionalInputsEnabled(false);
        displaySelectedAdditionalStats();
      } else {
        selectedAdditional = foundAdditional;
        additionalSelectButton.textContent = foundAdditional.item_name;
        setAdditionalInputsEnabled(true);
        populateAdditionalDEF();
        displaySelectedAdditionalStats();
        closeAdditionalDropdown();
      }
    }
  }

  if (additionalRefine && additionalData.selectedRefine !== undefined) {
    additionalRefine.value = additionalData.selectedRefine;
  }

  if (additionalDEF && additionalData.selectedDEF !== undefined) {
    additionalDEF.value = additionalData.selectedDEF;
  }

  updateSelectedCrysta(
    "additional_crysta_1",
    additionalData.selectedAdditionalCrysta1
  );
  updateSelectedCrysta(
    "additional_crysta_2",
    additionalData.selectedAdditionalCrysta2
  );

  refreshCrystaAccess();
  onUserInputChanged();
}
function restoreSpecialData(savedEquipment) {
  if (!savedEquipment || !savedEquipment.special) return;

  const specialData = savedEquipment.special;

  if (!specialData.selectedSpecial) {
    selectedSpecial = null;
    specialSelectLabel.textContent = "Select Special";
    setSpecialInputsEnabled(false);
    displaySelectedSpecialStats();
  } else {
    const savedSpecialId =
      specialData.selectedSpecial.item_id || specialData.selectedSpecial;

    if (
      savedSpecialId === "None" ||
      savedSpecialId === null ||
      savedSpecialId === ""
    ) {
      selectedSpecial = null;
      specialSelectLabel.textContent = "Select Special";
      setSpecialInputsEnabled(false);
      displaySelectedSpecialStats();
    } else if (
      savedSpecialId === "custom_special" ||
      specialData.selectedSpecial.item_name?.toLowerCase().includes("custom")
    ) {
      selectedSpecial = specialData.selectedSpecial;
      specialSelectLabel.textContent =
        selectedSpecial.item_name || "Custom Special";
      setSpecialInputsEnabled(true);

      displaySelectedSpecialStats();

      if (selectedSpecial.stats && Array.isArray(selectedSpecial.stats)) {
        selectedSpecial.stats.forEach((stat, index) => {
          const selectElem = document.getElementById(
            `specialCustomStat${index + 1}`
          );
          const inputElem = document.getElementById(
            `specialCustomStat${index + 1}Input`
          );

          if (selectElem && inputElem) {
            selectElem.value =
              findAvailableStatKey(stat.stat_name, stat.stat_type) || "";

            if (selectElem.value) {
              inputElem.disabled = false;
              inputElem.classList.remove(
                "opacity-50",
                "cursor-not-allowed",
                "bg-gray-700",
                "text-gray-400"
              );
              inputElem.value = parseInt(stat.value, 10);
            } else {
              inputElem.disabled = true;
              inputElem.classList.add(
                "opacity-50",
                "cursor-not-allowed",
                "bg-gray-700",
                "text-gray-400"
              );
              inputElem.value = 0;
            }
          }
        });
      }
    } else {
      const foundSpecial = filteredItems.find(
        (item) => item.item_id === savedSpecialId
      );

      if (!foundSpecial) {
        selectedSpecial = null;
        specialSelectLabel.textContent = "Select Special";
        setSpecialInputsEnabled(false);
        displaySelectedSpecialStats();
      } else {
        selectedSpecial = foundSpecial;
        specialSelectLabel.textContent = foundSpecial.item_name;
        setSpecialInputsEnabled(true);

        // Populate stats if available
        if (foundSpecial.stats && Array.isArray(foundSpecial.stats)) {
          foundSpecial.stats.forEach((stat, index) => {
            const inputElem = document.getElementById(
              `specialStat${index + 1}`
            );

            if (inputElem) {
              inputElem.value = parseInt(stat.value, 10) || 0;
            }
          });
        }

        displaySelectedSpecialStats();
        closeSpecialDropdown();
      }
    }
  }

  if (specialDEF && specialData.selectedDEF !== undefined) {
    specialDEF.value = specialData.selectedDEF;
  }

  updateSelectedCrysta("special_crysta_1", specialData.selectedSpecialCrysta1);
  updateSelectedCrysta("special_crysta_2", specialData.selectedSpecialCrysta2);

  refreshCrystaAccess();
  onUserInputChanged();
}

let viewOnly = false;

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
function generateCode(length = 30) {
  const byteLength = Math.ceil(length / 2);
  const bytes = new Uint8Array(byteLength);
  crypto.getRandomValues(bytes);
  return Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("")
    .slice(0, length);
}
let backgroundCode = generateCode();
document.addEventListener("DOMContentLoaded", () => {
  const saveLoadPanel = document.getElementById("saveLoadPanel");
  const message = document.getElementById("message");

  const sharedCode = new URLSearchParams(window.location.search).get("code");
  if (sharedCode) {
    onAppInitialized(() => {
      loadSelection(sharedCode, true);
    });
  }

  fetch("session_status.php")
    .then((res) => res.json())
    .then((data) => {
      if (data.loggedIn && !sharedCode) {
        saveLoadPanel.classList.remove("hidden");
        message.classList.add("hidden");
        loadSavedSelections();
      } else {
        saveLoadPanel.classList.add("hidden");
        if (!sharedCode) {
          message.classList.remove("hidden");
        }
      }
    });
  document.getElementById("saveNewBtn").addEventListener("click", () => {
    const name = document.getElementById("selectionName").value.trim();
    const description = document
      .getElementById("selectionDescription")
      .value.trim();
    const privacy = document.getElementById("selectionPrivacy").value;

    if (!name) return showToast("Please provide a name.", "error");
    const newCode = generateCode();
    backgroundCode = newCode;
    let equipmentData = {
      weapon: {
        selectedWeapon: selectedWeapon,
        selectedATK: weaponATK?.value,
        selectedType: mainWeaponSelect?.value,
        selectedRefine: weaponRefine?.value,
        selectedStability: weaponStability?.value,
        selectedWeaponCrysta1: selectedCrysta.weapon_crysta_1,
        selectedWeaponCrysta2: selectedCrysta.weapon_crysta_2,
      },
      subWeapon: {
        selectedSubWeapon: selectedSubWeapon,
        selectedType: subWeaponTypeSelect?.value,
        selectedATKDEF: subWeaponATKDEF?.value,
        selectedRefine: subWeaponRefine?.value,
        selectedStability: subWeaponStability?.value,
      },
      armor: {
        selectedArmor: selectedArmor,
        selectedArmorType: armorTypeSelect?.value,
        selectedDEF: armorDEF?.value,
        selectedRefine: armorRefine?.value,
        selectedArmorCrysta1: selectedCrysta.armor_crysta_1,
        selectedArmorCrysta2: selectedCrysta.armor_crysta_2,
      },
      additional: {
        selectedAdditional: selectedAdditional,
        selectedDEF: additionalDEF?.value,
        selectedRefine: additionalRefine?.value,
        selectedAdditionalCrysta1: selectedCrysta.additional_crysta_1,
        selectedAdditionalCrysta2: selectedCrysta.additional_crysta_2,
      },
      special: {
        selectedSpecial: selectedSpecial,
        selectedDEF: specialDEF?.value,
        selectedSpecialCrysta1: selectedCrysta.special_crysta_1,
        selectedSpecialCrysta2: selectedCrysta.special_crysta_2,
      },
    };
    let externalBuff = {
      avatar: selectedAvatar,
      potion: selectedPotion,
      foodbuff: selectedFoodbuff,
    };
    const passiveSkillsToSave = window.skillPassive.filter(
      (skill) => skill.skillLevel > 0
    );
    const activeSkillsToSave = window.skillActive.filter(
      (skill) => skill.skillLevel > 0
    );

    const buildData = {
      code: newCode,
      name,
      description,
      privacy,
      stats: window.CHARACTERSTATS,
      equipment: equipmentData,
      externalBuff: externalBuff,
      skillPassive: passiveSkillsToSave,
      skillActive: activeSkillsToSave,
    };

    fetch("get_function/save_stat.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(buildData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          showToast("Build saved successfully!", "success");

          loadSelection(newCode);

          loadSavedSelections();

          setTimeout(() => {
            const editPanel = document.getElementById("editPanel");
            editPanel.classList.remove("hidden");
            if (editPanel) {
              editPanel.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }, 200);
        } else {
          showToast(data.message || "Failed to save build", "error");
        }
      })
      .catch(() => {
        showToast("An unexpected error occurred.", "error");
      });
  });
  function loadSavedSelections() {
    fetch("get_function/load_stat.php")
      .then((res) => res.json())
      .then((data) => {
        const list = document.getElementById("savedSelectionsList");
        list.innerHTML = '<option value="">--- Choose Build ---</option>';

        if (data.success && Array.isArray(data.selections)) {
          data.selections.forEach((selection) => {
            const option = document.createElement("option");
            option.value = selection.code;
            option.textContent = selection.name || "(Unnamed Build)";
            list.appendChild(option);
          });
        } else {
          showToast(data.message || "No saved builds found.", "error");
        }
      })
      .catch((err) => {
        console.error(err);
        showToast("Error loading saved builds.", "error");
      });
  }

  function loadSelection(code, readOnly = false) {
    fetch(`get_function/load_stat.php?code=${code}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const selection = data.selection;

          backgroundCode = code;
          viewOnly = readOnly;

          if (selection.stats && typeof selection.stats === "object") {
            window.CHARACTERSTATS = selection.stats;
            CHARACTER_STAT = window.CHARACTERSTATS;
            updateStatInputsFromCharacterStats();
          }
          if (Array.isArray(selection.skillActive)) {
            selection.skillActive.forEach((savedSkill) => {
              const skill = window.skillActive.find(
                (s) => s.skillName === savedSkill.skillName
              );
              if (skill) {
                skill.skillLevel = savedSkill.skillLevel;
                skill.stackNumber = savedSkill.stackNumber;
              }
            });
          }
          if (Array.isArray(selection.skillPassive)) {
            selection.skillPassive.forEach((savedSkill) => {
              const skill = window.skillPassive.find(
                (s) => s.skillName === savedSkill.skillName
              );
              if (skill) {
                skill.skillLevel = savedSkill.skillLevel;
                skill.stackNumber = savedSkill.stackNumber;
              }
            });
          }
          function restoreWithDelay(equipment, callback) {
            setTimeout(() => {
              restoreWeaponData(equipment);

              restoreSubWeaponData(equipment);

              restoreArmorData(equipment);

              restoreAdditionalData(equipment);

              restoreSpecialData(equipment);
              if (callback) callback();

              if (selection.externalBuff) {
                loadExternalBuffs(selection.externalBuff);
              }

              if (typeof renderPassiveSkills === "function")
                renderPassiveSkills();

              if (typeof renderActiveSkills === "function")
                renderActiveSkills();
            }, 500);
          }
          restoreWithDelay(selection.equipment);
          if (viewOnly) {
            document.getElementById("saveLoadPanel")?.classList.add("hidden");
            document.getElementById("editPanel")?.classList.add("hidden");
            updateBuildInfo({
              name: selection.name || "Unnamed Build",
              description: selection.description || "No description provided.",
              created_at: selection.created_at || "Unknown",
              updated_at: selection.updated_at || "Unknown",
              owner: selection.owner || "Unknown",
            });
          }
          if (!viewOnly) {
            document.getElementById("selectionName").value = selection.name;
            document.getElementById("selectionDescription").value =
              selection.description || "";
            document.getElementById("selectionPrivacy").value =
              selection.privacy || "private";

            document.getElementById("editPanel").classList.remove("hidden");
            document.getElementById("editName").value = selection.name || "";
            document.getElementById("editDescription").value =
              selection.description || "";
            document.getElementById("editPrivacy").value =
              selection.privacy || "private";

            const shareInput = document.getElementById("editShareURL");
            if (shareInput) {
              shareInput.value =
                window.location.origin +
                window.location.pathname +
                "?code=" +
                code;
            }

            showToast("Loaded " + selection.name + "!", "success");
          } else {
            document.getElementById("saveLoadPanel").classList.add("hidden");
            document.getElementById("editPanel").classList.add("hidden");

            updateBuildInfo({
              name: selection.name || "Unnamed Build",
              description: selection.description || "No description provided.",
              created_at: selection.created_at || "Unknown",
              updated_at: selection.updated_at || "Unknown",
              owner: selection.owner || "Unknown",
            });

            document.getElementById("buildInfo")?.classList.remove("hidden");
          }
          setViewOnlyMode();
          onUserInputChanged();
        }
      })

      .catch((err) => {
        console.error(err);
        showToast("Error loading build", "error");
      });
  }
  document.getElementById("loadBuildBtn")?.addEventListener("click", () => {
    const code = document.getElementById("savedSelectionsList")?.value.trim();

    if (code) {
      loadSelection(code);
    } else {
      showToast("Please select a build to load.", "error");
    }
  });
  document.getElementById("copyLinkBtn").addEventListener("click", () => {
    const input = document.getElementById("editShareURL");
    input.select();
    input.setSelectionRange(0, 99999);
    document.execCommand("copy");
    showToast("Link copied to clipboard!");
  });
  document.getElementById("deleteBuildBtn")?.addEventListener("click", () => {
    const code = document.getElementById("savedSelectionsList")?.value.trim();

    if (code) {
      deleteSelection(code);
    } else {
      showToast("Please select a build to delete.", "error");
    }
  });

  function deleteSelection(code) {
    if (!confirm("Are you sure you want to delete this build?")) return;

    fetch("get_function/delete_stat.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          showToast('Build "' + data.name + '" deleted!', "success");

          const dropdown = document.getElementById("savedSelectionsList");
          if (dropdown) dropdown.value = "";

          loadSavedSelections();
        } else {
          showToast(data.message || "Error deleting build.", "error");
        }
      })
      .catch((err) => {
        console.error("Delete error:", err);
        showToast("An error occurred while deleting.", "error");
      });
  }
  document.getElementById("saveChangesBtn")?.addEventListener("click", () => {
    const code = backgroundCode;
    const name = document.getElementById("editName")?.value.trim();
    const description = document
      .getElementById("editDescription")
      ?.value.trim();
    const privacy = document.getElementById("editPrivacy")?.value;

    if (!code) return showToast("No build selected to update.", "error");
    if (!name) return showToast("Name cannot be empty.", "error");

    const equipmentData = {
      weapon: {
        selectedWeapon: selectedWeapon,
        selectedATK: weaponATK?.value,
        selectedType: mainWeaponSelect?.value,
        selectedRefine: weaponRefine?.value,
        selectedStability: weaponStability?.value,
        selectedWeaponCrysta1: selectedCrysta.weapon_crysta_1,
        selectedWeaponCrysta2: selectedCrysta.weapon_crysta_2,
      },
      subWeapon: {
        selectedSubWeapon: selectedSubWeapon,
        selectedType: subWeaponTypeSelect?.value,
        selectedATKDEF: subWeaponATKDEF?.value,
        selectedRefine: subWeaponRefine?.value,
        selectedStability: subWeaponStability?.value,
      },
      armor: {
        selectedArmor: selectedArmor,
        selectedArmorType: armorTypeSelect?.value,
        selectedDEF: armorDEF?.value,
        selectedRefine: armorRefine?.value,
        selectedArmorCrysta1: selectedCrysta.armor_crysta_1,
        selectedArmorCrysta2: selectedCrysta.armor_crysta_2,
      },
      additional: {
        selectedAdditional: selectedAdditional,
        selectedDEF: additionalDEF?.value,
        selectedRefine: additionalRefine?.value,
        selectedAdditionalCrysta1: selectedCrysta.additional_crysta_1,
        selectedAdditionalCrysta2: selectedCrysta.additional_crysta_2,
      },
      special: {
        selectedSpecial: selectedSpecial,
        selectedDEF: specialDEF?.value,
        selectedSpecialCrysta1: selectedCrysta.special_crysta_1,
        selectedSpecialCrysta2: selectedCrysta.special_crysta_2,
      },
    };

    const externalBuff = {
      avatar: selectedAvatar,
      potion: selectedPotion,
      foodbuff: selectedFoodbuff,
    };

    const passiveSkillsToSave = window.skillPassive.filter(
      (skill) => skill.skillLevel > 0
    );
    const activeSkillsToSave = window.skillActive.filter(
      (skill) => skill.skillLevel > 0
    );

    const updatedData = {
      code,
      name,
      description,
      privacy,
      stats: window.CHARACTERSTATS,
      equipment: equipmentData,
      externalBuff,
      skillPassive: passiveSkillsToSave,
      skillActive: activeSkillsToSave,
    };

    fetch("get_function/update_stat.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          showToast("Build updated successfully!", "success");
          loadSavedSelections();

          const nameInput = document.getElementById("selectionName");
          if (nameInput) nameInput.value = name;

          const descriptionInput = document.getElementById(
            "selectionDescription"
          );
          if (descriptionInput) descriptionInput.value = description;

          const privacySelect = document.getElementById("selectionPrivacy");
          if (privacySelect) privacySelect.value = privacy;
        } else {
          showToast(data.message || "Failed to update build.", "error");
        }
      })
      .catch((err) => {
        console.error(err);
        showToast("An error occurred while updating.", "error");
      });
  });
  function updateBuildInfo(data) {
    if (!viewOnly) return;

    const panel = document.getElementById("buildInfo");
    if (!panel) return;

    panel.classList.remove("hidden");

    const formatDateOnly = (dt) => {
      if (!dt) return "Unknown";
      const date = new Date(dt);
      return isNaN(date) ? "Invalid Date" : date.toISOString().slice(0, 10);
    };

    document.getElementById("buildName").textContent =
      data.name || "Unnamed Build";
    document.getElementById("buildOwner").textContent = `By ${
      data.owner || "Unknown"
    }`;
    document.getElementById("buildCreated").textContent = formatDateOnly(
      data.created_at
    );
    document.getElementById("buildUpdated").textContent = formatDateOnly(
      data.updated_at
    );
    document.getElementById("buildDescription").textContent =
      data.description || "No description provided.";
  }
});
function setViewOnlyMode() {
  if (!viewOnly) return;
  const container = document.body;

  const elements = container.querySelectorAll(
    "input, select, button, textarea"
  );

  elements.forEach((el) => {
    el.disabled = viewOnly;

    if (el.tagName.toLowerCase() === "button") {
      el.style.pointerEvents = viewOnly ? "none" : "";
      el.style.cursor = viewOnly ? "not-allowed" : "";
    }
  });
}
function showLoading() {
  const loadingScreen = document.getElementById("loading-screen");
  if (loadingScreen) {
    loadingScreen.classList.remove("opacity-0", "pointer-events-none");
    loadingScreen.classList.add("opacity-100");
  }
}

function hideLoading() {
  const loadingScreen = document.getElementById("loading-screen");
  if (loadingScreen) {
    loadingScreen.classList.remove("opacity-100");
    loadingScreen.classList.add("opacity-0", "pointer-events-none");
  }
}
