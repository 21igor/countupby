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

var wordPuzzle = function(stringInput){
  stringInput = stringInput.split("");
  console.log(stringInput);
  var stringOutput = "";
  for (var i = 0; i < stringInput.length; i++) {
    if (stringInput[i] === "a" || stringInput[i] === "e" || stringInput[i] === "u" || stringInput[i] === "i" || stringInput[i] === "o" || stringInput[i] === "y") {
      stringInput[i] = "-";
    }
    else{
    }
    stringOutput = stringOutput + stringInput[i];
  }
  return stringOutput;
};

var factorial = function(n){
  var result = 1;
  for(i=5; i>0; i--){
    result *= i;
  }
  return result;
}

function fact(x) {
  if (x!=1) {
    return x*fact(x-1);;
  }
  else return x;
}

var palindrome = function(word){
  wordArray = word.toLowerCase().split("");
  console.log(wordArray);
  var m = 0;
  for(var i=0; i<wordArray.length*0.5; i++){
    if (wordArray[i]===wordArray[wordArray.length-i-1]){
      console.log(wordArray[i] + " " + wordArray[wordArray.length-i-1]);
      m++;
    }
    else{
    }
  }
  if(m===i){
    alert("It is a palindrome")
  }
  else{
    alert("It is NOT a palindrome")
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

  $(".worldPuzzle").submit(function() {
    var stringInput = $("#stringInput").val();
    var originalString = $("#stringInput").val();
    event.preventDefault();
    $("#puzzle").append("<li>"+wordPuzzle(stringInput)+"</li>");
  });

  $(".factorialForm").submit(function(){
    var n = $("#factorialInput").val();
    $(".factOutput").append("<li>"+fact(n)+"</li>");
    event.preventDefault();
  });

  $(".palindromeForm").submit(function(){
    var word = $("#palindromeInput").val();
    palindrome(word);
    event.preventDefault();
  });

});
