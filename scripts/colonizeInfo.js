let franceColonyCount = 1
let englandColonyCount = 1
let spainColonyCount = 1
let dutchColonyCount = 1
let frenchUnitLogo = "url(/client/img/commonAnimSheet/units/logos/french/frenchUnitLogo32.png)"
let englishUnitLogo = "url(/client/img/commonAnimSheet/units/logos/england/englishUnitLogo32.png)"
let spanishUnitLogo = "url(/client/img/commonAnimSheet/units/logos/spain/spanishUnitLogo32.png)"
let dutchUnitLogo = "url(/client/img/commonAnimSheet/units/logos/dutch/dutchUnitLogo32.png)"

let quebecCityCheck = {
    cityLevel: {
      settlement: true,
      village: false,
      fort: false,
      town: false,
      city: false,
      metropolis: false,
    },
    franceColony: true,
    englandColony: false,
    dutchColony: false,
    spainColony: false,
    nativeSettlement: false,
    ns1: false,
    ns2: false,
    ns3: false,
    ns4: false,
    ns5: false,
    ns6: false,
    icon: "url(/client/img/colonyFrench1.png)",
    owner: "France",
    cityName: "Quebec",
    underSiege: false,
    flag: "url(/client/img/commonAnimSheet/units/logos/french/frenchUnitLogo32.png)",
    defense: 250,
  }
  let jamestownCityCheck = {
    cityLevel: {
      settlement: true,
      village: false,
      fort: false,
      town: false,
      city: false,
      metropolis: false,
    },
    franceColony: false,
    englandColony: true,
    dutchColony: false,
    spainColony: false,
    nativeSettlement: false,
    ns1: false,
    ns2: false,
    ns3: false,
    ns4: false,
    ns5: false,
    ns6: false,
    icon: "url(/client/img/colonyEnglish1.png)",
    owner: "England",
    cityName: "Jamestown",
    underSiege: false,
    flag: "url(/client/img/commonAnimSheet/units/logos/england/englishUnitLogo32.png)",
    defense: 250,
  }
  let newAmsterdamCityCheck = {
    cityLevel: {
      settlement: true,
      village: false,
      fort: false,
      town: false,
      city: false,
      metropolis: false,
    },
    franceColony: false,
    englandColony: false,
    dutchColony: true,
    spainColony: false,
    nativeSettlement: false,
    ns1: false,
    ns2: false,
    ns3: false,
    ns4: false,
    ns5: false,
    ns6: false,
    icon: "url(/client/img/colonyDutch1.png)",
    owner: "Netherlands",
    cityName: "New Amsterdam",
    underSiege: false,
    flag: "url(/client/img/commonAnimSheet/units/logos/dutch/dutchUnitLogo32.png)",
    defense: 250,
  }
  let santoDomingoCityCheck = {
    cityLevel: {
      settlement: true,
      village: false,
      fort: false,
      town: false,
      city: false,
      metropolis: false,
    },
    franceColony: false,
    englandColony: false,
    dutchColony: false,
    spainColony: true,
    nativeSettlement: false,
    ns1: false,
    ns2: false,
    ns3: false,
    ns4: false,
    ns5: false,
    ns6: false,
    icon: "url(/client/img/colonySpanish1.png)",
    owner: "Spain",
    cityName: "Santo Domingo",
    underSiege: false,
    flag: "url(/client/img/commonAnimSheet/units/logos/spain/spanishUnitLogo32.png)",
    defense: 250,
  }
  let ns1CityCheck = {
    cityLevel: {
      settlement: false,
      village: false,
      fort: false,
      town: false,
      city: false,
      metropolis: false,
    },
    franceColony: false,
    englandColony: false,
    dutchColony: false,
    spainColony: false,
    nativeSettlement: true,
    ns1: true,
    ns2: false,
    ns3: false,
    ns4: false,
    ns5: false,
    ns6: false,
    icon: "url(/client/img/nativeIcon.jpg)",
    owner: "Natives",
    cityName: "Pocitawi",
    underSiege: false,
    flag: "url(/client/img/commonAnimSheet/units/logos/natives/nativeUnitLogo32.png)",
    defense: 250,
  }
  let ns2CityCheck = {
    cityLevel: {
      settlement: false,
      village: false,
      fort: false,
      town: false,
      city: false,
      metropolis: false,
    },
    franceColony: false,
    englandColony: false,
    dutchColony: false,
    spainColony: false,
    nativeSettlement: true,
    ns1: false,
    ns2: true,
    ns3: false,
    ns4: false,
    ns5: false,
    ns6: false,
    icon: "url(/client/img/nativeIcon.jpg)",
    owner: "Natives",
    cityName: "Chitzao",
    underSiege: false,
    flag: "url(/client/img/commonAnimSheet/units/logos/natives/nativeUnitLogo32.png)",
    defense: 250,
  }
  let ns3CityCheck = {
    cityLevel: {
      settlement: false,
      village: false,
      fort: false,
      town: false,
      city: false,
      metropolis: false,
    },
    franceColony: false,
    englandColony: false,
    dutchColony: false,
    spainColony: false,
    nativeSettlement: true,
    ns1: false,
    ns2: false,
    ns3: true,
    ns4: false,
    ns5: false,
    ns6: false,
    icon: "url(/client/img/nativeIcon.jpg)",
    owner: "Natives",
    cityName: "Tetlamyn",
    underSiege: false,
    flag: "url(/client/img/commonAnimSheet/units/logos/natives/nativeUnitLogo32.png)",
    defense: 250,
  }
  let ns4CityCheck = {
    cityLevel: {
      settlement: false,
      village: false,
      fort: false,
      town: false,
      city: false,
      metropolis: false,
    },
    franceColony: false,
    englandColony: false,
    dutchColony: false,
    spainColony: false,
    nativeSettlement: true,
    ns1: false,
    ns2: false,
    ns3: false,
    ns4: true,
    ns5: false,
    ns6: false,
    icon: "url(/client/img/nativeIcon.jpg)",
    owner: "Natives",
    cityName: "Zeztitasu",
    underSiege: false,
    flag: "url(/client/img/commonAnimSheet/units/logos/natives/nativeUnitLogo32.png)",
    defense: 250,
  }
  let ns5CityCheck = {
    cityLevel: {
      settlement: false,
      village: false,
      fort: false,
      town: false,
      city: false,
      metropolis: false,
    },
    franceColony: false,
    englandColony: false,
    dutchColony: false,
    spainColony: false,
    nativeSettlement: true,
    ns1: false,
    ns2: false,
    ns3: false,
    ns4: false,
    ns5: true,
    ns6: false,
    icon: "url(/client/img/nativeIcon.jpg)",
    owner: "Natives",
    cityName: "Wactinu",
    underSiege: false,
    flag: "url(/client/img/commonAnimSheet/units/logos/natives/nativeUnitLogo32.png)",
    defense: 250,
  }
  let ns6CityCheck = {
    cityLevel: {
      settlement: false,
      village: false,
      fort: false,
      town: false,
      city: false,
      metropolis: false,
    },
    franceColony: false,
    englandColony: false,
    dutchColony: false,
    spainColony: false,
    nativeSettlement: true,
    ns1: false,
    ns2: false,
    ns3: false,
    ns4: false,
    ns5: false,
    ns6: true,
    icon: "url(/client/img/nativeIcon.jpg)",
    owner: "Natives",
    cityName: "Vatimium",
    underSiege: false,
    flag: "url(/client/img/commonAnimSheet/units/logos/natives/nativeUnitLogo32.png)",
    defense: 250, 
  }

