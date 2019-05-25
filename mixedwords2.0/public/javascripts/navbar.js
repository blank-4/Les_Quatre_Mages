var vue = new Vue({
    el: "#navbar",
    data: function() {
        return {

        }
    },
    methods: {
        showSidebar: function() {
            sidebarFunction();
        }
    }
});

var sidebar = document.getElementsByTagName("ul");
console.log(sidebar);

function sidebarFunction() {
    sidebar[0].classList.toggle("slideFromRight");
};