const data = [
  {
    id: 1,
    title: "The Road Here",
    img: "./images/armyme.jpg",
    info:
      "Many years I have spent on the road to discover what I was meant to do in life. From my early years of farm work, to 12 years in service to the Army, and a few attempts to be a business owner. Every step along my journey has made me what I am, but a few key steps have brought me to the realization of what I kind of knew over 20 years ago, I was meant to be a web developer. It started in 1996 when I opened a computer repair shop. As my client base grew, my cost in time, paper, and stamps grew printing monthly mailers. Then the idea hit me, all my clients had computers, why not have a website to get the info out? In time I was building and managing a few sites for small businesses in my local area. In 2007 I was painfully aware the web development community had greatly outpaced my skills. This led me to 2 years of school for an associates in web development. This unfortunately was little help in advancing my skill set.The next step happened when an experienced developer brought me onboard his freelance company, and 2geex.com was born. This was a good learning experience, as I brought some javascript, and .php skills into my toolbox. For 2 years we built a wide range of ecommerce sites with WordPress. After the closing of the company I went on solo for a few more years. With the continued drudgery of one maintenance related job after another is when I had the grand epiphany. I really only wanted to write code for a living. After a year of overwhelming self study and getting no closer to being able to make modern projects come to life, an ad for a 100% online school caught my attention. After a few weeks of research to find out that not only did this school teach modern skills, but also prepared you to be job ready. Now as I approaching the end of my training at Lambda School the time has come to start down my new path. Onward I go into my future.",
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
  imageInfoWrap.classList.add("imageInfoWrapAbout");

  //Image
  const image = document.createElement("img");
  image.classList.add("imageAbout");

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
