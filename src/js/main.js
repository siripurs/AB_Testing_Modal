//Document Ready
/*jshint esnext: true */

$(function() {
  sessionIdObj();
  formSubmit();
  userNameFieldValidation();
  userEmailInputEvent();
  floatingLabels();
  savePageVariationIdentifier();
});

//Function creates an object with sessionid as key and value as current timestamp on button click
var sessionIdObj = () => {

  if (!sessionStorage.getItem('sessionId')) {
    sessionStorage.setItem('sessionId', new Date().getTime());
  }

// Get saved data from sessionStorage
  let sessionId = sessionStorage.getItem('sessionId');

  $("#modal-btn").on('click', function(){
    let sessionObj = {
      "sessionID": sessionId
    };

    console.log("SessionId :  " + JSON.stringify(sessionObj));
  });
};

//On form submit, do the error validation, prevent submission and create a json object with form fields
var formSubmit = () => {
  $("#userForm").submit(function( event ) {
    let form_data = $(this).serializeArray(),
        error_free = true,
        dataObj = {},
        data;

    $(form_data).each(function(i, field) {
      dataObj[field.name] = field.name;
      let element = $("#user_" + dataObj[field.name]),
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
};

//Objectify form data
var jsonFormData = (formArray) => {
  let dataArray = {};
  for (let i = 0; i < formArray.length; i++){
    dataArray[formArray[i].name] = formArray[i].value;
  }

  if(window.readCookie) {
    dataArray.layoutVariation = window.readCookie("ABTestModal-cookie");
  }

  console.log("json object with form fields and variation Id:  " + JSON.stringify(dataArray));
};

//user name field error validation
var userNameFieldValidation = () => {
  $('#user_name').on('keyup', function() {
    let input = $(this),
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
};

//Input event listener for user email field
var userEmailInputEvent = () => {
  $("#user_email").on("keyup", function(e) {
    console.log("Input event listener on user email field:  " + $(this).val());
  });
};

var savePageVariationIdentifier = () => {
  if(window.readCookie) {
    console.log("Variation Identifier:  " +  window.readCookie("ABTestModal-cookie"));
  }
};

//Floating labels on form fields
var floatingLabels = () => {
  $("body").on("input propertychange", ".floating-label-form-group", function(e) {
    $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
  }).on("focus", ".floating-label-form-group", function() {
    $(this).addClass("floating-label-form-group-with-focus");
  }).on("blur", ".floating-label-form-group", function() {
    $(this).removeClass("floating-label-form-group-with-focus");
  });
};
