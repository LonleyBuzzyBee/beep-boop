function myFunc(numbers) {
  var stringArray = numbers.split("").map(function(string) {
    return string.toString();
  
  });

    myFunc2(stringArray);
 
function myFunc2(stringArray) {
  var numberReplace = ["1","2","3"];
  var phrases = ["beep", "boop", "won't you be my neighbor"];
  var output = [];

  if (stringArray.includes(numberReplace[0])) {
      output.push(phrases[0]);
  }
}









// user interface logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
     var inputNumbers = $("input").val();
      
     var outputJoin = output.join("")
     myFunc(inputNumbers);
  });
});