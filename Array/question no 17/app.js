//question no 17

// Initialize an empty array to represent the queue
const fifoQueue = [];

// Function to add an element to the end of the queue
function enqueue(value) {
  fifoQueue.push(value);
}

// Function to remove and return the element from the front of the queue
function dequeue() {
  // Check if the queue is empty
  if (fifoQueue.length === 0) {
    document.write("Queue is empty");
    return undefined;
  }

  // Remove and return the first element from the queue
  return fifoQueue.shift();
}

// Example usage
enqueue(1);
enqueue(2);
enqueue(3);

document.write("Dequeue:", dequeue()); // Output: Dequeue: 1
document.write("Dequeue:", dequeue()); // Output: Dequeue: 2

enqueue(4);

document.write("Dequeue:", dequeue()); // Output: Dequeue: 3
document.write("Dequeue:", dequeue()); // Output: Dequeue: 4
document.write("Dequeue:", dequeue()); // Output: Queue is empty, Dequeue: undefined
