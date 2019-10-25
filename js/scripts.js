$(document).ready(function() {
  var languages = ["Ruby","C#","Javascript","Go, like the game not the language","Python"];
  $("#calc").submit(function(event) {
    var input = $("input#string").val();
    console.log(input);
    write(resolve(input));
    event.preventDefault();
  });
  $("form#codeform").submit(function(event) {
    var id = $("input#id").val();
    var dob = $("input#dob").val();
    var num0 = $("input#num0").val();
    var results = logic(id,dob,num0);

    $(".id").text(id);

    event.preventDefault();
  });
});
function logic(id, dob, num0, num1, num2) {
  var points = [0,0,0,0,0,0]; // point value toward each language
  var returns[];
  if (Math.cos(num0) > Math.cos(num1)) {
    points[4] += 3;
    points[6] -= 4;
  }
}
function resolve(num) {
  var returnMe = eval(num);
  return returnMe;
}
function write(num) {
  console.log(num);
  $("h3#s").text(num);
}
function reset(){
  // Resets the response, lets you answer again
}
