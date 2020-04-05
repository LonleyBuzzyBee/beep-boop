function myFunc(numbers) {
  var stringArray = numbers.split("").map(function(string) {
    return string.toString();
  
  });

    myFunc2(stringArray);
    
 }
function myFunc2(stringArray) {
  var numberReplace = ["1","2","3"];
  var phrases = ["beep", "boop", "won't you be my neighbor"];
  var output = [];
  // var outputJoin = output.join(" ");
  // console.log(outputJoin);
  console.log(output);

  if (stringArray.includes(numberReplace[1])) {
      output.push(phrases[1]);
  }else {
    output.push(stringArray);
    
  }
}









// user interface logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
     var inputNumbers = $("input").val();
      
    
     myFunc(inputNumbers);
  });
});