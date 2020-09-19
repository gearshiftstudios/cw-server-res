function returnHomeFrench() {
    prog.getElementById(selectedArmy).style.left = locations.quebec.left + pixelLoc
    prog.getElementById(selectedArmy).style.top = locations.quebec.top + pixelLoc
    prog.getElementById(selectedArmy).style.imageRendering = "pixelated"
}
function returnHomeEnglish() {
    prog.getElementById(selectedArmy).style.left = locations.jamestown.left + pixelLoc
    prog.getElementById(selectedArmy).style.top = locations.jamestown.top + pixelLoc
    prog.getElementById(selectedArmy).style.imageRendering = "pixelated"
}
function returnHomeSpanish() {
    prog.getElementById(selectedArmy).style.left = locations.santoDomingo.left + pixelLoc
    prog.getElementById(selectedArmy).style.top = locations.santoDomingo.top + pixelLoc
    prog.getElementById(selectedArmy).style.imageRendering = "pixelated"  
}
function returnHomeDutch() {
    prog.getElementById(selectedArmy).style.left = locations.newAmsterdam.left + pixelLoc
    prog.getElementById(selectedArmy).style.top = locations.newAmsterdam.top + pixelLoc
    prog.getElementById(selectedArmy).style.imageRendering = "pixelated" 
}

function renderMain(
    renderLoc, 
    renderTab, 
    renderCity, 
    renderName, 
    renderCityOwner, 
    renderCityName, 
    renderIcon, 
    renderTabWidth, 
    renderTabMid, 
    renderColony,
    renderTabColor,
    renderUnitLogo,
    renderColonyCount,
    ) {
        renderColonyCount += 1
        renderCity.owner = renderCityOwner
        renderCity.cityName = renderCityName
        renderCity.icon = renderIcon
        prog.getElementById(renderName).innerHTML = renderCity.cityName
        prog.getElementById(renderLoc).style.transform = "scale(1)"
        prog.getElementById(renderLoc).style.imageRendering ="pixelated"
        prog.getElementById(renderTab).style.transform = "scale(1)"
        prog.getElementById(renderTab).style.backgroundColor = renderTabColor
        prog.getElementById(renderLoc).style.backgroundImage = renderColony
        prog.getElementById(renderTab).style.width = renderTabWidth + pixelLoc
        prog.getElementById(renderTab).style.marginLeft = renderTabMid + pixelLoc
        prog.getElementById('cityIcon').style.height = "80px"
        renderCity.flag = renderUnitLogo
    }

function renderColonyBoolean(
    renderCity,
    renderFranceColony,
    renderEnglandColony,
    renderSpainColony,
    renderDutchColony,
    renderNativeSettlement,
    renderNS1,
    renderNS2,
    renderNS3,
    renderNS4,
    renderNS5,
    renderNS6,
    ) {
        renderCity.franceColony = renderFranceColony
        renderCity.englandColony = renderEnglandColony
        renderCity.spainColony = renderSpainColony
        renderCity.dutchColony = renderDutchColony
        renderCity.nativeSettlement = renderNativeSettlement
        renderCity.ns1 = renderNS1
        renderCity.ns2 = renderNS2
        renderCity.ns3 = renderNS3
        renderCity.ns4 = renderNS4
        renderCity.ns5 = renderNS5
        renderCity.ns6 = renderNS6
    }

function renderAll(renderLoc, renderTab, renderCity, renderName, renderCityOwner, renderCityName, renderIcon, renderTabWidth, renderTabMid, renderColony, renderTabColor, renderUnitLogo, renderColonyCount, renderFranceColony, renderEnglandColony, renderSpainColony, renderDutchColony, renderNativeSettlement, renderNS1, renderNS2, renderNS3, renderNS4, renderNS5, renderNS6) {
    renderColonyBoolean(renderCity, renderFranceColony, renderEnglandColony, renderSpainColony, renderDutchColony, renderNativeSettlement, renderNS1, renderNS2, renderNS3, renderNS4, renderNS5, renderNS6)
    renderMain(renderLoc, renderTab, renderCity, renderName, renderCityOwner, renderCityName, renderIcon, renderTabWidth, renderTabMid, renderColony, renderTabColor, renderUnitLogo, renderColonyCount)
    colonizeWealthCheck()
    getTravelData()
}

