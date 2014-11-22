       $(document).ready(function(){
           $("#login-btn").click(function submitButton() {
            var Auth = {
            login: $('#loginField').val(),
            password: $('#login_password').val()
        };
          addData(Auth);
            });
             $("#reg-btn").click(function registerButton() {
            var User = {
                login: $('#inputName').val(),
                pass: $('#inputPassword').val(),
                email: $('#inputEmail').val(),
                passconfirm:$('#inputPasswordConfirm').val()
            };
            addUser(User);
        });
        $("#inputFogotPassword").click(function fogotButton() { 
           var Fogot_pass = {
             email_fogot: $('#inputFogotPassword').val()   
           };
          fogotPass(Fogot_pass);
        });
    });

        function fogotPass(data) {// pass your data in method
            $.ajax({
                type: "POST",
                url: "api/restore",
                data: JSON.stringify(data),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                statusCode: {
                    200: function () {
                        alert("Success...");
                    }
                }
            });
        };
      
        function addUser(data) {// pass your data in method
            
            $.ajax({
                type: "POST",
                url: "api/registration",
                data: JSON.stringify(data),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                statusCode: {
                    200: function () {
                        alert("Success...");
                    },
                    401: function () {
                        alert("Invalid login or password");
                    }
                }
            });
        }
            
            
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

     