var entered, choosed;
var addElement, btnCompleted, btnDelete, result;

function completed() {
    entered = document.createElement("li")
    document.getElementById("listCompleted").appendChild(entered)

    choosed = event.currentTarget.parentNode
    choosed.childNodes[1].style.display="none"
    choosed.childNodes[2].setAttribute("onclick","deleted()")

    entered.innerHTML = choosed.innerHTML

    deleted()
}

function deleted() {
    choosed = event.currentTarget.parentNode
    choosed.remove()
}

function listAddFunc() {
  entered = document.getElementById("txtToDoList").value;

  if (entered != "") {

    addElement = document.createElement("li");
    document.getElementById("listToDo").appendChild(addElement);
    addElement.innerHTML = entered;

    btnCompleted = document.createElement("img");
    btnCompleted.setAttribute("src", "./completed.png");
    btnCompleted.setAttribute("id", "completedImage");
    addElement.appendChild(btnCompleted)
    btnCompleted.addEventListener("click", completed);

    btnDelete = document.createElement("img");
    btnDelete.setAttribute("src", "./delete.png");
    btnDelete.setAttribute("id", "deletedImage");
    addElement.appendChild(btnDelete)
    btnDelete.addEventListener("click", deleted);

  }else{
    alert("You Can Not Empty")
  }
}
