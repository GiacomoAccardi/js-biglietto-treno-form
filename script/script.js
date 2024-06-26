//::::::Benvenuti nel mio script!::::::

// Come prima cosa, andiamo a prelevare i dati inseriti dall'utente!
const button = document.getElementById('start_script');

button.addEventListener('click', function () {
    let user_name = document.getElementById('user_name').value;
    let travel_distance = document.getElementById('travel_distance').value;
    let user_age = document.getElementById('user_age').value;

// Definisco il prezzo del biglietto in base alla distanza da percorrere

    let ticket_price = 0.21 * travel_distance;

    let final_price = ticket_price;

// Applichiamo lo sconto in base all'età

    let price_discount;

    if (user_age == 'minorenne') {
            price_discount = ticket_price * 0.2;
            final_price = (ticket_price - price_discount);
    } else if (user_age == 'over65') {
            price_discount = ticket_price * 0.4   
            final_price = (ticket_price - price_discount)
    }

    document.getElementById("result").innerText = user_name + ', ' + travel_distance + 'km' + ', ' + user_age + ', ' + final_price.toFixed(2) + '€';
}); 

