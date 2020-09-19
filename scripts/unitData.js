
//city Army Location for CSS
let locations = {
    quebec: {
        left: 840,
        top: 1100,
    },
    jamestown: {
        left: 2250,
        top: 700,
    },
    santoDomingo: {
        left: 540,
        top: 925,
    },
    newAmsterdam: {
        left: 1575,
        top: 125,
    },
    ns1: {
        left: 2375,
        top: 975,
    },
    ns2: {
        left: 1750,
        top: 1200,
    },
    ns3: {
        left: 1600,
        top: 700,
    },
    ns4: {
        left: 1500,
        top: 1000,
    },
    ns5: {
        left: 2000,
        top: 600,
    },
}


let frenchArmy = {
    location: {
        quebec: true,
        jamestown: false,
        newAmsterdam: false,
        santoDomingo: false,
        ns1: false,
        ns2: false,
        ns3: false,
        ns4: false,
        ns5: false,
        ns6: false,
    },
    unitType: {
        musketmen: true,
        guardMusketmen: false,
        imperialMusketmen: false,
        riflemen: false,
        imperialRiflemen: false,
        worldClassInfantry: false,  
    },
    defenderInfo: {
        trainNumber: 100,
        unitCost: 250,
    },
    unitCount: 150,
    icon: "url(/client/img/commonAnimSheet/units/musk/frenchMusk.gif)",
    unitName: "Musketeers",
    owner: "France",
    trainNumber: 250,
    unitCost: 300,
    attackMult: 1,
    defenseMult: 0.75,
    siegeMult: 0.5,
    attackMode: false,
    defenseMode: false,
    siegeMode: false,
}
let frenchNavy = {
    location: {
        quebec: true,
        jamestown: false,
        newAmsterdam: false,
        santoDomingo: false,
    },
    unitCount: 5,
    icon: "url(/client/img/commonAnimSheet/units/frigates/frenchFrigate1_banner.gif)",
    unitName: "Galleon",
    owner: "France",
    trainNumber: 1,
    unitCost: 250,
    incomeADD: 4,
}
let englishArmy = {
    location: {
        quebec: false,
        jamestown: true,
        newAmsterdam: false,
        santoDomingo: false,
        ns1: false,
        ns2: false,
        ns3: false,
        ns4: false,
        ns5: false,
        ns6: false,
    },
    unitType: {
        musketmen: true,
        guardMusketmen: false,
        imperialMusketmen: false,
        riflemen: false,
        imperialRiflemen: false,
        worldClassInfantry: false,  
      },
      defenderInfo: {
        trainNumber: 100,
        unitCost: 250,
    },
    unitCount: 150,
    icon: "url(/client/img/commonAnimSheet/units/musk/englandArmy.gif)",
    unitName: "Musketeers",
    owner: "England",
    trainNumber: 250,
    unitCost: 300,
    attackMult: 1,
    defenseMult: 0.75,
    siegeMult: 0.5,
    attackMode: false,
    defenseMode: false,
    siegeMode: false,
}
let englishNavy = {
    location: {
        quebec: false,
        jamestown: true,
        newAmsterdam: false,
        santoDomingo: false,
    },
    unitCount: 5,
    icon: "url(/client/img/commonAnimSheet/units/frigates/britishFrigate1_banner.gif)",
    unitName: "Galleon",
    owner: "England",
    trainNumber: 1,
    unitCost: 250,
    incomeADD: 4,
}
let spanishArmy = {
    location: {
        quebec: false,
        jamestown: false,
        newAmsterdam: false,
        santoDomingo: true,
        ns1: false,
        ns2: false,
        ns3: false,
        ns4: false,
        ns5: false,
        ns6: false,
    },
    unitType: {
        musketmen: true,
        guardMusketmen: false,
        imperialMusketmen: false,
        riflemen: false,
        imperialRiflemen: false,
        worldClassInfantry: false,  
      },
      defenderInfo: {
        trainNumber: 100,
        unitCost: 250,
    },
    unitCount: 150,
    icon: "url(/client/img/commonAnimSheet/units/musk/spanishArmy.gif)",
    unitName: "Musketeers",
    owner: "Spain",
    trainNumber: 250,
    unitCost: 300,
    attackMult: 1,
    defenseMult: 0.75,
    siegeMult: 0.5,
    attackMode: false,
    defenseMode: false,
    siegeMode: false,
}
let spanishNavy = {
    location: {
        quebec: false,
        jamestown: false,
        newAmsterdam: false,
        santoDomingo: true,
    },
    unitCount: 5,
    icon: "url(/client/img/commonAnimSheet/units/frigates/spanishFrigate1_banner.gif)",
    unitName: "Galleon",
    owner: "Spain",
    trainNumber: 1,
    unitCost: 250,
    incomeADD: 4,
}
let dutchArmy = {
    location: {
        quebec: false,
        jamestown: false,
        newAmsterdam: true,
        santoDomingo: false,
        ns1: false,
        ns2: false,
        ns3: false,
        ns4: false,
        ns5: false,
        ns6: false,
    },
    unitType: {
        musketmen: true,
        guardMusketmen: false,
        imperialMusketmen: false,
        riflemen: false,
        imperialRiflemen: false,
        worldClassInfantry: false,  
      },
      defenderInfo: {
        trainNumber: 100,
        unitCost: 250,
    },
    unitCount: 150,
    icon: "url(/client/img/commonAnimSheet/units/musk/dutchArmy.gif)",
    unitName: "Musketeers",
    owner: "Netherlands",
    trainNumber: 250,
    unitCost: 300,
    attackMult: 1,
    defenseMult: 0.75,
    siegeMult: 0.5,
    attackMode: false,
    defenseMode: false,
    siegeMode: false,
}
let dutchNavy = {
    location: {
        quebec: false,
        jamestown: false,
        newAmsterdam: true,
        santoDomingo: false,
    },
    unitCount: 5,
    icon: "url(/client/img/commonAnimSheet/units/frigates/dutchFrigate1_banner.gif)",
    unitName: "Galleon",
    owner: "Netherlands",
    trainNumber: 1,
    unitCost: 250,
    incomeADD: 4,
}
function frenchArmySelect() {
    selectedArmy = "frenchArmy"
    frenchUnit = true
    englandUnit = false
    spanishUnit = false
    dutchUnit = false
    prog.getElementById('cityTab').style.visibility = visTrue
    prog.getElementById('cityName').innerHTML = frenchArmy.unitName
    prog.getElementById('cityOwner').innerHTML = frenchArmy.owner
    prog.getElementById('cityIcon').style.backgroundImage = frenchArmy.icon
    prog.getElementById('cityIcon').style.height = "80px"
    console.clear()
    if(frenchArmy.location.quebec)console.log("location of french army is in quebec")
    if(frenchArmy.location.jamestown)console.log("location of french army is in jamestown")
    if(frenchArmy.location.newAmsterdam)console.log("location of french army is in new amsterdam")
    if(frenchArmy.location.santoDomingo)console.log("location of french army is in santo domingo")
    if(frenchArmy.location.ns1)console.log("location of french army is in ns1")
    if(frenchArmy.location.ns2)console.log("location of french army is in ns2")
    if(frenchArmy.location.ns3)console.log("location of french army is in ns3")
    if(frenchArmy.location.ns4)console.log("location of french army is in ns4")
    if(frenchArmy.location.ns5)console.log("location of french army is in ns5")
    if(frenchArmy.location.ns6)console.log("location of french army is in ns6")
    if(englandMode && englandUnit)displayInlineBlockYourUnit()
    if(englandMode && !englandUnit)displayInlineBlockNotYourUnit()
    if(franceMode && frenchUnit)displayInlineBlockYourUnit()
    if(franceMode && !frenchUnit)displayInlineBlockNotYourUnit()
    if(spainMode && spanishUnit)displayInlineBlockYourUnit()
    if(spainMode && !spanishUnit)displayInlineBlockNotYourUnit()
    if(dutchMode && dutchUnit)displayInlineBlockYourUnit()
    if(dutchMode && !dutchUnit)displayInlineBlockNotYourUnit()
}
function frenchNavySelect() {
    frenchUnit = true
    englandUnit = false
    spanishUnit = false
    dutchUnit = false
    prog.getElementById('cityTab').style.visibility = visTrue
    prog.getElementById('cityName').innerHTML = frenchNavy.unitName
    prog.getElementById('cityOwner').innerHTML = frenchNavy.owner
    prog.getElementById('cityIcon').style.backgroundImage = frenchNavy.icon
    prog.getElementById('cityIcon').style.height = "80px"
    if(englandMode && englandUnit)displayInlineBlockYourNavy()
    if(englandMode && !englandUnit)displayInlineBlockNothing()
    if(franceMode && frenchUnit)displayInlineBlockYourNavy()
    if(franceMode && !frenchUnit)displayInlineBlockNothing()
    if(spainMode && spanishUnit)displayInlineBlockYourNavy()
    if(spainMode && !spanishUnit)displayInlineBlockNothing()
    if(dutchMode && dutchUnit)displayInlineBlockYourNavy()
    if(dutchMode && !dutchUnit)displayInlineBlockNothing()
    shipSelect()
}
function englishArmySelect() {
    selectedArmy = "englishArmy"
    frenchUnit = false
    englandUnit = true
    spanishUnit = false
    dutchUnit = false
    prog.getElementById('cityTab').style.visibility = visTrue
    prog.getElementById('cityName').innerHTML = englishArmy.unitName
    prog.getElementById('cityOwner').innerHTML = englishArmy.owner
    prog.getElementById('cityIcon').style.backgroundImage = englishArmy.icon
    prog.getElementById('cityIcon').style.height = "80px"
    console.clear()
    if(englishArmy.location.quebec)console.log("location of englishArmy is in quebec")
    if(englishArmy.location.jamestown)console.log("location of englishArmy is in jamestown")
    if(englishArmy.location.newAmsterdam)console.log("location of englishArmy is in new amsterdam")
    if(englishArmy.location.santoDomingo)console.log("location of englishArmy is in santo domingo")
    if(englishArmy.location.ns1)console.log("location of englishArmy is in ns1")
    if(englishArmy.location.ns2)console.log("location of englishArmy is in ns2")
    if(englishArmy.location.ns3)console.log("location of englishArmy is in ns3")
    if(englishArmy.location.ns4)console.log("location of englishArmy is in ns4")
    if(englishArmy.location.ns5)console.log("location of englishArmy is in ns5")
    if(englishArmy.location.ns6)console.log("location of englishArmy is in ns6")
    if(englandMode && englandUnit)displayInlineBlockYourUnit()
    if(englandMode && !englandUnit)displayInlineBlockNotYourUnit()
    if(franceMode && frenchUnit)displayInlineBlockYourUnit()
    if(franceMode && !frenchUnit)displayInlineBlockNotYourUnit()
    if(spainMode && spanishUnit)displayInlineBlockYourUnit()
    if(spainMode && !spanishUnit)displayInlineBlockNotYourUnit()
    if(dutchMode && dutchUnit)displayInlineBlockYourUnit()
    if(dutchMode && !dutchUnit)displayInlineBlockNotYourUnit()
}
function englishNavySelect() {
    frenchUnit = false
    englandUnit = true
    spanishUnit = false
    dutchUnit = false
    prog.getElementById('cityTab').style.visibility = visTrue
    prog.getElementById('cityName').innerHTML = englishNavy.unitName
    prog.getElementById('cityOwner').innerHTML = englishNavy.owner
    prog.getElementById('cityIcon').style.backgroundImage = englishNavy.icon
    prog.getElementById('cityIcon').style.height = "80px"
    if(englandMode && englandUnit)displayInlineBlockYourNavy()
    if(englandMode && !englandUnit)displayInlineBlockNothing()
    if(franceMode && frenchUnit)displayInlineBlockYourNavy()
    if(franceMode && !frenchUnit)displayInlineBlockNothing()
    if(spainMode && spanishUnit)displayInlineBlockYourNavy()
    if(spainMode && !spanishUnit)displayInlineBlockNothing()
    if(dutchMode && dutchUnit)displayInlineBlockYourNavy()
    if(dutchMode && !dutchUnit)displayInlineBlockNothing()
    shipSelect()
}
function spanishArmySelect() {
    selectedArmy = "spanishArmy"
    frenchUnit = false
    englandUnit = false
    spanishUnit = true
    dutchUnit = false
    prog.getElementById('cityTab').style.visibility = visTrue
    prog.getElementById('cityName').innerHTML = spanishArmy.unitName
    prog.getElementById('cityOwner').innerHTML = spanishArmy.owner
    prog.getElementById('cityIcon').style.backgroundImage = spanishArmy.icon
    prog.getElementById('cityIcon').style.height = "80px"
    console.clear()
    if(spanishArmy.location.quebec)console.log("location of spanishArmy is in quebec")
    if(spanishArmy.location.jamestown)console.log("location of spanishArmy is in jamestown")
    if(spanishArmy.location.newAmsterdam)console.log("location of spanishArmy is in new amsterdam")
    if(spanishArmy.location.santoDomingo)console.log("location of spanishArmy is in santo domingo")
    if(spanishArmy.location.ns1)console.log("location of spanishArmy is in ns1")
    if(spanishArmy.location.ns2)console.log("location of spanishArmy is in ns2")
    if(spanishArmy.location.ns3)console.log("location of spanishArmy is in ns3")
    if(spanishArmy.location.ns4)console.log("location of spanishArmy is in ns4")
    if(spanishArmy.location.ns5)console.log("location of spanishArmy is in ns5")
    if(spanishArmy.location.ns6)console.log("location of spanishArmy is in ns6")
    if(englandMode && englandUnit)displayInlineBlockYourUnit()
    if(englandMode && !englandUnit)displayInlineBlockNotYourUnit()
    if(franceMode && frenchUnit)displayInlineBlockYourUnit()
    if(franceMode && !frenchUnit)displayInlineBlockNotYourUnit()
    if(spainMode && spanishUnit)displayInlineBlockYourUnit()
    if(spainMode && !spanishUnit)displayInlineBlockNotYourUnit()
    if(dutchMode && dutchUnit)displayInlineBlockYourUnit()
    if(dutchMode && !dutchUnit)displayInlineBlockNotYourUnit()
}
function spanishNavySelect() {
    frenchUnit = false
    englandUnit = false
    spanishUnit = true
    dutchUnit = false
    prog.getElementById('cityTab').style.visibility = visTrue
    prog.getElementById('cityName').innerHTML = spanishNavy.unitName
    prog.getElementById('cityOwner').innerHTML = spanishNavy.owner
    prog.getElementById('cityIcon').style.backgroundImage = spanishNavy.icon
    prog.getElementById('cityIcon').style.height = "80px"
    if(englandMode && englandUnit)displayInlineBlockYourNavy()
    if(englandMode && !englandUnit)displayInlineBlockNothing()
    if(franceMode && frenchUnit)displayInlineBlockYourNavy()
    if(franceMode && !frenchUnit)displayInlineBlockNothing()
    if(spainMode && spanishUnit)displayInlineBlockYourNavy()
    if(spainMode && !spanishUnit)displayInlineBlockNothing()
    if(dutchMode && dutchUnit)displayInlineBlockYourNavy()
    if(dutchMode && !dutchUnit)displayInlineBlockNothing()
    shipSelect()
}
function dutchArmySelect() {
    selectedArmy = "dutchArmy"
    frenchUnit = false
    englandUnit = false
    spanishUnit = false
    dutchUnit = true
    prog.getElementById('cityTab').style.visibility = visTrue
    prog.getElementById('cityName').innerHTML = dutchArmy.unitName
    prog.getElementById('cityOwner').innerHTML = dutchArmy.owner
    prog.getElementById('cityIcon').style.backgroundImage = dutchArmy.icon
    prog.getElementById('cityIcon').style.height = "80px"
    console.clear()
    if(dutchArmy.location.quebec)console.log("location of dutchArmy is in quebec")
    if(dutchArmy.location.jamestown)console.log("location of dutchArmy is in jamestown")
    if(dutchArmy.location.newAmsterdam)console.log("location of dutchArmy is in new amsterdam")
    if(dutchArmy.location.santoDomingo)console.log("location of dutchArmy is in santo domingo")
    if(dutchArmy.location.ns1)console.log("location of dutchArmy is in ns1")
    if(dutchArmy.location.ns2)console.log("location of dutchArmy is in ns2")
    if(dutchArmy.location.ns3)console.log("location of dutchArmy is in ns3")
    if(dutchArmy.location.ns4)console.log("location of dutchArmy is in ns4")
    if(dutchArmy.location.ns5)console.log("location of dutchArmy is in ns5")
    if(dutchArmy.location.ns6)console.log("location of dutchArmy is in ns6")
    if(englandMode && englandUnit)displayInlineBlockYourUnit()
    if(englandMode && !englandUnit)displayInlineBlockNotYourUnit()
    if(franceMode && frenchUnit)displayInlineBlockYourUnit()
    if(franceMode && !frenchUnit)displayInlineBlockNotYourUnit()
    if(spainMode && spanishUnit)displayInlineBlockYourUnit()
    if(spainMode && !spanishUnit)displayInlineBlockNotYourUnit()
    if(dutchMode && dutchUnit)displayInlineBlockYourUnit()
    if(dutchMode && !dutchUnit)displayInlineBlockNotYourUnit()
}
function dutchNavySelect() {
    frenchUnit = false
    englandUnit = false
    spanishUnit = false
    dutchUnit = true
    prog.getElementById('cityTab').style.visibility = visTrue
    prog.getElementById('cityName').innerHTML = dutchNavy.unitName
    prog.getElementById('cityOwner').innerHTML = dutchNavy.owner
    prog.getElementById('cityIcon').style.backgroundImage = dutchNavy.icon
    prog.getElementById('cityIcon').style.height = "80px"
    if(englandMode && englandUnit)displayInlineBlockYourNavy()
    if(englandMode && !englandUnit)displayInlineBlockNothing()
    if(franceMode && frenchUnit)displayInlineBlockYourNavy()
    if(franceMode && !frenchUnit)displayInlineBlockNothing()
    if(spainMode && spanishUnit)displayInlineBlockYourNavy()
    if(spainMode && !spanishUnit)displayInlineBlockNothing()
    if(dutchMode && dutchUnit)displayInlineBlockYourNavy()
    if(dutchMode && !dutchUnit)displayInlineBlockNothing()
    shipSelect()
}


