var vue = new Vue({
    el: "#update",
    data: function() {
        return {
            editUsername: false
        }
    },
    methods: {
        showUserEditForm: function() {
            this.editUsername = true;
            editFormFunction();
        },
        closeUserEditForm: function() {
            this.editUsername = false;
            !editFormFunction();
        }
    }
});

var editForm = document.getElementsByClassName("userEditForm");

function editFormFunction() {
    editForm[0].classList.toggle("displayEditForm");
};