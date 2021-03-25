const toDoForm = document.querySelector(".toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".toDoList");

// const handleDelBtn = (event) => {
//   if (event) {
//     toDoList.removeChild(li);
//   }
// };

const paintToDo = (text) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");
  const handleDelBtn = (event) => {
    if (event) {
      toDoList.removeChild(li);
    }
  };

  // delBtn.innerHTML = "❌";
  span.innerText = text;
  delBtn.innerHTML = "X";
  delBtn.addEventListener("click", handleDelBtn);
  li.appendChild(span);
  li.appendChild(delBtn);
  toDoList.appendChild(li);
};

// function paintToDo(text) {
//   const li = document.createElement("li");
//   const delBtn = document.createElement("button");
//   const span = document.createElement("span");

//   delBtn.innerText = "X";

//   span.innerText = text;
//   li.appendChild(delBtn);
//   li.appendChild(span);
//   toDoList.appendChild(li);
// }

const handleSubmit = (event) => {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
};

function init() {
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
