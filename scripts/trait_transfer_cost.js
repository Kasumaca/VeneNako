const weaponTypes = [
  { code: "OHS", fee: 10000, name: "One-Handed Sword" },
  { code: "THS", fee: 6670, name: "Two-Handed Sword" },
  { code: "BOW", fee: 16670, name: "Bow" },
  { code: "BWG", fee: 12500, name: "Bowgun" },
  { code: "STF", fee: 10000, name: "Staff" },
  { code: "MD", fee: 20000, name: "Magic Device" },
  { code: "KN", fee: 14290, name: "Knuckles" },
  { code: "HB", fee: 6250, name: "Halberd" },
  { code: "KTN", fee: 25000, name: "Katana" },
  { code: "ARM", fee: 18500, name: "Armor" },
];

function populateWeaponTypeSelect() {
  const select = document.getElementById("equipType");
  select.innerHTML = "";
  weaponTypes.forEach((wp) => {
    const option = document.createElement("option");
    option.value = wp.code;
    option.textContent = wp.name;
    select.appendChild(option);
  });
}

function getFeeByCode(code) {
  const weapon = weaponTypes.find((wp) => wp.code === code);
  return weapon ? weapon.fee : 0;
}

function calculate() {
  const atkDef1 = parseFloat(document.getElementById("atkDef1").value);
  const equipType = document.getElementById("equipType").value;
  const atkDef2 = parseFloat(document.getElementById("atkDef2").value);
  const tier = parseInt(document.getElementById("tier2").value);
  const resultBox = document.getElementById("result");
  const stepsContent = document.getElementById("stepsContent");

  if (isNaN(atkDef1) || isNaN(atkDef2) || isNaN(tier)) {
    resultBox.textContent = "Please enter all required values.";
    return;
  }

  const fee = getFeeByCode(equipType);

  const receiverValue = Math.floor((atkDef1 * fee) / 10000);
  const giverValue = Math.floor((atkDef2 * fee) / 10000);
  const diff = Math.max(0, receiverValue - giverValue);

  const baseCost = Math.floor(diff ** 2 / 100) + 100;
  const tierMultiplier = tier * (25 * tier - 25) + 100;

  let finalPrice = baseCost * tierMultiplier;

  const formattedPrice = finalPrice
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  resultBox.innerHTML = `Transfer Cost: <span class="text-yellow-400">${formattedPrice}</span>`;

  // Show breakdown
  stepsContent.innerHTML = `
  <div class="mb-2 text-xs text-white/70">
    <span class="text-green-400">Receiver ATK/DEF</span>,
    <span class="text-blue-400">Giver ATK/DEF</span>,
    <span class="text-orange-400">Fee</span>,
    <span class="text-purple-400">Difference</span>,
    <span class="text-amber-400">Base Cost</span>,
    <span class="text-sky-400">Tier</span>,
    <span class="text-orange-300">Tier Multiplier</span>,
    <span class="text-yellow-300">Final Cost</span>
  </div>

  <div><strong>1. ReceiverValue</strong>: Floor((<span class="text-green-400">Receiver ATK/DEF</span> × <span class="text-orange-400">Fee</span>) ÷ 10000)<br>
  = Floor((<span class="text-green-400">${atkDef1}</span> × <span class="text-orange-400">${fee}</span>) ÷ 10000) = <span class="text-yellow-400">${receiverValue}</span></div>

  <div><strong>2. GiverValue</strong>: Floor((<span class="text-blue-400">Giver ATK/DEF</span> × <span class="text-orange-400">Fee</span>) ÷ 10000)<br>
  = Floor((<span class="text-blue-400">${atkDef2}</span> × <span class="text-orange-400">${fee}</span>) ÷ 10000) = <span class="text-yellow-400">${giverValue}</span></div>

  <div><strong>3. Difference</strong>: Max(0, <span class="text-green-400">ReceiverValue</span> - <span class="text-blue-400">GiverValue</span>)<br>
  = Max(0, ${receiverValue} - ${giverValue}) = <span class="text-purple-400">${diff}</span></div>

  <div><strong>4. Base Cost</strong>: Floor(<span class="text-purple-400">Difference</span>² ÷ 100) + 100<br>
  = Floor(${diff}² ÷ 100) + 100 = <span class="text-amber-400">${baseCost}</span></div>

  <div><strong>5. Tier Multiplier</strong>: <span class="text-sky-400">Tier</span> × (25 × <span class="text-sky-400">Tier</span> - 25) + 100<br>
  = ${tier} × (25 × ${tier} - 25) + 100 = <span class="text-orange-300">${tierMultiplier}</span></div>

  <div><strong>6. Final Cost</strong>: <span class="text-amber-400">Base Cost</span> × <span class="text-orange-300">Tier Multiplier</span><br>
  = ${baseCost} × ${tierMultiplier} = <span class="text-yellow-300 font-bold">${(
    baseCost * tierMultiplier
  ).toLocaleString()}</span> → Rounded: <span class="text-yellow-400 font-bold">${formattedPrice}</span></div>
`;
}

document.addEventListener("DOMContentLoaded", () => {
  populateWeaponTypeSelect();

  document.getElementById("atkDef1").addEventListener("input", calculate);
  document.getElementById("equipType").addEventListener("change", calculate);
  document.getElementById("atkDef2").addEventListener("input", calculate);
  document.getElementById("tier2").addEventListener("change", calculate);

  const toggleDrawerBtn = document.getElementById("toggleDrawerBtn");
  const calcDrawer = document.getElementById("calcDrawer");

  toggleDrawerBtn.addEventListener("click", () => {
    const isOpen =
      calcDrawer.style.maxHeight && calcDrawer.style.maxHeight !== "0px";

    if (isOpen) {
      // Close drawer
      calcDrawer.style.maxHeight = "0";
      toggleDrawerBtn.textContent = "Show Calculation Steps ▼";
    } else {
      calcDrawer.style.maxHeight = calcDrawer.scrollHeight + "px";
      toggleDrawerBtn.textContent = "Hide Calculation Steps ▲";
    }
  });
});
