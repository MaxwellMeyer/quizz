$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    console.log("AHHHHHH");
    const age = parseInt($("#age").val());
    const gender = $("#gender").val();
    const favMovie = $("#movie").val();
    const favFood = $("#food").val();
    let result;
    console.log(age);
      if (age === 18 && gender === "male") {
        $(".brad").show();
      } else if (age <= 18 && gender === "female") {
        $(".beyonce").show();
      } else {
        $(".biel").show();
      };
      console.log(result);

      // if (result === "bradPitt") {
      //   $(".brad").show();
      // } else if (result === "beyonce") {
      //   $(".beyonce").show();
      // } else {
      //     alert("you have no one!")
      // }
      // console.log(result);
      // event.prevenDefault();
  });
});