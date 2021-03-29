const toDoForm = document.querySelector(".toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".toDoList"),
  willDoList = document.querySelector(".willDoList");

let toDos = [];
let willDos = [];

const toDoSave = () => {
  localStorage.setItem("TODOS_LS", JSON.stringify(toDos));
};

const willDoSave = () => {
  localStorage.setItem("WILLDOS_LS", JSON.stringify(willDos));
};

const handleDelBtn = (event) => {
  const delLi = event.target.parentNode;
  toDoList.removeChild(delLi);
  const cleanToDos = toDos.filter((a) => {
    return a.id !== parseInt(delLi.id);
    //+delLi 해도 됨. ""delLi라고 하면 string화
  });
  toDos = cleanToDos;
  toDoSave();
};

const handlePoDelBtn = (event) => {
  const delLi = event.target.parentNode;
  willDoList.removeChild(delLi);
  const cleanToDos = willDos.filter((a) => {
    return a.id !== parseInt(delLi.id);
    //+delLi 해도 됨. ""delLi라고 하면 string화
  });
  willDos = cleanToDos;
  willDoSave();
};

const handlePoBtn = (event) => {
  const li = event.target.parentNode;
  toDoList.removeChild(li); //todolist에서 삭제(html)
  const changeToDos = toDos.filter((a) => {
    return a.id === parseInt(li.id);
  }); // willdolist에 추가(넘기기)
  const cleanToDos = toDos.filter((a) => {
    return a.id !== parseInt(li.id); //todolist에서 빼고 남은거 리턴
  });
  //Todo list에서 지우기
  toDos = cleanToDos;
  willDos = willDos.concat(changeToDos); //넘어온거 더하기
  toDoSave();
  willDoSave();
};

const writeToDo = (text) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const poBtn = document.createElement("button");
  const delBtn = document.createElement("button");
  const newId = toDos.length + 1;
  const toDoObj = {
    text: text,
    id: newId,
  };

  span.innerText = text;
  delBtn.innerHTML = "X";
  poBtn.innerHTML = "↩️";
  delBtn.addEventListener("click", handleDelBtn);
  poBtn.addEventListener("click", handlePoBtn);
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(poBtn);
  li.id = newId;
  toDoList.appendChild(li);
  toDos.push(toDoObj);
  toDoSave();
};

const writeWillDo = (text) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const poBtn = document.createElement("button");
  const delBtn = document.createElement("button");
  const newId = willDos.length + 1;
  const toDoObj = {
    text: text,
    id: newId,
  };

  span.innerText = text;
  delBtn.innerHTML = "X";
  // poBtn.innerHTML = "↩️";
  delBtn.addEventListener("click", handlePoDelBtn);
  // poBtn.addEventListener("click", handlePoBtn);
  li.appendChild(span);
  li.appendChild(delBtn);
  // li.appendChild(poBtn);
  li.id = newId;
  willDoList.appendChild(li);
  willDos.push(toDoObj);
  willDoSave();
};

const handleSubmit = (event) => {
  event.preventDefault();
  const currentValue = toDoInput.value;
  writeToDo(currentValue);
  toDoInput.value = "";
};

const loadWillDos = () => {
  const loadedWillDos = localStorage.getItem("WILLDOS_LS");
  if (loadedWillDos !== null) {
    const parsedWillDos = JSON.parse(loadedWillDos);
    parsedWillDos.forEach((a) => {
      writeWillDo(a.text);
    });
  }
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
  loadWillDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
