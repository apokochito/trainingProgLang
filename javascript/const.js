"use strict";

const NUMBER = '23.2'
    // Never changes

const otherConstant = Math.round(NUMBER);
// It changes at runtime so we don't have to use UpperCase constant format

alert("My constant number is: " + NUMBER);
alert("Another consant: " + otherConstant);