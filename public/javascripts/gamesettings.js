var vue = new Vue({
    el: "#gamesettings",
    data: () => {
        return {
            
        }
    },
    methods: {
        slideLeft: () => {
            plusSlides(-1);
        },
        slideRight: () => {
            plusSlides(1);
        }
    },
});

var slideIndex = 1;

showSlides1(slideIndex);
function plusSlides(index) {
    showSlides1(slideIndex += index);
};
function showSlides1(index) {
    var i;
    var slides = document.getElementsByClassName("difficultySelect");
    if (index > slides.length) {
        slideIndex = 1;
    }    
    if (index < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "flex";  
};