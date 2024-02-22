import css from "./style.css";
import Menu from "./menu.js";

const buttons = document.querySelectorAll(".navbutton");
const mainContent = document.querySelector("#content");

let PageController = (function () {
  //Get the buttons from nav and add event listeners
  function setupPage() {
    buttons.forEach((button) => {
      button.addEventListener("click", (event) => pageUpdate(event));
    });
  }

  //Called from nav buttons, first clear the page, then call to load the new content based on clicked button
  function pageUpdate(event) {
    let requestedPage = event.target.textContent;
    console.log("Update requested for page.");
    clearPage();
    loadPage(requestedPage);
  }

  //Clears the page to prep for new content
  function clearPage() {
    console.log("Clearing page.");
    mainContent.replaceChildren();
  }

  //Loads the page, dummy div for now - needs to be updated to load from external js that's imported
  //That js will fully build the mainContent for it's page (e.g. menu.js for the menu nav button)
  function loadPage(page) {
    console.log("Loading " + page + " page.");
    const newDiv = document.createElement("div");
    newDiv.classList.add("pagetitle");

    const newContent = document.createTextNode(page);

    newDiv.appendChild(newContent);
    mainContent.appendChild(newDiv);
  }

  return { setupPage, pageUpdate, clearPage, loadPage };
})();

PageController.setupPage();
