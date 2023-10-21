import travelDestination from "../jsonfiles/travelDestination.json" assert { type: "json" };
import futureGetaways from "../jsonfiles/futureGetaways.json" assert { type: "json" };

let travelCards = document.querySelector(".travelCards");
let getaways = document.querySelector(".getaways");
let location = document.querySelector(".location");
let checkIn = document.querySelector(".checkin")
let checkOut = document.querySelector(".checkout");
let guests = document.querySelector(".guests")

function mapCards() {
  let cards = "";
  travelDestination.map((i) => {
    cards += `
          <div class="w-100 h-100 border border-dark " style="background-color: ${i.bgColor};">
            <img class="w-100 h-100" src="${i.image}" alt="poster">
            <h4>${i.name}</h4>
            <p>${i.description}</p>
          </div>
      `;
  });
  travelCards.innerHTML = cards;
}

function futureGetawaysData() {
  let data = "";
  futureGetaways.map((i) => {
    data += `
      <div class = "mx-5">
      <h5>${i.header}</h5>
      <p>${i.description}</p>
    </div>
      `;
  });
  getaways.innerHTML = data;
}

function getLocation(){
  console.log(location.value)
  console.log(checkIn.value)
  console.log(checkOut.value)
  console.log(guests.value)
}

addEventListener("input",getLocation)

addEventListener("DOMContentLoaded", futureGetawaysData);

addEventListener("DOMContentLoaded", mapCards);
