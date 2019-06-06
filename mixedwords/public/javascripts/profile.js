var vue = new Vue({
    el: "#update",
    data: function() {
        return {
            editUsername: false,
            editEmail: false,
            editPassword: false
        }
    },
    methods: {
        showUserEditForm: function(param) {
            if(param == 'username') {
                this.editUsername = true;
                editFormFunction();
            }
            if(param == 'email') {
                this.editEmail = true;
                editFormFunction();
            }
            if(param == 'password') {
                this.editPassword = true;
                editFormFunction();
            }
        },
        closeUserEditForm: function(param) {
            if(param == 'username') {
                this.editUsername = false;
                !editFormFunction();
            }
            if(param == 'email') {
                this.editEmail = false;
                !editFormFunction();
            }
            if(param == 'password') {
                this.editPassword = false;
                !editFormFunction();
            }
        }
    }
});

var editForm = document.getElementsByClassName("userEditForm");

function editFormFunction() {
    editForm[0].classList.toggle("displayEditForm");
};