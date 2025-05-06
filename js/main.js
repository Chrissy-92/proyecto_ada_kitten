"use strict";

//QUERYSELECTOR 

const btnAddKitten = document.querySelector(".js-btn-add");
const catList = document.querySelector(".js-list");
const hiddenMenu = document.querySelector(".js-new-form");
const btnCancel = document.querySelector(".js-cancel");
const formAddNewKitten = document.querySelector(".js-form");

const searchButton=document.querySelector(".js_button-search");

const inputSearchDesc=document.querySelector(".js_in_search_desc");

const inputRace=document.querySelector(".js-input-race");

const kittenImg1= "https://dev.adalab.es/gato-siames.webp";
const kittenName1= "Anastacio";

const kittenImg2= "https://dev.adalab.es/sphynx-gato.webp";
const kittenName2= "Fiona";

const kittenImg3= "https://dev.adalab.es/maine-coon-cat.webp";
const kittenName3= "Cielo";




const kittenDesc1 =  "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente."; 
const kittenDesc2 = "Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.";
const kittenDesc3 = "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta."; 

//OBJETO

const raceKitten= {
  kittenRace1:"Siamés",
  kittenRace2:"Sphynx",
  kittenRace3: "Uy que despiste,no sabemos su raza",
  /*"Maine Coon",*/
  }
  

const kittenOne = `<li class="card">
            <article>
              <img
                class="card_img"
                src= ${kittenImg1}
                alt="siames-cat"
              />
              <h3 class="card_title"> ${kittenName1}  </h3>
              <h4 class="card_race">${raceKitten.kittenRace1}</h4>
              <p class="card_description">
              ${kittenDesc1}
              </p>
            </article>
          </li>`;

const kittenTwo = `<li class="card js-kittentwo">
  <img
    class="card_img"
    src= ${kittenImg2} 
    alt="sphynx-cat"
  />
  <h3 class="card_title">  ${kittenName2} </h3>
  <h4 class="card_race">${raceKitten.kittenRace2}</h4>
  <p class="card_description">
  ${kittenDesc2}
  </p>
</li>`;

const kittenThree = `<li class="card js-kittenthree">
<img
  class="card_img"
  src=${kittenImg3} 
  alt="maine-coon-cat"
/>
<h3 class="card_title">${kittenName3} /h3>
<h4 class="card_race">${raceKitten.kittenRace3}</h4>
<p class="card_description">
${kittenDesc3}
</p>
</li>`;



//FUNCIONES Y EVENTOS

catList.innerHTML = kittenOne + kittenTwo + kittenThree;
//Aquí mostramos los 3 cromos de los gatitos en el DOM desde JS


btnAddKitten.addEventListener("click", () => {
  hiddenMenu.classList.toggle("collapsed");
});

btnCancel.addEventListener("click", (event) => {
  event.preventDefault();
  hiddenMenu.classList.add("collapsed");
  formAddNewKitten.reset();

});

searchButton.addEventListener("click", (ev) => {
  ev.preventDefault();
  const descriptionSearchText = inputSearchDesc.value.trim().toLowerCase(); // Recoge el valor del input de la descripción en una variable

  const breedText= inputRace.value.trim().toLowerCase();
  //Recoge el valor del input de la raza en una variable

  catList.innerHTML ='';

  if (
    (descriptionSearchText === '' && breedText === '') ||
   (descriptionSearchText !== '' && kittenDesc1.toLowerCase().includes(descriptionSearchText)) ||(breedText !== '' && raceKitten.kittenRace1.toLowerCase().includes (breedText)))
    {
    catList.innerHTML+=kittenOne;  
   
  }

  if (
    (descriptionSearchText === '' && breedText === '') ||
    (descriptionSearchText !== '' && kittenDesc2.toLowerCase().includes(descriptionSearchText)) ||(breedText !== '' && raceKitten.kittenRace2.toLowerCase().includes (breedText)))
     {
    catList.innerHTML+=kittenTwo; 
   
  }

  if (
    (descriptionSearchText === '' && breedText === '') ||
    (descriptionSearchText !== '' && kittenDesc3.toLowerCase().includes(descriptionSearchText)) ||(breedText !== '' && raceKitten.kittenRace3.toLowerCase().includes (breedText)))
     {
    catList.innerHTML+=kittenThree; 
    } 
   
   });

  

 
 

   