$(document).ready(function(){

$('input[type="checkbox"]').click(function(){
    var inputValue = $(this).attr("value");
    $("." + inputValue).toggle();
  });

$('#s').on("click", function(){
  $('img.portfolio').css("width","10vw")
  });

$('#m').on("click", function(){
  $('img.portfolio').css("width","30vw")
  });

$('#l').on("click", function(){
  $('img.portfolio').css("width","80vw")
  });

});