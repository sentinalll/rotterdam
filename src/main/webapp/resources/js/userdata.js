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
                        $(".time_date").eq(0).append(data.weekList[0]);   
                        $(".time_date").eq(1).append(data.weekList[1]);   
                        $(".time_date").eq(2).append(data.weekList[2]);   
                        $(".time_date").eq(3).append(data.weekList[3]);   
                        $(".time_date").eq(4).append(data.weekList[4]);   
                        $(".time_date").eq(5).append(data.weekList[5]);   
                        $(".time_date").eq(6).append(data.weekList[6]);   
                        $(".time_date").eq(7).append(data.weekList[7]);   
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
            var time_day_add =  '<div class="col-md-4 margin_bottom_10"><div class="col-md-4 font_size_18">02.12.2014</div><div class="col-md-4 font_size_18">Monday</div><div class="col-md-4"><input type="text" class="form-control" placeholder="Start"></div></div><div class="col-md-4 margin_bottom_10"><div class="col-md-6"><input type="text" class="form-control" placeholder="End"></div><div class="col-md-6"><input type="text" class="form-control" placeholder="Rest"></div></div><div class="col-md-4 margin_bottom_10"><div class="col-md-4"><select class="form-control"><option></option><option></option></select></div><div class="col-md-4 add_row"><button type="button" class="btn btn-danger btn-block ">Delete</button></div></div>'
            $(this).parent().after(time_day_add);
        });
        $('#date_submit').click(function date_submit(){
                var selected_date  = {
                year: $(".time_year option:selected").text(),
                mount: $(".time_mount option:selected").text(),
                week: $(".time_week option:selected").text()
            };
            alert(selected_date);
            time_date(selected_date);
             });   
            function time_date(data) {
            $.ajax({
                type: "POST",
                url: "api/week",
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