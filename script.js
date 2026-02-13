const landing = document.getElementById("landing");
const letterPage = document.getElementById("letterPage");
const letterBox = document.getElementById("letter");

const bgm = document.getElementById("bgm");
const typeSound = document.getElementById("typeSound");

const text = `Dear Larah,

One of the beauties of life is the constant surprises that it gives you, surprises either big or small, makes life worth living. Out of all of the surprises I got, you are the biggest and most beautiful thing that ever happened to me. Never have I ever thought that we would end up like this if you were to ask my old self. You are the most unexpected, yet the most pleasant person I had in my life and I am deeply thankful for it.

In this lovely day of hearts, I want you to know that you are someone special and dear to me. We may be just starting now, but do know, in this sworn testimony of mine, that I will be here right by your side, ready when you call me, ready when you need me, and ready when you need someone to talk to every step of the way.

I will be waiting for you, I will be standing right by your side while we achieve our dreams and turn them into reality. May we be blessed in life, and let us celebrate this Valentine's day full of love and happiness.

Thank You for being you, Thank You for being the sunshine that you are, and Thank You very much for everything you've ever given to me. I hope you are doing wonderful in this very special day, nothing but love and support <33.

Yours in affection,
Paul`;

let i = 0;
const speed = 1333 / 45; // 45 WPM

landing.addEventListener("click", () => {

  landing.style.display = "none";
  letterPage.style.display = "flex";

  // GitHub-safe audio start (must be inside click)
  bgm.currentTime = 0;
  bgm.play();

  typeWriter();
});

function typeWriter() {
  if (i < text.length) {

    letterBox.innerHTML += text.charAt(i);

    // Force full click sound every letter
    typeSound.pause();
    typeSound.currentTime = 0;
    typeSound.play();

    i++;
    setTimeout(typeWriter, speed);
  }
}
