'use strict';
/*
 * js26.js
 */
var isValid = function (e) {
    var a = parseInt(e.target.number.value);
    if (isNaN(a)) {
        window.alert("Erroneous input. Must be a number!");
        e.target.number.focus();
        e.preventDefault();
        return false;
    }
    if (!isTextValid(e.target.text1, 5)) {
        e.preventDefault();
        return false;
    }
    if (!isTextValid(e.target.text2, 10)) {
        e.preventDefault();
        return false;
    }
    return true;
}

var isTextValid = function (txt, ll) { // extra func because more than 1 textfield
    if (txt.value.length < ll) {
        window.alert("Text must be at least " + ll + " chars!");
        txt.focus();
        txt.selectionEnd = txt.value.length;
        txt.selectionStart = txt.selectionEnd;
        return false;
    } else {
        return true;
    }
}

var initialize = function () {
    document.getElementById('myform').addEventListener('submit', isValid);
}

window.addEventListener('load', initialize);
      