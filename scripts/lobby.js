var socket = io()
var login_HTML = document.getElementById('login')
var loginScreen = document.getElementById('loginScreen')
var loginScreen_label = document.getElementById('loginScreen-label')
var loginScreen_usernameBar = document.getElementById('loginScreen-usernameBar')
var loginScreen_usernameBar__text = document.getElementById('loginScreen-usernameBar--text')
var loginScreen_usernameBar__input = document.getElementById('loginScreen-usernameBar--input')
var loginScreen_passwordBar = document.getElementById('loginScreen-passwordBar')
var loginScreen_passwordBar__text = document.getElementById('loginScreen-passwordBar--text')
var loginScreen_passwordBar__input = document.getElementById('loginScreen-passwordBar--input')
var loginScreen_buttons = document.getElementById('loginScreen-buttons')
var loginScreen_buttons__logIn = document.getElementById('loginScreen-buttons--logIn')
var loginScreen_buttons__signUp = document.getElementById('loginScreen-buttons--signUp')
var loginScreen_MSG = document.getElementById('loginScreen-MSG')
var lobbyScreen_HTML = document.getElementById('lobbyScreen')
var lobbyScreen_menu = document.getElementById('lobbyScreen-menu')
var chat_HTML = document.getElementById('chat')
var chat_box = document.getElementById('chat-box')
var chat_form = document.getElementById('chat-form')
var chat_input = document.getElementById('chat-input')
var lobbyScreen_playerBox__playerInfo___name = document.getElementById('lobbyScreen-playerBox--playerInfo---name')
var lobbyScreen_menu__campaign = document.getElementById('lobbyScreen-menu--campaign')
var lobbyScreen_menu__findMatch = document.getElementById('lobbyScreen-menu--findMatch')
var lobbyScreen_menu__tournaments = document.getElementById('lobbyScreen-menu--tournaments')
var lobbyScreen_menu__alliances = document.getElementById('lobbyScreen-menu--alliances')
var lobbyScreen_menu__info = document.getElementById('lobbyScreen-menu--info')
var lobbyScreen_box__news = document.getElementById('lobbyScreen-box--news')
var lobbyScreen_box__updates = document.getElementById('lobbyScreen-box--updates')
var lobbyScreen_box__homeCity = document.getElementById('lobbyScreen-box--homeCity')
var lobbyScreen_box__match = document.getElementById('lobbyScreen-box--match')
var matchSession_lobbyBox = document.getElementById('matchSession-lobbyBox')
var createMatchButton = document.getElementById('createMatchButton')
var refreshMatchButton = document.getElementById('refreshMatchButton')
var lobbyScreen_playerBox__playerIcon___icon = document.getElementById('lobbyScreen-playerBox--playerIcon---icon')
var inMatch_buttons = document.getElementById('inMatch-buttons')
var actaulSessions = document.getElementById('actaulSessions')
var leaveMatchButton = document.getElementById('leaveMatchButton')
var readyMatchButton = document.getElementById('readyMatchButton')
var matchSession_inSession__playerBox1___playerIcon = document.getElementById('matchSession-inSession--playerBox1---playerIcon')
var matchSession_inSession__playerBox1___playerName = document.getElementById('matchSession-inSession--playerBox1---playerName')
var matchSession_lobby = document.getElementById('matchSession-lobby')
var matchSession_inSession = document.getElementById('matchSession-inSession')
var matchSession_inSession__mapBox___info = document.getElementById('matchSession-inSession--mapBox---info')
var matchSession_inSession__mapBox___name = document.getElementById('matchSession-inSession--mapBox---name')
var find_and_create_matchButtons = document.getElementById('find-and-create-matchButtons')
var sessionStatus_info = document.getElementById('sessionStatus-info')
var chat_input__send = document.getElementById('chat-input--send')
var lobbyScreen_playerBox__playerIcon = document.getElementById('lobbyScreen-playerBox--playerIcon')
var iconPicker = document.getElementById('iconPicker')
var iconPicker_close = document.getElementById('iconPicker-close')
var matchSession_inSession__mapBox__selectLeft = document.getElementById('matchSession-inSession--mapBox--selectLeft')
var matchSession_inSession__mapBox__selectRight = document.getElementById('matchSession-inSession--mapBox--selectRight')
var game_loadingScreen = document.getElementById('game-loadingScreen')
var game_loadingScreen__loadingBox = document.getElementById('game-loadingScreen--loadingBox')
var game_loadingScreen__loadingBox___loadingBar = document.getElementById('game-loadingScreen--loadingBox---loadingBar')
var unitFrameWidth = 175
var unitFrameHeight = 175

