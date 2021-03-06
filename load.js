function ActivateSection(section) {
  var element = document.getElementById("content-" + section);
  if (!element.classList.contains("showblock")) {
    var elements = document.getElementsByClassName("display showblock");
    while (elements[0]) {
      elements[0].classList.remove("showblock");
      elements = document.getElementsByClassName("display showblock");
    }
    elements = document.getElementsByClassName("display highlight");
    while (elements[0]) {
      elements[0].classList.remove("highlight");
      elements = document.getElementsByClassName("display highlight");
    }
    document.getElementById("content-" + section).classList.add("showblock");
    document.getElementById("notes-" + section).classList.add("showblock");
    document.getElementById("button-" + section).classList.add("highlight");
  }
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
