const images = [
  "bg1.png",
  "bg2.png",
  "bg3.png",
  "bg4.png",
  "bg5.png",
  "bg6.png",
  "bg7.png",
  "bg8.png",
  "bg9.png",
  "bg10.png",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.id = "bgImage";

document.body.appendChild(bgImage);