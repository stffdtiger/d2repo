function ActivateSection(page, section) {
  if (page == undefined || section == undefined) { return false; }
  var element = document.getElementById(page + "-" + section);
  if (!element.classList.contains("showblock")) {
    var elements = document.getElementsByClassName("sectiondisplay showblock");
    while (elements[0]) {
      elements[0].classList.remove("showblock");
      elements = document.getElementsByClassName("sectiondisplay showblock");
    }
    element.classList.add("showblock");
  }
}

function ToggleDropdownDisplay(dropdown) {
  if (dropdown == undefined) { return false; }
  var element = document.getElementById("dropdown-" + dropdown);
  if (element.classList.contains("showblock")) {
    element.classList.remove("showblock");
  } else {
    var elements = document.getElementsByClassName("dropdowndisplay showblock");
    while (elements[0]) {
      elements[0].classList.remove("showblock");
      elements = document.getElementsByClassName("dropdowndisplay showblock");
    }
    element.classList.add("showblock");
  }
}

function DefineRuneWords(group) {
  if (group == undefined) { return false; }
  var sockets = document.getElementsByName("define-rw-" + group + "-sockets");
  var checkedSockets = "0";
  var types = document.getElementsByClassName("define-rw-" + group + "-checkbox");
  var checkedTypes = [];
  var showRows = document.getElementsByClassName("rw-" + group);
  for (let ii = 0 ; ii < sockets.length ; ii++) {
    if (sockets[ii].checked) { checkedSockets = sockets[ii].value; break; }
  }
  if (types.length) {
    for (let ii = 0 ; ii < types.length ; ii++) {
      if (types[ii].checked) { checkedTypes.push(types[ii].value); }
    }
  }
  for (let ii = 0 ; ii < showRows.length ; ii++) {
    showRows[ii].classList.remove("hide");
  }
  if (checkedSockets != "0") {
    for (let ii = 0 ; ii < showRows.length ; ii++) {
      if (!showRows[ii].classList.contains("rw-sockets-" + checkedSockets)) { showRows[ii].classList.add("hide"); }
    }
  }
  if (checkedTypes.length) {
    for (let ii = 0 ; ii < checkedTypes.length ; ii++) {
      for (let jj = 0 ; jj < showRows.length ; jj++) {
        if (!showRows[jj].classList.contains("rw-type-" + checkedTypes[ii])) { showRows[jj].classList.add("hide"); }
      }
    }
  }
}

function CalcEth() {
  var def = parseInt(document.getElementById("calc-input-eth").value);
  var result;
  result = def * 1.5;
  result = Math.floor(result);
  if (isNaN(result)) {
    document.getElementById("calc-result-eth").innerHTML = "error!";
  } else {
    document.getElementById("calc-result-eth").innerHTML = result;
  }
}

function CalcNonEth() {
  var def = parseInt(document.getElementById("calc-input-noneth").value);
  var result;
  result = def * (100 / 150);
  if (result != Math.floor(result)) {
    result = Math.floor(result) + 1;
  }
  if (isNaN(result)) {
    document.getElementById("calc-result-noneth").innerHTML = "error!";
  } else {
    document.getElementById("calc-result-noneth").innerHTML = result;
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
    document.getElementById("calc-result-beforeed").innerHTML = "error!";
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
    document.getElementById("calc-result-aftered").innerHTML = "error!";
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
    document.getElementById("calc-result-affix").innerHTML = "error!";
  } else {
    document.getElementById("calc-result-affix").innerHTML = result;
  }
}

