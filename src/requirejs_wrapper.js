// Wrapper to be used with browserify
// Enable the library to be AMD compliant for usage with requirejs in browser

var vCard = require("../vcard");

(function(factory) {
    if (typeof define === "function" && define.amd) {
        // AMD anonymous module
        define([], factory);
    } else if (typeof require === "function" && typeof exports === "object" && typeof module === "object") {
        // CommonJS module
        factory();
    } else {
        // No module loader (plain <script> tag) - put directly in global namespace
        factory();
    }
})(function(){

    return vCard;

});