
// function myFunc(numberInput) {
//   const output = [];


// user interface logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
     var inputNumbers = $("#count").val();
     var stringArray = inputNumbers.split(" ");
     console.log(stringArray);
     var numberArray = stringArray.map(_=>_|0);
    console.log(numberArray)
    for (var i = 0; i <= numberArray[0].lenght; i++) {
    }
      console.log(i);
      console.log(Math.floor(numberArray[0]));
    // for ( var i = inputNumbers++ ) {
      //  console.log(numberArray);
    // }
    // var numberArray = output.map(function(number) {
    //   console.log(numberArray);
    //   return number.toString();
    // });
    //  myFunc(i);

     $(".jumbotron").show();
     $("#result").html(i);
    
  });
});