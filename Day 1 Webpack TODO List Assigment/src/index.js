import "./index.css";


let dataarr = JSON.parse(localStorage.getItem("todo-list")) || [];
console.log(dataarr);
document.querySelector("#task-form").addEventListener("submit", addTask);
function addTask(e) {
  e.preventDefault();
  let task = document.querySelector(".add-todo-task").value;
  let time = document.querySelector(".task-time").value;

  let dataobj = {
    task: task,
    time: time,
  };

  dataarr.push(dataobj);
 
  localStorage.setItem("todo-list", JSON.stringify(dataarr));
  displayTask(dataarr);
}

function displayTask(dataarr) {
  document.querySelector("tbody").innerHTML = null;
  dataarr.map((elem) => {
    let row = document.createElement("tr");
    let tdata1 = document.createElement("td");
    tdata1.setAttribute("class","task");
    tdata1.textContent = elem.task;

    let tdata2 = document.createElement("td");
    tdata2.setAttribute("class","time");
    tdata2.textContent = elem.time;

    row.append(tdata1, tdata2);
    document.querySelector("tbody").append(row);
  });
}
displayTask(dataarr);
