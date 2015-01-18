    $(document).ready(function(){
        $(".hide_tabs").hide();  // Спрятать все табы пока водитель не введет настройки
                        
        //Получение значений текущего дня недели и запись на таб время
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
//                        $(".time_mount :nth-child("+data.currentMonth+")").attr("selected", "selected");
//                        $(".time_week :nth-child("+data.currentWeekNumber+")").attr("selected", "selected");
            }     
                        }
                    });
        // Редирект на index.html после нажатия кнопки logout
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
        $("#time_monday_type_day").change(function(){
          if($("#time_monday_type_day").is(':checked')){
                $(".add_row_monday button").hide();
                $(".add_row_monday button").attr("disabled","disabled");
                $(".time_monday_start").attr("disabled","disabled");
                $(".time_monday_start").val('00:00')
                $(".time_monday_end").attr("disabled","disabled");
                $(".time_monday_end").val('00:00')
                $(".time_monday_rest").attr("disabled","disabled");
                $(".time_monday_rest").val('00:00')
              } 
            else {
                $(".add_row_monday button").show();
                $(".add_row_monday button").removeAttr("disabled","disabled");
                $(".time_monday_start").removeAttr("disabled","disabled");
                $(".time_monday_start").val('')
                $(".time_monday_end").removeAttr("disabled","disabled");
                $(".time_monday_end").val('')
                $(".time_monday_rest").removeAttr("disabled","disabled");
                $(".time_monday_rest").val('') 
              }
            });   
        $("#time_tuesday_type_day").change(function(){
          if($("#time_tuesday_type_day").is(':checked')){
                $(".add_row_tuesday button").hide();
                $(".add_row_tuesday button").attr("disabled","disabled");
                $(".time_tuesday_start").attr("disabled","disabled");
                $(".time_tuesday_start").val('00:00')
                $(".time_tuesday_end").attr("disabled","disabled");
                $(".time_tuesday_end").val('00:00')
                $(".time_tuesday_rest").attr("disabled","disabled");
                $(".time_tuesday_rest").val('00:00')
              } 
            else {
                $(".add_row_tuesday button").show();
                $(".add_row_tuesday button").removeAttr("disabled","disabled");
                $(".time_tuesday_start").removeAttr("disabled","disabled");
                $(".time_tuesday_start").val('')
                $(".time_tuesday_end").removeAttr("disabled","disabled");
                $(".time_tuesday_end").val('')
                $(".time_tuesday_rest").removeAttr("disabled","disabled");
                $(".time_tuesday_rest").val('') 
              }
            });      
        $("#time_wednesday_type_day").change(function(){
          if($("#time_wednesday_type_day").is(':checked')){
                $(".add_row_wednesday button").hide();
                $(".add_row_wednesday button").attr("disabled","disabled");
                $(".time_wednesday_start").attr("disabled","disabled");
                $(".time_wednesday_start").val('00:00')
                $(".time_wednesday_end").attr("disabled","disabled");
                $(".time_wednesday_end").val('00:00')
                $(".time_wednesday_rest").attr("disabled","disabled");
                $(".time_wednesday_rest").val('00:00')
              } 
            else {
                $(".add_row_wednesday button").show();
                $(".add_row_wednesday button").removeAttr("disabled","disabled");
                $(".time_wednesday_start").removeAttr("disabled","disabled");
                $(".time_wednesday_start").val('')
                $(".time_wednesday_end").removeAttr("disabled","disabled");
                $(".time_wednesday_end").val('')
                $(".time_wednesday_rest").removeAttr("disabled","disabled");
                $(".time_wednesday_rest").val('') 
              }
            });   
        $("#time_thursday_type_day").change(function(){
          if($("#time_thursday_type_day").is(':checked')){
                $(".add_row_thursday button").hide();
                $(".add_row_thursday button").attr("disabled","disabled");
                $(".time_thursday_start").attr("disabled","disabled");
                $(".time_thursday_start").val('00:00')
                $(".time_thursday_end").attr("disabled","disabled");
                $(".time_thursday_end").val('00:00')
                $(".time_thursday_rest").attr("disabled","disabled");
                $(".time_thursday_rest").val('00:00')
              } 
            else {
                $(".add_row_thursday button").show();
                $(".add_row_thursday button").removeAttr("disabled","disabled");
                $(".time_thursday_start").removeAttr("disabled","disabled");
                $(".time_thursday_start").val('')
                $(".time_thursday_end").removeAttr("disabled","disabled");
                $(".time_thursday_end").val('')
                $(".time_thursday_rest").removeAttr("disabled","disabled");
                $(".time_thursday_rest").val('') 
              }
            });      
        $("#time_friday_type_day").change(function(){
          if($("#time_friday_type_day").is(':checked')){
                $(".add_row_friday button").hide();
                $(".add_row_friday button").attr("disabled","disabled");
                $(".time_friday_start").attr("disabled","disabled");
                $(".time_friday_start").val('00:00')
                $(".time_friday_end").attr("disabled","disabled");
                $(".time_friday_end").val('00:00')
                $(".time_friday_rest").attr("disabled","disabled");
                $(".time_friday_rest").val('00:00')
              } 
            else {
                $(".add_row_friday button").show();
                $(".add_row_friday button").removeAttr("disabled","disabled");
                $(".time_friday_start").removeAttr("disabled","disabled");
                $(".time_friday_start").val('')
                $(".time_friday_end").removeAttr("disabled","disabled");
                $(".time_friday_end").val('')
                $(".time_friday_rest").removeAttr("disabled","disabled");
                $(".time_friday_rest").val('') 
              }
            }); 
        $("#time_saturday_type_day").change(function(){
          if($("#time_saturday_type_day").is(':checked')){
                $(".add_row_saturday button").hide();
                $(".add_row_saturday button").attr("disabled","disabled");
                $(".time_saturday_start").attr("disabled","disabled");
                $(".time_saturday_start").val('00:00')
                $(".time_saturday_end").attr("disabled","disabled");
                $(".time_saturday_end").val('00:00')
                $(".time_saturday_rest").attr("disabled","disabled");
                $(".time_saturday_rest").val('00:00')
              } 
            else {
                $(".add_row_saturday button").show();
                $(".add_row_saturday button").removeAttr("disabled","disabled");
                $(".time_saturday_start").removeAttr("disabled","disabled");
                $(".time_saturday_start").val('')
                $(".time_saturday_end").removeAttr("disabled","disabled");
                $(".time_saturday_end").val('')
                $(".time_saturday_rest").removeAttr("disabled","disabled");
                $(".time_saturday_rest").val('') 
              }
            });       
        $("#time_sunday_type_day").change(function(){
          if($("#time_sunday_type_day").is(':checked')){
                $(".add_row_sunday button").hide();
                $(".add_row_sunday button").attr("disabled","disabled");
                $(".time_sunday_start").attr("disabled","disabled");
                $(".time_sunday_start").val('00:00')
                $(".time_sunday_end").attr("disabled","disabled");
                $(".time_sunday_end").val('00:00')
                $(".time_sunday_rest").attr("disabled","disabled");
                $(".time_sunday_rest").val('00:00')
              } 
            else {
                $(".add_row_sunday button").show();
                $(".add_row_sunday button").removeAttr("disabled","disabled");
                $(".time_sunday_start").removeAttr("disabled","disabled");
                $(".time_sunday_start").val('')
                $(".time_sunday_end").removeAttr("disabled","disabled");
                $(".time_sunday_end").val('')
                $(".time_sunday_rest").removeAttr("disabled","disabled");
                $(".time_sunday_rest").val('') 
              }
            });
        
