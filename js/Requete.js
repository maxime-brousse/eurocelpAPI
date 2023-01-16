function envoiForm(event) {
    document.getElementById('error').textContent = '';
    const code = this.elements.code.value;
    if (code) {
        const client = new XMLHttpRequest();
        client.open("GET", "http://api.zippopotam.us/fr/" + code, true);
        client.onreadystatechange = function() {
            if (client.status === 404) {
                document.getElementById('error').appendChild(document.createTextNode("Ce code postal n'exite pas"));
                console.log(client.status);
                client.abort();
            }
            if(client.readyState === 4) {
                const resultCode = JSON.parse(client.responseText);
                ajouteLigne(resultCode.country, resultCode.places[0]['place name'], resultCode.places[0]['state'], resultCode['post code'])
            }
        };
        client.send();
    } else {
        document.getElementById('error').appendChild(document.createTextNode("Le code postal est vide"));
    }
    event.preventDefault();
}