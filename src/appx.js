function greet(name) {
  return `Hello, ${name}!`;
}

module.exports = greet;  // ✅ this makes the function available to your test

if (require.main === module) {
  console.log(greet("world")); // just a test if run directly
}