function franceNS1(
    renderCity = ns1CityCheck, 
    renderLoc = "ns1Location", 
    renderName = "ns1Name",
    renderTab = "ns1Tab",
    renderCityOwner = "France",
    renderCityName = "New Orleans",
    renderIcon = "url(/client/img/colonyFrench1.png)",
    renderTabWidth = 100,
    renderTabMid = -(renderTabWidth / 2),
    renderColony = colony1Select_5,
    renderTabColor = franceMapColor,
    renderUnitLogo = frenchUnitLogo,
    renderColonyCount = franceColonyCount,
    renderFranceColony = true,
    renderEnglandColony = false,
    renderSpainColony = false,
    renderDutchColony = false,
    renderNativeSettlement = false,
    renderNS1 = false,
    renderNS2 = false,
    renderNS3 = false,
    renderNS4 = false,
    renderNS5 = false,
    renderNS6 = false,
    ) {
        renderAll(renderLoc, renderTab, renderCity, renderName, renderCityOwner, renderCityName, renderIcon, renderTabWidth, renderTabMid, renderColony, renderTabColor, renderUnitLogo, renderColonyCount, renderFranceColony, renderEnglandColony, renderSpainColony, renderDutchColony, renderNativeSettlement, renderNS1, renderNS2, renderNS3, renderNS4, renderNS5, renderNS6)
        ns1Select()
}
function englandNS1(
    renderCity = ns1CityCheck, 
    renderLoc = "ns1Location", 
    renderName = "ns1Name",
    renderTab = "ns1Tab",
    renderCityOwner = "England",
    renderCityName = "Plymouth",
    renderIcon = "url(/client/img/colonyEnglish1.png)",
    renderTabWidth = 80,
    renderTabMid = -(renderTabWidth / 2),
    renderColony = colony1Select_5,
    renderTabColor = englandMapColor,
    renderUnitLogo = englishUnitLogo,
    renderColonyCount = englandColonyCount,
    renderFranceColony = false,
    renderEnglandColony = true,
    renderSpainColony = false,
    renderDutchColony = false,
    renderNativeSettlement = false,
    renderNS1 = false,
    renderNS2 = false,
    renderNS3 = false,
    renderNS4 = false,
    renderNS5 = false,
    renderNS6 = false,
    ) {
        renderAll(renderLoc, renderTab, renderCity, renderName, renderCityOwner, renderCityName, renderIcon, renderTabWidth, renderTabMid, renderColony, renderTabColor, renderUnitLogo, renderColonyCount, renderFranceColony, renderEnglandColony, renderSpainColony, renderDutchColony, renderNativeSettlement, renderNS1, renderNS2, renderNS3, renderNS4, renderNS5, renderNS6)
        ns1Select()
}

function spainNS1(
    renderCity = ns1CityCheck, 
    renderLoc = "ns1Location", 
    renderName = "ns1Name",
    renderTab = "ns1Tab",
    renderCityOwner = "Spain",
    renderCityName = "Santa Ana",
    renderIcon = "url(/client/img/colonySpanish1.png)",
    renderTabWidth = 80,
    renderTabMid = -(renderTabWidth / 2),
    renderColony = colony1Select_5,
    renderTabColor = spainMapColor,
    renderUnitLogo = spanishUnitLogo,
    renderColonyCount = spainColonyCount,
    renderFranceColony = false,
    renderEnglandColony = false,
    renderSpainColony = true,
    renderDutchColony = false,
    renderNativeSettlement = false,
    renderNS1 = false,
    renderNS2 = false,
    renderNS3 = false,
    renderNS4 = false,
    renderNS5 = false,
    renderNS6 = false,
    ) {
        renderAll(renderLoc, renderTab, renderCity, renderName, renderCityOwner, renderCityName, renderIcon, renderTabWidth, renderTabMid, renderColony, renderTabColor, renderUnitLogo, renderColonyCount, renderFranceColony, renderEnglandColony, renderSpainColony, renderDutchColony, renderNativeSettlement, renderNS1, renderNS2, renderNS3, renderNS4, renderNS5, renderNS6)
        ns1Select()
}
function dutchNS1(
    renderCity = ns1CityCheck, 
    renderLoc = "ns1Location", 
    renderName = "ns1Name",
    renderTab = "ns1Tab",
    renderCityOwner = "Netherlands",
    renderCityName = "Broktonic",
    renderIcon = "url(/client/img/colonyDutch1.png)",
    renderTabWidth = 80,
    renderTabMid = -(renderTabWidth / 2),
    renderColony = colony1Select_5,
    renderTabColor = dutchMapColor,
    renderUnitLogo = dutchUnitLogo,
    renderColonyCount = dutchColonyCount,
    renderFranceColony = false,
    renderEnglandColony = false,
    renderSpainColony = false,
    renderDutchColony = true,
    renderNativeSettlement = false,
    renderNS1 = false,
    renderNS2 = false,
    renderNS3 = false,
    renderNS4 = false,
    renderNS5 = false,
    renderNS6 = false,
    ) {
        renderAll(renderLoc, renderTab, renderCity, renderName, renderCityOwner, renderCityName, renderIcon, renderTabWidth, renderTabMid, renderColony, renderTabColor, renderUnitLogo, renderColonyCount, renderFranceColony, renderEnglandColony, renderSpainColony, renderDutchColony, renderNativeSettlement, renderNS1, renderNS2, renderNS3, renderNS4, renderNS5, renderNS6)
        ns1Select()
}


