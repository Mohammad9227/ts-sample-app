// src/app.ts

import { Person } from './Person';
import { printGreeting } from './greeter';

// Create a new person instance
const person = new Person("Alice", 30);

// Print the greeting
printGreeting(person);
