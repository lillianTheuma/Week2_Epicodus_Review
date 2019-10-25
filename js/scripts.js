$(document).ready(function() {
  $("form#codeform").submit(function(event) {
    var id = $("input#id").val();

    $(".id").text(id);

    event.preventDefault();
  })
})
