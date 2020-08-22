const data = [
  {
    id: 1,
    title: "Rick & Morty API",
    img: "./images/randm.PNG",
    hublink: "https://github.com/kenneth-brook/rick-and-morty-api",
    weblink: "https://my-rick-and-morty-api.herokuapp.com/",
    stack: [" React", " Axios", " SASS"],
    info:
      "This started out as a fun little class project. I had so much fun with it, that I decided to redo it for better style, and functionallity. This project was designed to show the ability to consume data from a 3rd party API, and display the data in a meaningful way.",
  },
  {
    id: 2,
    title: "NASA photo of the day",
    img: "./images/nasapotd.PNG",
    hublink: "https://github.com/kenneth-brook/nasa-potd",
    weblink: "https://my-nasa-potd-app.herokuapp.com/",
    stack: [" React", " Context API", " CSS"],
    info:
      "Another class project that was great for learning API calls, but much more was possible. The original only pulled in the image, and information for the current day. My rebuild includes a date picker calendar, and state management with the use of context API to pass a date string between components. Now you can see all of the past NASA Photos of the Day.",
  },
  {
    id: 3,
    title: "Niyon",
    img: "./images/niyonapp.PNG",
    hublink: "",
    weblink: "",
    stack: [
      " React",
      " Axios",
      " SASS",
      " Node",
      " Express",
      " Python/Flask",
      " Socket.io",
      " Map Box",
    ],
    info: "",
  },
];

const articles = document.querySelector(".articles");
// create new article and append it to the parentNode
data.forEach((item) => {
  articles.appendChild(
    createArticles(
      item.title,
      item.img,
      item.stack,
      item.info,
      item.hublink,
      item.weblink
    )
  );
});

function createArticles(title, img, stack, info, hublink, weblink) {
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

  //info
  const infoList = document.createElement("p");

  //link buttons
  const buttonWrap = document.createElement("div");
  buttonWrap.classList.add("button-wrap");
  const buttonHouseL = document.createElement("div");
  buttonHouseL.classList.add("button-house-l");
  const buttonHouseR = document.createElement("div");
  buttonHouseR.classList.add("button-house-l");
  const buttonL = document.createElement("button");
  buttonL.classList.add("button-l");
  const buttonR = document.createElement("button");
  buttonR.classList.add("button-r");

  buttonL.onclick = () => {
    window.open(hublink);
  };

  buttonR.onclick = () => {
    window.open(weblink);
  };

  // Append child elements
  article.appendChild(header);
  article.appendChild(stackList);
  article.appendChild(stackPack);
  article.appendChild(image);
  article.appendChild(infoList);
  article.appendChild(buttonWrap);
  buttonWrap.appendChild(buttonHouseL);
  buttonWrap.appendChild(buttonHouseR);
  buttonHouseL.appendChild(buttonL);
  buttonHouseR.appendChild(buttonR);

  // TextContent for the elements
  header.textContent = title;
  image.src = img;
  stackList.textContent = "Tech stack:";
  stackPack.textContent = `${stack}`;
  infoList.textContent = info;
  buttonL.textContent = "See on GitHub";
  buttonR.textContent = "Visit the site";

  return article;
}
