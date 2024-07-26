const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0"); // 2자리 숫자로 만들어줌
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`; 
}

getClock();
setInterval(getClock, 1000); // 1초마다 getClock 함수 실행
// setTimeout(sayHello, 5000); // 5초 후에 sayHello 함수 실행
