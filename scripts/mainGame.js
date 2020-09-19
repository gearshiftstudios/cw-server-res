const ageUpSound = new Audio ("/client/sound/ageUp.mp3")
const shipSelectSound = new Audio ("/client/sound/frigateSelect.mp3")
const townSelectSound = new Audio ("/client/sound/townSelect.mp3")
const nationSelectMusic = new Audio ("/client/sound/music/nationSelectMusic.mp3")
const buttonClickAudio2 = new Audio ( "https://raw.githubusercontent.com/AvixSoft/CW/master/sound/buttonClick2.mp3?raw=true");
const ageOfExplorationMusic = new Audio ("/client/sound/music/ageOfExplorationMusic.mp3")
const ageOfReasonMusic = new Audio ("/client/sound/music/ageOfReasonMusic.mp3")
const industrialRevolutionMusic = new Audio ("/client/sound/music/industrialAgeMusic.mp3")
const ageOfReformMusic = new Audio ("/client/sound/music/ageOfReformMusic.mp3")
const prog = document;
const RULERNAME = "rulerName";
const CURRENTWEALTH = "currentWealth";
const ARMYPOP = "armyPop";
const CURRENTINCOME = "currentIncome";
const TURNCOUNT = "turnCount";
const CURRENTYEAR = "currentYear"
const CURRENTAGE = "currentAge"
const AGETAB = "ageTab"
const AGENAME = "ageName" 
const AGEYEARS = "ageYears"
const AGEINFO = "ageInfo"
const AGEICON = "ageIcon"
const VIS = "visibility";
const visTrue = "visible";
const visFalse = "hidden";
const visNone = "none";
const RULERICON = "rulerIcon";
const NATIONFLAG = "nationFlag"
const rulerNameJS = prog.getElementById(RULERNAME);
const currentWealthJS = prog.getElementById(CURRENTWEALTH);
const armyPopJS = prog.getElementById(ARMYPOP);
const currentIncomeJS = prog.getElementById(CURRENTINCOME);
const turnCountJS = prog.getElementById(TURNCOUNT);
const currentYearJS = prog.getElementById(CURRENTYEAR);
const currentAgeJS = prog.getElementById(CURRENTAGE);
const ageTabJS = prog.getElementById(AGETAB);
const ageNameJS = prog.getElementById(AGENAME);
const ageYearJS = prog.getElementById(AGEYEARS);
const ageInfoJS = prog.getElementById(AGEINFO);
const mapJS = prog.getElementById('module');
const ageIconJS = prog.getElementById(AGEICON);
const rulerInfoJS = prog.getElementById("rulerInfo");
const flagJS = prog.getElementById(NATIONFLAG);
const rulerJS = prog.getElementById(RULERICON);
const civInfoJS = prog.getElementById("civInfo");
let turnClock = 0;
let armyTurnCount = 0;
let year = 1600
let yearTurnCount = 0;
let age = "Age of Exploration"
let mapMaxValue = 1.5
let devMode = false
let franceMapColor = "rgba(13, 20, 132, 0.7)"
let englandMapColor = "rgba(255, 2, 2, 0.7)"
let spainMapColor = "rgba(255, 251, 0, 0.849)"
let dutchMapColor = "rgba(42, 187, 23, 0.849)"
let dutchColor = "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(22,186,36,1) 100%)"
let englandColor = "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(83,10,30,1) 0%, rgba(186,22,22,1) 100%)"
let franceColor = "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 100%)"
let spainColor = "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(186,113,22,1) 0%, rgba(215,255,0,1) 100%)"
let nativeColor = "rgba(87, 67, 2, 0.89)"
let franceMode = false
let englandMode = false
let dutchMode = false
let spainMode = false
let franceColony = false
let englandColony = false
let dutchColony = false
let spainColony = false
let ns1 = false
let ns2 = false
let ns3 = false
let ns4 = false
let ns5 = false
let ns6 = false
let englishBuy = false
let frenchBuy = false
let spanishBuy = false
let dutchBuy = false
let ns1SELECT = false
let ns2SELECT = false
let ns3SELECT = false
let ns4SELECT = false
let ns5SELECT = false
let ns6SELECT = false
let ns1Colonized = false
let ns2Colonized = false
let ns3Colonized = false
let ns4Colonized = false
let ns5Colonized = false
let ns6Colonized = false
let colonized = false
let colonizeCost = 5000
let nativeSettlement = false
let frenchUnit = false
let englandUnit = false
let spanishUnit = false
let dutchUnit = false
let selectedArmy = "..."
let pixelLoc = "px"
let frenchTurnEnded = false
let englishTurnEnded = false
let spanishTurnEnded = false
let dutchTurnEnded = false
let turnADD = 0
let frenchArmyMoves = 1
let englishArmyMoves = 1
let spanishArmyMoves = 1
let dutchArmyMoves = 1
let age1 = false
let age2 = false
let age3 = false
let age4 = false
let age5 = false
let age6 = false
let age7 = false
let quebec = false
let jamestown = false
let santoDomingo = false
let newAmsterdam = false
let frenchVictory = false
let endTurnNow = false
//Map algorythem
var dragItem = document.querySelector("#module");
var container = document.body
var active = false;
var currentX;
var currentY;
var initialX;
var initialY;
var xOffset = 0;
var yOffset = 0;


let mapLoc = {
  x: 0,
  y: 0,
  xSize: 2700,
  ySize: 1800,
  camX: 0,
  camY: 0,
  scrollSpeedX: 0,
  scrollSpeedY: 0,
}
let bindings = {
  mouse: {
    x: 0, 
    y: 0,
    buttons: [],
    actual: {
      x: 0,
      y: 0
    }
  }
};

document.onmousemove = event => {
  bindings.mouse.x = event.clientX + mapLoc.camX;
  bindings.mouse.y = event.clientY + mapLoc.camY;
  bindings.mouse.actual.x = event.clientX;
  bindings.mouse.actual.y = event.clientY;
};

document.onmousedown = event => {
  bindings.mouse.buttons[event.button] = true;
  console.log(bindings.mouse.x + " " + bindings.mouse.y);
};
document.onmouseup = event => {
  bindings.mouse.buttons[event.button] = false;
};



let cityInfo = {               
  cityName: "City Name",
  foundedYear: "1600",
  owner: "Some Nation",
  icon: "url(/client/img/somePic.xxx)"
}
let dutchObject = {
  wealth: 5000,
  income: 60,
  armyNumber: 50,
  navyNumber: 5,
  incomeADD: 1,
  defenseMult: 1.5,
}
let spainObject = {
  wealth: 5250,
  income: 40,
  armyNumber: 200,
  navyNumber: 5,
  incomeADD: 1,
  defenseMult: 1.5,
}
let englandObject = {
  wealth: 4900,
  income: 45,
  armyNumber: 300,
  navyNumber: 5,
  incomeADD: 1,
  defenseMult: 1.5,
}
let franceObject = {
  wealth: 5000,
  income: 50,
  armyNumber: 150,
  navyNumber: 5,
  incomeADD: 1,
  defenseMult: 1.5,
}
let nativesObject = {
  wealth: 10000,
  defenseMult: 1.5,
}



