
const battleMusic = new Audio("/client/sound/music/battle.mp3")
const dragTerrain = document.getElementById("generated");
const dragTerrainBG = document.getElementById("terrain-BG1");
const dragSky = document.getElementById("sky");
var terrain_DATA = {
  x: 0,
  y: 0,
  xSize: 3840,
  ySize: 534,
  sky: {
    x: 0,
    y: 0,
  },
  bg: {
    x: 0,
    y: 0,
  },
  scroll: {
      speed: {
          x: 0,
          y: 0,
      },
  },
}
var battleCam_DATA = {
  x: 0,
  y: 0,
  px: 1080,
  angle: 0,
}
var mouse_DATA = {
  mouse: {
    x: 0, 
    y: 0,
    buttons: [],
    actual: {
      x: 0,
      y: 0
    }
  }
}
document.onmousemove = event => {
    mouse_DATA.mouse.x = event.clientX + battleCam_DATA.x
    mouse_DATA.mouse.y = event.clientY + battleCam_DATA.y
    mouse_DATA.mouse.actual.x = event.clientX
    mouse_DATA.mouse.actual.y = event.clientY
}

document.onmousedown = event => {
    mouse_DATA.mouse.buttons[event.button] = true
  console.log(mouse_DATA.mouse.x + " " + mouse_DATA.mouse.y)
}
document.onmouseup = event => {
    mouse_DATA.mouse.buttons[event.button] = false
}
const keys = [];
document.onkeydown = function(e){
  keys[e.keyCode] = true;
  console.log(e.keyCode);
}
document.onkeyup = function(e){
  keys[e.keyCode] = false;
}
    function setTranslate(xPos, yPos, el) {
        el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
      }

    function animations() {

        //keys
        //zoom
        // if(keys[90]) {
        //     zoomLevel = 1.5
        //     getMapSize_PIXELS()
        //     getMiniMapSize_PIXELS()
        //     getOverlaySize_PIXELS()
        // }
        // if(keys[88]) {
        //   zoomLevel = 2
        //     getMapSize_PIXELS()
        //     getMiniMapSize_PIXELS()
        //     getOverlaySize_PIXELS()
        // }
        // if(keys[67]) {
        //   zoomLevel = 3
        //     getMapSize_PIXELS()
        //     getMiniMapSize_PIXELS()
        //     getOverlaySize_PIXELS()
        // }
    
        //map
        battleCam_DATA.x += terrain_DATA.scroll.speed.x
        battleCam_DATA.y += terrain_DATA.scroll.speed.y
        if (
            mouse_DATA.mouse.actual.x >= window.innerWidth - 15 ||
            mouse_DATA.mouse.actual.x <= 15 ||
            mouse_DATA.mouse.actual.y >= window.innerHeight - 15 ||
            mouse_DATA.mouse.actual.y <= 15
        ) {
          //camera movement based on mouse position at edge of screen
          terrain_DATA.scroll.speed.x =
            20 *
            Math.cos(
              Math.atan2(
                mouse_DATA.mouse.actual.y - window.innerHeight / 2,
                mouse_DATA.mouse.actual.x - window.innerWidth / 2
              )
            )
        } else {
            terrain_DATA.scroll.speed.x = 0
        }
        terrain_DATA.x = -1 * battleCam_DATA.x
        terrain_DATA.y = -1 * battleCam_DATA.y
      
        if(terrain_DATA.x > 10) {
            terrain_DATA.x = -15
        }
        if((terrain_DATA.x + terrain_DATA.xSize) - 10 < window.innerWidth) {
          (terrain_DATA.x) = ((window.innerWidth - terrain_DATA.xSize) + 15)
        }
        terrain_DATA.sky.x = terrain_DATA.x /2
        terrain_DATA.bg.x = terrain_DATA.x / 4

        setTranslate(terrain_DATA.sky.x, terrain_DATA.sky.y, dragSky);
        setTranslate(terrain_DATA.x, terrain_DATA.y, dragTerrain);
        setTranslate(terrain_DATA.bg.x, terrain_DATA.bg.y, dragTerrainBG);
      
        requestAnimationFrame(animations)
      }
      requestAnimationFrame(animations)

    battleMusic.volume = 0.5
    battleMusic.loop = true
    battleMusic.play()