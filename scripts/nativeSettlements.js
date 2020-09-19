function ns1Select(){
    quebec = false
    jamestown = false
    santoDomingo = false
    newAmsterdam = false
    ns1SELECT = true
    ns2SELECT = false
    ns3SELECT = false
    ns4SELECT = false
    ns5SELECT = false
    ns6SELECT = false
    prog.getElementById('cityTab').style.visibility = visTrue
    prog.getElementById('cityName').innerHTML = ns1CityCheck.cityName
    prog.getElementById('cityOwner').innerHTML = ns1CityCheck.owner
    prog.getElementById('cityIcon').style.backgroundImage = ns1CityCheck.icon
    prog.getElementById('cityIcon').style.height = "100px"
    franceColony = ns1CityCheck.franceColony
    englandColony = ns1CityCheck.englandColony
    dutchColony = ns1CityCheck.dutchColony
    spainColony = ns1CityCheck.spainColony
    nativeSettlement = ns1CityCheck.nativeSettlement
    ns1 = ns1CityCheck.ns1
    ns2 = ns1CityCheck.ns2
    ns3 = ns1CityCheck.ns3
    ns4 = ns1CityCheck.ns4
    ns5 = ns1CityCheck.ns5
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
function ns2Select(){
    quebec = false
    jamestown = false
    santoDomingo = false
    newAmsterdam = false
    ns1SELECT = false
    ns2SELECT = true
    ns3SELECT = false
    ns4SELECT = false
    ns5SELECT = false
    ns6SELECT = false
    prog.getElementById('cityTab').style.visibility = visTrue
    prog.getElementById('cityName').innerHTML = ns2CityCheck.cityName
    prog.getElementById('cityOwner').innerHTML = ns2CityCheck.owner
    prog.getElementById('cityIcon').style.backgroundImage = ns2CityCheck.icon
    prog.getElementById('cityIcon').style.height = "100px"
    franceColony = ns2CityCheck.franceColony
    englandColony = ns2CityCheck.englandColony
    dutchColony = ns2CityCheck.dutchColony
    spainColony = ns2CityCheck.spainColony
    nativeSettlement = ns2CityCheck.nativeSettlement
    ns1 = ns2CityCheck.ns1
    ns2 = ns2CityCheck.ns2
    ns3 = ns2CityCheck.ns3
    ns4 = ns2CityCheck.ns4
    ns5 = ns2CityCheck.ns5
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
function ns3Select(){
    quebec = false
    jamestown = false
    santoDomingo = false
    newAmsterdam = false
    ns1SELECT = false
    ns2SELECT = false
    ns3SELECT = true
    ns4SELECT = false
    ns5SELECT = false
    ns6SELECT = false
    prog.getElementById('cityTab').style.visibility = visTrue
    prog.getElementById('cityName').innerHTML = ns3CityCheck.cityName
    prog.getElementById('cityOwner').innerHTML = ns3CityCheck.owner
    prog.getElementById('cityIcon').style.backgroundImage = ns3CityCheck.icon
    prog.getElementById('cityIcon').style.height = "100px"
    franceColony = ns3CityCheck.franceColony
    englandColony = ns3CityCheck.englandColony
    dutchColony = ns3CityCheck.dutchColony
    spainColony = ns3CityCheck.spainColony
    nativeSettlement = ns3CityCheck.nativeSettlement
    ns1 = ns3CityCheck.ns1
    ns2 = ns3CityCheck.ns2
    ns3 = ns3CityCheck.ns3
    ns4 = ns3CityCheck.ns4
    ns5 = ns3CityCheck.ns5
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
function ns4Select(){
    quebec = false
    jamestown = false
    santoDomingo = false
    newAmsterdam = false
    ns1SELECT = false
    ns2SELECT = false
    ns3SELECT = false
    ns4SELECT = true
    ns5SELECT = false
    ns6SELECT = false
    prog.getElementById('cityTab').style.visibility = visTrue
    prog.getElementById('cityName').innerHTML = ns4CityCheck.cityName
    prog.getElementById('cityOwner').innerHTML = ns4CityCheck.owner
    prog.getElementById('cityIcon').style.backgroundImage = ns4CityCheck.icon
    prog.getElementById('cityIcon').style.height = "100px"
    franceColony = ns4CityCheck.franceColony
    englandColony = ns4CityCheck.englandColony
    dutchColony = ns4CityCheck.dutchColony
    spainColony = ns4CityCheck.spainColony
    nativeSettlement = ns4CityCheck.nativeSettlement
    ns1 = ns4CityCheck.ns1
    ns2 = ns4CityCheck.ns2
    ns3 = ns4CityCheck.ns3
    ns4 = ns4CityCheck.ns4
    ns5 = ns4CityCheck.ns5
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
function ns5Select(){
    quebec = false
    jamestown = false
    santoDomingo = false
    newAmsterdam = false
    ns1SELECT = false
    ns2SELECT = false
    ns3SELECT = false
    ns4SELECT = false
    ns5SELECT = true
    ns6SELECT = false
    prog.getElementById('cityTab').style.visibility = visTrue
    prog.getElementById('cityName').innerHTML = ns5CityCheck.cityName
    prog.getElementById('cityOwner').innerHTML = ns5CityCheck.owner
    prog.getElementById('cityIcon').style.backgroundImage = ns5CityCheck.icon
    prog.getElementById('cityIcon').style.height = "100px"
    franceColony = ns5CityCheck.franceColony
    englandColony = ns5CityCheck.englandColony
    dutchColony = ns5CityCheck.dutchColony
    spainColony = ns5CityCheck.spainColony
    nativeSettlement = ns5CityCheck.nativeSettlement
    ns1 = ns5CityCheck.ns1
    ns2 = ns5CityCheck.ns2
    ns3 = ns5CityCheck.ns3
    ns4 = ns5CityCheck.ns4
    ns5 = ns5CityCheck.ns5
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
function ns6Select(){
    quebec = false
    jamestown = false
    santoDomingo = false
    newAmsterdam = false
    ns1SELECT = false
    ns2SELECT = false
    ns3SELECT = false
    ns4SELECT = false
    ns5SELECT = false
    ns6SELECT = true
    prog.getElementById('cityTab').style.visibility = visTrue
    prog.getElementById('cityName').innerHTML = ns6CityCheck.cityName
    prog.getElementById('cityOwner').innerHTML = ns6CityCheck.owner
    prog.getElementById('cityIcon').style.backgroundImage = ns6CityCheck.icon
    prog.getElementById('cityIcon').style.height = "100px"
    franceColony = ns6CityCheck.franceColony
    englandColony = ns6CityCheck.englandColony
    dutchColony = ns6CityCheck.dutchColony
    spainColony = ns6CityCheck.spainColony
    nativeSettlement = ns6CityCheck.nativeSettlement
    ns1 = ns6CityCheck.ns1
    ns2 = ns6CityCheck.ns2
    ns3 = ns6CityCheck.ns3
    ns4 = ns6CityCheck.ns4
    ns5 = ns6CityCheck.ns5
    ns6 = ns6CityCheck.ns6
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