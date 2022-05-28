const submitButton = document.getElementById("add-item")
.addEventListener('click', addItem);

function addItem(e){
    e.preventDefault();
    //get value
    const getItem = document.getElementById("item");
    //create new li el
    const newListItem = document.createElement("li");
    //add class
    newListItem.className = 'u-list';
    const todoList = document.getElementById("list");

    //create checkboxes
    const strikeOut = document.createElement("input");
    strikeOut.setAttribute("type", "checkbox");
    strikeOut.className = "checkboxes";
    
    //invoke line-through for each new item
    strikeOut.addEventListener('click', () => crossOutItem(newListItem));

    //create remove btn for each new item
    const newRemoveBtn = document.createElement("button")
    newRemoveBtn.className = 'delete'
    newRemoveBtn.textContent = "Remove";
    newRemoveBtn.addEventListener("click", removeListItem);

    //append elements
    newListItem.textContent = getItem.value;
    todoList.appendChild(strikeOut);
    todoList.appendChild(newListItem);
    newListItem.appendChild(newRemoveBtn);

    
}

function removeListItem(e){
    e.preventDefault();
    let confirmRemove = confirm("Remove Item From List?");
    if (confirmRemove == true){
        e.target.parentElement.remove();
    }else{
        console.log("cancelled");
    }
}

function crossOutItem(element){
    //call CSS styling for line-through
    element.classList.toggle('check');
}

//---possible additions--
//clear text field
//todoList.addEventListener('click', clearTextField);
// function clearTextField(e){
//     e.preventDefault();
//     const textField = document.getElementById("item");
//     textField.value = "";
// }