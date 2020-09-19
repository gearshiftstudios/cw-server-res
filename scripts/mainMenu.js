//really good sprites
//https://gfycat.com/stickers/search/indie+games

function launchFullScreen(element) {
  if(element.requestFullScreen) {
    element.requestFullScreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullScreen) {
    element.webkitRequestFullScreen();
  }
}

// Launch fullscreen for browsers that support it!

//musicVars
let homeNationMusic = new Audio(
  "./sound/music/homeNation.mp3"
);
let mainMenuMusic = new Audio(
  "./sound/music/mainMenu.mp3"
);
let chooseCivSound = new Audio(
  "./sound/chooseCiv.mp3"
);
let chooseCivMusic = new Audio(
  "./sound/music/chooseCiv.mp3"
);
let londonBGNoise = new Audio (
  "./sound/londonBGNoise.mp3"
);
let buttonClickAudio1 = new Audio (
  "./sound/buttonClick1.mp3"
);
let buttonClickAudio2 = new Audio (
  "./sound/buttonClick2.mp3"
);
let mainMenuClickAudio1 = new Audio (
  "./sound/mainMenuClash.mp3"
);

//mainVars
let mapCSS = "mapForEverything";
let prog = document;
let RULERTAB = "rulerTab"
let RULERICON = "rulerIcon";
let NATIONFLAG = "nationFlag"
let mapJS = prog.getElementById(mapCSS);
let flagJS = prog.getElementById(NATIONFLAG);
let rulerJS = prog.getElementById(RULERICON);
let scaleLevel = "scale(1)";
let mapOrigin = "50% 50%";
let NEWscaleLevel = "scale(1)";
let NEWmapOrigin = "50% 50%";
let NATIONSELECTION = "objectives";
let VIS = "visibility";
let visTrue = "visible";
let visFalse = "hidden";
let visNone = "none";
let rulerInfoJS = prog.getElementById("rulerInfo");
let NATIONINFO = "nationMenuInfo";
let HOMEMENU = "homeButtons";
let HOMENAME = "nationName";
let zoomScale = "scale(12)";
let londonOrigin = "20% 40%";
let parisOrigin = "22.5% 55%";
let amsterdamOrigin = "30% 44%";
let lisbonOrigin = "0% 72%";
let constantinopleOrigin = "70% 77%";
let madridOrigin = "10% 70%";
let animChooseNationFinalENG = "changeNationAndChooseFinalENG 4s forwards";
let animChooseNationFinalFRN = "changeNationAndChooseFinalFRN 4s forwards";
let animChooseNationFinalSPN = "changeNationAndChooseFinalSPN 4s forwards";;
let mapNormScaleLevel = "scale(1)";
let mapNormOrigin = "50% 50%";
let contentImportLoadData = "DOMContentLoaded";
let rulerTabJS = prog.getElementById(RULERTAB)
let nationInfoJS = prog.getElementById(NATIONINFO)
let nationSelectionJS = prog.getElementById(NATIONSELECTION)
let NORMSCALE = "scale(2)"
let NORMORIGIN = "50% 50%"
let NORMMAPSIZE = "40vh"
let civInfoJS = prog.getElementById("civInfo");
let CENTER = "center";
let CONTAIN = "contain";

//musicFunctions
function mainMenuPlayAuto(){
  mainMenuMusic.play();
  mainMenuMusic.loop = true;
  };

function homeNationMusicPlay() {
  homeNationMusic.play();
  homeNationMusic.loop = true;
};

function homeNationBGSoundPlay() {
  homeNationMusic.volume = 0.5;
  londonBGNoise.play();
  londonBGNoise.loop = true;
  londonBGNoise.volume = 1.5;
};

//mainFunctions
function audioManager() {
  mainMenuPlayAuto();
  prog.getElementById("audioManager").innerHTML = "🕪"
}
function fullscreenMainMenu() {
  buttonClickAudio2.play()
  launchFullScreen(document.documentElement);
}
function mainMenuClash(){
  mainMenuClickAudio1.play();
}
function enterGame() {
  launchFullScreen(document.documentElement);
  function removeElementMainMenu(mainMenu) {
    // Removes an element from the document
    var element = prog.getElementById("mainMenu");
    element.parentNode.removeChild(element);
  };
  mapJS.style.transform = NORMSCALE
  mapJS.style.transformOrigin = NORMSCALE
  mapJS.style.backgroundSize = NORMMAPSIZE
  function fadeIn() {
    prog.body.style.animation = "fadeInGame 3s forwards"
    removeElementMainMenu(mainMenu)
  }
  fadeIn()
  nationSelectionJS.style.setProperty(VIS, visTrue);
  nationInfoJS.style.setProperty(VIS, visTrue);
  rulerTabJS.style.setProperty(VIS, visTrue);
  mapJS.style.setProperty("animation", "zoom 1s");
  mapJS.style.setProperty(VIS, visTrue);
  prog.body.style.backgroundImage = "url(./img/mainMenuBG.jpg)"
  rulerJS.style.backgroundImage = "url(./img/unknownRuler.png)"
  rulerJS.style.backgroundSize = CONTAIN
  rulerJS.style.backgroundPosition = CENTER
  mainMenuMusic.pause();
  chooseCivMusic.play();
  chooseCivMusic.loop = true;
};

