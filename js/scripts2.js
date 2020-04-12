function myFunc(index) {
  console.log(index);
  
  
  
}



// user interface logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var arr = [];
    var inputNumbers = $("#count").val();
    for (var i = 0; i <= inputNumbers; i++){
       arr.push(i)
    }
    
    myFunc(arr);
    
    $(".jumbotron").show();
    $("#result").html(arr);
    
  });
});