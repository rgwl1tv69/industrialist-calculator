function updateText(id, machineName, amounts) {
  let updateString = "Amount of <b>" + machineName + "</b> needed: ";
  amounts.forEach((value, index) => {
    updateString +=
      value[0] + " for " + value[1] + " (" + Math.ceil(value[0]) + ") ";
  });
  document.getElementById(id).innerHTML = updateString;
}
function buildFractionString(n) {
  n = new Number(n);
  let result = [];
  for (let i = n; i >= 1; i--) {
    result.push(Math.floor((100 / i) * 1000000) / 1000000);
  }
  return result.join("% ");
}
function update() {
  let LDEAmount = new Number(document.getElementById("amountLDE").value);
  let CLPs = [[LDEAmount / 1.969111969, "Light Oil & Heavy Oil"]];
  let IOSs = [
    [CLPs[0][0] * 3.75, "Diesel from Light Oil"],
    [LDEAmount / 4, "Machine Oil from Heavy Oil"],
  ];
  let CDs = [[CLPs[0][0] * 16, "Coal for CLP"]];
  let PJs = [[CLPs[0][0] * 1, "Oil for CLP"]];
  let BOs = [
    [
      CLPs[0][0] * (2 / 9) +
        (IOSs[0][0] + IOSs[1][0]) * 0.044444444444444444444444,
      "Steam",
    ],
  ];
  let DRs = [
    [
      IOSs[0][0] * 1.081081081,
      "Refined Diesel from Diesel from Industrial Oil Refineries",
    ],
  ];
  let FPs = [[LDEAmount / 2, "Filtered Water for Large Diesel Engines"]];
  updateText("LDE_CLP", "Coal Liquefaction Plants", CLPs);
  updateText("LDE_FP", "Filtration Plants", FPs);
  updateText("LDE_IOS", "Industrial Oil Separators", IOSs);
  updateText("LDE_BO", "Boilers", BOs);
  updateText("LDE_PJ", "Large Pumpjacks", PJs);
  updateText("LDE_CD", "Coal Drills", CDs);
  updateText("LDE_DR", "Diesel Refineries", DRs);
  // VCs
  document.getElementById("VCTable").innerHTML = buildFractionString(
    document.getElementById("amountVC").value
  );
  // Modular Diesel Engines
  let MDEAmount = new Number(document.getElementById("amountMDE").value);
  DRs = [
    [MDEAmount / 3.875, "Refined Diesel"],
    [MDEAmount / 3.875, "Diesel"],
    [MDEAmount / 3.875, "Poor Quality Diesel"],
  ];
  let COSs = [[(DRs[2][0] * 2) / 3, "Crude Diesel"]];
  let LBs = [[COSs[0][0] * 2, "Hot Crude Oil"]];
  PJs = [[LBs[0][0] * 0.75, "Crude Oil"]];
  updateText("MDE_DR", "Diesel Refineries", DRs);
  updateText("MDE_COS", "Crude Oil Separators", COSs);
  updateText("MDE_LB", "Liquid Boilers", LBs);
  updateText("MDE_PJ", "Large Pumpjacks", PJs);
  let IP2Amount = new Number(document.getElementById("amountIP2").value);
  let PMK2s = [[IP2Amount / 0.75, "Iron Plate<sup>2</sup>s"]];
  let ISs = [[IP2Amount / 0.75, "Iron Plates"]];
  BOs = [[ISs[0][0] / 3, "Steam for Industrial Sawmills"]];
  let CHEM = [
    [IP2Amount / 20, "Treated Raw Iron for Industrial Electric Furnaces"],
  ];
  let IEFs = [[IP2Amount, "Liquid Iron for Ingot Molders (1:1)"]];
  let IDs = [[CHEM[0][0] * 60, "Raw Iron for Chemical Reactor"]];
  let HCL = [[(CHEM[0][0] * 1) / 5, "Chemical Reactor"]];
  updateText("IP2_PMK2","Press MK2s",PMK2s)
  updateText("IP2_ISM","Industrial Sawmills",ISs)
  updateText("IP2_BO","Boilers",BOs)
  updateText("IP2_CHEM","Chemical Reactors",CHEM)
  updateText("IP2_IEF","Industrial Electric Furnaces",IEFs)
  updateText("IP2_ID","Iron Drills",IDs)
  updateText("IP2_HCl","Hydrochloric Acid",HCL)
}
setInterval(update, 50);

let cbtn = Array.from(document.getElementsByClassName("collapsetoggle"));

cbtn.forEach(function (v, i) {
  v.addEventListener("click", () => {
    document.getElementById(v.dataset.name).classList.toggle("open");
  });
});
