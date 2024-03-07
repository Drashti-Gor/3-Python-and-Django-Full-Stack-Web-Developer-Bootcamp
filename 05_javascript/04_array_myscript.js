
var start = prompt("Would you like to start the roster web app? y/n");
var arr = [];
function add(){
    addElement = prompt("What name would you like to add? ");
    arr.push(addElement);
} 
function remove(){
    removeElement = prompt("Which element would you like to remove? ");
    arr.splice(arr.indexOf(removeElement),1);
}
function display(){
    console.log(arr);
}
if(start == 'y'){
    while(action != 'quit'){
            var action = prompt("Please select an action: add, remove, display or quit.");
            if(action == 'add'){
                add();
            }
            else if(action == 'remove'){
                remove();
            }
            else if(action == 'display'){
                display();
            }
    }
}