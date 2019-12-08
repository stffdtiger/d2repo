var opensection = "breakpoints";

function InitDisplay() {
  document.getElementById("div-breakpoints").classList.add("show");
  document.getElementById("button-breakpoints").classList.add("highlight");
}

function ActivateSection(section) {
  document.getElementById("div-"+opensection).classList.remove("show");
  document.getElementById("div-"+opensection).classList.remove("highlight");
  document.getElementById("div-"+section).classList.add("show");
  document.getElementById("div-"+section).classList.add("highlight");
  opensection = section;
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
