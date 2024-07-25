// [HTML의 `div id="login-form"` element 가져오기 ]

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
// querySelector을 사용할 때는 ID를 명시하도록 #을 붙여줘야 함
// getElementById는 명확히 Id를 찾기때문에 명시할 필요 없음

// 일반적으로 string만 포함된 변수는 대문자로 표기하고 string을 저장하고싶을 때 사용  
// 혹은 loginForm, loginInput처럼 중요한 정보를 담은 게 아닐 경우 사용
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event
  .preventDefault(); // form 태그의 기본 동작을 막음
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  
  localStorage.setItem(USERNAME_KEY, username); // 좌 : key, 우 : value

  // greeting.innerText = "Hello, " + username; // 이렇게도 가능
  greeting.innerText = `Hello, ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
} 


const savedUsername = localStorage.getItem(USERNAME_KEY); 
console.log(savedUsername);

if(savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello, ${savedUsername}`;
}
