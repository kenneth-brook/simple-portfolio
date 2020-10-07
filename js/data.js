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
    hublink: "https://github.com/Lambda-School-Labs/niyon-fe",
    weblink: "https://www.theniyonapp.com/",
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
    info:
      "This is the project from the labs portion of my training. I was 1 of 6 developers working under a simulated work environment. We designed, planned, and set multiple release canvas goals. We reported to, and was guided by a real world project manager. This project was designed to help young tech professionals connect with mentors. The target audience is West Africa, this led us to design the app for mobile devices, as apraximatly 80% only have access to the internet through phones. The app has the ability for the user to search for mentors and mentees. Pending connections can be accepted or rejected. The ability to see your connections on the map by their listed city is built in. The main feature implemented is real time chat in rooms based on all the available technologies.",
  },
  {
    id: 4,
    title: "Conway’s Game of Life",
    img: "./images/gol.PNG",
    hublink: "https://github.com/kenneth-brook/gol-try-2",
    weblink: "https://my-gol.herokuapp.com/",
    stack: [" React", " javascript", " bootstrap"],
    info:
      "This is a solo build project from the computer science portion of class. After 6 weeks of learning algorithms in python we were set loose to build this project in any language we wanted. I selected React for ease of build, and deployment. I also wrote the algorithms in Javascript to further strengthen my capabilities in this language. Included is 2 board sizes, 3 levels of speed control, and random seeds or pre configured shapes. You can also click on cells to make your own design to run.",
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

  //imageInfoWrap
  const imageInfoWrap = document.createElement("div");
  imageInfoWrap.classList.add("imageInfoWrap");

  //Image
  const image = document.createElement("img");
  image.classList.add("image");

  //info
  const infoList = document.createElement("p");
  infoList.classList.add("infoList");

  //link buttons
  const buttonWrap = document.createElement("div");
  buttonWrap.classList.add("button-wrap");
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
  article.appendChild(imageInfoWrap);
  imageInfoWrap.appendChild(image);
  imageInfoWrap.appendChild(infoList);
  article.appendChild(buttonWrap);
  buttonWrap.appendChild(buttonL);
  buttonWrap.appendChild(buttonR);

  // TextContent for the elements
  header.textContent = title;
  image.src = img;
  stackList.textContent = "Tech stack:";
  stackPack.textContent = `${stack}`;
  infoList.textContent = info;
  buttonL.textContent = "See on GitHub";
  buttonR.textContent = "Visit the Site";

  return article;
}
