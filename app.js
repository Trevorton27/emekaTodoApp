//status: when completed button clicked, removes all items in list. no cross out animation

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


    let s = document.createElement("input");
    s.setAttribute("tpye", "checkbox");
    s.className = "checkboxes"
    s.addEventListener('click', crossOutItem);


    const newRemoveBtn = document.createElement("button")
    newRemoveBtn.className = 'delete'
    newRemoveBtn.textContent = "Remove";
    newRemoveBtn.addEventListener("click", removeListItem);
    newListItem.textContent = getItem.value;
    todoList.appendChild(s);
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
function crossOutItem(e){
    e.preventDefault();
    //e.target.parentElement.crossOutItem();
    //e.target.parentElement.style.textDecoration = 'line-through';
    //"\u0336" + e.target.parentElement;
    //crossOut.className = "strike-class";
    //strike.innerText = "test";
    //strike.parentElement.style.setProperty("text-decoration", "line-through");
    console.log(1)
    // let crossOut = document.createElement("checkbox");
    // crossOut.className = 'check';




}
//Do this ONLY if you have time to spare and can quickly get it done
// function searchItems(){
// }
function testGitHub(){
    //test
}