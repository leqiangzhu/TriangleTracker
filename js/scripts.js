$(document).ready(function() {
  $("form#Identity").submit(function(event) {
    var firstSide = parseInt($("input#first").val());
    var secondSide = parseInt($("input#second").val());
    var thirdSide = parseInt($("input#third").val());
    var result;

        if((firstSide+secondSide)<thirdSide ||
            secondSide+thirdSide<firstSide||
            firstSide+thirdSide<secondSide||
            firstSide===0||
            secondSide===0||
            thirdSide===0

           ){
             result = "Not a triangle"
          }else if (
            firstSide === secondSide && secondSide === thirdSide){
            result = "Equilateral"
            }
              else if (firstSide === secondSide ||
                      secondSide === thirdSide||
                       firstSide === thirdSide)
              {
              result = "Isosceles"

              }else{
                result = "Scalene"
              }
            $(".hideanswers").text(result);


    event.preventDefault();
  });
});
