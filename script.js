// script.js

// Dua list for home page
const duas = [
  "May Allah ease your hardships and grant you peace.",
  "Ya Allah, bless this soul with guidance and mercy.",
  "Rabbi zidni ilma – O Lord, increase me in knowledge.",
  "May your heart find peace in Allah's remembrance.",
  "May Allah forgive your sins and raise your rank in Jannah."
];

// Random dua generator
function generateDua() {
  const random = Math.floor(Math.random() * duas.length);
  const duaBox = document.getElementById("generated-dua");
  if (duaBox) {
    duaBox.innerText = `“${duas[random]}”`;
  }
}

// Music toggle button logic
function toggleMusic() {
  const audio = document.getElementById("karbala-music") || document.getElementById("bg-music");
  if (audio) {
    audio.paused ? audio.play() : audio.pause();
  }
}

// Submit dua form
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("dua-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const sender = form.sender.value.trim();
      const receiver = form.receiver.value.trim();
      const message = form.message.value.trim();

      const previewText = document.getElementById("preview-text");
      const previewBox = document.getElementById("submitted-dua");

      if (sender && receiver && message && previewText && previewBox) {
        previewText.textContent = `"${message}" — from ${sender} to ${receiver}`;
        previewBox.classList.remove("hidden");
        form.reset();
      }
    });
  }
});
