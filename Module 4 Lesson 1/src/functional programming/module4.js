//Module 4
//1.1
function f() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum / arguments.length;
}
//f(1,2,3) //2


//1.2
let m = [1,2,3];
function f2(m) {
    return f.apply(null, m);
}


//2
function makeShout() {
    var phrase = "Hello!";
    var shout = function() {
        alert(phrase);
    }
    phrase = "Done!"
    return shout;
}

let shout = makeShout();
// what will it return?
shout();

// line let shout = makeShout() calls the function makeShout(). Because phase is global within the makeShout function, 
// Hello! gets overwritten by Done! So, makeShout() returns "function() {alert("Done!")}". 
// This function is no saved in let shout.
// Then, we execute shout() in the next line, so the before returned function gets executed and alerts Done!


//3
function sum(num) {
    return function (x) { return num + x};
}

sum(2)(2); //4
var plus1 = sum(1);
plus1(3); // 4


//4
function makeProperty(o, name, predicate) {
    var value;
    o["get" + name] = function() { return value; };

    o["set" + name] = function(v) {
        if (predicate && !predicate(v))
            throw "set" + name + ": invalid value " + v;
        else
            value = v;
    };
}

var o = {};
makeProperty(o, "Name", function(x) {
    return typeof x == "string";
});
o.setName("Frank");
console.log(o.getName());
o.setName(0);        

// makeProperty is a nice template function to add getter and a setter methods to an object and store the data in it. You can pass per param, 
// how the getter and setter should be named (use param name for it). Also, a function (param predicate) can be passed, which evaluates, 
// if the function returns true: Yes: set the value to the object, No: throw an error.
// So, to use this template function to create getters and setters and store values in our object, we first have to either create an empty 
// object or use an existing where the two new getters and setters should be added. 
// Then create the new getter and setter methods: pass the object, the name of the methods and the evaluation function. 
// Inside makeProperty: first, value is undefined, then we create the getter method and then the setter method. 
// The functions are now stored in our object at the location o.set... and o.get... So if we call o.get... this function will get executed.
// Now we can call our created methods from the object: if setter is called (v matches the passed param), we first execute the before given 
// function (from last argument) and check if it evaluates to true. Only if true, store the value to the object. If not, throw the error. 
// In our case, we passed a function to check if the type is correct. Getter simply returns the value. And var value strores our value.


//Now we can also easely add getters and setters for the age to our object:
makeProperty(o, "Age", function(x) {
    return typeof x == "number";
});
o.setAge(24);
console.log(o.getAge());


//5
function info(obj, f) {
     for (let prop in obj) {
         f(null, obj[prop]);
     }
 }

 info({name: "John", age: 20}, (p,v)=>console.log(v+";")); //John; newline: 20;

//To print it in one single line:
function infoSingleLine(obj, f) {
    var outputStr = "";
    for (let prop in obj) {
        outputStr += f(null, obj[prop]);
    }
    return outputStr;
}

info({name: "John", age: 20}, (p,v)=>v+";"); //John;20;


//Part2
//see service.js
