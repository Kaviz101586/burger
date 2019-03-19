$(function() {
  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    var newEaten = $(this).data("newstate");

    var newEatenState = {
      devoured: newEaten
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newEatenState
    }).then(
      function() {
        console.log("changed devoured to", newEaten);
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#ca").val().trim(),
      devoured: $('input[name="devoured"]:checked').val()
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");

        location.reload();
      }
    );
  });
  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");


    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted burger", id);

        location.reload();
      }
    );
  });
});