function franceNS2(
    renderCity = ns2CityCheck, 
    renderLoc = "ns2Location", 
    renderName = "ns2Name",
    renderTab = "ns2Tab",
    renderCityOwner = "France",
    renderCityName = "Ottowa",
    renderIcon = "url(/client/img/colonyFrench1.png)",
    renderTabWidth = 70,
    renderTabMid = -(renderTabWidth / 2),
    renderColony = colony1Select_6,
    renderTabColor = franceMapColor,
    renderUnitLogo = frenchUnitLogo,
    renderColonyCount = franceColonyCount,
    renderFranceColony = true,
    renderEnglandColony = false,
    renderSpainColony = false,
    renderDutchColony = false,
    renderNativeSettlement = false,
    renderNS1 = false,
    renderNS2 = false,
    renderNS3 = false,
    renderNS4 = false,
    renderNS5 = false,
    renderNS6 = false,
    ) {
        renderAll(renderLoc, renderTab, renderCity, renderName, renderCityOwner, renderCityName, renderIcon, renderTabWidth, renderTabMid, renderColony, renderTabColor, renderUnitLogo, renderColonyCount, renderFranceColony, renderEnglandColony, renderSpainColony, renderDutchColony, renderNativeSettlement, renderNS1, renderNS2, renderNS3, renderNS4, renderNS5, renderNS6)
        ns2Select()
}
function englandNS2(
    renderCity = ns2CityCheck, 
    renderLoc = "ns2Location", 
    renderName = "ns2Name",
    renderTab = "ns2Tab",
    renderCityOwner = "England",
    renderCityName = "Yorktown",
    renderIcon = "url(/client/img/colonyEnglish1.png)",
    renderTabWidth = 80,
    renderTabMid = -(renderTabWidth / 2),
    renderColony = colony1Select_6,
    renderTabColor = englandMapColor,
    renderUnitLogo = englishUnitLogo,
    renderColonyCount = englandColonyCount,
    renderFranceColony = false,
    renderEnglandColony = true,
    renderSpainColony = false,
    renderDutchColony = false,
    renderNativeSettlement = false,
    renderNS1 = false,
    renderNS2 = false,
    renderNS3 = false,
    renderNS4 = false,
    renderNS5 = false,
    renderNS6 = false,
    ) {
        renderAll(renderLoc, renderTab, renderCity, renderName, renderCityOwner, renderCityName, renderIcon, renderTabWidth, renderTabMid, renderColony, renderTabColor, renderUnitLogo, renderColonyCount, renderFranceColony, renderEnglandColony, renderSpainColony, renderDutchColony, renderNativeSettlement, renderNS1, renderNS2, renderNS3, renderNS4, renderNS5, renderNS6)
        ns2Select()
}
function spainNS2(
    renderCity = ns2CityCheck, 
    renderLoc = "ns2Location", 
    renderName = "ns2Name",
    renderTab = "ns2Tab",
    renderCityOwner = "Spain",
    renderCityName = "Fort Santiago",
    renderIcon = "url(/client/img/colonySpanish1.png)",
    renderTabWidth = 100,
    renderTabMid = -(renderTabWidth / 2),
    renderColony = colony1Select_6,
    renderTabColor = spainMapColor,
    renderUnitLogo = spanishUnitLogo,
    renderColonyCount = spainColonyCount,
    renderFranceColony = false,
    renderEnglandColony = false,
    renderSpainColony = true,
    renderDutchColony = false,
    renderNativeSettlement = false,
    renderNS1 = false,
    renderNS2 = false,
    renderNS3 = false,
    renderNS4 = false,
    renderNS5 = false,
    renderNS6 = false,
    ) {
        renderAll(renderLoc, renderTab, renderCity, renderName, renderCityOwner, renderCityName, renderIcon, renderTabWidth, renderTabMid, renderColony, renderTabColor, renderUnitLogo, renderColonyCount, renderFranceColony, renderEnglandColony, renderSpainColony, renderDutchColony, renderNativeSettlement, renderNS1, renderNS2, renderNS3, renderNS4, renderNS5, renderNS6)
        ns2Select()
}
function dutchNS2(
    renderCity = ns2CityCheck, 
    renderLoc = "ns2Location", 
    renderName = "ns2Name",
    renderTab = "ns2Tab",
    renderCityOwner = "Netherlands",
    renderCityName = "Yikstavlo",
    renderIcon = "url(/client/img/colonyDutch1.png)",
    renderTabWidth = 85,
    renderTabMid = -(renderTabWidth / 2),
    renderColony = colony1Select_6,
    renderTabColor = dutchMapColor,
    renderUnitLogo = dutchUnitLogo,
    renderColonyCount = dutchColonyCount,
    renderFranceColony = false,
    renderEnglandColony = false,
    renderSpainColony = false,
    renderDutchColony = true,
    renderNativeSettlement = false,
    renderNS1 = false,
    renderNS2 = false,
    renderNS3 = false,
    renderNS4 = false,
    renderNS5 = false,
    renderNS6 = false,
    ) {
        renderAll(renderLoc, renderTab, renderCity, renderName, renderCityOwner, renderCityName, renderIcon, renderTabWidth, renderTabMid, renderColony, renderTabColor, renderUnitLogo, renderColonyCount, renderFranceColony, renderEnglandColony, renderSpainColony, renderDutchColony, renderNativeSettlement, renderNS1, renderNS2, renderNS3, renderNS4, renderNS5, renderNS6)
        ns2Select()
}