// console.log(function(){var script=document.createElement('script');script.onload=function(){var stats=new Stats();document.body.appendChild(stats.dom);requestAnimationFrame(function loop(){stats.update();requestAnimationFrame(loop)});};script.src='//mrdoob.github.io/stats.js/build/stats.min.js';document.head.appendChild(script);}())
//nationButtons
var nationButtons = {
    "england": document.getElementById("nationsBox-englandBox"),
    "france": document.getElementById("nationsBox-franceBox"),
    "spain": document.getElementById("nationsBox-spainBox"),
    "prussia": document.getElementById("nationsBox-prussiaBox"),
    "dutch": document.getElementById("nationsBox-dutchBox"),
    "portugal": document.getElementById("nationsBox-portugalBox"),
    "russia": document.getElementById("nationsBox-russiaBox"),
    "ottoman": document.getElementById("nationsBox-ottomanBox"),
}
var nationFlagCovers = {
    "england": document.getElementById("englandBox-flagSelected"),
    "france": document.getElementById("franceBox-flagSelected"),
    "spain": document.getElementById("spainBox-flagSelected"),
    "prussia": document.getElementById("prussiaBox-flagSelected"),
    "dutch": document.getElementById("dutchBox-flagSelected"),
    "portugal": document.getElementById("portugalBox-flagSelected"),
    "russia": document.getElementById("russiaBox-flagSelected"),
    "ottoman": document.getElementById("ottomanBox-flagSelected"),
}
var nationPlayerLabel = {
    "england": document.getElementById("englandBox-flagOwner"),
    "france": document.getElementById("franceBox-flagOwner"),
    "spain": document.getElementById("spainBox-flagOwner"),
    "prussia": document.getElementById("prussiaBox-flagOwner"),
    "dutch": document.getElementById("dutchBox-flagOwner"),
    "portugal": document.getElementById("portugalBox-flagOwner"),
    "russia": document.getElementById("russiaBox-flagOwner"),
    "ottoman": document.getElementById("ottomanBox-flagOwner"),
}
var nationNames = {
    "england": "England",
    "france": "France",
    "spain": "Spain",
    "prussia": "Prussia",
    "dutch": "Netherlands",
    "portugal": "Portugal",
    "russia": "Russia",
    "ottoman": "Ottoman Empire",
    "natives": "Natives",
}
var nationBackgroundColors = {
    "england": "red",
    "france": "navy",
    "spain": "white",
    "prussia": "gold",
    "dutch": "orange",
    "portugal": "rgb(63, 143, 170)",
    "russia": "green",
    "ottoman": "maroon",
    "natives": "brown",
}
var nationTextColors = {
    "england": "white",
    "france": "white",
    "spain": "red",
    "prussia": "black",
    "dutch": "white",
    "portugal": "white",
    "russia": "white",
    "ottoman": "white",
    "natives": "white",
}
var nationMapColors = {
    "england": "rgba(255, 0, 0, 0.5)",
    "france": "rgba(0, 0, 128, 0.5)",
    "spain": "rgba(255, 255, 255, 0.5)",
    "prussia": "rgba(255, 215, 0, 0.5)",
    "dutch": "rgba(255, 166, 0, 0.5)",
    "portugal": "rgba(63, 143, 170, 0.5)",
    "russia": "rgba(0, 128, 0, 0.513)",
    "ottoman": "rgba(128, 0, 0, 0.5)",
    "natives": "rgba(165, 42, 42, 0.5)",
}
var playerFlags = {
    "england": "url(/client/img/interfaces/flags/englandFlag.png)",
    "france": "url(/client/img/interfaces/flags/franceFlag.png)",
    "spain": "url(/client/img/interfaces/flags/spainFlag.png)",
    "prussia": "url(/client/img/interfaces/flags/prussiaFlag.png)",
    "dutch": "url(/client/img/interfaces/flags/dutchFlag.png)",
    "portugal": "url(/client/img/interfaces/flags/portugalFlag.png)",
    "russia": "url(/client/img/interfaces/flags/russianFlag.png)",
    "ottoman": "url(/client/img/interfaces/flags/ottomanFlag.png)",
    "natives": "url(/client/img/interfaces/flags/nativeFlag.png)",
}
var playerSideFlags = {
    "england": "url(/client/img/interfaces/flags/sideIcons/england.png)",
    "france": "url(/client/img/interfaces/flags/sideIcons/france.png)",
    "spain": "url(/client/img/interfaces/flags/sideIcons/spain.png)",
    "prussia": "url(/client/img/interfaces/flags/sideIcons/prussia.png)",
    "dutch": "url(/client/img/interfaces/flags/sideIcons/dutch.png)",
    "portugal": "url(/client/img/interfaces/flags/sideIcons/portugal.png)",
    "russia": "url(/client/img/interfaces/flags/sideIcons/russia.png)",
    "ottoman": "url(/client/img/interfaces/flags/sideIcons/ottoman.png)",
}
var playerBanner = {
    "england": "url(/client/img/interfaces/flags/banners/englandBanner.png)",
    "france": "url(/client/img/interfaces/flags/banners/franceBanner.png)",
    "spain": "url(/client/img/interfaces/flags/banners/spainBanner.png)",
    "prussia": "url(/client/img/interfaces/flags/banners/prussiaBanner.png)",
    "dutch": "url(/client/img/interfaces/flags/banners/dutchBanner.png)",
    "portugal": "url(/client/img/interfaces/flags/banners/portugalBanner.png)",
    "russia": "url(/client/img/interfaces/flags/banners/russiaBanner.png)",
    "ottoman": "url(/client/img/interfaces/flags/banners/ottomanBanner.png)",
    "natives": "url(/client/img/interfaces/flags/banners/nativeBanner.png)",
}
var nationGold = {
    "england": 4500,
    "france": 5000,
    "spain": 6000,
    "prussia": 3500,
    "dutch": 6500,
    "portugal": 5250,
    "russia": 3750,
    "ottoman": 4750,
    "natives": 0,
}
var nationTimber = {
    "england": 1000,
    "france": 1000,
    "spain": 1000,
    "prussia": 1000,
    "dutch": 1000,
    "portugal": 1000,
    "russia": 1000,
    "ottoman": 1000,
    "natives": 0,
}
var nationIron = {
    "england": 500,
    "france": 500,
    "spain": 500,
    "prussia": 500,
    "dutch": 500,
    "portugal": 500,
    "russia": 500,
    "ottoman": 500,
    "natives": 0,
}
var nationGInc= {
    "england": 50,
    "france": 50,
    "spain": 50,
    "prussia": 50,
    "dutch": 50,
    "portugal": 50,
    "russia": 50,
    "ottoman": 50,
    "natives": 0,
}
var nationTInc = {
    "england": 25,
    "france": 25,
    "spain": 25,
    "prussia": 25,
    "dutch": 25,
    "portugal": 25,
    "russia": 25,
    "ottoman": 25,
    "natives": 0,
}
var nationIInc = {
    "england": 0,
    "france": 0,
    "spain": 0,
    "prussia": 0,
    "dutch": 0,
    "portugal": 0,
    "russia": 0,
    "ottoman": 0,
    "natives": 0,
}
var playerIconButtons = {
    "1": document.getElementById("iconPicker-iconBox1"),
    "2": document.getElementById("iconPicker-iconBox2"),
    "3": document.getElementById("iconPicker-iconBox3"),
}
var playerIcons = {
    "1": "url(/client/img/interfaces/player/Anim/mus_gotAnim.gif)",
    "2": "url(/client/img/interfaces/player/Anim/blonde_blueAnim.gif)",
    "3": "url(/client/img/interfaces/player/Anim/beard_cigarAnim.gif)",
}
var mapSelectButtons = {
    "enetivia": document.getElementById("mapPicker-enetiviaBox"),
    "vespazium": document.getElementById("mapPicker-vespaziumBox"),
}
var unitSelectButtons = {
    "ranged": document.getElementById("recruit-ranged"),
    "melee": document.getElementById("recruit-melee"),
    "artillery": document.getElementById("recruit-artillery"),
    "defenders": document.getElementById("recruit-defenders"),
    "seafaring": document.getElementById("recruit-seafaring"),
}
var colonySelectButtons = {
    "Wiland": document.getElementById("Wiland_colony"),
    "Nenichia": document.getElementById("Nenichia_colony"),
    "Gond": document.getElementById("Gond_colony"),
    "Szentia": document.getElementById("Szentia_colony"),
    "Bascia": document.getElementById("Bascia_colony"),
    "Luruvojia": document.getElementById("Luruvojia_colony"),
    "Ayburt": document.getElementById("Ayburt_colony"),
    "Adyoujdia": document.getElementById("Adyoujdia_colony"),
    "Enparadia": document.getElementById("Enparadia_colony"),
    "Sasbach": document.getElementById("Sasbach_colony"),
    "Feldia": document.getElementById("Feldia_colony"),
    "Ataszek": document.getElementById("Ataszek_colony"),
    "Momonykia": document.getElementById("Momonykia_colony"),
    "Arnieria": document.getElementById("Arnieria_colony"),
    "Sacher": document.getElementById("Sacher_colony"),
    "Varvodia": document.getElementById("Varvodia_colony"),
    "Ormatvaria": document.getElementById("Ormatvaria_colony"),
    "Kouni": document.getElementById("Kouni_colony"),
    "Wigia": document.getElementById("Wigia_colony"),
}
var colonyDefense = {
    "Wiland": 0,
    "Nenichia": 0,
    "Gond": 0,
    "Szentia": 0,
    "Bascia": 0,
    "Luruvojia": 0,
    "Ayburt": 0,
    "Adyoujdia": 0,
    "Enparadia": 0,
    "Sasbach": 0,
    "Feldia": 0,
    "Ataszek": 0,
    "Momonykia": 0,
    "Arnieria": 0,
    "Sacher": 0,
    "Varvodia": 0,
    "Ormatvaria": 0,
    "Kouni": 0,
    "Wigia": 0,
}
var ocean = {
    "Ocean": document.getElementById("Ocean")
}
var unitImage = {
    "footmen": "url(/client/img/units/musk/muskAnim_idle.gif)",
    "pikemen": "url(/client/img/units/pike/pikeAnim_idle.gif)",
    "bombard": "",
    "militia": "",
    "galleon": "url(/client/img/units/frigates/frigate.png)",
}
var allUnitNames = {
    "footmen": "Footmen",
    "pikemen": "Pikemen",
    "bombard": "Bombard",
    "militia": "Militia",
    "galleon": "Galleon",
}
var allUnitDesc = {
    "footmen": "Short ranged units with little accuracy. Although, when they are in a tight formation, they can be fataly effective. The downside of this tight formation approach is that they can be massacared by artillery fire.",
    "pikemen": "Like Alexander's phalengites, they have long pikes that penetrate the enemy lines from a close yet same distance. They are very vulnerable to ranged units due to the fact that they have no ranged weapons.",
    "bombard": "When manned, they can focus down and slaughter large groups of enemy contingents. Their accuracy is poor but deadly.",
    "militia": "If positioned on a wall or in a choke-point, each man has the power of at least three men on the ground. The problem is that they have low morale and can break if tired very easily.",
    "galleon": "Galleon",
}
var incomeReduction = {
    "footmen": 3,
    "pikemen": 2,
    "bombard": 6,
    "militia": 1,
    "galleon": 4,
}
var unitRecNum = {
    "footmen": 50,
    "pikemen": 100,
    "bombard": 1,
    "militia": 75,
    "galleon": 1,
}
var unitGold = {
    "footmen": 250,
    "pikemen": 100,
    "bombard": 500,
    "militia": 175,
    "galleon": 325,
}
var unitWood = {
    "footmen": 0,
    "pikemen": 25,
    "bombard": 100,
    "militia": 10,
    "galleon": 400,
}
var unitIron = {
    "footmen": 0,
    "pikemen": 0,
    "bombard": 150,
    "militia": 0,
    "galleon": 25,
}
var unitMult_RANGED = {
    "footmen": 1.2,
    "pikemen": 0,
    "bombard": 25,
    "militia": 0.75,
    "galleon": "?",
}
var unitMult_MELEE = {
    "footmen": 0.6,
    "pikemen": 2.3,
    "bombard": 0,
    "militia": 0.4,
    "galleon": "?",
}



music.lobby.main.volume = 0.35
clicks.average.volume = 1
clicks.light.volume = 1

//other stuff
var userIcon = null
var screenRender = null
var sessionList = []
var sessionIndex = -1
var playersReadyInMATCH = 0
var clientProfileIcon = null
var clientsOnline = null
var clientUsername = null
var clientNation = null
var currentIndex = null
var currentSession = null
var curSes = sessionList[sessionIndex]
var ownedColonies_CLIENT = []
var curCol = null
var curUnit = null
var userCurGold = 0
var userCurTimber = 0
var userCurIron = 0
var userIncGold = 0
var userIncTimber = 0
var userIncIron = 0
var curRanged
var curMelee
var curArtillery
var curDefenders
var curSeafaring
var clientArmies = {}
var armySelectButtons = {}
var topMargin = -70
var colSelected = false
var unitNameOnHover
var unitNameID

socket.on('sessionInput', function(session) {
    sessionList = session
    let index = sessionIndex
    let curSes = sessionList[index]
    for(let i = 0; i < sessionList[index].players.length; i++) {
        let currentColony = null
        let currentUnit = null
        let curPlayer = sessionList[index].players[i]
        curPlayer["ranged"] = curRanged
        curPlayer["melee"] = curMelee
        curPlayer["artillery"] = curArtillery
        curPlayer["defenders"] = curDefenders
        curPlayer["seafaring"] = curSeafaring
        updateResources("gold", "wood", "iron", userCurGold, userCurTimber, userCurIron)
        updateIncome("gold", "wood", "iron", userIncGold, userIncTimber, userIncIron)
        socket.emit('pushUnits_init', sessionIndex)
        for(colonySelected in colonySelectButtons) {
            colonySelectButtons[colonySelected].addEventListener("click", function() {
                currentColony = this.id
                currentColony = currentColony.slice(0, currentColony.length -7) 
                console.log(currentColony)
                if(curPlayer.username === clientUsername) {
                    if(curSes[currentColony].owner === curPlayer.nation) {
                        colSelected = true
                        enableButton("armyList-raise")
                    }
                    if(curSes[currentColony].owner != curPlayer.nation) {
                        colSelected = false
                        disableButton("armyList-raise")
                    }
                }
                socket.emit('pushColony', currentColony, sessionIndex)
            })                                                                                                                                                                                                                       
        }

        for(unitSelected in unitSelectButtons) {
            unitSelectButtons[unitSelected].addEventListener("click", function() {
                currentUnit = this.id
                currentUnit = currentUnit.slice(8, currentUnit.length) 
                console.log(currentUnit)
                socket.emit('pushUnit', currentUnit, sessionIndex)
                if(curPlayer.username === clientUsername) {
                    replaceData("recruit-desc", "<div style='text-align: center; font-size: 20px;'>" + allUnitNames[curPlayer[currentUnit]] + " (" + unitRecNum[curPlayer[currentUnit]] + ")</div><div style='text-align:left; font-size: 15px; padding: 10px;'>" + allUnitDesc[curPlayer[currentUnit]] + "</div><div style='text-align:center; font-size: 17.5px; padding: 5px; color: grey;'>Multipliers</div><div style='text-align:left; font-size: 15px; padding-left: 10px; color: grey;'><div>Ranged: " + unitMult_RANGED[curPlayer[currentUnit]] + "</div><div>Melee: " + unitMult_MELEE[curPlayer[currentUnit]] + "</div></div>" )
                    replaceImage("recruit-unit--icon", unitImage[curPlayer[currentUnit]])
                    updateUnitCost("gold", "wood", "iron", unitGold[curPlayer[currentUnit]], unitWood[curPlayer[currentUnit]], unitIron[curPlayer[currentUnit]])
                }
            })
        }
    }
})

