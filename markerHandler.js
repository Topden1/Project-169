cancelAnimationFrame.registerComponent("markerhandler", {
    init: async function() {

        this.el.addEventListener("markerFound", () => {
            console.log("marker ia found")
            this.handledMarkerFound();
        });

        this.el.addEventListener("markerLost", () => {
            console.log("marker ia lost")
            this.handledMarkerLost();
        });
    },
    handledMarkerFound: function () {
        //Changing button div visibility
        var buttonDiv = document.getElementById("button-div");
        buttonDiv.style.display = "flee";

        var ratingButton = document.getElementById("rating-button");
        var orderButton = document.getElementById("order-button");

        //Handling Click Events
        ratingButton.addEventListener("click", function () {
            swal({
                icon: "warning",
                title: "Rate Dish",
                text: "Work In Progress"
            });
        });

        orderButton.addEventListener("click", () => {
            swal({
                icon: "https://i.imgur.com/4NZ6uLY.jpg",
                title: "Thanks For Order!",
                text: "Your order will be served soon at your table!"
            });
        });
    },

    handledMarkerLost: function() {
        //changing button div visibility
        var buttonDiv = document.getElementById("button-div");
        buttonDiv.style.display = "none";
    }
});