function franceNS3(
    renderCity = ns3CityCheck, 
    renderLoc = "ns3Location", 
    renderName = "ns3Name",
    renderTab = "ns3Tab",
    renderCityOwner = "France",
    renderCityName = "Torronto",
    renderIcon = "url(/client/img/colonyFrench1.png)",
    renderTabWidth = 80,
    renderTabMid = -(renderTabWidth / 2),
    renderColony = colony1Select_7,
    renderTabColor = franceMapColor,
    renderUnitLogo = frenchUnitLogo,
    renderColonyCount = franceColonyCount,
    renderFranceColony = true,
    renderEnglandColony = false,
    renderSpainColony = false,
    renderDutchColony = false,
    renderNativeSettlement = false,
    renderNS1 = false,
    renderNS2 = false,
    renderNS3 = false,
    renderNS4 = false,
    renderNS5 = false,
    renderNS6 = false,
    ) {
        renderAll(renderLoc, renderTab, renderCity, renderName, renderCityOwner, renderCityName, renderIcon, renderTabWidth, renderTabMid, renderColony, renderTabColor, renderUnitLogo, renderColonyCount, renderFranceColony, renderEnglandColony, renderSpainColony, renderDutchColony, renderNativeSettlement, renderNS1, renderNS2, renderNS3, renderNS4, renderNS5, renderNS6)
        ns3Select()
}
function englandNS3(
    renderCity = ns3CityCheck, 
    renderLoc = "ns3Location", 
    renderName = "ns3Name",
    renderTab = "ns3Tab",
    renderCityOwner = "England",
    renderCityName = "Charleston",
    renderIcon = "url(/client/img/colonyEnglish1.png)",
    renderTabWidth = 80,
    renderTabMid = -(renderTabWidth / 2),
    renderColony = colony1Select_7,
    renderTabColor = englandMapColor,
    renderUnitLogo = englishUnitLogo,
    renderColonyCount = englandColonyCount,
    renderFranceColony = false,
    renderEnglandColony = true,
    renderSpainColony = false,
    renderDutchColony = false,
    renderNativeSettlement = false,
    renderNS1 = false,
    renderNS2 = false,
    renderNS3 = false,
    renderNS4 = false,
    renderNS5 = false,
    renderNS6 = false,
    ) {
        renderAll(renderLoc, renderTab, renderCity, renderName, renderCityOwner, renderCityName, renderIcon, renderTabWidth, renderTabMid, renderColony, renderTabColor, renderUnitLogo, renderColonyCount, renderFranceColony, renderEnglandColony, renderSpainColony, renderDutchColony, renderNativeSettlement, renderNS1, renderNS2, renderNS3, renderNS4, renderNS5, renderNS6)
        ns3Select()
}
function spainNS3(
    renderCity = ns3CityCheck, 
    renderLoc = "ns3Location", 
    renderName = "ns3Name",
    renderTab = "ns3Tab",
    renderCityOwner = "Spain",
    renderCityName = "Los Principe",
    renderIcon = "url(/client/img/colonySpanish1.png)",
    renderTabWidth = 100,
    renderTabMid = -(renderTabWidth / 2),
    renderColony = colony1Select_7,
    renderTabColor = spainMapColor,
    renderUnitLogo = spanishUnitLogo,
    renderColonyCount = spainColonyCount,
    renderFranceColony = false,
    renderEnglandColony = false,
    renderSpainColony = true,
    renderDutchColony = false,
    renderNativeSettlement = false,
    renderNS1 = false,
    renderNS2 = false,
    renderNS3 = false,
    renderNS4 = false,
    renderNS5 = false,
    renderNS6 = false,
    ) {
        renderAll(renderLoc, renderTab, renderCity, renderName, renderCityOwner, renderCityName, renderIcon, renderTabWidth, renderTabMid, renderColony, renderTabColor, renderUnitLogo, renderColonyCount, renderFranceColony, renderEnglandColony, renderSpainColony, renderDutchColony, renderNativeSettlement, renderNS1, renderNS2, renderNS3, renderNS4, renderNS5, renderNS6)
        ns3Select()
}
function dutchNS3(
    renderCity = ns3CityCheck, 
    renderLoc = "ns3Location", 
    renderName = "ns3Name",
    renderTab = "ns3Tab",
    renderCityOwner = "Netherlands",
    renderCityName = "Navstigrin",
    renderIcon = "url(/client/img/colonyDutch1.png)",
    renderTabWidth = 85,
    renderTabMid = -(renderTabWidth / 2),
    renderColony = colony1Select_7,
    renderTabColor = dutchMapColor,
    renderUnitLogo = dutchUnitLogo,
    renderColonyCount = dutchColonyCount,
    renderFranceColony = false,
    renderEnglandColony = false,
    renderSpainColony = false,
    renderDutchColony = true,
    renderNativeSettlement = false,
    renderNS1 = false,
    renderNS2 = false,
    renderNS3 = false,
    renderNS4 = false,
    renderNS5 = false,
    renderNS6 = false,
    ) {
        renderAll(renderLoc, renderTab, renderCity, renderName, renderCityOwner, renderCityName, renderIcon, renderTabWidth, renderTabMid, renderColony, renderTabColor, renderUnitLogo, renderColonyCount, renderFranceColony, renderEnglandColony, renderSpainColony, renderDutchColony, renderNativeSettlement, renderNS1, renderNS2, renderNS3, renderNS4, renderNS5, renderNS6)
        ns3Select()
}



