function InitDisplay() {
  document.getElementById("div-crafting").classList.add("show");
}

function ActivateSection(section) {
  if (section == "breakpoints") {
    document.getElementById("div-crafting").classList.remove("show");
    document.getElementById("div-ethcalc").classList.remove("show");
    document.getElementById("div-breakpoints").classList.add("show");
  } else if (section == "crafting") {
    document.getElementById("div-breakpoints").classList.remove("show");
    document.getElementById("div-ethcalc").classList.remove("show");
    document.getElementById("div-crafting").classList.add("show");
  } else if (section == "ethcalc") {
    document.getElementById("div-breakpoints").classList.remove("show");
    document.getElementById("div-crafting").classList.remove("show");
    document.getElementById("div-ethcalc").classList.add("show");
  }
}

function AddListener() {
  document.getElementById("calc-input").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
      document.getElementById("calc-submit").click();
    }
  });
}

function DoMath(input) {
  document.getElementById("calc-origin").innerHTML = document.getElementById("calc-input").value;
  var result;
  result = input*(100/150);
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
