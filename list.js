document.querySelector('.submit')
.addEventListener("click", displayTodo) 


function displayTodo() {
    const input = document.getElementById("myInput");
    const inputValue = input.value; 
    if (inputValue === '') { 
        alert("Enter a task")
        return; 
    }
    
    const todo = createTodo(inputValue);
    document.getElementById("todoList")
    .append(todo);
   
    input.value = "";
}



//create date selector 
//home work. Make this like I make the other createXYZ 
// const dueBy = document.createElement("span")
// dueBy.innerText = "Due By: "
// dueBy.className = "dueBy"
// const dateValue = document.getElementById("myDate").value;
// const dueDate = document.createElement("input");
// dueDate.type = "date"; 
// dueDate.className = "dueDate";
// dueDate.defaultValue = dateValue;
// document.getElementById("myDate").value = "";



function createTodo(text) { 
    const todoListItem = document.createElement("li");
    const todoText = createTodoText(text); 
    const toggleTodoCheckBox = createToggleTodoCheckBox(todoText); 
    const deleteButton = createDeleteButton(todoListItem);
    
    todoListItem.append(toggleTodoCheckBox);
    todoListItem.append(todoText); 
    todoListItem.append(deleteButton); 
    return todoListItem; 
}


function createTodoText(text) { 
    const todoParagraph = document.createElement('p');
    todoParagraph.textContent = text; 
    return todoParagraph; 
}


function createToggleTodoCheckBox(todoText) { 
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";

    checkbox.addEventListener("click", () => { 
        toggleTodo(todoText); 
    })
    

    return checkbox; 
}

function createDeleteButton(todoListItem) { 
    const deleteButton = document.createElement("button");
    const fire = document.createTextNode(" \uD83D\uDD25");
    deleteButton.className = "close";
    deleteButton.append(fire);
    deleteButton.addEventListener('click', () => { 
        deleteTodo(todoListItem); 
    })
    
    return deleteButton; 
}


function deleteTodo(todoListItem){
    todoListItem.remove();
}

function toggleTodo(todoText){
    todoText.classList.toggle("completed"); 
}