let ns1OwningDefMult = nativesObject.defenseMult
let ns2OwningDefMult = nativesObject.defenseMult
let ns3OwningDefMult = nativesObject.defenseMult
let ns4OwningDefMult = nativesObject.defenseMult
let ns5OwningDefMult = nativesObject.defenseMult
let ns6OwningDefMult = nativesObject.defenseMult

function displayInlineBlockTrue(){
  prog.getElementById('buildMenuButton').style.display = "inline-block"
  prog.getElementById('recruitMenuButton').style.display = "inline-block"
  prog.getElementById('colonizeMenuButton').style.display = "none"
  prog.getElementById('travelMenuButton').style.display = "none"
  prog.getElementById('attackMenuButton').style.display = "none"
  prog.getElementById('siegeMenuButton').style.display = "none"
  prog.getElementById('tradeMenuButton').style.display = "none"
}
function displayInlineBlockFalse(){
  prog.getElementById('buildMenuButton').style.display = "none"
  prog.getElementById('recruitMenuButton').style.display = "none"
  prog.getElementById('colonizeMenuButton').style.display = "none"
  prog.getElementById('travelMenuButton').style.display = "none"
  prog.getElementById('attackMenuButton').style.display = "none"
  prog.getElementById('siegeMenuButton').style.display = "inline-block"
  prog.getElementById('tradeMenuButton').style.display = "none"
}
function displayInlineBlockNatives(){
  prog.getElementById('travelMenuButton').style.display = "none"
  prog.getElementById('attackMenuButton').style.display = "none"
  prog.getElementById('colonizeMenuButton').style.display = "inline-block"
  prog.getElementById('buildMenuButton').style.display = "none"
  prog.getElementById('recruitMenuButton').style.display = "none"
  prog.getElementById('siegeMenuButton').style.display = "inline-block"
  prog.getElementById('tradeMenuButton').style.display = "inline-block"
}
function displayInlineBlockYourUnit() {
  prog.getElementById('buildMenuButton').style.display = "none"
  prog.getElementById('recruitMenuButton').style.display = "none"
  prog.getElementById('colonizeMenuButton').style.display = "none"
  prog.getElementById('travelMenuButton').style.display = "inline-block"
  prog.getElementById('attackMenuButton').style.display = "none"
  prog.getElementById('siegeMenuButton').style.display = "none"
  prog.getElementById('tradeMenuButton').style.display = "none"
}
function displayInlineBlockNotYourUnit() {
  prog.getElementById('buildMenuButton').style.display = "none"
  prog.getElementById('recruitMenuButton').style.display = "none"
  prog.getElementById('colonizeMenuButton').style.display = "none"
  prog.getElementById('travelMenuButton').style.display = "none"
  prog.getElementById('attackMenuButton').style.display = "inline-block"
  prog.getElementById('siegeMenuButton').style.display = "none"
  prog.getElementById('tradeMenuButton').style.display = "none"
}
function displayInlineBlockYourNavy() {
  prog.getElementById('buildMenuButton').style.display = "none"
  prog.getElementById('recruitMenuButton').style.display = "none"
  prog.getElementById('colonizeMenuButton').style.display = "none"
  prog.getElementById('travelMenuButton').style.display = "none"
  prog.getElementById('attackMenuButton').style.display = "none"
  prog.getElementById('siegeMenuButton').style.display = "none"
  prog.getElementById('tradeMenuButton').style.display = "inline-block"
}
function displayInlineBlockNothing() {
  prog.getElementById('buildMenuButton').style.display = "none"
  prog.getElementById('recruitMenuButton').style.display = "none"
  prog.getElementById('colonizeMenuButton').style.display = "none"
  prog.getElementById('travelMenuButton').style.display = "none"
  prog.getElementById('attackMenuButton').style.display = "none"
  prog.getElementById('siegeMenuButton').style.display = "none"
  prog.getElementById('tradeMenuButton').style.display = "none"
}
//main variables for menu

function removeElementMainMenu(mainX) {
  // Removes an element from the document
  let element = prog.getElementById("mainX");
  element.parentNode.removeChild(element);
};

function showGame() {
  prog.getElementById('module').style.backgroundImage = "url(/client/img/earthEuropa.jpg)"
  prog.getElementById('module').style.visibility = "visible"
  prog.getElementById('mainSelectionTabs').style.visibility = "visible"
  prog.getElementById('nationMenuInfo').style.visibility = "visible"
  prog.getElementById('rulerTab').style.visibility = "visible"
  // prog.getElementById('tabs').style.visibility = "visible"
  // prog.getElementById('locationsForEverything').style.visibility = "visible"
}
function removeMainX() {
  removeElementMainMenu(mainX)
}
function playSelectMusic(){
  nationSelectMusic.play()
  nationSelectMusic.loop = true
}
//musicFunctions
function enterGame() {
  setTimeout(playSelectMusic, 4000)
  setTimeout(showGame, 3000)
  prog.getElementById('topWoodLoad').style.animation = "topLoadComeDown 4s forwards"
  prog.getElementById('bottomWoodLoad').style.animation = "bottomLoadComeUp 4s forwards"
  prog.getElementById('mainTitle').style.setProperty("animation", "fadeX 1s");
  prog.getElementById('mainSubTitle').style.setProperty("animation", "fadeX 1s");
  setTimeout(removeMainX, 1500)
};

const frenchColonies = ["Le Souixseau", "Oiile Memeleaux"];
let nationInfo = {
  initValues: {
    armySize: 150,
    wealth: 5000,
    settlers: 1,
    explorers: 2,
    fleetShips: 5,
    income: 50
  },
  ruler: "Henry IV",
  nationality: "French",
  flagIcon: "url(/client/img/flagFranceIcon.png)",
  rulerIcon: "url(/client/img/rulerFranceIcon.png)",
  nationColor: "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 100%)",
};