function rallyUnit(unit) {
    userCurGold -= unitGold[unit]
    userCurTimber -= unitWood[unit]
    userCurIron -= unitIron[unit]
    userIncGold -= incomeReduction[unit]
    socket.emit('updateResources_SERVER', userCurGold, userCurTimber, userCurIron, sessionIndex)
    socket.emit('updateIncome_SERVER', userIncGold, userIncTimber, userIncIron, sessionIndex)
    updateResources("gold", "wood", "iron", userCurGold, userCurTimber, userCurIron)
    updateIncome("gold", "wood", "iron", userIncGold, userIncTimber, userIncIron)
}

//******************** INIT STUFF ********************

disableButton("armyList-raise")

//************************* GETTERS *************************

socket.on('getUsername', function(username) {
    clientUsername = username
})
socket.on('getUnit', function(unit){
    curUnit = unit
})
socket.on('getPlayerRanged', function(ranged){
    curRanged = ranged
})
socket.on('getPlayerMelee', function(melee){
    curMelee = melee
})
socket.on('getPlayerArtillery', function(artillery){
    curArtillery = artillery
})
socket.on('getPlayerDefenders', function(defenders){
    curDefenders = defenders
})
socket.on('getPlayerSeafaring', function(seafaring){
    curSeafaring = seafaring
})
socket.on('getColony', function(colony){
    curCol = colony
})
socket.on('getNation', function(nation) {
    clientNation = nation
    socket.emit('pushResources_init', nationGold[clientNation], nationTimber[clientNation], nationIron[clientNation], nationGInc[clientNation], nationTInc[clientNation], nationIInc[clientNation], sessionIndex)
})
socket.on('getOnlinePlayers', function(online) {
    clientsOnline = online
})
socket.on('getProfileIcon', function(icon) {
    clientProfileIcon = icon
    document.getElementById('nationUI-userIcon').style.backgroundImage = playerIcons[clientProfileIcon]  
})

//********************** SETTERS **********************

socket.on('setResources', function(gold, timber, iron, gInc, tInc, iInc) {
    userCurGold = gold
    userCurTimber = timber
    userCurIron = iron
    userIncGold = gInc
    userIncTimber = tInc
    userIncIron = iInc
})

//********************* CLICK-EVENTS *********************

document.getElementById("colony-exit").addEventListener("click", function () {
    colSelected = false
    disableButton("armyList-raise")
})
document.getElementById("recruit-rally").addEventListener("click", function() {
        if(curUnit === "ranged") {
            if(userCurGold >= unitGold[curRanged]) {
                rallyUnit(curRanged)
            }
            if(userCurGold < unitGold[curRanged]) {
                console.log("can't afford!")
            }
        }
        if(curUnit === "melee") {
            if(userCurGold >= unitGold[curMelee] && userCurTimber >= unitWood[curMelee]) {
                rallyUnit(curMelee)
            }
            if(userCurGold < unitGold[curMelee] || userCurTimber < unitWood[curMelee]) {
                console.log("can't afford!")
            }
        }
        if(curUnit === "artillery") {
            if(userCurGold >= unitGold[curArtillery] && userCurTimber >= unitWood[curArtillery] && userCurIron >= unitIron[curArtillery]) {
                rallyUnit(curArtillery)
            }
            if(userCurGold < unitGold[curArtillery] || userCurTimber < unitWood[curArtillery] || userCurIron < unitIron[curArtillery]) {
                console.log("can't afford!")
            }
        }
        if(curUnit === "defenders") {
            if(userCurGold >= unitGold[curDefenders] && userCurTimber >= unitWood[curDefenders]) {
                socket.emit('addDefendersToColony', unitRecNum[curDefenders], curCol, sessionIndex)
                rallyUnit(curDefenders)
            }
            if (userCurGold < unitGold[curDefenders] || userCurTimber < unitWood[curDefenders]) {
                console.log("can't afford!")
            }
        }
    clicks.light.play()
})
document.getElementById('matchSession-inSession--mapBox').addEventListener("click", function() {
    displayInterface("mapPicker", display_IB)
    clicks.light.play()
})
document.getElementById('mapPicker-close').addEventListener("click", function() {
    displayInterface("mapPicker", display_NONE)
    clicks.average.play()
})
document.getElementById("colony-recruit").addEventListener("click", function() {
    clicks.light.play()
    displayInterface("recruitUI", display_IB)
})
document.getElementById("recruit-exit").addEventListener("click", function() {
    clicks.light.play() 
    displayInterface("recruitUI", display_NONE)
})
document.getElementById("armyList-raise").addEventListener("click", function() {
    clicks.light.play()
    if(colSelected) {
        displayInterface("armyNameUI", display_IB)
    } else {
        console.log("You must click on a colony to raise an army!")
    }
})

