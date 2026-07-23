// ---------- Generate floating hearts ----------
const heartsContainer = document.getElementById('heartsContainer');
const heartSymbols = ['❤', '💕', '💖', '💘'];

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

  const startX = Math.random() * 100;
  heart.style.left = startX + 'vw';

  const size = 16 + Math.random() * 22;
  heart.style.fontSize = size + 'px';

  const duration = 6 + Math.random() * 6;
  heart.style.animationDuration = duration + 's';

  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), duration * 1000);
}

setInterval(createHeart, 300);
for (let i = 0; i < 15; i++) {
  setTimeout(createHeart, i * 150);
}

// ---------- Check the answer ----------
const dateInput = document.getElementById('dateInput');
const checkBtn = document.getElementById('checkBtn');
const correctAnswer = "2025/01/19";

function checkAnswer() {
  const value = dateInput.value.trim();

  if (value === correctAnswer) {
    window.location.href = "love.html";
  } else {
    alert("CHNCHED NFAT9EK MN BA3THEK");
  }
}

checkBtn.addEventListener('click', checkAnswer);
dateInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') checkAnswer();
});
