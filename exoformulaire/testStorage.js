setTimeout(function testStorage(){
    let nom = document.getElementById('nom').value;
    let prenom = document.getElementById('prenom').value;
    let mail = document.getElementById('mail').value;
    let pwd = document.getElementById('mdp').value;

    sessionStorage.setItem("Nom", nom);
    sessionStorage.setItem("Prenom", prenom);
    sessionStorage.setItem("email", mail);
    sessionStorage.setItem("Mot de passe", pwd);

    let toto = sessionStorage.getItem("Nom");


});