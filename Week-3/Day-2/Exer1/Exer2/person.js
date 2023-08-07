"use strict";
// person.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.introduce = void 0;
// Define the introduce function
function introduce(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName, " is ").concat(person.age, " years old."));
}
exports.introduce = introduce;
