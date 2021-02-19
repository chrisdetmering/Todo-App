// Create a new list item when clicking on the "Add Item" button
function newItem() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var newItemName = document.createTextNode(inputValue);
    li.appendChild(newItemName);
    if (inputValue === '') {
      alert("Enter a task");
    } else {
      document.getElementById("items").appendChild(li);
    }
    document.getElementById("myInput").value = "";
  
    var closeBtn = document.createElement("button");
    var fire = document.createTextNode(" \uD83D\uDD25");
    closeBtn.className = "close";
    closeBtn.appendChild(fire);
    li.appendChild(closeBtn);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }
      // var dateValue = document.getElementById("do-by").value;
    // var itemDate = document.createTextNode(inputValue);