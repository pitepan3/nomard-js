const images = [ "0.jfif", "1.jfif", "2.jfif" ];

chosenImage = images[Math.floor(Math.random() * images.length)]

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

console.log(bgImage)

document.body.appendChild(bgImage);