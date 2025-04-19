function updateText(id, machineName, amounts) {
  let updateString = "Amount of <b>" + machineName + "</b> needed: ";
  amounts.forEach((value, index) => {
    updateString +=
      value[0] + " for " + value[1] + " (" + Math.ceil(value[0]) + ") ";
  });
  document.getElementById(id).innerHTML = updateString;
}
function update() {
  let LDEAmount = document.getElementById("amountLDE").value;
  let CLPs = [[LDEAmount / 1.969111969, "Light Oil & Heavy Oil"]];
  let IOSs = [
    [CLPs[0][0] * 3.75, "Diesel from Light Oil"],
    [LDEAmount / 4, "Machine Oil from Heavy Oil"],
  ];
  let CDs = [[CLPs[0][0] * 16, "Coal Drills for Coal Liquefaction Plants"]];
  let PJs = [[CLPs[0][0] * 1, "Oil Pumpjacks for Coal Liquefaction Plants"]];
  let BOs = [[CLPs[0][0] * (2 / 9) + (IOSs[0][0] + IOSs[1][0]) * 4, "Steam"]];
  let DRs = [
    [
      IOSs[0][0] * 1.081081081,
      "Refined Diesel from Diesel from Industrial Oil Refineries",
    ],
  ];
  let FPs = [[LDEAmount/2,"Filtered Water for Large Diesel Engines"]]
  updateText("LDE_CLP", "Coal Liquefaction Plants", CLPs);
  updateText("LDE_FP","Filtration Plants", FPs)
  updateText("LDE_IOS", "Industrial Oil Separators", IOSs);
  updateText("LDE_BO", "Boilers", BOs);
  updateText("LDE_PJ", "Oil Pumpjacks", PJs);
  updateText("LDE_CD", "Coal Drills", CDs);
  updateText("LDE_DR", "Diesel Refineries", DRs);
}
setInterval(update, 50);