function changeCivBriton() {
  buttonClickAudio2.play()
  civInfoJS.innerHTML = 'Best known for there infantry numbers, the English have high Morale. Their best troops are Howitzer and Imperial Redcoat Musketeers. Your citizens though are very prone to revolt and rebellion.<br><button class"chooseCivButton" onclick="ENGChoose()">✔</button><button class"backToMenu" onclick="goBackToMenu()">✖</button>';
  rulerInfoJS.innerHTML = "King James I"
  rulerJS.style.backgroundImage = "url(./img/rulerEngland1.jpg)"
  rulerJS.style.backgroundSize = CONTAIN
  rulerJS.style.backgroundPosition = CENTER
  flagJS.style.backgroundImage = "url(./img/britishFlag.jpg)"
  flagJS.style.backgroundSize = CONTAIN
  flagJS.style.backgroundPosition = CENTER
  mapJS.style.transform = "scale(14)"
  mapJS.style.transformOrigin = "42.5vw 45vh"
};

function changeCivSpain() {
  buttonClickAudio2.play()
  civInfoJS.innerHTML = 'Your trading powers are the biggest in all the land. Your best units are the Castille Pikemen and Conquistador. But there is one problem, you start out with a very small amount of soldiers in your army.<br><button class"chooseCivButton" onclick="SPNChoose()">✔</button><button class"backToMenu" onclick="goBackToMenu()">✖</button>';
  rulerInfoJS.innerHTML = "King Phillip III"
  rulerJS.style.backgroundImage = "url(./img/rulerSpain1.jpg)"
  rulerJS.style.backgroundSize = CONTAIN
  rulerJS.style.backgroundPosition = CENTER
  flagJS.style.backgroundImage = "url(./img/spanishFlag.jpg)"
  flagJS.style.backgroundSize = CONTAIN
  flagJS.style.backgroundPosition = CENTER
  mapJS.style.transform = "scale(16)"
  mapJS.style.transformOrigin = "41.5% 55.25%"
};

function changeCivFrance() {
  buttonClickAudio2.play()
  civInfoJS.innerHTML = 'Your citizens are always loyal and will fight against your natural rival, the English, with massive enthusiasum. Your best units are the Cuirassier and Napoleonic Skirmishers. Your disadvantage is that you are very vulnerable in attacks due to your placement on the map.<br><button class"chooseCivButton" onclick="FRNChoose()">✔</button><button class"backToMenu" onclick="goBackToMenu()">✖</button>';
  rulerInfoJS.innerHTML = "King Henry IV"
  rulerJS.style.backgroundImage = "url(./img/rulerFrance1.jpg)"
  rulerJS.style.backgroundSize = CONTAIN
  rulerJS.style.backgroundPosition = CENTER
  flagJS.style.backgroundImage = "url(./img/frenchFlag.jpg)"
  flagJS.style.backgroundSize = CONTAIN
  flagJS.style.backgroundPosition = CENTER
  mapJS.style.transform = "scale(12)"
  mapJS.style.transformOrigin = "44% 51%"
};

function changeCivHolland() {
  buttonClickAudio2.play()
  civInfoJS.innerHTML = 'The Dutch are best known for their trade. You have a massive trade empire which allows you to get wealth faster. The best units you have are Halberdiers and the Fluyt Frigates. The main disadvantage you have is only having one Home City.<br><button class"chooseCivButton" onclick="DUTChoose()">✔</button><button class"backToMenu" onclick="goBackToMenu()">✖</button>';
  rulerInfoJS.innerHTML = "Maurice of Nassau"
  rulerJS.style.backgroundImage = "url(./img/rulerDutch2.jpg)"
  rulerJS.style.backgroundSize = CONTAIN
  rulerJS.style.backgroundPosition = CENTER
  flagJS.style.backgroundImage = "url(./img/dutchFlag.jpg)"
  flagJS.style.backgroundSize = CONTAIN
  flagJS.style.backgroundPosition = CENTER
  mapJS.style.transform = "scale(22)"
  mapJS.style.transformOrigin = "45.4% 48.25%"
};

function goBackToMenu() {
  buttonClickAudio2.play()
  rulerJS.style.backgroundImage = "url(./img/unknownRuler.png)"
  rulerJS.style.backgroundSize = CONTAIN
  rulerJS.style.backgroundPosition = CENTER
  flagJS.style.backgroundImage = "url(./img/noFlag.jpg)"
  flagJS.style.backgroundSize = CONTAIN
  flagJS.style.backgroundPosition = CENTER
  civInfoJS.innerHTML = "Click on civilization to see information about it";
  mapJS.style.transformOrigin = NORMORIGIN;
  mapJS.style.transform = NORMSCALE
  mapJS.style.backgroundSize = NORMMAPSIZE
  rulerInfoJS.innerHTML = "Click on civilization to see information about your nation's ruler."
};

