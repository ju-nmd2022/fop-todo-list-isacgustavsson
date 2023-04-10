const list_el = document.getElementById("list");
const create_btn_el = document.getElementById("create");

let todos = [];

create_btn_el.addEventListener("click", createNewTodo);

function createNewTodo() {
  const item = {
    id: new Date().getTime(),
    text: "",
    completed: false,
  };

  todos.unshift(item);

  const { item_el, input_el } = createTodoElement(item);

  list_el.prepend(item_el);

  input_el.removeAttribute("disabled");
  input_el.focus();

  save();
}

function createTodoElement(item) {
  const item_el = document.createElement("div");
  item_el.classList.add("item");

  const input_el = document.createElement("input");
  input_el.type = "text";
  input_el.value = item.text;
  input_el.setAttribute("disabled", "");

  const actions_el = document.createElement("div");
  actions_el.classList.add("actions");

  const edit_btn_el = document.createElement("button");
  edit_btn_el.classList.add("edit");
  edit_btn_el.innerText = "edit";

  const remove_btn_el = document.createElement("button");
  remove_btn_el.classList.add("remove");
  remove_btn_el.innerText = "remove";

  actions_el.append(edit_btn_el);
  actions_el.append(remove_btn_el);

  item_el.append(input_el);
  item_el.append(actions_el);

  //EVENTS

  input_el.addEventListener("input", () => {
    item.text = input_el.value;
  });

  input_el.addEventListener("blur", () => {
    input_el.setAttribute("disabled", "");
    save();
  });

  edit_btn_el.addEventListener("click", () => {
    input_el.removeAttribute("disabled");
    input_el.focus();
  });

  remove_btn_el.addEventListener("click", () => {
    todos = todos.filter((t) => t.id != item.id);

    item_el.remove();

    save();
  });

  return { item_el, input_el, edit_btn_el, remove_btn_el };
}

function displayTodos() {
  load();

  for (let i = 0; i < todos.length; i++) {
    const item = todos[i];

    const { item_el } = createTodoElement(item);

    list_el.append(item_el);
  }
}
displayTodos();

function save() {
  const save = JSON.stringify(todos);

  localStorage.setItem("my_todos", save);
}

function load() {
  const data = localStorage.getItem("my_todos");

  if (data) {
    todos = JSON.parse(data);
  }
}
