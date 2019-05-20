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

function AddListeners() {
  document.getElementById("calc-input-eth").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
      document.getElementById("calc-submit-eth").click();
    }
  });
  document.getElementById("calc-input-ed-defense").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
      document.getElementById("calc-submit-ed").click();
    }
  });
  document.getElementById("calc-input-ed-ed").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
      document.getElementById("calc-submit-ed").click();
    }
  });
}

function CalcEth(def) {
  document.getElementById("calc-origin-eth").innerHTML = def;
  if (def != "" && !isNaN(def)) {
    var result;
    result = parseInt(def)*(100/150);
    if (result != Math.floor(result)) {
      result = Math.floor(result)+1;
    }
    document.getElementById("calc-result-eth").innerHTML = result;
    result = result*(100/150);
    if (result != Math.floor(result)) {
      result = Math.floor(result)+1;
    }
    document.getElementById("calc-result-noneth").innerHTML = result;
  }
}

function CalcEd(def, ed) {
  document.getElementById("calc-origin-ed-defense").innerHTML = def;
  document.getElementById("calc-origin-ed-ed").innerHTML = ed;
  if (def != "" && ed != "" && !isNaN(def) && !isNaN(ed)) {
    var result;
    result = parseInt(def)*(100/(100 + parseInt(ed)));
    if (result != Math.floor(result)) {
      result = Math.floor(result)+1;
    }
    document.getElementById("calc-result-ed").innerHTML = result;
  }
}
