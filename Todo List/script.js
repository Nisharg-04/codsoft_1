const inputBox = document.getElementById("input");
const list = document.getElementById("tasks");
let button = document.getElementById("button");
button.addEventListener("click", () => {
  if (inputBox.value === "") {
    alert("You Should Write Something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    list.appendChild(li);
    let cross = document.createElement("span");
    cross.innerHTML = "\u00d7";
    li.appendChild(cross);
  }
  inputBox.value = "";
  saveData();
});

list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  }
  if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

const saveData = () => {
  localStorage.setItem("data", list.innerHTML);
};
const showData = () => {
  list.innerHTML = localStorage.getItem("data");
};
showData();
