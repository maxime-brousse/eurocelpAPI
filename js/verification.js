function verification (code, error) {
    if (code.length > 5) {
        error.appendChild(document.createTextNode("Code postal trop long"));
        return false;
    }
    if (code.length < 5 && code) {
        error.appendChild(document.createTextNode("Code postal trop court"));
        return false;
    }
    if (!code) {
        error.appendChild(document.createTextNode("Code postal est vide"));
        return false;
    }
    return true;
}