require('./database')
const express = require('express')
const app = express()
const serv = require('http').Server(app)
const port = process.env.PORT || 3000
const serverMSG = '[server] '
var io = require('socket.io') (serv,{})

// ********* Server Init *********
app.get('/', function(req, res) {

    res.sendFile(__dirname + '/client/main.html')
})
app.use('/client', express.static(__dirname + '/client'))

serv.listen(port)
console.clear()
console.log('Colonial Warfare server => initialized!')
console.log('CWserver HostPort: ' + port)

// ********* Server Data *********
var serverInfo = {
    currentPlayers: {
        online: 0,
        inGame: 0,
    },
    signedUpPlayers: 0,
    serverMax: 128,
}

// ********* Player Creation *********
var Entity = function() {
    var self = {
        id: "",
    }
    return self
}

var playerData = function(param) {
    var self = Entity(param)
        self.number = "" + Math.floor(4 * Math.random())
        self.username = param.username
        self.icon = param.icon
        self.nation = param.nation
    return self
}

// ********* List Types *********
var sessionList = []
var SOCKET_LIST = {}
playerData.list = {}


//connection
playerData.onConnect = function(socket, username, nation, repPoints) {
    var player = playerData({
        turnMSG: "",
        coloniesOwned: [],
        state: "lobby",
        repPoints: repPoints, //player's reputation points
        icon: "url(/client/img/interfaces/playerIcons/Anim/mus_gotAnim.gif)", //player's icon
        username: username, //player's username
        id:socket.id, //id of player's connection
        readyMSG: "<div style='color: white;'>Not ready</div>", //ready message displayed in current session
        nation: nation, //player's nation
        turn: 0, //0 is the player is waiting to have their turn, 1 is player's turn in progress, 2 is player's turn over
        turnCount: 1,
        goldCur: 0,
        goldInc: 0,
        timberCur: 0,
        timberInc: 0,
        ironCur: 0,
        ironInc: 0,
        ranged: "footmen",
        melee: "pikemen",
        artillery: "bombard",
        defenders: "militia",
        seafaring: "galleon",
        revolution: false,
        government: undefined,
        diplomacy: "Neutral",
        influence: "Low",
        colonyHover: "",
        allies: [],
        neutrals: [],
        enemies: [],
    })
    var cityDirs = ["_n", "_s", "_e", "_w"]
    var englandCol = ["Sacher","Ataszek"]
    var franceCol = ["Varvodia","Ormatvaria"]
    var prussiaCol = ["Sasbach","Enparadia"]
    var russiaCol = ["Szentia","Adyoujdia"]
    var dutchCol = ["Wigia","Ayburt"]
    var portugalCol = ["Wiland","Nenichia"]
    var spainCol = ["Luruvojia","Bascia"]
    var ottomanCol = ["Arnieria","Kouni"]
    var englandColonies = englandCol[Math.floor(Math.random()*englandCol.length)];
    var franceColonies = franceCol[Math.floor(Math.random()*franceCol.length)];
    var prussiaColonies = prussiaCol[Math.floor(Math.random()*prussiaCol.length)];
    var russiaColonies = russiaCol[Math.floor(Math.random()*russiaCol.length)];
    var dutchColonies = dutchCol[Math.floor(Math.random()*dutchCol.length)];
    var portugalColonies = portugalCol[Math.floor(Math.random()*portugalCol.length)];
    var spainColonies = spainCol[Math.floor(Math.random()*spainCol.length)];
    var ottomanColonies = ottomanCol[Math.floor(Math.random()*ottomanCol.length)];


    socket.on('createSession', function() {
        function  testSession() {
            console.log(sessionList)
            for(let i = 0; i < sessionList.length; i++) {
                if(sessionList[i].creator.id === socket.id) {
                    console.log(socket.id)
                    return
                }
            }
            sessionList.push({
                creator: player, //creator of current session
                playerCountMax: 4, //max players in a session
                playerMSGname: player.username, //player message name
                players: [player], //list of players
                map: "enetivia", //game map
                playersReady: 0, //players that are ready 
                year: 1600, // year in current session
                turns: 0, //turn index
                campaignTurnCount: 1,
                currentWars: "None",
                state: "lobby",
                armies: {},
                "Wiland": {
                    owner: "natives",
                    colonyLevel: "Village",
                    population: 0,
                    defense: 0,
                    positions: {
                        city: {
                            x: 250,
                            y: 570,
                            siege: {
                                x: 0,
                                y: 0,
                            },
                            defense: {
                                x: 0,
                                y: 0, 
                            },
                        },
                        dock: {
                            x: 260,
                            y: 710,
                        },
                        move: {
                            x: 2224,
                            y: 293,
                        },
                    },
                    img: {
                        city: "url(/client/img/buildings/village" + cityDirs[Math.floor(Math.random()*cityDirs.length)] + ".png)",
                        dock: "url(/client/img/buildings/dock.png)",
                        banner: "url(/client/img/interfaces/flags/banners/nativeBanner.png)",
                    },
                    reserves: {
                        "ranged": 0,
                        "melee": 0,
                        "artillery": 0,
                    },
                    armyNum: 0,
                    suffix: "ian",
                },
                "Nenichia": {
                    owner: "natives",
                    colonyLevel: "Village",
                    population: 0,
                    defense: 0,
                    positions: {
                        city: {
                            x: 250,
                            y: 570,
                            siege: {
                                x: 0,
                                y: 0,
                            },
                            defense: {
                                x: 0,
                                y: 0, 
                            },
                        },
                        dock: {
                            x: 260,
                            y: 710,
                        },
                        move: {
                            x: 894,
                            y: 960,
                        },
                    },
                    img: {
                        city: "url(/client/img/buildings/village" + cityDirs[Math.floor(Math.random()*cityDirs.length)] + ".png)",
                        dock: "url(/client/img/buildings/dock.png)",
                        banner: "url(/client/img/interfaces/flags/banners/nativeBanner.png)",
                    },
                    reserves: {
                        "ranged": 0,
                        "melee": 0,
                        "artillery": 0,
                    },
                    armyNum: 0,
                    suffix: "n",
                },
                "Gond": {
                    owner: "natives",
                    colonyLevel: "Village",
                    population: 0,
                    defense: 0,
                    positions: {
                        city: {
                            x: 250,
                            y: 570,
                            siege: {
                                x: 0,
                                y: 0,
                            },
                            defense: {
                                x: 0,
                                y: 0, 
                            },
                        },
                        dock: {
                            x: 260,
                            y: 710,
                        },
                        move: {
                            x: 815,
                            y: 2030,
                        },
                    },
                    img: {
                        city: "url(/client/img/buildings/village" + cityDirs[Math.floor(Math.random()*cityDirs.length)] + ".png)",
                        dock: "url(/client/img/buildings/dock.png)",
                        banner: "url(/client/img/interfaces/flags/banners/nativeBanner.png)",
                    },
                    reserves: {
                        "ranged": 0,
                        "melee": 0,
                        "artillery": 0,
                    },
                    armyNum: 0,
                    suffix: "ian",
                },
                "Szentia": {
                    owner: "natives",
                    colonyLevel: "Village",
                    population: 0,
                    defense: 0,
                    positions: {
                        city: {
                            x: 250,
                            y: 570,
                            siege: {
                                x: 0,
                                y: 0,
                            },
                            defense: {
                                x: 0,
                                y: 0, 
                            },
                        },
                        dock: {
                            x: 260,
                            y: 710,
                        },
                        move: {
                            x: 792,
                            y: 1182,
                        },
                    },
                    img: {
                        city: "url(/client/img/buildings/village" + cityDirs[Math.floor(Math.random()*cityDirs.length)] + ".png)",
                        dock: "url(/client/img/buildings/dock.png)",
                        banner: "url(/client/img/interfaces/flags/banners/nativeBanner.png)",
                    },
                    reserves: {
                        "ranged": 0,
                        "melee": 0,
                        "artillery": 0,
                    },
                    armyNum: 0,
                    suffix: "n",
                },
                "Bascia": {
                    owner: "natives",
                    colonyLevel: "Village",
                    population: 0,
                    defense: 0,
                    positions: {
                        city: {
                            x: 250,
                            y: 570,
                            siege: {
                                x: 0,
                                y: 0,
                            },
                            defense: {
                                x: 0,
                                y: 0, 
                            },
                        },
                        dock: {
                            x: 260,
                            y: 710,
                        },
                        move: {
                            x: 406,
                            y: 1280,
                        },
                    },
                    img: {
                        city: "url(/client/img/buildings/village" + cityDirs[Math.floor(Math.random()*cityDirs.length)] + ".png)",
                        dock: "url(/client/img/buildings/dock.png)",
                        banner: "url(/client/img/interfaces/flags/banners/nativeBanner.png)",
                    },
                    reserves: {
                        "ranged": 0,
                        "melee": 0,
                        "artillery": 0,
                    },
                    armyNum: 0,
                    suffix: "n",
                },
                "Luruvojia": {
                    owner: "natives",
                    colonyLevel: "Village",
                    population: 0,
                    defense: 0,
                    positions: {
                        city: {
                            x: 250,
                            y: 570,
                            siege: {
                                x: 0,
                                y: 0,
                            },
                            defense: {
                                x: 0,
                                y: 0, 
                            },
                        },
                        dock: {
                            x: 260,
                            y: 710,
                        },
                        move: {
                            x: 2886,
                            y: 1022,
                        },
                    },
                    img: {
                        city: "url(/client/img/buildings/village" + cityDirs[Math.floor(Math.random()*cityDirs.length)] + ".png)",
                        dock: "url(/client/img/buildings/dock.png)",
                        banner: "url(/client/img/interfaces/flags/banners/nativeBanner.png)",
                    },
                    reserves: {
                        "ranged": 0,
                        "melee": 0,
                        "artillery": 0,
                    },
                    armyNum: 0,
                    suffix: "n",
                },
                "Ayburt": {
                    owner: "natives",
                    colonyLevel: "Village",
                    population: 0,
                    defense: 0,
                    positions: {
                        city: {
                            x: 250,
                            y: 570,
                            siege: {
                                x: 0,
                                y: 0,
                            },
                            defense: {
                                x: 0,
                                y: 0, 
                            },
                        },
                        dock: {
                            x: 260,
                            y: 710,
                        },
                        move: {
                            x: 3228,
                            y: 494,
                        },
                    },
                    img: {
                        city: "url(/client/img/buildings/village" + cityDirs[Math.floor(Math.random()*cityDirs.length)] + ".png)",
                        dock: "url(/client/img/buildings/dock.png)",
                        banner: "url(/client/img/interfaces/flags/banners/nativeBanner.png)",
                    },
                    reserves: {
                        "ranged": 0,
                        "melee": 0,
                        "artillery": 0,
                    },
                    armyNum: 0,
                    suffix: "ian",
                },
                "Adyoujdia": {
                    owner: "natives",
                    colonyLevel: "Village",
                    population: 0,
                    defense: 0,
                    positions: {
                        city: {
                            x: 250,
                            y: 570,
                            siege: {
                                x: 0,
                                y: 0,
                            },
                            defense: {
                                x: 0,
                                y: 0, 
                            },
                        },
                        dock: {
                            x: 260,
                            y: 710,
                        },
                        move: {
                            x: 1366,
                            y: 1623,
                        },
                    },
                    img: {
                        city: "url(/client/img/buildings/village" + cityDirs[Math.floor(Math.random()*cityDirs.length)] + ".png)",
                        dock: "url(/client/img/buildings/dock.png)",
                        banner: "url(/client/img/interfaces/flags/banners/nativeBanner.png)",
                    },
                    reserves: {
                        "ranged": 0,
                        "melee": 0,
                        "artillery": 0,
                    },
                    armyNum: 0,
                    suffix: "n",
                },
                "Enparadia": {
                    owner: "natives",
                    colonyLevel: "Village",
                    population: 0,
                    defense: 0,
                    positions: {
                        city: {
                            x: 250,
                            y: 570,
                            siege: {
                                x: 0,
                                y: 0,
                            },
                            defense: {
                                x: 0,
                                y: 0, 
                            },
                        },
                        dock: {
                            x: 260,
                            y: 710,
                        },
                        move: {
                            x: 1106,
                            y: 1185,
                        },
                    },
                    img: {
                        city: "url(/client/img/buildings/village" + cityDirs[Math.floor(Math.random()*cityDirs.length)] + ".png)",
                        dock: "url(/client/img/buildings/dock.png)",
                        banner: "url(/client/img/interfaces/flags/banners/nativeBanner.png)",
                    },
                    reserves: {
                        "ranged": 0,
                        "melee": 0,
                        "artillery": 0,
                    },
                    armyNum: 0,
                    suffix: "n",
                },
                "Sasbach": {
                    owner: "natives",
                    colonyLevel: "Village",
                    population: 0,
                    defense: 0,
                    positions: {
                        city: {
                            x: 250,
                            y: 570,
                            siege: {
                                x: 0,
                                y: 0,
                            },
                            defense: {
                                x: 0,
                                y: 0, 
                            },
                        },
                        dock: {
                            x: 260,
                            y: 710,
                        },
                        move: {
                            x: 1420,
                            y: 497,
                        },
                    },
                    img: {
                        city: "url(/client/img/buildings/village" + cityDirs[Math.floor(Math.random()*cityDirs.length)] + ".png)",
                        dock: "url(/client/img/buildings/dock.png)",
                        banner: "url(/client/img/interfaces/flags/banners/nativeBanner.png)",
                    },
                    reserves: {
                        "ranged": 0,
                        "melee": 0,
                        "artillery": 0,
                    },
                    armyNum: 0,
                    suffix: "ian",
                },
                "Feldia": {
                    owner: "natives",
                    colonyLevel: "Village",
                    population: 0,
                    defense: 0,
                    positions: {
                        city: {
                            x: 250,
                            y: 570,
                            siege: {
                                x: 0,
                                y: 0,
                            },
                            defense: {
                                x: 0,
                                y: 0, 
                            },
                        },
                        dock: {
                            x: 260,
                            y: 710,
                        },
                        move: {
                            x: 1926,
                            y: 672,
                        },
                    },
                    img: {
                        city: "url(/client/img/buildings/village" + cityDirs[Math.floor(Math.random()*cityDirs.length)] + ".png)",
                        dock: "url(/client/img/buildings/dock.png)",
                        banner: "url(/client/img/interfaces/flags/banners/nativeBanner.png)",
                    },
                    reserves: {
                        "ranged": 0,
                        "melee": 0,
                        "artillery": 0,
                    },
                    armyNum: 0,
                    suffix: "n",
                },
                "Ataszek": {
                    owner: "natives",
                    colonyLevel: "Village",
                    population: 0,
                    defense: 0,
                    positions: {
                        city: {
                            x: 250,
                            y: 570,
                            siege: {
                                x: 0,
                                y: 0,
                            },
                            defense: {
                                x: 0,
                                y: 0, 
                            },
                        },
                        dock: {
                            x: 260,
                            y: 710,
                        },
                        move: {
                            x: 2097,
                            y: 1812,
                        },
                    },
                    img: {
                        city: "url(/client/img/buildings/village" + cityDirs[Math.floor(Math.random()*cityDirs.length)] + ".png)",
                        dock: "url(/client/img/buildings/dock.png)",
                        banner: "url(/client/img/interfaces/flags/banners/nativeBanner.png)",
                    },
                    reserves: {
                        "ranged": 0,
                        "melee": 0,
                        "artillery": 0,
                    },
                    armyNum: 0,
                    suffix: "ian",
                },
                "Momonykia": {
                    owner: "natives",
                    colonyLevel: "Village",
                    population: 0,
                    defense: 0,
                    positions: {
                        city: {
                            x: 250,
                            y: 570,
                            siege: {
                                x: 0,
                                y: 0,
                            },
                            defense: {
                                x: 0,
                                y: 0, 
                            },
                        },
                        dock: {
                            x: 260,
                            y: 710,
                        },
                        move: {
                            x: 2257,
                            y: 1181,
                        },
                    },
                    img: {
                        city: "url(/client/img/buildings/village" + cityDirs[Math.floor(Math.random()*cityDirs.length)] + ".png)",
                        dock: "url(/client/img/buildings/dock.png)",
                        banner: "url(/client/img/interfaces/flags/banners/nativeBanner.png)",
                    },
                    reserves: {
                        "ranged": 0,
                        "melee": 0,
                        "artillery": 0,
                    },
                    armyNum: 0,
                    suffix: "n",
                },
                "Arnieria": {
                    owner: "natives",
                    colonyLevel: "Village",
                    population: 0,
                    defense: 0,
                    positions: {
                        city: {
                            x: 250,
                            y: 570,
                            siege: {
                                x: 0,
                                y: 0,
                            },
                            defense: {
                                x: 0,
                                y: 0, 
                            },
                        },
                        dock: {
                            x: 260,
                            y: 710,
                        },
                        move: {
                            x: 1044,
                            y: 504,
                        },
                    },
                    img: {
                        city: "url(/client/img/buildings/village" + cityDirs[Math.floor(Math.random()*cityDirs.length)] + ".png)",
                        dock: "url(/client/img/buildings/dock.png)",
                        banner: "url(/client/img/interfaces/flags/banners/nativeBanner.png)",
                    },
                    reserves: {
                        "ranged": 0,
                        "melee": 0,
                        "artillery": 0,
                    },
                    armyNum: 0,
                    suffix: "n",
                },
                "Sacher": {
                    owner: "natives",
                    colonyLevel: "Village",
                    population: 0,
                    defense: 0,
                    positions: {
                        city: {
                            x: 250,
                            y: 570,
                            siege: {
                                x: 0,
                                y: 0,
                            },
                            defense: {
                                x: 0,
                                y: 0, 
                            },
                        },
                        dock: {
                            x: 260,
                            y: 710,
                        },
                        move: {
                            x: 2023,
                            y: 269,
                        },
                    },
                    img: {
                        city: "url(/client/img/buildings/village" + cityDirs[Math.floor(Math.random()*cityDirs.length)] + ".png)",
                        dock: "url(/client/img/buildings/dock.png)",
                        banner: "url(/client/img/interfaces/flags/banners/nativeBanner.png)",
                    },
                    reserves: {
                        "ranged": 0,
                        "melee": 0,
                        "artillery": 0,
                    },
                    armyNum: 0,
                    suffix: "ian",
                },
                "Varvodia": {
                    owner: "natives",
                    colonyLevel: "Village",
                    population: 0,
                    defense: 0,
                    positions: {
                        city: {
                            x: 250,
                            y: 570,
                            siege: {
                                x: 0,
                                y: 0,
                            },
                            defense: {
                                x: 0,
                                y: 0, 
                            },
                        },
                        dock: {
                            x: 260,
                            y: 710,
                        },
                        move: {
                            x: 314,
                            y: 538,
                        },
                    },
                    img: {
                        city: "url(/client/img/buildings/village" + cityDirs[Math.floor(Math.random()*cityDirs.length)] + ".png)",
                        dock: "url(/client/img/buildings/dock.png)",
                        banner: "url(/client/img/interfaces/flags/banners/nativeBanner.png)",
                    },
                    reserves: {
                        "ranged": 0,
                        "melee": 0,
                        "artillery": 0,
                    },
                    armyNum: 0,
                    suffix: "n",
                },
                "Ormatvaria": {
                    owner: "natives",
                    colonyLevel: "Village",
                    population: 0,
                    defense: 0,
                    positions: {
                        city: {
                            x: 250,
                            y: 570,
                            siege: {
                                x: 0,
                                y: 0,
                            },
                            defense: {
                                x: 0,
                                y: 0, 
                            },
                        },
                        dock: {
                            x: 260,
                            y: 710,
                        },
                        move: {
                            x: 2397,
                            y: 1761,
                        },
                    },
                    img: {
                        city: "url(/client/img/buildings/village" + cityDirs[Math.floor(Math.random()*cityDirs.length)] + ".png)",
                        dock: "url(/client/img/buildings/dock.png)",
                        banner: "url(/client/img/interfaces/flags/banners/nativeBanner.png)",
                    },
                    reserves: {
                        "ranged": 0,
                        "melee": 0,
                        "artillery": 0,
                    },
                    armyNum: 0,
                    suffix: "n",
                },
                "Kouni": {
                    owner: "natives",
                    colonyLevel: "Village",
                    population: 0,
                    defense: 0,
                    positions: {
                        city: {
                            x: 250,
                            y: 570,
                            siege: {
                                x: 0,
                                y: 0,
                            },
                            defense: {
                                x: 0,
                                y: 0, 
                            },
                        },
                        dock: {
                            x: 260,
                            y: 710,
                        },
                        move: {
                            x: 2488,
                            y: 1243,
                        },
                    },
                    img: {
                        city: "url(/client/img/buildings/village" + cityDirs[Math.floor(Math.random()*cityDirs.length)] + ".png)",
                        dock: "url(/client/img/buildings/dock.png)",
                        banner: "url(/client/img/interfaces/flags/banners/nativeBanner.png)",
                    },
                    reserves: {
                        "ranged": 0,
                        "melee": 0,
                        "artillery": 0,
                    },
                    armyNum: 0,
                    suffix: "an",
                },
                "Wigia": {
                    owner: "natives",
                    colonyLevel: "Village",
                    population: 0,
                    defense: 0,
                    positions: {
                        city: {
                            x: 250,
                            y: 570,
                            siege: {
                                x: 0,
                                y: 0,
                            },
                            defense: {
                                x: 0,
                                y: 0, 
                            },
                        },
                        dock: {
                            x: 260,
                            y: 710,
                        },
                        move: {
                            x: 1314,
                            y: 358,
                        },
                    },
                    img: {
                        city: "url(/client/img/buildings/village" + cityDirs[Math.floor(Math.random()*cityDirs.length)] + ".png)",
                        dock: "url(/client/img/buildings/dock.png)",
                        banner: "url(/client/img/interfaces/flags/banners/nativeBanner.png)",
                    },
                    reserves: {
                        "ranged": 0,
                        "melee": 0,
                        "artillery": 0,
                    },
                    armyNum: 0,
                    suffix: "n",
                },
             })
             sessionList[sessionList.length - 1].creator.id = socket.id
             socket.broadcast.emit('clientSessionListUpdate', sessionList)
        }
        testSession()
    })
    socket.on('requestSessionUpdate', function() {
        socket.emit('clientSessionListUpdate', sessionList)
    })
    socket.on('turnPush', function(index) {
        for(let i = 0; i < sessionList[index].players.length; i++) { 
            if(sessionList[index].players[i].username === player.username) {
                sessionList[index].turns++
                console.log(sessionList[index].turns)
                if(sessionList[index].turns > sessionList[index].players.length - 1) {
                    sessionList[index].turns = 0
                    sessionList[index].year++
                    sessionList[index].campaignTurnCount++
                }
            }
        }
        socket.emit('sessionInput', sessionList)
        socket.broadcast.emit('clientSessionListUpdate', sessionList)
    })
    socket.on('joinSession', function(data) {
        if(sessionList[data].players.length < sessionList[data].playerCountMax && sessionList[data].creator != player) {
            let checker = false
            for(let i = 0; i < sessionList[data].players.length; i++) {
                if(sessionList[data].players[i].username === player.username) {
                    checker = true
                }
            }
            if(!checker) {
                sessionList[data].players.push(player)
            }
        }
        socket.broadcast.emit('clientSessionListUpdate', sessionList)
    })
    socket.on('addDefendersToColony', function(num, curCol, index) {
        let curSession = sessionList[index]
        for(let i = 0; i < sessionList[index].players.length; i++) {
            if(sessionList[index].players[i].username === player.username) {
                curSession[curCol].defense += num
                let defenseNum = curSession[curCol].defense
                socket.emit('updateDefense', defenseNum, curCol, sessionList)
                socket.broadcast.emit('clientSessionListUpdate', sessionList)
            }
        }
    })
    socket.on('selectNation', function(nation, index) {
        for(let i = 0; i < sessionList[index].players.length; i++) {
            if(sessionList[index].players[i].username === player.username) {
                sessionList[index].players[i].nation = nation
                socket.emit('getNation', nation)
                socket.broadcast.emit('clientSessionListUpdate', sessionList)
            }
        }
    })
    socket.on('rallyUnit', function(gold, wood, iron, index) {
        for(let i = 0; i < sessionList[index].players.length; i++) {
            if(sessionList[index].players[i].username === player.username) {
                sessionList[index].players[i].goldCur -= gold
                sessionList[index].players[i].timberCur -= wood
                sessionList[index].players[i].ironCur -= iron
                socket.broadcast.emit('clientSessionListUpdate', sessionList)
            }
        }
    })
    // socket.on('addColony', function(colony, index) {
    //     for(let i = 0; i < sessionList[index].players.length; i++) {
    //         if(sessionList[index].players[i].username === player.username) {
    //             sessionList[index].players[i].coloniesOwned.push(colony)
    //             socket.broadcast.emit('clientSessionListUpdate', sessionList)
    //         }
    //     }
    // })
    socket.on('createArmy', function(armyName, colony, nation, generalName, index) {
        for(let i = 0; i < sessionList[index].players.length; i++) {
            let curSession = sessionList[index]
            if(sessionList[index].players[i].username === player.username) {
                curSession[colony].armyNum++
                let armyLabel = "st"
                if(curSession[colony].armyNum === 1) {
                    armyLabel = "st"
                }
                if(curSession[colony].armyNum === 2) {
                    armyLabel = "nd"
                }
                if(curSession[colony].armyNum === 3) {
                    armyLabel = "rd"
                }
                if(curSession[colony].armyNum >= 4) {
                    armyLabel = "th"
                }
                sessionList[index].armies[armyName] = {
                    general: {
                        name: generalName,
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
                        colony: colony,
                        x: 0,
                        y: 0,
                    },
                    default: "Empty",
                    owner: nation,
                    regiment: curSession[colony].armyNum + armyLabel + " " + colony + curSession[colony].suffix,
                    pose: "url(/client/img/units/musk/muskAnim_idle.gif)"
                }
            }
        }
        socket.broadcast.emit('addArmyToMap', armyName, colony, nation, generalName, sessionList)
        socket.broadcast.emit('clientSessionListUpdate', sessionList)
    })
    socket.on('changeIcon', function(icon, index) {
        for(let i = 0; i < sessionList[index].players.length; i++) {
            if(sessionList[index].players[i].username === player.username) {
                sessionList[index].players[i].icon = icon
                socket.emit('getProfileIcon', icon)
                socket.broadcast.emit('clientSessionListUpdate', sessionList)
            }
        }
    })
    socket.on('changeMap', function(mapFile, index) {
        for(let i = 0; i < sessionList[index].players.length; i++) {
            sessionList[index].map = mapFile
            socket.broadcast.emit('clientSessionListUpdate', sessionList)
        }
    })
    socket.on('msgPush', function(message, index) {
        for(let i = 0; i < sessionList[index].players.length; i++) {
            if(sessionList[index].players[i].username === player.username) {
                sessionList[index].players[i].turnMSG = message
                socket.broadcast.emit('clientSessionListUpdate', sessionList)
            }
        }
    })
    socket.on('playerReadyUp', function(readyMSG, readyState, index) {
        for(let i = 0; i < sessionList[index].players.length; i++) {
            if(sessionList[index].players[i].username === player.username) {
                sessionList[index].playersReady++
                sessionList[index].players[i].readyMSG = readyMSG
                console.log(readyMSG)
                socket.broadcast.emit('clientSessionListUpdate', sessionList)
            }
        }
    })
    socket.on('changeState', function(state, index) {
        let curSession = sessionList[index]
        for(let i = 0; i < sessionList[index].players.length; i++) {
            curSession[englandColonies].owner = "england"
            curSession[franceColonies].owner = "france"
            curSession[spainColonies].owner = "spain"
            curSession[prussiaColonies].owner = "prussia"
            curSession[dutchColonies].owner = "dutch"
            curSession[portugalColonies].owner = "portugal"
            curSession[russiaColonies].owner = "russia"
            curSession[ottomanColonies].owner = "ottoman"
            sessionList[index].state = state
            socket.emit('sessionInput', sessionList)
            socket.broadcast.emit('clientSessionListUpdate', sessionList)
        }
    })
    socket.on('addArmy_SERVER', function(nation, armyNum, curCol, curUnit, index) {
        for(let i = 0; i < sessionList[index].players.length; i++) {
            socket.emit('addArmy_CLIENT', nation, armyNum, curCol, curUnit, sessionList)
            socket.broadcast.emit('clientSessionListUpdate', sessionList)
        }
    })
    socket.on('pushColony', function(colony, index) {
        for(let i = 0; i < sessionList[index].players.length; i++) {
            socket.emit('getColony', colony)
        }
    })
    socket.on('pushUnit', function(unit, index) {
        for(let i = 0; i < sessionList[index].players.length; i++) {
            socket.emit('getUnit', unit)
        }
    })
    socket.on('pushResources_init', function(gold, timber, iron, gInc, tInc, iInc, index) {
        for(let i = 0; i < sessionList[index].players.length; i++) {
            let curPlayer = sessionList[index].players[i]
            if(sessionList[index].players[i].username === player.username) {
                curPlayer.goldCur = gold
                curPlayer.goldInc = gInc
                curPlayer.timberCur = timber
                curPlayer.timberInc = tInc
                curPlayer.ironCur = iron
                curPlayer.ironInc = iInc
                socket.emit('setResources', gold, timber, iron, gInc, tInc, iInc)
            }
        }
    })
    socket.on('updateResources_SERVER', function(gold, timber, iron, index) {
        for(let i = 0; i < sessionList[index].players.length; i++) {
            let curPlayer = sessionList[index].players[i]
            if(sessionList[index].players[i].username === player.username) {
                curPlayer.goldCur = gold
                curPlayer.timberCur = timber
                curPlayer.ironCur = iron
            }
        }
    })
    socket.on('updateIncome_SERVER', function(gInc, tInc, iInc, index) {
        for(let i = 0; i < sessionList[index].players.length; i++) {
            let curPlayer = sessionList[index].players[i]
            if(sessionList[index].players[i].username === player.username) {
                curPlayer.goldInc = gInc
                curPlayer.timberInc = tInc
                curPlayer.ironInc = iInc
            }
        }
    })
    socket.on('pushUnits_init', function(index) {
        for(let i = 0; i < sessionList[index].players.length; i++) {
            let curPlayer = sessionList[index].players[i]
            if(sessionList[index].players[i].username === player.username) {
                socket.emit('getPlayerRanged', "footmen")
                socket.emit('getPlayerMelee', "pikemen")
                socket.emit('getPlayerArtillery', "bombard")
                socket.emit('getPlayerDefenders', "militia")
                socket.emit('getPlayerSeafaring', "galleon")
                console.log(curPlayer.ranged)
            }
        }
    })

    socket.emit('addColony', "boom")
    socket.emit('getRepPoints', player.repPoints)
    socket.emit('getProfileIcon', player.icon)
    socket.emit('getUsername', player.username)
    socket.emit('getOnlinePlayers', serverInfo.currentPlayers.online)
    serverInfo.currentPlayers.online++
    if(serverInfo.currentPlayers.online <= 0) {
        serverInfo.currentPlayers.online = 0
    }
    
    exports.playerName = player.username

    console.log(serverMSG + '(' + player.username + ')' + " has logged in!")
    console.log(serverMSG + "Current players (online): " + serverInfo.currentPlayers.online)
    

    socket.on('sendMsgToServer', function(data) {
        let adminChatCMD = '--admin'
        for(var i in SOCKET_LIST) {
            if(player.username != 'The Creator') {
                SOCKET_LIST[i].emit('addToChat', '[' + player.username + '] ' + data)
            }
            if(player.username == 'The Creator') {
                SOCKET_LIST[i].emit('addToChat', '<div style="color: yellow;">[' + player.username + '] ' + data)
            }
            if(data == (adminChatCMD + '[bigBrother]') && player.username == 'The Creator') {
                SOCKET_LIST[i].emit('addToChat', '<div style="color: turquoise;"><div style="font-weight:bold; display: inline-block;">[server]</div> The Creator wants you to know he is watching you all...</div>')
            }
        }
    })
}
playerData.onDisconnect = function(socket) {
    serverInfo.currentPlayers.online--
    if(serverInfo.currentPlayers.online <= 0) {
        serverInfo.currentPlayers.online = 0
    }
    console.log(serverMSG + "Current players (online): " + serverInfo.currentPlayers.online)
    delete playerData.list[socket.id]
}




