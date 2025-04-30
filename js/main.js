"use strict";
const btnAddKitten = document.querySelector(".js-btn-add");
const catList = document.querySelector(".js-list");
const hiddenMenu = document.querySelector(".js-new-form");
const btnCancel = document.querySelector(".js-cancel");
const formAddNewKitten = document.querySelector(".js-form");

const searchButton=document.querySelector(".js_button-search");

const inputSearchDesc=document.querySelector(".js_in_search_desc");

const inputRace=document.querySelector(".js_inputRace");

const kittenRace1 = 'Siamés';
const kittenRace2 = 'Sphynx';
const kittenRace3 = 'Maine Coon';

const kittenDesc1 =  "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente."; 
const kittenDesc2 = "Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.";
const kittenDesc3 = "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta."; 

const kittenOne = `<li class="card">
            <article>
              <img
                class="card_img"
                src="https://dev.adalab.es/gato-siames.webp"
                alt="siames-cat"
              />
              <h3 class="card_title">Anastacio</h3>
              <h4 class="card_race">${kittenRace1}</h4>
              <p class="card_description">
              ${kittenDesc1}
              </p>
            </article>
          </li>`;

const kittenTwo = `<li class="card js-kittentwo">
  <img
    class="card_img"
    src="https://dev.adalab.es/sphynx-gato.webp"
    alt="sphynx-cat"
  />
  <h3 class="card_title">Fiona</h3>
  <h4 class="card_race">${kittenRace2}</h4>
  <p class="card_description">
  ${kittenDesc2}
  </p>
</li>`;

const kittenThree = `<li class="card js-kittenthree">
<img
  class="card_img"
  src="https://dev.adalab.es/maine-coon-cat.webp"
  alt="maine-coon-cat"
/>
<h3 class="card_title">Cielo</h3>
<h4 class="card_race">${kittenRace3}</h4>
<p class="card_description">
${kittenDesc3}
</p>
</li>`;

catList.innerHTML = kittenOne + kittenTwo + kittenThree;

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
  const descriptionSearchText = inputSearchDesc.value; // Recoge el valor del input de la descripción en una variable

  catList.innerHTML ='';

  if (kittenDesc1.includes(descriptionSearchText)){
    catList.innerHTML+=kittenOne;  
   
  }

  if (kittenDesc2.includes(descriptionSearchText)){
    catList.innerHTML+=kittenTwo; 
   
  }

  if (kittenDesc3.includes(descriptionSearchText)){
    catList.innerHTML+=kittenThree;  
   
  }

  // const breedText = inputRace.value;
  // // Recoge el valor del input de la raza en una variable

  // if (kittenRace1 === ""){
  //   breedText = `Uy que despiste, no sabemos su raza`;
  // } else {
  //   breedText = kittenRace1;
  // }
  
});

