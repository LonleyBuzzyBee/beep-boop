function myFunc(numbers) {
  var stringArray = numbers.split("").map(function(string) {
    return string.toString();
  
  });

    myFunc2(stringArray);
    
 }
function myFunc2(stringArray) {
  var string1 = stringArray.join(" ");
  var numberReplace = ["1","2","3"]
  var numb1 = /1/gi;
  console.log(string1);

  if (string1.includes(numberReplace[0])) {
      $("#result").text(string1.replace(numb1,"beep"));
  }else {
      // stringArray.push();
    
  }
}









// user interface logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
     var inputNumbers = $("input").val();
     var output = [];
     myFunc(inputNumbers);
    //  $("#result").text(output);
  });
});