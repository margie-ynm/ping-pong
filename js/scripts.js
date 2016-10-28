//business logic
var list = [];
var pingPong = function(number) {
  debugger;
  list = [];
  for (var index = 1; index <= number; index += 1) {
    if (index % 15 === 0) {
      list.push("ping-pong");
    } else if (index % 3 === 0) {
      list.push("ping");
    } else if (index % 5 === 0) {
      list.push("pong");
    } else {
      list.push(index);
    }
  }
  return list;
}


//user-interface
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $("ul").empty();

    var userInput = parseInt($(input).val());
    var result = pingPong(userInput);

    list.forEach(function(number) {
      $("ul").append("<li>" + number + "</li>")
    });
  });
});
