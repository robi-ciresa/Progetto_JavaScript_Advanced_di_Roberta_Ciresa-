let num = 0;
let news = [];

async function logNews() {
  try {
    const response = await fetch("https://hacker-news.firebaseio.com/v0/newstories.json");
    if (response.status === 200) {
      news = await response.json();
      loadDetails(num);}
    else { populateDOMwitherror(response.status); }
  } catch (error) {
    console.log("Errore nella funzione logNews: " + error);
  }
}
logNews();

async function loadDetails(num) {
  try {
    for (i = 0; i < 10; i++) {
      let responseDetails = 
        (await fetch(`https://hacker-news.firebaseio.com/v0/item/${news[num + i]}.json`));
      if (responseDetails.status === 200) {
      let details = await responseDetails.json();
      console.log (details);
      let datems = (details.time ?? 0) + 1706473411733 + (10 - num - i) * 71257499; // random number to have different dates
      date = new Date(datems);
      day = date.getDate();
      month = date.getMonth();
      year = date.getFullYear();
      let name = details.title ?? 0;
      let link = details.url ?? 0;
      let author = details.by ?? 0;
      let text = details.text ?? 0;
      populateDOMfromAPI(day, month, year, name, link, author, text);}
      else { populateDOMwitherror(responseDetails.status); }
    }
  } catch (error) {
      console.log("Errore nella funzione loadDetails: " + error);
    }
}


function loadMore() {
  num += 10;
  loadDetails(num);
}
