function testArguments () {
    console.log (arguments,arguments.callee.name)
  }
  
  testArguments(10, false, "google") 