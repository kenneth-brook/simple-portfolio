const data = [
  {
    id: 1,
    title: "Rick & Morty API",
  },
  {
    id: 2,
    title: "NASA photo of the day",
  },
  {
    id: 3,
    title: "another awsome app",
  },
  {
    id: 4,
    title: "and yet another awsome app",
  },
  {
    id: 5,
    title: "Niyon",
  },
];

const articles = document.querySelector(".articles");
// create new article and append it to the parentNode
data.forEach((item) => {
  articles.appendChild(createArticles(item.title));
});

function createArticles(title) {
  //Main div class article
  const article = document.createElement("div");
  article.classList.add("article");

  //Title
  const header = document.createElement("h2");

  // Append child elements
  article.appendChild(header);

  // TextContent for the elements
  header.textContent = title;

  return article;
}
