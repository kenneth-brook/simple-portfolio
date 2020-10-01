const data = [
  {
    id: 1,
    title: "The Road Here",
    img: "./images/armyme.jpg",
    info:
      "This started out as a fun little class project. I had so much fun with it, that I decided to redo it for better style, and functionallity. This project was designed to show the ability to consume data from a 3rd party API, and display the data in a meaningful way.",
  },
];

const articles = document.querySelector(".about");
// create new article and append it to the parentNode
data.forEach((item) => {
  articles.appendChild(createArticles(item.title, item.img, item.info));
});

function createArticles(title, img, info) {
  //Main div class article
  const article = document.createElement("div");
  article.classList.add("article");

  //Title
  const header = document.createElement("h2");

  //imageInfoWrap
  const imageInfoWrap = document.createElement("div");
  imageInfoWrap.classList.add("imageInfoWrap");

  //Image
  const image = document.createElement("img");
  image.classList.add("image");

  //info
  const infoList = document.createElement("p");
  infoList.classList.add("infoList");

  // Append child elements
  article.appendChild(header);
  article.appendChild(imageInfoWrap);
  imageInfoWrap.appendChild(image);
  imageInfoWrap.appendChild(infoList);

  // TextContent for the elements
  header.textContent = title;
  image.src = img;
  infoList.textContent = info;

  return article;
}
