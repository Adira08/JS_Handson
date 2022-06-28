// Question 1.
// You are provided with two numbers A and B. Your task is to add these two numbers.

// Note: You have to complete AddTwoNumbers function. No need to take any input.

const AddTwoNumbers = (a,b) => {
    return(a+b);
  };

// ================================================================================================

// Question 2.
// You are given two number first as A and second as B and check if both conditions (A<10 and A>B) are satisfied or not with the help of operators.

// Note: You have to complete Is_Valid function. No need to take any input.

const Is_Valid = (a,b) => {
    return(a<10 && a>b)?"true":"false";
    
  };
  

// =================================================================================================


// Question 3.
//   You are given two numbers A and B. You need to do the following checks:
  
//   1.if both are divisible by 10 console true.
//   2.if both are not divisible by 10 console false.
//   3.if one of them only is divisible by 10 console true.
//   Use operator to do this.
  
//   Note: You have to complete Check function. No need to take any input.

const Check = (A, B) => 
{
  return ((A%10===0 && B%10===0) || (A%10===0 || B%10===0))?"true":"false";
};



// ==================================================================================================


// Question 4.
// You are provided a four digit number N only. Your task is to print out the first digit of that number.

// Note: You have to complete First_Digit function. No need to take any input.


const First_Digit = (n) => {
    return parseInt(n / 1000);
 };

 


// ==================================================================================================


// Question 5.
// You are provided a four digit number N only. Your task is to print out the last digit of that number.

// Note: You have to complete Last_Digit function. No need to take any input.


const Last_Digit = (n) => {
   return n%10;
};


// ====================================================================================================


// Question 6.
// You are provided with two numbers A and B where A as  divisor and B as  dividend.Your task is find the remainder.

// Note: You have to complete Find_the_remainder function. No need to take any input.


const Find_the_remainder = (a,b) => {
    return b%a;
};


// ====================================================================================================


// Question 7.
// You are provided with two numbers A and B. Your task is to multiply these two numbers.

// Note: You have to complete Multiply_two_number function. No need to take any input.


const Multiply_two_number = (a,b) => {
    return a*b;
};



// ====================================================================================================


// Question 8.
// Shyam has got his marks in three subjects as A, B, and C (out of 100).Write a program to calculate his total marks and his average.

// Note: You have to complete Sum and Average functions. No need to take any input.

const Sum = (A, B, C) => 
{
 return A+B+C;
};

const Average = (A, B, C) => 
{
  let sum = A+B+C;
 return sum/3;
};


// ===================================================================================================



