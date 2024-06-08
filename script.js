// Envoi des données
var clavierAnalogie = document.querySelector('#analogies');
var clavierValeurAnalogie = document.querySelector('#ListeAnalogie');
var clavierImage = document.querySelector('#img-desc');
var clavierExplication = document.querySelector('#desc');
var clavierCourriel = document.querySelector('#email');

document.querySelector('#envoyer').addEventListener('click', function (event) {
    event.preventDefault();
    var nouvelElement = document.createElement('section');
    nouvelElement.innerHTML =
        "<h1> Si j'étais " + clavierAnalogie.value + "</h1>" +
        "<h2>" + clavierValeurAnalogie.value + "</h2>" +
        "<img src='" + clavierImage.value + "'></img>" +
        "<p class='justification'>" + clavierExplication.value + "</p>";
    document.querySelector('#ajouter').appendChild(nouvelElement);
});

// API
document.querySelector('#envoyerApi').addEventListener('click', function () {
    let url = 'https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=mukengeshayi&courriel=sophie.mukengeshayi@edu.univ-eiffel.fr';

    fetch(url).then(function (response) {
        response.json().then(function (data) {
            console.log("Réponse reçue : ");
            console.log(data);
        });
    });
});

// Popup
function showMentions() {
    document.getElementById('popup').style.display = 'block';
}

function hideMentions() {
    document.getElementById('popup').style.display = 'none';
}
