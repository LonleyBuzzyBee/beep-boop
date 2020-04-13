function myFunc(index) {
  // var index = index1.join(" ");

  console.log(index);
  var numberReplace = {["3"]:"Won't you be my neighbor?",["2"]:"boop",["1"]:"beep"};
  
  // var output = index.join(" ");
  
// index.forEach(function(element) { 
//   element.slice("3")
//   console.log(element.slice("3"));
// })
index = index.replace(/[3,2,1]/g, r => numberReplace [r]);
$("#result").text(index);
}
  
  
    // if (index.includes(numberReplace[2]) && index.includes(numberReplace[1]) && index.includes(numberReplace[0])) {
    // index.splice(3,1,"Won't you be my neighbor?"); 
    // index.splice(2,1,"boop");
    // index.splice(1,1,"beep");
  
    // $("#result").text(index);

   
// }else if (index.includes(numberReplace[2]) && index.includes(numberReplace[1]) && index.includes(numberReplace[0]))) {
//     index.splice(2,1,"boop");
//     $("#result").text(index);

// }else if (index.includes(numberReplace[0])){
//     index.splice(1,1,"beep");
//     $("#result").text(index);
  
// }else{
//     index.push(index);
//     $("#result").text(index);
  
// }
// helpF(index);
// }
  
//   function helpF(newArr) {
//   console.log(newArr);

// }



// user interface logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var arr = [];
    var inputNumbers = $("#count").val();
    for (var i = 0; i <= inputNumbers; i++){
  
        arr.push(i);
    
      
    } 
    var arrCombine = arr.join(" ");
    
    
   
     myFunc(arrCombine);
 console.log(arr);
       

     
   
      $(".jumbotron").show();
      // $("#result").html();

    
  });
});