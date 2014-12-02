$(document).ready(function(){
    $("#json-test").click(function () {

        $.ajax({
            type: "POST",
            url: "api/home",
//            data: JSON.stringify(data),
//            contentType: "application/json; charset=utf-8",
            dataType: "json",
            statusCode: {
                200: function () {
                alert("Good resp");
//
//                var url = "client_page.html";
//                $(location).attr('href',url);
//            },
//            401: function () {
//                alert("Invalid login or password");
                }
            }
        });
    })
});