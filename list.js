// creates element of the to-do item
function newItem() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var newItemName = document.createTextNode(inputValue);
    var dueBy = document.createElement("span")
    dueBy.innerText = "Due By: "
    dueBy.className = "dueBy"
    var dateValue = document.getElementById("myDate").value;
    var dueDate = document.createElement("input");
    dueDate.type = "date";
    dueDate.className = "dueDate";
    dueDate.defaultValue = dateValue;
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    var closeBtn = document.createElement("button");
    var fire = document.createTextNode(" \uD83D\uDD25");
    closeBtn.className = "close";
    closeBtn.appendChild(fire);
// Creates line item with all the pieces, if not blank 
    li.append(checkbox,"   ",newItemName," ",dueBy,dueDate,"  ",closeBtn);
    if (inputValue === '') {
      alert("Enter a task");
    } else {
      document.getElementById("items").appendChild(li);
    }
//reset inputs
    document.getElementById("myInput").value = "";
    document.getElementById("myDate").value = "";
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }

// fire button functionality