// person.ts

// Define the interface
interface Person {
    firstName: string;
    lastName: string;
    age: number;
}

// Define the function
function introduce(person: Person): void {
    console.log(`${person.firstName} ${person.lastName} is ${person.age} years old.`);
}
