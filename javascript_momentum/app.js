// // 콘솔창 출력
// console.log("Hello World!");

// // 숫자 연산
// console.log(7 + 1);
// console.log(7 * 1);
// console.log(7 / 1);

// // 변수 선언
// let a = 5;
// let b = 2;

// console.log(a + b);
// console.log(a * b);
// console.log(a / b);

// // 상수 선언
// const myName = "Xia";
// console.log("Hello, " + myName + "!");



// console.log("- - - - - - -")


// // Boolean
// const amIFat = false;
// console.log(amIFat);

// // null, undefined
// const nothing = null; // null Type 말 그대로 비어있는 상태
// let something; // undefined Type 컴퓨터 메모리 안에 공간은 존재하지만 값이 없는 상태

// console.log(nothing, something);



// console.log("- - - - - - -")



// const mon = "Monday";
// const tue = "Tuesday";
// const wed = "Wednesday";
// const thu = "Thursday";
// const fri = "Friday";
// const sat = "Saturday";
// const sun = "Sunday";

// // const dayOfWeek = mon + tue + wed + thu + fri + sat + sun;
// const daysOfWeek = [mon, tue, wed, thu, fri, sat, sun];
// console.log(daysOfWeek);

// const nonsense = [1, 2, "hello", false, null, true, undefined, "Xia"];
// console.log(nonsense);

// // Get Item from Array
// console.log(daysOfWeek[3]); // Thursday

// // Add one more day to the array
// daysOfWeek.push("XiaDay");
// console.log(daysOfWeek[230984]);



// console.log("- - - - - - -")



// // 변수로 Player 정보를 저장하는 방법
// const playerName = "Xia";
// const playerPoints = 121212;
// const playerPretty = true;
// const playerFat = "slemmer";

// // 객체(Object)로 Player 정보를 저장하는 방법
// const player = {
//   name : "Xia",
//   points : 121212,
//   pretty : true,
//   fat : "slemmer"
// }

// console.log(player.name); // console.log(player["name"]); 이렇게 작성해도 됨
// console.log(player.points); // console.log(player["points"]); 이렇게 작성해도 됨 
// console.log(player.pretty); // console.log(player["pretty"]); 이렇게 작성해도 됨
// console.log(player.fat); // console.log(player["fat"]); 이렇게 작성해도 됨


// player.fat = "no";
// console.log(player.fat); // no

// player.lastName = "potato";
// console.log(player); // {name: "Xia", points: 121212, pretty: true, fat: "no", lastName: "potato"}



// console.log("- - - - - - -")



// // 함수 선언
// function sayHello(nameOfPerson, age) {
//   console.log("Hello " + nameOfPerson + "(" + age + ")");
// }

// sayHello("Xia", 25);
// sayHello("Jaeheon", 27);
// sayHello("Woojin", 21);



// function plus(firstNumber, secondNumber) {
//   console.log(firstNumber + secondNumber);
// }

// function devide(a, b) {
//   console.log(a / b);
// }

// plus(5, 2); // 7
// devide(5, 2); // 2.5




// const player2 = {
//   name : "Xia",
//   sayHello : function(otherPersonName) {
//     console.log("Hello " + otherPersonName + ", Nice to meet you :)");
//   },
// };

// console.log(player2.name); // Xia
// player2.sayHello("Jaeheon"); // Hello Jaeheon, Nice to meet you :)




// const partTimeJob = {
//   name : "Mega Coffee",
//   introduce : function(where) {
//     console.log("어서오세요, " + where + "입니다.");
//   },
// };

// console.log(partTimeJob.name); // Mega Coffee
// partTimeJob.introduce("커스텀 커피"); // 어서오세요, 커스텀 커피입니다.
// partTimeJob.introduce("이디야 커피"); // 어서오세요, 이디야 커피입니다.
// partTimeJob.introduce("스타벅스"); // 어서오세요, 스타벅스입니다.




// console.log("- - - - - - -");




// // Returns

// const age = 24;
// function calculateKrAge(ageOfForeigner) {
//   return ageOfForeigner + 2;
// }

// const krAge = calculateKrAge(age);

// console.log(krAge); // 26




