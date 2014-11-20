       $(document).ready(function(){
        $("#login-btn").click(function submitButton() {
            var Auth = {
            login: $('#loginField').val(),
            password: $('#password').val()
        };
          addData(Auth);
            
        function addData(data) {
          $.ajax({
              type: "POST",
              url: "api/login",
              data: JSON.stringify(data),
              contentType: "application/json; charset=utf-8",
              dataType: "json",
              statusCode: {
                  200: function () {
                      alert("Login success");
//                      $.ajax({
//                          //data: str,
//                          type: "POST",
//                          url: "rest/userInfo",
//                          datatype: "json",
//                          contentType: "application/json",
//                          success: function(data) {
//                              document.getElementById("user-info").innerHTML = data.login;
//                              var str = (String)(window.location);
//                              if(str.indexOf("index.html") <= -1) window.location.reload(true);
//                          },
//                          statusCode: {
//                              403: function() {
//                                  alert("Internal error");
//                              }
//                          }
//                      });
                  },
                  401: function () {
                      alert("Invalid login or password");
                  }
              }
          });
      }
                    });
    });
     