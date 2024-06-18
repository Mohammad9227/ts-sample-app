// src/greeter.ts

import { Person } from './Person';

export function printGreeting(person: Person): void {
    console.log(person.greet());
}