function ENGChoose() {
  location.replace("./otherHTML/game.html")
  // setTimeout("homeNationMusicPlay()", 1000);
  launchFullScreen(document.documentElement);
};
function FRNChoose() {
  location.replace("./otherHTML/game.html")
  // setTimeout("homeNationMusicPlay()", 1000);
  launchFullScreen(document.documentElement);
};
function SPNChoose() {
  location.replace("./otherHTML/game.html")
  // setTimeout("homeNationMusicPlay()", 1000);
  launchFullScreen(document.documentElement);
};
function DUTChoose() {
  location.replace("./otherHTML/game.html")
  // setTimeout("homeNationMusicPlay()", 1000);
  launchFullScreen(document.documentElement);
};

function homeCityLondon(){
  prog.getElementById(HOMEMENU).style.setProperty(VIS, visFalse);
  mapJS.style.animation = "zoomHomeNationENG 4s forwards";
  setTimeout("homeNationBGSoundPlay()", 3000);
};

function mainMenuPlayAuto(){
mainMenuMusic.play();
mainMenuMusic.loop = true;
};

mainMenuPlayAuto();

// //mouseCursorIMG
// prog.addEventListener(contentImportLoadData, () => {
//   let mouse = prog.querySelector(".custome");
//   let click = prog.querySelector(".click");
//   mouse.style.display = visNone;
//   this.addEventListener("mousemove", e => {
//     mouse.style.display = "block";
//     // click.style.visibility="visible";
//     // console.log(e.clientX)
//     let X = e.clientX;
//     let Y = e.clientY;
//     let left = (mouse.style.left = X - 14 + "px");
//     let clickLeft = (click.style.left = X - 20 + "px");
//     let top = (mouse.style.top = Y - 5 + "px");
//     let clickTop = (click.style.top = Y - 10 + "px");

//     this.addEventListener("click", () => {
//       click.style.animation = "click 200ms";
//       click.style.visibility = visTrue;
//       setTimeout(() => {
//         click.style.animation = visNone;
//         click.style.visibility = visFalse;
//       }, 200);
//     });
//   });
//   this.addEventListener("mouseout", function(e) {
//     if (!e.relatedTarget) {
//       mouse.style.display = visNone;
//       // click.style.visibility ="hidden";
//     } else {
//       mouse.style.display = "block";
//       // click.style.visibility ="visible";
//     }
//   });
// });

//___________________get mouse input___________________

// let mouse = {
//   down: false,
//   x: 0,
//   y: 0
// };
// canvas.addEventListener("mousemove", event => {
//   mouse.x = event.clientX;
//   mouse.y = event.clientY;
// });
// canvas.addEventListener("mousedown", event => {
//   mouse.down = true;
//   // console.log(mouse);
// });
// canvas.addEventListener("mouseup", event => {
//   mouse.down = false;
// });

//___________________get keyboard input___________________
// ⇦73   ⇨39   ⇧38   ⇩40    W87   A65   S83   D68    spacebar 32
// const keys = [];
// document.onkeydown = event => {
// 	keys[event.keyCode] = true;
// 	console.log(event.keyCode);
// }
// document.onkeyup = event => {
// 	keys[event.keyCode] = false;
// }

//___________________animation loop ___________________

// function cycle(){
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   requestAnimationFrame(cycle);
// }
// requestAnimationFrame(cycle);

//ost
//https://downloads.khinsider.com/game-soundtracks/album/europa-universalis-iv

//map border
//https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8fd72e1d-460f-4c39-a141-2e1605d27b81/d5qh6ip-ff9a780b-ff0b-4c1b-a9d5-015c288923e0.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhmZDcyZTFkLTQ2MGYtNGMzOS1hMTQxLTJlMTYwNWQyN2I4MVwvZDVxaDZpcC1mZjlhNzgwYi1mZjBiLTRjMWItYTlkNS0wMTVjMjg4OTIzZTAuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.06TrYTyp8ZbRw1VzHJksZbN6FXR3DJkn9rwbHk9NZ2c

//transparent image creator
//https://onlinepngtools.com/create-transparent-png
//rgb code - rgb(98, 81, 54)
//to remove water ⮛⮛⮛

//town map
//https://www.google.com/search?q=isometric+village+roads+map&source=lnms&tbm=isch&sa=X&ved=2ahUKEwizq9OEp_zlAhUITawKHU9LCfsQ_AUoAXoECAsQAw&biw=1440&bih=714#imgrc=ziiG1BRwN0dqyM:

//london img
//https://upload.wikimedia.org/wikipedia/commons/d/d4/Engraving_of_Old_Ouse_Bridge.jpeg