function checkData() {
  currentAgeJS.innerHTML = age;
  rulerNameJS.innerHTML = nationInfo.ruler;
if(franceMode) {
  currentWealthJS.innerHTML = franceObject.wealth + " Gold";
  armyPopJS.innerHTML = "Garrison: " + franceObject.armyNumber;
  currentIncomeJS.innerHTML = franceObject.income + "+ GPT";
}
if(englandMode) {
  currentWealthJS.innerHTML = englandObject.wealth + " Gold";
  armyPopJS.innerHTML = "Garrison: " + englandObject.armyNumber;
  currentIncomeJS.innerHTML = englandObject.income + "+ GPT";
}
if(spainMode) {
  currentWealthJS.innerHTML = spainObject.wealth + " Gold";
  armyPopJS.innerHTML = "Garrison: " + spainObject.armyNumber;
  currentIncomeJS.innerHTML = spainObject.income + "+ GPT";
}
if(dutchMode) {
  currentWealthJS.innerHTML = dutchObject.wealth + " Gold";
  armyPopJS.innerHTML = "Garrison: " + dutchObject.armyNumber;
  currentIncomeJS.innerHTML = dutchObject.income + "+ GPT";
}
  turnCountJS.innerHTML = "Turn: " + turnClock;
  currentYearJS.innerHTML = year + " A.D.";
  mouseOutIcon()
}
function colonizeWealthCheck() {
  if(franceMode) {
    franceObject.wealth -= colonizeCost;
    franceObject.income += 5;
    currentIncomeJS.innerHTML = franceObject.income + "+ GPT";
    currentWealthJS.innerHTML = franceObject.wealth + " Gold";
  }
  if(englandMode) {
    englandObject.wealth -= colonizeCost;
    englandObject.income += 5;
    currentIncomeJS.innerHTML = englandObject.income + "+ GPT";
    currentWealthJS.innerHTML = englandObject.wealth + " Gold";
  }
  if(spainMode) {
    spainObject.wealth -= colonizeCost;
    spainObject.income += 5;
    currentIncomeJS.innerHTML = spainObject.income + "+ GPT";
    currentWealthJS.innerHTML = spainObject.wealth + " Gold";
  }
  if(dutchMode) {
    dutchObject.wealth -= colonizeCost;
    dutchObject.income += 5;
    currentIncomeJS.innerHTML = dutchObject.income + "+ GPT";
    currentWealthJS.innerHTML = dutchObject.wealth + " Gold";
  }
}

function gameStart() {
  if(year == 1600 && turnClock == 0){
  }
  let isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
}
}

function endTurn() {
  buttonClickAudio2.play()
  endTurnNow = true
  if(franceMode && endTurnNow){

    frenchTurnEnded = true
    englishTurnEnded = false
    spanishTurnEnded = false
    dutchTurnEnded = false
    turnADD += 1
    switchENG()
    armyPopJS.innerHTML = "Garrison: " + englandObject.armyNumber;
    currentWealthJS.innerHTML = englandObject.wealth + " Gold";
    currentIncomeJS.innerHTML = englandObject.income + "+ GPT";
  }
  if(englandMode && endTurnNow){

    frenchTurnEnded = false
    englishTurnEnded = true
    spanishTurnEnded = false
    dutchTurnEnded = false
    turnADD += 1
    switchSPN()
    armyPopJS.innerHTML = "Garrison: " + spainObject.armyNumber;
    currentWealthJS.innerHTML = spainObject.wealth + " Gold";
    currentIncomeJS.innerHTML = spainObject.income + "+ GPT";
  }
  if(spainMode && endTurnNow){

    frenchTurnEnded = false
    englishTurnEnded = false
    spanishTurnEnded = true
    dutchTurnEnded = false
    turnADD += 1
    switchDUT()
    armyPopJS.innerHTML = "Garrison: " + dutchObject.armyNumber;
    currentWealthJS.innerHTML = dutchObject.wealth + " Gold";
    currentIncomeJS.innerHTML = dutchObject.income + "+ GPT";
  }
  if(dutchMode && endTurnNow){

    frenchTurnEnded = false
    englishTurnEnded = false
    spanishTurnEnded = false
    dutchTurnEnded = true
    turnADD += 1
    switchFRN()
    currentWealthJS.innerHTML = franceObject.wealth + " Gold";
    armyPopJS.innerHTML = "Garrison: " + franceObject.armyNumber;
    currentIncomeJS.innerHTML = franceObject.income + "+ GPT";
  }

  if(turnADD == 4) {
    franceObject.income += franceObject.incomeADD;
    englandObject.income += englandObject.incomeADD;
    spainObject.income += spainObject.incomeADD;
    dutchObject.income += dutchObject.incomeADD;
    franceObject.wealth += franceObject.income;
    englandObject.wealth += englandObject.income;
    spainObject.wealth += spainObject.income;
    dutchObject.wealth += dutchObject.income;

    if(franceMode){
      armyPopJS.innerHTML = "Garrison: " + franceObject.armyNumber;
      currentWealthJS.innerHTML = franceObject.wealth + " Gold";
      currentIncomeJS.innerHTML = franceObject.income + "+ GPT";
    }
    if(englandMode){
      armyPopJS.innerHTML = "Garrison: " + englandObject.armyNumber;
      currentWealthJS.innerHTML = englandObject.wealth + " Gold";
      currentIncomeJS.innerHTML = englandObject.income + "+ GPT";
    }
    if(spainMode){
      armyPopJS.innerHTML = "Garrison: " + spainObject.armyNumber;
      currentWealthJS.innerHTML = spainObject.wealth + " Gold";
      currentIncomeJS.innerHTML = spainObject.income + "+ GPT";
    }
    if(dutchMode){
      armyPopJS.innerHTML = "Garrison: " + dutchObject.armyNumber;
      currentWealthJS.innerHTML = dutchObject.wealth + " Gold";
      currentIncomeJS.innerHTML = dutchObject.income + "+ GPT";
    }

    turnClock++;
    armyTurnCount++;
    year++
    armyCheck()
    yearCheck()
    ageCheck()
    turnCountJS.innerHTML = "Turn: " + turnClock;
    currentYearJS.innerHTML = year + " A.D.";
    frenchArmyMoves += 1
    englishArmyMoves += 1
    spanishArmyMoves += 1
    dutchArmyMoves += 1
    turnADD -= 4

    if(frenchArmyMoves == 2) {
      frenchArmyMoves -= 1
    }
    if(englishArmyMoves == 2) {
      englishArmyMoves -= 1
    }
    if(spanishArmyMoves == 2) {
      spanishArmyMoves -= 1
    }
    if(dutchArmyMoves == 2) {
      dutchArmyMoves -= 1
    }
  }
}

function switchENG() {
  endTurnNow = false
  ENGtest()
}
function switchFRN() {
  endTurnNow = false
  FRNtest()
}
function switchSPN() {
  endTurnNow = false
  SPNtest()
}
function switchDUT() {
  endTurnNow = false
  DUTtest()
}

