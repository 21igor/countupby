var countBy = function(d, b){
  for (var index = 1; (index*b)<=d; index++){
    $(".results").append("<li>" +index + ", " + index*b + "</li>");
  }
}

$(document).ready(function() {
  $(".countUpBy").submit(function(){
    event.preventDefault();
    // var destination = $("#countTo").val();
    // var by = $("#countBy").val();
    // countBy(destination, by);
    countBy($("#countTo").val(), $("#countBy").val());
  });
});
