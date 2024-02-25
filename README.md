<h1>Progetto JavaScript Advanced</h1>
<h2>A cura di Roberta Ciresa per Start2Impact</h2>

<h2>Descrizione breve</h2>
Questo progetto sviluppato come esercizio per il corso JS Advanced di Start2Impact University ha lo scopo di mostrare uno dei metodi per l'utilizzo di API di terze parti tramite JS.
In questo caso sono state utilizzate la API di Hacker News (https://github.com/HackerNews/API) che sono state implementate nel programma con metodo Fetch di JS.

<h2>Link al progetto</h2> 
https://robi-ciresa.github.io/Progetto_JavaScript_Advanced_di_Roberta_Ciresa-/

<h2>Tecnologie utilizzate</h2>
- HTML5;
- CSS3;
- JavaScript ECMAScript 2019;
- Json.

<h2>Più nel dettaglio</h2>
L’applicazione visualizza alla prima apertura l’elenco delle ultime 10 news disponibili stampando a schermo il titolo, l'autore, la data (con piccola modifica*) e il link ove disponibile, se il link non è disponibile carica un contenuto di testo. 
<strong>Come?</strong>Contatta una prima API del servizio esterno Hacker News per recuperare la lista degli ID delle ultime news (ne ottiene 500). Per i primi 10 ID l’applicazione contatta una seconda API per ottenere i dettagli della news e li stampa.
In caso si desideri visualizzare più notizie, è sufficiente fare click sul pulsante "load more", a questo punto l’applicazione effettua nuovamente la chiamata all' API per ottenere i dettagli delle 10 successive news, e le visualiza a schermo, e così via.

Le chiamate alle API si effettuano tramite funzioni asincrone (async) con l'utilizzo di fetch('url').
Qui ad esempio la prima funzione per il caricamento degli ID 
  <i>async function logNews() {
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
  }</i>

*La data ricevuta dall'API come Timestamp riporta sempre la data del 20 gennaio 1970 (le news sono tutte attuali e caricate in tempo reale), per questo motivo nel mio programma ho inserito una modifica a questo valore. In questo modo le date sembrano risalire ad oggi (25/02/24) e ai giorni precedenti.. 
  <i>let datems = details.time + 1706473411733 + (10 - num - i) * 71257499;</i>
