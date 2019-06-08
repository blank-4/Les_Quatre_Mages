/*

Easy Grid Words :

- Foot
- Corner 
- Handball
- But
- Joueur
- Libero
- Tennis
- Ski
- Dunk
- Set

Medium Grid Words :

- Avengers
- Matrix
- Hellboy
- Creed
- Divergente
- Aquaman
- Serenity
- Blade
- Downsizing
- Solo

*/

var grid = document.getElementById("grid");
var box = document.getElementsByClassName("box");
var wordsToFind = document.getElementById("list").children;
var colors = ['red', 'green', 'yellow', 'blue', 'purple', 'orange', 'pink', 'darkblue', 'palegreen', 'brown'];
var found = 0;
var clicking = false;


// Évènement matériel : Lorsque l'utilisateur clique droit une première fois et maintient le clique
grid.addEventListener("mousedown", function(){
    clicking = true;
});
// Évènement tactile : Lorsque l'utilisateur touche son écran et maintient la pression
grid.addEventListener("touchstart", function(){
    clicking = true;
});


// Évènement matériel : Lorsque l'utilisateur relache la pression maintenue sur le clique droit
grid.addEventListener("mouseup", function(){
    clicking = false;
    for(var i = 0; i < box.length; i++) {
        box[i].classList.remove("highlightBox");
    };
});
// Évènement tactile : Lorsque l'utilisateur cesse la pression sur son écran
grid.addEventListener("touchend", function(){
    clicking = false;
    for(var i = 0; i < box.length; i++) {
        box[i].classList.remove("highlightBox");
    };
});


// Évènement matériel : Lorsque le curseur sort de la zone ciblée
grid.addEventListener("mouseleave", function() {
    clicking = false;
    for(var i = 0; i < box.length; i++) {
        box[i].classList.remove("highlightBox");
    };
});
// Évènement tactile : Lorsque l'utilisateur sort son doigt de la zone ciblée
grid.addEventListener("touchcancel", function() {
    clicking = false;
    for(var i = 0; i < box.length; i++) {
        box[i].classList.remove("highlightBox");
    };
});


// Évènement matériel : Lorsque l'utilisateur survole l'élément ciblé à l'aide du curseur
for(var i = 0; i < box.length; i++) {
    box[i].addEventListener("mouseover", function() {
    
    });
};


// Évènement matériel : Lorsque le curseur sort de l'élément survolé
for(var i = 0; i < box.length; i++) {
    box[i].addEventListener("mouseout", function(e) {
        if(clicking) {
            e.target.classList.toggle("highlightBox");
            var word = e.target.getAttribute("data-word");
            if(word != ( 0 || null || undefined )) {
                var wordLength = word.length;
            } else {
                return false;
            }
            var allBoxes = document.querySelectorAll(".box[data-word='" + word + "'].highlightBox");
            if(allBoxes.length == wordLength) {
                for(var i = 0; i < allBoxes.length; i++) {
                    allBoxes[i].classList.remove("highlightBox");
                    allBoxes[i].classList.add("found-" + colors[found]);
                }
                found++;
                for(var i = 0; i < wordsToFind.length; i++) {
                    if(wordsToFind[i].innerText == word) {
                        wordsToFind[i].classList.add("found");
                    };
                };
            }
            console.log(found + " / " + wordsToFind.length);
            if(found == wordsToFind.length) {
                var gridSuccess = true;
                if(gridSuccess) {
                    var modalContainer = document.getElementById("alertHandler");
                    modalContainer.style.display = "flex";
                    var modalTitle = document.getElementsByClassName("modalTitle");
                    modalTitle[0].children[0].innerText = "Félicitations !";
                    modalTitle[0].children[0].style.color = "#74D941";
                    modalTitle[0].children[1].innerText = "Vous avez réussi la grille !";
                    var modalInfo = document.getElementsByClassName("modalInfo");
                    modalInfo[0].children[0].innerText = "Voulez-vous changer de difficulté ?";
                }
            }
        };
    });
};