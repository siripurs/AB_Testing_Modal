//Document Ready
/*jshint esnext: true */

$(function() {
  sessionIdObj();
  formSubmit();
  userNameFieldValidation();
  userEmailInputEvent();
  floatingLabels();
  setTimeout(function(){savePageVariationIdentifier();}, 100);
});

//Function creates an object with sessionid as key and value as current timestamp
function sessionIdObj() {

  if (!sessionStorage.getItem('sessionId')) {
    sessionStorage.setItem('sessionId', new Date().getTime());
  }

// Get saved data from sessionStorage
  var sessionId = sessionStorage.getItem('sessionId');

  $("#modal-btn").on('click', function(){
    var sessionObj = {
      "sessionID": sessionId
    };

    console.log("SessionId :  " + JSON.stringify(sessionObj));
  });
}

//On form submit, do the error validation, prevent submission and create a json object with form fields
function formSubmit() {
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

    event.preventDefault(); 
    jsonFormData(form_data);
  });
}

//Objectify form data
function jsonFormData(formArray) {
  var dataArray = {};
  for (var i = 0; i < formArray.length; i++){
    dataArray[formArray[i].name] = formArray[i].value;
  }

  console.log(dataArray);
}

//user name field error validation
function userNameFieldValidation() {
  $('#user_name').on('keyup', function() {
    var input = $(this),
        is_name = input.val();

    if(is_name){
      input.removeClass("invalid").addClass("valid");
      input.next().hide();
    }
    else{
      input.removeClass("valid").addClass("invalid");
      input.next().show();
    }
  });
}

//Input event listener for user email field
function userEmailInputEvent() {
  $("#user_email").on("keyup", function(e) {
    console.log("Input event listener on user email field:  " + $(this).val());
  });
}

function savePageVariationIdentifier() {
  console.log("Variation Identifier:  " +  window.readCookie("ABTestModal-cookie"));
}

//Floating labels on form fields
function floatingLabels() {
  $("body").on("input propertychange", ".floating-label-form-group", function(e) {
    $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
  }).on("focus", ".floating-label-form-group", function() {
    $(this).addClass("floating-label-form-group-with-focus");
  }).on("blur", ".floating-label-form-group", function() {
    $(this).removeClass("floating-label-form-group-with-focus");
  });
}
