import {Patient} from "./Patient";

export class PriorityQueue<T> {
    data: Patient[] = [];

    constructor() {
    }

    isEmpty(): boolean {
        return this.data.length === 0;
    }

    enqueue(item: Patient) {
        this.data.push(item);
    }

    dequeue(): Patient {
        if (this.isEmpty()) {
            return null;
        }
        this.data.sort((a, b) => {
            return a.code - b.code;
        })
        return this.data.shift();
    }
}