function franceNS4(
    renderCity = ns4CityCheck, 
    renderLoc = "ns4Location", 
    renderName = "ns4Name",
    renderTab = "ns4Tab",
    renderCityOwner = "France",
    renderCityName = "Martinique",
    renderIcon = "url(/client/img/colonyFrench1.png)",
    renderTabWidth = 85,
    renderTabMid = -(renderTabWidth / 2),
    renderColony = colony1Select_8,
    renderTabColor = franceMapColor,
    renderUnitLogo = frenchUnitLogo,
    renderColonyCount = franceColonyCount,
    renderFranceColony = true,
    renderEnglandColony = false,
    renderSpainColony = false,
    renderDutchColony = false,
    renderNativeSettlement = false,
    renderNS1 = false,
    renderNS2 = false,
    renderNS3 = false,
    renderNS4 = false,
    renderNS5 = false,
    renderNS6 = false,
    ) {
        renderAll(renderLoc, renderTab, renderCity, renderName, renderCityOwner, renderCityName, renderIcon, renderTabWidth, renderTabMid, renderColony, renderTabColor, renderUnitLogo, renderColonyCount, renderFranceColony, renderEnglandColony, renderSpainColony, renderDutchColony, renderNativeSettlement, renderNS1, renderNS2, renderNS3, renderNS4, renderNS5, renderNS6)
        ns4Select()
}
function englandNS4(
    renderCity = ns4CityCheck, 
    renderLoc = "ns4Location", 
    renderName = "ns4Name",
    renderTab = "ns4Tab",
    renderCityOwner = "England",
    renderCityName = "New York",
    renderIcon = "url(/client/img/colonyEnglish1.png)",
    renderTabWidth = 80,
    renderTabMid = -(renderTabWidth / 2),
    renderColony = colony1Select_8,
    renderTabColor = englandMapColor,
    renderUnitLogo = englishUnitLogo,
    renderColonyCount = englandColonyCount,
    renderFranceColony = false,
    renderEnglandColony = true,
    renderSpainColony = false,
    renderDutchColony = false,
    renderNativeSettlement = false,
    renderNS1 = false,
    renderNS2 = false,
    renderNS3 = false,
    renderNS4 = false,
    renderNS5 = false,
    renderNS6 = false,
    ) {
        renderAll(renderLoc, renderTab, renderCity, renderName, renderCityOwner, renderCityName, renderIcon, renderTabWidth, renderTabMid, renderColony, renderTabColor, renderUnitLogo, renderColonyCount, renderFranceColony, renderEnglandColony, renderSpainColony, renderDutchColony, renderNativeSettlement, renderNS1, renderNS2, renderNS3, renderNS4, renderNS5, renderNS6)
        ns4Select()
}
function spainNS4(
    renderCity = ns4CityCheck, 
    renderLoc = "ns4Location", 
    renderName = "ns4Name",
    renderTab = "ns4Tab",
    renderCityOwner = "Spain",
    renderCityName = "Havanna",
    renderIcon = "url(/client/img/colonySpanish1.png)",
    renderTabWidth = 80,
    renderTabMid = -(renderTabWidth / 2),
    renderColony = colony1Select_8,
    renderTabColor = spainMapColor,
    renderUnitLogo = spanishUnitLogo,
    renderColonyCount = spainColonyCount,
    renderFranceColony = false,
    renderEnglandColony = false,
    renderSpainColony = true,
    renderDutchColony = false,
    renderNativeSettlement = false,
    renderNS1 = false,
    renderNS2 = false,
    renderNS3 = false,
    renderNS4 = false,
    renderNS5 = false,
    renderNS6 = false,
    ) {
        renderAll(renderLoc, renderTab, renderCity, renderName, renderCityOwner, renderCityName, renderIcon, renderTabWidth, renderTabMid, renderColony, renderTabColor, renderUnitLogo, renderColonyCount, renderFranceColony, renderEnglandColony, renderSpainColony, renderDutchColony, renderNativeSettlement, renderNS1, renderNS2, renderNS3, renderNS4, renderNS5, renderNS6)
        ns4Select()
}
function dutchNS4(
    renderCity = ns4CityCheck, 
    renderLoc = "ns4Location", 
    renderName = "ns4Name",
    renderTab = "ns4Tab",
    renderCityOwner = "Netherlands",
    renderCityName = "Borstenol",
    renderIcon = "url(/client/img/colonyDutch1.png)",
    renderTabWidth = 85,
    renderTabMid = -(renderTabWidth / 2),
    renderColony = colony1Select_8,
    renderTabColor = dutchMapColor,
    renderUnitLogo = dutchUnitLogo,
    renderColonyCount = dutchColonyCount,
    renderFranceColony = false,
    renderEnglandColony = false,
    renderSpainColony = false,
    renderDutchColony = true,
    renderNativeSettlement = false,
    renderNS1 = false,
    renderNS2 = false,
    renderNS3 = false,
    renderNS4 = false,
    renderNS5 = false,
    renderNS6 = false,
    ) {
        renderAll(renderLoc, renderTab, renderCity, renderName, renderCityOwner, renderCityName, renderIcon, renderTabWidth, renderTabMid, renderColony, renderTabColor, renderUnitLogo, renderColonyCount, renderFranceColony, renderEnglandColony, renderSpainColony, renderDutchColony, renderNativeSettlement, renderNS1, renderNS2, renderNS3, renderNS4, renderNS5, renderNS6)
        ns4Select()
}



