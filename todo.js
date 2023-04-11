//         todo application by isac Gustavsson.         //

/*   READ ME. 
 
 I based my application on a guide created by Tyler Potts on youtube.

 I have rewritten most of the code in my own way, although i have implemented

 some of the lines of code used in the guide directly from the source, which i will cite below where they are located.
 
                 ******** CREDIT *********                                                  
       
 Source: https://www.youtube.com/watch?v=UG2LXxILAnM&t=1017s

 Author: Tyler Potts.

 Publication date: 03 / 03 / 23

 */

// First i grab the div-element with the id of "list" and the button with the id of "adder" from the html file.

window.addEventListener("load", () => {
  const listElement = document.getElementById("list");
  const adderElement = document.getElementById("adder");

  // creating an array that will hold the todos.

  const todos = [];

  // making the button functional with an event-listener.

  adderElement.addEventListener("click", addnewTodo);

  // creating a item object that has properties that will be attached to the todos.

  const item = {
    id: new Date().getTime(),
    text: "",
    completed: false,
  };

  // <!-- <div class="content">
  // <input type="text" value="todo content." disabled />
  // <input type="checkbox" />
  // </div> -->

  function addnewTodo() {
    const contentElement = document.createElement("div");
    contentElement.classList.add("content");
    contentElement.setAttribute("id", new Date().getTime());

    // creating an input element that will display the text of a todo.

    todoContentText = document.createElement("input");
    todoContentText.type = "text";
    todoContentText.value = item.text; // item.text attaches the text property to the todo that is created.
    todoContentText.setAttribute("disabled", ""); // sets the element to disabled so that it's not editable.

    // creating the checkbox that will be displayed inside the todo.
    todoContentCheckbox = document.createElement("input");
    todoContentCheckbox.type = "checkbox";

    // apending the textbox and the checkbox to the div with the class of content.

    contentElement.append(todoContentText);
    contentElement.append(todoContentCheckbox);

    // appending the content-div to the todo-list.

    todoContentText.removeAttribute("disabled", "");

    listElement.appendChild(contentElement);
  }
});
