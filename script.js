
console.log("Добро пожаловать в моё портфолио!");

// =================================
// 🌐 WEB ПРОЕКТЫ
// =================================

const webProjects = [
  {
    title: "Мой комикс",
    description: "Мой первый комикс",
    image: "https://i.postimg.cc/rpKzxNqP/1.png"
  },
  {
    title: "моя презинтаия",
    description: "Моя презинтаия",
    image: "https://i.postimg.cc/wvnN7bLz/Snimok-ekrana-2026-11-24-192149.png"
  }
];

// =================================
// ⚡ JAVASCRIPT ПРОЕКТЫ
// =================================

// =================================
// 🎮 ИГРЫ
// =================================

const games = [
  {
    title: "Моя игра",
    description: "Моя первая игра",
    image: "https://i.postimg.cc/PJ8FW4j5/5e010d5c-eaf6-4c95-a711-701b36ccd3ea.png"
  }
];

// =================================
// 📖 КОМИКС
// =================================

const comicImages = [
  "https://i.postimg.cc/bvtpqCys/Snimok-ekrana-2026-11-24-192615.png",
  "https://i.postimg.cc/YqrrQz36/Snimok-ekrana-2026-11-24-192623.png",
  "ВСТАВЬ_ССЫЛКУ_НА_СТРАНИЦУ_КОМИКСА_3"
];

// =================================
// 🎬 ТРЕЙЛЕР ФИЛЬМА
// =================================

const movieLink = "https://i.postimg.cc/pTvbRPcs/Snimok-ekrana-2026-11-17-192948.png";

// =================================
// СОЗДАНИЕ КАРТОЧЕК
// =================================

function createCards(projects, elementId) {
  const gallery = document.getElementById(elementId);

  gallery.innerHTML = "";

  projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = project.image;
    img.alt = project.title;

    const title = document.createElement("h3");
    title.textContent = project.title;

    const description = document.createElement("p");
    description.textContent = project.description;

    card.append(img, title, description);
    gallery.appendChild(card);
  });
}

// =================================
// ДОБАВЛЕНИЕ ПРОЕКТОВ
// =================================

createCards(webProjects, "web-gallery");
createCards(games, "games-gallery");

// =================================
// ДОБАВЛЕНИЕ КОМИКСА
// =================================

const comicGallery = document.getElementById("comic-gallery");

comicImages.forEach((link, index) => {
  const img = document.createElement("img");

  img.src = link;
  img.alt = "Страница комикса " + (index + 1);

  comicGallery.appendChild(img);
});

// =================================
// ДОБАВЛЕНИЕ ТРЕЙЛЕРА
// =================================

document.getElementById("movie-video").src = movieLink;

// =================================
// МЕНЮ
// =================================

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    console.log("Открыт раздел: " + link.textContent);
  });
});
