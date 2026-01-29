function showSection(id) {
  const sections = document.querySelectorAll('.content');
  sections.forEach(section => {
    section.classList.add('hidden');
  });

  document.getElementById(id).classList.remove('hidden');
}

function enterSite() {
  const opening = document.getElementById("opening");
  const main = document.getElementById("mainContent");
  const music = document.getElementById("bgm");

  opening.style.display = "none";
  main.classList.remove("hidden");

music.currentTime = 0;
music.muted = false;
music.play();

}

function openModal(img, name, birth, nick, activity) {
  document.getElementById("modal").classList.remove("hidden");
  document.getElementById("modalImg").src = img;
  document.getElementById("modalName").innerText = name;
  document.getElementById("modalBirth").innerText = birth;
  document.getElementById("modalNick").innerText = nick;
  document.getElementById("modalActivity").innerText = activity;
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}
