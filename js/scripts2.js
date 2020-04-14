

function sort(inputNumbers) {
  console.log(inputNumbers);

  var arr = [];

  for (var i = 0; i <= inputNumbers; i++){
     
    if ( i.toString().includes("3") ) {
     
       arr.push("Won't you be my neighbor?");
     
      } else if ( i.toString().includes("2") ) {
      
      arr.push("boop");

      } else if ( i.toString().includes("1") ) {
      
      arr.push("beep");

      // console.log(arr.push(i));
    } else {
      arr.push(i);
    }
  }
  return arr.join (" ");
}

// user interface logic

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var inputNumbers = $("#count").val();
    var result = sort(inputNumbers);
   console.log(result);
      $(".jumbotron").show();
      $("#result").text(result);

    
  });
});