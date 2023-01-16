function ajouteLigne(country, town, state, code) {
    let tableRef = document.getElementById('table');

    let newRow = tableRef.insertRow();
    let cellCountry = newRow.insertCell();
    let cellTown = newRow.insertCell();
    let cellState = newRow.insertCell();
    let cellCode = newRow.insertCell();
    cellCountry.appendChild(document.createTextNode(country));
    cellTown.appendChild(document.createTextNode(town));
    cellState.appendChild(document.createTextNode(state));
    cellCode.appendChild(document.createTextNode(code));
}