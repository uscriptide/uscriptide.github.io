$(document).ready(function(){
  $("body").fadeIn(3000);
  $('.collapse').collapse()
  $("#aboutId").css("opacity","0");
  $("#scheduleId").css("opacity","0");
  $("#footerId").css("opacity","0");
    $(window).scroll(function(){
      var top_of_object = $("#aboutId").position().top + $("#aboutId").outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if(bottom_of_window > top_of_object){
        $("#aboutId").animate({opacity:1}, 1000);
      }
      var top_of_object = $("#scheduleId").position().top + $("#scheduleId").outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if(bottom_of_window > top_of_object){
        $("#scheduleId").animate({opacity:1}, 1000);
      }
      var top_of_object = $("#footerId").position().top + + $("#footerId").outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if(bottom_of_window > top_of_object){
        $("#footerId").animate({opacity:1}, 1000);
      }
    });
});
