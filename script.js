function gettask(){
    const task = document.getElementById("task").value;
    return task;
}
function addtask(){
    const task = gettask();
    if(task === ""){
        alert("Please enter a task.");
        return;
    }
    const li = document.createElement("li");
    li.textContent = task;

    const deletebutton = document.createElement("button");
    deletebutton.textContent = "Delete";
    deletebutton.onclick = li.remove();

    document.getElementById("tasklist").appendChild(li);
      document.getElementById("task").value = "";

}