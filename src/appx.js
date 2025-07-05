function greet(name){
  return "Hello, ${name}"
}
// Trigger test run

//try 12
  module.exports = greet

  if (require.main == module) {
    console.log{greet("world")}
  }