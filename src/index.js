import css from "./style.css";
import { showMenu } from "./menu.js";
import { showHome } from "./home.js";
import { showEvents } from "./events.js";

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
    if (page === "Menu") {
      mainContent.appendChild(showMenu());
    }
    if (page === "Home") {
      mainContent.appendChild(showHome());
    }
    if (page === "Events") {
      mainContent.appendChild(showEvents());
    }
  }

  return { setupPage };
})();

PageController.setupPage();
