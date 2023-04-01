const toDos = [];
let toDoList = document.getElementById("toDoList");
let addButton = document.getElementById("addButton");
let textBox = document.getElementById("textBox");

addButton.addEventListener("click", addToDoItem);

function addToDoItem() {
  const newItem = document.createElement("div");
  console.log(textBox.value);

    newItem.innerText = textBox.value;
    newItem.classList.add("toDo");
    toDoList.appendChild(newItem);
    toDos.push(newItem);
}
