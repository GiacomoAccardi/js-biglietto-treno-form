

- Chiederò all'utente di inserire tramite input i km da percorrere (variabile: travel_distance) e la propria età (variabile: user_age)

<!--Sappiamo di dover applicare uno sconto in base all'età del passeggiero. Lo sconto verrà applicato secondo il seguente sistema-->
- creerò una nuova variabile a cui assegnare il valore dello sconto (variabile: price_discount)

    - SE "user_age" è maggiorenne = allora applicheremo uno sconto del 20% nella seguente maniera:
            >> Il valore della variabile "price_discount" sarà uguale a "ticcket_price" - 20%

    - ALTRIMENTI SE over 65 = allora applicheremo uno sconto del 40% nella seguente maniera:
            >> Il valore della variabile "price_discount" sarà uguale a "ticcket_price" - 40%


    - ALTRIMENTI non applicheremo nessuno sconto

<!--Restituizione del prezzo finale-->

        - Creazione di una nuova variabile che denominerò "final_price" (che sarà il valore mostrato all'utente) il cui valore sarà soggetto alle seguenti variabili:

        - SE "user_age" maggiorenne o over 65 allora il valore di "final_price" sarà uguale a "price_discount" 

        - ALTRIMENTI il valore di "final_price" sarà uguale a "ticket_price"

- durante la prima fase del lavoro e di sviluppo, il risultato sarà dato in console, nella fase finale andrò a definire un layout per la pagina, inoltre (sempre tramite input) chiederò all'utente di inserire il proprio nome (variabile: user_name). In questa fase, lo script non emetterà più il prezzo finale in console, ma al click di un bottone, restituirà i dati inseriti e il prezzo finale del bigliatto direttamente sulla pagina 