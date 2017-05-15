$(function() {

  //Create a javascript object with key ‘session_id’ and value as current timestamp
  $("#modal-btn").on('click', function(){
    var sessionObj = {},
        currentTimeStamp = new Date();

    currentTimeStamp.getHours();
    currentTimeStamp.getMinutes();
    currentTimeStamp.getSeconds();
    sessionObj.sessionId = currentTimeStamp;

    console.log("clicked:  " + JSON.stringify(sessionObj));

  });


  $("#userForm").submit(function( event ) {

    var form_data = $(this).serializeArray(),
        error_free = true,
        dataObj = {},
        data;

    $(form_data).each(function(i, field) {
      dataObj[field.name] = field.name;
      var element = $("#user_" + dataObj[field.name]),
          valid = element.hasClass("valid"),
          error_element = $("div", element.parent());

      if (!valid) {
        error_element.removeClass("error").addClass("error_show"); 
        error_element.prev().addClass("invalid");
        error_free = false;
      }
      else {
        error_element.removeClass("error_show").addClass("error");
      }
    });

   // if (!error_free){
      event.preventDefault(); 
    //}

    jsonFormData(form_data);

  });

  //Objectify form data
  function jsonFormData(formArray) {
    var dataArray = {};
    for (var i = 0; i < formArray.length; i++){
      dataArray[formArray[i].name] = formArray[i].value;
    }
    console.log(dataArray);
  }

  //user name field validation
  $('#user_name').on('input', function() {
    var input = $(this),
        is_name = input.val();

    if(is_name){
      input.removeClass("invalid").addClass("valid");
      input.next().hide();
    }
    else{
      input.removeClass("valid").addClass("invalid");
    }
  });

  //Input event listener on user email field
  $("#user_email").on("input", function(e) {
    console.log("Input event listener on user email field:  " + $(this).val());
  });

  //Floating labels on form fields
  $("body").on("input propertychange", ".floating-label-form-group", function(e) {
    $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
  }).on("focus", ".floating-label-form-group", function() {
    $(this).addClass("floating-label-form-group-with-focus");
  }).on("blur", ".floating-label-form-group", function() {
    $(this).removeClass("floating-label-form-group-with-focus");
  });

});
