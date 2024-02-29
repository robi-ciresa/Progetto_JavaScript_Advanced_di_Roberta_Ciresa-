<h1>Progetto JavaScript Advanced</h1>
<h3>A cura di Roberta Ciresa per Start2Impact</h3>

<h2>Descrizione breve</h2>
Questo progetto sviluppato come esercizio per il corso JS Advanced di Start2Impact University ha lo scopo di mostrare uno dei metodi per l'utilizzo di API di terze parti tramite JS.<br/>
Il progetto implementa anche il bundle webpack. <br/>

<h2>Link al progetto</h2>
https://robi-ciresa.github.io/Progetto_JavaScript_Advanced_di_Roberta_Ciresa-/

<h2>Più nel dettaglio</h2>
L’applicazione visualizza alla prima apertura l’elenco delle ultime 10 news disponibili stampando a schermo il titolo, l'autore, la data (con piccola modifica*) e il link ove disponibile, se il link non è disponibile carica un contenuto di testo.<br/> 
<strong>Come?</strong>Contatta una prima API del servizio esterno Hacker News per recuperare la lista degli ID delle ultime news (ne ottiene 500). Per i primi 10 ID l’applicazione contatta una seconda API per ottenere i dettagli della news e li stampa.<br/>
In caso si desideri visualizzare più notizie, è sufficiente fare click sul pulsante "load more", a questo punto l’applicazione effettua nuovamente la chiamata all' API per ottenere i dettagli delle 10 successive news, e le visualiza a schermo, e così via.<br/>
<br/>
Le chiamate alle API si effettuano tramite funzioni asincrone (async) con l'utilizzo di fetch('url').<br/>

Il progetto è stato generato tramite **webpack-cli**, è possibile generare i file ottimizzati tramite i comandi: <br/>
<i>npm run build<i/> or <i>yarn build<i/>
