$(document).ready(function() {
  $("#calc").submit(function(event) {
    var input = $("input#string").val();
    console.log(input);
    write(resolve(input));
    event.preventDefault();
  });
  $("form#codeform").submit(function(event) {
    var id = $("input#id").val();

    $(".id").text(id);

    event.preventDefault();
  });
});
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