function colonizeSettlement(){
    if(franceMode && franceObject.wealth >= 5000) {
      colonized = true
    }
    if(englandMode && englandObject.wealth >= 5000) {
      colonized = true
    }
    if(spainMode && spainObject.wealth >= 5000) {
      colonized = true
    }
    if(dutchMode && dutchObject.wealth >= 5000) {
      colonized = true
    }
    if(franceMode && franceObject.wealth < 5000) {
      colonized = false
      console.log("not enough funds to colonize")
    }
    if(englandMode && englandObject.wealth < 5000) {
      colonized = false
      console.log("not enough funds to colonize")
    }
    if(spainMode && spainObject.wealth < 5000) {
      colonized = false
      console.log("not enough funds to colonize")
    }
    if(dutchMode && dutchObject.wealth < 5000) {
      colonized = false
      console.log("not enough funds to colonize")
    }

    //ns1 options
    if(franceMode && colonized && ns1) {
      franceColonyCount += 1
      ns1Colonized = true
      console.log("france has colonized ns1")
      ns1CityCheck.franceColony = true
      ns1CityCheck.englandColony = false
      ns1CityCheck.spainColony = false
      ns1CityCheck.dutchColony = false
      ns1CityCheck.nativeSettlement = false
      ns1CityCheck.ns1 = false
      ns1CityCheck.ns2 = false
      ns1CityCheck.ns3 = false
      ns1CityCheck.ns4 = false
      ns1CityCheck.ns5 = false
      ns1CityCheck.ns6 = false
      ns1CityCheck.owner = "France"
      ns1CityCheck.cityName = "New Orleans"
      ns1CityCheck.icon = "url(/client/img/colonyFrench1.png)"
      prog.getElementById("ns1Tab").style.backgroundColor = franceMapColor
      prog.getElementById("ns1Name").innerHTML = ns1CityCheck.cityName
      prog.getElementById("ns1Location").style.backgroundImage = "url(/client/img/commonAnimSheet/flags/french/frenchColony1.gif)"
      prog.getElementById("ns1Location").style.transform = "scale(1)"
      prog.getElementById("ns1Location").style.imageRendering ="pixelated"
      prog.getElementById("ns1Tab").style.transform = "scale(1)"
      prog.getElementById("ns1Tab").style.width = "100px"
      prog.getElementById("ns1Tab").style.marginLeft = "-50px"
      prog.getElementById("ns1Tab").style.marginTop = "275px"
      colonizeWealthCheck()
      prog.getElementById('cityIcon').style.height = "80px"
      ns1CityCheck.flag = frenchUnitLogo
      getTravelData()
      ns1Select()
    }
    if(englandMode && colonized && ns1) {
      englandColonyCount += 1
      ns1Colonized = true
      console.log("england has colonized ns1")
      ns1CityCheck.franceColony = false
      ns1CityCheck.englandColony = true
      ns1CityCheck.spainColony = false
      ns1CityCheck.dutchColony = false
      ns1CityCheck.nativeSettlement = false
      ns1CityCheck.ns1 = false
      ns1CityCheck.ns2 = false
      ns1CityCheck.ns3 = false
      ns1CityCheck.ns4 = false
      ns1CityCheck.ns5 = false
      ns1CityCheck.ns6 = false
      ns1CityCheck.owner = "England"
      ns1CityCheck.cityName = "Plymouth"
      ns1CityCheck.icon = "url(/client/img/colonyEnglish1.png)"
      prog.getElementById("ns1Tab").style.backgroundColor = englandMapColor
      prog.getElementById("ns1Name").innerHTML = ns1CityCheck.cityName
      prog.getElementById("ns1Location").style.backgroundImage = "url(/client/img/commonAnimSheet/flags/england/englishColony1.gif)"
      prog.getElementById("ns1Location").style.transform = "scale(1)"
      prog.getElementById("ns1Location").style.imageRendering ="pixelated"
      prog.getElementById("ns1Tab").style.transform= "scale(1)"
      prog.getElementById("ns1Tab").style.width = "80px"
      prog.getElementById("ns1Tab").style.marginLeft = "-40px"
      prog.getElementById("ns1Tab").style.marginTop = "275px"
      colonizeWealthCheck()
      prog.getElementById('cityIcon').style.height = "80px"
      ns1CityCheck.flag = englishUnitLogo
      getTravelData()
      ns1Select()
    }
    if(spainMode && colonized && ns1) {
      spainColonyCount += 1
      ns1Colonized = true
      console.log("spain has colonized ns1")
      ns1CityCheck.franceColony = false
      ns1CityCheck.englandColony = false
      ns1CityCheck.spainColony = true
      ns1CityCheck.dutchColony = false
      ns1CityCheck.nativeSettlement = false
      ns1CityCheck.ns1 = false
      ns1CityCheck.ns2 = false
      ns1CityCheck.ns3 = false
      ns1CityCheck.ns4 = false
      ns1CityCheck.ns5 = false
      ns1CityCheck.ns6 = false
      ns1CityCheck.owner = "Spain"
      ns1CityCheck.cityName = "Santa Ana"
      ns1CityCheck.icon = "url(/client/img/colonySpanish1.png)"
      prog.getElementById("ns1Tab").style.backgroundColor = spainMapColor
      prog.getElementById("ns1Name").innerHTML = ns1CityCheck.cityName
      prog.getElementById("ns1Location").style.backgroundImage = "url(/client/img/commonAnimSheet/flags/spain/spanishColony1.gif)"
      prog.getElementById("ns1Location").style.transform = "scale(1)"
      prog.getElementById("ns1Location").style.imageRendering ="pixelated"
      prog.getElementById("ns1Tab").style.transform= "scale(1)"
      prog.getElementById("ns1Tab").style.width = "80px"
      prog.getElementById("ns1Tab").style.marginLeft = "-40px"
      prog.getElementById("ns1Tab").style.marginTop = "275px"
      colonizeWealthCheck()
      prog.getElementById('cityIcon').style.height = "80px"
      ns1CityCheck.flag = spanishUnitLogo
      getTravelData()
      ns1Select()
    }
    if(dutchMode && colonized && ns1) {
      dutchColonyCount += 1
        ns1Colonized = true
        console.log("dutch has colonized ns1")
        ns1CityCheck.franceColony = false
        ns1CityCheck.englandColony = false
        ns1CityCheck.spainColony = false
        ns1CityCheck.dutchColony = true
        ns1CityCheck.nativeSettlement = false
        ns1CityCheck.ns1 = false
        ns1CityCheck.ns2 = false
        ns1CityCheck.ns3 = false
        ns1CityCheck.ns4 = false
        ns1CityCheck.ns5 = false
        ns1CityCheck.ns6 = false
        ns1CityCheck.owner = "Netherlands"
        ns1CityCheck.cityName = "Broktonic"
        ns1CityCheck.icon = "url(/client/img/colonyDutch1.png)"
        prog.getElementById("ns1Tab").style.backgroundColor = dutchMapColor
        prog.getElementById("ns1Name").innerHTML = ns1CityCheck.cityName
        prog.getElementById("ns1Location").style.backgroundImage = "url(/client/img/commonAnimSheet/flags/dutch/dutchColony1.gif)"
        prog.getElementById("ns1Location").style.transform = "scale(1)"
        prog.getElementById("ns1Location").style.imageRendering ="pixelated"
        prog.getElementById("ns1Tab").style.transform= "scale(1)"
        prog.getElementById("ns1Tab").style.width = "80px"
        prog.getElementById("ns1Tab").style.marginLeft = "-40px"
        prog.getElementById("ns1Tab").style.marginTop = "275px"
        colonizeWealthCheck()
        prog.getElementById('cityIcon').style.height = "80px"
        ns1CityCheck.flag = dutchUnitLogo
        getTravelData()
        ns1Select()
      }

       //ns2 options
    if(franceMode && colonized && ns2) {
      franceColonyCount += 1
      englandColonyCount += 0
      spainColonyCount += 0 
      dutchColonyCount += 0
        ns2Colonized = true
        console.log("france has colonized ns2")
        ns2CityCheck.franceColony = true
        ns2CityCheck.englandColony = false
        ns2CityCheck.spainColony = false
        ns2CityCheck.dutchColony = false
        ns2CityCheck.nativeSettlement = false
        ns2CityCheck.ns1 = false
        ns2CityCheck.ns2 = false
        ns2CityCheck.ns3 = false
        ns2CityCheck.ns4 = false
        ns2CityCheck.ns5 = false
        ns2CityCheck.ns6 = false
        ns2CityCheck.owner = "France"
        ns2CityCheck.cityName = "Ottowa"
        ns2CityCheck.icon = "url(/client/img/colonyFrench1.png)"
        prog.getElementById("ns2Tab").style.backgroundColor = franceMapColor
        prog.getElementById("ns2Name").innerHTML = ns2CityCheck.cityName
        prog.getElementById("ns2Location").style.backgroundImage = "url(/client/img/commonAnimSheet/flags/french/frenchColony1.gif)"
        prog.getElementById("ns2Location").style.transform = "scale(1)"
        prog.getElementById("ns2Location").style.imageRendering ="pixelated"
        prog.getElementById("ns2Tab").style.transform = "scale(1)"
        prog.getElementById("ns2Tab").style.width = "70px"
        prog.getElementById("ns2Tab").style.marginLeft = "-35px"
        prog.getElementById("ns2Tab").style.marginTop = "275px"
        colonizeWealthCheck()
        prog.getElementById('cityIcon').style.height = "80px"
        ns2CityCheck.flag = frenchUnitLogo
        getTravelData()
        ns2Select()
      }
      if(englandMode && colonized && ns2) {
        franceColonyCount += 0
        englandColonyCount += 1
        spainColonyCount += 0 
        dutchColonyCount += 0
        ns2Colonized = true
        console.log("england has colonized ns2")
        ns2CityCheck.franceColony = false
        ns2CityCheck.englandColony = true
        ns2CityCheck.spainColony = false
        ns2CityCheck.dutchColony = false
        ns2CityCheck.nativeSettlement = false
        ns2CityCheck.ns1 = false
        ns2CityCheck.ns2 = false
        ns2CityCheck.ns3 = false
        ns2CityCheck.ns4 = false
        ns2CityCheck.ns5 = false
        ns2CityCheck.ns6 = false
        ns2CityCheck.owner = "England"
        ns2CityCheck.cityName = "Yorktown"
        ns2CityCheck.icon = "url(/client/img/colonyEnglish1.png)"
        prog.getElementById("ns2Tab").style.backgroundColor = englandMapColor
        prog.getElementById("ns2Name").innerHTML = ns2CityCheck.cityName
        prog.getElementById("ns2Location").style.backgroundImage = "url(/client/img/commonAnimSheet/flags/england/englishColony1.gif)"
        prog.getElementById("ns2Location").style.transform = "scale(1)"
        prog.getElementById("ns2Location").style.imageRendering ="pixelated"
        prog.getElementById("ns2Tab").style.transform= "scale(1)"
        prog.getElementById("ns2Tab").style.width = "80px"
        prog.getElementById("ns2Tab").style.marginLeft = "-40px"
        prog.getElementById("ns2Tab").style.marginTop = "275px"
        colonizeWealthCheck()
        prog.getElementById('cityIcon').style.height = "80px"
        ns2CityCheck.flag = englishUnitLogo
        getTravelData()
        ns2Select()
      }
        if(spainMode && colonized && ns2) {
          franceColonyCount += 0
          englandColonyCount += 0
          spainColonyCount += 1
          dutchColonyCount += 0
        ns2Colonized = true
        console.log("spain has colonized ns2")
        ns2CityCheck.franceColony = false
        ns2CityCheck.englandColony = false
        ns2CityCheck.spainColony = true
        ns2CityCheck.dutchColony = false
        ns2CityCheck.nativeSettlement = false
        ns2CityCheck.ns1 = false
        ns2CityCheck.ns2 = false
        ns2CityCheck.ns3 = false
        ns2CityCheck.ns4 = false
        ns2CityCheck.ns5 = false
        ns2CityCheck.ns6 = false
        ns2CityCheck.owner = "Spain"
        ns2CityCheck.cityName = "Fort Santiago"
        ns2CityCheck.icon = "url(/client/img/colonySpanish1.png)"
        prog.getElementById("ns2Tab").style.backgroundColor = spainMapColor
        prog.getElementById("ns2Name").innerHTML = ns2CityCheck.cityName
        prog.getElementById("ns2Location").style.backgroundImage = "url(/client/img/commonAnimSheet/flags/spain/spanishColony1.gif)"
        prog.getElementById("ns2Location").style.transform = "scale(1)"
        prog.getElementById("ns2Location").style.imageRendering ="pixelated"
        prog.getElementById("ns2Tab").style.transform= "scale(1)"
        prog.getElementById("ns2Tab").style.width = "100px"
        prog.getElementById("ns2Tab").style.marginLeft = "-50px"
        prog.getElementById("ns2Tab").style.marginTop = "275px"
        colonizeWealthCheck()
        prog.getElementById('cityIcon').style.height = "80px"
        ns2CityCheck.flag = spanishUnitLogo
        getTravelData()
        ns2Select()
      }
      if(dutchMode && colonized && ns2) {
        franceColonyCount += 0
        englandColonyCount += 0
        spainColonyCount += 0 
        dutchColonyCount += 1
          ns2Colonized = true
          console.log("dutch has colonized ns2")
          ns2CityCheck.franceColony = false
          ns2CityCheck.englandColony = false
          ns2CityCheck.spainColony = false
          ns2CityCheck.dutchColony = true
          ns2CityCheck.nativeSettlement = false
          ns2CityCheck.ns1 = false
          ns2CityCheck.ns2 = false
          ns2CityCheck.ns3 = false
          ns2CityCheck.ns4 = false
          ns2CityCheck.ns5 = false
          ns2CityCheck.ns6 = false
          ns2CityCheck.owner = "Netherlands"
          ns2CityCheck.cityName = "Yikstavlo"
          ns2CityCheck.icon = "url(/client/img/colonyDutch1.png)"
          prog.getElementById("ns2Tab").style.backgroundColor = dutchMapColor
          prog.getElementById("ns2Name").innerHTML = ns2CityCheck.cityName
          prog.getElementById("ns2Location").style.backgroundImage = "url(/client/img/commonAnimSheet/flags/dutch/dutchColony1.gif)"
          prog.getElementById("ns2Location").style.transform = "scale(1)"
          prog.getElementById("ns2Location").style.imageRendering ="pixelated"
          prog.getElementById("ns2Tab").style.transform= "scale(1)"
          prog.getElementById("ns2Tab").style.width = "85px"
          prog.getElementById("ns2Tab").style.marginLeft = "-42.5px"
          prog.getElementById("ns2Tab").style.marginTop = "275px"
          colonizeWealthCheck()
          prog.getElementById('cityIcon').style.height = "80px"
          ns2CityCheck.flag = dutchUnitLogo
          getTravelData()
          ns2Select()
        }

        //ns3 options
    if(franceMode && colonized && ns3) {
      franceColonyCount += 1
      englandColonyCount += 0
      spainColonyCount += 0 
      dutchColonyCount += 0
        ns3Colonized = true
        console.log("france has colonized ns3")
        ns3CityCheck.franceColony = true
        ns3CityCheck.englandColony = false
        ns3CityCheck.spainColony = false
        ns3CityCheck.dutchColony = false
        ns3CityCheck.nativeSettlement = false
        ns3CityCheck.ns1 = false
        ns3CityCheck.ns2 = false
        ns3CityCheck.ns3 = false
        ns3CityCheck.ns4 = false
        ns3CityCheck.ns5 = false
        ns3CityCheck.ns6 = false
        ns3CityCheck.owner = "France"
        ns3CityCheck.cityName = "Torronto"
        ns3CityCheck.icon = "url(/client/img/colonyFrench1.png)"
        prog.getElementById("ns3Tab").style.backgroundColor = franceMapColor
        prog.getElementById("ns3Name").innerHTML = ns3CityCheck.cityName
        prog.getElementById("ns3Location").style.backgroundImage = "url(/client/img/commonAnimSheet/flags/french/frenchColony1.gif)"
        prog.getElementById("ns3Location").style.transform = "scale(1)"
        prog.getElementById("ns3Location").style.imageRendering ="pixelated"
        prog.getElementById("ns3Tab").style.transform = "scale(1)"
        prog.getElementById("ns3Tab").style.width = "80px"
        prog.getElementById("ns3Tab").style.marginLeft = "-40px"
        prog.getElementById("ns3Tab").style.marginTop = "275px"
        colonizeWealthCheck()
        prog.getElementById('cityIcon').style.height = "80px"
        ns3CityCheck.flag = frenchUnitLogo
        getTravelData()
        ns3Select()
      }
      if(englandMode && colonized && ns3) {
        franceColonyCount += 0
        englandColonyCount += 1
        spainColonyCount += 0 
        dutchColonyCount += 0
        ns3Colonized = true
        console.log("england has colonized ns3")
        ns3CityCheck.franceColony = false
        ns3CityCheck.englandColony = true
        ns3CityCheck.spainColony = false
        ns3CityCheck.dutchColony = false
        ns3CityCheck.nativeSettlement = false
        ns3CityCheck.ns1 = false
        ns3CityCheck.ns2 = false
        ns3CityCheck.ns3 = false
        ns3CityCheck.ns4 = false
        ns3CityCheck.ns5 = false
        ns3CityCheck.ns6 = false
        ns3CityCheck.owner = "England"
        ns3CityCheck.cityName = "Charleston"
        ns3CityCheck.icon = "url(/client/img/colonyEnglish1.png)"
        prog.getElementById("ns3Tab").style.backgroundColor = englandMapColor
        prog.getElementById("ns3Name").innerHTML = ns3CityCheck.cityName
        prog.getElementById("ns3Location").style.backgroundImage = "url(/client/img/commonAnimSheet/flags/england/englishColony1.gif)"
        prog.getElementById("ns3Location").style.transform = "scale(1)"
        prog.getElementById("ns3Location").style.imageRendering ="pixelated"
        prog.getElementById("ns3Tab").style.transform= "scale(1)"
        prog.getElementById("ns3Tab").style.width = "85px"
        prog.getElementById("ns3Tab").style.marginLeft = "-42.5px"
        prog.getElementById("ns3Tab").style.marginTop = "275px"
        colonizeWealthCheck()
        prog.getElementById('cityIcon').style.height = "80px"
        ns3CityCheck.flag = englishUnitLogo
        getTravelData()
        ns3Select()
      }
      if(spainMode && colonized && ns3) {
          franceColonyCount += 0
          englandColonyCount += 0
          spainColonyCount += 1
          dutchColonyCount += 0
        ns3Colonized = true
        console.log("spain has colonized ns3")
        ns3CityCheck.franceColony = false
        ns3CityCheck.englandColony = false
        ns3CityCheck.spainColony = true
        ns3CityCheck.dutchColony = false
        ns3CityCheck.nativeSettlement = false
        ns3CityCheck.ns1 = false
        ns3CityCheck.ns2 = false
        ns3CityCheck.ns3 = false
        ns3CityCheck.ns4 = false
        ns3CityCheck.ns5 = false
        ns3CityCheck.ns6 = false
        ns3CityCheck.owner = "Spain"
        ns3CityCheck.cityName = "Los Principe"
        ns3CityCheck.icon = "url(/client/img/colonySpanish1.png)"
        prog.getElementById("ns3Tab").style.backgroundColor = spainMapColor
        prog.getElementById("ns3Name").innerHTML = ns3CityCheck.cityName
        prog.getElementById("ns3Location").style.backgroundImage = "url(/client/img/commonAnimSheet/flags/spain/spanishColony1.gif)"
        prog.getElementById("ns3Location").style.transform = "scale(1)"
        prog.getElementById("ns3Location").style.imageRendering ="pixelated"
        prog.getElementById("ns3Tab").style.transform= "scale(1)"
        prog.getElementById("ns3Tab").style.width = "100px"
        prog.getElementById("ns3Tab").style.marginLeft = "-50px"
        prog.getElementById("ns3Tab").style.marginTop = "275px"
        colonizeWealthCheck()
        prog.getElementById('cityIcon').style.height = "80px"
        ns3CityCheck.flag = spanishUnitLogo
        getTravelData()
        ns3Select()
      }
      if(dutchMode && colonized && ns3) {
        franceColonyCount += 0
        englandColonyCount += 0
        spainColonyCount += 0
        dutchColonyCount += 1
          ns3Colonized = true
          console.log("dutch has colonized ns3")
          ns3CityCheck.franceColony = false
          ns3CityCheck.englandColony = false
          ns3CityCheck.spainColony = false
          ns3CityCheck.dutchColony = true
          ns3CityCheck.nativeSettlement = false
          ns3CityCheck.ns1 = false
          ns3CityCheck.ns2 = false
          ns3CityCheck.ns3 = false
          ns3CityCheck.ns4 = false
          ns3CityCheck.ns5 = false
          ns3CityCheck.ns6 = false
          ns3CityCheck.owner = "Netherlands"
          ns3CityCheck.cityName = "Navstigrin"
          ns3CityCheck.icon = "url(/client/img/colonyDutch1.png)"
          prog.getElementById("ns3Tab").style.backgroundColor = dutchMapColor
          prog.getElementById("ns3Name").innerHTML = ns3CityCheck.cityName
          prog.getElementById("ns3Location").style.backgroundImage = "url(/client/img/commonAnimSheet/flags/dutch/dutchColony1.gif)"
          prog.getElementById("ns3Location").style.transform = "scale(1)"
          prog.getElementById("ns3Location").style.imageRendering ="pixelated"
          prog.getElementById("ns3Tab").style.transform= "scale(1)"
          prog.getElementById("ns3Tab").style.width = "85px"
          prog.getElementById("ns3Tab").style.marginLeft = "-42.5px"
          prog.getElementById("ns3Tab").style.marginTop = "275px"
          colonizeWealthCheck()
          prog.getElementById('cityIcon').style.height = "80px"
          ns3CityCheck.flag = dutchUnitLogo
          getTravelData()
          ns3Select()
        }

              //ns4 options
    if(franceMode && colonized && ns4) {
      franceColonyCount += 1
      englandColonyCount += 0
      spainColonyCount += 0
      dutchColonyCount += 0
      ns4Colonized = true
      console.log("france has colonized ns4")
      ns4CityCheck.franceColony = true
      ns4CityCheck.englandColony = false
      ns4CityCheck.spainColony = false
      ns4CityCheck.dutchColony = false
      ns4CityCheck.nativeSettlement = false
      ns4CityCheck.ns1 = false
      ns4CityCheck.ns2 = false
      ns4CityCheck.ns3 = false
      ns4CityCheck.ns4 = false
      ns4CityCheck.ns5 = false
      ns4CityCheck.ns6 = false
      ns4CityCheck.owner = "France"
      ns4CityCheck.cityName = "Martinique"
      ns4CityCheck.icon = "url(/client/img/colonyFrench1.png)"
      prog.getElementById("ns4Tab").style.backgroundColor = franceMapColor
      prog.getElementById("ns4Name").innerHTML = ns4CityCheck.cityName
      prog.getElementById("ns4Location").style.backgroundImage = "url(/client/img/commonAnimSheet/flags/french/frenchColony1.gif)"
      prog.getElementById("ns4Location").style.transform = "scale(1)"
      prog.getElementById("ns4Location").style.imageRendering ="pixelated"
      prog.getElementById("ns4Tab").style.transform = "scale(1)"
      prog.getElementById("ns4Tab").style.width = "85px"
      prog.getElementById("ns4Tab").style.marginLeft = "-42.5px"
      prog.getElementById("ns4Tab").style.marginTop = "275px"
      colonizeWealthCheck()
      prog.getElementById('cityIcon').style.height = "80px"
      ns4CityCheck.flag = frenchUnitLogo
      getTravelData()
      ns4Select()
    }
    if(englandMode && colonized && ns4) {
      franceColonyCount += 0
      englandColonyCount += 1
      spainColonyCount += 0
      dutchColonyCount += 0
      ns4Colonized = true
      console.log("england has colonized ns4")
      ns4CityCheck.franceColony = false
      ns4CityCheck.englandColony = true
      ns4CityCheck.spainColony = false
      ns4CityCheck.dutchColony = false
      ns4CityCheck.nativeSettlement = false
      ns4CityCheck.ns1 = false
      ns4CityCheck.ns2 = false
      ns4CityCheck.ns3 = false
      ns4CityCheck.ns4 = false
      ns4CityCheck.ns5 = false
      ns4CityCheck.ns6 = false
      ns4CityCheck.owner = "England"
      ns4CityCheck.cityName = "New York"
      ns4CityCheck.icon = "url(/client/img/colonyEnglish1.png)"
      prog.getElementById("ns4Tab").style.backgroundColor = englandMapColor
      prog.getElementById("ns4Name").innerHTML = ns4CityCheck.cityName
      prog.getElementById("ns4Location").style.backgroundImage = "url(/client/img/commonAnimSheet/flags/england/englishColony1.gif)"
      prog.getElementById("ns4Location").style.transform = "scale(1)"
      prog.getElementById("ns4Location").style.imageRendering ="pixelated"
      prog.getElementById("ns4Tab").style.transform= "scale(1)"
      prog.getElementById("ns4Tab").style.width = "80px"
      prog.getElementById("ns4Tab").style.marginLeft = "-40px"
      prog.getElementById("ns4Tab").style.marginTop = "275px"
      colonizeWealthCheck()
      prog.getElementById('cityIcon').style.height = "80px"
      ns4CityCheck.flag = englishUnitLogo
      getTravelData()
      ns4Select()
    }
      if(spainMode && colonized && ns4) {
        franceColonyCount += 0
        englandColonyCount += 0
        spainColonyCount += 1
        dutchColonyCount += 0
      ns4Colonized = true
      console.log("spain has colonized ns4")
      ns4CityCheck.franceColony = false
      ns4CityCheck.englandColony = false
      ns4CityCheck.spainColony = true
      ns4CityCheck.dutchColony = false
      ns4CityCheck.nativeSettlement = false
      ns4CityCheck.ns1 = false
      ns4CityCheck.ns2 = false
      ns4CityCheck.ns3 = false
      ns4CityCheck.ns4 = false
      ns4CityCheck.ns5 = false
      ns4CityCheck.ns6 = false
      ns4CityCheck.owner = "Spain"
      ns4CityCheck.cityName = "Havanna"
      ns4CityCheck.icon = "url(/client/img/colonySpanish1.png)"
      prog.getElementById("ns4Tab").style.backgroundColor = spainMapColor
      prog.getElementById("ns4Name").innerHTML = ns4CityCheck.cityName
      prog.getElementById("ns4Location").style.backgroundImage = "url(/client/img/commonAnimSheet/flags/spain/spanishColony1.gif)"
      prog.getElementById("ns4Location").style.transform = "scale(1)"
      prog.getElementById("ns4Location").style.imageRendering ="pixelated"
      prog.getElementById("ns4Tab").style.transform= "scale(1)"
      prog.getElementById("ns4Tab").style.width = "80px"
      prog.getElementById("ns4Tab").style.marginLeft = "-40px"
      prog.getElementById("ns4Tab").style.marginTop = "275px"
      colonizeWealthCheck()
      prog.getElementById('cityIcon').style.height = "80px"
      ns4CityCheck.flag = spanishUnitLogo
      getTravelData()
      ns4Select()
    }
    if(dutchMode && colonized && ns4) {
      franceColonyCount += 0
      englandColonyCount += 0
      spainColonyCount += 0
      dutchColonyCount += 1
        ns4Colonized = true
        console.log("dutch has colonized ns4")
        ns4CityCheck.franceColony = false
        ns4CityCheck.englandColony = false
        ns4CityCheck.spainColony = false
        ns4CityCheck.dutchColony = true
        ns4CityCheck.nativeSettlement = false
        ns4CityCheck.ns1 = false
        ns4CityCheck.ns2 = false
        ns4CityCheck.ns3 = false
        ns4CityCheck.ns4 = false
        ns4CityCheck.ns5 = false
        ns4CityCheck.ns6 = false
        ns4CityCheck.owner = "Netherlands"
        ns4CityCheck.cityName = "Borstenov"
        ns4CityCheck.icon = "url(/client/img/colonyDutch1.png)"
        prog.getElementById("ns4Tab").style.backgroundColor = dutchMapColor
        prog.getElementById("ns4Name").innerHTML = ns4CityCheck.cityName
        prog.getElementById("ns4Location").style.backgroundImage = "url(/client/img/commonAnimSheet/flags/dutch/dutchColony1.gif)"
        prog.getElementById("ns4Location").style.transform = "scale(1)"
        prog.getElementById("ns4Location").style.imageRendering ="pixelated"
        prog.getElementById("ns4Tab").style.transform= "scale(1)"
        prog.getElementById("ns4Tab").style.width = "85px"
        prog.getElementById("ns4Tab").style.marginLeft = "-42.5px"
        prog.getElementById("ns4Tab").style.marginTop = "275px"
        colonizeWealthCheck()
        prog.getElementById('cityIcon').style.height = "80px"
        ns4CityCheck.flag = dutchUnitLogo
        getTravelData()
        ns4Select()
      }

                   //ns5 options
    if(franceMode && colonized && ns5) {
      franceColonyCount += 1
      englandColonyCount += 0
      spainColonyCount += 0
      dutchColonyCount += 0
      ns5Colonized = true
      console.log("france has colonized ns5")
      ns5CityCheck.franceColony = true
      ns5CityCheck.englandColony = false
      ns5CityCheck.spainColony = false
      ns5CityCheck.dutchColony = false
      ns5CityCheck.nativeSettlement = false
      ns5CityCheck.ns1 = false
      ns5CityCheck.ns2 = false
      ns5CityCheck.ns3 = false
      ns5CityCheck.ns4 = false
      ns5CityCheck.ns5 = false
      ns5CityCheck.ns6 = false
      ns5CityCheck.owner = "France"
      ns5CityCheck.cityName = "Tobago"
      ns5CityCheck.icon = "url(/client/img/colonyFrench1.png)"
      prog.getElementById("ns5Tab").style.backgroundColor = franceMapColor
      prog.getElementById("ns5Name").innerHTML = ns5CityCheck.cityName
      prog.getElementById("ns5Location").style.backgroundImage = "url(/client/img/commonAnimSheet/flags/french/frenchColony1.gif)"
      prog.getElementById("ns5Location").style.transform = "scale(1)"
      prog.getElementById("ns5Location").style.imageRendering ="pixelated"
      prog.getElementById("ns5Tab").style.transform = "scale(1)"
      prog.getElementById("ns5Tab").style.width = "65px"
      prog.getElementById("ns5Tab").style.marginLeft = "-32.5px"
      prog.getElementById("ns5Tab").style.marginTop = "275px"
      colonizeWealthCheck()
      prog.getElementById('cityIcon').style.height = "80px"
      ns5CityCheck.flag = frenchUnitLogo
      getTravelData()
      ns5Select()
    }
    if(englandMode && colonized && ns5) {
      franceColonyCount += 0
      englandColonyCount += 1
      spainColonyCount += 0
      dutchColonyCount += 0
      ns5Colonized = true
      console.log("england has colonized ns5")
      ns5CityCheck.franceColony = false
      ns5CityCheck.englandColony = true
      ns5CityCheck.spainColony = false
      ns5CityCheck.dutchColony = false
      ns5CityCheck.nativeSettlement = false
      ns5CityCheck.ns1 = false
      ns5CityCheck.ns2 = false
      ns5CityCheck.ns3 = false
      ns5CityCheck.ns4 = false
      ns5CityCheck.ns5 = false
      ns5CityCheck.ns6 = false
      ns5CityCheck.owner = "England"
      ns5CityCheck.cityName = "Boston"
      ns5CityCheck.icon = "url(/client/img/colonyEnglish1.png)"
      prog.getElementById("ns5Tab").style.backgroundColor = englandMapColor
      prog.getElementById("ns5Name").innerHTML = ns5CityCheck.cityName
      prog.getElementById("ns5Location").style.backgroundImage = "url(/client/img/commonAnimSheet/flags/england/englishColony1.gif)"
      prog.getElementById("ns5Location").style.transform = "scale(1)"
      prog.getElementById("ns5Location").style.imageRendering ="pixelated"
      prog.getElementById("ns5Tab").style.transform= "scale(1)"
      prog.getElementById("ns5Tab").style.width = "65px"
      prog.getElementById("ns5Tab").style.marginLeft = "-32.5px"
      prog.getElementById("ns5Tab").style.marginTop = "275px"
      colonizeWealthCheck()
      prog.getElementById('cityIcon').style.height = "80px"
      ns5CityCheck.flag = englishUnitLogo
      getTravelData()
      ns5Select()
    }
      if(spainMode && colonized && ns5) {
        franceColonyCount += 0
        englandColonyCount += 0
        spainColonyCount += 1
        dutchColonyCount += 0
      ns5Colonized = true
      console.log("spain has colonized ns5")
      ns5CityCheck.franceColony = false
      ns5CityCheck.englandColony = false
      ns5CityCheck.spainColony = true
      ns5CityCheck.dutchColony = false
      ns5CityCheck.nativeSettlement = false
      ns5CityCheck.ns1 = false
      ns5CityCheck.ns2 = false
      ns5CityCheck.ns3 = false
      ns5CityCheck.ns4 = false
      ns5CityCheck.ns5 = false
      ns5CityCheck.ns6 = false
      ns5CityCheck.owner = "Spain"
      ns5CityCheck.cityName = "San Francisco"
      ns5CityCheck.icon = "url(/client/img/colonySpanish1.png)"
      prog.getElementById("ns5Tab").style.backgroundColor = spainMapColor
      prog.getElementById("ns5Name").innerHTML = ns5CityCheck.cityName
      prog.getElementById("ns5Location").style.backgroundImage = "url(/client/img/commonAnimSheet/flags/spain/spanishColony1.gif)"
      prog.getElementById("ns5Location").style.transform = "scale(1)"
      prog.getElementById("ns5Location").style.imageRendering ="pixelated"
      prog.getElementById("ns5Tab").style.transform= "scale(1)"
      prog.getElementById("ns5Tab").style.width = "100px"
      prog.getElementById("ns5Tab").style.marginLeft = "-50px"
      prog.getElementById("ns5Tab").style.marginTop = "275px"
      colonizeWealthCheck()
      prog.getElementById('cityIcon').style.height = "80px"
      ns5CityCheck.flag = spanishUnitLogo
      getTravelData()
      ns5Select()
    }
    if(dutchMode && colonized && ns5) {
      franceColonyCount += 0
      englandColonyCount += 0
      spainColonyCount += 0
      dutchColonyCount += 1
        ns5Colonized = true
        console.log("dutch has colonized ns5")
        ns5CityCheck.franceColony = false
        ns5CityCheck.englandColony = false
        ns5CityCheck.spainColony = false
        ns5CityCheck.dutchColony = true
        ns5CityCheck.nativeSettlement = false
        ns5CityCheck.ns1 = false
        ns5CityCheck.ns2 = false
        ns5CityCheck.ns3 = false
        ns5CityCheck.ns4 = false
        ns5CityCheck.ns5 = false
        ns5CityCheck.ns6 = false
        ns5CityCheck.owner = "Netherlands"
        ns5CityCheck.cityName = "Potenkin"
        ns5CityCheck.icon = "url(/client/img/colonyDutch1.png)"
        prog.getElementById("ns5Tab").style.backgroundColor = dutchMapColor
        prog.getElementById("ns5Name").innerHTML = ns5CityCheck.cityName
        prog.getElementById("ns5Location").style.backgroundImage = "url(/client/img/commonAnimSheet/flags/dutch/dutchColony1.gif)"
        prog.getElementById("ns5Location").style.transform = "scale(1)"
        prog.getElementById("ns5Location").style.imageRendering ="pixelated"
        prog.getElementById("ns5Tab").style.transform= "scale(1)"
        prog.getElementById("ns5Tab").style.width = "85px"
        prog.getElementById("ns5Tab").style.marginLeft = "-42.5px"
        prog.getElementById("ns5Tab").style.marginTop = "275px"
        colonizeWealthCheck()
        prog.getElementById('cityIcon').style.height = "80px"
        ns5CityCheck.flag = dutchUnitLogo
        getTravelData()
        ns5Select()
      }

                        //ns6 options
    if(franceMode && colonized && ns6) {
      franceColonyCount += 1
      englandColonyCount += 0
      spainColonyCount += 0
      dutchColonyCount += 0
      ns6Colonized = true
      console.log("france has colonized ns6")
      ns6CityCheck.franceColony = true
      ns6CityCheck.englandColony = false
      ns6CityCheck.spainColony = false
      ns6CityCheck.dutchColony = false
      ns6CityCheck.nativeSettlement = false
      ns6CityCheck.ns1 = false
      ns6CityCheck.ns2 = false
      ns6CityCheck.ns3 = false
      ns6CityCheck.ns4 = false
      ns6CityCheck.ns5 = false
      ns6CityCheck.ns6 = false
      ns6CityCheck.owner = "France"
      ns6CityCheck.cityName = "Port Royale"
      ns6CityCheck.icon = "url(/client/img/colonyFrench1.png)"
      prog.getElementById("ns6Tab").style.backgroundColor = franceMapColor
      prog.getElementById("ns6Name").innerHTML = ns6CityCheck.cityName
      prog.getElementById("ns6Location").style.backgroundImage = "url(/client/img/commonAnimSheet/flags/french/frenchColony1.gif)"
      prog.getElementById("ns6Location").style.transform = "scale(1)"
      prog.getElementById("ns6Location").style.imageRendering ="pixelated"
      prog.getElementById("ns6Tab").style.transform = "scale(1)"
      prog.getElementById("ns6Tab").style.width = "90px"
      prog.getElementById("ns6Tab").style.marginLeft = "-45px"
      prog.getElementById("ns6Tab").style.marginTop = "275px"
      colonizeWealthCheck()
      prog.getElementById('cityIcon').style.height = "80px"
      ns6CityCheck.flag = frenchUnitLogo
      getTravelData()
      ns6Select()
    }
    if(englandMode && colonized && ns6) {
      franceColonyCount += 0
      englandColonyCount += 1
      spainColonyCount += 0
      dutchColonyCount += 0
      ns6Colonized = true
      console.log("england has colonized ns6")
      ns6CityCheck.franceColony = false
      ns6CityCheck.englandColony = true
      ns6CityCheck.spainColony = false
      ns6CityCheck.dutchColony = false
      ns6CityCheck.nativeSettlement = false
      ns6CityCheck.ns1 = false
      ns6CityCheck.ns2 = false
      ns6CityCheck.ns3 = false
      ns6CityCheck.ns4 = false
      ns6CityCheck.ns5 = false
      ns6CityCheck.ns6 = false
      ns6CityCheck.owner = "England"
      ns6CityCheck.cityName = "Nantucket"
      ns6CityCheck.icon = "url(/client/img/colonyEnglish1.png)"
      prog.getElementById("ns6Tab").style.backgroundColor = englandMapColor
      prog.getElementById("ns6Name").innerHTML = ns6CityCheck.cityName
      prog.getElementById("ns6Location").style.backgroundImage = "url(/client/img/commonAnimSheet/flags/england/englishColony1.gif)"
      prog.getElementById("ns6Location").style.transform = "scale(1)"
      prog.getElementById("ns6Location").style.imageRendering ="pixelated"
      prog.getElementById("ns6Tab").style.transform= "scale(1)"
      prog.getElementById("ns6Tab").style.width = "80px"
      prog.getElementById("ns6Tab").style.marginLeft = "-40px"
      prog.getElementById("ns6Tab").style.marginTop = "275px"
      colonizeWealthCheck()
      prog.getElementById('cityIcon').style.height = "80px"
      ns6CityCheck.flag = englishUnitLogo
      getTravelData()
      ns6Select()
    }
      if(spainMode && colonized && ns6) {
        franceColonyCount += 0
        englandColonyCount += 0
        spainColonyCount += 1
        dutchColonyCount += 0
      ns6Colonized = true
      console.log("spain has colonized ns6")
      ns6CityCheck.franceColony = false
      ns6CityCheck.englandColony = false
      ns6CityCheck.spainColony = true
      ns6CityCheck.dutchColony = false
      ns6CityCheck.nativeSettlement = false
      ns6CityCheck.ns1 = false
      ns6CityCheck.ns2 = false
      ns6CityCheck.ns3 = false
      ns6CityCheck.ns4 = false
      ns6CityCheck.ns5 = false
      ns6CityCheck.ns6 = false
      ns6CityCheck.owner = "Spain"
      ns6CityCheck.cityName = "Santa Cruz"
      ns6CityCheck.icon = "url(/client/img/colonySpanish1.png)"
      prog.getElementById("ns6Tab").style.backgroundColor = spainMapColor
      prog.getElementById("ns6Name").innerHTML = ns6CityCheck.cityName
      prog.getElementById("ns6Location").style.backgroundImage = "url(/client/img/commonAnimSheet/flags/spain/spanishColony1.gif)"
      prog.getElementById("ns6Location").style.transform = "scale(1)"
      prog.getElementById("ns6Location").style.imageRendering ="pixelated"
      prog.getElementById("ns6Tab").style.transform= "scale(1)"
      prog.getElementById("ns6Tab").style.width = "85px"
      prog.getElementById("ns6Tab").style.marginLeft = "-42.5px"
      prog.getElementById("ns6Tab").style.marginTop = "275px"
      colonizeWealthCheck()
      prog.getElementById('cityIcon').style.height = "80px"
      ns6CityCheck.flag = spanishUnitLogo
      getTravelData()
      ns6Select()
    }
    if(dutchMode && colonized && ns6) {
      franceColonyCount += 0
      englandColonyCount += 0
      spainColonyCount += 0
      dutchColonyCount += 1
        ns6Colonized = true
        console.log("dutch has colonized ns6")
        ns6CityCheck.franceColony = false
        ns6CityCheck.englandColony = false
        ns6CityCheck.spainColony = false
        ns6CityCheck.dutchColony = true
        ns6CityCheck.nativeSettlement = false
        ns6CityCheck.ns1 = false
        ns6CityCheck.ns2 = false
        ns6CityCheck.ns3 = false
        ns6CityCheck.ns4 = false
        ns6CityCheck.ns5 = false
        ns6CityCheck.ns6 = false
        ns6CityCheck.owner = "Netherlands"
        ns6CityCheck.cityName = "Sorlitz"
        ns6CityCheck.icon = "url(/client/img/colonyDutch1.png)"
        prog.getElementById("ns6Tab").style.backgroundColor = dutchMapColor
        prog.getElementById("ns6Name").innerHTML = ns6CityCheck.cityName
        prog.getElementById("ns6Location").style.backgroundImage = "url(/client/img/commonAnimSheet/flags/dutch/dutchColony1.gif)"
        prog.getElementById("ns6Location").style.transform = "scale(1)"
        prog.getElementById("ns6Location").style.imageRendering ="pixelated"
        prog.getElementById("ns6Tab").style.transform= "scale(1)"
        prog.getElementById("ns6Tab").style.width = "65px"
        prog.getElementById("ns6Tab").style.marginLeft = "-32.5px"
        prog.getElementById("ns6Tab").style.marginTop = "275px"
        colonizeWealthCheck()
        prog.getElementById('cityIcon').style.height = "80px"
        ns6CityCheck.flag = dutchUnitLogo
        getTravelData()
        ns6Select()
      }
  }
  function getTravelData() {
    prog.getElementById("quebecTravelName").innerHTML = quebecCityCheck.cityName
    prog.getElementById("jamestownTravelName").innerHTML = jamestownCityCheck.cityName
    prog.getElementById("santoDomingoTravelName").innerHTML = santoDomingoCityCheck.cityName
    prog.getElementById("newAmsterdamTravelName").innerHTML = newAmsterdamCityCheck.cityName
    prog.getElementById("ns1TravelName").innerHTML = ns1CityCheck.cityName
    prog.getElementById("ns2TravelName").innerHTML = ns2CityCheck.cityName
    prog.getElementById("ns3TravelName").innerHTML = ns3CityCheck.cityName
    prog.getElementById("ns4TravelName").innerHTML = ns4CityCheck.cityName
    prog.getElementById("ns5TravelName").innerHTML = ns5CityCheck.cityName
    prog.getElementById("ns6TravelName").innerHTML = ns6CityCheck.cityName
    prog.getElementById("quebecFlag").style.backgroundImage = quebecCityCheck.flag
    prog.getElementById("jamestownFlag").style.backgroundImage = jamestownCityCheck.flag
    prog.getElementById("santoDomingoFlag").style.backgroundImage = santoDomingoCityCheck.flag
    prog.getElementById("newAmsterdamFlag").style.backgroundImage = newAmsterdamCityCheck.flag
    prog.getElementById("ns1Flag").style.backgroundImage = ns1CityCheck.flag
    prog.getElementById("ns2Flag").style.backgroundImage = ns2CityCheck.flag
    prog.getElementById("ns3Flag").style.backgroundImage = ns3CityCheck.flag
    prog.getElementById("ns4Flag").style.backgroundImage = ns4CityCheck.flag
    prog.getElementById("ns5Flag").style.backgroundImage = ns5CityCheck.flag
    prog.getElementById("ns6Flag").style.backgroundImage = ns6CityCheck.flag
  }

  function showTravelMenu() {
    prog.getElementById("cityTravelList").style.display = "inline-block"
  }
  function hideTravelMenu() {
    prog.getElementById("cityTravelList").style.display = "none"
  }
  