var opensection;

function ActivateSection(section) {
  if (opensection) {
    document.getElementById("content-" + opensection).classList.add("hidden");
    document.getElementById("notes-" + opensection).classList.add("hidden");
    document.getElementById("button-" + opensection).classList.remove("highlight");
  }
  document.getElementById("content-" + section).classList.remove("hidden");
  document.getElementById("notes-" + section).classList.remove("hidden");
  document.getElementById("button-" + section).classList.add("highlight");
  opensection = section;
}

function CalcEth() {
  var def = parseInt(document.getElementById("calc-input-eth").value);
  var result;
  result = def * (100 / 150);
  if (result != Math.floor(result)) {
    result = Math.floor(result) + 1;
  }
  if (isNaN(result)) {
    document.getElementById("calc-result-eth").innerHTML = "0";
  } else {
    document.getElementById("calc-result-eth").innerHTML = result;
  }
}

function CalcEbug() {
  var def = parseInt(document.getElementById("calc-input-ebug").value);
  var result;
  result = def * (100 / 150);
  if (result != Math.floor(result)) {
    result = Math.floor(result) + 1;
  }
  if (isNaN(result)) {
    document.getElementById("calc-result-ebug-eth").innerHTML = "0";
  } else {
    document.getElementById("calc-result-ebug-eth").innerHTML = result;
  }
  result = result * (100 / 150);
  if (result != Math.floor(result)) {
    result = Math.floor(result) + 1;
  }
  if (isNaN(result)) {
    document.getElementById("calc-result-ebug-noneth").innerHTML = "0";
  } else {
    document.getElementById("calc-result-ebug-noneth").innerHTML = result;
  }
}

function CalcBeforeEd() {
  var def = parseInt(document.getElementById("calc-input-beforeed-defense").value);
  var ed = parseInt(document.getElementById("calc-input-beforeed-ed").value);
  var result;
  result = def * (100 / (100 + ed));
  if (result != Math.floor(result)) {
    result = Math.floor(result) + 1;
  }
  if (isNaN(result)) {
    document.getElementById("calc-result-beforeed").innerHTML = "0";
  } else {
    document.getElementById("calc-result-beforeed").innerHTML = result;
  }
}

function CalcAfterEd() {
  var def = parseInt(document.getElementById("calc-input-aftered-defense").value);
  var ed = parseInt(document.getElementById("calc-input-aftered-ed").value);
  var result;
  result = def * ((100 + ed) / 100);
  if (result != Math.floor(result)) {
    result = Math.floor(result);
  }
  if (isNaN(result)) {
    document.getElementById("calc-result-aftered").innerHTML = "0";
  } else {
    document.getElementById("calc-result-aftered").innerHTML = result;
  }
}

function CalcAffixLevel() {
  var ilvl = parseInt(document.getElementById("calc-input-affix-ilvl").value);
  var qlvl = parseInt(document.getElementById("calc-input-affix-qlvl").value);
  var result;
  if (ilvl > 99) {
    ilvl = 99;
  }
  if (qlvl > ilvl) {
    ilvl = qlvl;
  }
  if (ilvl < (99 - Math.floor(qlvl / 2))) {
    result = ilvl - Math.floor(qlvl / 2);
  } else {
    result = ilvl * 2 - 99;
  }
  if (isNaN(result)) {
    document.getElementById("calc-result-affix").innerHTML = "0";
  } else {
    document.getElementById("calc-result-affix").innerHTML = result;
  }
}

function MakeMeFamous() {
  document.getElementById("button-contact").classList.toggle("highlight");
}
