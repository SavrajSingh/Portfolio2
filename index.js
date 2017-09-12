$(document).ready(function (){

  $("#knowMe").click(function (){
      $('html, body').animate({
          scrollTop: $(".about").offset().top
      }, 1000);
    });

    $("#work").click(function (){
        $('html, body').animate({
            scrollTop: $(".portfolio").offset().top
        }, 1000);
      });

});