//********** Army Controls **********
document.getElementById("armyInteractiveUI-move").addEventListener("mouseover", function() {
    changeInfoBox("dataBox", "March", "bold", "rgb(156, 156, 156)", "white", "Move army to selected location or colony.", "normal", "", "normal", "", "normal")
    moveButton("armyInteractiveUI-move", 0.15, 25, "grey", "url(/client/img/interfaces/control/move_plain.png)")
})
document.getElementById("armyInteractiveUI-move").addEventListener("mouseout", function() {
    displayInterface("dataBox", display_NONE)
    moveButton("armyInteractiveUI-move", 0.15, 30, "rgba(0,0,0,0.9)", "url(/client/img/interfaces/control/move_sand.png)")
})
document.getElementById("armyInteractiveUI-levy").addEventListener("mouseover", function() {
    changeInfoBox("dataBox", "Levy", "bold", "rgb(156, 156, 156)", "white", "Train and enlist soldiers from the current colony.", "normal", "", "normal", "", "normal")
    moveButton("armyInteractiveUI-levy", 0.15, 25, "grey", "url(/client/img/interfaces/control/levy_white.png)")
})
document.getElementById("armyInteractiveUI-levy").addEventListener("mouseout", function() {
    displayInterface("dataBox", display_NONE)
    moveButton("armyInteractiveUI-levy", 0.15, 30, "rgba(0,0,0,0.9)", "url(/client/img/interfaces/control/levy_red.png)")
})
document.getElementById("armyInteractiveUI-fortify").addEventListener("mouseover", function() {
    changeInfoBox("dataBox", "Fortify", "bold", "rgb(156, 156, 156)", "white", "Encamp and protect current location.", "normal", "", "normal", "", "normal")
    moveButton("armyInteractiveUI-fortify", 0.15, 25, "grey", "url(/client/img/interfaces/control/fortify_white.png)")
})
document.getElementById("armyInteractiveUI-fortify").addEventListener("mouseout", function() {
    displayInterface("dataBox", display_NONE)
    moveButton("armyInteractiveUI-fortify", 0.15, 30, "rgba(0,0,0,0.9)", "url(/client/img/interfaces/control/fortify_grey.png)")
})
document.getElementById("armyInteractiveUI-general").addEventListener("mouseover", function() {
    changeInfoBox("dataBox", "Leadership", "bold", "rgb(156, 156, 156)", "white", "View the stats and progress of the General.", "normal", "", "normal", "", "normal")
    moveButton("armyInteractiveUI-general", 0.15, 25, "grey", "url(/client/img/interfaces/control/general_white.png)")
})
document.getElementById("armyInteractiveUI-general").addEventListener("mouseout", function() {
    displayInterface("dataBox", display_NONE)
    moveButton("armyInteractiveUI-general", 0.15, 30, "rgba(0,0,0,0.9)", "url(/client/img/interfaces/control/general_red.png)")
})
document.getElementById("armyNameUI-rally").addEventListener("click", function() {
    clicks.light.play()
    let armyName = document.getElementById("armyNameUI-input").value
    let generalName = generalNames[clientNation]
    topMargin += 80
    clientArmies[armyName] = {
        general: {
            name: generalName["" + (Math.floor(Math.random() * 20) + 1) + ""],
            icon: playerIcons["" + (Math.floor(Math.random() * 3) + 1) + ""],
            leadership: 0,
            tactics: 0,
            ferocity: 0
        },
        ranged: {
            type: "",
            count: 0
        },
        melee: {
            type: "",
            count: 0
        },
        artillery: {
            type: "",
            count: 0
        },
        location : {
            colony: "",
            x: 0,
            y: 0,
        },
        default: "Empty",
        owner: "",
        regiment: "",
        pose: "url(/client/img/units/musk/muskAnim_idle.gif)"
    }
    clientArmies[armyName].location.colony = curCol
    clientArmies[armyName].owner = clientNation
    clientArmies[armyName].regiment = curCol
    
    document.getElementById("armyList-list-box").innerHTML += "<div style='margin-top: 10px;margin-left: 10px;position: absolute;color: white;left: 0;top: 0;font-size: 15px;width: 280px;height: 70px;display: inline-block;color:white;border-radius: 4px;border: 3px;border-color: rgba(255,255,255,0.0);background-color: rgba(0,0,0,0.4);transition: all 0.25s;' id='" + armyName + "---army'><div class='armyNameIcon' id='" + armyName + "---icon'></div><div class='armyNameDescBox' id='" + armyName + "---desc-box'><div class='armyNameName' id='" + armyName + "---armyName'>" + armyName + "</div><div class='armyNameInfo'>" + clientArmies[armyName].default + "</div><div class='armyNameInfo'>Located in " + clientArmies[armyName].location.colony + "</div></div></div>"
    document.getElementById(armyName + "---army").style.marginTop = topMargin + "px"
    document.getElementById(armyName + "---icon").style.backgroundImage = clientArmies[armyName].general.icon
    // for(armySelect in armySelectButtons) {
    //     armySelectButtons[armySelect].addEventListener("click", function() {
    //         let currentArmy = this.id
    //         currentArmy = currentArmy.slice(0, currentArmy.length -7) 
    //         console.log(currentArmy)
    //         document.getElementById(currentArmy + "---army").style.animation = "bgFlash 2s infinite"
    //     })                                                                                                                                                                                                                       
    // }

    socket.emit('createArmy', armyName, curCol, clientNation, clientArmies[armyName].general.name, sessionIndex)
    displayInterface("armyNameUI", display_NONE)
})
socket.on('addArmyToMap', function(armyName, colony, nation, generalName, session) {
    sessionList = session
    let index = sessionIndex
    let currentSession = sessionList[index]
    createArmy("militaryMap", armyName, currentSession[colony].positions.move.x, currentSession[colony].positions.move.y, 100, 100, "url(/client/img/units/musk/muskAnim_idle.gif)", playerFlags[nation])
    armySelectButtons[armyName] = document.getElementById(armyName + "-ARMYRL")
    document.addEventListener("mouseover", function(e) {
        var target;
        if (!e) var e = window.event;
        if (e.target) target = e.target;
        else if (e.srcElement) target = e.srcElement;
        if (target.nodeType == 3) {
            target = target.parentNode;
        }
        unitNameID = target.id
        unitNameOnHover = target.id
        unitNameOnHover = unitNameOnHover.slice(0, unitNameOnHover.length -7)
        let armySuffix = unitNameID.slice(unitNameOnHover.length, unitNameID.length - 0)
        if(armySuffix === "-ARMYRL") {
            document.getElementById(unitNameID).addEventListener("mouseover", function() {
                console.log("event listener added!")
                changeInfoBox("dataBox", unitNameOnHover + " (" + nationNames[currentSession.armies[unitNameOnHover].owner] + ")", "bold", nationBackgroundColors[currentSession.armies[unitNameOnHover].owner], nationTextColors[currentSession.armies[unitNameOnHover].owner], "General " + currentSession.armies[unitNameOnHover].general.name, "normal", currentSession.armies[unitNameOnHover].regiment + " Army", "normal", "No trained men", "normal")
                document.body.style.cursor = "url(/client/img/interfaces/cursors/pointer_no.png), pointer"
                if(clientArmies[unitNameOnHover].owner === clientNation) {
                    document.body.style.cursor = "url(/client/img/interfaces/cursors/pointer.png), pointer"
                } else {
                    document.body.style.cursor = "url(/client/img/interfaces/cursors/pointer_no.png), pointer"
                }
            })
            document.getElementById(unitNameID).addEventListener("mouseout", function() {
                displayInterface("dataBox", display_NONE)
                document.body.style.cursor = "url(/client/img/interfaces/cursors/pointer.png), pointer"
            })
            document.getElementById(unitNameID).addEventListener("click", function() {
                document.getElementById(unitNameID).style.transition = "0s"
                moveInterface("armyControlUI", 0.25, 0, 0, 0, -200)
                moveInterface("armyInteractiveUI", 0.25, 0, 0, 0, -200)
                if(clientArmies[unitNameOnHover].owner === clientNation) {
                    displayInterface("dataBox", display_NONE)
                    clientArmies[unitNameOnHover].pose = "url(/client/img/units/musk/muskAnim_ready.gif)"
                    document.getElementById(unitNameID).style.backgroundImage = clientArmies[unitNameOnHover].pose
                    moveInterface("armyControlUI", 0.25, 0, 0, 0, -10)
                    moveInterface("armyInteractiveUI", 0.25, 0, 0, 0, -10)
                }
            })
        }
    })
})
document.getElementById("armyNameUI-close").addEventListener("click", function() {
    clicks.light.play() 
    displayInterface("armyNameUI", display_NONE)
})
document.getElementById("getArmiesButton").addEventListener("click", function() {
    clicks.light.play()
    moveInterface("armyListUI", 0.25, 10, 0, 0, 260)
})
document.getElementById("armyList-exit").addEventListener("click", function() {
    clicks.light.play() 
    moveInterface("armyListUI", 0.25, -320, 0, 0, 260)
    displayInterface("armyNameUI", display_NONE)
})
document.getElementById("centerMapButton").addEventListener("click", function() {
    mapTransition(0.25)
    recenter(2)
})
createMatchButton.addEventListener("click", function() {
    socket.emit('createSession')
    clicks.light.play()
})
refreshMatchButton.addEventListener("click", function() {
    socket.emit('requestSessionUpdate')
    clicks.light.play()
})
lobbyScreen_menu__findMatch.addEventListener("click", function() {
    socket.emit('requestSessionUpdate')
    sessionStatus_info.innerHTML = "(" + sessionList.length + ") matches in session."
    clicks.average.play()
})
lobbyScreen_playerBox__playerIcon.addEventListener("click", function() {
    iconPicker.style.display = "inline-block"
    clicks.light.play()
})
iconPicker_close.addEventListener("click", function() {
    iconPicker.style.display = "none"
    clicks.light.play()
})

//*********************** UPDATERS *********************

socket.on('updateDefense', function(defense, colony, session) {
    sessionList = session
    let index = sessionIndex
    let curSes = sessionList[index]
    for(let i = 0; i < sessionList[index].players.length; i++) {
        let curPlayer = sessionList[index].players[i]
        colonyDefense[curSes[colony]] = defense
        document.getElementById("colony-info").innerHTML = "</div><div style='margin-top: 0px'><div style='color: white; display: inline-block;'>" + curSes[colony].population + "</div> Settlers</div><div><div style='color: white; display: inline-block;'>" + colonyDefense[curSes[colony]] + "</div> Defenders</div>"
    }
})

//********************* ADDERS (ARRAY-PUSHERS) *********************

socket.on('addColony', function(colony){
    ownedColonies_CLIENT.push(colony)
})

//********************* DATABOX STUFF *********************

var dataBox = document.getElementById('dataBox')
document.addEventListener('mousemove', function(e) {
    let x = e.clientX
    let y = e.clientY
    dataBox.style.left = x + pixelLoc
    dataBox.style.top = y + pixelLoc
})

//********************* LOGIN SYSTEM *********************

loginScreen_buttons__logIn.onclick = function() {
    socket.emit('signIn',{username:loginScreen_usernameBar__input.value, password:loginScreen_passwordBar__input.value})
}
loginScreen_buttons__signUp.onclick = function() {
    socket.emit('signUp',{username:loginScreen_usernameBar__input.value, password:loginScreen_passwordBar__input.value})
}
socket.on('signInResponse', function(data) {
    if(data.success) {
        loginScreen_MSG.style.color = "white"
        loginScreen_MSG.innerHTML = "Welcome back!"
        document.body.style.animation = "fadeLobby 4s forwards"
        music.lobby.main.loop = true
        music.lobby.main.play()
        setTimeout(enter_Lobby, 2000)
    } else {
        loginScreen_MSG.style.color = "red"
        loginScreen_MSG.innerHTML = "&#9888 Username or password invalid."
    }
    clicks.average.play()
})
socket.on('signUpResponse', function(data) {
    if(data.success) {
        loginScreen_MSG.style.color = "white"
        loginScreen_MSG.innerHTML = "You must log in now to play."
        loginScreen_usernameBar__input.value = ""
        loginScreen_passwordBar__input.value = ""
    } else {
        loginScreen_MSG.style.color = "red"
        loginScreen_MSG.innerHTML = "&#9888 Username taken."
        loginScreen_usernameBar__input.value = ""
        loginScreen_passwordBar__input.value = ""
    }
    clicks.average.play()
})

document.getElementById("dataBox").style.display = "none"

function nationSelectRefreshCLIENT() {
	for(flag in nationFlagCovers) {
        nationFlagCovers[flag].style.display = "none"
    }
}

