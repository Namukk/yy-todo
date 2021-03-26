const toDoForm = document.querySelector(".toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".toDoList");

const toDos = [];

const toDoSave = () => {
  localStorage.setItem("TODOS_LS", JSON.stringify(toDos));
};

const writeToDo = (text) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");
  const newId = toDos.length + 1;
  const toDoObj = {
    text: text,
    id: newId,
  };
  const handleDelBtn = (event) => {
    if (event) {
      localStorage.removeItem();
    }
  };

  span.innerText = text;
  delBtn.innerHTML = "X";
  delBtn.addEventListener("click", handleDelBtn);
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
  toDoList.appendChild(li);
  toDos.push(toDoObj);
  toDoSave();
};

const handleSubmit = (event) => {
  event.preventDefault();
  const currentValue = toDoInput.value;
  writeToDo(currentValue);
  toDoInput.value = "";
};

const loadToDos = () => {
  const loadedToDos = localStorage.getItem("TODOS_LS");
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach((a) => {
      writeToDo(a.text);
    });
  }
};

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
