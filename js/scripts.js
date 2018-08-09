$(document).ready(function() {
  $("form#Identity").submit(function(event) {
    var firstSide = $("input#first").val();
    var secondSide = $("input#second").val();
    var thirdSide = $("input#third").val();
    var result;

    if(isNaN(firstSide) || isNaN(thirdSide) || isNaN(secondSide)){
       document.write("PLEASE INPUT THE NUMBER");
    }else if((firstSide+secondSide)<thirdSide ||
    secondSide+thirdSide<firstSide||
    firstSide+thirdSide<secondSide||
    firstSide===0||
    secondSide===0||
    thirdSide===0 ) {
    result = "Not a triangle";
    } else if (
       firstSide === secondSide && secondSide === thirdSide){
       result = "Equilateral";
    } else if (firstSide === secondSide ||
              secondSide === thirdSide||
              firstSide === thirdSide) {
              result = "Isosceles";
    }else { result = "Scalene";
    }

    $(".hideanswers").text(result);
    //  }else  {
    //    document.write("PLEASE INPUT THE NUMBER");
    //  }






    event.preventDefault();
  });
});
