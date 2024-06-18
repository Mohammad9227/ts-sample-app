"use strict";
// src/app.ts
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = require("./Person");
const greeter_1 = require("./greeter");
// Create a new person instance
const person = new Person_1.Person("Alice", 30);
// Print the greeting
(0, greeter_1.printGreeting)(person);
