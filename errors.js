// Reference Errors- occurs if use a variable which is not exist
// Type Errors-  occurs when a value is of the wrong type or an operation is invalid on that type.
// Range Errors-  occurs when a value is out of its valid range.
// URI Errors- occurs if you use illegal characters in a URI function: ex-	decodeURI("%%%");	msg-URI malformed
// Syntax Errors- occurs when the code violates JavaScript's grammar rules.
// Eval Error (deprecated)- An EvalError indicates an error in the eval() function.Newer versions of JavaScript do not throw EvalError.Use SyntaxError instead.
// Silent Errors - Silent errors are issues that do not throw exceptions or stop execution, but still cause logic bugs, unexpected behavior, or failures that are easy to miss.


let a = 10;
try {
    let b= a+c;
    if(a>9) throw "too big";
}
catch(err){
    console.log(`the error is ${err}`)
}
finally{
    console.log("error handled successfully")
}
console.log("HELLO")