function noVis() {
  ageTabJS.style.setProperty(VIS, visFalse)
}
function armyCheck() {
  if (armyTurnCount == 2) {
    franceObject.armyNumber +=50;
    englandObject.armyNumber +=60;
    spainObject.armyNumber +=55;
    dutchObject.armyNumber +=50;
    if(franceMode) {
      armyPopJS.innerHTML = "Garrison: " + franceObject.armyNumber;
      console.clear()
      console.log("franceArmy: " + franceObject.armyNumber)
      console.log("englandArmy: " + englandObject.armyNumber)
      console.log("spainArmy: " + spainObject.armyNumber)
      console.log("dutchArmy: " + dutchObject.armyNumber)
    }
    if(englandMode) {
      armyPopJS.innerHTML = "Garrison: " + englandObject.armyNumber;
      console.clear()
      console.log("franceArmy: " + franceObject.armyNumber)
      console.log("englandArmy: " + englandObject.armyNumber)
      console.log("spainArmy: " + spainObject.armyNumber)
      console.log("dutchArmy: " + dutchObject.armyNumber)
    }
    if(spainMode) {
      armyPopJS.innerHTML = "Garrison: " + spainObject.armyNumber;
      console.clear()
      console.log("franceArmy: " + franceObject.armyNumber)
      console.log("englandArmy: " + englandObject.armyNumber)
      console.log("spainArmy: " + spainObject.armyNumber)
      console.log("dutchArmy: " + dutchObject.armyNumber)
    }
    if(dutchMode) {
      armyPopJS.innerHTML = "Garrison: " + dutchObject.armyNumber;
      console.clear()
      console.log("franceArmy: " + franceObject.armyNumber)
      console.log("englandArmy: " + englandObject.armyNumber)
      console.log("spainArmy: " + spainObject.armyNumber)
      console.log("dutchArmy: " + dutchObject.armyNumber)
    }
    armyTurnCount-=2
  }
}
function yearCheck() {
  if (yearTurnCount == 1) {
    year+=1
    currentYearJS.innerHTML = year + " A.D.";
    yearTurnCount-=1
  }
}
function closeAgeTab() {
  ageTabJS.style.animation = "fadeOut 0.5s forwards"
  setTimeout(noVis, 300)
  gameStart()
}

function shipSelect() {
  shipSelectSound.play()
}
function townSelect() {
  townSelectSound.play()
  townSelectSound.volume = 5;
}
function changeMusic1() {
  ageOfReasonMusic.play()
  ageOfReasonMusic.loop = true
}
function changeMusic2() {
  ageOfReasonMusic.pause()
  industrialRevolutionMusic.play()
  industrialRevolutionMusic.loop = true
}
function changeMusic3() {
  industrialRevolutionMusic.pause()
  ageOfReformMusic.play()
  ageOfReformMusic.loop = true
}

function ageCheck() {
  if(year == 1624) {
    ageUpSound.play()
    ageIconJS.style.backgroundImage = "url(/client/img/ageOfReason.jpg)"
    prog.getElementById('iconTab').style.background = "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(22,186,36,1) 100%)"
    ageTabJS.style.setProperty(VIS, visTrue)
    age = "Age of Reason"
    ageTabJS.style.animation = "fadeIn 0.5s forwards"
    currentAgeJS.innerHTML = age;
    ageNameJS.innerHTML = age
    ageYearJS.innerHTML = "(1623 - 1696)"
    ageInfoJS.innerHTML = "The period when philosophy, science, and social thought were associated with the principles of rationalism and the celebration of the achievements of human reason."
    ageOfExplorationMusic.pause()
    setTimeout(changeMusic1, 2000)
    prog.getElementById('quebecLocation').style.backgroundImage = colony2Select_1
    prog.getElementById('jamestownLocation').style.backgroundImage = colony2Select_2
    prog.getElementById('santoDomingoLocation').style.backgroundImage = colony2Select_3
    prog.getElementById('newAmsterdamLocation').style.backgroundImage = colony2Select_4
  } 
  if (year == 1625){
    prog.getElementById('iconTab').style.backgroundImage = "url(/client/img/woodBG2.png)"
    prog.getElementById('iconTab').style.backgroundSize = "contain"
  }
  if(year == 1698) {
    ageUpSound.play()
    ageIconJS.style.backgroundImage = "url(/client/img/industrialRevolution.png)"
    prog.getElementById('iconTab').style.background = "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(22,186,36,1) 100%)"
    ageTabJS.style.setProperty(VIS, visTrue)
    age = "Industrial Revolution"
    ageTabJS.style.animation = "fadeIn 0.5s forwards"
    currentAgeJS.innerHTML = age;
    ageNameJS.innerHTML = age
    ageYearJS.innerHTML = "(1697 - 1774)"
    ageInfoJS.innerHTML = "The Industrial Revolution was a time when the manufacturing of goods moved from small shops and homes to large factories. This shift brought about changes in culture as people moved from rural areas to big cities in order to work."
    ageOfReasonMusic.pause()
    setTimeout(changeMusic2, 2500)
    prog.getElementById('quebecLocation').style.backgroundImage = colony3Select_1
    prog.getElementById('jamestownLocation').style.backgroundImage = colony3Select_2
    prog.getElementById('santoDomingoLocation').style.backgroundImage = colony3Select_3
    prog.getElementById('newAmsterdamLocation').style.backgroundImage = colony3Select_4
  }
  if (year == 1699){
    prog.getElementById('iconTab').style.backgroundImage = "url(/client/img/woodBG2.png)"
    prog.getElementById('iconTab').style.backgroundSize = "contain"
  }
  if(year == 1776) {
    ageUpSound.play()
    ageIconJS.style.backgroundImage = "url(/client/img/ageOfReform.png)"
    prog.getElementById('iconTab').style.background = "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(22,186,36,1) 100%)"
    ageTabJS.style.setProperty(VIS, visTrue)
    age = "Age of Reform"
    ageTabJS.style.animation = "fadeIn 0.5s forwards"
    currentAgeJS.innerHTML = age;
    ageNameJS.innerHTML = age
    ageYearJS.innerHTML = "(1775 - 1814)"
    ageInfoJS.innerHTML = "The Age of Revolution is the period in which a number of significant revolutionary movements occurred in most of Europe and the Americas."
    industrialRevolutionMusic.pause()
    setTimeout(changeMusic3, 2500)
    prog.getElementById('quebecLocation').style.backgroundImage = "url(/client/img/commonAnimSheet/flags/french/frenchColony4.gif)"
    prog.getElementById('jamestownLocation').style.backgroundImage = "url(/client/img/commonAnimSheet/flags/england/englishColony4.gif)"
    prog.getElementById('santoDomingoLocation').style.backgroundImage = "url(/client/img/commonAnimSheet/flags/spain/spanishColony4.gif)"
    prog.getElementById('newAmsterdamLocation').style.backgroundImage = "url(/client/img/commonAnimSheet/flags/dutch/dutchColony4.gif)"
  }
  if (year == 1777){
    prog.getElementById('iconTab').style.backgroundImage = "url(./img/woodBG2.png)"
    prog.getElementById('iconTab').style.backgroundSize = "contain"
  }
  if(year == 1816) {
    age = "Age of Modernization"
    currentAgeJS.innerHTML = age;
    ageUpSound.play()
    ageIconJS.style.backgroundImage = "url(/client/img/ageOfModernization.jpg)"
    prog.getElementById('iconTab').style.background = "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(22,186,36,1) 100%)"
    ageTabJS.style.setProperty(VIS, visTrue)
    ageTabJS.style.animation = "fadeIn 0.5s forwards"
    ageNameJS.innerHTML = age
    ageYearJS.innerHTML = "(1815 - 1863)"
    ageInfoJS.innerHTML = "The Age of Modernization is the period in which new ways of communication and transportation were introduced and used around the world."
    industrialRevolutionMusic.pause()
    setTimeout(changeMusic3, 2500)
    prog.getElementById('quebecLocation').style.backgroundImage = "url(/client/img/commonAnimSheet/flags/french/frenchColony4.gif)"
    prog.getElementById('jamestownLocation').style.backgroundImage = "url(/client/img/commonAnimSheet/flags/england/englishColony4.gif)"
    prog.getElementById('santoDomingoLocation').style.backgroundImage = "url(/client/img/commonAnimSheet/flags/spain/spanishColony4.gif)"
    prog.getElementById('newAmsterdamLocation').style.backgroundImage = "url(/client/img/commonAnimSheet/flags/dutch/dutchColony4.gif)"
  }
  if (year == 1817){
    prog.getElementById('iconTab').style.backgroundImage = "url(/client/img/woodBG2.png)"
    prog.getElementById('iconTab').style.backgroundSize = "contain"
  }
  if(year == 1865) {
    age = "Progressive Era"
    currentAgeJS.innerHTML = age;
    ageUpSound.play()
    ageIconJS.style.backgroundImage = "url(/client/img/progressiveEra.jpg)"
    prog.getElementById('iconTab').style.background = "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(22,186,36,1) 100%)"
    ageTabJS.style.setProperty(VIS, visTrue)
    ageTabJS.style.animation = "fadeIn 0.5s forwards"
    ageNameJS.innerHTML = age
    ageYearJS.innerHTML = "(1864 - 1894)"
    ageInfoJS.innerHTML = "The Progressive Era is the age the world started to advance their idea of politics and diplomacy; some governments changed their ideas of rulership which included the allowance and creation of labor unions. For most nations this time period brought them massive amounts of wealth. This was done either through colonization or imperialism."
    industrialRevolutionMusic.pause()
    setTimeout(changeMusic3, 2500)
    prog.getElementById('quebecLocation').style.backgroundImage = "url(/client/img/commonAnimSheet/flags/french/frenchColony4.gif)"
    prog.getElementById('jamestownLocation').style.backgroundImage = "url(/client/img/commonAnimSheet/flags/england/englishColony4.gif)"
    prog.getElementById('santoDomingoLocation').style.backgroundImage = "url(/client/img/commonAnimSheet/flags/spain/spanishColony4.gif)"
    prog.getElementById('newAmsterdamLocation').style.backgroundImage = "url(/client/img/commonAnimSheet/flags/dutch/dutchColony4.gif)"
  }
  if (year == 1866){
    prog.getElementById('iconTab').style.backgroundImage = "url(/client/img/woodBG2.png)"
    prog.getElementById('iconTab').style.backgroundSize = "contain"
  }
  if(year == 1896) {
    age = "Guilded Age"
    currentAgeJS.innerHTML = age;
  }
}
// const el = document.querySelector("#module");

