import {PriorityQueue} from "./PriorityQueue";
import {Patient} from "./Patient";

let priorityQueue = new PriorityQueue();
let patient1 = new Patient('Smith', 5);
let patient2 = new Patient('Jones', 4);
let patient3 = new Patient('Fehrenbach', 6);
let patient4 = new Patient('Brown', 1);
let patient5 = new Patient('Ingram', 1);

priorityQueue.enqueue(patient1);
priorityQueue.enqueue(patient2);
priorityQueue.enqueue(patient3);
priorityQueue.enqueue(patient4);
priorityQueue.enqueue(patient5);

console.log('Danh sach benh nhan:');
console.log(priorityQueue.data);
console.log('Benh nhan da duoc kham:');
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log('Benh nhan con lai:');
console.log(priorityQueue.data);
