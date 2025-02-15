document.getElementById("taskInput").addEventListener("keypress", function(event){
    if (event.key == "Enter"){
        changedInput();
        addTask();
    } 
});
function changedInput(){
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    const add_btn = document.getElementById("add-btn");
    console.log(taskText);
    if (taskText === "") {
       add_btn.classList.add("empty");
       return;
    } else {
        add_btn.classList.remove("empty");
        return;
    }
}
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    console.log(taskText);
    if (taskText === "") {
        return;    
    }
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onchange = () => li.classList.toggle("done");
    
    const span = document.createElement("span");
    span.textContent = taskText;
    
    const button = document.createElement("button");
    button.textContent = "Delete";
    button.classList.add("delete-btn")
    button.onclick = () => li.remove();
    
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(button);
    
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}