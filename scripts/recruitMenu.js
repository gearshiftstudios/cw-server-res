

function changeInfoInfantry() {
    if(franceMode) {
        prog.getElementById('unitInfo').innerHTML = "<div style='color: turquoise;'>" + frenchArmy.unitName + "</div>\n" + frenchArmy.trainNumber + " soldiers\n<div style='color: gold;'>" + frenchArmy.unitCost + " Gold</div>\n<div style='color: grey;'>Well rounded infantry unit</div>"
    }
    if(englandMode) {
        prog.getElementById('unitInfo').innerHTML = "<div style='color: turquoise;'>" + englishArmy.unitName + "</div>\n" + englishArmy.trainNumber + " soldiers\n<div style='color: gold;'>" + englishArmy.unitCost + " Gold</div>\n<div style='color: grey;'>Well rounded infantry unit</div>"
    }
    if(spainMode) {
        prog.getElementById('unitInfo').innerHTML = "<div style='color: turquoise;'>" + spanishArmy.unitName + "</div>\n" + spanishArmy.trainNumber + " soldiers\n<div style='color: gold;'>" + spanishArmy.unitCost + " Gold</div>\n<div style='color: grey;'>Well rounded infantry unit</div>"
    }
    if(dutchMode) {
        prog.getElementById('unitInfo').innerHTML = "<div style='color: turquoise;'>" + dutchArmy.unitName + "</div>\n" + dutchArmy.trainNumber + " soldiers\n<div style='color: gold;'>" + dutchArmy.unitCost + " Gold</div>\n<div style='color: grey;'>Well rounded infantry unit</div>"
    }
    
}
function changeInfoNavy() {
    if(franceMode) {
        prog.getElementById('unitInfo').innerHTML = "<div style='color: turquoise;'>" + frenchNavy.unitName + "</div>\n" + frenchNavy.trainNumber + " Ship\n<div style='color: gold;'>" + frenchNavy.unitCost + " Gold</div>\n<div style='color: grey;'>Increases income +" + frenchNavy.incomeADD + "</div>"
    }
    if(englandMode) {
        prog.getElementById('unitInfo').innerHTML = "<div style='color: turquoise;'>" + englishNavy.unitName + "</div>\n" + englishNavy.trainNumber + " Ship\n<div style='color: gold;'>" + englishNavy.unitCost + " Gold</div>\n<div style='color: grey;'>Increases income +" + englishNavy.incomeADD + "</div>"
    }
    if(spainMode) {
        prog.getElementById('unitInfo').innerHTML = "<div style='color: turquoise;'>" + spanishNavy.unitName + "</div>\n" + spanishNavy.trainNumber + " Ship\n<div style='color: gold;'>" + spanishNavy.unitCost + " Gold</div>\n<div style='color: grey;'>Increases income +" + spanishNavy.incomeADD + "</div>"
    }
    if(dutchMode) {
        prog.getElementById('unitInfo').innerHTML = "<div style='color: turquoise;'>" + dutchNavy.unitName + "</div>\n" + dutchNavy.trainNumber + " Ship\n<div style='color: gold;'>" + dutchNavy.unitCost + " Gold</div>\n<div style='color: grey;'>Increases income +" + dutchNavy.incomeADD + "</div>"
    }
}
function changeInfoDefender() {
    if(franceMode) {
        prog.getElementById('unitInfo').innerHTML = "<div style='color: turquoise;'>Defender</div>\n" + frenchArmy.defenderInfo.trainNumber + " men\n<div style='color: gold;'>" + frenchArmy.defenderInfo.unitCost + " Gold</div>\n<div style='color: grey;'>Defenders of colonies</div>"
    }
    if(englandMode) {
        prog.getElementById('unitInfo').innerHTML = "<div style='color: turquoise;'>Defender</div>\n" + englishArmy.defenderInfo.trainNumber + " men\n<div style='color: gold;'>" + englishArmy.defenderInfo.unitCost + " Gold</div>\n<div style='color: grey;'>Defenders of colonies</div>"
    }
    if(spainMode) {
        prog.getElementById('unitInfo').innerHTML = "<div style='color: turquoise;'>Defender</div>\n" + spanishArmy.defenderInfo.trainNumber + " men\n<div style='color: gold;'>" + spanishArmy.defenderInfo.unitCost + " Gold</div>\n<div style='color: grey;'>Defenders of colonies</div>"
    }
    if(dutchMode) {
        prog.getElementById('unitInfo').innerHTML = "<div style='color: turquoise;'>Defender</div>\n" + dutchArmy.defenderInfo.trainNumber + " men\n<div style='color: gold;'>" + dutchArmy.defenderInfo.unitCost + " Gold</div>\n<div style='color: grey;'>Defenders of colonies</div>"
    }
    
}
function goBackUnitInfo() {
    prog.getElementById('unitInfo').innerHTML = "Hover over units to see info"
}
function selectGunUnit() {
    if(franceMode && franceObject.wealth >= frenchArmy.unitCost) {
        franceObject.armyNumber += frenchArmy.trainNumber;
        franceObject.wealth -= frenchArmy.unitCost;
        franceObject.income -= 1;
        armyPopJS.innerHTML = "Garrison: " + franceObject.armyNumber;
        currentIncomeJS.innerHTML = franceObject.income + "+ GPT";
        currentWealthJS.innerHTML = franceObject.wealth + " Gold";
    }
    if(englandMode && englandObject.wealth >= englishArmy.unitCost) {
        englandObject.armyNumber += englishArmy.trainNumber;
        englandObject.wealth -= englishArmy.unitCost;
        englandObject.income -= 1;
        armyPopJS.innerHTML = "Garrison: " + englandObject.armyNumber;
        currentIncomeJS.innerHTML = englandObject.income + "+ GPT";
        currentWealthJS.innerHTML = englandObject.wealth + " Gold";
    }
    if(spainMode && spainObject.wealth >= spanishArmy.unitCost) {
        spainObject.armyNumber += spanishArmy.trainNumber;
        spainObject.wealth -= spanishArmy.unitCost;
        spainObject.income -= 1;
        armyPopJS.innerHTML = "Garrison: " + spainObject.armyNumber;
        currentIncomeJS.innerHTML = spainObject.income + "+ GPT";
        currentWealthJS.innerHTML = spainObject.wealth + " Gold";
    }
    if(dutchMode && dutchObject.wealth >= dutchArmy.unitCost) {
        dutchObject.armyNumber += dutchArmy.trainNumber;
        dutchObject.wealth -= dutchArmy.unitCost;
        dutchObject.income -= 1;
        armyPopJS.innerHTML = "Garrison: " + dutchObject.armyNumber;
        currentIncomeJS.innerHTML = dutchObject.income + "+ GPT";
        currentWealthJS.innerHTML = dutchObject.wealth + " Gold";
    }
    if(franceMode && franceObject.wealth < frenchArmy.unitCost){
        console.clear()
        console.log("not enough funds to buy unit")
    }
    if(englandMode && englandObject.wealth < englishArmy.unitCost){
        console.clear()
        console.log("not enough funds to buy unit")
    }
    if(spainMode && spainObject.wealth < spanishArmy.unitCost){
        console.clear()
        console.log("not enough funds to buy unit")
    }
    if(dutchMode && dutchObject.wealth < dutchArmy.unitCost){
        console.clear()
        console.log("not enough funds to buy unit")
    }
    console.clear()
    console.log("franceArmy: " + franceObject.armyNumber)
    console.log("englandArmy: " + englandObject.armyNumber)
    console.log("spainArmy: " + spainObject.armyNumber)
    console.log("dutchArmy: " + dutchObject.armyNumber)
}
function selectNavalUnit() {
    if(franceMode && franceObject.wealth >= frenchNavy.unitCost) {
        franceObject.navyNumber += frenchNavy.trainNumber;
        franceObject.wealth -= frenchNavy.unitCost;
        franceObject.income += frenchNavy.incomeADD;
        currentIncomeJS.innerHTML = franceObject.income + "+ GPT";
        currentWealthJS.innerHTML = franceObject.wealth + " Gold";
    }
    if(englandMode && englandObject.wealth >= englishNavy.unitCost) {
        englandObject.navyNumber += englishNavy.trainNumber;
        englandObject.wealth -= englishNavy.unitCost;
        englandObject.income += englishNavy.incomeADD;
        currentIncomeJS.innerHTML = englandObject.income + "+ GPT";
        currentWealthJS.innerHTML = englandObject.wealth + " Gold";
    }
    if(spainMode && spainObject.wealth >= spanishNavy.unitCost) {
        spainObject.navyNumber += spanishNavy.trainNumber;
        spainObject.wealth -= spanishNavy.unitCost;
        spainObject.income += spanishNavy.incomeADD;
        currentIncomeJS.innerHTML = spainObject.income + "+ GPT";
        currentWealthJS.innerHTML = spainObject.wealth + " Gold";
    }
    if(dutchMode && dutchObject.wealth >= dutchNavy.unitCost) {
        dutchObject.navyNumber += dutchNavy.trainNumber;
        dutchObject.wealth -= dutchNavy.unitCost;
        dutchObject.income += dutchNavy.incomeADD;
        currentIncomeJS.innerHTML = dutchObject.income + "+ GPT";
        currentWealthJS.innerHTML = dutchObject.wealth + " Gold";
    }
    if(franceMode && franceObject.wealth < frenchNavy.unitCost){
        console.clear()
        console.log("not enough funds to buy unit")
    }
    if(englandMode && englandObject.wealth < englishNavy.unitCost){
        console.clear()
        console.log("not enough funds to buy unit")
    }
    if(spainMode && spainObject.wealth < spanishNavy.unitCost){
        console.clear()
        console.log("not enough funds to buy unit")
    }
    if(dutchMode && dutchObject.wealth < dutchNavy.unitCost){
        console.clear()
        console.log("not enough funds to buy unit")
    }
    console.clear()
    console.log("franceNavy: " + franceObject.navyNumber)
    console.log("englandNavy: " + englandObject.navyNumber)
    console.log("spainNavy: " + spainObject.navyNumber)
    console.log("dutchNavy: " + dutchObject.navyNumber)
}





