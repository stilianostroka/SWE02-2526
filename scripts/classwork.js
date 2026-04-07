$(document).ready(function () {

    $("#convertBtn").click(function () {

        const amount = parseFloat($("#amount").val());
        const date = $("#date").val();


        $.ajax({
            async: true,
            crossDomain: true,
            url: `https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert?from=USD&to=EUR&amount=${amount}&date=${date}`,
            method: 'GET',
            headers: {
               'x-rapidapi-key': 'f94d44f427msh6744274efc4d0f6p16a6e4jsna1127815b802',
		       'x-rapidapi-host': 'currency-conversion-and-exchange-rates.p.rapidapi.com',
            }
        }).done(function (response) {

            $("#result").text(
                amount + " USD = " + response.result + " EUR (" + date + ")"
            );

        });

    });

});