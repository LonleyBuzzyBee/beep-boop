function myFunc(numbers) {
  var stringArray = numbers.split("").map(function(string) {
    return string.toString();
  
  });

    myFunc2(stringArray);
    
 }
function myFunc2(stringArray) {
  var numberReplace = ["1","2","3"];
  var output = [];
  
  if (stringArray.includes(numberReplace[0])) {
      output.push("beep");
      $("#result").text(output);
  }else if (stringArray.includes(numberReplace[1])) {
      output.push("boop");
      $("#result").text(output);
  }else if (stringArray.includes(numberReplace[2])){
      output.push("Won't you be my neighbor?");
      $("#result").text(output);
  }else{

  }
}









// user interface logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
     var inputNumbers = $("input").val();
    //  var output = [];
     myFunc(inputNumbers);
    //  $("#result").text(output);
    //  console.log(output);
  });
});