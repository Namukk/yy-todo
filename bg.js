const body = document.querySelector("body");

const imageNumbers = 5;

const genRandom = () => {
  const number = Math.floor(Math.random() * imageNumbers);
  return number;
};

const imgGen = (imgNum) => {
  const img = new Image();
  img.src = `images/${imgNum + 1}.jpg`;
  img.classList.add("bg_img");
  body.appendChild(img);
};

function init() {
  const randomNumber = genRandom();
  imgGen(randomNumber);
}

init();
