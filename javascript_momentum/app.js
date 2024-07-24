// [HTML의 `div id="login-form"` element 가져오기 ]

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
// querySelector을 사용할 때는 ID를 명시하도록 #을 붙여줘야 함
// getElementById는 명확히 Id를 찾기때문에 명시할 필요 없음

const link = document.querySelector("a");

function onLoginSubmit(event) {
  potato.preventDefault(); // form 태그의 기본 동작을 막음
  console.log(loginInput.value);
}

function handleLinkClick(event) {
  event.preventDefault(); // a 태그의 기본 동작을 막음  
  console.log(event);
  alert("clicked!");
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);