// el.addEventListener("mousemove", (e) => {
//   el.style.backgroundPositionX = -e.offsetX + "px";
//   el.style.backgroundPositionY = -e.offsetY + "px";
// });
//___________________get keyboard input___________________
// ⇦73   ⇨39   ⇧38   ⇩40    W87   A65   S83   D68    spacebar 32
const keys = [];
document.onkeydown = function(e){
  keys[e.keyCode] = true;
  console.log(e.keyCode);
}
document.onkeyup = function(e){
  keys[e.keyCode] = false;
}
let mapScale = 0.1
// if(keys[88]){
//   prog.getElementById('module').style.transform = "scale(" + (mapScale+1) + ")";
// }
// if(keys[90]){
//   prog.getElementById('module').style.transform = "scale(" + (mapScale-1) + ")";
// }
function zoomIn() {
    // prog.getElementById('module').style.transform = "scale(" + (mapScale+=0.1) + ")";
    // if(mapScale < ){
    //   mapScale+=0.1
    // }
    // if(mapScale > mapMaxValue){
    //   mapScale-=0.1
    // }
    // console.log(mapScale)
}
function zoomOut() {
  // prog.getElementById('module').style.transform = "scale(" + (mapScale-=0.1) + ")";
  // if(mapScale < 0.25){
  //   mapScale+=0.1
  // }
  // if(mapScale > mapMaxValue){
  //   mapScale-=0.1
  // }
  console.log(mapScale)
}
function launchFullScreen(element) {
  if(element.requestFullScreen) {
    element.requestFullScreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullScreen) {
    element.webkitRequestFullScreen();
  }
}
function fullscreen() {
  launchFullScreen(document.documentElement)
}
function mouseOverIcon() {
  prog.getElementById('rulerIconForTab').style.backgroundImage = nationInfo.rulerIcon
}
function mouseOutIcon() {
  prog.getElementById('rulerIconForTab').style.backgroundImage = nationInfo.flagIcon
}
//move map for mobile
let mapTopPos = 0;
let mapLeftPos = 0;



function moveMapUp() {
    prog.getElementById('module').style.top = (mapTopPos-=60) + "px"
}
function moveMapDown() {
    prog.getElementById('module').style.top = (mapTopPos+=60) + "px"
}
function moveMapLeft() {
    prog.getElementById('module').style.left = (mapLeftPos+=60) + "px"
}
function moveMapRight() {
    prog.getElementById('module').style.left = (mapLeftPos-=60) + "px"
}



