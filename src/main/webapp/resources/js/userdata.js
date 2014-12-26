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
//                        $(".time_date").eq(7).append(data.weekList[7]); 
            }     
                        }
                    });
                    var time_mounts = { January: 1, February: 2, March: 3, April: 4, May: 5, June: 6, July: 7, August: 8, September: 9, October: 10, November: 11, December: 12};
//        var obj = { one: 1, two: 2, three: 3, four: 4, five: 5 };
            $.each( time_mounts, function( i, val ) {
//                    $( "#" + i ).append( document.createTextNode( " - " + val ) );
//                alert('Значение ключа '+i+' : '+val);
//                if (mounts == val) {
//                    i
//                }
                });
//                        var mounts = data.currentMonth;    
//                        $(time_mounts).each(function(key, val) {
//                        alert('Значение ключа '+key+' : '+val[]);
//                    });
        
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
            var time_day_add ='<div class="time_tab_row"><div class="col-md-4 margin_bottom_10 "><div class="col-md-4 font_size_18 time_date"></div><div class="col-md-4 font_size_18 time_day"></div><div class="col-md-4"><input type="text" class="form-control" placeholder="Start"></div></div><div class="col-md-4 margin_bottom_10"><div class="col-md-6"><input type="text" class="form-control" placeholder="End"></div><div class="col-md-6"><input type="text" class="form-control" placeholder="Rest"></div></div><div class="col-md-4 margin_bottom_10"><div class="col-md-4"><select class="form-control"><option>1</option><option>2</option></select></div><div class="col-md-4 "><button type="button" class="btn btn-danger btn-block time_tab_del">Delete</button></div></div></div>'
            $(this).parent().after(time_day_add);
        $('.time_tab_del').bind('click',function(){
            $($(this).parents().get(2)).remove();
        });
        });


        $('#date_submit').click(function date_submit(){
                var selected_date  = {
                currentYear: $(".time_year option:selected").text(),
                currentMonth: $(".time_mount option:selected").text(),
                currentWeekNumber: $(".time_week option:selected").text()
            };
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
                    200: function (data) {
                        $(".time_date").empty();
                        $(".time_date").eq(0).append(data.weekList[0]);
                        $(".time_date").eq(1).append(data.weekList[1]);
                        $(".time_date").eq(2).append(data.weekList[2]);
                        $(".time_date").eq(3).append(data.weekList[3]);
                        $(".time_date").eq(4).append(data.weekList[4]);
                        $(".time_date").eq(5).append(data.weekList[5]);
                        $(".time_date").eq(6).append(data.weekList[6]);
                    }
                }
            });
        };
               $('#compensation_btn').click(function compensation(){
                var compensation = {
                    use_time_for_time: $('#compensation_time').val()   
                };
                  compensation_json(compensation);
               });
            function compensation_json(data) {
            $.ajax({
                type: "POST",
                url: "api/usetimefortime",
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
//        var time_start = new Array( data.weekList[0], data.weekList[1],data.weekList[3], data.weekList[4],data.weekList[5], data.weekList[6] );
//        alert(time_start[1]);
   $('#payment_time_btn').click(function payment_time(){
                var paymenttime = {
                    avl_time_for_pay: $('#payment_time_field').val()   
                };
                  alert(paymenttime.avl_time_for_pay);
                  payment_json(avl_time_for_pay);
               });
            function payment_json(data) {
            $.ajax({
                type: "POST",
                url: "api/paymenttime",
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