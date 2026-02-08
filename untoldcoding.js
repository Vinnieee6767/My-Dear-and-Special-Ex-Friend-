const text = `Hey.

I don’t really know how to start this,
but I just wanted you to know something.

You don’t have to be perfect.
You don’t have to have everything figured out.
You don’t even have to be okay all the time.

I just hope you remember —
you mattered to me more than you think.

And somehow,
you became one of my favorite parts of my days.

That’s all 🤍`;

let i = 0;
const speed = 42;
const box = document.querySelector(".letterText");
const typeSound = document.getElementById("typeSound");

let unlocked = false;

document.addEventListener("click", () => {
  if (!unlocked) {
    typeSound.play().then(() => {
      typeSound.pause();
      typeSound.currentTime = 0;
      unlocked = true;
    }).catch(()=>{});
  }
}, { once: true });

function startTyping() {
  if (i < text.length) {
    box.innerHTML += text.charAt(i);

    if (unlocked) {
      typeSound.currentTime = 0;
      typeSound.play();
    }

    i++;
    setTimeout(startTyping, speed);
  }
}
