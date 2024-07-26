const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`; 
}

getClock();
setInterval(getClock, 1000); // 1초마다 getClock 함수 실행
// setTimeout(sayHello, 5000); // 5초 후에 sayHello 함수 실행
