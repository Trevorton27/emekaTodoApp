//status: when completed button clicked, removes all items in list. no cross out animation

const submitButton = document.getElementById("add-item").addEventListener('click', addItem);
const insertStrike = document.getElementById('list-item').addEventListener('click', crossOutItem);

function addItem(e){
    e.preventDefault();
    //get value
    let getItem = document.getElementById("item");
    //create new li el
    let newListItem = document.createElement("li");
    //add class
    newListItem.className = 'list-item';
    console.log(newListItem);
    
    const todoList = document.getElementById("list");

    const newRemoveBtn = document.createElement("button");
    newRemoveBtn.className = 'delete';

    newListItem.textContent = getItem.value;
    item.appendChild(newRemoveBtn);
    item.appendChild(newListItem);
   
}

function removeListItem(e){
    if (e.target.className.contains('delete')){
        console.log(2)
        if (confirm("Remove Item From List?")){
            let removeListItem = e.target.parentElement;
            item.removeChild(removeItem);
        }
    }

    let itemCompleted = document.getElementById("list-item");
    itemCompleted.removeChild(item);



}

function crossOutItem(){
    let crossOut = insertStrike.strike();

}
//Do this ONLY if you have time to spare and can quickly get it done
function searchItems(){

}