// const calculator = {
//   plus : function(a, b) {
//     return a + b;
//   },
//   minus : function(a, b) {
//     return a - b;
//   },
//   times : function(a, b) {
//     return a * b;
//   },
//   divide : function(a, b) {
//     return a / b;
//   },
//   power : function(a, b) {
//     return a ** b;
//   },
// };

// const plusResult = calculator.plus(5, 2);
// console.log(plusResult); // 7

// const minusResult = calculator.minus(2024, 1999);
// console.log(minusResult); // 25

// const timesResult = calculator.times(38000, 18);
// console.log(timesResult); // 684000

// const divideResult = calculator.divide(668000, 38000);
// console.log(divideResult); // 17.526315789473685

// const powerResult = calculator.power(2, 10);
// console.log(powerResult); // 1024



// // plusResult = calculator.plus(5, 2); // 7
// // minusResult = calculator.minus(plusResult, 3); // 4
// // timesResult = calculator.times(10, minusResult); // 40
// // divideResult = calculator.divide(timesResult, plusResult); // 5.714285714285714
// // powerResult = calculator.power(divideResult, minusResult); // 104976.00000000001





// console.log("- - - - - - -");





// // Conditionals 조건문

// // const age1 = prompt("How old are you?"); // 사용자에게 입력을 받는 창을 띄움
// // console.log(age1); // 일시정지 시킨 후 사용자가 입력한 값이 콘솔창에 출력됨

// // // prompt는 일시정지 시키는 데 더해 사용자에게 아무런 CSS를 적용하지 않은 기본 창을 띄워 값을 입력받음
// // // 값을 입력하지 않고 취소를 누르면 자동으로 null 이 들어감 
// // // 값 입력 없이 ok를 누르면 비어있는 String(””)임


// // // 조건문의 타입 출력하기
// // const name1 = prompt("What is your name?");
// // console.log(typeof name1); // string


// // // 타입 변경하기
// // const gender = prompt("What is your Gender?");
// // // parseInt(); // String -> Number
// // console.log(parseInt(gender)); // string // NaN인지만 확인하면 됨



// // NaN : Not a Number
// const age2 = parseInt(prompt("How old are you?"));
// console.log(isNaN(age2)); // isNaN() 함수는 괄호 안에 들어간 값이 숫자인지 아닌지 boolean으로 확인해줌


// // if 조건문
// if (isNaN(age2)) { 
//   console.log("Please write a number.");
// } else {
//   console.log("Thank you for telling me your age.");
// }


// if (isNaN(age2) || age2 < 0) {
//   console.log("Please write a number.");
// } else if (20 <= age2 && age2 <= 80) {
//   console.log("You can drink alcohol.");
// } else if (80 < age2) {
//   console.log("You need to avoid drinking alcohol.");
// } else {
//   console.log("You can't drink alcohol.");
// }







// // JavaScript on the Browser

// HTML in JavaScript
// const title = document.getElementById("title");
// console.log(title); // console.dir(title)로도 확인 가능 - element의 모든 정보를 볼 수 있음


// // Js에서 HTML 변경
// document.title = "JavaScript can change HTML";

// const title = document.getElementById("title");
// title.innerText = "Got you!";

// console.log(title.id);
// console.log(title.className);


// const hellos = document.getElementsByClassName("Hello, I'm ClassName");
// console.log(hellos);

// const title = document.getElementsByTagName("h1"); // Tag는 anchor, div, section, button 등을 의미
// console.log(title);

// // QuerySelector는 element를 CSS 방식으로 검색할 수 있음
// const title = document.querySelector(".className h1");
// console.log(title);

// title.style.color = "Brown";


// Events and event handlers
const title = document.querySelector("div.className h1");

// console.dir(title); // 여기서 event를 찾아서 사용할 수 있음

function handleTitleClick() {
  title.style.color = "red";
}

function hadleMouseEnter() {
  console.log("Mouse is here");
}

function handleMouseLeave() {
  console.log("Mouse is gone");
}

title.addEventListener("click", handleTitleClick);
// title.onclick = handleTitleClick // 이렇게 할 수도 있음
title.addEventListener("mouseenter", hadleMouseEnter);
// title.onmouseenter = handleMouseEnter; // 이렇게 할 수도 있음
title.addEventListener("mouseleave", handleMouseLeave);
// title.onmouseleave = handleMouseLeave; // 이렇게 할 수도 있음