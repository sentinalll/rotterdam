    $(document).ready(function(){
                        $.ajax({
                        type: "POST",
                        url: "api/home",
                        datatype: "json",
                        contentType: "application/json; charset=utf-8",
                        statusCode: {
                        200: function (data) {
                        $(".username").append(data.firstname);
                        $("#userdate").append(data.date);   
                        $(".time_year option").append(data.currentYear);   
            }
                        }
                    });
        $('#logout').click(function(){
             $.ajax({
              type: "POST",
              url: "api/logout",
              contentType: "application/json; charset=utf-8",
              dataType: "json",
              statusCode: {
                  200: function () {
                      location.href='index.html';
                  }
              }
          });
        });
        $('.add_row').click(function(){
            var time_day_add =  '<div class="col-md-4 margin_bottom_10"><div class="col-md-4 font_size_18">02.12.2014</div><div class="col-md-4 font_size_18">Monday</div><div class="col-md-4"><input type="text" class="form-control" placeholder="Start"></div></div><div class="col-md-4 margin_bottom_10"><div class="col-md-6"><input type="text" class="form-control" placeholder="End"></div><div class="col-md-6"><input type="text" class="form-control" placeholder="Rest"></div></div><div class="col-md-4 margin_bottom_10"><div class="col-md-4"><select class="form-control"><option>1</option><option>2</option></select></div></div>'
            $(this).parent().after(time_day_add);
        });
        $('#date_submit').click(function date_submit(){
                var time_date = {
                year: $(".time_year option:selected").text(),
                mount: $(".time_mount option:selected").text(),
                week: $(".time_week option:selected").text()
            };
            time_date(time_date);
             });   
            function time_date(data) {
            $.ajax({
                type: "POST",
                url: "api/time/week",
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
     });