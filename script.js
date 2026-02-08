const landing = document.getElementById("landing");
const letterPage = document.getElementById("letterPage");
const textEl = document.getElementById("text");

const bgm = document.getElementById("bgm");
const typeSound = document.getElementById("typeSound");

const message = `your letter here...`;

let i = 0;
const speed = 90;

landing.onclick = () => {
  landing.style.display = "none";
  letterPage.style.display = "flex";
  bgm.volume = 0.7;
  bgm.play();
  typeWriter();
};

function typeWriter() {
  if (i < message.length) {
    textEl.textContent += message.charAt(i);

    if (i % 2 === 0) {
      typeSound.currentTime = 0;
      typeSound.play();
    }

    i++;
    setTimeout(typeWriter, speed);
  }
}
