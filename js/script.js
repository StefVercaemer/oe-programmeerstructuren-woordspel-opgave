"use strict";

var txtWoord, divResultaat;

window.addEventListener('load', Initieer);

function Initieer() {
  KoppelDomElementen();
  StandaardInput();
}

function KoppelDomElementen() {
  txtWoord = document.getElementById("txtWoord");
  divResultaat = document.getElementById("divResultaat");
  let btnVertikaal = document.querySelector("#btnVertikaal");
  btnVertikaal.addEventListener("click", ToonVertikaal);
  let btnKeerOm = document.querySelector("#btnKeerOm");
  btnKeerOm.addEventListener("click", KeerOm);
  let btnEersteA = document.querySelector("#btnEersteA");
  btnEersteA.addEventListener("click", GeefPlaatsEersteA);
  let btnPalindroom = document.querySelector("#btnPalindroom");
  btnPalindroom.addEventListener("click", CheckPalindroom);
}

//Overloop het ingetikte woord met een lus en geef alle letters onder elkaar weer in divResultaat.
function ToonVertikaal() {
  //Declareer variabelen
  let woord, woordVertikaal = "";
  let aantalLetters;
  woord = txtWoord.value;
  aantalLetters = woord.length;
  for (let index = 0; index < aantalLetters; index++) {
    let teken = woord.charAt(index);
    woordVertikaal += teken + '<br />';
    console.log(index + ': Teken: ' + teken);
  }
  divResultaat.innerHTML = woordVertikaal;
  //Haal info uit de GUI
  //Voer de nodige bewerkingen uit
  //Geef feedback
}

//Overloop het ingetikte woord met een lus en 
//bouw een nieuwe tekst op die het woord omgekeerd opslaat. 
//Geef het resultaat weer in divResultaat.
function KeerOm() {
  let woord, omgekeerdWoord = "";
  let woordLengte;
  woord = txtWoord.value;
  woordLengte = woord.length;
  for (let index = woordLengte - 1; index >= 0; index--) {
    const teken = woord[index];
    omgekeerdWoord += teken;
  }
  // for (let index = 0; index < woordLengte; index++) {
  //   const teken = woord[index];
  //   omgekeerdWoord = teken + omgekeerdWoord;
  // }
  divResultaat.innerText = omgekeerdWoord;
}

//Overloop het ingetikte woord met een lus en bouw een nieuwe tekst op die het woord omgekeerd opslaat. 
//Geef het resultaat weer in divResultaat.
function CheckPalindroom() {
  let woord, omgekeerdWoord = "";
  let woordLengte;
  let feedback;
  woord = txtWoord.value;
  woordLengte = woord.length;
  for (let index = woordLengte - 1; index >= 0; index--) {
    const teken = woord[index];
    omgekeerdWoord += teken;
  }
  if (omgekeerd == woord) {
    feedback = `${woord} is een palindroom`;
  } else {
    feedback = `${woord} is geen palindroom`;
  }
  feedback = (omgekeerd == woord) ? `${woord} is een palindroom`:`${woord} is geen palindroom`;
  divResultaat.innerHTML = feedback;
}

//Overloop het ingetikte woord met een do ... while lus tot aan de eerste 'a'. Indien er een a gevonden is wordt in divResultaat de tekst 'De eerste a staat op plaats x' weergegeven. 
//Anders wordt in divResultaat de tekst 'Er staat geen a in het woord' weergegeven.
function GeefPlaatsEersteA() {
  let woord;
  let woordLengte;
  let plaats = 0;
  let gevonden = false;
  woord = txtWoord.value;
  woordLengte = woord.length;
  while(plaats < woordLengte && !gevonden){
      if (woord.substr(plaats, 1).toLowerCase() == "a") {
        gevonden = true;
      }
      plaats++;
  }
  divResultaat.innerHTML = gevonden ? "De a staat op plaats " + plaats : "Geen a gevonden";
}



function StandaardInput() {
  txtWoord.value = "radarke";
}



