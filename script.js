const landing = document.getElementById("landing");
const letterPage = document.getElementById("letterPage");
const letterBox = document.getElementById("letter");

const bgm = document.getElementById("bgm");
const baseTypeSound = document.getElementById("typeSound");

const text = `Dear Larah,

One of the beauties of life is the constant surprises that it gives you, surprises either big or small, makes life worth living.

In this lovely day of hearts, I want you to know that you are someone special and dear to me.

Yours in affection,
Paul`;

let i = 0;
const speed = 55; // moderate pleasant speed

landing.addEventListener("click", () => {

  landing.style.display = "none";
  letterPage.style.display = "flex";

  bgm.play().catch(() => {});

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
      playTypingSound();
    }

    i++;
    setTimeout(typeWriter, speed);
  }
}
