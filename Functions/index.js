//Question1
//Create one function with zero parameter having a console statement;

function Hello() {
    console.log("Hello World");
    
}
Hello();

//Question2
//Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7".

function addition(a,b) {
    result = a + b;
    console.log(result);
    
}
addition(3,4);

//Question3
//Create one arrow function.

const arrowFunction = (() => {
    console.log("This is a arrow function");
})

arrowFunction();


//Question4.
//Print output: 
var x = 21;
var girl = function () {
    console.log(x);//undefined,because initialization is not hoisted.and Aslo,if x = 20 is not present,then output will be 21.
    var x = 20;
};
girl ();

//Question5.
//Print output: 
var x = 21;
girl ();
console.log(x)//21
function girl() {
    console.log(x);//undefined,because initialization is not hoisted.
    var x = 20;
};

//Question6.
//Print output

var x = 21;
a();//Reference error
b();//Reference error
console.log(a);
a = function() { 
   x = 20;
  console.log(x);
};
b = function() {
    
    x = 40;
   console.log(x);
};


//Question7.
//Write a function that accepts parameter n and returns factorial of n.

function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }
    else
    {
        for(var i = n; i >= 1; i--)
        {
            answer = answer * i;
        }
        return answer;
    }  
}
let n = 4;
answer = factorial(n)
console.log("The factorial of " + n + " is " + answer);