const showMenu = () => {
  const newDiv = document.createElement("div");
  newDiv.classList.add("pagetitle");

  const newContent = document.createTextNode("Menu");
  newDiv.appendChild(newContent);
  return newDiv;
};

export { showMenu };
