/* ------------------------------------------- INSTANCE VUE -------------------------------------------- */
/* ---------------------------------------------- NAVBAR ----------------------------------------------- */
var secondVue = new Vue ({
    el: "#navapp",
    data: () => {
        return {

        }
    },
    methods: {
        // Permet d'afficher le formulaire d'inscription ( desktop )
        desktopRegister: () => {
            dropRegister();
        },
        // Permet d'afficher le formulaire de connexion ( desktop )
        desktopLogin: () => {
            dropLogin();
        }
    }
})
/* ------------------------------------------- INSTANCE VUE -------------------------------------------- */
/* ----------------------------------------------- MAIN ------------------------------------------------ */
var firstVue = new Vue ({
    el: "#app",
    data: () => {
        return {

        }
    },
    methods: {
        // Permet d'ouvrir une modal contenant un formulaire de connexion pour jouer ( mobile )
        showPlay: () => {
            openPlay();
        },
        // Permet d'ouvrir une modal affichant certaines options possibles ( bonus ) ( mobile )
        showOption: () => {
            openOption();
        },
        // Permet de fermer la modal de connexion ( mobile )
        hidePlay: () => {
            closePlay();
        },
        // Permet de fermer la modal d'option ( mobile )
        hideOption: () => {
            closeOption();
        },
        // Permet de fermer les règles qui s'affichent au début du jeu sur les grilles ( mobile )
        hideRules: () => {
            closeRules();
        },
        // Permet d'ouvrir une modal affichant certaines otpions possibles ( bonus ) ( desktop )
        desktopOption: () => {
            optionDesktop();
        },
        // Permet de fermer la modal d'option ( desktop )
        closeDesktopOption: () => {
            closeOptionDesktop();
        }
    }
})
/* --------------------------------------------- VARIABLES --------------------------------------------- */
/* ----------------------------------------- DOM VARS & CONSTS ----------------------------------------- */
const playButton = document.getElementById("playModal");
const optionButton = document.getElementById("optionModal");
const gameRules = document.getElementById("gameRules");
const desktopOption = document.getElementById("desktopOption");
const registerDropdown = document.getElementsByClassName("registerDropdown");
const loginDropdown = document.getElementsByClassName("loginDropdown");
/* --------------------------------------------- FUNCTIONS --------------------------------------------- */
/* ------------------------------------------ DOM MANIPULATION ----------------------------------------- */
function openPlay() {
    playButton.style.display = "flex";
    playButton.classList.remove('scale-out-center');
    playButton.classList.toggle('scale-in-center');
}
function openOption() {
    optionButton.style.display = "flex";
    optionButton.classList.remove('scale-out-center');
    optionButton.classList.toggle('scale-in-center');
}
function closePlay() {
    playButton.classList.toggle('scale-out-center');
    playButton.classList.remove('scale-in-center');
}
function closeOption() {
    optionButton.classList.toggle('scale-out-center');
    optionButton.classList.remove('scale-in-center');
}
function closeRules() {
    gameRules.classList.toggle('scale-out-center-rules');
}
function optionDesktop() {
    desktopOption.style.display = "flex";
    desktopOption.classList.remove('desktop-scale-out-center');
    desktopOption.classList.toggle('desktop-scale-in-center');
}
function closeOptionDesktop() {
    desktopOption.classList.toggle('desktop-scale-out-center');
    desktopOption.classList.remove('desktop-scale-in-center');
}
function dropRegister() {
    registerDropdown[0].classList.toggle('drop');
}
function dropLogin() {
    loginDropdown[0].classList.toggle('drop');
}