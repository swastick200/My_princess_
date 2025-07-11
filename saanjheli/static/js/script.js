let currentStep = 1;
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const question = document.getElementById("question");
const extraMsg = document.getElementById("extraMsg");
const loveSection = document.getElementById("loveSection");
const slider = document.getElementById("loveSlider");
const heart = document.getElementById("heart");
const secretMsg = document.getElementById("secretMsg");

yesBtn.addEventListener("click", () => {
  if (currentStep === 1) {
    question.textContent = "Do you want me to stay in your life forever?";
    currentStep++;
  } else if (currentStep === 2) {
    question.textContent = "Do you love me?";
    currentStep++;
  } else {
    document.querySelector(".container").classList.add("hidden");
    loveSection.classList.remove("hidden");
  }
  extraMsg.classList.add("hidden");
  noBtn.style.position = "static";
});

noBtn.addEventListener("mouseover", () => {
  extraMsg.classList.remove("hidden");
  noBtn.style.position = "absolute";
  noBtn.style.top = Math.random() * 70 + "%";
  noBtn.style.left = Math.random() * 70 + "%";
  noBtn.style.transition = "top 0.3s, left 0.3s";
  noBtn.style.transform = `rotate(${Math.random() * 30 - 15}deg)`; // ✅ fixed template string
});

slider.addEventListener("input", () => {
  const value = parseInt(slider.value);
  document.getElementById("loveValue").textContent = `${value} / 100`; // ✅ fixed template string

  if (value < 70) {
    heart.textContent = "🖤";
    heart.classList.remove("glow-heart");
    secretMsg.classList.add("hidden");
    document.querySelector(".shayari").classList.add("hidden");
  } else if (value >= 70 && value < 100) {
    heart.textContent = "❤️"; // ✅ Fixed heart emoji
    heart.classList.add("glow-heart");
    secretMsg.classList.add("hidden");
    document.querySelector(".shayari").classList.add("hidden");
  } else if (value === 100) {
    heart.textContent = "💖✨";
    heart.classList.add("glow-heart");
    secretMsg.classList.remove("hidden");
    document.querySelector(".shayari").classList.remove("hidden");

    // Prevent multiple triggers
    if (!document.body.classList.contains("hearts-triggered")) {
      document.body.classList.add("hearts-triggered");
      triggerHeartRain();
    }
  }
});

function triggerHeartRain() {
  const totalStars = 100;
  const totalHearts = 100;

  // Falling 🌠 stars
  for (let i = 0; i < totalStars; i++) {
    const star = document.createElement("span");
    star.classList.add("heart", "heart-fall");
    star.textContent = "🌠";
    star.style.left = Math.random() * 100 + "vw";
    star.style.animationDuration = 2 + Math.random() * 3 + "s";
    document.body.appendChild(star);
    setTimeout(() => star.remove(), 5000);
  }

  // Falling ❤️‍🔥 hearts
  for (let i = 0; i < totalHearts; i++) {
    const heart = document.createElement("span");
    heart.classList.add("heart", "heart-fall");
    heart.textContent = "❤️‍🔥";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 2 + Math.random() * 3 + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }
}