function armyMenuButton() {
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
function navyMenuButton() {
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
function capitalMenuButton() {
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
function armyLocStart() {
    //french
    prog.getElementById('frenchArmy').style.left = locations.quebec.left + pixelLoc
    prog.getElementById('frenchArmy').style.top = locations.quebec.top + pixelLoc
    //french
    prog.getElementById('englishArmy').style.left = locations.jamestown.left + pixelLoc
    prog.getElementById('englishArmy').style.top = locations.jamestown.top + pixelLoc
    //french
    prog.getElementById('spanishArmy').style.left = locations.santoDomingo.left + pixelLoc
    prog.getElementById('spanishArmy').style.top = locations.santoDomingo.top + pixelLoc
    //french
    prog.getElementById('dutchArmy').style.left = locations.newAmsterdam.left + pixelLoc
    prog.getElementById('dutchArmy').style.top = locations.newAmsterdam.top + pixelLoc

}

function quebecArmyTravel() {
    if(franceMode && frenchArmyMoves == 1) {
        prog.getElementById(selectedArmy).style.left = locations.quebec.left + pixelLoc
        prog.getElementById(selectedArmy).style.top = locations.quebec.top + pixelLoc
        prog.getElementById(selectedArmy).style.imageRendering = "pixelated"
        hideTravelMenu()
        frenchArmyMoves -= 1 
    }
    if(englandMode && englishArmyMoves == 1) {
        prog.getElementById(selectedArmy).style.left = locations.quebec.left + pixelLoc
        prog.getElementById(selectedArmy).style.top = locations.quebec.top + pixelLoc
        prog.getElementById(selectedArmy).style.imageRendering = "pixelated"
        hideTravelMenu()
        englishArmyMoves -= 1
    }
    if(spainMode && spanishArmyMoves == 1) {
        prog.getElementById(selectedArmy).style.left = locations.quebec.left + pixelLoc
        prog.getElementById(selectedArmy).style.top = locations.quebec.top + pixelLoc
        prog.getElementById(selectedArmy).style.imageRendering = "pixelated"
        hideTravelMenu()
        spanishArmyMoves -= 1
    }
    if(dutchMode && dutchArmyMoves == 1) {
        prog.getElementById(selectedArmy).style.left = locations.quebec.left + pixelLoc
        prog.getElementById(selectedArmy).style.top = locations.quebec.top + pixelLoc
        prog.getElementById(selectedArmy).style.imageRendering = "pixelated"
        hideTravelMenu()
        dutchArmyMoves -= 1
    }
    if(franceMode && frenchArmyMoves == 0) {
        hideTravelMenu()
        console.log("frenchArmy out of moves")
    }
    if(englandMode && englishArmyMoves == 0) {
        hideTravelMenu()
        console.log("englishArmy out of moves")
    }
    if(spainMode && spanishArmyMoves == 0) {
        hideTravelMenu()
        console.log("spanishArmy out of moves")
    }
    if(dutchMode && dutchArmyMoves == 0) {
        hideTravelMenu()
        console.log("dutchArmy out of moves")
    }
}
function jamestownArmyTravel() {
    if(franceMode && frenchArmyMoves == 1) {
        prog.getElementById(selectedArmy).style.left = locations.jamestown.left + pixelLoc
        prog.getElementById(selectedArmy).style.top = locations.jamestown.top + pixelLoc
        prog.getElementById(selectedArmy).style.imageRendering = "pixelated"
        hideTravelMenu()
        frenchArmyMoves -= 1 
    }
    if(englandMode && englishArmyMoves == 1) {
        prog.getElementById(selectedArmy).style.left = locations.jamestown.left + pixelLoc
        prog.getElementById(selectedArmy).style.top = locations.jamestown.top + pixelLoc
        prog.getElementById(selectedArmy).style.imageRendering = "pixelated"
        hideTravelMenu()
        englishArmyMoves -= 1
    }
    if(spainMode && spanishArmyMoves == 1) {
        prog.getElementById(selectedArmy).style.left = locations.jamestown.left + pixelLoc
        prog.getElementById(selectedArmy).style.top = locations.jamestown.top + pixelLoc
        prog.getElementById(selectedArmy).style.imageRendering = "pixelated"
        hideTravelMenu()
        spanishArmyMoves -= 1
    }
    if(dutchMode && dutchArmyMoves == 1) {
        prog.getElementById(selectedArmy).style.left = locations.jamestown.left + pixelLoc
        prog.getElementById(selectedArmy).style.top = locations.jamestown.top + pixelLoc
        prog.getElementById(selectedArmy).style.imageRendering = "pixelated"
        hideTravelMenu()
        dutchArmyMoves -= 1
    }
    if(franceMode && frenchArmyMoves == 0) {
        hideTravelMenu()
        console.log("frenchArmy out of moves")
    }
    if(englandMode && englishArmyMoves == 0) {
        hideTravelMenu()
        console.log("englishArmy out of moves")
    }
    if(spainMode && spanishArmyMoves == 0) {
        hideTravelMenu()
        console.log("spanishArmy out of moves")
    }
    if(dutchMode && dutchArmyMoves == 0) {
        hideTravelMenu()
        console.log("dutchArmy out of moves")
    }
}
function santoDomingoArmyTravel() {
    if(franceMode && frenchArmyMoves == 1) {
        prog.getElementById(selectedArmy).style.left = locations.santoDomingo.left + pixelLoc
        prog.getElementById(selectedArmy).style.top = locations.santoDomingo.top + pixelLoc
        prog.getElementById(selectedArmy).style.imageRendering = "pixelated"
        hideTravelMenu()
        frenchArmyMoves -= 1 
    }
    if(englandMode && englishArmyMoves == 1) {
        prog.getElementById(selectedArmy).style.left = locations.santoDomingo.left + pixelLoc
        prog.getElementById(selectedArmy).style.top = locations.santoDomingo.top + pixelLoc
        prog.getElementById(selectedArmy).style.imageRendering = "pixelated"
        hideTravelMenu()
        englishArmyMoves -= 1
    }
    if(spainMode && spanishArmyMoves == 1) {
        prog.getElementById(selectedArmy).style.left = locations.santoDomingo.left + pixelLoc
        prog.getElementById(selectedArmy).style.top = locations.santoDomingo.top + pixelLoc
        prog.getElementById(selectedArmy).style.imageRendering = "pixelated"
        hideTravelMenu()
        spanishArmyMoves -= 1
    }
    if(dutchMode && dutchArmyMoves == 1) {
        prog.getElementById(selectedArmy).style.left = locations.santoDomingo.left + pixelLoc
        prog.getElementById(selectedArmy).style.top = locations.santoDomingo.top + pixelLoc
        prog.getElementById(selectedArmy).style.imageRendering = "pixelated"
        hideTravelMenu()
        dutchArmyMoves -= 1
    }
    if(franceMode && frenchArmyMoves == 0) {
        hideTravelMenu()
        console.log("frenchArmy out of moves")
    }
    if(englandMode && englishArmyMoves == 0) {
        hideTravelMenu()
        console.log("englishArmy out of moves")
    }
    if(spainMode && spanishArmyMoves == 0) {
        hideTravelMenu()
        console.log("spanishArmy out of moves")
    }
    if(dutchMode && dutchArmyMoves == 0) {
        hideTravelMenu()
        console.log("dutchArmy out of moves")
    }
}
function newAmsterdamArmyTravel() {
    if(franceMode && frenchArmyMoves == 1) {
        prog.getElementById(selectedArmy).style.left = locations.newAmsterdam.left + pixelLoc
        prog.getElementById(selectedArmy).style.top = locations.newAmsterdam.top + pixelLoc
        prog.getElementById(selectedArmy).style.imageRendering = "pixelated"
        hideTravelMenu()
        frenchArmyMoves -= 1 
    }
    if(englandMode && englishArmyMoves == 1) {
        prog.getElementById(selectedArmy).style.left = locations.newAmsterdam.left + pixelLoc
        prog.getElementById(selectedArmy).style.top = locations.newAmsterdam.top + pixelLoc
        prog.getElementById(selectedArmy).style.imageRendering = "pixelated"
        hideTravelMenu()
        englishArmyMoves -= 1
    }
    if(spainMode && spanishArmyMoves == 1) {
        prog.getElementById(selectedArmy).style.left = locations.newAmsterdam.left + pixelLoc
        prog.getElementById(selectedArmy).style.top = locations.newAmsterdam.top + pixelLoc
        prog.getElementById(selectedArmy).style.imageRendering = "pixelated"
        hideTravelMenu()
        spanishArmyMoves -= 1
    }
    if(dutchMode && dutchArmyMoves == 1) {
        prog.getElementById(selectedArmy).style.left = locations.newAmsterdam.left + pixelLoc
        prog.getElementById(selectedArmy).style.top = locations.newAmsterdam.top + pixelLoc
        prog.getElementById(selectedArmy).style.imageRendering = "pixelated"
        hideTravelMenu()
        dutchArmyMoves -= 1
    }
    if(franceMode && frenchArmyMoves == 0) {
        hideTravelMenu()
        console.log("frenchArmy out of moves")
    }
    if(englandMode && englishArmyMoves == 0) {
        hideTravelMenu()
        console.log("englishArmy out of moves")
    }
    if(spainMode && spanishArmyMoves == 0) {
        hideTravelMenu()
        console.log("spanishArmy out of moves")
    }
    if(dutchMode && dutchArmyMoves == 0) {
        hideTravelMenu()
        console.log("dutchArmy out of moves")
    }
}
function ns1ArmyTravel() {
    if(franceMode && frenchArmyMoves == 1) {
        prog.getElementById(selectedArmy).style.left = locations.ns1.left + pixelLoc
        prog.getElementById(selectedArmy).style.top = locations.ns1.top + pixelLoc
        prog.getElementById(selectedArmy).style.imageRendering = "pixelated"
        hideTravelMenu()
        frenchArmyMoves -= 1 
    }
    if(englandMode && englishArmyMoves == 1) {
        prog.getElementById(selectedArmy).style.left = locations.ns1.left + pixelLoc
        prog.getElementById(selectedArmy).style.top = locations.ns1.top + pixelLoc
        prog.getElementById(selectedArmy).style.imageRendering = "pixelated"
        hideTravelMenu()
        englishArmyMoves -= 1
    }
    if(spainMode && spanishArmyMoves == 1) {
        prog.getElementById(selectedArmy).style.left = locations.ns1.left + pixelLoc
        prog.getElementById(selectedArmy).style.top = locations.ns1.top + pixelLoc
        prog.getElementById(selectedArmy).style.imageRendering = "pixelated"
        hideTravelMenu()
        spanishArmyMoves -= 1
    }
    if(dutchMode && dutchArmyMoves == 1) {
        prog.getElementById(selectedArmy).style.left = locations.ns1.left + pixelLoc
        prog.getElementById(selectedArmy).style.top = locations.ns1.top + pixelLoc
        prog.getElementById(selectedArmy).style.imageRendering = "pixelated"
        hideTravelMenu()
        dutchArmyMoves -= 1
    }
    if(franceMode && frenchArmyMoves == 0) {
        hideTravelMenu()
        console.log("frenchArmy out of moves")
    }
    if(englandMode && englishArmyMoves == 0) {
        hideTravelMenu()
        console.log("englishArmy out of moves")
    }
    if(spainMode && spanishArmyMoves == 0) {
        hideTravelMenu()
        console.log("spanishArmy out of moves")
    }
    if(dutchMode && dutchArmyMoves == 0) {
        hideTravelMenu()
        console.log("dutchArmy out of moves")
    }
}
function ns2ArmyTravel() {
    if(franceMode && frenchArmyMoves == 1) {
        prog.getElementById(selectedArmy).style.left = locations.ns2.left + pixelLoc
        prog.getElementById(selectedArmy).style.top = locations.ns2.top + pixelLoc
        prog.getElementById(selectedArmy).style.imageRendering = "pixelated"
        hideTravelMenu()
        frenchArmyMoves -= 1 
    }
    if(englandMode && englishArmyMoves == 1) {
        prog.getElementById(selectedArmy).style.left = locations.ns2.left + pixelLoc
        prog.getElementById(selectedArmy).style.top = locations.ns2.top + pixelLoc
        prog.getElementById(selectedArmy).style.imageRendering = "pixelated"
        hideTravelMenu()
        englishArmyMoves -= 1
    }
    if(spainMode && spanishArmyMoves == 1) {
        prog.getElementById(selectedArmy).style.left = locations.ns2.left + pixelLoc
        prog.getElementById(selectedArmy).style.top = locations.ns2.top + pixelLoc
        prog.getElementById(selectedArmy).style.imageRendering = "pixelated"
        hideTravelMenu()
        spanishArmyMoves -= 1
    }
    if(dutchMode && dutchArmyMoves == 1) {
        prog.getElementById(selectedArmy).style.left = locations.ns2.left + pixelLoc
        prog.getElementById(selectedArmy).style.top = locations.ns2.top + pixelLoc
        prog.getElementById(selectedArmy).style.imageRendering = "pixelated"
        hideTravelMenu()
        dutchArmyMoves -= 1
    }
    if(franceMode && frenchArmyMoves == 0) {
        hideTravelMenu()
        console.log("frenchArmy out of moves")
    }
    if(englandMode && englishArmyMoves == 0) {
        hideTravelMenu()
        console.log("englishArmy out of moves")
    }
    if(spainMode && spanishArmyMoves == 0) {
        hideTravelMenu()
        console.log("spanishArmy out of moves")
    }
    if(dutchMode && dutchArmyMoves == 0) {
        hideTravelMenu()
        console.log("dutchArmy out of moves")
    }
}
function ns3ArmyTravel() {
    if(franceMode && frenchArmyMoves == 1) {
        prog.getElementById(selectedArmy).style.left = locations.ns3.left + pixelLoc
        prog.getElementById(selectedArmy).style.top = locations.ns3.top + pixelLoc
        prog.getElementById(selectedArmy).style.imageRendering = "pixelated"
        hideTravelMenu()
        frenchArmyMoves -= 1 
    }
    if(englandMode && englishArmyMoves == 1) {
        prog.getElementById(selectedArmy).style.left = locations.ns3.left + pixelLoc
        prog.getElementById(selectedArmy).style.top = locations.ns3.top + pixelLoc
        prog.getElementById(selectedArmy).style.imageRendering = "pixelated"
        hideTravelMenu()
        englishArmyMoves -= 1
    }
    if(spainMode && spanishArmyMoves == 1) {
        prog.getElementById(selectedArmy).style.left = locations.ns3.left + pixelLoc
        prog.getElementById(selectedArmy).style.top = locations.ns3.top + pixelLoc
        prog.getElementById(selectedArmy).style.imageRendering = "pixelated"
        hideTravelMenu()
        spanishArmyMoves -= 1
    }
    if(dutchMode && dutchArmyMoves == 1) {
        prog.getElementById(selectedArmy).style.left = locations.ns3.left + pixelLoc
        prog.getElementById(selectedArmy).style.top = locations.ns3.top + pixelLoc
        prog.getElementById(selectedArmy).style.imageRendering = "pixelated"
        hideTravelMenu()
        dutchArmyMoves -= 1
    }
    if(franceMode && frenchArmyMoves == 0) {
        hideTravelMenu()
        console.log("frenchArmy out of moves")
    }
    if(englandMode && englishArmyMoves == 0) {
        hideTravelMenu()
        console.log("englishArmy out of moves")
    }
    if(spainMode && spanishArmyMoves == 0) {
        hideTravelMenu()
        console.log("spanishArmy out of moves")
    }
    if(dutchMode && dutchArmyMoves == 0) {
        hideTravelMenu()
        console.log("dutchArmy out of moves")
    }
}

function ns4ArmyTravel() {
    if(franceMode && frenchArmyMoves == 1) {
        prog.getElementById(selectedArmy).style.left = locations.ns4.left + pixelLoc
        prog.getElementById(selectedArmy).style.top = locations.ns4.top + pixelLoc
        prog.getElementById(selectedArmy).style.imageRendering = "pixelated"
        hideTravelMenu()
        frenchArmyMoves -= 1 
    }
    if(englandMode && englishArmyMoves == 1) {
        prog.getElementById(selectedArmy).style.left = locations.ns4.left + pixelLoc
        prog.getElementById(selectedArmy).style.top = locations.ns4.top + pixelLoc
        prog.getElementById(selectedArmy).style.imageRendering = "pixelated"
        hideTravelMenu()
        englishArmyMoves -= 1
    }
    if(spainMode && spanishArmyMoves == 1) {
        prog.getElementById(selectedArmy).style.left = locations.ns4.left + pixelLoc
        prog.getElementById(selectedArmy).style.top = locations.ns4.top + pixelLoc
        prog.getElementById(selectedArmy).style.imageRendering = "pixelated"
        hideTravelMenu()
        spanishArmyMoves -= 1
    }
    if(dutchMode && dutchArmyMoves == 1) {
        prog.getElementById(selectedArmy).style.left = locations.ns4.left + pixelLoc
        prog.getElementById(selectedArmy).style.top = locations.ns4.top + pixelLoc
        prog.getElementById(selectedArmy).style.imageRendering = "pixelated"
        hideTravelMenu()
        dutchArmyMoves -= 1
    }
    if(franceMode && frenchArmyMoves == 0) {
        hideTravelMenu()
        console.log("frenchArmy out of moves")
    }
    if(englandMode && englishArmyMoves == 0) {
        hideTravelMenu()
        console.log("englishArmy out of moves")
    }
    if(spainMode && spanishArmyMoves == 0) {
        hideTravelMenu()
        console.log("spanishArmy out of moves")
    }
    if(dutchMode && dutchArmyMoves == 0) {
        hideTravelMenu()
        console.log("dutchArmy out of moves")
    }
}

function ns5ArmyTravel() {
    if(franceMode && frenchArmyMoves == 1) {
        prog.getElementById(selectedArmy).style.left = locations.ns5.left + pixelLoc
        prog.getElementById(selectedArmy).style.top = locations.ns5.top + pixelLoc
        prog.getElementById(selectedArmy).style.imageRendering = "pixelated"
        hideTravelMenu()
        frenchArmyMoves -= 1 
    }
    if(englandMode && englishArmyMoves == 1) {
        prog.getElementById(selectedArmy).style.left = locations.ns5.left + pixelLoc
        prog.getElementById(selectedArmy).style.top = locations.ns5.top + pixelLoc
        prog.getElementById(selectedArmy).style.imageRendering = "pixelated"
        hideTravelMenu()
        englishArmyMoves -= 1
    }
    if(spainMode && spanishArmyMoves == 1) {
        prog.getElementById(selectedArmy).style.left = locations.ns5.left + pixelLoc
        prog.getElementById(selectedArmy).style.top = locations.ns5.top + pixelLoc
        prog.getElementById(selectedArmy).style.imageRendering = "pixelated"
        hideTravelMenu()
        spanishArmyMoves -= 1
    }
    if(dutchMode && dutchArmyMoves == 1) {
        prog.getElementById(selectedArmy).style.left = locations.ns5.left + pixelLoc
        prog.getElementById(selectedArmy).style.top = locations.ns5.top + pixelLoc
        prog.getElementById(selectedArmy).style.imageRendering = "pixelated"
        hideTravelMenu()
        dutchArmyMoves -= 1
    }
    if(franceMode && frenchArmyMoves == 0) {
        hideTravelMenu()
        console.log("frenchArmy out of moves")
    }
    if(englandMode && englishArmyMoves == 0) {
        hideTravelMenu()
        console.log("englishArmy out of moves")
    }
    if(spainMode && spanishArmyMoves == 0) {
        hideTravelMenu()
        console.log("spanishArmy out of moves")
    }
    if(dutchMode && dutchArmyMoves == 0) {
        hideTravelMenu()
        console.log("dutchArmy out of moves")
    }
}

//DEFEAT
//ns1
function frenchDefeatNS1() {
    prog.getElementById("newsInfo").style.animation = "newsNoAnim 1s infinite"
    prog.getElementById("newsInfo").innerHTML = "France's Colonial Army was defeated at " + ns1CityCheck.cityName
}
function englishDefeatNS1() {
    prog.getElementById("newsInfo").style.animation = "newsNoAnim 1s infinite"
    prog.getElementById("newsInfo").innerHTML = "England's Colonial Army was defeated at " + ns1CityCheck.cityName
}
function spanishDefeatNS1() {
    prog.getElementById("newsInfo").style.animation = "newsNoAnim 1s infinite"
    prog.getElementById("newsInfo").innerHTML = "Spain's Colonial Army was defeated at " + ns1CityCheck.cityName
}
function dutchDefeatNS1() {
    prog.getElementById("newsInfo").style.animation = "newsNoAnim 1s infinite"
    prog.getElementById("newsInfo").innerHTML = "The Netherlands's Colonial Army was defeated at " + ns1CityCheck.cityName
}

//ns2
function frenchDefeatNS2() {
    prog.getElementById("newsInfo").style.animation = "newsNoAnim 1s infinite"
    prog.getElementById("newsInfo").innerHTML = "France's Colonial Army was defeated at " + ns2CityCheck.cityName
}
function englishDefeatNS2() {
    prog.getElementById("newsInfo").style.animation = "newsNoAnim 1s infinite"
    prog.getElementById("newsInfo").innerHTML = "England's Colonial Army was defeated at " + ns2CityCheck.cityName
}
function spanishDefeatNS2() {
    prog.getElementById("newsInfo").style.animation = "newsNoAnim 1s infinite"
    prog.getElementById("newsInfo").innerHTML = "Spain's Colonial Army was defeated at " + ns2CityCheck.cityName
}
function dutchDefeatNS2() {
    prog.getElementById("newsInfo").style.animation = "newsNoAnim 1s infinite"
    prog.getElementById("newsInfo").innerHTML = "The Netherlands's Colonial Army was defeated at " + ns2CityCheck.cityName
}

//ns3
function frenchDefeatNS3() {
    prog.getElementById("newsInfo").style.animation = "newsNoAnim 1s infinite"
    prog.getElementById("newsInfo").innerHTML = "France's Colonial Army was defeated at " + ns3CityCheck.cityName
}
function englishDefeatNS3() {
    prog.getElementById("newsInfo").style.animation = "newsNoAnim 1s infinite"
    prog.getElementById("newsInfo").innerHTML = "England's Colonial Army was defeated at " + ns3CityCheck.cityName
}
function spanishDefeatNS3() {
    prog.getElementById("newsInfo").style.animation = "newsNoAnim 1s infinite"
    prog.getElementById("newsInfo").innerHTML = "Spain's Colonial Army was defeated at " + ns3CityCheck.cityName
}
function dutchDefeatNS3() {
    prog.getElementById("newsInfo").style.animation = "newsNoAnim 1s infinite"
    prog.getElementById("newsInfo").innerHTML = "The Netherlands's Colonial Army was defeated at " + ns3CityCheck.cityName
}

//ns4
function frenchDefeatNS4() {
    prog.getElementById("newsInfo").style.animation = "newsNoAnim 1s infinite"
    prog.getElementById("newsInfo").innerHTML = "France's Colonial Army was defeated at " + ns4CityCheck.cityName
}
function englishDefeatNS4() {
    prog.getElementById("newsInfo").style.animation = "newsNoAnim 1s infinite"
    prog.getElementById("newsInfo").innerHTML = "England's Colonial Army was defeated at " + ns4CityCheck.cityName
}
function spanishDefeatNS4() {
    prog.getElementById("newsInfo").style.animation = "newsNoAnim 1s infinite"
    prog.getElementById("newsInfo").innerHTML = "Spain's Colonial Army was defeated at " + ns4CityCheck.cityName
}
function dutchDefeatNS4() {
    prog.getElementById("newsInfo").style.animation = "newsNoAnim 1s infinite"
    prog.getElementById("newsInfo").innerHTML = "The Netherlands's Colonial Army was defeated at " + ns4CityCheck.cityName
}

//ns5
function frenchDefeatNS5() {
    prog.getElementById("newsInfo").style.animation = "newsNoAnim 1s infinite"
    prog.getElementById("newsInfo").innerHTML = "France's Colonial Army was defeated at " + ns5CityCheck.cityName
}
function englishDefeatNS5() {
    prog.getElementById("newsInfo").style.animation = "newsNoAnim 1s infinite"
    prog.getElementById("newsInfo").innerHTML = "England's Colonial Army was defeated at " + ns5CityCheck.cityName
}
function spanishDefeatNS5() {
    prog.getElementById("newsInfo").style.animation = "newsNoAnim 1s infinite"
    prog.getElementById("newsInfo").innerHTML = "Spain's Colonial Army was defeated at " + ns5CityCheck.cityName
}
function dutchDefeatNS5() {
    prog.getElementById("newsInfo").style.animation = "newsNoAnim 1s infinite"
    prog.getElementById("newsInfo").innerHTML = "The Netherlands's Colonial Army was defeated at " + ns5CityCheck.cityName
}

//ns6
function frenchDefeatNS6() {
    prog.getElementById("newsInfo").style.animation = "newsNoAnim 1s infinite"
    prog.getElementById("newsInfo").innerHTML = "France's Colonial Army was defeated at " + ns6CityCheck.cityName
}
function englishDefeatNS6() {
    prog.getElementById("newsInfo").style.animation = "newsNoAnim 1s infinite"
    prog.getElementById("newsInfo").innerHTML = "England's Colonial Army was defeated at " + ns6CityCheck.cityName
}
function spanishDefeatNS6() {
    prog.getElementById("newsInfo").style.animation = "newsNoAnim 1s infinite"
    prog.getElementById("newsInfo").innerHTML = "Spain's Colonial Army was defeated at " + ns6CityCheck.cityName
}
function dutchDefeatNS6() {
    prog.getElementById("newsInfo").style.animation = "newsNoAnim 1s infinite"
    prog.getElementById("newsInfo").innerHTML = "The Netherlands's Colonial Army was defeated at " + ns6CityCheck.cityName
}


//VICTORY
//ns1
function frenchVictoryNS1() {
    prog.getElementById("newsInfo").style.animation = "newsNoAnim 1s infinite"
    prog.getElementById("newsInfo").innerHTML = "France's Colonial Army was victorious at " + ns1CityCheck.cityName
}
function englishVictoryNS1() {
    prog.getElementById("newsInfo").style.animation = "newsNoAnim 1s infinite"
    prog.getElementById("newsInfo").innerHTML = "England's Colonial Army was victorious at " + ns1CityCheck.cityName
}
function spanishVictoryNS1() {
    prog.getElementById("newsInfo").style.animation = "newsNoAnim 1s infinite"
    prog.getElementById("newsInfo").innerHTML = "Spain's Colonial Army was victorious at " + ns1CityCheck.cityName
}
function dutchVictoryNS1() {
    prog.getElementById("newsInfo").style.animation = "newsNoAnim 1s infinite"
    prog.getElementById("newsInfo").innerHTML = "The Netherlands's Colonial Army was victorious at " + ns1CityCheck.cityName
}

//ns2
function frenchVictoryNS2() {
    prog.getElementById("newsInfo").style.animation = "newsNoAnim 1s infinite"
    prog.getElementById("newsInfo").innerHTML = "France's Colonial Army was victorious at " + ns2CityCheck.cityName
}
function englishVictoryNS2() {
    prog.getElementById("newsInfo").style.animation = "newsNoAnim 1s infinite"
    prog.getElementById("newsInfo").innerHTML = "England's Colonial Army was victorious at " + ns2CityCheck.cityName
}
function spanishVictoryNS2() {
    prog.getElementById("newsInfo").style.animation = "newsNoAnim 1s infinite"
    prog.getElementById("newsInfo").innerHTML = "Spain's Colonial Army was victorious at " + ns2CityCheck.cityName
}
function dutchVictoryNS2() {
    prog.getElementById("newsInfo").style.animation = "newsNoAnim 1s infinite"
    prog.getElementById("newsInfo").innerHTML = "The Netherlands's Colonial Army was victorious at " + ns2CityCheck.cityName
}

//ns3
function frenchVictoryNS3() {
    prog.getElementById("newsInfo").style.animation = "newsNoAnim 1s infinite"
    prog.getElementById("newsInfo").innerHTML = "France's Colonial Army was victorious at " + ns3CityCheck.cityName
}
function englishVictoryNS3() {
    prog.getElementById("newsInfo").style.animation = "newsNoAnim 1s infinite"
    prog.getElementById("newsInfo").innerHTML = "England's Colonial Army was victorious at " + ns3CityCheck.cityName
}
function spanishVictoryNS3() {
    prog.getElementById("newsInfo").style.animation = "newsNoAnim 1s infinite"
    prog.getElementById("newsInfo").innerHTML = "Spain's Colonial Army was victorious at " + ns3CityCheck.cityName
}
function dutchVictoryNS3() {
    prog.getElementById("newsInfo").style.animation = "newsNoAnim 1s infinite"
    prog.getElementById("newsInfo").innerHTML = "The Netherlands's Colonial Army was victorious at " + ns3CityCheck.cityName
}

//ns4
function frenchVictoryNS4() {
    prog.getElementById("newsInfo").style.animation = "newsNoAnim 1s infinite"
    prog.getElementById("newsInfo").innerHTML = "France's Colonial Army was victorious at " + ns4CityCheck.cityName
}
function englishVictoryNS4() {
    prog.getElementById("newsInfo").style.animation = "newsNoAnim 1s infinite"
    prog.getElementById("newsInfo").innerHTML = "England's Colonial Army was victorious at " + ns4CityCheck.cityName
}
function spanishVictoryNS4() {
    prog.getElementById("newsInfo").style.animation = "newsNoAnim 1s infinite"
    prog.getElementById("newsInfo").innerHTML = "Spain's Colonial Army was victorious at " + ns4CityCheck.cityName
}
function dutchVictoryNS4() {
    prog.getElementById("newsInfo").style.animation = "newsNoAnim 1s infinite"
    prog.getElementById("newsInfo").innerHTML = "The Netherlands's Colonial Army was victorious at " + ns4CityCheck.cityName
}

//ns5
function frenchVictoryNS5() {
    prog.getElementById("newsInfo").style.animation = "newsNoAnim 1s infinite"
    prog.getElementById("newsInfo").innerHTML = "France's Colonial Army was victorious at " + ns5CityCheck.cityName
}
function englishVictoryNS5() {
    prog.getElementById("newsInfo").style.animation = "newsNoAnim 1s infinite"
    prog.getElementById("newsInfo").innerHTML = "England's Colonial Army was victorious at " + ns5CityCheck.cityName
}
function spanishVictoryNS5() {
    prog.getElementById("newsInfo").style.animation = "newsNoAnim 1s infinite"
    prog.getElementById("newsInfo").innerHTML = "Spain's Colonial Army was victorious at " + ns5CityCheck.cityName
}
function dutchVictoryNS5() {
    prog.getElementById("newsInfo").style.animation = "newsNoAnim 1s infinite"
    prog.getElementById("newsInfo").innerHTML = "The Netherlands's Colonial Army was victorious at " + ns5CityCheck.cityName
}

//ns6
function frenchVictoryNS6() {
    prog.getElementById("newsInfo").style.animation = "newsNoAnim 1s infinite"
    prog.getElementById("newsInfo").innerHTML = "France's Colonial Army was victorious at " + ns6CityCheck.cityName
}
function englishVictoryNS6() {
    prog.getElementById("newsInfo").style.animation = "newsNoAnim 1s infinite"
    prog.getElementById("newsInfo").innerHTML = "England's Colonial Army was victorious at " + ns6CityCheck.cityName
}
function spanishVictoryNS6() {
    prog.getElementById("newsInfo").style.animation = "newsNoAnim 1s infinite"
    prog.getElementById("newsInfo").innerHTML = "Spain's Colonial Army was victorious at " + ns6CityCheck.cityName
}
function dutchVictoryNS6() {
    prog.getElementById("newsInfo").style.animation = "newsNoAnim 1s infinite"
    prog.getElementById("newsInfo").innerHTML = "The Netherlands's Colonial Army was victorious at " + ns6CityCheck.cityName
}


//SIEGE
function siegeCity() {
    if(franceMode && ns1SELECT && frenchArmyMoves == 1) {
        prog.getElementById("newsInfo").style.animation = "newsAnim 5s infinite"
        prog.getElementById("newsInfo").innerHTML = "France's Colonial Army is on the move to " + ns1CityCheck.cityName
        frenchArmy.siegeMode = true
        ns1CityCheck.underSiege = true
        prog.getElementById("frenchArmy").style.left = locations.ns1.left + pixelLoc
        prog.getElementById("frenchArmy").style.top = locations.ns1.top + pixelLoc
        prog.getElementById("frenchArmy").style.imageRendering = "pixelated"
        if(franceObject.armyNumber * frenchArmy.siegeMult < ns1CityCheck.defense * ns1OwningDefMult) {
            franceObject.armyNumber -= (Math.ceil(ns1CityCheck.defense * ns1OwningDefMult))
            if(franceObject.armyNumber < 0) {
                franceObject.armyNumber = 50
            }
            frenchArmyMoves -= 1
            setTimeout(returnHomeFrench, 5000)
            armyPopJS.innerHTML = "Garrison: " + franceObject.armyNumber;
            console.log("french army was defeated by ns1")
            setTimeout(frenchDefeatNS1, 5000)
            
        }
        if(franceObject.armyNumber * frenchArmy.siegeMult > ns1CityCheck.defense * ns1OwningDefMult) {
            franceObject.armyNumber -= (Math.ceil(ns1CityCheck.defense * ns1OwningDefMult))
            if(franceObject.armyNumber < 0) {
                franceObject.armyNumber = 50
            }
            frenchArmyMoves -= 1
            ns1CityCheck.defense -= (Math.ceil(ns1CityCheck.defense/2))
            ns1OwningDefMult = franceObject.defenseMult
            armyPopJS.innerHTML = "Garrison: " + franceObject.armyNumber;
            console.log("french army was victorious")
            setTimeout(frenchVictoryNS1, 5000)

            //when colonized
            setTimeout(franceNS1, 5000)

            franceObject.wealth += 5000
            currentWealthJS.innerHTML = franceObject.wealth + " Gold";
        }
    }
    if(englandMode && ns1SELECT && englishArmyMoves == 1) {
        prog.getElementById("newsInfo").style.animation = "newsAnim 5s infinite"
        prog.getElementById("newsInfo").innerHTML = "England's Colonial Army is on the move to " + ns1CityCheck.cityName
        englishArmy.siegeMode = true
        ns1CityCheck.underSiege = true
        prog.getElementById("englishArmy").style.left = locations.ns1.left + pixelLoc
        prog.getElementById("englishArmy").style.top = locations.ns1.top + pixelLoc
        prog.getElementById("englishArmy").style.imageRendering = "pixelated"
        if(englandObject.armyNumber * englishArmy.siegeMult < ns1CityCheck.defense * ns1OwningDefMult) {
            englandObject.armyNumber -= (Math.ceil(ns1CityCheck.defense * ns1OwningDefMult))
            if(englandObject.armyNumber < 0) {
                englandObject.armyNumber = 50
            }
            englishArmyMoves -= 1
            setTimeout(returnHomeEnglish, 5000)
            armyPopJS.innerHTML = "Garrison: " + englandObject.armyNumber;
            console.log("english army was defeated by ns1")
            setTimeout(englishDefeatNS1, 5000)

        }
        if(englandObject.armyNumber * englishArmy.siegeMult > ns1CityCheck.defense * ns1OwningDefMult) {
            englandObject.armyNumber -= (Math.ceil(ns1CityCheck.defense * ns1OwningDefMult))
            if(englandObject.armyNumber < 0) {
                englandObject.armyNumber = 50
            }
            englishArmyMoves -= 1
            ns1CityCheck.defense -= (Math.ceil(ns1CityCheck.defense/2))
            ns1OwningDefMult = englandObject.defenseMult
            armyPopJS.innerHTML = "Garrison: " + englandObject.armyNumber;
            console.log("english army was victorious")
            setTimeout(englishVictoryNS1, 5000)

            //when colonized
            setTimeout(englandNS1, 5000)

            englandObject.wealth += 5000
            currentWealthJS.innerHTML = englandObject.wealth + " Gold";
        }
    }
    if(spainMode && ns1SELECT && spanishArmyMoves == 1) {
        prog.getElementById("newsInfo").style.animation = "newsAnim 5s infinite"
        prog.getElementById("newsInfo").innerHTML = "Spain's Colonial Army is on the move to " + ns1CityCheck.cityName
        spanishArmy.siegeMode = true
        ns1CityCheck.underSiege = true
        prog.getElementById("spanishArmy").style.left = locations.ns1.left + pixelLoc
        prog.getElementById("spanishArmy").style.top = locations.ns1.top + pixelLoc
        prog.getElementById("spanishArmy").style.imageRendering = "pixelated"
        if(spainObject.armyNumber * spanishArmy.siegeMult < ns1CityCheck.defense * ns1OwningDefMult) {
            spainObject.armyNumber -= (Math.ceil(ns1CityCheck.defense * ns1OwningDefMult))
            if(spainObject.armyNumber < 0) {
                spainObject.armyNumber = 50
            }
            spanishArmyMoves -= 1
            setTimeout(returnHomeSpanish, 5000)
            armyPopJS.innerHTML = "Garrison: " + spainObject.armyNumber;
            console.log("spanish army was defeated by ns1")
            setTimeout(spanishDefeatNS1, 5000)
        }
        if(spainObject.armyNumber * spanishArmy.siegeMult > ns1CityCheck.defense * ns1OwningDefMult) {
            spainObject.armyNumber -= (Math.ceil(ns1CityCheck.defense * ns1OwningDefMult))
            if(spainObject.armyNumber < 0) {
                spainObject.armyNumber = 50
            }
            spanishArmyMoves -= 1
            ns1CityCheck.defense -= (Math.ceil(ns1CityCheck.defense/2))
            ns1OwningDefMult = spainObject.defenseMult
            armyPopJS.innerHTML = "Garrison: " + spainObject.armyNumber;
            console.log("spanish army was victorious")
            setTimeout(spanishVictoryNS1, 5000)

            //when colonized
            setTimeout(spainNS1, 5000)

            spainObject.wealth += 5000
            currentWealthJS.innerHTML = spainObject.wealth + " Gold";
        }
    }
    if(dutchMode && ns1SELECT && dutchArmyMoves == 1) {
        prog.getElementById("newsInfo").style.animation = "newsAnim 5s infinite"
        prog.getElementById("newsInfo").innerHTML = "The Netherland's Colonial Army is on the move to " + ns1CityCheck.cityName
        dutchArmy.siegeMode = true
        ns1CityCheck.underSiege = true
        prog.getElementById("dutchArmy").style.left = locations.ns1.left + pixelLoc
        prog.getElementById("dutchArmy").style.top = locations.ns1.top + pixelLoc
        prog.getElementById("dutchArmy").style.imageRendering = "pixelated"
        if(dutchObject.armyNumber * dutchArmy.siegeMult < ns1CityCheck.defense * ns1OwningDefMult) {
            dutchObject.armyNumber -= (Math.ceil(ns1CityCheck.defense * ns1OwningDefMult))
            if(dutchObject.armyNumber < 0) {
                dutchObject.armyNumber = 50
            }
            dutchArmyMoves -= 1
            setTimeout(returnHomeDutch, 5000)
            armyPopJS.innerHTML = "Garrison: " + dutchObject.armyNumber;
            console.log("dutch army was defeated by ns1")
            setTimeout(dutchDefeatNS1, 5000)
        }
        if(dutchObject.armyNumber * dutchArmy.siegeMult > ns1CityCheck.defense * ns1OwningDefMult) {
            dutchObject.armyNumber -= (Math.ceil(ns1CityCheck.defense * ns1OwningDefMult))
            if(dutchObject.armyNumber < 0) {
                dutchObject.armyNumber = 50
            }
            dutchArmyMoves -= 1
            ns1CityCheck.defense -= (Math.ceil(ns1CityCheck.defense/2))
            ns1OwningDefMult = dutchObject.defenseMult
            armyPopJS.innerHTML = "Garrison: " + dutchObject.armyNumber;
            console.log("dutch army was victorious")
            setTimeout(dutchVictoryNS1, 5000)

            //when colonized
            setTimeout(dutchNS1, 5000)

            dutchObject.wealth += 5000
            currentWealthJS.innerHTML = dutchObject.wealth + " Gold";
        }
    }


    //ns2


        if(franceMode && ns2SELECT && frenchArmyMoves == 1) {
            prog.getElementById("newsInfo").style.animation = "newsAnim 5s infinite"
            prog.getElementById("newsInfo").innerHTML = "France's Colonial Army is on the move to " + ns2CityCheck.cityName
            frenchArmy.siegeMode = true
            ns2CityCheck.underSiege = true
            prog.getElementById("frenchArmy").style.left = locations.ns2.left + pixelLoc
            prog.getElementById("frenchArmy").style.top = locations.ns2.top + pixelLoc
            prog.getElementById("frenchArmy").style.imageRendering = "pixelated"
            if(franceObject.armyNumber * frenchArmy.siegeMult < ns2CityCheck.defense * ns2OwningDefMult) {
                franceObject.armyNumber -= (Math.ceil(ns2CityCheck.defense * ns2OwningDefMult))
                if(franceObject.armyNumber < 0) {
                    franceObject.armyNumber = 50
                }
                frenchArmyMoves -= 1
                setTimeout(returnHomeFrench, 5000)
                armyPopJS.innerHTML = "Garrison: " + franceObject.armyNumber;
                console.log("french army was defeated by ns1")
                setTimeout(frenchDefeatNS2, 5000)
                
            }
            if(franceObject.armyNumber * frenchArmy.siegeMult > ns2CityCheck.defense * ns2OwningDefMult) {
                franceObject.armyNumber -= (Math.ceil(ns2CityCheck.defense * ns2OwningDefMult))
                if(franceObject.armyNumber < 0) {
                    franceObject.armyNumber = 50
                }
                frenchArmyMoves -= 1
                ns2CityCheck.defense -= (Math.ceil(ns2CityCheck.defense/2))
                ns2OwningDefMult = franceObject.defenseMult
                armyPopJS.innerHTML = "Garrison: " + franceObject.armyNumber;
                console.log("french army was victorious")
                setTimeout(frenchVictoryNS2, 5000)
    
                //when colonized
                setTimeout(franceNS2, 5000)
    
                franceObject.wealth += 5000
                currentWealthJS.innerHTML = franceObject.wealth + " Gold";
            }
        }
        if(englandMode && ns2SELECT && englishArmyMoves == 1) {
            prog.getElementById("newsInfo").style.animation = "newsAnim 5s infinite"
            prog.getElementById("newsInfo").innerHTML = "England's Colonial Army is on the move to " + ns2CityCheck.cityName
            englishArmy.siegeMode = true
            ns2CityCheck.underSiege = true
            prog.getElementById("englishArmy").style.left = locations.ns2.left + pixelLoc
            prog.getElementById("englishArmy").style.top = locations.ns2.top + pixelLoc
            prog.getElementById("englishArmy").style.imageRendering = "pixelated"
            if(englandObject.armyNumber * englishArmy.siegeMult < ns2CityCheck.defense * ns2OwningDefMult) {
                englandObject.armyNumber -= (Math.ceil(ns2CityCheck.defense * ns2OwningDefMult))
                if(englandObject.armyNumber < 0) {
                    englandObject.armyNumber = 50
                }
                englishArmyMoves -= 1
                setTimeout(returnHomeEnglish, 5000)
                armyPopJS.innerHTML = "Garrison: " + englandObject.armyNumber;
                console.log("english army was defeated by ns1")
                setTimeout(englishDefeatNS2, 5000)
    
            }
            if(englandObject.armyNumber * englishArmy.siegeMult > ns2CityCheck.defense * ns2OwningDefMult) {
                englandObject.armyNumber -= (Math.ceil(ns2CityCheck.defense * ns2OwningDefMult))
                if(englandObject.armyNumber < 0) {
                    englandObject.armyNumber = 50
                }
                englishArmyMoves -= 1
                ns2CityCheck.defense -= (Math.ceil(ns2CityCheck.defense/2))
                ns2OwningDefMult = englandObject.defenseMult
                armyPopJS.innerHTML = "Garrison: " + englandObject.armyNumber;
                console.log("english army was victorious")
                setTimeout(englishVictoryNS2, 5000)
    
                //when colonized
                setTimeout(englandNS2, 5000)
    
                englandObject.wealth += 5000
                currentWealthJS.innerHTML = englandObject.wealth + " Gold";
            }
        }
        if(spainMode && ns2SELECT && spanishArmyMoves == 1) {
            prog.getElementById("newsInfo").style.animation = "newsAnim 5s infinite"
            prog.getElementById("newsInfo").innerHTML = "Spain's Colonial Army is on the move to " + ns2CityCheck.cityName
            spanishArmy.siegeMode = true
            ns2CityCheck.underSiege = true
            prog.getElementById("spanishArmy").style.left = locations.ns2.left + pixelLoc
            prog.getElementById("spanishArmy").style.top = locations.ns2.top + pixelLoc
            prog.getElementById("spanishArmy").style.imageRendering = "pixelated"
            if(spainObject.armyNumber * spanishArmy.siegeMult < ns2CityCheck.defense * ns2OwningDefMult) {
                spainObject.armyNumber -= (Math.ceil(ns2CityCheck.defense * ns2OwningDefMult))
                if(spainObject.armyNumber < 0) {
                    spainObject.armyNumber = 50
                }
                spanishArmyMoves -= 1
                setTimeout(returnHomeSpanish, 5000)
                armyPopJS.innerHTML = "Garrison: " + spainObject.armyNumber;
                console.log("spanish army was defeated by ns1")
                setTimeout(spanishDefeatNS2, 5000)
            }
            if(spainObject.armyNumber * spanishArmy.siegeMult > ns2CityCheck.defense * ns2OwningDefMult) {
                spainObject.armyNumber -= (Math.ceil(ns2CityCheck.defense * ns2OwningDefMult))
                if(spainObject.armyNumber < 0) {
                    spainObject.armyNumber = 50
                }
                spanishArmyMoves -= 1
                ns2CityCheck.defense -= (Math.ceil(ns2CityCheck.defense/2))
                ns2OwningDefMult = spainObject.defenseMult
                armyPopJS.innerHTML = "Garrison: " + spainObject.armyNumber;
                console.log("spanish army was victorious")
                setTimeout(spanishVictoryNS2, 5000)
    
                //when colonized
                setTimeout(spainNS2, 5000)
    
                spainObject.wealth += 5000
                currentWealthJS.innerHTML = spainObject.wealth + " Gold";
            }
        }
        if(dutchMode && ns2SELECT && dutchArmyMoves == 1) {
            prog.getElementById("newsInfo").style.animation = "newsAnim 5s infinite"
            prog.getElementById("newsInfo").innerHTML = "The Netherland's Colonial Army is on the move to " + ns2CityCheck.cityName
            dutchArmy.siegeMode = true
            ns2CityCheck.underSiege = true
            prog.getElementById("dutchArmy").style.left = locations.ns2.left + pixelLoc
            prog.getElementById("dutchArmy").style.top = locations.ns2.top + pixelLoc
            prog.getElementById("dutchArmy").style.imageRendering = "pixelated"
            if(dutchObject.armyNumber * dutchArmy.siegeMult < ns2CityCheck.defense * ns2OwningDefMult) {
                dutchObject.armyNumber -= (Math.ceil(ns2CityCheck.defense * ns2OwningDefMult))
                if(dutchObject.armyNumber < 0) {
                    dutchObject.armyNumber = 50
                }
                dutchArmyMoves -= 1
                setTimeout(returnHomeDutch, 5000)
                armyPopJS.innerHTML = "Garrison: " + dutchObject.armyNumber;
                console.log("dutch army was defeated by ns1")
                setTimeout(dutchDefeatNS2, 5000)
            }
            if(dutchObject.armyNumber * dutchArmy.siegeMult > ns2CityCheck.defense * ns2OwningDefMult) {
                dutchObject.armyNumber -= (Math.ceil(ns2CityCheck.defense * ns2OwningDefMult))
                if(dutchObject.armyNumber < 0) {
                    dutchObject.armyNumber = 50
                }
                dutchArmyMoves -= 1
                ns2CityCheck.defense -= (Math.ceil(ns2CityCheck.defense/2))
                ns2OwningDefMult = dutchObject.defenseMult
                armyPopJS.innerHTML = "Garrison: " + dutchObject.armyNumber;
                console.log("dutch army was victorious")
                setTimeout(dutchVictoryNS2, 5000)
    
                //when colonized
                setTimeout(dutchNS2, 5000)
    
                dutchObject.wealth += 5000
                currentWealthJS.innerHTML = dutchObject.wealth + " Gold";
            }
        }


    //ns3


    if(franceMode && ns3SELECT && frenchArmyMoves == 1) {
        prog.getElementById("newsInfo").style.animation = "newsAnim 5s infinite"
        prog.getElementById("newsInfo").innerHTML = "France's Colonial Army is on the move to " + ns3CityCheck.cityName
        frenchArmy.siegeMode = true
        ns3CityCheck.underSiege = true
        prog.getElementById("frenchArmy").style.left = locations.ns3.left + pixelLoc
        prog.getElementById("frenchArmy").style.top = locations.ns3.top + pixelLoc
        prog.getElementById("frenchArmy").style.imageRendering = "pixelated"
        if(franceObject.armyNumber * frenchArmy.siegeMult < ns3CityCheck.defense * ns3OwningDefMult) {
            franceObject.armyNumber -= (Math.ceil(ns3CityCheck.defense * ns3OwningDefMult))
            if(franceObject.armyNumber < 0) {
                franceObject.armyNumber = 50
            }
            frenchArmyMoves -= 1
            setTimeout(returnHomeFrench, 5000)
            armyPopJS.innerHTML = "Garrison: " + franceObject.armyNumber;
            console.log("french army was defeated by ns3")
            setTimeout(frenchDefeatNS3, 5000)
        }
        if(franceObject.armyNumber * frenchArmy.siegeMult > ns3CityCheck.defense * ns3OwningDefMult) {
            franceObject.armyNumber -= (Math.ceil(ns3CityCheck.defense * ns3OwningDefMult))
            if(franceObject.armyNumber < 0) {
                franceObject.armyNumber = 50
            }
            frenchArmyMoves -= 1
            ns3CityCheck.defense -= (Math.ceil(ns3CityCheck.defense/2))
            ns3OwningDefMult = franceObject.defenseMult
            armyPopJS.innerHTML = "Garrison: " + franceObject.armyNumber;
            console.log("french army was victorious")
            setTimeout(frenchVictoryNS3, 5000)

            //when colonized
            setTimeout(franceNS3, 5000)

            franceObject.wealth += 5000
            currentWealthJS.innerHTML = franceObject.wealth + " Gold";
        }
    }
    if(englandMode && ns3SELECT && englishArmyMoves == 1) {
        prog.getElementById("newsInfo").style.animation = "newsAnim 5s infinite"
        prog.getElementById("newsInfo").innerHTML = "England's Colonial Army is on the move to " + ns3CityCheck.cityName
        englishArmy.siegeMode = true
        ns3CityCheck.underSiege = true
        prog.getElementById("englishArmy").style.left = locations.ns3.left + pixelLoc
        prog.getElementById("englishArmy").style.top = locations.ns3.top + pixelLoc
        prog.getElementById("englishArmy").style.imageRendering = "pixelated"
        if(englandObject.armyNumber * englishArmy.siegeMult < ns3CityCheck.defense * ns3OwningDefMult) {
            englandObject.armyNumber -= (Math.ceil(ns3CityCheck.defense * ns3OwningDefMult))
            if(englandObject.armyNumber < 0) {
                englandObject.armyNumber = 50
            }
            englishArmyMoves -= 1
            setTimeout(returnHomeEnglish, 5000)
            armyPopJS.innerHTML = "Garrison: " + englandObject.armyNumber;
            console.log("english army was defeated by ns3")
            setTimeout(englishDefeatNS3, 5000)

        }
        if(englandObject.armyNumber * englishArmy.siegeMult > ns3CityCheck.defense * ns3OwningDefMult) {
            englandObject.armyNumber -= (Math.ceil(ns3CityCheck.defense * ns3OwningDefMult))
            if(englandObject.armyNumber < 0) {
                englandObject.armyNumber = 50
            }
            englishArmyMoves -= 1
            ns3CityCheck.defense -= (Math.ceil(ns3CityCheck.defense/2))
            ns3OwningDefMult = englandObject.defenseMult
            armyPopJS.innerHTML = "Garrison: " + englandObject.armyNumber;
            console.log("english army was victorious")
            setTimeout(englishVictoryNS3, 5000)

            //when colonized
            setTimeout(englandNS3, 5000)

            englandObject.wealth += 5000
            currentWealthJS.innerHTML = englandObject.wealth + " Gold";
        }
    }
    if(spainMode && ns3SELECT && spanishArmyMoves == 1) {
        prog.getElementById("newsInfo").style.animation = "newsAnim 5s infinite"
        prog.getElementById("newsInfo").innerHTML = "Spain's Colonial Army is on the move to " + ns3CityCheck.cityName
        spanishArmy.siegeMode = true
        ns3CityCheck.underSiege = true
        prog.getElementById("spanishArmy").style.left = locations.ns3.left + pixelLoc
        prog.getElementById("spanishArmy").style.top = locations.ns3.top + pixelLoc
        prog.getElementById("spanishArmy").style.imageRendering = "pixelated"
        if(spainObject.armyNumber * spanishArmy.siegeMult < ns3CityCheck.defense * ns3OwningDefMult) {
            spainObject.armyNumber -= (Math.ceil(ns3CityCheck.defense * ns3OwningDefMult))
            if(spainObject.armyNumber < 0) {
                spainObject.armyNumber = 50
            }
            spanishArmyMoves -= 1
            setTimeout(returnHomeSpanish, 5000)
            armyPopJS.innerHTML = "Garrison: " + spainObject.armyNumber;
            console.log("spanish army was defeated by ns3")
            setTimeout(spanishDefeatNS3, 5000)
        }
        if(spainObject.armyNumber * spanishArmy.siegeMult > ns3CityCheck.defense * ns3OwningDefMult) {
            spainObject.armyNumber -= (Math.ceil(ns3CityCheck.defense * ns3OwningDefMult))
            if(spainObject.armyNumber < 0) {
                spainObject.armyNumber = 50
            }
            spanishArmyMoves -= 1
            ns3CityCheck.defense -= (Math.ceil(ns3CityCheck.defense/2))
            ns3OwningDefMult = spainObject.defenseMult
            armyPopJS.innerHTML = "Garrison: " + spainObject.armyNumber;
            console.log("spanish army was victorious")
            setTimeout(spanishVictoryNS3, 5000)

            //when colonized
            setTimeout(spainNS3, 5000)

            spainObject.wealth += 5000
            currentWealthJS.innerHTML = spainObject.wealth + " Gold";
        }
    }
    if(dutchMode && ns3SELECT && dutchArmyMoves == 1) {
        prog.getElementById("newsInfo").style.animation = "newsAnim 5s infinite"
        prog.getElementById("newsInfo").innerHTML = "The Netherland's Colonial Army is on the move to " + ns3CityCheck.cityName
        dutchArmy.siegeMode = true
        ns3CityCheck.underSiege = true
        prog.getElementById("dutchArmy").style.left = locations.ns3.left + pixelLoc
        prog.getElementById("dutchArmy").style.top = locations.ns3.top + pixelLoc
        prog.getElementById("dutchArmy").style.imageRendering = "pixelated"
        if(dutchObject.armyNumber * dutchArmy.siegeMult < ns3CityCheck.defense * ns3OwningDefMult) {
            dutchObject.armyNumber -= (Math.ceil(ns3CityCheck.defense * ns3OwningDefMult))
            if(dutchObject.armyNumber < 0) {
                dutchObject.armyNumber = 50
            }
            dutchArmyMoves -= 1
            setTimeout(returnHomeDutch, 5000)
            armyPopJS.innerHTML = "Garrison: " + dutchObject.armyNumber;
            console.log("dutch army was defeated by ns3")
            setTimeout(dutchDefeatNS3, 5000)
        }
        if(dutchObject.armyNumber * dutchArmy.siegeMult > ns3CityCheck.defense * ns3OwningDefMult) {
            dutchObject.armyNumber -= (Math.ceil(ns3CityCheck.defense * ns3OwningDefMult))
            if(dutchObject.armyNumber < 0) {
                dutchObject.armyNumber = 50
            }
            dutchArmyMoves -= 1
            ns3CityCheck.defense -= (Math.ceil(ns3CityCheck.defense/2))
            ns3OwningDefMult = dutchObject.defenseMult
            armyPopJS.innerHTML = "Garrison: " + dutchObject.armyNumber;
            console.log("dutch army was victorious")
            setTimeout(dutchVictoryNS3, 5000)

            //when colonized
            setTimeout(dutchNS3, 5000)

            dutchObject.wealth += 5000
            currentWealthJS.innerHTML = dutchObject.wealth + " Gold";
        }
    }


    //ns4 


    if(franceMode && ns4SELECT && frenchArmyMoves == 1) {
        prog.getElementById("newsInfo").style.animation = "newsAnim 5s infinite"
        prog.getElementById("newsInfo").innerHTML = "France's Colonial Army is on the move to " + ns4CityCheck.cityName
        frenchArmy.siegeMode = true
        ns4CityCheck.underSiege = true
        prog.getElementById("frenchArmy").style.left = locations.ns4.left + pixelLoc
        prog.getElementById("frenchArmy").style.top = locations.ns4.top + pixelLoc
        prog.getElementById("frenchArmy").style.imageRendering = "pixelated"
        if(franceObject.armyNumber * frenchArmy.siegeMult < ns4CityCheck.defense * ns4OwningDefMult) {
            franceObject.armyNumber -= (Math.ceil(ns4CityCheck.defense * ns4OwningDefMult))
            if(franceObject.armyNumber < 0) {
                franceObject.armyNumber = 50
            }
            frenchArmyMoves -= 1
            setTimeout(returnHomeFrench, 5000)
            armyPopJS.innerHTML = "Garrison: " + franceObject.armyNumber;
            console.log("french army was defeated by ns3")
            setTimeout(frenchDefeatNS4, 5000)
        }
        if(franceObject.armyNumber * frenchArmy.siegeMult > ns4CityCheck.defense * ns4OwningDefMult) {
            franceObject.armyNumber -= (Math.ceil(ns4CityCheck.defense * ns4OwningDefMult))
            if(franceObject.armyNumber < 0) {
                franceObject.armyNumber = 50
            }
            frenchArmyMoves -= 1
            ns4CityCheck.defense -= (Math.ceil(ns4CityCheck.defense/2))
            ns4OwningDefMult = franceObject.defenseMult
            armyPopJS.innerHTML = "Garrison: " + franceObject.armyNumber;
            console.log("french army was victorious")
            setTimeout(frenchVictoryNS4, 5000)

            //when colonized
            setTimeout(franceNS4, 5000)

            franceObject.wealth += 5000
            currentWealthJS.innerHTML = franceObject.wealth + " Gold";
        }
    }
    if(englandMode && ns4SELECT && englishArmyMoves == 1) {
        prog.getElementById("newsInfo").style.animation = "newsAnim 5s infinite"
        prog.getElementById("newsInfo").innerHTML = "England's Colonial Army is on the move to " + ns4CityCheck.cityName
        englishArmy.siegeMode = true
        ns4CityCheck.underSiege = true
        prog.getElementById("englishArmy").style.left = locations.ns4.left + pixelLoc
        prog.getElementById("englishArmy").style.top = locations.ns4.top + pixelLoc
        prog.getElementById("englishArmy").style.imageRendering = "pixelated"
        if(englandObject.armyNumber * englishArmy.siegeMult < ns4CityCheck.defense * ns4OwningDefMult) {
            englandObject.armyNumber -= (Math.ceil(ns4CityCheck.defense * ns4OwningDefMult))
            if(englandObject.armyNumber < 0) {
                englandObject.armyNumber = 50
            }
            englishArmyMoves -= 1
            setTimeout(returnHomeEnglish, 5000)
            armyPopJS.innerHTML = "Garrison: " + englandObject.armyNumber;
            console.log("english army was defeated by ns3")
            setTimeout(englishDefeatNS4, 5000)

        }
        if(englandObject.armyNumber * englishArmy.siegeMult > ns4CityCheck.defense * ns4OwningDefMult) {
            englandObject.armyNumber -= (Math.ceil(ns4CityCheck.defense * ns4OwningDefMult))
            if(englandObject.armyNumber < 0) {
                englandObject.armyNumber = 50
            }
            englishArmyMoves -= 1
            ns4CityCheck.defense -= (Math.ceil(ns4CityCheck.defense/2))
            ns4OwningDefMult = englandObject.defenseMult
            armyPopJS.innerHTML = "Garrison: " + englandObject.armyNumber;
            console.log("english army was victorious")
            setTimeout(englishVictoryNS4, 5000)

            //when colonized
            setTimeout(englandNS4, 5000)

            englandObject.wealth += 5000
            currentWealthJS.innerHTML = englandObject.wealth + " Gold";
        }
    }
    if(spainMode && ns4SELECT && spanishArmyMoves == 1) {
        prog.getElementById("newsInfo").style.animation = "newsAnim 5s infinite"
        prog.getElementById("newsInfo").innerHTML = "Spain's Colonial Army is on the move to " + ns4CityCheck.cityName
        spanishArmy.siegeMode = true
        ns4CityCheck.underSiege = true
        prog.getElementById("spanishArmy").style.left = locations.ns4.left + pixelLoc
        prog.getElementById("spanishArmy").style.top = locations.ns4.top + pixelLoc
        prog.getElementById("spanishArmy").style.imageRendering = "pixelated"
        if(spainObject.armyNumber * spanishArmy.siegeMult < ns4CityCheck.defense * ns4OwningDefMult) {
            spainObject.armyNumber -= (Math.ceil(ns4CityCheck.defense * ns4OwningDefMult))
            if(spainObject.armyNumber < 0) {
                spainObject.armyNumber = 50
            }
            spanishArmyMoves -= 1
            setTimeout(returnHomeSpanish, 5000)
            armyPopJS.innerHTML = "Garrison: " + spainObject.armyNumber;
            console.log("spanish army was defeated by ns3")
            setTimeout(spanishDefeatNS4, 5000)
        }

        if(spainObject.armyNumber * spanishArmy.siegeMult > ns4CityCheck.defense * ns4OwningDefMult) {
            spainObject.armyNumber -= (Math.ceil(ns4CityCheck.defense * ns4OwningDefMult))
            if(spainObject.armyNumber < 0) {
                spainObject.armyNumber = 50
            }
            spanishArmyMoves -= 1
            ns4CityCheck.defense -= (Math.ceil(ns4CityCheck.defense/2))
            ns4OwningDefMult = spainObject.defenseMult
            armyPopJS.innerHTML = "Garrison: " + spainObject.armyNumber;
            console.log("spanish army was victorious")
            setTimeout(spanishVictoryNS4, 5000)

            //when colonized
            setTimeout(spainNS4, 5000)

            spainObject.wealth += 5000
            currentWealthJS.innerHTML = spainObject.wealth + " Gold";
        }
    }
    if(dutchMode && ns4SELECT && dutchArmyMoves == 1) {
        prog.getElementById("newsInfo").style.animation = "newsAnim 5s infinite"
        prog.getElementById("newsInfo").innerHTML = "The Netherland's Colonial Army is on the move to " + ns4CityCheck.cityName
        dutchArmy.siegeMode = true
        ns4CityCheck.underSiege = true
        prog.getElementById("dutchArmy").style.left = locations.ns4.left + pixelLoc
        prog.getElementById("dutchArmy").style.top = locations.ns4.top + pixelLoc
        prog.getElementById("dutchArmy").style.imageRendering = "pixelated"
        if(dutchObject.armyNumber * dutchArmy.siegeMult < ns4CityCheck.defense * ns4OwningDefMult) {
            dutchObject.armyNumber -= (Math.ceil(ns4CityCheck.defense * ns4OwningDefMult))
            if(dutchObject.armyNumber < 0) {
                dutchObject.armyNumber = 50
            }
            dutchArmyMoves -= 1
            setTimeout(returnHomeDutch, 5000)
            armyPopJS.innerHTML = "Garrison: " + dutchObject.armyNumber;
            console.log("dutch army was defeated by ns3")
            setTimeout(dutchDefeatNS4, 5000)
        }
        if(dutchObject.armyNumber * dutchArmy.siegeMult > ns4CityCheck.defense * ns4OwningDefMult) {
            dutchObject.armyNumber -= (Math.ceil(ns4CityCheck.defense * ns4OwningDefMult))
            if(dutchObject.armyNumber < 0) {
                dutchObject.armyNumber = 50
            }
            dutchArmyMoves -= 1
            ns4CityCheck.defense -= (Math.ceil(ns4CityCheck.defense/2))
            ns4OwningDefMult = dutchObject.defenseMult
            armyPopJS.innerHTML = "Garrison: " + dutchObject.armyNumber;
            console.log("dutch army was victorious")
            setTimeout(dutchVictoryNS4, 5000)

            //when colonized
            setTimeout(dutchNS4, 5000)

            dutchObject.wealth += 5000
            currentWealthJS.innerHTML = dutchObject.wealth + " Gold";
        }
    }


    //ns5 


    if(franceMode && ns5SELECT && frenchArmyMoves == 1) {
        prog.getElementById("newsInfo").style.animation = "newsAnim 5s infinite"
        prog.getElementById("newsInfo").innerHTML = "France's Colonial Army is on the move to " + ns5CityCheck.cityName
        frenchArmy.siegeMode = true
        ns5CityCheck.underSiege = true
        prog.getElementById("frenchArmy").style.left = locations.ns5.left + pixelLoc
        prog.getElementById("frenchArmy").style.top = locations.ns5.top + pixelLoc
        prog.getElementById("frenchArmy").style.imageRendering = "pixelated"
        if(franceObject.armyNumber * frenchArmy.siegeMult < ns5CityCheck.defense * ns5OwningDefMult) {
            franceObject.armyNumber -= (Math.ceil(ns5CityCheck.defense * ns5OwningDefMult))
            if(franceObject.armyNumber < 0) {
                franceObject.armyNumber = 50
            }
            frenchArmyMoves -= 1
            setTimeout(returnHomeFrench, 5000)
            armyPopJS.innerHTML = "Garrison: " + franceObject.armyNumber;
            console.log("french army was defeated by ns3")
            setTimeout(frenchDefeatNS5, 5000)
        }
        if(franceObject.armyNumber * frenchArmy.siegeMult > ns5CityCheck.defense * ns5OwningDefMult) {
            franceObject.armyNumber -= (Math.ceil(ns5CityCheck.defense * ns5OwningDefMult))
            if(franceObject.armyNumber < 0) {
                franceObject.armyNumber = 50
            }
            frenchArmyMoves -= 1
            ns5CityCheck.defense -= (Math.ceil(ns5CityCheck.defense/2))
            ns5OwningDefMult = franceObject.defenseMult
            armyPopJS.innerHTML = "Garrison: " + franceObject.armyNumber;
            console.log("french army was victorious")
            setTimeout(frenchVictoryNS5, 5000)

            //when colonized
            setTimeout(franceNS5, 5000)

            franceObject.wealth += 5000
            currentWealthJS.innerHTML = franceObject.wealth + " Gold";
        }
    }
    if(englandMode && ns5SELECT && englishArmyMoves == 1) {
        prog.getElementById("newsInfo").style.animation = "newsAnim 5s infinite"
        prog.getElementById("newsInfo").innerHTML = "England's Colonial Army is on the move to " + ns5CityCheck.cityName
        englishArmy.siegeMode = true
        ns5CityCheck.underSiege = true
        prog.getElementById("englishArmy").style.left = locations.ns5.left + pixelLoc
        prog.getElementById("englishArmy").style.top = locations.ns5.top + pixelLoc
        prog.getElementById("englishArmy").style.imageRendering = "pixelated"
        if(englandObject.armyNumber * englishArmy.siegeMult < ns5CityCheck.defense * ns5OwningDefMult) {
            englandObject.armyNumber -= (Math.ceil(ns5CityCheck.defense * ns5OwningDefMult))
            if(englandObject.armyNumber < 0) {
                englandObject.armyNumber = 50
            }
            englishArmyMoves -= 1
            setTimeout(returnHomeEnglish, 5000)
            armyPopJS.innerHTML = "Garrison: " + englandObject.armyNumber;
            console.log("english army was defeated by ns3")
            setTimeout(englishDefeatNS5, 5000)

        }
        if(englandObject.armyNumber * englishArmy.siegeMult > ns5CityCheck.defense * ns5OwningDefMult) {
            englandObject.armyNumber -= (Math.ceil(ns5CityCheck.defense * ns5OwningDefMult))
            if(englandObject.armyNumber < 0) {
                englandObject.armyNumber = 50
            }
            englishArmyMoves -= 1
            ns5CityCheck.defense -= (Math.ceil(ns5CityCheck.defense/2))
            ns5OwningDefMult = englandObject.defenseMult
            armyPopJS.innerHTML = "Garrison: " + englandObject.armyNumber;
            console.log("english army was victorious")
            setTimeout(englishVictoryNS5, 5000)

            //when colonized
            setTimeout(englandNS5, 5000)

            englandObject.wealth += 5000
            currentWealthJS.innerHTML = englandObject.wealth + " Gold";
        }
    }
    if(spainMode && ns5SELECT && spanishArmyMoves == 1) {
        prog.getElementById("newsInfo").style.animation = "newsAnim 5s infinite"
        prog.getElementById("newsInfo").innerHTML = "Spain's Colonial Army is on the move to " + ns5CityCheck.cityName
        spanishArmy.siegeMode = true
        ns5CityCheck.underSiege = true
        prog.getElementById("spanishArmy").style.left = locations.ns5.left + pixelLoc
        prog.getElementById("spanishArmy").style.top = locations.ns5.top + pixelLoc
        prog.getElementById("spanishArmy").style.imageRendering = "pixelated"
        if(spainObject.armyNumber * spanishArmy.siegeMult < ns5CityCheck.defense * ns5OwningDefMult) {
            spainObject.armyNumber -= (Math.ceil(ns5CityCheck.defense * ns5OwningDefMult))
            if(spainObject.armyNumber < 0) {
                spainObject.armyNumber = 50
            }
            spanishArmyMoves -= 1
            setTimeout(returnHomeSpanish, 5000)
            armyPopJS.innerHTML = "Garrison: " + spainObject.armyNumber;
            console.log("spanish army was defeated by ns3")
            setTimeout(spanishDefeatNS5, 5000)
        }

        if(spainObject.armyNumber * spanishArmy.siegeMult > ns5CityCheck.defense * ns5OwningDefMult) {
            spainObject.armyNumber -= (Math.ceil(ns5CityCheck.defense * ns5OwningDefMult))
            if(spainObject.armyNumber < 0) {
                spainObject.armyNumber = 50
            }
            spanishArmyMoves -= 1
            ns5CityCheck.defense -= (Math.ceil(ns5CityCheck.defense/2))
            ns5OwningDefMult = spainObject.defenseMult
            armyPopJS.innerHTML = "Garrison: " + spainObject.armyNumber;
            console.log("spanish army was victorious")
            setTimeout(spanishVictoryNS5, 5000)

            //when colonized
            setTimeout(spainNS5, 5000)

            spainObject.wealth += 5000
            currentWealthJS.innerHTML = spainObject.wealth + " Gold";
        }
    }
    if(dutchMode && ns5SELECT && dutchArmyMoves == 1) {
        prog.getElementById("newsInfo").style.animation = "newsAnim 5s infinite"
        prog.getElementById("newsInfo").innerHTML = "The Netherland's Colonial Army is on the move to " + ns5CityCheck.cityName
        dutchArmy.siegeMode = true
        ns5CityCheck.underSiege = true
        prog.getElementById("dutchArmy").style.left = locations.ns5.left + pixelLoc
        prog.getElementById("dutchArmy").style.top = locations.ns5.top + pixelLoc
        prog.getElementById("dutchArmy").style.imageRendering = "pixelated"
        if(dutchObject.armyNumber * dutchArmy.siegeMult < ns5CityCheck.defense * ns5OwningDefMult) {
            dutchObject.armyNumber -= (Math.ceil(ns5CityCheck.defense * ns5OwningDefMult))
            if(dutchObject.armyNumber < 0) {
                dutchObject.armyNumber = 50
            }
            dutchArmyMoves -= 1
            setTimeout(returnHomeDutch, 5000)
            armyPopJS.innerHTML = "Garrison: " + dutchObject.armyNumber;
            console.log("dutch army was defeated by ns3")
            setTimeout(dutchDefeatNS5, 5000)
        }
        if(dutchObject.armyNumber * dutchArmy.siegeMult > ns5CityCheck.defense * ns5OwningDefMult) {
            dutchObject.armyNumber -= (Math.ceil(ns5CityCheck.defense * ns5OwningDefMult))
            if(dutchObject.armyNumber < 0) {
                dutchObject.armyNumber = 50
            }
            dutchArmyMoves -= 1
            ns5CityCheck.defense -= (Math.ceil(ns5CityCheck.defense/2))
            ns5OwningDefMult = dutchObject.defenseMult
            armyPopJS.innerHTML = "Garrison: " + dutchObject.armyNumber;
            console.log("dutch army was victorious")
            setTimeout(dutchVictoryNS5, 5000)

            //when colonized
            setTimeout(dutchNS5, 5000)

            dutchObject.wealth += 5000
            currentWealthJS.innerHTML = dutchObject.wealth + " Gold";
        }
    }


    if(franceMode && frenchArmyMoves == 0) {
        console.log("frenchArmy out of moves")
    }
    if(englandMode && englishArmyMoves == 0) {
        console.log("englishArmy out of moves")
    }
    if(spainMode && spanishArmyMoves == 0) {
        console.log("spanishArmy out of moves")
    }
    if(dutchMode && dutchArmyMoves == 0) {
        console.log("dutchArmy out of moves")
    }
}