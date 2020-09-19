
const dragMap = document.getElementById("map");
const dragOcean = document.getElementById("ocean");
const dragMiniMap = document.getElementById("miniMap-viewBox");
const dragOverlayMap = document.getElementById('EnetiviaSVG-HTML')
var mapScale = 1
const dragMMAP = document.getElementById("militaryMap");
const pixelLoc = "px"
var zoomLevel = 2
var map_DATA = {
  x: 0,
  y: 0,
  xSize: 1920,
  ySize: 1080,
  scroll: {
      speed: {
          x: 0,
          y: 0,
      },
  },
  miniMap: {
    x: 0,
    y: 0,
    xSize: 0,
    ySize: 0,
  },
  ocean: {
    x: 0,
    y: 0,
    xSize: 0,
    ySize: 0,
  },
  militaryMap: {
    x: 0,
    y: 0,
    xSize: 0,
    ySize: 0,
  },
  overlayMap: {
    x: 0,
    y: 0,
    xSize: 0,
    ySize: 0,
  },
}
var camera_DATA = {
  x: 0,
  y: 0,
  zoom: {
    level: 0,
    pixels: {
      norm: {
        px: 1080,
        label: "Normal"
      },
    },
    miniMap: {
      pixels: {
        norm: {
          px: 170,
          label: "Normal"
        },
      },
    },
    ocean: {
      pixels: {
        norm: {
          px: 1080,
          label: "Normal"
        },
      },
    },
    militaryMap: {
      pixels: {
        norm: {
          px: 1080,
          label: "Normal"
        },
      },
    },
    overlayMap: {
      pixels: {
        norm: {
          px: 1080,
          label: "Normal"
        },
      },
    },
  },
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
    mouse_DATA.mouse.x = event.clientX + camera_DATA.x
    mouse_DATA.mouse.y = event.clientY + camera_DATA.y
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

function getMapSize_SCALE() {
    document.getElementById('map').style.transform = "scale(" + mapScale + ")"
}
// var pickedMapData = document.getElementById('map');
// document.getElementById('map').setAttribute('data', mapDataPath[curSession.map]);

// It's important to add an load event listener to the object,
// as it will load the svg doc asynchronously
// pickedMapData.addEventListener("load",function(){
//         let svgDoc = pickedMapData.contentDocument;
//         // get the inner element by id
//         let thisMAP = svgDoc.getElementById('fantasyMap')
//         svgDoc.getElementById("stateLabel19").addEventListener("mouseover",function(){
//             // alert('hello world!')
//     }, false);
// }, false);

    function getMapSize_PIXELS() {
        map_DATA.ySize = camera_DATA.zoom.pixels.norm.px * zoomLevel
        map_DATA.xSize = 1.778 * map_DATA.ySize
        document.getElementById('map').style.transition = "none"
        document.getElementById('map').style.width = map_DATA.xSize + pixelLoc
        document.getElementById('map').style.height = map_DATA.ySize + pixelLoc
    }
    function getOverlaySize_PIXELS() {
      map_DATA.overlayMap.ySize = camera_DATA.zoom.overlayMap.pixels.norm.px * zoomLevel
      map_DATA.overlayMap.xSize = 1.778 * map_DATA.overlayMap.ySize
      document.getElementById('EnetiviaSVG-HTML').style.transition = "none"
      document.getElementById('EnetiviaSVG-HTML').setAttribute("height", map_DATA.overlayMap.ySize);
      document.getElementById('EnetiviaSVG-HTML').setAttribute("width", map_DATA.overlayMap.xSize);
  }
    function getMiniMapSize_PIXELS() {
      map_DATA.miniMap.ySize = camera_DATA.zoom.miniMap.pixels.norm.px / zoomLevel
      map_DATA.miniMap.xSize = 1.778 * map_DATA.miniMap.ySize
      document.getElementById('miniMap-viewBox').style.transition = "none"
      document.getElementById('miniMap-viewBox').style.width = map_DATA.miniMap.xSize + pixelLoc
      document.getElementById('miniMap-viewBox').style.height = map_DATA.miniMap.ySize + pixelLoc
  }
    function setTranslate(xPos, yPos, el) {
        el.style.transform = "translate3d(" + xPos + pixelLoc + ", " + yPos + pixelLoc + ", 0)";
      }

      //start
      zoomLevel = 2
      getMapSize_PIXELS()
      getMiniMapSize_PIXELS()
      getOverlaySize_PIXELS()

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
        camera_DATA.x += map_DATA.scroll.speed.x
        camera_DATA.y += map_DATA.scroll.speed.y
        if (
            mouse_DATA.mouse.actual.x >= window.innerWidth - 15 ||
            mouse_DATA.mouse.actual.x <= 15 ||
            mouse_DATA.mouse.actual.y >= window.innerHeight - 15 ||
            mouse_DATA.mouse.actual.y <= 15
        ) {
          //camera movement based on mouse position at edge of screen
            map_DATA.scroll.speed.x =
            20 *
            Math.cos(
              Math.atan2(
                mouse_DATA.mouse.actual.y - window.innerHeight / 2,
                mouse_DATA.mouse.actual.x - window.innerWidth / 2
              )
            )
            map_DATA.scroll.speed.y =
            20 *
            Math.sin(
              Math.atan2(
                mouse_DATA.mouse.actual.y - window.innerHeight / 2,
                mouse_DATA.mouse.actual.x - window.innerWidth / 2
              )
            )
        } else {
            map_DATA.scroll.speed.x = 0
            map_DATA.scroll.speed.y = 0
        }
        map_DATA.x = -1 * camera_DATA.x
        map_DATA.y = -1 * camera_DATA.y
      
        if(map_DATA.x > 10) {
            map_DATA.x = -15
        }
        if((map_DATA.x + map_DATA.xSize) - 10 < window.innerWidth) {
          (map_DATA.x) = ((window.innerWidth - map_DATA.xSize) + 15)
        }
        if(map_DATA.y > 10) {
            map_DATA.y = -15
        }
        if((map_DATA.y + map_DATA.ySize) - 10 < window.innerHeight) {
          (map_DATA.y) = ((window.innerHeight - map_DATA.ySize) + 15)
        }
        if(mouse_DATA.mouse.x > map_DATA.xSize || mouse_DATA.mouse.x < 0) {
          mouse_DATA.mouse.x = map_DATA.xSize / 2
        }
        if(mouse_DATA.mouse.y > map_DATA.ySize || mouse_DATA.mouse.y < 0) {
          mouse_DATA.mouse.y = map_DATA.ySize / 2
        }
        map_DATA.ocean.x = map_DATA.x
        map_DATA.ocean.y = map_DATA.y
        map_DATA.militaryMap.x = map_DATA.x
        map_DATA.militaryMap.y = map_DATA.y
        map_DATA.overlayMap.x = map_DATA.x
        map_DATA.overlayMap.y = map_DATA.y
        map_DATA.miniMap.x = -(map_DATA.x / zoomLevel / 6.4)
        map_DATA.miniMap.y = -(map_DATA.y / zoomLevel / 6.4)

        setTranslate(map_DATA.militaryMap.x, map_DATA.militaryMap.y, dragMMAP);
        setTranslate(map_DATA.ocean.x, map_DATA.ocean.y, dragOcean);
        setTranslate(map_DATA.overlayMap.x, map_DATA.overlayMap.y, dragOverlayMap);
        setTranslate(map_DATA.miniMap.x, map_DATA.miniMap.y, dragMiniMap);
        setTranslate(map_DATA.x, map_DATA.y, dragMap);
      
        requestAnimationFrame(animations)
      }
      requestAnimationFrame(animations)

    
    // add behaviour