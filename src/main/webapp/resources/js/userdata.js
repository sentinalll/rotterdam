    $(document).ready(function(){
                        $.ajax({
                        //data: str,
                        type: "POST",
                        url: "api/home",
                        datatype: "json",
                        contentType: "application/json; charset=utf-8",
                        statusCode: {
                        200: function (data) {
                        $("#username").append(data.firstname)
                        $("#userdate").append(data.date)
            }
                        }
                    });
        $('#logout').click(function(){
             $.ajax({
              type: "POST",
              url: "api/logout",
              data: JSON.stringify(data),
              contentType: "application/json; charset=utf-8",
              dataType: "json",
              statusCode: {
                  200: function () {
                      location.href='index.html';
                  },
              }
          });
        });
     });