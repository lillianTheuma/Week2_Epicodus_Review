$(document).ready(function() {
  $("input.form-control").oninput= function() {
    console.log("Success");
  }
  $("form#codeform").submit(function(event) {
    var id = $("input#id").val();

    $(".id").text(id);

    event.preventDefault();
  });

  function reset(){
    // Resets the response, lets you answer again
  }
});
