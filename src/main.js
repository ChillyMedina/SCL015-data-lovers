import orderFunctions from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

// console.log(alphabetOrderAZ, data);


//---------FUNCION HIDDEN-----------------------------------
document.getElementById("startButton")
  .addEventListener("click", function () {
    document.getElementById("welcomeScreen").hidden = true;
    document.getElementById("charactersScreen").hidden = false;
  }, false);
document.getElementById("returnButton")
  .addEventListener("click", function () {
    document.getElementById("charactersScreen").hidden = true;
    document.getElementById("welcomeScreen").hidden = false;
  }, false);
//--------------------------------------------------------
let printCharacters = data.results;
const listOfCharacters = document.getElementById("listCharacters");
const searchBar = document.getElementById("searchBar");
//-------------LLAMAR LISTA DE PERSONAJES-----------------

const charactersList = (characters) => {
  //Declaro una variable para imprimir la lista de personajes
  let list = "";
  document.getElementById("listCharacters").innerHTML = "";
  //Incio el bucle
  for (let i = 0; i < characters.length; i++) {
    list += `
    <div class= "cardContainer">
      <div id="printCharacters" class="cardContainer-inner">
        <div class="frontCard">
          <img id="photo" class="photo" src="${characters[i].image}"/>
          <div class="nametag">
          <p id="nameChar" class="name-frontcard">${characters[i].name}</p>
          </div>
        </div>
        <div class="backCard">
              <p id="nameChar" class="name-backcard">${characters[i].name}</p>
            <div class="infoChar"> 
              <div class="propertyFlex">
              <p class="propertyStyle">Status:</p>
              <p id="statusChar" class="cardText">${characters[i].status}</p><br>
            </div>
            <div class="propertyFlex">
              <p class="propertyStyle">Specie: </p>
              <p id="specieChar" class="cardText">${characters[i].species}</p><br>
            </div>
            <div class="propertyFlex">
              <p class="propertyStyle">Gender: </p>
              <p id="genderChar" class="cardText">${characters[i].gender}</p><br>
            </div>
            </div>
        </div>
      </div>
    </div>`;
    // console.log(characters[i]);
  }
  document.getElementById("listCharacters").innerHTML = list;
}
charactersList(printCharacters);

//------------------SELECT PARA ORDENAR----------------
let select = document.getElementById("selectOrderValue");
select.addEventListener("change", function () {

  if (select.value === "AZorder") {
    listOfCharacters.innerHTML = "";
    let array = orderFunctions.orderAZ(printCharacters);
    printCharacters = array;
    charactersList(printCharacters);
    document.getElementById("listCharacters").innerHTML = charactersList(characters);
  }
  else if (select.value === "ZAorder") {
    let array = orderFunctions.orderZA(printCharacters);
    printCharacters = array;
    charactersList(printCharacters);
    document.getElementById("listCharacters").innerHTML = charactersList(characters);
  }
  else {
    let array = orderFunctions.orderDefault(printCharacters);
    printCharacters = array;
    charactersList(printCharacters)
    document.getElementById("listCharacters").innerHTML = charactersList(characters);
  }
});

//------------------------SEARCH------------------------

searchBar.addEventListener('keyup', (e) => {
  const searchTarget = e.target.value;
  const filteredCharacters = printCharacters.filter( character => {
    return  (
      character.name.includes(searchTarget)
    );
  });
  // console.log(filteredCharacters)
  charactersList(filteredCharacters);
})

//------------------CHECKSQUARE PARA FILTRAR----------------

const onlyAlive = printCharacters.filter((character) => {
  return character.status === "Alive";
});
// console.log(onlyAlive);
const checkAlive = document.querySelector('#aliveCheck');
checkAlive.addEventListener('click', (event) => {
  if (event.target.checked === true) {
    charactersList(onlyAlive);
    document.getElementById("listCharacters").innerHTML = charactersList(characters);
  } else {
    charactersList(printCharacters)
    document.getElementById("listCharacters").innerHTML = charactersList(characters);
  }
});

const onlyDead = printCharacters.filter((character) => {
  return character.status === "Dead";
});
// console.log(onlyDead);
const checkDead = document.querySelector('#deadCheck');
checkDead.addEventListener('click', (event) => {
  if (event.target.checked === true) {
    charactersList(onlyDead);
    document.getElementById("listCharacters").innerHTML = charactersList(characters);
  } else {
    charactersList(printCharacters)
    document.getElementById("listCharacters").innerHTML = charactersList(characters);
  }
});

const unkStatus = printCharacters.filter((character) => {
  return character.status === "unknown";
});
// console.log(unkStatus);
const checkUnkStatus = document.querySelector('#unknownStatusCheck');
checkUnkStatus.addEventListener('click', (event) => {
  if (event.target.checked === true) {
    charactersList(unkStatus);
    document.getElementById("listCharacters").innerHTML = charactersList(characters);
  } else {
    charactersList(printCharacters)
    document.getElementById("listCharacters").innerHTML = charactersList(characters);
  }
});

const onlyHuman = printCharacters.filter((character) => {
  return character.species === "Human";
});
// console.log(onlyHuman);
const checkHuman = document.querySelector('#humanCheck');
checkHuman.addEventListener('click', (event) => {
  if (event.target.checked === true) {
    charactersList(onlyHuman);
    document.getElementById("listCharacters").innerHTML = charactersList(characters);
  } else {
    charactersList(printCharacters)
    document.getElementById("listCharacters").innerHTML = charactersList(characters);
  }
});

const onlyAlien = printCharacters.filter((character) => {
  return character.species === "Alien";
});
// console.log(onlyAlien);
const checkAlien = document.querySelector('#alienCheck');
checkAlien.addEventListener('click', (event) => {
  if (event.target.checked === true) {
    charactersList(onlyAlien);
    document.getElementById("listCharacters").innerHTML = charactersList(characters);
  } else {
    charactersList(printCharacters)
    document.getElementById("listCharacters").innerHTML = charactersList(characters);
  }
});

const unkSpecie = printCharacters.filter((character) => {
  return character.species === "unknown";
});
// console.log(unkSpecie);
const checkUnkSpecie = document.querySelector('#unknownSpecieCheck');
checkUnkSpecie.addEventListener('click', (event) => {
  if (event.target.checked === true) {
    charactersList(unkSpecie);
    document.getElementById("listCharacters").innerHTML = charactersList(characters);
  } else {
    charactersList(printCharacters)
    document.getElementById("listCharacters").innerHTML = charactersList(characters);
  }
});