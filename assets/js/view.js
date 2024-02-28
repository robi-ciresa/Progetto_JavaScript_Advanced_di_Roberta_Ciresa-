let container = document.querySelector(".container");

function populateDOM() {
try {
  let hpTitle = document.createElement("h1");
  let hpSubtitle = document.createElement("h2");
  let hpDescription = document.createElement("p");
  hpTitle, hpSubtitle, hpDescription.setAttribute("class", "text_center");
  hpTitle.innerHTML = `<strong>This web site will show you all the lastest news about IT & Tech.</strong>`;
  hpSubtitle.innerHTML = `That's a project for Start2Impact University, this exercise consixt in learning how to use third part API.<br/>
                            This web site use API from Hacker News, that can you find <a href="https://github.com/HackerNews/API">here</a>.`;
  hpDescription.innerHTML = `Please to note that 'date' parameter in each news is not true.<br/>
                            Every news is really NEW!`;
  container.appendChild(hpTitle);
  container.appendChild(hpSubtitle);
  container.appendChild(hpDescription);
  let moreNews = document.createElement("button");
  moreNews.setAttribute("onclick", "loadMore(num)");
  moreNews.textContent = "Load more...";
  document.querySelector(".button").appendChild(moreNews);
} catch (error) {
  console.log("Errore nella funzione populateDOM: " + error);
}
}
populateDOM();

function populateDOMwitherror (status) {
alert(`Error status ${status}! News loading filed.`); 
}

function populateDOMfromAPI(day, month, year, name, link, author, text) {
try {
  let divNews = document.createElement("div");
  divNews.setAttribute("class", "news");
  let newsName = document.createElement("h2");
  newsName.setAttribute("class", "first_elem");
  let newsBody = document.createElement("p");
  newsBody.setAttribute("class", "first_elem");
  let newsPLink = document.createElement("p");
  newsPLink.setAttribute("class", "first_elem");
  container.appendChild(divNews);
  divNews.appendChild(newsName);
  divNews.appendChild(newsBody);
  divNews.appendChild(newsPLink);
  newsName.innerHTML = `${name}`;
  newsBody.innerHTML = `Author: ${author}<br/>
                        Date: ${day < 10 ? "0" : ""}${day}.${
    month + 1 < 10 ? "0" : ""
  }${month + 1}.${year}`;
  if (link != 0) {
    newsPLink.innerHTML = `Link: <a href='${link}'>${link}</a>`;
  } else {
    newsPLink.innerHTML = `Link: not available<br/>
        Content: ${text}`;
  }
} catch (error) {
  console.log("Errore nella funzione populateDOMfromAPI: " + error);
}
}
