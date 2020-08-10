const data = [
  {
    id: 1,
    title: "Rick & Morty API",
    img: "./images/randm.png",
    hublink: "",
    weblink: "",
    tech: [],
    info: "",
  },
  {
    id: 2,
    title: "NASA photo of the day",
    img: "",
    hublink: "",
    weblink: "",
    tech: [],
    info: "",
  },
  {
    id: 3,
    title: "another awsome app",
    img: "",
    hublink: "",
    weblink: "",
    tech: [],
    info: "",
  },
  {
    id: 4,
    title: "and yet another awsome app",
    img: "",
    hublink: "",
    weblink: "",
    tech: [],
    info: "",
  },
  {
    id: 5,
    title: "Niyon",
    img: "",
    hublink: "",
    weblink: "",
    tech: [],
    info: "",
  },
];

const articles = document.querySelector(".articles");
// create new article and append it to the parentNode
data.forEach((item) => {
  articles.appendChild(createArticles(item.title, item.img));
});

function createArticles(title, img) {
  //Main div class article
  const article = document.createElement("div");
  article.classList.add("article");

  //Title
  const header = document.createElement("h2");

  //Image
  const image = document.createElement("img");
  image.classList.add("image");

  // Append child elements
  article.appendChild(header);
  article.appendChild(image);

  // TextContent for the elements
  header.textContent = title;
  image.src = img;

  return article;
}
