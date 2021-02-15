export default class Stack {
    elements: Array<number>

    constructor() {
        this.elements = new Array()
    }

    push(element: number) {
        this.elements.push(element)
    }

    size() {
        return this.elements.length
    }

    peek() {
        if (this.elements.length == 0)
            return null
        return this.elements[this.elements.length - 1]
    }

    pop() {
        return this.elements.pop()
    }
}