//         todo application by isac Gustavsson.         //

/*   READ ME. 
 
 I based my application on a tutorial created by Tyler Potts on youtube.
 I have written most of the code in my own way, although i have implemented
 some of the lines of code used in the guide directly from the source, 
 which i will cite below where they are located.
 
                 ******** CREDIT *********                                                  
       
 Source: https://www.youtube.com/watch?v=UG2LXxILAnM&t=1017s

 Author: Tyler Potts.

 Publication date: 03 / 03 / 23

 */

// First i grab the div-element with the id of "list" and the button with the id of "adder" from the html file.

window.addEventListener("load", () => {
  const listElement = document.getElementById("list");
  const adderElement = document.getElementById("adder");

  // making the button functional with an event-listener.

  adderElement.addEventListener("click", addnewTodo);

  function addnewTodo() {
    const contentElement = document.createElement("div");
    contentElement.classList.add("content");

    // creating an input element that will display the text of a todo.

    todoContentText = document.createElement("input");
    todoContentText.type = "text";
    todoContentText.value = todoContentText.value;
    todoContentText.setAttribute("disabled", "");
    todoContentText.setAttribute("id", new Date().getTime());

    // creating the checkbox that will be displayed inside the todo.

    todoContentCheckbox = document.createElement("input");
    todoContentCheckbox.type = "checkbox";

    // creating a delete button that will be displayed inside the todo.

    todoContentDeleteButton = document.createElement("button");
    todoContentDeleteButton.classList.add("delete");
    todoContentDeleteButton.innerText = "delete.";
    todoContentDeleteButton.setAttribute("id", new Date().getTime());

    /* apending the textbox, checkbox and the delete button to the div
    with the class of content. */

    contentElement.appendChild(todoContentText);
    contentElement.appendChild(todoContentCheckbox);
    contentElement.appendChild(todoContentDeleteButton);

    // appending the content-div to the todo-list.

    todoContentText.removeAttribute("disabled", "");

    listElement.prepend(contentElement);

    // i got stuck here on a bug and ended up asking ChatGPT for help.

    // todoContentCheckbox.addEventListener("change", (e) => {
    //   // e.target.getAttribute("id");
    //   // if (e.target.id.classList != "complete") {
    //   //   e.target.classList.add("complete");
    //   //   e.target.id.setAttribute("disabled", "disabled");
    //   // } else return;
    // });

    // This is the code that ChatGPT provided.

    todoContentCheckbox.addEventListener("change", (e) => {
      const todoContentId = e.target.previousSibling.id;
      const textInput = document.getElementById(todoContentId);

      if (!e.target.checked) {
        textInput.classList.remove("complete");
        textInput.removeAttribute("disabled");
      } else {
        textInput.classList.add("complete");
        textInput.setAttribute("disabled", "");
      }
    });

    // Modifying the previous lines of code for my delete button.

    todoContentDeleteButton.addEventListener("click", (e) => {
      const todoContentId = e.target.id;
      const currentTodo = document.getElementById(todoContentId);

      contentElement.remove(currentTodo);
    });
  }
});
