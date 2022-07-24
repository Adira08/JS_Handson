//Question1.
function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}
var counter = counter();
alert(counter());//1
alert(counter());//2
alert(counter());//3
alert(counter());//4


//Question2.
let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;
    console.log(count);//1
  }
  console.log(count);//0
})();

//Question3.
for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); //0,1,2
    }, 1000);
}

//Question4.
//Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.

function areaRectangle(a, b)
{
    let area = a * b;
    return area;
}
console.log(4,5);


//Question5.
//Take a variable in outer function and create an inner function to increase the counter every time it is called.

function counter(){
    var counter = 0;
    
    function IncreaseCounter() {
        return counter += 1;
    };
    return IncreaseCounter;
}
var counter = counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());

//Question6.
//Print Output

var a = 12;
(function () {
  alert(a);//12
})();

//Question7.
var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert(a);//12
  };
})();
x();

//Question8.
var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +//123
        "innerArg = " + innerArg + "\n" +//456
        "outerVar = " + outerVar + "\n" +//a
        "innerVar = " + innerVar + "\n" +//b
        "globalVar =" + globalVar);//xyz
    
    })(456);
})(123);