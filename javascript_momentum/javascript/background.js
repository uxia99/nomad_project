const Images = [
  "mac.jpg",
  "toni.jpg",
  "color.jpg",
  "1.jpeg",
  "2.jpeg",
  "3.jpeg",
  "4.jpeg",
  "5.jpeg",
  "6.jpeg",
  "7.jpeg",
  "8.jpeg",
  "9.jpeg",
  "10.jpeg",
  "11.jpeg",
  "12.jpeg",
  "13.jpeg",
  "14.jpeg",
  "15.jpeg",
  "16.jpeg",
  "17.jpeg",
  "18.jpeg",
  "19.jpeg",
  "20.jpeg",
];

const chosenImg = Images[Math.floor(Math.random() * Images.length)];

const bgImg = document.createElement("img");

bgImg.src = `img/${chosenImg}`;
document.body.appendChild(bgImg);
