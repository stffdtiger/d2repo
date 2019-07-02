function InitDisplay() {
  document.getElementById("div-breakpoints").classList.add("show");
  document.getElementById("button-breakpoints").classList.add("highlight");
}

function ActivateSection(section) {
  if (section == "breakpoints") {
    document.getElementById("div-crafting").classList.remove("show");
    document.getElementById("button-crafting").classList.remove("highlight");
    document.getElementById("div-cuberecipes").classList.remove("show");
    document.getElementById("button-cuberecipes").classList.remove("highlight");
    document.getElementById("div-defensecalc").classList.remove("show");
    document.getElementById("button-defensecalc").classList.remove("highlight");
    document.getElementById("div-breakpoints").classList.add("show");
    document.getElementById("button-breakpoints").classList.add("highlight");
  } else if (section == "crafting") {
    document.getElementById("div-breakpoints").classList.remove("show");
    document.getElementById("button-breakpoints").classList.remove("highlight");
    document.getElementById("div-cuberecipes").classList.remove("show");
    document.getElementById("button-cuberecipes").classList.remove("highlight");
    document.getElementById("div-defensecalc").classList.remove("show");
    document.getElementById("button-defensecalc").classList.remove("highlight");
    document.getElementById("div-crafting").classList.add("show");
    document.getElementById("button-crafting").classList.add("highlight");
  } else if (section == "cuberecipes") {
    document.getElementById("div-breakpoints").classList.remove("show");
    document.getElementById("button-breakpoints").classList.remove("highlight");
    document.getElementById("div-crafting").classList.remove("show");
    document.getElementById("button-crafting").classList.remove("highlight");
    document.getElementById("div-defensecalc").classList.remove("show");
    document.getElementById("button-defensecalc").classList.remove("highlight");
    document.getElementById("div-cuberecipes").classList.add("show");
    document.getElementById("button-cuberecipes").classList.add("highlight");
  } else if (section == "defensecalc") {
    document.getElementById("div-breakpoints").classList.remove("show");
    document.getElementById("button-breakpoints").classList.remove("highlight");
    document.getElementById("div-crafting").classList.remove("show");
    document.getElementById("button-crafting").classList.remove("highlight");
    document.getElementById("div-cuberecipes").classList.remove("show");
    document.getElementById("button-cuberecipes").classList.remove("highlight");
    document.getElementById("div-defensecalc").classList.add("show");
    document.getElementById("button-defensecalc").classList.add("highlight");
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
  result = def*(100/(100+ed));
  if (result != Math.floor(result)) {
    result = Math.floor(result)+1;
  }
  document.getElementById("calc-result-ed-defense").innerHTML = result;
}

function CalcEnhance() {
  var def = parseInt(document.getElementById("calc-input-enhance-defense").value);
  var ed = parseInt(document.getElementById("calc-input-enhance-ed").value);
  var result;
  result = def*((100+ed)/100);
  if (result != Math.floor(result)) {
    result = Math.floor(result);
  }
  document.getElementById("calc-result-enhance-defense").innerHTML = result;
}

function MakeMeFamous() {
  document.getElementById("button-contact").classList.toggle("highlight");
}
