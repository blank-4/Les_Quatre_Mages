var vue = new Vue ({
    el: "#app",
    data: () => {
        return {

        }
    },
    methods: {
        showPlay: () => {
            openPlay();
        },
        showOption: () => {
            openOption();
        },
        hidePlay: () => {
            closePlay();
        },
        hideOption: () => {
            closeOption();
        },
        hideRules: () => {
            closeRules();
        }
    }
})
/* --------------------------------------------- VARIABLES --------------------------------------------- */
/* ----------------------------------------- DOM VARS & CONSTS ----------------------------------------- */
const playButton = document.getElementById("playModal");
const optionButton = document.getElementById("optionModal");
const gameRules = document.getElementById("gameRules");
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