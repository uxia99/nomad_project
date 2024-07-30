const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function deleteToDo(event) { // event를 받아서 해당 li에 대해서 delete를 실행
  const list = event.target.parentElement; // event.target은 button을 의미
  // console.log(event.target.parentElement.innerText); 
  list.remove();
}

function paintToDo(newToDo) {
  const list = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newToDo; // span의 text로 newToDo변수의 값을 넣음

  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);

  list.appendChild(span); // span을 li의 자식으로 추가
  list.appendChild(button); // button을 li의 자식으로 추가
  toDoList.appendChild(list); // list를 ul의 자식으로 추가
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value; // input의 현재 value를 newToDo변수에 복사
  toDoInput.value = "";
  paintToDo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
