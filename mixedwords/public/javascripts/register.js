var vue = new Vue({
    el: "#form",
    data: function() {
        return {
            username: "",
            email: "",
            password: "",
            passwordConfirmation: "",
            error: false,
            errorMessage: ""
        }
    },
    watch: {
        username(value) {
            if(value.length > 15) {
                this.error = true;
                this.errorMessage = "Nom d'utilisateur trop long";
            } else {
                this.error = false;
            }
        },
        password(value) {
            if(value.length > 15) {
                this.error = true;
                this.errorMessage = "Mot de passe trop long";
            } else {
                this.error = false;
            }
        },
        passwordConfirmation(value) {
            if((value.length > 0) && (value.length != this.password.length)) {
                this.error = true;
                this.errorMessage = "Mots de passe différents";
            } else {
                this.error = false;
            }
        }
    }
});