let num = 0;
let moreNews = document.createElement("button");
moreNews.setAttribute("onclick", "loadMore(num)");
moreNews.textContent = "Load more...";
document.querySelector(".button").appendChild(moreNews);

let news = [];

async function logNews() {
  try {
    const response = await fetch(
      "https://hacker-news.firebaseio.com/v0/newstories.json"
    );
    news = await response.json();
    loadDetails(num);
    return news;
  } catch (error) {
    console.log(error);
  }
}
logNews();

async function loadDetails(num) {
  let container = document.querySelector(".container");
  for (i = 0; i < 10; i++) {
    let responseDetails = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${news[num + i]}.json`
    );
    let details = await responseDetails.json();
    console.log(details);
    let datems = details.time + 1706473411733 + (10 - num - i) * 71257499; // random number to have different dates
    date = new Date(datems);
    day = date.getDate();
    month = date.getMonth();
    year = date.getFullYear();
    let name = details.title;
    let link = details.url;
    let author = details.by;
    let text = details.text;
    let divNews = document.createElement("div");
    divNews.setAttribute("class", "news");
    let newsName = document.createElement("h2");
    newsName.setAttribute("class", "first_elem");
    let newsBody = document.createElement("p");
    newsBody.setAttribute("class", "first_elem");
    let newsPLink = document.createElement("p");
    newsPLink.setAttribute("class", "first_elem");
    let newsLink = document.createElement("a");
    newsLink.setAttribute("href", `${link}`);
    newsName.innerHTML = `${name}`;
    newsBody.innerHTML = `Author: ${author}<br/>
                        Date: ${day < 10 ? "0" : ""}${day}.${month + 1 < 10 ? "0" : ""}${month + 1}.${year}`;
    if (link != undefined) {
      newsPLink.innerHTML = `Link: `
      newsLink.innerHTML = `${link}`;}
    else { 
      newsPLink.innerHTML = `Link: not available<br/>
      Content: ${text}`;}
    container.appendChild(divNews);
    divNews.appendChild(newsName);
    divNews.appendChild(newsBody);
    divNews.appendChild(newsPLink);
    newsPLink.appendChild(newsLink);
  }
}

async function loadMore() {
  num += 10;
  loadDetails(num);
}
