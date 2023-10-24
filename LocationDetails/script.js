import afterSearchResult from "../jsonfiles/afterSearchResult.json" assert { type: "json" };
import buttonFilter from "../jsonfiles/buttonFilters.json" assert { type: "json" };

let searchButton = document.querySelector(".filter-button");
let filterButtons = document.querySelector(".filter-buttons");

function mapFilterButton() {
  let buttonFilter = "";
  afterSearchResult.map((i) => {
    buttonFilter += `
        <button class="btn btn-light rounded-pill"> ${i.titie}</button>
        `;
  });
  searchButton.innerHTML = buttonFilter;
}

function mapFilterButtons() {
  let buttons = "";
  buttonFilter.map((i) => {
    buttons += `
    <button class="btn btn-light">${i.title}</button>
    `;
  });
  filterButtons.innerHTML = buttons;
}
addEventListener("DOMContentLoaded", mapFilterButtons);

addEventListener("DOMContentLoaded", mapFilterButton);