function franceNS5(
    renderCity = ns5CityCheck, 
    renderLoc = "ns5Location", 
    renderName = "ns5Name",
    renderTab = "ns5Tab",
    renderCityOwner = "France",
    renderCityName = "Tobago",
    renderIcon = "url(/client/img/colonyFrench1.png)",
    renderTabWidth = 65,
    renderTabMid = -(renderTabWidth / 2),
    renderColony = colony1Select_9,
    renderTabColor = franceMapColor,
    renderUnitLogo = frenchUnitLogo,
    renderColonyCount = franceColonyCount,
    renderFranceColony = true,
    renderEnglandColony = false,
    renderSpainColony = false,
    renderDutchColony = false,
    renderNativeSettlement = false,
    renderNS1 = false,
    renderNS2 = false,
    renderNS3 = false,
    renderNS4 = false,
    renderNS5 = false,
    renderNS6 = false,
    ) {
        renderAll(renderLoc, renderTab, renderCity, renderName, renderCityOwner, renderCityName, renderIcon, renderTabWidth, renderTabMid, renderColony, renderTabColor, renderUnitLogo, renderColonyCount, renderFranceColony, renderEnglandColony, renderSpainColony, renderDutchColony, renderNativeSettlement, renderNS1, renderNS2, renderNS3, renderNS4, renderNS5, renderNS6)
        ns5Select()
}
function englandNS5(
    renderCity = ns5CityCheck, 
    renderLoc = "ns5Location", 
    renderName = "ns5Name",
    renderTab = "ns5Tab",
    renderCityOwner = "England",
    renderCityName = "Boston",
    renderIcon = "url(/client/img/colonyEnglish1.png)",
    renderTabWidth = 65,
    renderTabMid = -(renderTabWidth / 2),
    renderColony = colony1Select_9,
    renderTabColor = englandMapColor,
    renderUnitLogo = englishUnitLogo,
    renderColonyCount = englandColonyCount,
    renderFranceColony = false,
    renderEnglandColony = true,
    renderSpainColony = false,
    renderDutchColony = false,
    renderNativeSettlement = false,
    renderNS1 = false,
    renderNS2 = false,
    renderNS3 = false,
    renderNS4 = false,
    renderNS5 = false,
    renderNS6 = false,
    ) {
        renderAll(renderLoc, renderTab, renderCity, renderName, renderCityOwner, renderCityName, renderIcon, renderTabWidth, renderTabMid, renderColony, renderTabColor, renderUnitLogo, renderColonyCount, renderFranceColony, renderEnglandColony, renderSpainColony, renderDutchColony, renderNativeSettlement, renderNS1, renderNS2, renderNS3, renderNS4, renderNS5, renderNS6)
        ns5Select()
}
function spainNS5(
    renderCity = ns5CityCheck, 
    renderLoc = "ns5Location", 
    renderName = "ns5Name",
    renderTab = "ns5Tab",
    renderCityOwner = "Spain",
    renderCityName = "San Francisco",
    renderIcon = "url(/client/img/colonySpanish1.png)",
    renderTabWidth = 100,
    renderTabMid = -(renderTabWidth / 2),
    renderColony = colony1Select_9,
    renderTabColor = spainMapColor,
    renderUnitLogo = spanishUnitLogo,
    renderColonyCount = spainColonyCount,
    renderFranceColony = false,
    renderEnglandColony = false,
    renderSpainColony = true,
    renderDutchColony = false,
    renderNativeSettlement = false,
    renderNS1 = false,
    renderNS2 = false,
    renderNS3 = false,
    renderNS4 = false,
    renderNS5 = false,
    renderNS6 = false,
    ) {
        renderAll(renderLoc, renderTab, renderCity, renderName, renderCityOwner, renderCityName, renderIcon, renderTabWidth, renderTabMid, renderColony, renderTabColor, renderUnitLogo, renderColonyCount, renderFranceColony, renderEnglandColony, renderSpainColony, renderDutchColony, renderNativeSettlement, renderNS1, renderNS2, renderNS3, renderNS4, renderNS5, renderNS6)
        ns5Select()
}
function dutchNS5(
    renderCity = ns5CityCheck, 
    renderLoc = "ns5Location", 
    renderName = "ns5Name",
    renderTab = "ns5Tab",
    renderCityOwner = "Netherlands",
    renderCityName = "Potenkin",
    renderIcon = "url(/client/img/colonyDutch1.png)",
    renderTabWidth = 80,
    renderTabMid = -(renderTabWidth / 2),
    renderColony = colony1Select_9,
    renderTabColor = dutchMapColor,
    renderUnitLogo = dutchUnitLogo,
    renderColonyCount = dutchColonyCount,
    renderFranceColony = false,
    renderEnglandColony = false,
    renderSpainColony = false,
    renderDutchColony = true,
    renderNativeSettlement = false,
    renderNS1 = false,
    renderNS2 = false,
    renderNS3 = false,
    renderNS4 = false,
    renderNS5 = false,
    renderNS6 = false,
    ) {
        renderAll(renderLoc, renderTab, renderCity, renderName, renderCityOwner, renderCityName, renderIcon, renderTabWidth, renderTabMid, renderColony, renderTabColor, renderUnitLogo, renderColonyCount, renderFranceColony, renderEnglandColony, renderSpainColony, renderDutchColony, renderNativeSettlement, renderNS1, renderNS2, renderNS3, renderNS4, renderNS5, renderNS6)
        ns5Select()
}


