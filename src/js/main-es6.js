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

  dataArray.layoutVariation = window.readCookie("ABTestModal-cookie");

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
  console.log("Variation Identifier:  " + window.readCookie("ABTestModal-cookie"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7QUFDQTs7QUFFQSxFQUFFLFlBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRCxDQVBEOztBQVNBO0FBQ0EsSUFBSSxlQUFlLFNBQWYsWUFBZSxHQUFNOztBQUV2QixNQUFJLENBQUMsZUFBZSxPQUFmLENBQXVCLFdBQXZCLENBQUwsRUFBMEM7QUFDeEMsbUJBQWUsT0FBZixDQUF1QixXQUF2QixFQUFvQyxJQUFJLElBQUosR0FBVyxPQUFYLEVBQXBDO0FBQ0Q7O0FBRUg7QUFDRSxNQUFJLFlBQVksZUFBZSxPQUFmLENBQXVCLFdBQXZCLENBQWhCOztBQUVBLElBQUUsWUFBRixFQUFnQixFQUFoQixDQUFtQixPQUFuQixFQUE0QixZQUFVO0FBQ3BDLFFBQUksYUFBYTtBQUNmLG1CQUFhO0FBREUsS0FBakI7O0FBSUEsWUFBUSxHQUFSLENBQVksa0JBQWtCLEtBQUssU0FBTCxDQUFlLFVBQWYsQ0FBOUI7QUFDRCxHQU5EO0FBT0QsQ0FoQkQ7O0FBa0JBO0FBQ0EsSUFBSSxhQUFhLFNBQWIsVUFBYSxHQUFNO0FBQ3JCLElBQUUsV0FBRixFQUFlLE1BQWYsQ0FBc0IsVUFBVSxLQUFWLEVBQWtCO0FBQ3RDLFFBQUksWUFBWSxFQUFFLElBQUYsRUFBUSxjQUFSLEVBQWhCO0FBQUEsUUFDSSxhQUFhLElBRGpCO0FBQUEsUUFFSSxVQUFVLEVBRmQ7QUFBQSxRQUdJLGFBSEo7O0FBS0EsTUFBRSxTQUFGLEVBQWEsSUFBYixDQUFrQixVQUFTLENBQVQsRUFBWSxLQUFaLEVBQW1CO0FBQ25DLGNBQVEsTUFBTSxJQUFkLElBQXNCLE1BQU0sSUFBNUI7QUFDQSxVQUFJLFVBQVUsRUFBRSxXQUFX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bnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvL0RvY3VtZW50IFJlYWR5XG4vKmpzaGludCBlc25leHQ6IHRydWUgKi9cblxuJChmdW5jdGlvbigpIHtcbiAgc2Vzc2lvbklkT2JqKCk7XG4gIGZvcm1TdWJtaXQoKTtcbiAgdXNlck5hbWVGaWVsZFZhbGlkYXRpb24oKTtcbiAgdXNlckVtYWlsSW5wdXRFdmVudCgpO1xuICBmbG9hdGluZ0xhYmVscygpO1xuICBzYXZlUGFnZVZhcmlhdGlvbklkZW50aWZpZXIoKTtcbn0pO1xuXG4vL0Z1bmN0aW9uIGNyZWF0ZXMgYW4gb2JqZWN0IHdpdGggc2Vzc2lvbmlkIGFzIGtleSBhbmQgdmFsdWUgYXMgY3VycmVudCB0aW1lc3RhbXAgb24gYnV0dG9uIGNsaWNrXG52YXIgc2Vzc2lvbklkT2JqID0gKCkgPT4ge1xuXG4gIGlmICghc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnc2Vzc2lvbklkJykpIHtcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdzZXNzaW9uSWQnLCBuZXcgRGF0ZSgpLmdldFRpbWUoKSk7XG4gIH1cblxuLy8gR2V0IHNhdmVkIGRhdGEgZnJvbSBzZXNzaW9uU3RvcmFnZVxuICBsZXQgc2Vzc2lvbklkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnc2Vzc2lvbklkJyk7XG5cbiAgJChcIiNtb2RhbC1idG5cIikub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICBsZXQgc2Vzc2lvbk9iaiA9IHtcbiAgICAgIFwic2Vzc2lvbklEXCI6IHNlc3Npb25JZFxuICAgIH07XG5cbiAgICBjb25zb2xlLmxvZyhcIlNlc3Npb25JZCA6ICBcIiArIEpTT04uc3RyaW5naWZ5KHNlc3Npb25PYmopKTtcbiAgfSk7XG59O1xuXG4vL09uIGZvcm0gc3VibWl0LCBkbyB0aGUgZXJyb3IgdmFsaWRhdGlvbiwgcHJldmVudCBzdWJtaXNzaW9uIGFuZCBjcmVhdGUgYSBqc29uIG9iamVjdCB3aXRoIGZvcm0gZmllbGRzXG52YXIgZm9ybVN1Ym1pdCA9ICgpID0+IHtcbiAgJChcIiN1c2VyRm9ybVwiKS5zdWJtaXQoZnVuY3Rpb24oIGV2ZW50ICkge1xuICAgIGxldCBmb3JtX2RhdGEgPSAkKHRoaXMpLnNlcmlhbGl6ZUFycmF5KCksXG4gICAgICAgIGVycm9yX2ZyZWUgPSB0cnVlLFxuICAgICAgICBkYXRhT2JqID0ge30sXG4gICAgICAgIGRhdGE7XG5cbiAgICAkKGZvcm1fZGF0YSkuZWFjaChmdW5jdGlvbihpLCBmaWVsZCkge1xuICAgICAgZGF0YU9ialtmaWVsZC5uYW1lXSA9IGZpZWxkLm5hbWU7XG4gICAgICBsZXQgZWxlbWVudCA9ICQoXCIjdXNlcl9cIiArIGRhdGFPYmpbZmllbGQubmFtZV0pLFxuICAgICAgICAgIHZhbGlkID0gZWxlbWVudC5oYXNDbGFzcyhcInZhbGlkXCIpLFxuICAgICAgICAgIGVycm9yX2VsZW1lbnQgPSAkKFwiZGl2XCIsIGVsZW1lbnQucGFyZW50KCkpO1xuXG4gICAgICBpZiAoIXZhbGlkKSB7XG4gICAgICAgIGVycm9yX2VsZW1lbnQucmVtb3ZlQ2xhc3MoXCJlcnJvclwiKS5hZGRDbGFzcyhcImVycm9yX3Nob3dcIik7IFxuICAgICAgICBlcnJvcl9lbGVtZW50LnByZXYoKS5hZGRDbGFzcyhcImludmFsaWRcIik7XG4gICAgICAgIGVycm9yX2ZyZWUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBlcnJvcl9lbGVtZW50LnJlbW92ZUNsYXNzKFwiZXJyb3Jfc2hvd1wiKS5hZGRDbGFzcyhcImVycm9yXCIpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgXG4gICAganNvbkZvcm1EYXRhKGZvcm1fZGF0YSk7XG4gIH0pO1xufTtcblxuLy9PYmplY3RpZnkgZm9ybSBkYXRhXG52YXIganNvbkZvcm1EYXRhID0gKGZvcm1BcnJheSkgPT4ge1xuICBsZXQgZGF0YUFycmF5ID0ge307XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZm9ybUFycmF5Lmxlbmd0aDsgaSsrKXtcbiAgICBkYXRhQXJyYXlbZm9ybUFycmF5W2ldLm5hbWVdID0gZm9ybUFycmF5W2ldLnZhbHVlO1xuICB9XG5cbiAgZGF0YUFycmF5LmxheW91dFZhcmlhdGlvbiA9IHdpbmRvdy5yZWFkQ29va2llKFwiQUJUZXN0TW9kYWwtY29va2llXCIpO1xuXG4gIGNvbnNvbGUubG9nKFwianNvbiBvYmplY3Qgd2l0aCBmb3JtIGZpZWxkcyBhbmQgdmFyaWF0aW9uIElkOiAgXCIgKyBKU09OLnN0cmluZ2lmeShkYXRhQXJyYXkpKTtcbn07XG5cbi8vdXNlciBuYW1lIGZpZWxkIGVycm9yIHZhbGlkYXRpb25cbnZhciB1c2VyTmFtZUZpZWxkVmFsaWRhdGlvbiA9ICgpID0+IHtcbiAgJCgnI3VzZXJfbmFtZScpLm9uKCdrZXl1cCcsIGZ1bmN0aW9uKCkge1xuICAgIGxldCBpbnB1dCA9ICQodGhpcyksXG4gICAgICAgIGlzX25hbWUgPSBpbnB1dC52YWwoKTtcblxuICAgIGlmKGlzX25hbWUpe1xuICAgICAgaW5wdXQucmVtb3ZlQ2xhc3MoXCJpbnZhbGlkXCIpLmFkZENsYXNzKFwidmFsaWRcIik7XG4gICAgICBpbnB1dC5uZXh0KCkuaGlkZSgpO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgaW5wdXQucmVtb3ZlQ2xhc3MoXCJ2YWxpZFwiKS5hZGRDbGFzcyhcImludmFsaWRcIik7XG4gICAgICBpbnB1dC5uZXh0KCkuc2hvdygpO1xuICAgIH1cbiAgfSk7XG59O1xuXG4vL0lucHV0IGV2ZW50IGxpc3RlbmVyIGZvciB1c2VyIGVtYWlsIGZpZWxkXG52YXIgdXNlckVtYWlsSW5wdXRFdmVudCA9ICgpID0+IHtcbiAgJChcIiN1c2VyX2VtYWlsXCIpLm9uKFwia2V5dXBcIiwgZnVuY3Rpb24oZSkge1xuICAgIGNvbnNvbGUubG9nKFwiSW5wdXQgZXZlbnQgbGlzdGVuZXIgb24gdXNlciBlbWFpbCBmaWVsZDogIFwiICsgJCh0aGlzKS52YWwoKSk7XG4gIH0pO1xufTtcblxudmFyIHNhdmVQYWdlVmFyaWF0aW9uSWRlbnRpZmllciA9ICgpID0+IHtcbiAgY29uc29sZS5sb2coXCJWYXJpYXRpb24gSWRlbnRpZmllcjogIFwiICsgIHdpbmRvdy5yZWFkQ29va2llKFwiQUJUZXN0TW9kYWwtY29va2llXCIpKTtcbn07XG5cbi8vRmxvYXRpbmcgbGFiZWxzIG9uIGZvcm0gZmllbGRzXG52YXIgZmxvYXRpbmdMYWJlbHMgPSAoKSA9PiB7XG4gICQoXCJib2R5XCIpLm9uKFwiaW5wdXQgcHJvcGVydHljaGFuZ2VcIiwgXCIuZmxvYXRpbmctbGFiZWwtZm9ybS1ncm91cFwiLCBmdW5jdGlvbihlKSB7XG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcyhcImZsb2F0aW5nLWxhYmVsLWZvcm0tZ3JvdXAtd2l0aC12YWx1ZVwiLCAhISQoZS50YXJnZXQpLnZhbCgpKTtcbiAgfSkub24oXCJmb2N1c1wiLCBcIi5mbG9hdGluZy1sYWJlbC1mb3JtLWdyb3VwXCIsIGZ1bmN0aW9uKCkge1xuICAgICQodGhpcykuYWRkQ2xhc3MoXCJmbG9hdGluZy1sYWJlbC1mb3JtLWdyb3VwLXdpdGgtZm9jdXNcIik7XG4gIH0pLm9uKFwiYmx1clwiLCBcIi5mbG9hdGluZy1sYWJlbC1mb3JtLWdyb3VwXCIsIGZ1bmN0aW9uKCkge1xuICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJmbG9hdGluZy1sYWJlbC1mb3JtLWdyb3VwLXdpdGgtZm9jdXNcIik7XG4gIH0pO1xufTtcbiJdfQ==
