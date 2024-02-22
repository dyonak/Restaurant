const showHome = () => {
  const newDiv = document.createElement("div");
  newDiv.classList.add("pagetitle");

  const newContent = document.createTextNode("Home");
  newDiv.appendChild(newContent);
  return newDiv;
};

export { showHome };
