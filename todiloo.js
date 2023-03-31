const toDos = ["👻", "💀", "💩"];
const toDoList = document.getElementById("toDoList");
const toDoInput = document.getElementById("toDoInput");

for (let toDo of toDos) {
  const toDoItem = document.createElement("div");
  toDoItem.innerText = toDo;
  toDoItem.classList.add("toDo");
  toDoList.appendChild(toDoItem);
}

function addToDoItem() {
  
}