"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriorityQueue = void 0;
var PriorityQueue = /** @class */ (function () {
    function PriorityQueue() {
        this.data = [];
    }
    PriorityQueue.prototype.isEmpty = function () {
        return this.data.length === 0;
    };
    PriorityQueue.prototype.enqueue = function (item) {
        this.data.push(item);
    };
    PriorityQueue.prototype.dequeue = function () {
        if (this.isEmpty()) {
            return null;
        }
        this.data.sort(function (a, b) {
            return a.code - b.code;
        });
        return this.data.shift();
    };
    return PriorityQueue;
}());
exports.PriorityQueue = PriorityQueue;
