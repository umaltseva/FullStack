import { HardWorker } from "./modules/hard-worker.js";

// Test case 1: Creating a HardWorker instance and accessing its properties
const worker1 = new HardWorker('John Doe', 30, 5000);
console.log(worker1.toObject());
// Output: { name: 'John Doe', age: 30, salary: 5000 }

// Test case 2: Modifying the age and salary of a HardWorker instance
worker1.age = 35;
worker1.salary = 6000;
console.log(worker1.toObject());
// Output: { name: 'John Doe', age: 35, salary: 6000 }

// Test case 3: Creating another HardWorker instance
const worker2 = new HardWorker('Alice Smith', 25, 3000);
console.log(worker2.toObject());
// Output: { name: 'Alice Smith', age: 25, salary: 3000 }

// Test case 4: Attempting to set an invalid age and salary
worker2.age = 120; // This won't change the age because it's outside the valid range
worker2.salary = 50000; // This won't change the salary because it's outside the valid range
console.log(worker2.toObject());
// Output: { name: 'Alice Smith', age: 25, salary: 3000 }
