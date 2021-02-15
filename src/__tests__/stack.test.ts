import Stack from "../stack"

test('a simple test', () => {
    expect(1).toBe(1);
});

test('should be able to push on stack', () => {
    let stack = new Stack()

    stack.push(1)
    stack.push(2)

    expect(stack.size()).toBe(2);
    expect(stack.peek()).toBe(2);
})

test('should be able to pop from stack', () => {
    let stack = new Stack()

    stack.push(1)
    stack.push(2)
    let popped = stack.pop()

    expect(popped).toBe(2);
    expect(stack.size()).toBe(1);
})

test('should return zero as size when there are no elements', () => {
    let stack = new Stack()

    expect(stack.size()).toBe(0);
})

test('should return null on peek when stack is empty', () => {
    let stack = new Stack()

    expect(stack.peek()).toBe(null);
    expect(stack.pop()).toBe(null);
})



