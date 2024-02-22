const showEvents = () => {
  const newDiv = document.createElement("div");
  newDiv.classList.add("pagetitle");

  const newContent = document.createTextNode("Events");
  newDiv.appendChild(newContent);
  return newDiv;
};

export { showEvents };