function showRealGame() {
  getTravelData()
  armyLocStart();
  checkData();
  prog.getElementById('module').style.backgroundImage = "url(/client/img/maps/EraciaSVG.svg)"
  prog.getElementById('module').style.visibility = "visible"
  prog.getElementById('mainSelectionTabs').style.visibility = "hidden"
  prog.getElementById('nationMenuInfo').style.visibility = "hidden"
  prog.getElementById('rulerTab').style.visibility = "hidden"
  prog.getElementById('locationsForEurope').style.visibility = "hidden"
  prog.getElementById('tabs').style.visibility = "visible"
  prog.getElementById('locationsForEverything').style.visibility = "visible"
  prog.getElementById('module').style.left = mapLoc.x + pixelLoc
  prog.getElementById('module').style.top = mapLoc.y + pixelLoc
  prog.getElementById('quebecLocation').style.backgroundImage = colony1Select_1
  prog.getElementById('jamestownLocation').style.backgroundImage = colony1Select_2
  prog.getElementById('santoDomingoLocation').style.backgroundImage = colony1Select_3
  prog.getElementById('newAmsterdamLocation').style.backgroundImage = colony1Select_4
  prog.getElementById('ns1Location').style.backgroundImage = nativeCity1Select_1
  prog.getElementById('ns2Location').style.backgroundImage = nativeCity1Select_2
  prog.getElementById('ns3Location').style.backgroundImage = nativeCity1Select_3
  prog.getElementById('ns4Location').style.backgroundImage = nativeCity1Select_4
  prog.getElementById('ns5Location').style.backgroundImage = nativeCity1Select_5
  prog.getElementById('ns6Location').style.backgroundImage = nativeCity1Select_6
}
function removeMainX() {
  removeElementMainMenu(mainX)
}
//musicFunctions
function getInitMusic() {
  ageOfExplorationMusic.play()
  ageOfExplorationMusic.loop = true
}
function enterRealGame() {

  setTimeout(showRealGame, 2000)
  prog.getElementById('topWoodLoad').style.animation = "topLoadComeDown2 4s forwards"
  prog.getElementById('bottomWoodLoad').style.animation = "bottomLoadComeUp2 4s forwards"
};
function ENGChoose() {
  mapMaxValue = 1
  ENGtest()
  nationSelectMusic.pause()
  setTimeout(getInitMusic, 4000)
  enterRealGame()
};
function FRNChoose() {
  mapMaxValue = 1
  FRNtest()
  nationSelectMusic.pause()
  setTimeout(getInitMusic, 4000)
  enterRealGame()
};
function SPNChoose() {
  mapMaxValue = 1
  SPNtest()
  nationSelectMusic.pause()
  setTimeout(getInitMusic, 4000)
  enterRealGame()
};
function DUTChoose() {
  mapMaxValue = 1
  DUTtest()
  nationSelectMusic.pause()
  setTimeout(getInitMusic, 4000)
  enterRealGame()

};
function changeCivBriton() {
  buttonClickAudio2.play()
  civInfoJS.innerHTML = 'Best known for there infantry numbers, the English have high Morale. Their best troops are Howitzer and Imperial Redcoat Musketeers. Your citizens though are very prone to revolt and rebellion.<br><button class"chooseCivButton" onclick="ENGChoose()">✔</button><button class"backToMenu" onclick="goBackToMenu()">✖</button>';
  rulerInfoJS.innerHTML = "King James I"
  rulerJS.style.backgroundImage = "url(/client/img/rulerEngland1.jpg)"
  flagJS.style.backgroundImage = "url(/client/img/britishFlag.jpg)"
  nationInfo.nationColor = "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(83,10,30,1) 0%, rgba(186,22,22,1) 100%)"
  // prog.getElementById('rulerTab').style.background = nationInfo.nationColor
  // prog.getElementById('nationMenuInfo').style.background = nationInfo.nationColor
};

function changeCivSpain() {
  buttonClickAudio2.play()
  civInfoJS.innerHTML = 'Your trading powers are the biggest in all the land. Your best units are the Castille Pikemen and Conquistador. But there is one problem, you start out with a very small amount of soldiers in your army.<br><button class"chooseCivButton" onclick="SPNChoose()">✔</button><button class"backToMenu" onclick="goBackToMenu()">✖</button>';
  rulerInfoJS.innerHTML = "King Phillip III"
  rulerJS.style.backgroundImage = "url(/client/img/rulerSpain1.jpg)"
  flagJS.style.backgroundImage = "url(/client/img/spanishFlag.jpg)"
  nationInfo.nationColor = "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(186,113,22,1) 0%, rgba(215,255,0,1) 100%)"
  // prog.getElementById('rulerTab').style.background = nationInfo.nationColor
  // prog.getElementById('nationMenuInfo').style.background = nationInfo.nationColor
};

function changeCivFrance() {
  buttonClickAudio2.play()
  civInfoJS.innerHTML = 'Your citizens are always loyal and will fight against your natural rival, the English, with massive enthusiasum. Your best units are the Cuirassier and Napoleonic Skirmishers. Your disadvantage is that you are very vulnerable in attacks due to your placement on the map.<br><button class"chooseCivButton" onclick="FRNChoose()">✔</button><button class"backToMenu" onclick="goBackToMenu()">✖</button>';
  rulerInfoJS.innerHTML = "King Henry IV"
  rulerJS.style.backgroundImage = "url(/client/img/rulerFrance1.jpg)"
  flagJS.style.backgroundImage = "url(/client/img/frenchFlag.jpg)"
  nationInfo.nationColor = "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 100%)"
  // prog.getElementById('rulerTab').style.background = nationInfo.nationColor
  // prog.getElementById('nationMenuInfo').style.background = nationInfo.nationColor
};

