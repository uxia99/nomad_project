// [HTML의 `div id="login-form"` element 가져오기 ]

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
// querySelector을 사용할 때는 ID를 명시하도록 #을 붙여줘야 함
// getElementById는 명확히 Id를 찾기때문에 명시할 필요 없음

function onLoginSubmit(potato) {
  potato.preventDefault();
  console.log(potato);
}

loginForm.addEventListener("submit", onLoginSubmit);
