function envoiForm(event) {
    const error = document.getElementById('error');
    error.textContent = '';
    const code = this.elements.code.value;
    if (verification(code, error)) {
        const client = new XMLHttpRequest();
        client.open("GET", "http://api.zippopotam.us/fr/" + code, true);
        client.onreadystatechange = function() {
            if (client.status === 404) {
                document.getElementById('error').appendChild(document.createTextNode("Ce code postal n'existe pas"));
                client.abort();
            }
            if(client.readyState === 4) {
                const resultCode = JSON.parse(client.responseText);
                ajouteLigne(resultCode.country, resultCode.places[0]['place name'], resultCode.places[0]['state'], resultCode['post code'])
            }
        };
        client.send();
    }
    event.preventDefault();
}