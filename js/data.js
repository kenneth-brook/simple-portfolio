const data = [
  {
    id: 1,
    title: "Rick & Morty API",
    img: "./images/randm.png",
    hublink: "https://github.com/kenneth-brook/rick-and-morty-api",
    weblink: "https://my-rick-and-morty-api.herokuapp.com/",
    stack: [" React", " Axios", " SASS"],
    info: "",
  },
  {
    id: 2,
    title: "NASA photo of the day",
    img: "",
    hublink: "",
    weblink: "",
    stack: [],
    info: "",
  },
  {
    id: 3,
    title: "another awsome app",
    img: "",
    hublink: "",
    weblink: "",
    stack: [],
    info: "",
  },
  {
    id: 4,
    title: "and yet another awsome app",
    img: "",
    hublink: "",
    weblink: "",
    stack: [],
    info: "",
  },
  {
    id: 5,
    title: "Niyon",
    img: "",
    hublink: "",
    weblink: "",
    stack: [],
    info: "",
  },
];

const articles = document.querySelector(".articles");
// create new article and append it to the parentNode
data.forEach((item) => {
  articles.appendChild(createArticles(item.title, item.img, item.stack));
});

function createArticles(title, img, stack) {
  //Main div class article
  const article = document.createElement("div");
  article.classList.add("article");

  //Title
  const header = document.createElement("h2");

  //Tech list
  const stackList = document.createElement("h4");
  stackList.classList.add("list");
  const stackPack = document.createElement("h4");
  stackPack.classList.add("stack");

  //Image
  const image = document.createElement("img");
  image.classList.add("image");

  // Append child elements
  article.appendChild(header);
  article.appendChild(stackList);
  article.appendChild(stackPack);
  article.appendChild(image);

  // TextContent for the elements
  header.textContent = title;
  image.src = img;
  stackList.textContent = "Tech stack:";
  stackPack.textContent = `${stack}`;

  return article;
}
