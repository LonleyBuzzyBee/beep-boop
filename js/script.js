
function myFunc(numberInput) {
  
  for (var i = 0; i <= numberInput; i++) {
  }

  console.log(i);
  
var numberArray = numberInput.split("").map(function(number) {
    console.log(numberArray);
    return number.toString();
  }
     
 
  // const output = [];
  // var outputJoin = output.join(" ");
  // var numberReplace = ["1","2","3"]; 
  
    
  // });
  //   $(".jumbotron").show();
  //   $("#result").html(outputJoin);


  // console.log(outputJoin);


//   if (numberArray.includes(numberReplace[2])) {
//       output.push("Won't you be my neighbor?");
     
//   }else if (numberArray.includes(numberReplace[1])) {
//       output.push("boop");
  
//   }else if (numberArray.includes(numberReplace[0])){
//       output.push("beep");
    
//   }else{
//       output.push(numberString);
//   }

// }

// function printFunc(outputJoin) {
     
//     }


// user interface logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
     var inputNumbers = parseInt($("#count").val());
   
    // for (var i = 0; i <= inputNumbers; i++) {
    // }

     myFunc(inputNumbers);

     $(".jumbotron").show();
     $("#result").html(inputNumbers);
    
  });
});