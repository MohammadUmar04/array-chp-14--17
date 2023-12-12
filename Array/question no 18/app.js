//question no 18
// Initialize an empty array to represent the stack
const lifoStack = ["keyboard , mouse , printer , monitor"];

// Function to add an element to the top of the stack
function push(value) {
  lifoStack.push(value);
}

// Function to remove and return the element from the top of the stack
function pop() {
  // Check if the stack is empty
  if (lifoStack.length === 0) {
    console.log("Stack is empty");
    return undefined;
  }

  // Remove and return the last element from the stack
  return lifoStack.pop();
}

// Example usage
push(1);
push(2);
push(3);

console.log("Pop:", pop()); // Output: Pop: 3
console.log("Pop:", pop()); // Output: Pop: 2

push(4);

console.log("Pop:", pop()); // Output: Pop: 4
console.log("Pop:", pop()); // Output: Pop: 1
console.log("Pop:", pop()); // Output: Stack is empty, Pop: undefined
