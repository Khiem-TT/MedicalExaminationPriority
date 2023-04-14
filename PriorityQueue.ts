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
        let min = this.data[0].code;
        let minIndex = 0;
        this.data.forEach((item, index) => {
            if (item.code < min) {
                min = item.code;
                minIndex = index;
            }
        })
        let obj = this.data[minIndex];
        this.data.splice(minIndex, 1);
        return obj;
    }
}