//        $(".time_monday_type_day option:nth-child(1):selected").change({
//            $(".add_row_monday button").attr("disabled","disabled");
//        })
//        $(".time_monday_type_day option:nth-child(2):selected").change({
//                 $(".add_row_monday button").removeAttr("disabled","disabled");
//        }
        
//        $(".time_monday_type_day").change(function(){
////          $(".add_row_monday button").removeAttr("disabled","disabled");
//          var tape_day_moyday = $(".time_monday_type_day option:selected").text()
//           if (tape_day_moyday = 'Weekend'){
//            $(".add_row_monday button").attr("disabled","disabled");
//
////          $('.add_row_monday button').prop('disabled', !(checkval == '1' || checkval == '2'));
////          if (tape_day_moyday = 'Weekend'){
////          $(".add_row_monday button").attr("disabled","disabled");
////          }
//            else {
////                if (tape_day_moyday = 'Work'){
//             $(".add_row_monday button").removeAttr("disabled","disabled");
//            };
//            }; 
//        });

        
        $('.add_row_monday').bind('click',function(){
         var time_day_add = tryOne("monday");
         $(this).parent().after(time_day_add);
         $('.time_tab_del').bind('click',function(){
         $($(this).parents().get(2)).remove();
         });
         });

        $('.add_row_tuesday').click(function(){
            var time_day_add = tryOne("tuesday");
            $(this).parent().after(time_day_add);
            $('.time_tab_del').bind('click',function(){
                $($(this).parents().get(2)).remove();
            });
        });

        $('.add_row_wednesday').click(function(){
            var time_day_add = tryOne("wednesday");
            $(this).parent().after(time_day_add);
            $('.time_tab_del').bind('click',function(){
                $($(this).parents().get(2)).remove();
            });
        });
        $('.add_row_thursday').click(function(){
            var time_day_add = tryOne("thursday");
            $(this).parent().after(time_day_add);
            $('.time_tab_del').bind('click',function(){
                $($(this).parents().get(2)).remove();
            });
        });
        $('.add_row_friday').click(function(){
            var time_day_add = tryOne("friday");
            $(this).parent().after(time_day_add);
            $('.time_tab_del').bind('click',function(){
                $($(this).parents().get(2)).remove();
            });
        });
        $('.add_row_saturday').click(function(){
            var time_day_add = tryOne("saturday");
            $(this).parent().after(time_day_add);
            $('.time_tab_del').bind('click',function(){
                $($(this).parents().get(2)).remove();
            });
        });
        $('.add_row_sunday').click(function(){
            var time_day_add = tryOne("sunday");
            $(this).parent().after(time_day_add);
            $('.time_tab_del').bind('click',function(){
                $($(this).parents().get(2)).remove();
            });
        });

    function tryOne(data) {
        var time_day_add = '<div class="time_tab_row">' +
            '<div class="col-md-4 margin_bottom_10 ">' +
            '<div class="col-md-4 font_size_18 time_date"></div>' +
            '<div class="col-md-4 font_size_18 time_day"></div>' +
            '<div class="col-md-4">' +
            '<input type="text" class="form-control time_' + data +'_start" placeholder="Start"></div></div>' +
            '<div class="col-md-4 margin_bottom_10"><div class="col-md-6"><input type="text" class="form-control time_' + data +'_end" placeholder="End"></div>' +
            '<div class="col-md-6"><input type="text" class="form-control time_' + data +'_rest" placeholder="Rest" number-mask=""></div>' +
            '</div>'+
            '<div class="col-md-4 margin_bottom_10">'+
//            '<div class="col-md-4">' +
//            '<select class="form-control time_' + data +'_ride_type">' +
//            '<option>1</option>' +
//            '<option>2</option>' +
//            '</select>'+
//            '</div>' +
            '<div class="col-md-4"><button type="button" class="btn btn-danger btn-block time_tab_del">Delete</button></div></div></div>'
        return time_day_add;
    };   
