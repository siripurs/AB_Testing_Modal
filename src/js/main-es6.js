(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

//Document Ready
/*jshint esnext: true */

$(function () {
  sessionIdObj();
  formSubmit();
  userNameFieldValidation();
  userEmailInputEvent();
  floatingLabels();
  savePageVariationIdentifier();
});

//Function creates an object with sessionid as key and value as current timestamp on button click
var sessionIdObj = function sessionIdObj() {

  if (!sessionStorage.getItem('sessionId')) {
    sessionStorage.setItem('sessionId', new Date().getTime());
  }

  // Get saved data from sessionStorage
  var sessionId = sessionStorage.getItem('sessionId');

  $("#modal-btn").on('click', function () {
    var sessionObj = {
      "sessionID": sessionId
    };

    console.log("SessionId :  " + JSON.stringify(sessionObj));
  });
};

//On form submit, do the error validation, prevent submission and create a json object with form fields
var formSubmit = function formSubmit() {
  $("#userForm").submit(function (event) {
    var form_data = $(this).serializeArray(),
        error_free = true,
        dataObj = {},
        data = void 0;

    $(form_data).each(function (i, field) {
      dataObj[field.name] = field.name;
      var element = $("#user_" + dataObj[field.name]),
          valid = element.hasClass("valid"),
          error_element = $("div", element.parent());

      if (!valid) {
        error_element.removeClass("error").addClass("error_show");
        error_element.prev().addClass("invalid");
        error_free = false;
      } else {
        error_element.removeClass("error_show").addClass("error");
      }
    });

    event.preventDefault();
    jsonFormData(form_data);
  });
};

//Objectify form data
var jsonFormData = function jsonFormData(formArray) {
  var dataArray = {};
  for (var i = 0; i < formArray.length; i++) {
    dataArray[formArray[i].name] = formArray[i].value;
  }

  if (window.readCookie) {
    dataArray.layoutVariation = window.readCookie("ABTestModal-cookie");
  }

  console.log("json object with form fields and variation Id:  " + JSON.stringify(dataArray));
};

//user name field error validation
var userNameFieldValidation = function userNameFieldValidation() {
  $('#user_name').on('keyup', function () {
    var input = $(this),
        is_name = input.val();

    if (is_name) {
      input.removeClass("invalid").addClass("valid");
      input.next().hide();
    } else {
      input.removeClass("valid").addClass("invalid");
      input.next().show();
    }
  });
};

//Input event listener for user email field
var userEmailInputEvent = function userEmailInputEvent() {
  $("#user_email").on("keyup", function (e) {
    console.log("Input event listener on user email field:  " + $(this).val());
  });
};

var savePageVariationIdentifier = function savePageVariationIdentifier() {
  if (window.readCookie) {
    console.log("Variation Identifier:  " + window.readCookie("ABTestModal-cookie"));
  }
};

//Floating labels on form fields
var floatingLabels = function floatingLabels() {
  $("body").on("input propertychange", ".floating-label-form-group", function (e) {
    $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
  }).on("focus", ".floating-label-form-group", function () {
    $(this).addClass("floating-label-form-group-with-focus");
  }).on("blur", ".floating-label-form-group", function () {
    $(this).removeClass("floating-label-form-group-with-focus");
  });
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7QUFDQTs7QUFFQSxFQUFFLFlBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRCxDQVBEOztBQVNBO0FBQ0EsSUFBSSxlQUFlLFNBQWYsWUFBZSxHQUFNOztBQUV2QixNQUFJLENBQUMsZUFBZSxPQUFmLENBQXVCLFdBQXZCLENBQUwsRUFBMEM7QUFDeEMsbUJBQWUsT0FBZixDQUF1QixXQUF2QixFQUFvQyxJQUFJLElBQUosR0FBVyxPQUFYLEVBQXBDO0FBQ0Q7O0FBRUg7QUFDRSxNQUFJLFlBQVksZUFBZSxPQUFmLENBQXVCLFdBQXZCLENBQWhCOztBQUVBLElBQUUsWUFBRixFQUFnQixFQUFoQixDQUFtQixPQUFuQixFQUE0QixZQUFVO0FBQ3BDLFFBQUksYUFBYTtBQUNmLG1CQUFhO0FBREUsS0FBakI7O0FBSUEsWUFBUSxHQUFSLENBQVksa0JBQWtCLEtBQUssU0FBTCxDQUFlLFVBQWYsQ0FBOUI7QUFDRCxHQU5EO0FBT0QsQ0FoQkQ7O0FBa0JBO0FBQ0EsSUFBSSxhQUFhLFNBQWIsVUFBYSxHQUFNO0FBQ3JCLElBQUUsV0FBRixFQUFlLE1BQWYsQ0FBc0IsVUFBVSxLQUFWLEVBQWtCO0FBQ3RDLFFBQUksWUFBWSxFQUFFLElBQUYsRUFBUSxjQUFSLEVBQWhCO0FBQUEsUUFDSSxhQUFhLElBRGpCO0FBQUEsUUFFSSxVQUFVLEVBRmQ7QUFBQSxRQUdJLGFBSEo7O0FBS0EsTUFBRSxTQUFGLEVBQWEsSUFBYixDQUFrQixVQUFTLENBQVQsRUFBWSxLQUFaLEVBQW1CO0FBQ25DLGNBQVEsTUFBTSxJQUFkLElBQXNCLE1BQU0sSUFBNUI7QUFDQSxVQUFJLFVBQVUsRUFBRSxXQUFX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R0FORDtBQU9ELENBUkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy9Eb2N1bWVudCBSZWFkeVxuLypqc2hpbnQgZXNuZXh0OiB0cnVlICovXG5cbiQoZnVuY3Rpb24oKSB7XG4gIHNlc3Npb25JZE9iaigpO1xuICBmb3JtU3VibWl0KCk7XG4gIHVzZXJOYW1lRmllbGRWYWxpZGF0aW9uKCk7XG4gIHVzZXJFbWFpbElucHV0RXZlbnQoKTtcbiAgZmxvYXRpbmdMYWJlbHMoKTtcbiAgc2F2ZVBhZ2VWYXJpYXRpb25JZGVudGlmaWVyKCk7XG59KTtcblxuLy9GdW5jdGlvbiBjcmVhdGVzIGFuIG9iamVjdCB3aXRoIHNlc3Npb25pZCBhcyBrZXkgYW5kIHZhbHVlIGFzIGN1cnJlbnQgdGltZXN0YW1wIG9uIGJ1dHRvbiBjbGlja1xudmFyIHNlc3Npb25JZE9iaiA9ICgpID0+IHtcblxuICBpZiAoIXNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3Nlc3Npb25JZCcpKSB7XG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnc2Vzc2lvbklkJywgbmV3IERhdGUoKS5nZXRUaW1lKCkpO1xuICB9XG5cbi8vIEdldCBzYXZlZCBkYXRhIGZyb20gc2Vzc2lvblN0b3JhZ2VcbiAgbGV0IHNlc3Npb25JZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3Nlc3Npb25JZCcpO1xuXG4gICQoXCIjbW9kYWwtYnRuXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgbGV0IHNlc3Npb25PYmogPSB7XG4gICAgICBcInNlc3Npb25JRFwiOiBzZXNzaW9uSWRcbiAgICB9O1xuXG4gICAgY29uc29sZS5sb2coXCJTZXNzaW9uSWQgOiAgXCIgKyBKU09OLnN0cmluZ2lmeShzZXNzaW9uT2JqKSk7XG4gIH0pO1xufTtcblxuLy9PbiBmb3JtIHN1Ym1pdCwgZG8gdGhlIGVycm9yIHZhbGlkYXRpb24sIHByZXZlbnQgc3VibWlzc2lvbiBhbmQgY3JlYXRlIGEganNvbiBvYmplY3Qgd2l0aCBmb3JtIGZpZWxkc1xudmFyIGZvcm1TdWJtaXQgPSAoKSA9PiB7XG4gICQoXCIjdXNlckZvcm1cIikuc3VibWl0KGZ1bmN0aW9uKCBldmVudCApIHtcbiAgICBsZXQgZm9ybV9kYXRhID0gJCh0aGlzKS5zZXJpYWxpemVBcnJheSgpLFxuICAgICAgICBlcnJvcl9mcmVlID0gdHJ1ZSxcbiAgICAgICAgZGF0YU9iaiA9IHt9LFxuICAgICAgICBkYXRhO1xuXG4gICAgJChmb3JtX2RhdGEpLmVhY2goZnVuY3Rpb24oaSwgZmllbGQpIHtcbiAgICAgIGRhdGFPYmpbZmllbGQubmFtZV0gPSBmaWVsZC5uYW1lO1xuICAgICAgbGV0IGVsZW1lbnQgPSAkKFwiI3VzZXJfXCIgKyBkYXRhT2JqW2ZpZWxkLm5hbWVdKSxcbiAgICAgICAgICB2YWxpZCA9IGVsZW1lbnQuaGFzQ2xhc3MoXCJ2YWxpZFwiKSxcbiAgICAgICAgICBlcnJvcl9lbGVtZW50ID0gJChcImRpdlwiLCBlbGVtZW50LnBhcmVudCgpKTtcblxuICAgICAgaWYgKCF2YWxpZCkge1xuICAgICAgICBlcnJvcl9lbGVtZW50LnJlbW92ZUNsYXNzKFwiZXJyb3JcIikuYWRkQ2xhc3MoXCJlcnJvcl9zaG93XCIpOyBcbiAgICAgICAgZXJyb3JfZWxlbWVudC5wcmV2KCkuYWRkQ2xhc3MoXCJpbnZhbGlkXCIpO1xuICAgICAgICBlcnJvcl9mcmVlID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgZXJyb3JfZWxlbWVudC5yZW1vdmVDbGFzcyhcImVycm9yX3Nob3dcIikuYWRkQ2xhc3MoXCJlcnJvclwiKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IFxuICAgIGpzb25Gb3JtRGF0YShmb3JtX2RhdGEpO1xuICB9KTtcbn07XG5cbi8vT2JqZWN0aWZ5IGZvcm0gZGF0YVxudmFyIGpzb25Gb3JtRGF0YSA9IChmb3JtQXJyYXkpID0+IHtcbiAgbGV0IGRhdGFBcnJheSA9IHt9O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGZvcm1BcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgZGF0YUFycmF5W2Zvcm1BcnJheVtpXS5uYW1lXSA9IGZvcm1BcnJheVtpXS52YWx1ZTtcbiAgfVxuXG4gIGlmKHdpbmRvdy5yZWFkQ29va2llKSB7XG4gICAgZGF0YUFycmF5LmxheW91dFZhcmlhdGlvbiA9IHdpbmRvdy5yZWFkQ29va2llKFwiQUJUZXN0TW9kYWwtY29va2llXCIpO1xuICB9XG5cbiAgY29uc29sZS5sb2coXCJqc29uIG9iamVjdCB3aXRoIGZvcm0gZmllbGRzIGFuZCB2YXJpYXRpb24gSWQ6ICBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGFBcnJheSkpO1xufTtcblxuLy91c2VyIG5hbWUgZmllbGQgZXJyb3IgdmFsaWRhdGlvblxudmFyIHVzZXJOYW1lRmllbGRWYWxpZGF0aW9uID0gKCkgPT4ge1xuICAkKCcjdXNlcl9uYW1lJykub24oJ2tleXVwJywgZnVuY3Rpb24oKSB7XG4gICAgbGV0IGlucHV0ID0gJCh0aGlzKSxcbiAgICAgICAgaXNfbmFtZSA9IGlucHV0LnZhbCgpO1xuXG4gICAgaWYoaXNfbmFtZSl7XG4gICAgICBpbnB1dC5yZW1vdmVDbGFzcyhcImludmFsaWRcIikuYWRkQ2xhc3MoXCJ2YWxpZFwiKTtcbiAgICAgIGlucHV0Lm5leHQoKS5oaWRlKCk7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICBpbnB1dC5yZW1vdmVDbGFzcyhcInZhbGlkXCIpLmFkZENsYXNzKFwiaW52YWxpZFwiKTtcbiAgICAgIGlucHV0Lm5leHQoKS5zaG93KCk7XG4gICAgfVxuICB9KTtcbn07XG5cbi8vSW5wdXQgZXZlbnQgbGlzdGVuZXIgZm9yIHVzZXIgZW1haWwgZmllbGRcbnZhciB1c2VyRW1haWxJbnB1dEV2ZW50ID0gKCkgPT4ge1xuICAkKFwiI3VzZXJfZW1haWxcIikub24oXCJrZXl1cFwiLCBmdW5jdGlvbihlKSB7XG4gICAgY29uc29sZS5sb2coXCJJbnB1dCBldmVudCBsaXN0ZW5lciBvbiB1c2VyIGVtYWlsIGZpZWxkOiAgXCIgKyAkKHRoaXMpLnZhbCgpKTtcbiAgfSk7XG59O1xuXG52YXIgc2F2ZVBhZ2VWYXJpYXRpb25JZGVudGlmaWVyID0gKCkgPT4ge1xuICBpZih3aW5kb3cucmVhZENvb2tpZSkge1xuICAgIGNvbnNvbGUubG9nKFwiVmFyaWF0aW9uIElkZW50aWZpZXI6ICBcIiArICB3aW5kb3cucmVhZENvb2tpZShcIkFCVGVzdE1vZGFsLWNvb2tpZVwiKSk7XG4gIH1cbn07XG5cbi8vRmxvYXRpbmcgbGFiZWxzIG9uIGZvcm0gZmllbGRzXG52YXIgZmxvYXRpbmdMYWJlbHMgPSAoKSA9PiB7XG4gICQoXCJib2R5XCIpLm9uKFwiaW5wdXQgcHJvcGVydHljaGFuZ2VcIiwgXCIuZmxvYXRpbmctbGFiZWwtZm9ybS1ncm91cFwiLCBmdW5jdGlvbihlKSB7XG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcyhcImZsb2F0aW5nLWxhYmVsLWZvcm0tZ3JvdXAtd2l0aC12YWx1ZVwiLCAhISQoZS50YXJnZXQpLnZhbCgpKTtcbiAgfSkub24oXCJmb2N1c1wiLCBcIi5mbG9hdGluZy1sYWJlbC1mb3JtLWdyb3VwXCIsIGZ1bmN0aW9uKCkge1xuICAgICQodGhpcykuYWRkQ2xhc3MoXCJmbG9hdGluZy1sYWJlbC1mb3JtLWdyb3VwLXdpdGgtZm9jdXNcIik7XG4gIH0pLm9uKFwiYmx1clwiLCBcIi5mbG9hdGluZy1sYWJlbC1mb3JtLWdyb3VwXCIsIGZ1bmN0aW9uKCkge1xuICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJmbG9hdGluZy1sYWJlbC1mb3JtLWdyb3VwLXdpdGgtZm9jdXNcIik7XG4gIH0pO1xufTtcbiJdfQ==