function changeCivHolland() {
  buttonClickAudio2.play()
  civInfoJS.innerHTML = 'The Dutch are best known for their trade. You have a massive trade empire which allows you to get wealth faster. The best units you have are Halberdiers and the Fluyt Frigates. The main disadvantage you have is only having one Home City.<br><button class"chooseCivButton" onclick="DUTChoose()">✔</button><button class"backToMenu" onclick="goBackToMenu()">✖</button>';
  rulerInfoJS.innerHTML = "Maurice of Nassau"
  rulerJS.style.backgroundImage = "url(/client/img/rulerDutch2.jpg)"
  flagJS.style.backgroundImage = "url(/client/img/dutchFlag.jpg)"
  nationInfo.nationColor = "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(22,186,36,1) 100%)"
  // prog.getElementById('rulerTab').style.background = nationInfo.nationColor
  // prog.getElementById('nationMenuInfo').style.background = nationInfo.nationColor
};
//change civ for test
function ENGtest() {
  checkData()
  franceMode = false
  englandMode = true
  dutchMode = false
  spainMode = false
  if(englandMode){
    console.log("englandMode activated.")
      nationInfo.ruler = "James I"
  nationInfo.nationColor = englandColor
  nationInfo.flagIcon = "url(/client/img/flagEnglandIcon.png"
  nationInfo.rulerIcon = "url(/client/img/rulerEnglandIcon.png)"
  mouseOutIcon()
  // prog.getElementById('rulerIconForTab').style.backgroundImage = nationInfo.flagIcon
  // prog.getElementById('rulerIconForTab').style.backgroundImage = nationInfo.rulerIcon
  // prog.getElementById('mapToolsTab').style.background = nationInfo.nationColor
  // prog.getElementById('iconTab').style.background = nationInfo.nationColor
  // prog.getElementById('endTurnTab').style.background = nationInfo.nationColor
  // prog.getElementById('statsTab').style.background = nationInfo.nationColor
  // prog.getElementById('historyTab').style.background = nationInfo.nationColor
  // prog.getElementById('mapMoveTab').style.background = nationInfo.nationColor
  // prog.getElementById('rulerTab').style.background = nationInfo.nationColor
  rulerNameJS.innerHTML = nationInfo.ruler;
  englishNavySelect()
  englishArmySelect()
  jamestownSelect()
  }
}
function SPNtest() {
  checkData()
  franceMode = false
  englandMode = false
  dutchMode = false
  spainMode = true
  if(spainMode){
    console.log("spainMode activated.")
    nationInfo.ruler = "Phillip III"
    nationInfo.nationColor = spainMode
    nationInfo.flagIcon = "url(/client/img/flagSpainIcon.png"
    nationInfo.rulerIcon = "url(/client/img/rulerSpainIcon.png)"
    mouseOutIcon()
    // prog.getElementById('rulerIconForTab').style.backgroundImage = nationInfo.flagIcon
    // prog.getElementById('rulerIconForTab').style.backgroundImage = nationInfo.rulerIcon
    // prog.getElementById('mapToolsTab').style.background = nationInfo.nationColor
    // prog.getElementById('iconTab').style.background = nationInfo.nationColor
    // prog.getElementById('endTurnTab').style.background = nationInfo.nationColor
    // prog.getElementById('statsTab').style.background = nationInfo.nationColor
    // prog.getElementById('historyTab').style.background = nationInfo.nationColor
    // prog.getElementById('mapMoveTab').style.background = nationInfo.nationColor
    // prog.getElementById('rulerTab').style.background = nationInfo.nationColor
    rulerNameJS.innerHTML = nationInfo.ruler;
    spanishNavySelect()
    spanishArmySelect()
    santoDomingoSelect()
  }
}
function FRNtest() {
  checkData()
  franceMode = true
  englandMode = false
  dutchMode = false
  spainMode = false
  if(franceMode){
    console.log("franceMode activated.")
    nationInfo.ruler = "Henry IV"
    nationInfo.nationColor = franceColor
    nationInfo.flagIcon = "url(/client/img/flagFranceIcon.png"
    nationInfo.rulerIcon = "url(/client/img/rulerFranceIcon.png)"
    mouseOutIcon()
    // prog.getElementById('rulerIconForTab').style.backgroundImage = nationInfo.flagIcon
    // prog.getElementById('rulerIconForTab').style.backgroundImage = nationInfo.rulerIcon
    // prog.getElementById('mapToolsTab').style.background = nationInfo.nationColor
    // prog.getElementById('iconTab').style.background = nationInfo.nationColor
    // prog.getElementById('endTurnTab').style.background = nationInfo.nationColor
    // prog.getElementById('statsTab').style.background = nationInfo.nationColor
    // prog.getElementById('historyTab').style.background = nationInfo.nationColor
    // prog.getElementById('mapMoveTab').style.background = nationInfo.nationColor
    // prog.getElementById('rulerTab').background = nationInfo.nationColor
    rulerNameJS.innerHTML = nationInfo.ruler;
    frenchNavySelect()
    frenchArmySelect()
    quebecSelect()
  }
}
function DUTtest() {
  checkData()
  franceMode = false
  englandMode = false
  dutchMode = true
  spainMode = false
  if(dutchMode){
    console.log("dutchMode activated.")
    nationInfo.ruler = "Maurice of Nassau"
    nationInfo.nationColor = dutchColor
    nationInfo.flagIcon = "url(/client/img/flagDutchIcon.png"
    nationInfo.rulerIcon = "url(/client/img/rulerDutchIcon.png)"
    mouseOutIcon()
    // prog.getElementById('rulerIconForTab').style.backgroundImage = nationInfo.flagIcon
    // prog.getElementById('rulerIconForTab').style.backgroundImage = nationInfo.rulerIcon
    // prog.getElementById('mapToolsTab').style.background = nationInfo.nationColor
    // prog.getElementById('iconTab').style.background = nationInfo.nationColor
    // prog.getElementById('endTurnTab').style.background = nationInfo.nationColor
    // prog.getElementById('statsTab').style.background = nationInfo.nationColor
    // prog.getElementById('historyTab').style.background = nationInfo.nationColor
    // prog.getElementById('mapMoveTab').style.background = nationInfo.nationColor
    // prog.getElementById('rulerTab').style.background = nationInfo.nationColor
    rulerNameJS.innerHTML = nationInfo.ruler;
    dutchNavySelect()
    dutchArmySelect()
    newAmsterdamSelect()
  }
}


function goBackToMenu() {
  buttonClickAudio2.play()
  rulerJS.style.backgroundImage = "url(/client/img/unknownRuler.png)"
  flagJS.style.backgroundImage = "url(/client/img/noFlag.jpg)"
  civInfoJS.innerHTML = "Click on civilization to see information about it";
  rulerInfoJS.innerHTML = "Click on civilization to see information about your nation's ruler."
  prog.getElementById('rulerTab').style.background = "rgba(0,0,0,0.7)"
  prog.getElementById('nationMenuInfo').style.background = "rgba(0,0,0,0.7)"
};
function devModeCheck() {
  if(devMode){
    console.log("you are now in DevMode.")
  }
  if(!devMode){
    console.log("DevMode is off.")
  }
}

let mapPosObject = {
  xPos: 0,
  yPos: 0,
  scrollSpeed: 6,
  xSize: 2700,
  ySize: 1800,
}

function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + pixelLoc + ", " + yPos + pixelLoc + ", 0)";
}

var previousFrameTime = 0

