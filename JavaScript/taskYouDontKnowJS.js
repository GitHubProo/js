function foo() {
	return 42;
}

foo.b = "hello world";

var tOf1 = typeof foo;			// "function"
var tOf2 = typeof foo();		// "number"
var tOf3 = typeof foo.bar;		// "string"

console.log(tOf1,tOf2,tOf3)


 var f = foo
 var f = foo()
 
 f()