socket.on('clientSessionListUpdate', function(thisSession) {
    sessionList = thisSession
    if(screenRender === 'inSession') {
        nationSelectRefreshCLIENT()
        var index = sessionIndex
        actaulSessions.style.display = "none"
        matchSession_inSession.style.display = "inline-block"
        find_and_create_matchButtons.style.display = "none"
        inMatch_buttons.style.display = "inline-block"
        sessionStatus_info.innerHTML = "This match has " + sessionList[index].players.length + "/" + sessionList[index].playerCountMax + " players (" + sessionList[index].playersReady + " ready)"
        matchSession_inSession__mapBox___info.innerHTML = "<div style='color: white;'><div style='color: grey;'>Type: " + sessionList[index].mapType + "</div>" + sessionList[index].mapInfo + "<div style='color: turquoise;'>Colonies: " + sessionList[index].mapColonies + "</div></div>"
		for(let j = 0; j < sessionList[index].players.length; j++) {
            console.log((j + 1).toString())
            console.log(userIcon)
            document.getElementById('matchSession-inSession--playerBox' + (j + 1).toString() + '---playerIcon').style.backgroundImage = sessionList[index].players[j].icon
            document.getElementById('matchSession-inSession--playerBox' + (j + 1).toString() + '---playerName').innerHTML = sessionList[index].players[j].username
        }

        //nation select buttons
        for(nation in nationButtons) {
            nationButtons[nation].onclick = function() {
                nationSelectRefreshCLIENT()
                let nationName = this.id
                nationName = nationName.slice(0, nationName.length -3) 
                nationName = nationName.slice(11, nationName.length) 
                console.log(nationName)
                socket.emit('selectNation', nationName, sessionIndex)
            }
            clicks.average.play()
        }

        //icon select buttons
        for(icon in playerIconButtons) {
            playerIconButtons[icon].onclick = function() {
                let iconName = this.id
                iconName = iconName.slice(18, iconName.length) 
                console.log(iconName)
                socket.emit('changeIcon', iconName, sessionIndex)
            }
        }

        //map select buttons
        for(mapSelected in mapSelectButtons) {
            mapSelectButtons[mapSelected].onclick = function() {
                let mapName = this.id
                mapName = mapName.slice(0, mapName.length -3) 
                mapName = mapName.slice(10, mapName.length) 
                console.log(mapName)
                socket.emit('changeMap', mapName, sessionIndex)
            }
        }

        for(let i = 0; i < sessionList[index].players.length; i++) {
            let coastalColonies = ["Varvodia","Bascia","Szentia","Gond","Adyoujdia","Ataszek","Ormatvaria","Wiland","Sacher","Luruvojia","Ayburt"] 
            let colonies = ["Varvodia", "Arnieria", "Wigia", "Nenichia", "Bascia", "Szentia", "Enparadia", "Sacher", "Wiland", "Sasbach", "Feldia", "Momonykia", "Adyoujdia", "Ormatvaria", "Ataszek", "Kouni", "Luruvojia", "Ayburt", "Gond"]
            let colonyView = false
            let subState = "lobby"
            let turnStatus = null
            let curSession = sessionList[index]
            let curPlayer = sessionList[index].players[i]

            //fog for outer lands
            document.getElementById("North_outline").setAttribute("fill", "rgba(0,0,0,0.7)")
            document.getElementById("South_outline").setAttribute("fill", "rgba(0,0,0,0.7)")

            setData("Varvodia", "Arnieria", "Wigia", "Nenichia", "Bascia", "Szentia", "Enparadia", "Sacher", "Wiland", "Sasbach", "Feldia", "Momonykia", "Adyoujdia", "Ormatvaria", "Ataszek", "Kouni", "Luruvojia", "Ayburt", "Gond")
            

            curPlayer.state = "lobby"
            curPlayer.turn = 0
            curPlayer.influence = "Low"
            curPlayer.diplomacy = "Neutral"
            curSession.currentWars = ["None"]
            //Changes the map for the current session
            document.getElementById("matchSession-inSession--mapBox---icon").style.backgroundImage = mapFiles[curSession.map]
            document.getElementById("matchSession-inSession--mapBox---name").innerHTML = mapNames[curSession.map]
            document.getElementById("matchSession-inSession--mapBox---info").innerHTML = mapInfo[curSession.map]

            if(curPlayer.turn === 0) turnStatus = ""
            if(curPlayer.turn === 1) turnStatus = "Player's turn in progress."
            function setData(c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19, c20, c21, c22, c23, c24) {
                //banners
                document.getElementById(c1 + "-city--banner").style.backgroundImage = playerBanner[curSession[c1].owner]
                document.getElementById(c2 + "-city--banner").style.backgroundImage = playerBanner[curSession[c2].owner]
                document.getElementById(c3 + "-city--banner").style.backgroundImage = playerBanner[curSession[c3].owner]
                document.getElementById(c4 + "-city--banner").style.backgroundImage = playerBanner[curSession[c4].owner]
                document.getElementById(c5 + "-city--banner").style.backgroundImage = playerBanner[curSession[c5].owner]
                document.getElementById(c6 + "-city--banner").style.backgroundImage = playerBanner[curSession[c6].owner]
                document.getElementById(c7 + "-city--banner").style.backgroundImage = playerBanner[curSession[c7].owner]
                document.getElementById(c8 + "-city--banner").style.backgroundImage = playerBanner[curSession[c8].owner]
                document.getElementById(c9 + "-city--banner").style.backgroundImage = playerBanner[curSession[c9].owner]
                document.getElementById(c10 + "-city--banner").style.backgroundImage = playerBanner[curSession[c10].owner]
                document.getElementById(c11 + "-city--banner").style.backgroundImage = playerBanner[curSession[c11].owner]
                document.getElementById(c12 + "-city--banner").style.backgroundImage = playerBanner[curSession[c12].owner]
                document.getElementById(c13 + "-city--banner").style.backgroundImage = playerBanner[curSession[c13].owner]
                document.getElementById(c14 + "-city--banner").style.backgroundImage = playerBanner[curSession[c14].owner]
                document.getElementById(c15 + "-city--banner").style.backgroundImage = playerBanner[curSession[c15].owner]
                document.getElementById(c16 + "-city--banner").style.backgroundImage = playerBanner[curSession[c16].owner]
                document.getElementById(c17 + "-city--banner").style.backgroundImage = playerBanner[curSession[c17].owner]
                document.getElementById(c18 + "-city--banner").style.backgroundImage = playerBanner[curSession[c18].owner]
                document.getElementById(c19 + "-city--banner").style.backgroundImage = playerBanner[curSession[c19].owner]
                // document.getElementById(c20 + "-city--banner").style.backgroundImage = playerBanner[curSession[c20].owner]
                // document.getElementById(c21 + "-city--banner").style.backgroundImage = playerBanner[curSession[c21].owner]
                // document.getElementById(c22 + "-city--banner").style.backgroundImage = playerBanner[curSession[c22].owner]
                // document.getElementById(c23 + "-city--banner").style.backgroundImage = playerBanner[curSession[c23].owner]
                // document.getElementById(c24 + "-city--banner").style.backgroundImage = playerBanner[curSession[c24].owner]
            
                //cities
                document.getElementById(c1 + "-city").style.backgroundImage = curSession[c1].img.city
                document.getElementById(c2 + "-city").style.backgroundImage = curSession[c2].img.city
                document.getElementById(c3 + "-city").style.backgroundImage = curSession[c3].img.city
                document.getElementById(c4 + "-city").style.backgroundImage = curSession[c4].img.city
                document.getElementById(c5 + "-city").style.backgroundImage = curSession[c5].img.city
                document.getElementById(c6 + "-city").style.backgroundImage = curSession[c6].img.city
                document.getElementById(c7 + "-city").style.backgroundImage = curSession[c7].img.city
                document.getElementById(c8 + "-city").style.backgroundImage = curSession[c8].img.city
                document.getElementById(c9 + "-city").style.backgroundImage = curSession[c9].img.city
                document.getElementById(c10 + "-city").style.backgroundImage = curSession[c10].img.city
                document.getElementById(c11 + "-city").style.backgroundImage = curSession[c11].img.city
                document.getElementById(c12 + "-city").style.backgroundImage = curSession[c12].img.city
                document.getElementById(c13 + "-city").style.backgroundImage = curSession[c13].img.city
                document.getElementById(c14 + "-city").style.backgroundImage = curSession[c14].img.city
                document.getElementById(c15 + "-city").style.backgroundImage = curSession[c15].img.city
                document.getElementById(c16 + "-city").style.backgroundImage = curSession[c16].img.city
                document.getElementById(c17 + "-city").style.backgroundImage = curSession[c17].img.city
                document.getElementById(c18 + "-city").style.backgroundImage = curSession[c18].img.city
                document.getElementById(c19 + "-city").style.backgroundImage = curSession[c19].img.city
                // document.getElementById(c20 + "-city").style.backgroundImage = curSession[c20].img.city
                // document.getElementById(c21 + "-city").style.backgroundImage = curSession[c21].img.city
                // document.getElementById(c22 + "-city").style.backgroundImage = curSession[c22].img.city
                // document.getElementById(c23 + "-city").style.backgroundImage = curSession[c23].img.city
                // document.getElementById(c24 + "-city").style.backgroundImage = curSession[c24].img.city
            
                //mini map
            
                //stroke
                // document.getElementById(c1 + "_miniMap").style.stroke = nationBackgroundColors[curSession[c1].owner]
                // document.getElementById(c2 + "_miniMap").style.stroke = nationBackgroundColors[curSession[c2].owner]
                // document.getElementById(c3 + "_miniMap").style.stroke = nationBackgroundColors[curSession[c3].owner]
                // document.getElementById(c4 + "_miniMap").style.stroke = nationBackgroundColors[curSession[c4].owner]
                // document.getElementById(c5 + "_miniMap").style.stroke = nationBackgroundColors[curSession[c5].owner]
                // document.getElementById(c6 + "_miniMap").style.stroke = nationBackgroundColors[curSession[c6].owner]
                // document.getElementById(c7 + "_miniMap").style.stroke = nationBackgroundColors[curSession[c7].owner]
                // document.getElementById(c8 + "_miniMap").style.stroke = nationBackgroundColors[curSession[c8].owner]
                // document.getElementById(c9 + "_miniMap").style.stroke = nationBackgroundColors[curSession[c9].owner]
                // document.getElementById(c10 + "_miniMap").style.stroke = nationBackgroundColors[curSession[c10].owner]
                // document.getElementById(c11 + "_miniMap").style.stroke = nationBackgroundColors[curSession[c11].owner]
                // document.getElementById(c12 + "_miniMap").style.stroke = nationBackgroundColors[curSession[c12].owner]
                // document.getElementById(c13 + "_miniMap").style.stroke = nationBackgroundColors[curSession[c13].owner]
                // document.getElementById(c14 + "_miniMap").style.stroke = nationBackgroundColors[curSession[c14].owner]
                // document.getElementById(c15 + "_miniMap").style.stroke = nationBackgroundColors[curSession[c15].owner]
                // document.getElementById(c16 + "_miniMap").style.stroke = nationBackgroundColors[curSession[c16].owner]
                // document.getElementById(c17 + "_miniMap").style.stroke = nationBackgroundColors[curSession[c17].owner]
                // document.getElementById(c18 + "_miniMap").style.stroke = nationBackgroundColors[curSession[c18].owner]
                // document.getElementById(c19 + "_miniMap").style.stroke = nationBackgroundColors[curSession[c19].owner]
                // document.getElementById(c20 + "_miniMap").style.stroke = nationBackgroundColors[curSession[c20].owner]
                // document.getElementById(c21 + "_miniMap").style.stroke = nationBackgroundColors[curSession[c21].owner]
                // document.getElementById(c22 + "_miniMap").style.stroke = nationBackgroundColors[curSession[c22].owner]
                // document.getElementById(c23 + "_miniMap").style.stroke = nationBackgroundColors[curSession[c23].owner]
                // document.getElementById(c24 + "_miniMap").style.stroke = nationBackgroundColors[curSession[c24].owner]
            
                //fill
                document.getElementById(c1 + "_miniMap_outline").setAttribute("fill", nationMapColors[curSession[c1].owner])
                document.getElementById(c2 + "_miniMap_outline").setAttribute("fill", nationMapColors[curSession[c2].owner])
                document.getElementById(c3 + "_miniMap_outline").setAttribute("fill", nationMapColors[curSession[c3].owner])
                document.getElementById(c4 + "_miniMap_outline").setAttribute("fill", nationMapColors[curSession[c4].owner])
                document.getElementById(c5 + "_miniMap_outline").setAttribute("fill", nationMapColors[curSession[c5].owner])
                document.getElementById(c6 + "_miniMap_outline").setAttribute("fill", nationMapColors[curSession[c6].owner])
                document.getElementById(c7 + "_miniMap_outline").setAttribute("fill", nationMapColors[curSession[c7].owner])
                document.getElementById(c8 + "_miniMap_outline").setAttribute("fill", nationMapColors[curSession[c8].owner])
                document.getElementById(c9 + "_miniMap_outline").setAttribute("fill", nationMapColors[curSession[c9].owner])
                document.getElementById(c10 + "_miniMap_outline").setAttribute("fill", nationMapColors[curSession[c10].owner])
                document.getElementById(c11 + "_miniMap_outline").setAttribute("fill", nationMapColors[curSession[c11].owner])
                document.getElementById(c12 + "_miniMap_outline").setAttribute("fill", nationMapColors[curSession[c12].owner])
                document.getElementById(c13 + "_miniMap_outline").setAttribute("fill", nationMapColors[curSession[c13].owner])
                document.getElementById(c14 + "_miniMap_outline").setAttribute("fill", nationMapColors[curSession[c14].owner])
                document.getElementById(c15 + "_miniMap_outline").setAttribute("fill", nationMapColors[curSession[c15].owner])
                document.getElementById(c16 + "_miniMap_outline").setAttribute("fill", nationMapColors[curSession[c16].owner])
                document.getElementById(c17 + "_miniMap_outline").setAttribute("fill", nationMapColors[curSession[c17].owner])
                document.getElementById(c18 + "_miniMap_outline").setAttribute("fill", nationMapColors[curSession[c18].owner])
                document.getElementById(c19 + "_miniMap_outline").setAttribute("fill", nationMapColors[curSession[c19].owner])
                // document.getElementById(c20 + "_miniMap_outline").setAttribute("fill", nationMapColors[curSession[c20].owner])
                // document.getElementById(c21 + "_miniMap_outline").setAttribute("fill", nationMapColors[curSession[c21].owner])
                // document.getElementById(c22 + "_miniMap_outline").setAttribute("fill", nationMapColors[curSession[c22].owner])
                // document.getElementById(c23 + "_miniMap_outline").setAttribute("fill", nationMapColors[curSession[c23].owner])
                // document.getElementById(c24 + "_miniMap_outline").setAttribute("fill", nationMapColors[curSession[c24].owner])
            }
            function fog_EFFECT(c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19, c20, c21, c22, c23, c24) {
                document.getElementById(c1 + "_colony_outline").setAttribute("fill", "rgba(0,0,0,0.7)")
                document.getElementById(c2 + "_colony_outline").setAttribute("fill", "rgba(0,0,0,0.7)")
                document.getElementById(c3 + "_colony_outline").setAttribute("fill", "rgba(0,0,0,0.7)")
                document.getElementById(c4 + "_colony_outline").setAttribute("fill", "rgba(0,0,0,0.7)")
                document.getElementById(c5 + "_colony_outline").setAttribute("fill", "rgba(0,0,0,0.7)")
                document.getElementById(c6 + "_colony_outline").setAttribute("fill", "rgba(0,0,0,0.7)")
                document.getElementById(c7 + "_colony_outline").setAttribute("fill", "rgba(0,0,0,0.7)")
                document.getElementById(c8 + "_colony_outline").setAttribute("fill", "rgba(0,0,0,0.7)")
                document.getElementById(c9 + "_colony_outline").setAttribute("fill", "rgba(0,0,0,0.7)")
                document.getElementById(c10 + "_colony_outline").setAttribute("fill", "rgba(0,0,0,0.7)")
                document.getElementById(c11 + "_colony_outline").setAttribute("fill", "rgba(0,0,0,0.7)")
                document.getElementById(c12 + "_colony_outline").setAttribute("fill", "rgba(0,0,0,0.7)")
                document.getElementById(c13 + "_colony_outline").setAttribute("fill", "rgba(0,0,0,0.7)")
                document.getElementById(c14 + "_colony_outline").setAttribute("fill", "rgba(0,0,0,0.7)")
                document.getElementById(c15 + "_colony_outline").setAttribute("fill", "rgba(0,0,0,0.7)")
                document.getElementById(c16 + "_colony_outline").setAttribute("fill", "rgba(0,0,0,0.7)")
                document.getElementById(c17 + "_colony_outline").setAttribute("fill", "rgba(0,0,0,0.7)")
                document.getElementById(c18 + "_colony_outline").setAttribute("fill", "rgba(0,0,0,0.7)")
                document.getElementById(c19 + "_colony_outline").setAttribute("fill", "rgba(0,0,0,0.7)")
                // document.getElementById(c20 + "_miniMap_outline").setAttribute("fill", nationBackgroundColors[curSession[c20].owner])
                // document.getElementById(c21 + "_miniMap_outline").setAttribute("fill", nationBackgroundColors[curSession[c21].owner])
                // document.getElementById(c22 + "_miniMap_outline").setAttribute("fill", nationBackgroundColors[curSession[c22].owner])
                // document.getElementById(c23 + "_miniMap_outline").setAttribute("fill", nationBackgroundColors[curSession[c23].owner])
                // document.getElementById(c24 + "_miniMap_outline").setAttribute("fill", nationBackgroundColors[curSession[c24].owner])
                document.getElementById("North_outline").setAttribute("fill", "rgba(0,0,0,0.9)")
                document.getElementById("South_outline").setAttribute("fill", "rgba(0,0,0,0.9)")
            }
            function fog_ERASE(c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19, c20, c21, c22, c23, c24) {
                //fill
                document.getElementById(c1 + "_colony_outline").setAttribute("fill", "rgba(0,0,0,0)")
                document.getElementById(c2 + "_colony_outline").setAttribute("fill", "rgba(0,0,0,0)")
                document.getElementById(c3 + "_colony_outline").setAttribute("fill", "rgba(0,0,0,0)")
                document.getElementById(c4 + "_colony_outline").setAttribute("fill", "rgba(0,0,0,0)")
                document.getElementById(c5 + "_colony_outline").setAttribute("fill", "rgba(0,0,0,0)")
                document.getElementById(c6 + "_colony_outline").setAttribute("fill", "rgba(0,0,0,0)")
                document.getElementById(c7 + "_colony_outline").setAttribute("fill", "rgba(0,0,0,0)")
                document.getElementById(c8 + "_colony_outline").setAttribute("fill", "rgba(0,0,0,0)")
                document.getElementById(c9 + "_colony_outline").setAttribute("fill", "rgba(0,0,0,0)")
                document.getElementById(c10 + "_colony_outline").setAttribute("fill", "rgba(0,0,0,0)")
                document.getElementById(c11 + "_colony_outline").setAttribute("fill", "rgba(0,0,0,0)")
                document.getElementById(c12 + "_colony_outline").setAttribute("fill", "rgba(0,0,0,0)")
                document.getElementById(c13 + "_colony_outline").setAttribute("fill", "rgba(0,0,0,0)")
                document.getElementById(c14 + "_colony_outline").setAttribute("fill", "rgba(0,0,0,0)")
                document.getElementById(c15 + "_colony_outline").setAttribute("fill", "rgba(0,0,0,0)")
                document.getElementById(c16 + "_colony_outline").setAttribute("fill", "rgba(0,0,0,0)")
                document.getElementById(c17 + "_colony_outline").setAttribute("fill", "rgba(0,0,0,0)")
                document.getElementById(c18 + "_colony_outline").setAttribute("fill", "rgba(0,0,0,0)")
                document.getElementById(c19 + "_colony_outline").setAttribute("fill", "rgba(0,0,0,0)")
                // document.getElementById(c20 + "_miniMap_outline").setAttribute("fill", nationBackgroundColors[curSession[c20].owner])
                // document.getElementById(c21 + "_miniMap_outline").setAttribute("fill", nationBackgroundColors[curSession[c21].owner])
                // document.getElementById(c22 + "_miniMap_outline").setAttribute("fill", nationBackgroundColors[curSession[c22].owner])
                // document.getElementById(c23 + "_miniMap_outline").setAttribute("fill", nationBackgroundColors[curSession[c23].owner])
                // document.getElementById(c24 + "_miniMap_outline").setAttribute("fill", nationBackgroundColors[curSession[c24].owner])
                document.getElementById("North_outline").setAttribute("fill", "rgba(0,0,0,0.7)")
                document.getElementById("South_outline").setAttribute("fill", "rgba(0,0,0,0.7)")
            }
            function minimap_ERASE(c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19, c20, c21, c22, c23, c24) {
                //fill
                document.getElementById(c1 + "_miniMap").style.stroke = "rgba(0,0,0,0)"
                document.getElementById(c2 + "_miniMap").style.stroke = "rgba(0,0,0,0)"
                document.getElementById(c3 + "_miniMap").style.stroke = "rgba(0,0,0,0)"
                document.getElementById(c4 + "_miniMap").style.stroke = "rgba(0,0,0,0)"
                document.getElementById(c5 + "_miniMap").style.stroke = "rgba(0,0,0,0)"
                document.getElementById(c6 + "_miniMap").style.stroke = "rgba(0,0,0,0)"
                document.getElementById(c7 + "_miniMap").style.stroke = "rgba(0,0,0,0)"
                document.getElementById(c8 + "_miniMap").style.stroke = "rgba(0,0,0,0)"
                document.getElementById(c9 + "_miniMap").style.stroke = "rgba(0,0,0,0)"
                document.getElementById(c10 + "_miniMap").style.stroke = "rgba(0,0,0,0)"
                document.getElementById(c11 + "_miniMap").style.stroke = "rgba(0,0,0,0)"
                document.getElementById(c12 + "_miniMap").style.stroke = "rgba(0,0,0,0)"
                document.getElementById(c13 + "_miniMap").style.stroke = "rgba(0,0,0,0)"
                document.getElementById(c14 + "_miniMap").style.stroke = "rgba(0,0,0,0)"
                document.getElementById(c15 + "_miniMap").style.stroke = "rgba(0,0,0,0)"
                document.getElementById(c16 + "_miniMap").style.stroke = "rgba(0,0,0,0)"
                document.getElementById(c17 + "_miniMap").style.stroke = "rgba(0,0,0,0)"
                document.getElementById(c18 + "_miniMap").style.stroke = "rgba(0,0,0,0)"
                document.getElementById(c19 + "_miniMap").style.stroke = "rgba(0,0,0,0)"
            }
            for(armySelected in armySelectButtons) {
                let armyID = undefined
                armyID = armySelectButtons[armySelected]
                console.log(armySelectButtons)
            }
            for(colonySelected in colonySelectButtons) {
                let colonyID = undefined
                let colonyName = undefined
                colonyID = colonySelectButtons[colonySelected]
                colonyID.addEventListener("mouseover", function() {
                    colonyName = this.id
                    colonyName = colonyName.slice(0, colonyName.length -7) 
                    changeInfoBox("dataBox", colonyName + " (" + nationNames[curSession[colonyName].owner] + ")", "bold", nationBackgroundColors[curSession[colonyName].owner], nationTextColors[curSession[colonyName].owner], curSession[colonyName].colonyLevel, "normal", + curSession[colonyName].population + " Settlers", "normal", curSession[colonyName].defense + " Defenders", "normal")
                })
                colonyID.addEventListener("mouseout", function() {
                    displayInterface("dataBox", display_NONE)
                })
                colonyID.addEventListener("click", function() {
                    let colonyName = this.id
                    colonyName = colonyName.slice(0, colonyName.length -7)
                    minimap_ERASE("Varvodia", "Arnieria", "Wigia", "Nenichia", "Bascia", "Szentia", "Enparadia", "Sacher", "Wiland", "Sasbach", "Feldia", "Momonykia", "Adyoujdia", "Ormatvaria", "Ataszek", "Kouni", "Luruvojia", "Ayburt", "Gond")
                    document.getElementById(colonyName + "_miniMap").style.stroke = "white"
                    changeColonyBox(colonyName, curSession[colonyName].img.city,  playerFlags[curSession[colonyName].owner])
                    document.getElementById("colony-info").innerHTML = "<div><div style='margin-top: 0px'><div style='color: white; display: inline-block;'>" + curSession[colonyName].population + "</div> Settlers</div><div><div style='color: white; display: inline-block;'>" + curSession[colonyName].defense + "</div> Defenders</div>"
                    moveInterface("colonyUI", 0.25, 0, 10, 10, 0)
                    soundEmiter(clicks.colony.city, 0.5, true)
                    soundEmiter(clicks.hover.mid, 0.75, false)
                    fog_EFFECT("Varvodia", "Arnieria", "Wigia", "Nenichia", "Bascia", "Szentia", "Enparadia", "Sacher", "Wiland", "Sasbach", "Feldia", "Momonykia", "Adyoujdia", "Ormatvaria", "Ataszek", "Kouni", "Luruvojia", "Ayburt", "Gond")
                    document.getElementById(colonyName + "_colony_outline").setAttribute("fill", "rgba(0,0,0,0)")
                    mapTransition(0.25)
                    moveInterface("armyControlUI", 0.25, 0, 0, 0, -200)
                    moveInterface("armyInteractiveUI", 0.25, 0, 0, 0, -200)
                    displayInterface("recruitUI", display_NONE)
                    if(curPlayer.username === clientUsername) {
                        if(curSession[colonyName].owner === curPlayer.nation) {
                            resizeInterface("colonyUI", 320, 400)
                            displayInterface("colony-build", display_IB)
                            displayInterface("colony-recruit", display_IB)
                        } else {
                            resizeInterface("colonyUI", 320, 350)
                            displayInterface("colony-build", display_NONE)
                            displayInterface("colony-recruit", display_NONE)
                        }
                    }
                })
                    // clicks.hover.mid.play()
            }
            document.getElementById("colony-exit").addEventListener("click", function () {
                fog_ERASE("Varvodia", "Arnieria", "Wigia", "Nenichia", "Bascia", "Szentia", "Enparadia", "Sacher", "Wiland", "Sasbach", "Feldia", "Momonykia", "Adyoujdia", "Ormatvaria", "Ataszek", "Kouni", "Luruvojia", "Ayburt", "Gond")
                moveInterface("colonyUI", 0.25, 0, -320, 10, 0)
                displayInterface("recruitUI", display_NONE)
                clicks.light.play()
                clicks.colony.city.pause()
            })

            if(curPlayer.nation) {
                nationFlagCovers[curPlayer.nation].style.display = "inline-block"
                nationPlayerLabel[curPlayer.nation].innerHTML = curPlayer.username
                document.getElementById("lobbyScreen-playerBox--playerIcon---icon").style.backgroundImage = playerIcons[curPlayer.icon]
                document.getElementById("matchSession-inSession--playerBox" + (i + 1).toString() + "---playerCivIMG").style.backgroundImage = playerFlags[curPlayer.nation]
                document.getElementById("turnUI-player" + (i + 1).toString() + "--flag").style.backgroundImage = playerFlags[curPlayer.nation]
                document.getElementById("turnUI-player" + (i + 1).toString() + "--flag").addEventListener("contextmenu", function() {
                    changeInfoBox("dataBox", nationNames[curPlayer.nation] + " (" + curPlayer.username + ")", "bold", nationBackgroundColors[curPlayer.nation], nationTextColors[curPlayer.nation], "Influence - " + curPlayer.influence, "normal", "Relationship - " + curPlayer.diplomacy, "normal", curPlayer.turnMSG, "bold")
                })
                document.getElementById("turnUI-player" + (i + 1).toString() + "--flag").addEventListener("mouseout", function() {
                    document.getElementById("dataBox").style.display = "none"
                })
                if(curPlayer.username === clientUsername) document.getElementById("nationUI-nationFlag").style.backgroundImage = playerFlags[curPlayer.nation]
            }

            if(sessionList[index].players.length === sessionList[index].playerCountMax) sessionStatus_info.innerHTML = "&#9888 Match is full. No one else may join unless someone leaves."

            //Button event for readying up.
            readyMatchButton.onclick = function() {
                for(let i = 0; i < sessionList[index].players.length; i++) { 
                    let curPlayer = sessionList[index].players[i]
                    let readyState = 0
                    if(curPlayer.username === clientUsername) {
                        if(curPlayer.nation != undefined) {
                            readyMatchButton.style.display = "none"
                            leaveMatchButton.style.marginLeft = "10px"
                            let readyPlayerIND = "<div style='color: turquoise;'>Ready</div>"
                            socket.emit('playerReadyUp', readyPlayerIND, readyState, sessionIndex)
                            sessionStatus_info.innerHTML = "This match has " + sessionList[index].players.length + "/" + sessionList[index].playerCountMax + " players (" + sessionList[index].playersReady + " ready)"
                        }
                        if(curPlayer.nation === undefined) sessionStatus_info.innerHTML = "You must pick a nation before you ready up!"
                    }
                    clicks.light.play()
                }
            }

            document.getElementById("endTurn").onclick = function() {
                for(let i = 0; i < sessionList[index].players.length; i++) { 
                    fog_ERASE("Varvodia", "Arnieria", "Wigia", "Nenichia", "Bascia", "Szentia", "Enparadia", "Sacher", "Wiland", "Sasbach", "Feldia", "Momonykia", "Adyoujdia", "Ormatvaria", "Ataszek", "Kouni", "Luruvojia", "Ayburt", "Gond")
                    moveInterface("colonyUI", 0.25, 0, -320, 30, 0)
                    displayInterface("recruitUI", display_NONE)
                    clicks.colony.city.pause()
                    let subState = "game"
                    cameraMove = true
                    let curSession = sessionList[index]
                    let curPlayer = sessionList[index].players[i]
                    if(curPlayer.username === clientUsername) {
                        userCurGold += userIncGold
                        userCurTimber += userIncTimber
                        userCurIron += userIncIron
                        socket.emit('updateResources_SERVER', userCurGold, userCurTimber, userCurIron, sessionIndex)
                        socket.emit('updateIncome_SERVER', userIncGold, userIncTimber, userIncIron, sessionIndex)
                        updateResources("gold", "wood", "iron", userCurGold, userCurTimber, userCurIron)
                        updateIncome("gold", "wood", "iron", userIncGold, userIncTimber, userIncIron)
                        let message = ""
                        if(curSession.turns === i) {
                            message = "Player is currently waiting for their turn."
                            console.log("turn ended")
                            socket.emit('turnPush', sessionIndex)
                            socket.emit('msgPush', message, sessionIndex)
                        } else {
                            message = "Player's turn in progress."
                            socket.emit('msgPush', message, sessionIndex)
                        }
                        console.log(curSession.turns)
                        console.log(i)
                    }
                }
            }

            lobbyScreen_menu__findMatch.onclick = function() {
                sessionStatus_info.innerHTML = "&#9888 You are already in a match. You can leave to find another."
            }

            if(curSession.year) {
                document.getElementById("turnUI-turnInfo").addEventListener("contextmenu", function() {
                    changeInfoBox("dataBox", "Turn Info", "bold", "grey", "white", "Year: " + curSession.year + " A.D.", "normal", "Campaign Turn: " + curSession.campaignTurnCount, "normal", "Ongoing Wars: " + curSession.currentWars[0], "bold")
                })
                document.getElementById("turnUI-turnInfo").addEventListener("mouseout", function() {
                    document.getElementById("dataBox").style.display = "none"
                })
            }

            //puts the player who chose a nation over the flag of the nation they chose 
            if(curSession.year) document.getElementById('turnUI-turnInfo').innerHTML = curSession.year + " a.d."

            //Changes the player's icon in HTML
            if(curPlayer.icon) {
                document.getElementById("matchSession-inSession--playerBox" + (i + 1).toString() + "---playerIcon").style.backgroundImage = playerIcons[curPlayer.icon]
                if(curPlayer.username === clientUsername) document.getElementById('lobbyScreen-playerBox--playerIcon---icon').style.backgroundImage = playerIcons[curPlayer.icon]
            }

            //Changes innerHTML under player name from "Not ready" to "Ready"
            if(curPlayer.readyMSG) document.getElementById("matchSession-inSession--playerBox" + (i + 1).toString() + "---playerReady").innerHTML = curPlayer.readyMSG

            //When player readies up
            // basically says if the amount of players 
            // that readied up equals the amount of players 
            // in the session, the game starts
            if(sessionList[index].playersReady === sessionList[index].players.length ) {
                if(clientUsername === curSession.creator.username) {
                    document.getElementById("startMatchButton").style.display = "inline-block"
                    document.getElementById("startMatchButton").style.marginLeft = "100px"
                }
            }

            document.getElementById("startMatchButton").addEventListener("click", function() {
                for(let i = 0; i < sessionList[index].players.length; i++) { 
                    let state = "load"
                    socket.emit("changeState", state, sessionIndex)
                }
            })
            if(curPlayer.username === clientUsername) {
                if(curSession.state === "load") {
                    sessionStatus_info.innerHTML = "&#9888 Game starting..."
                    document.body.style.animation = "fadeGameLoad 4s forwards"
                    music.lobby.main.pause()
                    music.loading.main.loop = true
                    music.loading.main.volume = 0.5
                    music.loading.main.play()
                    setTimeout(function() {
                        document.getElementById('game-loadingScreen--nationBox---leftIMG').style.backgroundImage = playerSideFlags[curPlayer.nation]
                        document.getElementById('game-loadingScreen--nationBox---infoBox----nationName').innerHTML = curPlayer.nation
                        document.getElementById('game-loadingScreen--nationBox---infoBox----nationInfo').innerHTML = nationDesc[curPlayer.nation]
                        lobbyScreen_HTML.style.display = "none"
                        game_loadingScreen.style.display = "inline-block"
                        game_loadingScreen__loadingBox___loadingBar.style.animation = "loadingIntoGameBarFill 27s forwards"
                    }, 2000)
                    //changes the HTML to nation of the current player 
                    setTimeout(function() {
                        music.loading.main.pause()
                        document.body.style.animation = "fadeGameState 4s forwards"
                    }, 5000)
                    setTimeout(function() {
                        music.loading.main.pause()
                        document.body.style.animation = "fadeGameState 4s forwards"
                        setTimeout(function() {
                            let state = "game"
                            socket.emit("changeState", state, sessionIndex)
                            enter_Game_STATE()
                            music.game.beginning.loop = true
                            music.game.beginning.volume = 0.5
                            music.game.beginning.play()
                        }, 2000)
                    }, 5000)
                } else {
                    console.log("all players must ready up!")
                }
            }
        }
    } else {
        lobbyScreen_menu__findMatch.onclick = function() {
            sessionStatus_info.innerHTML = "(" + sessionList.length + ") matches in session."
            clicks.average.play()
		}
        actaulSessions.innerHTML = ''
        for(let i = 0; i < sessionList.length; i++) {
            actaulSessions.innerHTML += '<button id="' + (i + 1).toString() + '" class="matchLabel"> Host: <div style="font-weight: bold; display: inline-block;">' + sessionList[i].creator.username + '</div> | Players: <div style="font-weight: bold; display: inline-block;">' + sessionList[i].players.length + '/' + sessionList[i].playerCountMax + '</div> | Map: <div style="font-weight: bold; display: inline-block;">' + sessionList[i].map + '</div></button><br>'
            document.getElementById(i + 1).addEventListener("click", function() {
                if(sessionList[i].players.length < sessionList[i].playerCountMax) {
                    socket.emit('joinSession', i)
                    screenRender = 'inSession'
                    sessionIndex = i
                } else {
                    sessionStatus_info.innerHTML = "&#9888 Match is full. All must ready up to begin game."
                }
            })
        }
    }
})

