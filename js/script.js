$(document).ready(function(){
  $("body").fadeIn(3000);
  $('.collapse').collapse()
  $("#aboutId").css("opacity","0");
  $("#programId").css("opacity","0");
  $("#faqId").css("opacity","0");
  $("#teamId").css("opacity","0");
  $("#sponsorsId").css("opacity","0");
    $(window).scroll(function(){
      var top_of_object = $("#aboutId").position().top + $("#aboutId").outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if(bottom_of_window > top_of_object){
        $("#aboutId").animate({opacity:1}, 1000);
      }
      var top_of_object = $("#programId").position().top + $("#programId").outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if(bottom_of_window > top_of_object){
        $("#programId").animate({opacity:1}, 1000);
      }
      var top_of_object = $("#faqId").position().top + $("#faqId").outerHeight()/4;
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if(bottom_of_window > top_of_object){
        $("#faqId").animate({opacity:1}, 1000);
      }
      var top_of_object = $("#teamId").position().top + $("#teamId").outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if(bottom_of_window > top_of_object){
        $("#teamId").animate({opacity:1}, 1000);
      }
      var top_of_object = $("#sponsorsId").position().top + $("#sponsorsId").outerHeight()/8;
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if(bottom_of_window > top_of_object){
        $("#sponsorsId").animate({opacity:1}, 1000);
      }
    });
  $( "#AboutNav" ).click(function() {
    $('html, body').animate({
      scrollTop: $("#aboutId").offset().top - 20
    }, 1000);
  });
  $( "#ProgramNav" ).click(function() {
    $('html, body').animate({
      scrollTop: $("#programId").offset().top - 20
    }, 1000);
  });
  $( "#FAQNav" ).click(function() {
    $('html, body').animate({
      scrollTop: $("#faqId").offset().top - 20
    }, 1000);
  });
  $( "#TeamNav" ).click(function() {
    $('html, body').animate({
      scrollTop: $("#teamId").offset().top - 20
    }, 1000);
  });
  $( "#SponsorsNav" ).click(function() {
    $('html, body').animate({
      scrollTop: $("#sponsorsId").offset().top - 20
    }, 1000);
  });
});
