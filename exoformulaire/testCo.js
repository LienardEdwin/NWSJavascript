function  testConnection() {


    let nom = document.data.nom.value;
    let prenom = document.data.prenom.value;
    let mail = document.data.mail.value;
    let mdp = document.data.mdp.value;

    if (nom.length > 0 && prenom.length > 0 && mail.length > 0 && mdp.length > 0) {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "ajax.php", true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        xhr.onreadystatechange = function() {
            if(xhr.readyState == 4) {
                if (xhr.status >= 200 && xhr.status < 304) {
                    console.log("connexion!");

                }
            }
        };

        let form = new FormData(document.forms[0]);

        xhr.send(form);
    }

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

}

