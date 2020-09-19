var music = {
    lobby: {
        main: new Audio ("/client/sound/music/chooseCiv.mp3")
    },
    loading: {
        main: new Audio ("/client/sound/music/ageOfExplorationMusic.mp3")
    },
    game: {
        beginning: new Audio ("/client/sound/music/bg1.mp3")
    },
}

var clicks = {
    light: new Audio ("/client/sound/buttons/lightClick.mp3"),
    average: new Audio ("/client/sound/buttons/averageClick.mp3"),
    heavy: new Audio (""),
    MSG: new Audio ("/client/sound/buttons/sendMSG.mp3"),
    hover: {
        fast: new Audio ("/client/sound/hover/hover1.mp3"),
        mid: new Audio ("/client/sound/hover/hover2.mp3"),
        slow: new Audio ("/client/sound/hover/hover3.mp3"),
    },
    colony: {
        city: new Audio ("/client/sound/colony/city_ENV.mp3"),
    },
}
var nationIntros = {
    "england": new Audio ("/client/sound/VO/england/desc/gameLoad.mp3"),
    "france": new Audio ("/client/sound/VO/france/desc/gameLoad.mp3"),
    "spain": new Audio ("/client/sound/VO/spain/desc/gameLoad.mp3"),
    "prussia": new Audio ("/client/sound/VO/prussia/desc/gameLoad.mp3"),
    "dutch": "",
    "portugal": "",
    "russia": "",
    "ottoman": "",
}
var nationDesc = {
    "england": "When King James VI of Scotland had become King James I of England after the death of Queen Elizabeth, the island had finally united as one kingdom. While not yet a Great Britain, your conquest and colonizations of these new territories will make you the nation the entire world envies. God save the King and Queen!",
    "france": "Since Charlamagne, you have been a nation centered in the crossroads of Europe. Your nation has flourished as being part of the Hapsburg family and has good relations with the other Hapsburg nations. While being one of the great powers, your rule is always challenged by the people within. With more territory to gain, there is nothing stopping you from becoming the most powerful ruler on this mortal world.",
    "spain": "Once Castille and Aragon, the royal marriage of King Ferdinand and Queen Isabella led to the bonding of the two kingdoms. Ever since then, you have been the first to go out and discover the New World. This benefit is sufficient to the pride of your new Hapsburg dynasty and the stability of the world. Glory to the Conquerers!",
    "prussia": "Once the infamous and legendary Teutonic Order, you will rise up again to be the biggest military power in central Europe. Despite the small size of your lands, you will show every power how fierce you are. Lead the way my valiant General!",
    "dutch": "",
    "portugal": "",
    "russia": "",
    "ottoman": "",
}