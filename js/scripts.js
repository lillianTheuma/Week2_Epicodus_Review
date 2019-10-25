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
  if (Math.cos(num2) > Math.cos(num1)) {
    points[4] += 1;
    points[5] -= 4;
  } else {
    points[0] += 2;
    points[1] += 3;
  }
  if (dob > Date.now()) {
    points[1] += 100;
    points[5] -= 100;
  } else {
    points[0] += 1;
  }
  if (Math.tan(id) < Math.tan(num0)) {
    points[3] += 2;
    points[2]+= 2;
  } else {
    points[2] += 4;
    points[1] +=5
  }
  for (i=0;i<6;i++) {
    console.log(points[i]);
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
