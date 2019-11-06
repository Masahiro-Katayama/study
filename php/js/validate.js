$(document).ready(function () {
  $("#contact-form").validate({
    rules: {
      name: { required: true }
    },
    errorClass: "myError"

  });
});
