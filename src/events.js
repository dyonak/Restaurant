const showEvents = () => {
  const container = document.createElement("div");
  container.classList.add("mainContent");

  let newDiv = document.createElement("div");
  newDiv.classList.add("pagetitle");

  let newContent = document.createTextNode("Events");
  newDiv.appendChild(newContent);

  container.appendChild(newDiv);

  let eventsDiv = document.createElement("div");
  eventsDiv.classList.add("events");

  eventsDiv.innerHTML =
    "<ul><li>March 3, 2024 - Mezcal Tasting</li><li>March 26, 2024 - Rare Bottle Swap Meet</li><li>April 13, 2024 - Agave Cultivation</li><li>April 28, 2024 - Tequila Region Culture</li></ul>";

  container.appendChild(eventsDiv);

  return container;
};

export { showEvents };