function selectDefenders() {
    if(franceMode && franceObject.wealth >= frenchArmy.defenderInfo.unitCost) {
        if(quebec) {
            quebecCityCheck.defense += frenchArmy.defenderInfo.trainNumber;
            franceObject.wealth -= frenchArmy.defenderInfo.unitCost;
            franceObject.income -= 1;
            currentIncomeJS.innerHTML = franceObject.income + "+ GPT";
            currentWealthJS.innerHTML = franceObject.wealth + " Gold";
        }
        if(jamestown) {
            jamestownCityCheck.defense += frenchArmy.defenderInfo.trainNumber;
            franceObject.wealth -= frenchArmy.defenderInfo.unitCost;
            franceObject.income -= 1;
            currentIncomeJS.innerHTML = franceObject.income + "+ GPT";
            currentWealthJS.innerHTML = franceObject.wealth + " Gold";
        }
        if(santoDomingo) {
            santoDomingoCityCheck.defense += frenchArmy.defenderInfo.trainNumber;
            franceObject.wealth -= frenchArmy.defenderInfo.unitCost;
            franceObject.income -= 1;
            currentIncomeJS.innerHTML = franceObject.income + "+ GPT";
            currentWealthJS.innerHTML = franceObject.wealth + " Gold";
        }
        if(newAmsterdam) {
            newAmsterdamCityCheck.defense += frenchArmy.defenderInfo.trainNumber;
            franceObject.wealth -= frenchArmy.defenderInfo.unitCost;
            franceObject.income -= 1;
            currentIncomeJS.innerHTML = franceObject.income + "+ GPT";
            currentWealthJS.innerHTML = franceObject.wealth + " Gold";
        }
        if(ns1SELECT) {
            ns1CityCheck.defense += frenchArmy.defenderInfo.trainNumber;
            franceObject.wealth -= frenchArmy.defenderInfo.unitCost;
            franceObject.income -= 1;
            currentIncomeJS.innerHTML = franceObject.income + "+ GPT";
            currentWealthJS.innerHTML = franceObject.wealth + " Gold";
        }
        if(ns2SELECT) {
            ns2CityCheck.defense += frenchArmy.defenderInfo.trainNumber;
            franceObject.wealth -= frenchArmy.defenderInfo.unitCost;
            franceObject.income -= 1;
            currentIncomeJS.innerHTML = franceObject.income + "+ GPT";
            currentWealthJS.innerHTML = franceObject.wealth + " Gold";
        }
        if(ns3SELECT) {
            ns3CityCheck.defense += frenchArmy.defenderInfo.trainNumber;
            franceObject.wealth -= frenchArmy.defenderInfo.unitCost;
            franceObject.income -= 1;
            currentIncomeJS.innerHTML = franceObject.income + "+ GPT";
            currentWealthJS.innerHTML = franceObject.wealth + " Gold";
        }
        if(ns4SELECT) {
            ns4CityCheck.defense += frenchArmy.defenderInfo.trainNumber;
            franceObject.wealth -= frenchArmy.defenderInfo.unitCost;
            franceObject.income -= 1;
            currentIncomeJS.innerHTML = franceObject.income + "+ GPT";
            currentWealthJS.innerHTML = franceObject.wealth + " Gold";
        }
        if(ns5SELECT) {
            ns5CityCheck.defense += frenchArmy.defenderInfo.trainNumber;
            franceObject.wealth -= frenchArmy.defenderInfo.unitCost;
            franceObject.income -= 1;
            currentIncomeJS.innerHTML = franceObject.income + "+ GPT";
            currentWealthJS.innerHTML = franceObject.wealth + " Gold";
        }
        if(ns6SELECT) {
            ns6CityCheck.defense += frenchArmy.defenderInfo.trainNumber;
            franceObject.wealth -= frenchArmy.defenderInfo.unitCost;
            franceObject.income -= 1;
            currentIncomeJS.innerHTML = franceObject.income + "+ GPT";
            currentWealthJS.innerHTML = franceObject.wealth + " Gold";
        }
        console.clear()
        console.log("quebec defense: " + quebecCityCheck.defense)
        console.log("jamestown defense: " + jamestownCityCheck.defense)
        console.log("santo domingo defense: " + santoDomingoCityCheck.defense)
        console.log("new amsterdam defense: " + newAmsterdamCityCheck.defense)
        console.log("ns1 defense: " + ns1CityCheck.defense)
        console.log("ns2 defense: " + ns2CityCheck.defense)
        console.log("ns3 defense: " + ns3CityCheck.defense)
        console.log("ns4 defense: " + ns4CityCheck.defense)
        console.log("ns5 defense: " + ns5CityCheck.defense)
        console.log("ns6 defense: " + ns6CityCheck.defense)
    }
    if(englandMode && englandObject.wealth >= englishArmy.defenderInfo.unitCost) {
        if(quebec) {
            quebecCityCheck.defense += englishArmy.defenderInfo.trainNumber;
            englandObject.wealth -= englishArmy.defenderInfo.unitCost;
            englandObject.income -= 1;
            currentIncomeJS.innerHTML = englandObject.income + "+ GPT";
            currentWealthJS.innerHTML = englandObject.wealth + " Gold";
        }
        if(jamestown) {
            jamestownCityCheck.defense += englishArmy.defenderInfo.trainNumber;
            englandObject.wealth -= englishArmy.defenderInfo.unitCost;
            englandObject.income -= 1;
            currentIncomeJS.innerHTML = englandObject.income + "+ GPT";
            currentWealthJS.innerHTML = englandObject.wealth + " Gold";
        }
        if(santoDomingo) {
            santoDomingoCityCheck.defense += englishArmy.defenderInfo.trainNumber;
            englandObject.wealth -= englishArmy.defenderInfo.unitCost;
            englandObject.income -= 1;
            currentIncomeJS.innerHTML = englandObject.income + "+ GPT";
            currentWealthJS.innerHTML = englandObject.wealth + " Gold";
        }
        if(newAmsterdam) {
            newAmsterdamCityCheck.defense += englishArmy.defenderInfo.trainNumber;
            englandObject.wealth -= englishArmy.defenderInfo.unitCost;
            englandObject.income -= 1;
            currentIncomeJS.innerHTML = englandObject.income + "+ GPT";
            currentWealthJS.innerHTML = englandObject.wealth + " Gold";
        }
        if(ns1SELECT) {
            ns1CityCheck.defense += englishArmy.defenderInfo.trainNumber;
            englandObject.wealth -= englishArmy.defenderInfo.unitCost;
            englandObject.income -= 1;
            currentIncomeJS.innerHTML = englandObject.income + "+ GPT";
            currentWealthJS.innerHTML = englandObject.wealth + " Gold";
        }
        if(ns2SELECT) {
            ns2CityCheck.defense += englishArmy.defenderInfo.trainNumber;
            englandObject.wealth -= englishArmy.defenderInfo.unitCost;
            englandObject.income -= 1;
            currentIncomeJS.innerHTML = englandObject.income + "+ GPT";
            currentWealthJS.innerHTML = englandObject.wealth + " Gold";
        }
        if(ns3SELECT) {
            ns3CityCheck.defense += englishArmy.defenderInfo.trainNumber;
            englandObject.wealth -= englishArmy.defenderInfo.unitCost;
            englandObject.income -= 1;
            currentIncomeJS.innerHTML = englandObject.income + "+ GPT";
            currentWealthJS.innerHTML = englandObject.wealth + " Gold";
        }
        if(ns4SELECT) {
            ns4CityCheck.defense += englishArmy.defenderInfo.trainNumber;
            englandObject.wealth -= englishArmy.defenderInfo.unitCost;
            englandObject.income -= 1;
            currentIncomeJS.innerHTML = englandObject.income + "+ GPT";
            currentWealthJS.innerHTML = englandObject.wealth + " Gold";
        }
        if(ns5SELECT) {
            ns5CityCheck.defense += englishArmy.defenderInfo.trainNumber;
            englandObject.wealth -= englishArmy.defenderInfo.unitCost;
            englandObject.income -= 1;
            currentIncomeJS.innerHTML = englandObject.income + "+ GPT";
            currentWealthJS.innerHTML = englandObject.wealth + " Gold";
        }
        if(ns6SELECT) {
            ns6CityCheck.defense += englishArmy.defenderInfo.trainNumber;
            englandObject.wealth -= englishArmy.defenderInfo.unitCost;
            englandObject.income -= 1;
            currentIncomeJS.innerHTML = englandObject.income + "+ GPT";
            currentWealthJS.innerHTML = englandObject.wealth + " Gold";
        }
        console.clear()
        console.log("quebec defense: " + quebecCityCheck.defense)
        console.log("jamestown defense: " + jamestownCityCheck.defense)
        console.log("santo domingo defense: " + santoDomingoCityCheck.defense)
        console.log("new amsterdam defense: " + newAmsterdamCityCheck.defense)
        console.log("ns1 defense: " + ns1CityCheck.defense)
        console.log("ns2 defense: " + ns2CityCheck.defense)
        console.log("ns3 defense: " + ns3CityCheck.defense)
        console.log("ns4 defense: " + ns4CityCheck.defense)
        console.log("ns5 defense: " + ns5CityCheck.defense)
        console.log("ns6 defense: " + ns6CityCheck.defense)
    }
    if(spainMode && spainObject.wealth >= spanishArmy.defenderInfo.unitCost) {
        if(quebec) {
            quebecCityCheck.defense += spanishArmy.defenderInfo.trainNumber;
            spainObject.wealth -= spanishArmy.defenderInfo.unitCost;
            spainObject.income -= 1;
            currentIncomeJS.innerHTML = spainObject.income + "+ GPT";
            currentWealthJS.innerHTML = spainObject.wealth + " Gold";
        }
        if(jamestown) {
            jamestownCityCheck.defense += spanishArmy.defenderInfo.trainNumber;
            spainObject.wealth -= spanishArmy.defenderInfo.unitCost;
            spainObject.income -= 1;
            currentIncomeJS.innerHTML = spainObject.income + "+ GPT";
            currentWealthJS.innerHTML = spainObject.wealth + " Gold";
        }
        if(santoDomingo) {
            santoDomingoCityCheck.defense += spanishArmy.defenderInfo.trainNumber;
            spainObject.wealth -= spanishArmy.defenderInfo.unitCost;
            spainObject.income -= 1;
            currentIncomeJS.innerHTML = spainObject.income + "+ GPT";
            currentWealthJS.innerHTML = spainObject.wealth + " Gold";
        }
        if(newAmsterdam) {
            newAmsterdamCityCheck.defense += spanishArmy.defenderInfo.trainNumber;
            spainObject.wealth -= spanishArmy.defenderInfo.unitCost;
            spainObject.income -= 1;
            currentIncomeJS.innerHTML = spainObject.income + "+ GPT";
            currentWealthJS.innerHTML = spainObject.wealth + " Gold";
        }
        if(ns1SELECT) {
            ns1CityCheck.defense += spanishArmy.defenderInfo.trainNumber;
            spainObject.wealth -= spanishArmy.defenderInfo.unitCost;
            spainObject.income -= 1;
            currentIncomeJS.innerHTML = spainObject.income + "+ GPT";
            currentWealthJS.innerHTML = spainObject.wealth + " Gold";
        }
        if(ns2SELECT) {
            ns2CityCheck.defense += spanishArmy.defenderInfo.trainNumber;
            spainObject.wealth -= spanishArmy.defenderInfo.unitCost;
            spainObject.income -= 1;
            currentIncomeJS.innerHTML = spainObject.income + "+ GPT";
            currentWealthJS.innerHTML = spainObject.wealth + " Gold";
        }
        if(ns3SELECT) {
            ns3CityCheck.defense += spanishArmy.defenderInfo.trainNumber;
            spainObject.wealth -= spanishArmy.defenderInfo.unitCost;
            spainObject.income -= 1;
            currentIncomeJS.innerHTML = spainObject.income + "+ GPT";
            currentWealthJS.innerHTML = spainObject.wealth + " Gold";
        }
        if(ns4SELECT) {
            ns4CityCheck.defense += spanishArmy.defenderInfo.trainNumber;
            spainObject.wealth -= spanishArmy.defenderInfo.unitCost;
            spainObject.income -= 1;
            currentIncomeJS.innerHTML = spainObject.income + "+ GPT";
            currentWealthJS.innerHTML = spainObject.wealth + " Gold";
        }
        if(ns5SELECT) {
            ns5CityCheck.defense += spanishArmy.defenderInfo.trainNumber;
            spainObject.wealth -= spanishArmy.defenderInfo.unitCost;
            spainObject.income -= 1;
            currentIncomeJS.innerHTML = spainObject.income + "+ GPT";
            currentWealthJS.innerHTML = spainObject.wealth + " Gold";
        }
        if(ns6SELECT) {
            ns6CityCheck.defense += spanishArmy.defenderInfo.trainNumber;
            spainObject.wealth -= spanishArmy.defenderInfo.unitCost;
            spainObject.income -= 1;
            currentIncomeJS.innerHTML = spainObject.income + "+ GPT";
            currentWealthJS.innerHTML = spainObject.wealth + " Gold";
        }
        console.clear()
        console.log("quebec defense: " + quebecCityCheck.defense)
        console.log("jamestown defense: " + jamestownCityCheck.defense)
        console.log("santo domingo defense: " + santoDomingoCityCheck.defense)
        console.log("new amsterdam defense: " + newAmsterdamCityCheck.defense)
        console.log("ns1 defense: " + ns1CityCheck.defense)
        console.log("ns2 defense: " + ns2CityCheck.defense)
        console.log("ns3 defense: " + ns3CityCheck.defense)
        console.log("ns4 defense: " + ns4CityCheck.defense)
        console.log("ns5 defense: " + ns5CityCheck.defense)
        console.log("ns6 defense: " + ns6CityCheck.defense)
    }
    if(dutchMode && dutchObject.wealth >= dutchArmy.defenderInfo.unitCost) {
        if(quebec) {
            quebecCityCheck.defense += dutchArmy.defenderInfo.trainNumber;
            dutchObject.wealth -= dutchArmy.defenderInfo.unitCost;
            dutchObject.income -= 1;
            currentIncomeJS.innerHTML = dutchObject.income + "+ GPT";
            currentWealthJS.innerHTML = dutchObject.wealth + " Gold";
        }
        if(jamestown) {
            jamestownCityCheck.defense += dutchArmy.defenderInfo.trainNumber;
            dutchObject.wealth -= dutchArmy.defenderInfo.unitCost;
            dutchObject.income -= 1;
            currentIncomeJS.innerHTML = dutchObject.income + "+ GPT";
            currentWealthJS.innerHTML = dutchObject.wealth + " Gold";
        }
        if(santoDomingo) {
            santoDomingoCityCheck.defense += dutchArmy.defenderInfo.trainNumber;
            dutchObject.wealth -= dutchArmy.defenderInfo.unitCost;
            dutchObject.income -= 1;
            currentIncomeJS.innerHTML = dutchObject.income + "+ GPT";
            currentWealthJS.innerHTML = dutchObject.wealth + " Gold";
        }
        if(newAmsterdam) {
            newAmsterdamCityCheck.defense += dutchArmy.defenderInfo.trainNumber;
            dutchObject.wealth -= dutchArmy.defenderInfo.unitCost;
            dutchObject.income -= 1;
            currentIncomeJS.innerHTML = dutchObject.income + "+ GPT";
            currentWealthJS.innerHTML = dutchObject.wealth + " Gold";
        }
        if(ns1SELECT) {
            ns1CityCheck.defense += dutchArmy.defenderInfo.trainNumber;
            dutchObject.wealth -= dutchArmy.defenderInfo.unitCost;
            dutchObject.income -= 1;
            currentIncomeJS.innerHTML = dutchObject.income + "+ GPT";
            currentWealthJS.innerHTML = dutchObject.wealth + " Gold";
        }
        if(ns2SELECT) {
            ns2CityCheck.defense += dutchArmy.defenderInfo.trainNumber;
            dutchObject.wealth -= dutchArmy.defenderInfo.unitCost;
            dutchObject.income -= 1;
            currentIncomeJS.innerHTML = dutchObject.income + "+ GPT";
            currentWealthJS.innerHTML = dutchObject.wealth + " Gold";
        }
        if(ns3SELECT) {
            ns3CityCheck.defense += dutchArmy.defenderInfo.trainNumber;
            dutchObject.wealth -= dutchArmy.defenderInfo.unitCost;
            dutchObject.income -= 1;
            currentIncomeJS.innerHTML = dutchObject.income + "+ GPT";
            currentWealthJS.innerHTML = dutchObject.wealth + " Gold";
        }
        if(ns4SELECT) {
            ns4CityCheck.defense += dutchArmy.defenderInfo.trainNumber;
            dutchObject.wealth -= dutchArmy.defenderInfo.unitCost;
            dutchObject.income -= 1;
            currentIncomeJS.innerHTML = dutchObject.income + "+ GPT";
            currentWealthJS.innerHTML = dutchObject.wealth + " Gold";
        }
        if(ns5SELECT) {
            ns5CityCheck.defense += dutchArmy.defenderInfo.trainNumber;
            dutchObject.wealth -= dutchArmy.defenderInfo.unitCost;
            dutchObject.income -= 1;
            currentIncomeJS.innerHTML = dutchObject.income + "+ GPT";
            currentWealthJS.innerHTML = dutchObject.wealth + " Gold";
        }
        if(ns6SELECT) {
            ns6CityCheck.defense += dutchArmy.defenderInfo.trainNumber;
            dutchObject.wealth -= dutchArmy.defenderInfo.unitCost;
            dutchObject.income -= 1;
            currentIncomeJS.innerHTML = dutchObject.income + "+ GPT";
            currentWealthJS.innerHTML = dutchObject.wealth + " Gold";
        }
        console.clear()
        console.log("quebec defense: " + quebecCityCheck.defense)
        console.log("jamestown defense: " + jamestownCityCheck.defense)
        console.log("santo domingo defense: " + santoDomingoCityCheck.defense)
        console.log("new amsterdam defense: " + newAmsterdamCityCheck.defense)
        console.log("ns1 defense: " + ns1CityCheck.defense)
        console.log("ns2 defense: " + ns2CityCheck.defense)
        console.log("ns3 defense: " + ns3CityCheck.defense)
        console.log("ns4 defense: " + ns4CityCheck.defense)
        console.log("ns5 defense: " + ns5CityCheck.defense)
        console.log("ns6 defense: " + ns6CityCheck.defense)
    }
    if(franceMode && franceObject.wealth < frenchArmy.defenderInfo.unitCost) {
        console.clear()
        console.log("not enough funds to buy unit")
    }
    if(englandMode && englandObject.wealth < englishArmy.defenderInfo.unitCost) {
        console.clear()
        console.log("not enough funds to buy unit")
    }
    if(spainMode && spainObject.wealth < spanishArmy.defenderInfo.unitCost) {
        console.clear()
        console.log("not enough funds to buy unit")
    }
    if(dutchMode && dutchObject.wealth < dutchArmy.defenderInfo.unitCost) {
        console.clear()
        console.log("not enough funds to buy unit")
    }
}
