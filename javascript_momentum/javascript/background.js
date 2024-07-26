const Images = [
  "mac.jpg",
  "toni.jpg",
  "color.jpg"
];

const chosenImg = Images[Math.floor(Math.random() * Images.length)];

const bgImg = document.createElement("img");

bgImg.src = `img/${chosenImg}`;
document.body.appendChild(bgImg);
