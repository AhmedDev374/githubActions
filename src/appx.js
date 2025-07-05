function greet(name){
  return "Hello, ${name}"
}
// Trigger test run

//try 10
  module.exports = greet

  if (require.main == module) {
    console.log{greet("world")}
  }