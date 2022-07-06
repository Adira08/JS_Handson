//Qusetion 1
// Write a program that takes an array as input from the user and find out the product of the elements.
// Note: You have to complete Find_Prod. No need to take any input.
const Find_Prod = (array, N) => 
{
 let prod = 1;
  for (let i = 0;i<N;i++)
  {
    prod = prod * array[i];
  }
  return prod;
     

};
 

// Qusetion 2:
// Write a program which takes an array as input from the user and find out the sum of the array elements.
// Note: You have to complete Find_Sum. No need to take any input.

const Find_Sum = (array, N) => 
{
  let sum = 0;
  for (let i = 0;i<N;i++)
  {
    sum = sum + array[i];
  }
  return sum;

};
 
// Question 3:
// You are given an array A containing N integer elements and an integer K, and your task is to return the count of occurrences of K in array A.

// Note: You have to complete findCount function. No need to take any input.
const findCount = (N, K, Arr) => 
{
  let output = 0;
   for (let i = 0;i<N;i++) 
   {
     if (Arr[i] == K)
     {
       output++;
     }
   }
   return output;  
};
 
// Question 4:
// You are given an array A containing N integer elements, and your task is to return an array B(having a size equal to 2), 
// where B[0] contains the sum of all even elements of array A and B[1] has the sum of all odd elements of the array A.
// Note: You have to complete findEvenOdd function. No need to take any input.

const findEvenOdd = (N, Arr) => 
{
  let res = [0,0];
  for(let i = 0;i<N;i++)
  {
    if(Arr[i] % 2 === 0)
    {
      res[0] += Arr[i]
    }
    else
    {
      res[1] += Arr[i]
    }
  }
  return res;  
};
 
// Question 5:
// Write a program which takes an array as input from the user and a number.
// Check whether the number is present or not.

// Note: You have to complete Find_Num. No need to take any input.

const Find_Num = (array,N,M) => 
{
  let count = 0;
  for(let i = 0;i<N;i++)
  {
    if (M == array[i])
    {
      count++;
    }
  }
  if (count>0)
  {
    return ("YES");
  }
  else
  {
    return ("NO");
  }
};


// Question 6:
// You are given an array A containing the age of persons in your locality, and your task is to find and return an array containing the age of persons that are over 18 (18 included).
// Note: Also, in the output array, the age should be in the same order as in the input array. You have to complete highAge function. No need to take any input.

const highAge = (N, Arr) => 
{
  let res = [];
  for(let i = 0;i<N;i++)
  {
    if(Arr[i] >= 18)
    {
      res.push(Arr[i]);
    }
  }
  return res;  
};



// Question 7:
// You are provided an array of integers and you have to increment all array elements by 1 and then print whole array.

// You have to complete Inc_Arr. No need to take any input.

const Inc_Arr = (array,N) => 
{
  for(let i = 0;i<N;i++)
  {
    console.log(array[i] = array[i]+1);
  }

};
 


// Question 8:
// You are given an array A containing the maths marks of students in your class, and your task is to determine if all the students pass in your class or not.
//  A student is declared pass if his maths marks are greater than or equal to 32.
// If all the students pass in your class, return "YES" (without quotes); otherwise, return "NO" (without quotes).

// Note: You have to complete isAllPass function. No need to take any input.

const isAllPass = (N, Arr) => 
{
  for(let i = 0;i<N;i++)
  {
    if (Arr[i] < 32)
    {
      return ("NO");
    }
  }
  return ("YES");  
};
 



// Question 9:
// Prepbuddy is very tasteful of clothes. 
// He has N numbers of shirts hanging in the hanger in his wardrobe.
// Prepbuddy likes to wear different colored clothes. 
// So, whenever he see there are two or more shirts with the same color, he removes all the shirt of that color from his wardrobe.
// Now, he wants to know how many M unique color shirts are left in the wardrobe. 
// Prepbuddy wants you to find M.

// Note: As there are many shades of a color so consider integers as a color name.
// i.e, color of shirt is 0,1,2, … , N.
function Unique_Shirts (arr,N) {
  
    let res = {};
    let count = 0;
    
    for(let i = 0;i<N;i++)
    {
      if(res[arr[i]])
      {
        res[arr[i]] += 1;
      }
      else
      {
        res[arr[i]] = 1;
      }
    }
    let resValues = Object.values(res);
    for(let j = 0;j<resValues.length;j++)
    {
      if(resValues[j] === 1)
      {
        count ++;
      }
    }
    return count;
   
  }





// Question 10:
// Congratulations on making up to this question. Let us give you a fairly simple array problem to solve. If you know how to iterate through the array, you will easily be able to solve this.
// The problem statement is simple- given N elements, find the minimum and maximum numbers among those elements.

function arrayMin(arr) {
  
    return Math.min(...arr);
 
 }
 
 function arrayMax(arr) {
  
   return Math.max(...arr);
 
 }




//  Question 11:
//  Yatharth and Anamika are playing a game. Anamika loves Yatharth very much and she wants to share a chocolate bar with him in which each of the squares consists of an integer represented by A[i]. 
//  She decides to share a contiguous segment of the chocolate bar selected such that the length of the segment matches Yatharth's birth month M and the sum of the integers on the squares is equal to his birthday D. 

// You must determine how many ways she can divide the chocolate.

function Birthday_Game(arr,D ,M) {
  
    let count = 0;
    for(let i = 0;i<=arr.length - M;i++)
    {
      let sum = 0;
      for(let j = i;j<i+M;j++)
      {
        sum += arr[j];
      }
      if(sum === D)
      {
        count++;
      }
    }
    return count;
  
  }




