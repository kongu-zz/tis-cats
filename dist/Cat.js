"use strict";
var Cat = (function () {
    function Cat() {
    }
    Cat.prototype.meow = function () {
        alert("meow");
    };
    return Cat;
}());
exports.Cat = Cat;
