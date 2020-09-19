function ifCityChecklist(){
  
}
function newAmsterdamSelect(){
  quebec = false
  jamestown = false
  santoDomingo = false
  newAmsterdam = true
  ns1SELECT = false
  ns2SELECT = false
  ns3SELECT = false
  ns4SELECT = false
  ns5SELECT = false
  ns6SELECT = false
  prog.getElementById('cityTab').style.visibility = visTrue
  prog.getElementById('cityName').innerHTML = newAmsterdamCityCheck.cityName
  prog.getElementById('cityOwner').innerHTML = newAmsterdamCityCheck.owner
  prog.getElementById('cityIcon').style.backgroundImage = newAmsterdamCityCheck.icon
  prog.getElementById('cityIcon').style.height = "80px"
  let franceColony = newAmsterdamCityCheck.franceColony
  let englandColony = newAmsterdamCityCheck.englandColony
  let dutchColony = newAmsterdamCityCheck.dutchColony
  let spainColony = newAmsterdamCityCheck.spainColony
  let nativeSettlement = newAmsterdamCityCheck.nativeSettlement
    let ns1 = newAmsterdamCityCheck.ns1
    let ns2 = newAmsterdamCityCheck.ns2
    let ns3 = newAmsterdamCityCheck.ns3
    let ns4 = newAmsterdamCityCheck.ns4
    let ns5 = newAmsterdamCityCheck.ns5
    console.clear()
    if(dutchColony)console.log("dutch colony")
    if(englandColony)console.log("english colony")
    if(franceColony)console.log("french colony")
    if(spainColony)console.log("spanish colony") 
    if(!englandColony)console.log("not english")  
    if(!franceColony)console.log("not french")  
    if(!spainColony)console.log("not spanish")  
    if(!dutchColony)console.log("not dutch")  
    if(ns1)console.log("ns1 selected")
    if(ns2)console.log("ns2 selected")
    if(ns3)console.log("ns3 selected")
    if(ns4)console.log("ns4 selected")
    if(ns5)console.log("ns5 selected")
    if(!ns1)console.log("ns1 not selected")
    if(!ns2)console.log("ns2 not selected")
    if(!ns3)console.log("ns3 not selected")
    if(!ns4)console.log("ns4 not selected")
    if(!ns5)console.log("ns5 not selected")
    if(englandMode && englandColony)displayInlineBlockTrue()
    if(englandMode && !englandColony)displayInlineBlockFalse()
    if(franceMode && franceColony)displayInlineBlockTrue()
    if(franceMode && !franceColony)displayInlineBlockFalse()
    if(spainMode && spainColony)displayInlineBlockTrue()
    if(spainMode && !spainColony)displayInlineBlockFalse()
    if(dutchMode && dutchColony)displayInlineBlockTrue()
    if(dutchMode && !dutchColony)displayInlineBlockFalse()
    //native Check
    if(englandMode && nativeSettlement)displayInlineBlockNatives()
    if(franceMode && nativeSettlement)displayInlineBlockNatives()
    if(spainMode && nativeSettlement)displayInlineBlockNatives()
    if(dutchMode && nativeSettlement)displayInlineBlockNatives()
}
function jamestownSelect(){
  quebec = false
  jamestown = true
  santoDomingo = false
  newAmsterdam = false
  ns1SELECT = false
  ns2SELECT = false
  ns3SELECT = false
  ns4SELECT = false
  ns5SELECT = false
  ns6SELECT = false
  prog.getElementById('cityTab').style.visibility = visTrue
  prog.getElementById('cityName').innerHTML = jamestownCityCheck.cityName
  prog.getElementById('cityOwner').innerHTML = jamestownCityCheck.owner
  prog.getElementById('cityIcon').style.backgroundImage = "url(/client/img/buildings/settlement.png)"
  prog.getElementById('cityIcon').style.height = "80px"
  let franceColony = jamestownCityCheck.franceColony
  let englandColony = jamestownCityCheck.englandColony
  let dutchColony = jamestownCityCheck.dutchColony
  let spainColony = jamestownCityCheck.spainColony
  let nativeSettlement = jamestownCityCheck.nativeSettlement
    let ns1 = jamestownCityCheck.ns1
    let ns2 = jamestownCityCheck.ns2
    let ns3 = jamestownCityCheck.ns3
    let ns4 = jamestownCityCheck.ns4
    let ns5 = jamestownCityCheck.ns5
    console.clear()
    if(dutchColony)console.log("dutch colony")
    if(englandColony)console.log("english colony")
    if(franceColony)console.log("french colony")
    if(spainColony)console.log("spanish colony") 
    if(!englandColony)console.log("not english")  
    if(!franceColony)console.log("not french")  
    if(!spainColony)console.log("not spanish")  
    if(!dutchColony)console.log("not dutch")  
    if(ns1)console.log("ns1 selected")
    if(ns2)console.log("ns2 selected")
    if(ns3)console.log("ns3 selected")
    if(ns4)console.log("ns4 selected")
    if(ns5)console.log("ns5 selected")
    if(!ns1)console.log("ns1 not selected")
    if(!ns2)console.log("ns2 not selected")
    if(!ns3)console.log("ns3 not selected")
    if(!ns4)console.log("ns4 not selected")
    if(!ns5)console.log("ns5 not selected")
    if(englandMode && englandColony)displayInlineBlockTrue()
    if(englandMode && !englandColony)displayInlineBlockFalse()
    if(franceMode && franceColony)displayInlineBlockTrue()
    if(franceMode && !franceColony)displayInlineBlockFalse()
    if(spainMode && spainColony)displayInlineBlockTrue()
    if(spainMode && !spainColony)displayInlineBlockFalse()
    if(dutchMode && dutchColony)displayInlineBlockTrue()
    if(dutchMode && !dutchColony)displayInlineBlockFalse()
    //native Check
    if(englandMode && nativeSettlement)displayInlineBlockNatives()
    if(franceMode && nativeSettlement)displayInlineBlockNatives()
    if(spainMode && nativeSettlement)displayInlineBlockNatives()
    if(dutchMode && nativeSettlement)displayInlineBlockNatives()
}
function quebecSelect(){
  quebec = true
  jamestown = false
  santoDomingo = false
  newAmsterdam = false
  ns1SELECT = false
  ns2SELECT = false
  ns3SELECT = false
  ns4SELECT = false
  ns5SELECT = false
  ns6SELECT = false
  prog.getElementById('cityTab').style.visibility = visTrue
  prog.getElementById('cityName').innerHTML = quebecCityCheck.cityName
  prog.getElementById('cityOwner').innerHTML = quebecCityCheck.owner
  prog.getElementById('cityIcon').style.backgroundImage = quebecCityCheck.icon
  prog.getElementById('cityIcon').style.height = "80px"
  let franceColony = quebecCityCheck.franceColony
  let englandColony = quebecCityCheck.englandColony
  let dutchColony = quebecCityCheck.dutchColony
  let spainColony = quebecCityCheck.spainColony
  let nativeSettlement = quebecCityCheck.nativeSettlement
    let ns1 = quebecCityCheck.ns1
    let ns2 = quebecCityCheck.ns2
    let ns3 = quebecCityCheck.ns3
    let ns4 = quebecCityCheck.ns4
    let ns5 = quebecCityCheck.ns5
    console.clear()
    if(dutchColony)console.log("dutch colony")
    if(englandColony)console.log("english colony")
    if(franceColony)console.log("french colony")
    if(spainColony)console.log("spanish colony") 
    if(!englandColony)console.log("not english")  
    if(!franceColony)console.log("not french")  
    if(!spainColony)console.log("not spanish")  
    if(!dutchColony)console.log("not dutch")  
    if(ns1)console.log("ns1 selected")
    if(ns2)console.log("ns2 selected")
    if(ns3)console.log("ns3 selected")
    if(ns4)console.log("ns4 selected")
    if(ns5)console.log("ns5 selected")
    if(!ns1)console.log("ns1 not selected")
    if(!ns2)console.log("ns2 not selected")
    if(!ns3)console.log("ns3 not selected")
    if(!ns4)console.log("ns4 not selected")
    if(!ns5)console.log("ns5 not selected")
    if(englandMode && englandColony)displayInlineBlockTrue()
    if(englandMode && !englandColony)displayInlineBlockFalse()
    if(franceMode && franceColony)displayInlineBlockTrue()
    if(franceMode && !franceColony)displayInlineBlockFalse()
    if(spainMode && spainColony)displayInlineBlockTrue()
    if(spainMode && !spainColony)displayInlineBlockFalse()
    if(dutchMode && dutchColony)displayInlineBlockTrue()
    if(dutchMode && !dutchColony)displayInlineBlockFalse()
    //native Check
    if(englandMode && nativeSettlement)displayInlineBlockNatives()
    if(franceMode && nativeSettlement)displayInlineBlockNatives()
    if(spainMode && nativeSettlement)displayInlineBlockNatives()
    if(dutchMode && nativeSettlement)displayInlineBlockNatives()
}
function santoDomingoSelect(){
  quebec = false
  jamestown = false
  santoDomingo = true
  newAmsterdam = false
  ns1SELECT = false
  ns2SELECT = false
  ns3SELECT = false
  ns4SELECT = false
  ns5SELECT = false
  ns6SELECT = false
  prog.getElementById('cityTab').style.visibility = visTrue
  prog.getElementById('cityName').innerHTML = santoDomingoCityCheck.cityName
  prog.getElementById('cityOwner').innerHTML = santoDomingoCityCheck.owner
  prog.getElementById('cityIcon').style.backgroundImage = santoDomingoCityCheck.icon
  prog.getElementById('cityIcon').style.height = "80px"
  let franceColony = santoDomingoCityCheck.franceColony
  let englandColony = santoDomingoCityCheck.englandColony
  let dutchColony = santoDomingoCityCheck.dutchColony
  let spainColony = santoDomingoCityCheck.spainColony
  let nativeSettlement = santoDomingoCityCheck.nativeSettlement
    let ns1 = santoDomingoCityCheck.ns1
    let ns2 = santoDomingoCityCheck.ns2
    let ns3 = santoDomingoCityCheck.ns3
    let ns4 = santoDomingoCityCheck.ns4
    let ns5 = santoDomingoCityCheck.ns5
    console.clear()
    if(dutchColony)console.log("dutch colony")
    if(englandColony)console.log("english colony")
    if(franceColony)console.log("french colony")
    if(spainColony)console.log("spanish colony") 
    if(!englandColony)console.log("not english")  
    if(!franceColony)console.log("not french")  
    if(!spainColony)console.log("not spanish")  
    if(!dutchColony)console.log("not dutch")  
    if(ns1)console.log("ns1 selected")
    if(ns2)console.log("ns2 selected")
    if(ns3)console.log("ns3 selected")
    if(ns4)console.log("ns4 selected")
    if(ns5)console.log("ns5 selected")
    if(!ns1)console.log("ns1 not selected")
    if(!ns2)console.log("ns2 not selected")
    if(!ns3)console.log("ns3 not selected")
    if(!ns4)console.log("ns4 not selected")
    if(!ns5)console.log("ns5 not selected")
    if(englandMode && englandColony)displayInlineBlockTrue()
    if(englandMode && !englandColony)displayInlineBlockFalse()
    if(franceMode && franceColony)displayInlineBlockTrue()
    if(franceMode && !franceColony)displayInlineBlockFalse()
    if(spainMode && spainColony)displayInlineBlockTrue()
    if(spainMode && !spainColony)displayInlineBlockFalse()
    if(dutchMode && dutchColony)displayInlineBlockTrue()
    if(dutchMode && !dutchColony)displayInlineBlockFalse()
    //native Check
    if(englandMode && nativeSettlement)displayInlineBlockNatives()
    if(franceMode && nativeSettlement)displayInlineBlockNatives()
    if(spainMode && nativeSettlement)displayInlineBlockNatives()
    if(dutchMode && nativeSettlement)displayInlineBlockNatives()
}