function franceNS6(
    renderCity = ns6CityCheck, 
    renderLoc = "ns6Location", 
    renderName = "ns6Name",
    renderTab = "ns6Tab",
    renderCityOwner = "France",
    renderCityName = "Port Royale",
    renderIcon = "url(/client/img/colonyFrench1.png)",
    renderTabWidth = 90,
    renderTabMid = -(renderTabWidth / 2),
    renderColony = colony1Select_10,
    renderTabColor = franceMapColor,
    renderUnitLogo = frenchUnitLogo,
    renderColonyCount = franceColonyCount,
    renderFranceColony = true,
    renderEnglandColony = false,
    renderSpainColony = false,
    renderDutchColony = false,
    renderNativeSettlement = false,
    renderNS1 = false,
    renderNS2 = false,
    renderNS3 = false,
    renderNS4 = false,
    renderNS5 = false,
    renderNS6 = false,
    ) {
        renderAll(renderLoc, renderTab, renderCity, renderName, renderCityOwner, renderCityName, renderIcon, renderTabWidth, renderTabMid, renderColony, renderTabColor, renderUnitLogo, renderColonyCount, renderFranceColony, renderEnglandColony, renderSpainColony, renderDutchColony, renderNativeSettlement, renderNS1, renderNS2, renderNS3, renderNS4, renderNS5, renderNS6)
        ns6Select()
}
function englandNS6(
    renderCity = ns6CityCheck, 
    renderLoc = "ns6Location", 
    renderName = "ns6Name",
    renderTab = "ns6Tab",
    renderCityOwner = "England",
    renderCityName = "Nantucket",
    renderIcon = "url(/client/img/colonyEnglish1.png)",
    renderTabWidth = 80,
    renderTabMid = -(renderTabWidth / 2),
    renderColony = colony1Select_10,
    renderTabColor = englandMapColor,
    renderUnitLogo = englishUnitLogo,
    renderColonyCount = englandColonyCount,
    renderFranceColony = false,
    renderEnglandColony = true,
    renderSpainColony = false,
    renderDutchColony = false,
    renderNativeSettlement = false,
    renderNS1 = false,
    renderNS2 = false,
    renderNS3 = false,
    renderNS4 = false,
    renderNS5 = false,
    renderNS6 = false,
    ) {
        renderAll(renderLoc, renderTab, renderCity, renderName, renderCityOwner, renderCityName, renderIcon, renderTabWidth, renderTabMid, renderColony, renderTabColor, renderUnitLogo, renderColonyCount, renderFranceColony, renderEnglandColony, renderSpainColony, renderDutchColony, renderNativeSettlement, renderNS1, renderNS2, renderNS3, renderNS4, renderNS5, renderNS6)
        ns6Select()
}
function spainNS6(
    renderCity = ns6CityCheck, 
    renderLoc = "ns6Location", 
    renderName = "ns1=6Name",
    renderTab = "ns6Tab",
    renderCityOwner = "Spain",
    renderCityName = "Santa Cruz",
    renderIcon = "url(/client/img/colonySpanish1.png)",
    renderTabWidth = 85,
    renderTabMid = -(renderTabWidth / 2),
    renderColony = colony1Select_10,
    renderTabColor = spainMapColor,
    renderUnitLogo = spanishUnitLogo,
    renderColonyCount = spainColonyCount,
    renderFranceColony = false,
    renderEnglandColony = false,
    renderSpainColony = true,
    renderDutchColony = false,
    renderNativeSettlement = false,
    renderNS1 = false,
    renderNS2 = false,
    renderNS3 = false,
    renderNS4 = false,
    renderNS5 = false,
    renderNS6 = false,
    ) {
        renderAll(renderLoc, renderTab, renderCity, renderName, renderCityOwner, renderCityName, renderIcon, renderTabWidth, renderTabMid, renderColony, renderTabColor, renderUnitLogo, renderColonyCount, renderFranceColony, renderEnglandColony, renderSpainColony, renderDutchColony, renderNativeSettlement, renderNS1, renderNS2, renderNS3, renderNS4, renderNS5, renderNS6)
        ns6Select()
}
function dutchNS6(
    renderCity = ns6CityCheck, 
    renderLoc = "ns6Location", 
    renderName = "ns6Name",
    renderTab = "ns6Tab",
    renderCityOwner = "Netherlands",
    renderCityName = "Sorlitz",
    renderIcon = "url(/client/img/colonyDutch1.png)",
    renderTabWidth = 65,
    renderTabMid = -(renderTabWidth / 2),
    renderColony = colony1Select_10,
    renderTabColor = dutchMapColor,
    renderUnitLogo = dutchUnitLogo,
    renderColonyCount = dutchColonyCount,
    renderFranceColony = false,
    renderEnglandColony = false,
    renderSpainColony = false,
    renderDutchColony = true,
    renderNativeSettlement = false,
    renderNS1 = false,
    renderNS2 = false,
    renderNS3 = false,
    renderNS4 = false,
    renderNS5 = false,
    renderNS6 = false,
    ) {
        renderAll(renderLoc, renderTab, renderCity, renderName, renderCityOwner, renderCityName, renderIcon, renderTabWidth, renderTabMid, renderColony, renderTabColor, renderUnitLogo, renderColonyCount, renderFranceColony, renderEnglandColony, renderSpainColony, renderDutchColony, renderNativeSettlement, renderNS1, renderNS2, renderNS3, renderNS4, renderNS5, renderNS6)
        ns6Select()
}