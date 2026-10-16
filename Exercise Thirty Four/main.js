const list = document.querySelector("#list");
function addNew() {
  const newItem = document.createElement("li");
  newItem.textContent = "New Item";
  list.appendChild(newItem);
}

function removeItem() {
  if (list.lastChild) {
    list.removeChild(list.lastChild);
  }
}
