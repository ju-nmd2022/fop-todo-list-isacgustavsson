const toDos = [];
let toDoList = document.getElementById("toDoList");
let addButton = document.getElementById("addButton");
let textBox = document.getElementById("textBox");
let removeButton = document.createElement("button");

addButton.addEventListener("click", itemHandler);

function itemHandler() {
  let newItem = document.createElement("div");
  let removeButton = document.createElement("button");

  removeButton.addEventListener("click", removeToDoItem);

  newItem.innerText = textBox.value;
  newItem.classList.add("toDo");
  toDoList.appendChild(newItem);
  toDos.push(newItem);

  removeButton.classList.add("toDo");
  removeButton.setAttribute("id", "removeButton");
  removeButton.innerText = "remove.";
  newItem.appendChild(removeButton);
}

function removeToDoItem() {
  console.log("it works");
}
