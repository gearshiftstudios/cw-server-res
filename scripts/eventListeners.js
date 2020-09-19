//buttons for EvErYtHiNg
prog.getElementById('closeButtonJS').addEventListener("click", closeAgeTab)
prog.getElementById('endTurnButton').addEventListener("click", endTurn)
// prog.getElementById('deployTroopsButton').addEventListener("click", deployTroopsBasic)
prog.getElementById('zoomInMapButton').addEventListener("click", zoomIn)
prog.getElementById('zoomOutMapButton').addEventListener("click", zoomOut)
prog.getElementById('fullscreenMapButton').addEventListener("click", fullscreen)
prog.getElementById('rulerIconForTab').addEventListener("click", hideMapToolsTab)
prog.getElementById('rulerIconForTab').addEventListener("mouseover", mouseOverIcon)
prog.getElementById('rulerIconForTab').addEventListener("mouseout", mouseOutIcon)
prog.getElementById('quebecLocation').addEventListener("click", quebecSelect)
prog.getElementById('moveUpButton').addEventListener("click", moveMapDown)
prog.getElementById('moveDownButton').addEventListener("click", moveMapUp)
prog.getElementById('moveLeftButton').addEventListener("click", moveMapRight)
prog.getElementById('moveRightButton').addEventListener("click", moveMapLeft)
prog.getElementById('hideMovesButton').addEventListener("click", hideMovesButtonTab)
prog.getElementById('playGameButton').addEventListener("click", enterGame)
prog.getElementById('fullscreenButton').addEventListener("click", fullscreen)
prog.getElementById('engChoice').addEventListener("click", changeCivBriton)
prog.getElementById('frnChoice').addEventListener("click", changeCivFrance)
prog.getElementById('dutChoice').addEventListener("click", changeCivHolland)
prog.getElementById('spnChoice').addEventListener("click", changeCivSpain)
prog.getElementById('recruitMenuButton').addEventListener("click", hideRecruitTab)

//recruiting
prog.getElementById('unitMusketmen').addEventListener("mouseover", changeInfoInfantry)
prog.getElementById('unitNavy').addEventListener("mouseover", changeInfoNavy)
prog.getElementById('unitDefender').addEventListener("mouseover", changeInfoDefender)
prog.getElementById('unitMusketmen').addEventListener("mouseout", goBackUnitInfo)
prog.getElementById('unitNavy').addEventListener("mouseout", goBackUnitInfo)
prog.getElementById('unitDefender').addEventListener("mouseout", goBackUnitInfo)

prog.getElementById('unitMusketmen').addEventListener("click", selectGunUnit)
prog.getElementById('unitNavy').addEventListener("click", selectNavalUnit)
prog.getElementById('unitDefender').addEventListener("click", selectDefenders)

prog.getElementById('colonizeMenuButton').addEventListener("click", colonizeSettlement)
prog.getElementById('selectNavyButton').addEventListener("click", navyMenuButton)
prog.getElementById('selectArmyButton').addEventListener("click", armyMenuButton)
prog.getElementById('selectCapitalButton').addEventListener("click", capitalMenuButton)
prog.getElementById('travelRefresh').addEventListener("click", getTravelData)
prog.getElementById('travelClose').addEventListener("click", hideTravelMenu)
prog.getElementById('travelMenuButton').addEventListener("click", showTravelMenu)

//city BUTTONS
prog.getElementById('quebecTab').addEventListener("click", quebecSelect)
prog.getElementById('jamestownLocation').addEventListener("click", jamestownSelect)
prog.getElementById('santoDomingoLocation').addEventListener("click", santoDomingoSelect)
prog.getElementById('newAmsterdamLocation').addEventListener("click", newAmsterdamSelect)

//native BUTTTONS
prog.getElementById('ns1Location').addEventListener("click", ns1Select)
prog.getElementById('ns2Location').addEventListener("click", ns2Select)
prog.getElementById('ns3Location').addEventListener("click", ns3Select)
prog.getElementById('ns4Location').addEventListener("click", ns4Select)
prog.getElementById('ns5Location').addEventListener("click", ns5Select)
prog.getElementById('ns6Location').addEventListener("click", ns6Select)

//army BUTTONS
prog.getElementById('frenchArmy').addEventListener("click", frenchArmySelect)
prog.getElementById('englishArmy').addEventListener("click", englishArmySelect)
prog.getElementById('spanishArmy').addEventListener("click", spanishArmySelect)
prog.getElementById('dutchArmy').addEventListener("click", dutchArmySelect)

//navy BUTTONS
prog.getElementById('frenchNavy').addEventListener("click", frenchNavySelect)
prog.getElementById('englishNavy').addEventListener("click", englishNavySelect)
prog.getElementById('spanishNavy').addEventListener("click", spanishNavySelect)
prog.getElementById('dutchNavy').addEventListener("click", dutchNavySelect)

//army TRAVEL
prog.getElementById('quebecTravelButton').addEventListener("click", quebecArmyTravel)
prog.getElementById('jamestownTravelButton').addEventListener("click", jamestownArmyTravel)
prog.getElementById('santoDomingoTravelButton').addEventListener("click", santoDomingoArmyTravel)
prog.getElementById('newAmsterdamTravelButton').addEventListener("click", newAmsterdamArmyTravel)
prog.getElementById('ns1TravelButton').addEventListener("click", ns1ArmyTravel)
prog.getElementById('ns2TravelButton').addEventListener("click", ns2ArmyTravel)
prog.getElementById('ns3TravelButton').addEventListener("click", ns3ArmyTravel)
prog.getElementById('ns4TravelButton').addEventListener("click", ns4ArmyTravel)
prog.getElementById('ns5TravelButton').addEventListener("click", ns5ArmyTravel)

//siege
prog.getElementById('siegeMenuButton').addEventListener("click", siegeCity)