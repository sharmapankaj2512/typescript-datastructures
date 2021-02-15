export default class Queue {
    elements: Array<number>
    constructor() {
        this.elements = new Array();
    }
    enqueue(element: number) {
        this.elements.push(element);
    }
    size() {
        return this.elements.length;
    }
    peek() {
        if (this.elements.length == 0)
            return null;
        return this.elements[0];
    }
    dequeue() {
        if (this.elements.length == 0)
            return null;
        return this.elements.shift();
    }
}