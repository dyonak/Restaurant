const showHome = () => {
  const container = document.createElement("div");
  container.classList.add("mainContent");

  let newDiv = document.createElement("div");
  newDiv.classList.add("pagetitle");

  let newContent = document.createTextNode("Home");
  newDiv.appendChild(newContent);

  container.appendChild(newDiv);

  newDiv = document.createElement("p");
  newDiv.classList.add("aboutpara");

  newContent = document.createTextNode(
    "Tequileria welcomes you to explore the finest collection of tequilas and mezcals this side of the Rio Grande. At Tequileria, we invite you to discover and enjoy all the traditions and flavors Mexico has to offer. Buen provecho!"
  );
  newDiv.appendChild(newContent);

  container.appendChild(newDiv);
  console.log(container);
  return container;
};

export { showHome };
