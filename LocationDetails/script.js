import afterSearchResult from "../jsonfiles/afterSearchResult.json" assert { type: "json" };

let searchButton = document.querySelector(".filter-button");

function mapFilterButton() {
  let buttonFilter = "";
  afterSearchResult.map((i) => {
    buttonFilter += `
        <button class="btn btn-light rounded-pill"> ${i.titie}</button>
        `;
  });
  searchButton.innerHTML = buttonFilter;
}

addEventListener("DOMContentLoaded", mapFilterButton);
