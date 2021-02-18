$(document).ready(function() {
    $("#basic-form").validate({
      rules: {
        firstname : {
          required: true,
          minlength: 2
        },
        lastname: {
          required: true,
          minlength: 2
        },
        email: {
          required: true,
          email: true
        },
        },
      messages : {
        name: {
          minlength: "Tu nombre..."
        },
        age: {
          minlength: "Tu apellido..."
        },
        email: {
          email: "El formato del email debe ser abc@domain.tld"
        }
      }
    });
  });