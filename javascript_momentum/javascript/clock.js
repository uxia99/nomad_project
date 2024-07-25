const clock = document.querySelector("#clock");

function sayHello() {
  console.log("hello"); 
}

setInterval(sayHello, 5000); // 5초마다 sayHello 함수 실행
