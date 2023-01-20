function firstQuestion() {
  var year = document.getElementById("year").value;

  var int_year = Number(year);
  var flag = 0;
  if (int_year <= 35 && int_year >= 0 && year.length == 2) {
    year = "20" + year;
    flag = 1;
  } else if (int_year <= 35 && int_year >= 0 && year.length == 1) {
    year = "200" + year;
    flag = 1;
  } else if (year.length == 2 && int_year > 35 && int_year <= 99) {
    year = "19" + year;
    flag = 1;
  }

  if (flag === 1) {
    document.getElementById("answer1").value = year;
    document.getElementById("answer1").innerText = year;
  } else {
    alert("Please enter the correct input");
  }
}

function secondQuestion() {
  var yourPosition = parseInt(document.getElementById("yourPosition").value);
  var friendsPosition = parseInt(
    document.getElementById("friendsPosition").value
  );

  if (friendsPosition > 0 && yourPosition > 0) {
    if (friendsPosition <= yourPosition) {
      document.getElementById("answer2").innerText = "No";
    } else {
      if (friendsPosition - yourPosition <= 6) {
        document.getElementById("answer2").innerText = "Yes";
      } else {
        document.getElementById("answer2").innerText = "No";
      }
    }
  } else alert("Enter positive value");
}

function thirdQuestion() {
  var varFirstDigit = document.getElementById("txtFirstNumber").value;
  var varSecondDigit = document.getElementById("txtSecondNumber").value;

  if (varSecondDigit <= 0) {
    alert("Enter positive Number");
  } else {
    var arrOutput = new Array(varSecondDigit);
    for (var i = 0; i < varSecondDigit; i++) {
      arrOutput[i] = varFirstDigit * (i + 1);
    }

    var strOutput = "";
    for (var i = 0; i < varSecondDigit; i++) {
      strOutput = strOutput + " " + arrOutput[i];
    }

    document.getElementById("answer3").innerText = strOutput;
  }
}

function fourthQuestion() {
  var array_string = document.getElementById("arrayDepth").value;

  var array = array_string.split("");
  var countBracketOpen = 0,
    positionOpen = 0,
    countBracketClose = 0,
    positionClose = 0;
  var bracketArrayOpen = [],
    bracketArrayClose = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i] == "[") {
      countBracketOpen++;
      positionOpen = i;
      bracketArrayOpen.push(i);
    } else if (array[i] == "]") {
      countBracketClose++;
      positionClose = i;
      bracketArrayClose.push(i);
    }
  }

  if (bracketArrayClose[0] < bracketArrayOpen[bracketArrayOpen.length - 1]) {
    alert("Enter array in proper format");
    console.log(bracketArrayOpen[bracketArrayOpen.length - 1]);
    console.log(bracketArrayClose[0]);
  } else if (
    countBracketClose === countBracketOpen &&
    positionOpen < positionClose
  )
    document.getElementById(
      "answer4"
    ).innerText = `Depth of array is ${countBracketClose}`;
  else alert("Enter array in proper format");
}

function fifthQuestion() {
  var char1 = document.getElementById("nearestVowel").value;
  var char = char1.toLowerCase();
  var alphabets = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  var vowels = [0, 4, 8, 14, 20];
  var min = 26,
    nearestVowel;
  if (char.length > 1 || alphabets.indexOf(char) == -1) {
    alert("Enter only one letter/alphabet");
  } else {
    for (i = 0; i < vowels.length; i++) {
      if (Math.abs(alphabets.indexOf(char) - vowels[i]) < min) {
        nearestVowel = alphabets[vowels[i]];
        min = Math.abs(alphabets.indexOf(char) - vowels[i]);
      }
    }
    document.getElementById("answer5").innerText = nearestVowel;
  }
}

//function to change questions

function activeTab(currentTab, currentPanel) {
  let allTabs = document.getElementsByClassName("tab_button");
  let allPanels = document.getElementsByClassName("panel");
  let i = 0;
  while (i < allTabs.length) {
    allTabs[i].classList.remove("active");
    allPanels[i].classList.remove("active");
    i++;
  }
  currentTab.classList.add("active");
  var currentPanel = document
    .getElementById(currentPanel)
    .classList.add("active");
}

//
