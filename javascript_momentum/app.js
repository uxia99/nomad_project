// 콘솔창 출력
console.log("Hello World!");

// 숫자 연산
console.log(7 + 1);
console.log(7 * 1);
console.log(7 / 1);

// 변수 선언
let a = 5;
let b = 2;

console.log(a + b);
console.log(a * b);
console.log(a / b);

// 상수 선언
const myName = "Xia";
console.log("Hello, " + myName + "!");



console.log("- - - - - - -")


// Boolean
const amIFat = false;
console.log(amIFat);

// null, undefined
const nothing = null; // null Type 말 그대로 비어있는 상태
let something; // undefined Type 컴퓨터 메모리 안에 공간은 존재하지만 값이 없는 상태

console.log(nothing, something);



console.log("- - - - - - -")



const mon = "Monday";
const tue = "Tuesday";
const wed = "Wednesday";
const thu = "Thursday";
const fri = "Friday";
const sat = "Saturday";
const sun = "Sunday";

// const dayOfWeek = mon + tue + wed + thu + fri + sat + sun;
const daysOfWeek = [mon, tue, wed, thu, fri, sat, sun];
console.log(daysOfWeek);

const nonsense = [1, 2, "hello", false, null, true, undefined, "Xia"];
console.log(nonsense);

// Get Item from Array
console.log(daysOfWeek[3]); // Thursday

// Add one more day to the array
daysOfWeek.push("XiaDay");
console.log(daysOfWeek[230984]);



console.log("- - - - - - -")



// 변수로 Player 정보를 저장하는 방법
const playerName = "Xia";
const playerPoints = 121212;
const playerPretty = true;
const playerFat = "slemmer";

// 객체(Object)로 Player 정보를 저장하는 방법
const player = {
  name : "Xia",
  points : 121212,
  pretty : true,
  fat : "slemmer"
}

console.log(player.name); // console.log(player["name"]); 이렇게 작성해도 됨
console.log(player.points); // console.log(player["points"]); 이렇게 작성해도 됨 
console.log(player.pretty); // console.log(player["pretty"]); 이렇게 작성해도 됨
console.log(player.fat); // console.log(player["fat"]); 이렇게 작성해도 됨


player.fat = "no";
console.log(player.fat); // no

player.lastName = "potato";
console.log(player); // {name: "Xia", points: 121212, pretty: true, fat: "no", lastName: "potato"}



console.log("- - - - - - -")



// 함수 선언
function sayHello(nameOfPerson, age) {
  console.log("Hello " + nameOfPerson + "(" + age + ")");
}

sayHello("Xia", 25);
sayHello("Jaeheon", 27);
sayHello("Woojin", 21);



function plus(firstNumber, secondNumber) {
  console.log(firstNumber + secondNumber);
}

function devide(a, b) {
  console.log(a / b);
}

plus(5, 2); // 7
devide(5, 2); // 2.5




const player2 = {
  name : "Xia",
  sayHello : function(otherPersonName) {
    console.log("Hello " + otherPersonName + ", Nice to meet you :)");
  },
};

console.log(player2.name); // Xia
player2.sayHello("Jaeheon"); // Hello Jaeheon, Nice to meet you :)




const partTimeJob = {
  name : "Mega Coffee",
  introduce : function(where) {
    console.log("어서오세요, " + where + "입니다.");
  },
};

console.log(partTimeJob.name); // Mega Coffee
partTimeJob.introduce("커스텀 커피"); // 어서오세요, 커스텀 커피입니다.
partTimeJob.introduce("이디야 커피"); // 어서오세요, 이디야 커피입니다.
partTimeJob.introduce("스타벅스"); // 어서오세요, 스타벅스입니다.





