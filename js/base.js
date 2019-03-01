$(document).ready(
   function(){
      var cortexto = $("nav").css("color");
      
      if ($("nav").css("color") == 'rgb(0, 0, 0)'){
         var corhover = "#fff";   
      }
      if ($("nav").css("color") == 'rgb(255, 255, 255)'){
         var corhover = "#000";
      }

      $("nav ul li a")
         .mouseenter(
            function(){ $(this).css("color", corhover); }
         )
         .mouseleave(
            function(){ $(this).css("color", cortexto); }
         )
         .css("color", cortexto);
   }
);