function bindingsLoop(time) {

  var FPS = Math.floor(1000/(time - previousFrameTime))
  previousFrameTime = time
  console.log(FPS)
  if(keys[88]) {
    zoomIn()
  }
  if(keys[90]) {
    zoomOut()
  }
  if(keys[69]) {
    ENGtest()
  } 
  if(keys[83]) {
    SPNtest()
  } 
  if(keys[70]) {
    FRNtest()
  } 
  if(keys[68]) {
    DUTtest()
  } 
  //___________________get keyboard input___________________
// ⇦37   ⇨39   ⇧38   ⇩40    W87   A65   S83   D68    spacebar 32

if(keys[38]) {
} 
if(keys[40]) {
} 
if(keys[37]) {
} 
if(keys[39]) {
} 

//armySelect SHORTCUT
if(keys[77]) {
    if(franceMode) {
    frenchArmySelect()
    }
    if(englandMode) {
    englishArmySelect()
    }
    if(spainMode) {
    spanishArmySelect()
    }
    if(dutchMode) {
    dutchArmySelect()
    }
}


//navySelect SHORTCUT
if(keys[78]) {
    if(franceMode) {
        frenchNavySelect()
    }
    if(englandMode) {
        englishNavySelect()
    }
    if(spainMode) {
        spanishNavySelect()
    }
    if(dutchMode) {
        dutchNavySelect()
    }
}

//capitalSelect SHORTCUT
if(keys[66]) {
    if(franceMode) {
        quebecSelect()
    }
    if(englandMode) {
        jamestownSelect()
    }
    if(spainMode) {
        santoDomingoSelect()
    }
    if(dutchMode) {
        newAmsterdamSelect()
    }
}

if (keys[192]) {
  if (devMode) {
    devMode = false
  }
  else {
    devMode = true
  }
}
if (keys[32]) {
  endTurn()
  if (!devMode) {
    keys[32] = false;
  }
}


  mapLoc.camX += mapLoc.scrollSpeedX;
  mapLoc.camY += mapLoc.scrollSpeedY;
  if (
    bindings.mouse.actual.x >= window.innerWidth - 50 ||
    bindings.mouse.actual.x <= 50 ||
    bindings.mouse.actual.y >= window.innerHeight - 50 ||
    bindings.mouse.actual.y <= 50
  ) {
    //camera movement based on mouse position at edge of screen
    mapLoc.scrollSpeedX =
      20 *
      Math.cos(
        Math.atan2(
          bindings.mouse.actual.y - window.innerHeight / 2,
          bindings.mouse.actual.x - window.innerWidth / 2
        )
      );
      mapLoc.scrollSpeedY =
      20 *
      Math.sin(
        Math.atan2(
          bindings.mouse.actual.y - window.innerHeight / 2,
          bindings.mouse.actual.x - window.innerWidth / 2
          
        )
      );
  } else {
    mapLoc.scrollSpeedX = 0;
    mapLoc.scrollSpeedY = 0;
  }
  currentX = -1 * mapLoc.camX;
  currentY = -1 * mapLoc.camY;

  if(currentX > 0) {
    currentX = -10
  }
  if(currentX + mapLoc.xSize < window.innerWidth) {
    (currentX) = ((window.innerWidth - mapLoc.xSize) + 10)
  }
  if(currentY > 0) {
    currentY = -10
  }
  if(currentY + mapLoc.ySize < window.innerHeight) {
    (currentY) = ((window.innerHeight - mapLoc.ySize) + 10)
  }

  setTranslate(currentX, currentY, dragItem);

//   $(document).mouseleave(function () {
//     console.log('out');
//     bindings.mouse.actual.x = window.innerWidth / 2
//     bindings.mouse.actual.y = window.innerHeight / 2
// });

// $(document).mouseenter(function () {
//   console.log('in');
//   bindings.mouse.actual.x = window.innerWidth / 2
//   bindings.mouse.actual.y = window.innerHeight / 2
// });

  requestAnimationFrame(bindingsLoop)
}
requestAnimationFrame(bindingsLoop)

function hideMapToolsTab() {
  buttonClickAudio2.play()
  if (document.getElementById("mapToolsTab").style.display === "none") {
    document.getElementById("mapToolsTab").style.display = "inline-block";
  } else {
    document.getElementById("mapToolsTab").style.display = "none";
  }
}
function hideMovesButtonTab() {
  buttonClickAudio2.play()
  if (document.getElementById("mapMoveTab").style.display === "none") {
    document.getElementById("mapMoveTab").style.display = "inline-block";
  } else {
    document.getElementById("mapMoveTab").style.display = "none";
  }
}
function hideRecruitTab() {
  buttonClickAudio2.play()
  if (document.getElementById("militaryUnitsTab").style.display === "none") {
    document.getElementById("militaryUnitsTab").style.display = "inline-block";
  } else {
    document.getElementById("militaryUnitsTab").style.display = "none";
  }
}

  
//native settlement selections

//european city selections
//FUNCTIONS
function londonSelect() {
  prog.getElementById('homeCitySelectTab').style.visibility = "visible"
  prog.getElementById('homeCitySelectInfo').style.visibility = "visible"
  prog.getElementById('homeCitySelectImage').style.visibility = "visible"
  prog.getElementById('homeCitySelectInfo').innerHTML = "London"
  prog.getElementById('homeCitySelectImage').style.backgroundImage = "url(/client/img/londonSelect.jpg)" 
}
function edinburghSelect() {
  prog.getElementById('homeCitySelectTab').style.visibility = "visible"
  prog.getElementById('homeCitySelectInfo').style.visibility = "visible"
  prog.getElementById('homeCitySelectImage').style.visibility = "visible"
  prog.getElementById('homeCitySelectInfo').innerHTML = "Edinburgh"
  prog.getElementById('homeCitySelectImage').style.backgroundImage = "url(/client/img/edinburghSelect.jpg)" 
}
function parisSelect() {
  prog.getElementById('homeCitySelectTab').style.visibility = "visible"
  prog.getElementById('homeCitySelectInfo').style.visibility = "visible"
  prog.getElementById('homeCitySelectImage').style.visibility = "visible"
  prog.getElementById('homeCitySelectInfo').innerHTML = "Paris"
  prog.getElementById('homeCitySelectImage').style.backgroundImage = "url(/client/img/parisSelect.jpg)" 
}
function noHomeCitySelect() {
  prog.getElementById('homeCitySelectTab').style.visibility = "hidden"
  prog.getElementById('homeCitySelectInfo').style.visibility = "hidden"
  prog.getElementById('homeCitySelectImage').style.visibility = "hidden"
}
//EVENT LISTENERS
prog.getElementById('londonEuropeLocation').addEventListener("mouseover", londonSelect)
prog.getElementById('londonEuropeLocation').addEventListener("mouseout", noHomeCitySelect)
prog.getElementById('edinburghEuropeLocation').addEventListener("mouseover", edinburghSelect)
prog.getElementById('edinburghEuropeLocation').addEventListener("mouseout", noHomeCitySelect)
prog.getElementById('parisEuropeLocation').addEventListener("mouseover", parisSelect)
prog.getElementById('parisEuropeLocation').addEventListener("mouseout", noHomeCitySelect)







  




  