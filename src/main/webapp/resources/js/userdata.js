    $(document).ready(function(){
                        $.ajax({
                        //data: str,
                        type: "POST",
                        url: "api/home",
                        datatype: "json",
                        contentType: "application/json; charset=utf-8",
//                      success: function(data) {
                        statusCode: {
                        200: function (data) {
//                        alert("ok");
//                        alert(userinfo);
//                        var name = userinfo.firstname;
//                        var date = userinfo.date;
//                        var userinfo = JSON.parse(userjson);
                        $("#username").append(data.firstname)
                        $("#userdate").append(data.date)
//                        alert(data.firstname);
//                        alert(data.date);

            }
                        }
                    });
     });