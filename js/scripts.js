$(document).ready(function() {
  var languages = ["Ruby","C#","Javascript","Go","Python"];
  $("#calc").submit(function(event) {
    var input = $("input#string").val();
    console.log(input);
    write(resolve(input));
    event.preventDefault();
  });
  $("form#codeform").submit(function(event) {
    var id = parseInt($("input#id").val());
    var dob = $("input#dob").val();
    var num0 = parseInt($("input#num0").val());
    var num1 = parseInt($("input#num1").val());
    var num2 = parseInt($("input#num2").val());
    var num3 = parseInt($("input#num3").val());

    var results = logic(id,dob,num0,num1,num2,num3);
    console.log(results);

    $(".para").hide();
    $(".language").text(languages[results]);
    $(".para#title").show();
    $(".para#"+languages[results]).show();

    event.preventDefault();
  });
});
function logic(id, dob, num0, num1, num2, num3) {
  var points = [0,0,0,0,0,0]; // point value toward each language
  points[0] = num2 + num3;
  points[1] = num2 + num1;
  points[2] = num1 + num3;
  points[3] = num0 + num1;
  points[4] = num0 + num2;
  points[5] = num0 + num3;
  console.log(points[2]);
  return (Math.floor(points[(id%6)]%6));
  console.log(dob); // We don't use the date of birth, so I console log it so it does not feel unwanted.
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
