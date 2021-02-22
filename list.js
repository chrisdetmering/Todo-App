document.querySelector('.submit')
.addEventListener("click", displayTodo)

function displayTodo() {
    const todoInput = document.getElementById("todo-input"); 
    const todoText = todoInput.value; 
    if (todoText === '') { 
        alert("Enter a task");
        return; 
    }
    
    //homework: Follow the pattern I did and make a createDateSelector function
    //createDateSelector
    // const newItemName = document.createTextNode(todoText);
    // const dueBy = document.createElement("span")
    // dueBy.innerText = "Due By: "
    // dueBy.className = "dueBy"
    // const dateValue = document.getElementById("myDate").value;
    // const dueDate = document.createElement("input");
    // dueDate.type = "date";
    // dueDate.className = "dueDate";
    // dueDate.defaultValue = dateValue;


    const todo = createTodo(todoText); 
    document.getElementById("todoList").appendChild(todo);
   
    todoInput.value = "";
}


function createTodo(text) { 
    const todoListItem = document.createElement("li");
    const todoText = createTodoText(text); 
    const toggleTodoButton = createToggleTodoButton(todoText);
    const deleteButton = createDeleteButton(todoListItem); 
    
    todoListItem.append(toggleTodoButton);
    todoListItem.append(todoText); 
    todoListItem.append(deleteButton); 
    return todoListItem; 
}


function createTodoText(text) { 
    const todoText = document.createElement('p'); 
    todoText.textContent = text; 
    return todoText
}

function createToggleTodoButton(todoText) { 
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";
    checkbox.addEventListener("click", () => { 
        toggleTodo(todoText); 
    }); 
    return checkbox; 
}


function createDeleteButton(todoListItem) { 
    const deleteButton = document.createElement("button");
    const fire = document.createTextNode(" \uD83D\uDD25");
    deleteButton.className = "close";
    deleteButton.append(fire);
    deleteButton.addEventListener("click", () => { 
        deleteTodo(todoListItem); 
    }); 
    return deleteButton; 
}


function deleteTodo(todoListItem){
    todoListItem.remove();
}

function toggleTodo(todoText){
    todoText.classList.toggle("completed"); 
}

