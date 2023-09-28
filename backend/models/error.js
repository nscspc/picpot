class MyError extends Error {
    constructor(message, errorcode) {
      super(message); // sending message to base class (Error).
      this.errorcode = errorcode; // this.errorcode means errorcode is the variable of current(MyError) class.
    }
  }
  
  module.exports = MyError;