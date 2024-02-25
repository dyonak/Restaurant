const showMenu = () => {
  const container = document.createElement("div");
  container.classList.add("mainContent");

  let newDiv = document.createElement("div");
  newDiv.classList.add("pagetitle");

  let newContent = document.createTextNode("Menu");
  newDiv.appendChild(newContent);

  container.appendChild(newDiv);

  let menuDiv = document.createElement("div");
  menuDiv.classList.add("menu");

  menuDiv.innerHTML =
    "<ul><li>Conchica Blue</li><li>Juan Cusquena 20 anos</li><li>Madre Vizuvo (Mezcal)</li><li>Don Pimon</li><li>Consuela Serpente</li></ul>";

  container.appendChild(menuDiv);

  return container;
};

export { showMenu };