//        function tryOne(data) {
////        var n = 1;    
//        var time_day_add = '<div class="time_tab_row">' +
//            '<div class="col-md-4 margin_bottom_10 ">' +
//            '<div class="col-md-4 font_size_18 time_date"></div>' +
//            '<div class="col-md-4 font_size_18 time_day"></div>' +
//            '<div class="col-md-4 form-group">'+
//            '<div>'+
//            '<input type="text" class="form-control" size="5" ng-model="selectedTimeAsNumberStart" data-time-format="HH:mm" data-time-type="number" data-autoclose="1" name="time_start_monday" placeholder="Start" bs-timepicker>'+
//      '</div>'+      
//       '</div>'+
//        '<div class="col-md-4 form-group">'+
//      '<div class="col-md-6">'+
//       '<div >'+
//        '<input type="text" class="form-control time_' + data +'_end" size="5" ng-model="selectedTimeAsNumberTuesdayEnd" data-time-format="HH:mm" data-time-type="number" data-autoclose="1" name="time2" placeholder="End" bs-timepicker>'+
//      '</div>'+
//      '</div>'+
//        '<div class="col-md-6"><input type="text" class="form-control time_tuesday_rest" placeholder="Rest"></div>'+
//       '</div>'+
//            '<div class="col-md-6"><input type="text" class="form-control time_' + data +'_rest" placeholder="Rest"></div>' +
//            '</div><div class="col-md-4 margin_bottom_10"><div class="col-md-4">' +
//            '<select class="form-control time_' + data +'_ride_type">' +
//            '<option>1</option>' +
//            '<option>2</option>' +
//            '</select></div>' +
//            '<div class="col-md-4 "><button type="button" class="btn btn-danger btn-block time_tab_del">Delete</button></div>'+
//        '</div>'+
//        '</div>'
//        return time_day_add;
//    };
// получения новых дат 
        $('#date_submit').click(function date_submit(){
                var selected_date  = {
                currentDate: $("#time_week_date").val()
            };
             $('.time_date').empty();
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
        //        Time tab end
        //            compensation time start
            $("#compensation_time").keyup(function compensation_hide_btn(){
           var compensation=$("#compensation_time").val();
     if (compensation !=="") {
        $("#compensation_btn").removeAttr("disabled");
    }
        else {
                $("#compensation_btn").attr("disabled","disabled");
        }                  
                         });
        
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
        //            compensation time end
        $("#payment_time_field").keyup(function payment_hide_btn(){
           var payment = $("#payment_time_field").val();
           var paymant_avaliable = $('#payment_time_avaliable').text();     
     if (payment !=="" && payment <= paymant_avaliable) {
        $("#payment_time_btn").removeAttr("disabled");
    }
        else {
                $("#payment_time_btn").attr("disabled","disabled");
        }                  
                         });
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
//        Time tab start
        $('#date_save').click(function date_save(){
            var s_date  = {
                Monday :    date_to_save("monday", 0),
                Tuesday :   date_to_save("tuesday", date_to_save("monday", 0).length-1),
                Wednesday : date_to_save("wednesday", date_to_save("monday", 0).length + date_to_save("tuesday", 0).length - 2),
                Thursday :  date_to_save("thursday", date_to_save("monday", 0).length + date_to_save("tuesday", 0).length + date_to_save("wednesday", 0).length - 3),
                Friday :    date_to_save("friday", date_to_save("monday", 0).length + date_to_save("tuesday", 0).length + date_to_save("wednesday", 0).length + date_to_save("thursday", 0).length - 4),
                Saturday :  date_to_save("saturday", date_to_save("monday", 0).length + date_to_save("tuesday", 0).length + date_to_save("wednesday", 0).length + date_to_save("thursday", 0).length + date_to_save("friday", 0).length - 5),
                Sunday :    date_to_save("sunday", date_to_save("monday", 0).length + date_to_save("tuesday", 0).length + date_to_save("wednesday", 0).length + date_to_save("thursday", 0).length + date_to_save("friday", 0).length + date_to_save("saturday", 0).length - 6)

            };
            time_save(s_date);
        });
        function time_save(data) {
            $.ajax({
                type: "POST",
                url: "api/time",
                data: JSON.stringify(data),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                statusCode: {
                    200: function () {
                        alert("good")
                    }
                }
            });
        }
        function date_to_save(day, number){
            var arr = [];
            arr[arr.length] ={
                date : $(".time_date").eq(Number(number)).text()
            };
            $(".time_"+ day +"_start").each(function(data){
                arr[arr.length] ={
                    startWorkingTime :  $(".time_"+ day +"_start").eq(data).val(),
                    endWorkingTime :    $(".time_"+ day +"_end").eq(data).val(),
                    restTime :          $(".time_"+ day +"_rest").eq(data).val(),
                    rideType :          $(".time_"+ day +"_ride_type option:selected").eq(data).val()
                };
            });
            return arr;
        }
        //        Time tab end
        //            Settings tab start 

        $('#setting_save').click(function save_btn(){
//            var monday_hours = $("#settings_monday").val();
//            var tuesday_hours = $("#settings_tuesday").val();
//            var wednesday_hours = $("#settings_wednesday").val();
//            var thursday_hours = $("#settings_thursday").val();
//            var friday_hours = $("#settings_friday").val();
//            var saturday_hours = $("#settings_saturday").val();
//            var sunday_hours = $("#settings_sunday").val();          
//            alert(monday_hours);
            var selected_settings  = {
            monday_hours : $("#settings_monday").val(), 
            tuesday_hours : $("#settings_tuesday").val(), 
            wednesday_hours : $("#settings_wednesday").val(), 
            thursday_hours : $("#settings_thursday").val(), 
            friday_hours : $("#settings_friday").val(), 
            saturday_hours : $("#settings_saturday").val(), 
            sunday_hours : $("#settings_sunday").val(),                 
           	suterday_compensation:  $("#suterday_compensation").is(':checked'),
        	test1:  $("#text1").text(),
           	allow_suterday_compensation:  $("#allow_suterday_compensation").is(':checked'),
            select1: $("#select1 option:selected").text(),
            select2: $("#select2 option:selected").text(),
            select3: $("#select3 option:selected").text(),
            check3:  $("#check3").is(':checked'),
            check4:  $("#check4").is(':checked'),
            select4: $("#select4 option:selected").text(),
        };
//            alert(selected_settings.monday_hours);
       settings(selected_settings);
         }); 
        function settings(data) {
        $.ajax({
            type: "POST",
            url: "api/settings",
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
                    $("#settings_monday,#settings_tuesday,#settings_wednesday,#settings_thursday,#settings_friday,#settings_saturday,#settings_sunday").keyup(function settings_day_hours(){
//                        alert('ok')
                    var monday_hours = $("#settings_monday").val();
                    var tuesday_hours = $("#settings_tuesday").val();
                    var wednesday_hours = $("#settings_wednesday").val();
                    var thursday_hours = $("#settings_thursday").val();
                    var friday_hours = $("#settings_friday").val();
                    var saturday_hours = $("#settings_saturday").val();
                    var sunday_hours = $("#settings_sunday").val();
                    if (monday_hours !=="" && tuesday_hours !=="" && wednesday_hours !=="" && thursday_hours !=="" && friday_hours  !=="" && sunday_hours !=="") {
                    $(".hide_tabs").show(); // Показать табы если введены поля времени
                    $('#setting_save').removeAttr("disabled","disabled")
                    $('#setting_save').click();
                    }
                        else {
                    $(".hide_tabs").hide(); 
                    $('#setting_save').attr("disabled","disabled");
                    }
                    });
        //            Settings tab end 

       //            Tab time multitrip start 
        $('#multitrip_save').click(function multitrip(day){
        var multitripDateStart = $('#time_week_date_modal1').val();
        var multitripTimeStart = $('#time_start_modal').val();  
        var multitripDateEnd = $('#time_week_date_modal2').val();
        var multitripTimeEnd = $('#time_end_modal').val(); 
            
        $('#time_week_date_modal1').val('');
        $('#time_start_modal').val('');  
        $('#time_week_date_modal2').val('');
        $('#time_end_modal').val('');
            
        $('#modal_close').click();  
            
        $( ".time_tab div:contains("+multitripDateStart+")").children(3).addClass('modal_date1_start');
        $( ".modal_date1_start:nth-child(3) input").val(multitripTimeStart);   
        $( ".modal_date1_start:nth-child(3) input.ng-pristine").attr('disabled','disabled');
            
        $( ".time_tab div:contains("+multitripDateStart+")").next().addClass('modal_parent_date1_end');         $( ".modal_parent_date1_end:nth-child(2) input.ng-pristine").val('00:00');   
        $( ".modal_parent_date1_end:nth-child(2) input.ng-pristine").attr('disabled','disabled');  

        $( ".time_tab div:contains("+multitripDateEnd+")").children(3).addClass('modal_date2_start');
        $( ".modal_date2_start:nth-child(3) input").val("00:00");
        $( ".modal_date2_start:nth-child(3) input").attr('disabled','disabled');
            
        $( ".time_tab div:contains("+multitripDateEnd+")").next().addClass('modal_parent_date2_end');    
        $( ".modal_parent_date2_end:nth-child(2) input.ng-pristine").val(multitripTimeEnd);   
        $( ".modal_parent_date2_end:nth-child(2) input.ng-pristine").attr('disabled','disabled');
      
        $( ".time_tab div:contains("+multitripDateEnd+")").children(3).removeClass('modal_date1_start');
        $( ".time_tab div:contains("+multitripDateEnd+")").children(3).removeClass('modal_date1_end');           $( ".time_tab div:contains("+multitripDateEnd+")").children(3).removeClass('modal_date2_start');
        $( ".time_tab div:contains("+multitripDateEnd+")").children(3).removeClass('modal_date2_end');
       //            Tab time multitrip end 
    });
    });