io.sockets.on('connection', function(socket) {
    socket.id = Math.random()
    SOCKET_LIST[socket.id] = socket

    socket.on('disconnect', function() {
        delete SOCKET_LIST[socket.id]
        playerData.onDisconnect(socket)
    })
    socket.on('evalServer', function(data) {
        var res = eval(data)
        socket.emit('evalAnswer', res)
    })

    //log in functions
    socket.on('signIn', function(data) {
        Database.passwordValidCheck(data, function(res) {
            if(res) {
                playerData.onConnect(socket, data.username, data.icon)
                socket.emit('signInResponse', {success:true,})
            } else {
                socket.emit('signInResponse', {success:false})      
            }
        })
    })
    socket.on('signUp', function(data) {
        Database.usernameAvailabilityCheck(data, function(res) {
            if(res) {
                socket.emit('signUpResponse', {success:false})
            } else {
                Database.addUser(data, function() {
                    socket.emit('signUpResponse', {success:true}) 
                    serverInfo.signedUpPlayers++
                    console.log(serverMSG + "New player has signed up!")
                    console.log(serverMSG + "Current players (signed up): " + serverInfo.signedUpPlayers)
                })     
            }
        })
    })
})  




// if(serverInfo.currentPlayers < serverInfo.maxPlayers) {
//     console.log(serverMSG + 'Socket connection')
//     serverInfo.currentPlayers++
//     console.log(serverMSG + 'Current players on server => ' + serverInfo.currentPlayers)
//     }
//     if(serverInfo.currentPlayers == serverInfo.maxPlayers) {
//         console.log(serverMSG + 'Game ready to begin!')
//     }
//     // if(serverInfo.currentPlayers > serverInfo.maxPlayers) {
//     //     console.log('Max players reached! Wait for someone to disconnect or wait for match to be over to connect.')
//     // }

//     if(serverInfo.currentPlayers == 0) {
//         console.log(serverMSG + 'Server Empty')
//     }
//     socket.on('disconnect', (reason) => {
//         console.log(serverMSG + 'Client disconnected')
//         serverInfo.currentPlayers--
//         console.log(serverMSG + 'Current players on server => ' + serverInfo.currentPlayers)
//       });



