const landing = document.getElementById("landing");
const letterPage = document.getElementById("letterPage");
const letterBox = document.getElementById("letter");

const bgm = document.getElementById("bgm");
const baseTypeSound = document.getElementById("typeSound");
const pouts = document.querySelectorAll(".pout");

const text = `Dear Larah,

One of the beauties of life is the constant surprises that it gives you, surprises either big or small, makes life worth living.

In this lovely day of hearts, I want you to know that you are someone special and dear to me.

Yours in affection,
Paul`;

let i = 0;
const speed = 55;         // text speed
const soundDelay = 80;    // 50% calmer typing sound

landing.addEventListener("click", () => {

  landing.style.display = "none";
  letterPage.style.display = "flex";

  bgm.play().catch(() => {});

  startPoutMovement();
  typeWriter();
});

function playTypingSound() {
  const sound = baseTypeSound.cloneNode();
  sound.volume = 0.25;
  sound.play().catch(() => {});
}

function typeWriter() {
  if (i < text.length) {

    const char = text.charAt(i);
    letterBox.innerHTML += char;

    if (char !== " " && char !== "\n") {
      setTimeout(() => {
        playTypingSound();
      }, soundDelay);
    }

    i++;
    setTimeout(typeWriter, speed);
  }
}

/* ===== RANDOM POUT MOVEMENT ===== */

function startPoutMovement() {
  pouts.forEach(pout => {
    moveRandom(pout);
    setInterval(() => moveRandom(pout), 4000);
  });
}

function moveRandom(el) {
  const container = document.querySelector(".container");

  const margin = 120; // keeps away from corners
  const maxX = container.clientWidth - margin * 2;
  const maxY = container.clientHeight - margin * 2;

  const x = Math.random() * maxX + margin;
  const y = Math.random() * maxY + margin;
  const rotation = Math.random() * 360;

  el.style.left = x + "px";
  el.style.top = y + "px";
  el.style.transform = `rotate(${rotation}deg)`;
}
