//4x.js
const display_NONE = "none"
const display_IB = "inline-block"

function mapTransition(time) {
    document.getElementById('map').style.transition = time + "s"
    document.getElementById('EnetiviaSVG-HTML').style.transition = time + "s"
    setTimeout(function() {
        document.getElementById('map').style.transition = display_NONE
        document.getElementById('EnetiviaSVG-HTML').style.transition = display_NONE
    }, 250)
}
function bannerTransition(colony, width, height, xPos, yPos) {
    document.getElementById(colony + "-city--banner").style.width = width + "px"
    document.getElementById(colony + "-city--banner").style.height = height + "px"
    document.getElementById(colony + "-city--banner").style.transform = "translate(" + xPos + "%, " + yPos + "%)"
}
function recenter(midLevel) {
    let mapCenterX = map_DATA.xSize / midLevel
    let mapCenterY = map_DATA.ySize / midLevel
    camera_DATA.x = mapCenterX / midLevel
    camera_DATA.y = mapCenterY / midLevel
}
function soundEmiter(sound, volume, loop) {
    sound.volume = volume
    sound.loop = loop
    sound.play()
}
function moveInterface(element, transitionTime, marginLeft, marginRight, marginTop, marginBottom) {
    document.getElementById(element).style.marginLeft = marginLeft + "px"
    document.getElementById(element).style.marginRight = marginRight + "px"
    document.getElementById(element).style.marginTop = marginTop + "px"
    document.getElementById(element).style.marginBottom = marginBottom + "px"
    document.getElementById(element).style.transition = transitionTime + "s"
}
function disableButton(button) {
    document.getElementById(button).style.backgroundColor = "rgba(0,0,0,0.4)"
    document.getElementById(button).style.color = "grey"
}
function enableButton(button) {
    document.getElementById(button).style.backgroundColor = "rgba(0,0,0,0.7)"
    document.getElementById(button).style.color = "white"
}
function changeInfoBox(dataBox, headerText, headerWeight, headerColor, headerTextColor, line1, line1Weight, line2, line2Weight, line3, line3Weight) {
    document.getElementById(dataBox).style.display = display_IB
    document.getElementById(dataBox + "-header--info").innerHTML = headerText
    document.getElementById(dataBox + "-header").style.backgroundColor = headerColor
    document.getElementById(dataBox + "-header--info").style.color = headerTextColor
    document.getElementById(dataBox + "-line1").innerHTML = line1
    document.getElementById(dataBox + "-line2").innerHTML = line2

    document.getElementById(dataBox + "-line3").innerHTML = line3
    document.getElementById(dataBox + "-header--info").style.fontWeight = headerWeight
    document.getElementById(dataBox + "-line1").style.fontWeight = line1Weight
    document.getElementById(dataBox + "-line2").style.fontWeight = line2Weight
    document.getElementById(dataBox + "-line3").style.fontWeight = line3Weight
}
function updateUnitCost(res1, res2, res3, res1num, res2num, res3num) {
    document.getElementById("recruit-" + res1 + "--text").innerHTML = res1num
    document.getElementById("recruit-" + res2 + "--text").innerHTML = res2num
    document.getElementById("recruit-" + res3 + "--text").innerHTML = res3num
}
function changeColonyBox(name, colonyImage, colonyFlag) {
    document.getElementById("colony-name").innerHTML = name
    document.getElementById("colony-icon").style.backgroundImage = colonyImage
    document.getElementById("colony-flag--icon").style.backgroundImage = colonyFlag
}
function updateResources(res1, res2, res3, res1num, res2num, res3num) {
    document.getElementById("resources-" + res1 + "--text").innerHTML = res1num
    document.getElementById("resources-" + res2 + "--text").innerHTML = res2num
    document.getElementById("resources-" + res3 + "--text").innerHTML = res3num
}
function updateIncome(res1, res2, res3, res1num, res2num, res3num) {
    document.getElementById("resources-" + res1 + "--income").innerHTML = res1num
    document.getElementById("resources-" + res2 + "--income").innerHTML = res2num
    document.getElementById("resources-" + res3 + "--income").innerHTML = res3num
}
function resizeInterface(element, width, height) {
    document.getElementById(element).style.width = width + "px"
    document.getElementById(element).style.height = height + "px"
}
function displayInterface(element, display) {
    document.getElementById(element).style.display = display
}
function replaceData(element, data) {
    document.getElementById(element).innerHTML = data
}
function replaceImage(element, data) {
    document.getElementById(element).style.backgroundImage = data
}
function createArmy(panel, armyName, posX, posY, sizeX, sizeY, img, nationFlag) {
    document.getElementById(panel).innerHTML += "<div id='" + armyName + "-ARMYRL' style='position: absolute; left: " + (posX - (sizeX / 2)) + "px; top: " + (posY - (sizeY - 10)) + "px; image-rendering: crisp-edges; text-align: center; color: white; overflow: hidden; background-image: " + img + "; background-repeat: no-repeat; width: 175px; height: 175px; background-size: 100%, 100%; background-position: center; margin: 0 auto; transition: 0.15s ease; z-index: 11; pointer-events: auto;'><div id='" + armyName + "-label' style='position: absolute; top: 0; right: 0; width: 20px; height: 20px; margin-right: 50px; margin-top: 10px; background-image: " + nationFlag + "; image-rendering: crisp-edges; background-repeat: no-repeat; background-size: cover; background-position: center; border: none; border-radius: 2px;'></div></div>"
}
function moveButton(element, transition, marginTop, color, img) {
    document.getElementById(element).style.transition = "" + transition + "s"
    document.getElementById(element).style.marginTop = marginTop + "px"
    document.getElementById(element).style.backgroundColor = color
    document.getElementById(element + "--icon").style.backgroundImage = img
}
function univ_changeInterfaceColor(color) {
    
}