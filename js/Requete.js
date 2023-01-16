function envoiForm(event) {
    const code = this.elements.code.value;
    const client = new XMLHttpRequest();
    client.open("GET", "http://api.zippopotam.us/fr/" + code, true);
    client.onreadystatechange = function() {
        if(client.readyState === 4) {
            const resultCode = JSON.parse(client.responseText);
            ajouteLigne(resultCode.country, resultCode.places[0]['place name'], resultCode.places[0]['state'], resultCode['post code'])
            console.log(resultCode);
        }
    };
    client.send();
    event.preventDefault();
}