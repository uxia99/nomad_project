const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function paintToDo(newToDo) {
  const list = document.createElement("li");
  const span = document.createElement("span");
  list.appendChild(span); // span을 li의 자식으로 추가
  span.innerText = newToDo; // span의 text로 newToDo변수의 값을 넣음
  console.log(list);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value; // input의 현재 value를 newToDo변수에 복사
  toDoInput.value = "";
  paintToDo();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
