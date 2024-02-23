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
      button.addEventListener("click", (event) => pageUpdate(event.target));
    });
    //Call page update to load the homepage since this is the initial page load
    //NOTE: This will mean refresh ALWAYS takes users back to this page
    pageUpdate(document.querySelector(".button1"));
  }

  //Called from nav buttons, first clear the page, then call to load the new content based on clicked button
  function pageUpdate(event) {
    //Update buttons to indicate current page
    buttons.forEach((button) => button.classList.remove("current"));
    event.classList.add("current");

    //Setup new page content
    let requestedPage = event.textContent;
    clearPage();
    loadPage(requestedPage);
  }

  //Clears the page to prep for new content
  function clearPage() {
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
