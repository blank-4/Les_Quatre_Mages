var vue = new Vue({
    el: "#navbar",
    data: function() {
        return {

        }
    },
    methods: {
        showSidebar: function() {
            sidebarFunction();
        },
        testSweet: function() {
            testSweetFunction()
        }
    }
});

var sidebar = document.getElementsByTagName("ul");

function sidebarFunction() {
    sidebar[0].classList.toggle("slideFromRight");
};

function testSweetFunction() {
    swal('ça marche','beau gosse')
}