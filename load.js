function InitDisplay() {
  document.getElementById("div-crafting").classList.add("show");
}

function ActivateSection(section) {
  if (section == "breakpoints") {
    document.getElementById("div-crafting").classList.remove("show");
    document.getElementById("div-defcalc").classList.remove("show");
    document.getElementById("div-breakpoints").classList.add("show");
  } else if (section == "crafting") {
    document.getElementById("div-breakpoints").classList.remove("show");
    document.getElementById("div-defcalc").classList.remove("show");
    document.getElementById("div-crafting").classList.add("show");
  } else if (section == "defcalc") {
    document.getElementById("div-breakpoints").classList.remove("show");
    document.getElementById("div-crafting").classList.remove("show");
    document.getElementById("div-defcalc").classList.add("show");
  }
}

function CalcEth() {
  var def = parseInt(document.getElementById("calc-input-eth").value);
  var result;
  result = def*(100/150);
  if (result != Math.floor(result)) {
    result = Math.floor(result)+1;
  }
  document.getElementById("calc-result-eth-noneth").innerHTML = result;
}

function CalcEbug() {
  var def = parseInt(document.getElementById("calc-input-ebug").value);
  var result;
  result = def*(100/150);
  if (result != Math.floor(result)) {
    result = Math.floor(result)+1;
  }
  document.getElementById("calc-result-ebug-eth").innerHTML = result;
  result = result*(100/150);
  if (result != Math.floor(result)) {
    result = Math.floor(result)+1;
  }
  document.getElementById("calc-result-ebug-noneth").innerHTML = result;
}

function CalcEd() {
  var def = parseInt(document.getElementById("calc-input-ed-defense").value);
  var ed = parseInt(document.getElementById("calc-input-ed-ed").value);
  var result;
  result = def*(100/(100 + ed));
  if (result != Math.floor(result)) {
    result = Math.floor(result)+1;
  }
  document.getElementById("calc-result-ed-defense").innerHTML = result;
}
