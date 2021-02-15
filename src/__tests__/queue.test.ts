//first in first out
import Queue from "../queue";

test('should enqueue elements in queue', () => {
    //given 
    let queue = new Queue();

    //when
    queue.enqueue(11);
    queue.enqueue(12);

    //then
    expect(queue.size()).toBe(2);
    expect(queue.peek()).toBe(11);
})

test('should dequeue elements in queue', () => {
    // given
    let queue = new Queue();
    queue.enqueue(13);
    queue.enqueue(14);

    //when
    queue.dequeue();

    //then
    expect(queue.size()).toBe(1);
    expect(queue.peek()).toBe(14);
})

test('should return 0 size, null peek  and null dequeue on empty element', () => {
    //given
    let queue = new Queue();

    //when queue is empty

    //then
    expect(queue.size()).toBe(0);
    expect(queue.peek()).toBe(null);
    expect(queue.dequeue()).toBe(null);
})
