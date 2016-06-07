var countBy = function(d, b){
  for (var index = 1; (index*b)<=d; index++){
    $(".results").append("<li>" +index + ", " + index*b + "</li>");
  }
}

var bottles = function(){
  for(var i = 99; i>0; i --){
    $(".song").append("<p class='verse'>"+i+" bottles of beer on the wall, "+i+" bottles of beer. Take one down, pass it around, "+ (i-1) +" bottles of beer on the wall.</p>")
  }

}

$(document).ready(function() {
  $(".countUpBy").submit(function(){
    debugger;
    var destination = parseInt($("#countTo").val());
    console.log("destination = " +destination);
    var by = parseInt($("#countBy").val());
    console.log("by = "+by);
    if(!destination || !by || destination < 0 || by < 0){
      alert("Please enter a positive number into both fields");
    }
    else if(destination<by){
      alert("Please make sure the first number is greater than the second number");
    }
    else{
      countBy(destination, by);
      // countBy($("#countTo").val(), $("#countBy").val());
    }
    event.preventDefault();
  });

  $("#bottles").click(function(){
    bottles();
    event.preventDefault();
  });
  $("#clearBottles").click(function(){
    $(".verse").remove();
  });

});