socket.on('addToChat', function(data) {
    chat_box.innerHTML += '<div>' + data + '</div>'
})

socket.on('evalAnswer', function(data) {
    console.log(data)
})
chat_form.onsubmit = function(e) {
    e.preventDefault()
    if(chat_input.value[0] === '/') {
        socket.emit('evalServer', chat_input.value.slice(1))
    } else {
        socket.emit('sendMsgToServer', chat_input.value)
        chat_input.value = ''
    }
    clicks.MSG.play()
}

chat_input__send.onclick = function() {
    if(chat_input.value[0] === '/') {
        socket.emit('evalServer', chat_input.value.slice(1))
    } else {
        socket.emit('sendMsgToServer', chat_input.value)
        chat_input.value = ''
    }
    clicks.MSG.play()
}


function enter_Lobby() {
    console.log(clientProfileIcon)
    lobbyScreen_playerBox__playerIcon___icon.style.backgroundImage = clientProfileIcon
    lobbyScreen_playerBox__playerInfo___name.innerHTML = "☆ " + clientUsername
    login_HTML.style.display = "none"
    lobbyScreen_HTML.style.display = "inline-block"
}

function enter_Game_STATE() {
    document.getElementById('game-loadingScreen--nationBox---leftIMG').style.backgroundImage = "url(/client/img/interfaces/loadingBG_left.png)"
    document.getElementById('game-loadingScreen--nationBox---infoBox----nationName').innerHTML = "Age of Exploration"
    document.getElementById('game-loadingScreen--nationBox---infoBox----nationInfo').innerHTML = "The Age of Discovery or Age of Exploration was a period from the early 15th century that continued into the early 17th century, during which European ships traveled around the world to search for new trading routes and partners. They were in search of trading goods such as gold, silver and spices."
    document.getElementById('gameState').style.display = "inline-block"
}
document.getElementById('game-loadingScreen').addEventListener("contextmenu", function(e) {
    e.preventDefault()
    document.getElementById('game-loadingScreen').style.display = "none"
})
lobbyScreen_menu__campaign.onmouseover = function() {
    lobbyScreen_menu__info.innerHTML = '<div style="color: white;"><div style="color: grey">Single Player</div>You can play as Napoleon conquering Europe, the Spanish conquering the Americas, the British settling colonial unrest in the 13 Colonies and India, or the Dutch building the greatest trading empire!<div style="color:turquoise;">Reputation Points +4 (for every campaign completed)</div></div>'
}
lobbyScreen_menu__findMatch.onmouseover = function() {
    lobbyScreen_menu__info.innerHTML = '<div style="color: white;"><div style="color: grey">Multiplayer</div>Play against fellow tacticians online as you rank up to be the best tactition the colonial world has ever known! The maps in these matches are not historical.<div style="color:turquoise;">Reputation Points +3 (for every match won)</div></div>'
}
lobbyScreen_menu__tournaments.onmouseover = function() {
    lobbyScreen_menu__info.innerHTML = '<div style="color: white;"><div style="color: grey">Multiplayer</div>Win a series of challenges in multiplayer matches. New tournaments created weekly.<div style="color:gold;">First place</div><div style="color:turquoise;">Reputation Points +27</div><div style="color:gold;">Second place</div><div style="color:turquoise;">Reputation Points +14</div><div style="color:gold;">Third place</div><div style="color:turquoise;">Reputation Points +9</div></div>'
}
lobbyScreen_menu__alliances.onmouseover = function() {
    lobbyScreen_menu__info.innerHTML = '<div style="color: white;"><div style="color: grey">Multiplayer</div>Ally with other players to create a powerful and united force that no one can stop!</div>'
}