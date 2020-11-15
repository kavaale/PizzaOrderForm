$(document).ready(
    function () {
        $("#tabs a").click(showTab);
        $("#confirmationtab").click(calculatePizza);
        var pizzaTotal = 0;

        function showTab(event) {
            //function for tabs
            event.preventDefault();
            $(this).tab("show");
        }

        function calculatePizza() {
            var toppingString = "cheese";

            //grabs all the values
            if ($("input[name='pizza']:checked").val() == "small") {
                $("#size").text("small");
                pizzaTotal = 7;
            }
            else if ($("input[name='pizza']:checked").val() == "medium") {
                $("#size").text("medium");
                pizzaTotal = 9;
            }
            else if ($("input[name='pizza']:checked").val() == "large") {
                $("#size").text("large");
                pizzaTotal = 12;
            }

            if ($("input[name='crust']:checked").val() == "thin") {
                $("#crust").text("thin");
            }
            else if ($("input[name='crust']:checked").val() == "pan") {
                $("#crust").text("pan fried");
            }
            else if ($("input[name='crust']:checked").val() == "nongluten") {
                $("#crust").text("gluten free");
            }

            if ($("#sausage").is(":checked")) {
                pizzaTotal += 1.5;
                toppingString = "sausage";
            }
            if ($("#pepperoni").is(":checked")) {
                pizzaTotal += 1.5;
                if (toppingString == "cheese") {
                    toppingString = "pepperoni";
                }
                else {
                    toppingString = toppingString.concat(", pepperoni")
                }

            }
            if ($("#bacon").is(":checked")) {
                pizzaTotal += 1.5;
                if (toppingString == "cheese") {
                    toppingString = "bacon"
                }
                else {
                    toppingString = toppingString.concat(", bacon")
                }
            }
            if ($("#canadian").is(":checked")) {
                pizzaTotal += 1.5;
                if (toppingString == "cheese") {
                    toppingString = "canadian"
                }
                else {
                    toppingString = toppingString.concat(", canadian bacon")
                }
            }
            if ($("#chicken").is(":checked")) {
                pizzaTotal += 1.5;
                if (toppingString == "cheese") {
                    toppingString = "chicken"
                }
                else {
                    toppingString = toppingString.concat(", chicken")
                }
            }
            if ($("#mushroom").is(":checked")) {
                pizzaTotal += 1;
                if (toppingString == "cheese") {
                    toppingString = "mushroom"
                }
                else {
                    toppingString = toppingString.concat(", mushroom")
                }
            }
            if ($("#onion").is(":checked")) {
                pizzaTotal += 1;
                if (toppingString == "cheese") {
                    toppingString = "onion"
                }
                else {
                    toppingString = toppingString.concat(", onion")
                }
            }
            if ($("#pineapple").is(":checked")) {
                pizzaTotal += 1;
                if (toppingString == "cheese") {
                    toppingString = "pineapple"
                }
                else {
                    toppingString = toppingString.concat(", pineapple")
                }
            }
            if ($("#olive").is(":checked")) {
                pizzaTotal += 1;
                if (toppingString == "cheese") {
                    toppingString = "olive"
                }
                else {
                    toppingString = toppingString.concat(", olive")
                }
            }
            if ($("#jalapeno").is(":checked")) {
                pizzaTotal += 1;
                if (toppingString == "cheese") {
                    toppingString = "jalapeno"
                }
                else {
                    toppingString = toppingString.concat(", jalapeno")
                }
            }
            if ($("#spinach").is(":checked")) {
                pizzaTotal += 1;
                if (toppingString == "cheese") {
                    toppingString = "spinach"
                }
                else {
                    toppingString = toppingString.concat(", spinach")
                }
            }

            //fills the confirm page with order information
            $("#subTotal").text(pizzaTotal.toFixed(2));
            $("#topping").text(toppingString);
            $("#taxTotal").text((0.051 * pizzaTotal).toFixed(2))
            $("#pizzaTotal").text(((2 + pizzaTotal + 0.051 * pizzaTotal).toFixed(2)))
            $("#custName").text($("#name").val())
            $("#custNumb").text($("#number").val())
            $("#custAdd").text($("#address").val())
        }
    });