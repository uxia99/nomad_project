const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

const toDos = []; // newToDo를 localStorage에 저장할 배열

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // localStorage에 toDos배열을 저장
}

function deleteToDo(event) {
  // event를 받아서 해당 li에 대해서 delete를 실행
  const list = event.target.parentElement; // event.target은 button을 의미
  // console.log(event.target.parentElement.innerText);
  list.remove();
}

function paintToDo(newToDo) {
  const list = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newToDo; // span의 text로 newToDo변수의 값을 넣음

  const button = document.createElement("button");
  button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4" width="15" height="15">
      <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
    </svg>
`;
  button.addEventListener("click", deleteToDo);

  list.appendChild(span); // span을 li의 자식으로 추가
  list.appendChild(button); // button을 li의 자식으로 추가
  toDoList.appendChild(list); // list를 ul의 자식으로 추가
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value; // input의 현재 value를 newToDo변수에 복사
  toDoInput.value = "";
  toDos.push(newToDo); // newToDo를 toDos배열에 추가
  paintToDo(newToDo);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item) {
//   console.log("this is the turn of " + item);
// }

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos); // string을 object로 변환
  // parsedToDos.forEach(sayHello);  // forEach는 각각의 item에 대해 함수를 실행
  parsedToDos.forEach((item) => console.log("This is the turn of ", item)); // 이게 위의 sayHello()함수 없이 더 잛게 쓰는 방법
}
