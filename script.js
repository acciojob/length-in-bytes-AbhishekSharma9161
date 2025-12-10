// Function to calculate byte size of a string
function byteSize(str) {
  return new Blob([str]).size;
}

// Test cases
console.log(byteSize('hello world')); // 11
console.log(byteSize('안녕하세요'));     // 15
console.log(byteSize(''));            // 0

// If you want to take input from user (Node.js):
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Enter a string: ", (input) => {
  console.log("Byte size:", byteSize(input));
  readline.close();
});
