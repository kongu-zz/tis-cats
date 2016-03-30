"use strict";
var Dog = (function () {
    function Dog() {
    }
    Dog.prototype.wow = function () {
        alert("wow");
    };
    return Dog;
}());
exports.Dog = Dog;
