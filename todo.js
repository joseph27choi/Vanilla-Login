const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

// this holds the key name
const TODOS_KEYS = 'todos'

// this holds all the todos that were inputted to be stored in local storage
const toDos = []

/* FUNCTION DECLARATION AND DEFINITION */

// Will create a new <li> with whatever the user inputted
// newToDo is now an object
const paintToDo = (newTodo) => {
    const li = document.createElement("li");
    // will also create a span inside the li
    const span = document.createElement("span")
    // also add button on the side of todo
    const button = document.createElement("button")

    // make the button look like an X
    button.innerText = "❌"

    // this makes li the parent of span and button
    li.appendChild(span);
    li.appendChild(button);


    // put newToDo as the text of the span
    span.innerText = newTodo.task

    // now that this is an object, I have the power to add the tag id as the object's id number
    li.id = newTodo.id

    // now must put the li to the list
    toDoList.appendChild(li);

    // add event listener to the button in case user wants to delete
    button.addEventListener("click", () => {
        // have to make a copy that filters out the clicked id
        li.remove();

        // can I pop the unneeded one?
        toDos.map( (todo) => {
            if(todo.id == li.id) {
                toDos.remove()
            }
        })
    });
}

const saveToDos = (value) => {
    // will store a dictionary in the local storage
    // key is "todos"
    // value is the toDos array stringified
    localStorage.setItem(TODOS_KEYS, JSON.stringify(value));

    // the reason why this was overwriting the old todos was because we are pushing it into a new array and not saving it
    // to avoid this, we should either initialize the toDos array with the old ones with a map
    // or we can push it to another one and concat it
}


/* LOAD PAGE */

// this is for loading up the todos that were previously saved to local storage
// .getItem() fetches the value if given a parameter of the key name
const savedToDos = localStorage.getItem(TODOS_KEYS);

// but since this only has the values as a string, must revert it back to array
// use JSON.parse() to do so, but only if not a nullpointer
if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);

    parsedToDos.map((oldTodo) => {
        // transfer the old todos into the array
        toDos.push(oldTodo);
        // now go through the toDos array and paint every single value there
        paintToDo(oldTodo);
    })
}


/* EVENT LISTENER */

// this is listening for the user to submit 
toDoForm.addEventListener("submit", (evt) => {

    evt.preventDefault();
    // copy the todo string by value
    const newTodo = (toDoInput.value);
    
    // save the todos
    // don't want to push just the string, want to push a dictionary
    // the dictionary should be of the form {'id': Date.now(), 'task': newTodo}
    const newTodoDict = {
        'id': Date.now(),
        'task': newTodo,
    }
    
    toDos.push(newTodoDict);
    
    
    // this will paint the new todo that the user submits
    paintToDo(newTodoDict);
    
    // need to save it into local storage but the issue is that local storage only holds strings
    // therefore need to convert the array into a string to store
    // use JSON.stringy() to make it an object first
    saveToDos(toDos);
    
    // empty the original, still saved in copy
    toDoInput.value = "";
    
});





