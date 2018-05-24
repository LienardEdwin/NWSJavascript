function moove() {
    var i = 0;
    var cercle = document.getElementById('cercle');
    switch (cercle){
        case 37 :
            cercle.style.backgroundColor = 'pink';
            alert('bonjour');
            break;
        case 39 :
            cercle.style.backgroundColor = 'green';
            alert('bonjour');
            break;
        case 38 :
            cercle.style.backgroundColor = 'yellow';
            alert('bonjour');
            break;
        case 40 :
            cercle.style.backgroundColor = 'black';
            alert('bonjour');
            break;
        default :
            break;
    }
}