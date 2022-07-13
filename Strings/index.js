// Question 1 : countCharacters function
const countCharacters = (S) => 
{
  let res = [0,0];
  for(let i = 0;i<S.length;i++)
  {
    if(S[i] == "A")
    {
      res[0]++;
    }
    else if (S[i] == "D")
    {
      res[1]++;
    }
  }
  return res;  
};

// Question 2 : Tina is given a string  S which contains the first letter of all the student names in her class. She got a curiosity to check how many people have their names starting from the same alphabet. So given a string  S , she decided to write a code that finds out the count of characters that occur more than once in the string.
// Note: You have to complete Count Head function. No need to take any input.
var Count_Occ = (s) => 
{
  let res = "";
  const uniqueSet = new Set(s.split(''));
  let arr = [];
  for(const element of uniqueSet){
    arr.push(element);
  }
  arr.sort();
  for(let i in arr){
    let count = 0;
    for(let j in s){
      if(arr[i] === s[j]){
        count++;
      }
    }
    if(count > 1){
      res +=arr[i]+count;
    }
  }
  return res;  
};


// Question 3 : You are given a string S containing both uppercase and lowercase letters. You need to find out the number of vowels in the given string.
// Note: You have to complete Count_Vowel function. No need to take any input.
var Count_Vowels= (S) => 
{
  let vowel_list = 'aeiouAEIOU';
  let count = 0;
  
  for(let i = 0; i < S.length ; i++)
  {
    if (vowel_list.indexOf(S[i]) !== -1)
    {
      count ++;
    }
  
  }
  return count;    
};

// Question 4 : Concatenate_Strings function
var Concatenate_Strings = (S1, S2) => 
{
  return(S1.concat(S2)) ;
};


// Question 5 : findLength function
const findLength = (S) => 
{
  return(S.length);  
};

// Question 6 : Game_Winner function
var Game_Winner = (S) => 
{
 let c1 = 0,c2 = 0;
  
  for (let i = 0;i<S.length;i++)
  {
    if(S[i] == "A")
    {
      c1++;
    }
    else
    {
      c2++;
    }
  }
  if(c1>c2)
  {
    return "Aditya";
  }
  else if(c1<c2)
  {
    return "Danish";
  }
  else{
    return "Draw";
  } 
}


// Question 7 : joinStrings function
const joinStrings = (S, P) => 
{
  return(S.concat(P));  
};

// Question 8 : Plain_Check function
var Palin_Check = (str) =>
{
	let N = str.length;
  for(let i = 0;i<N/2;i++)
  {
    if(str[i] !== str[N-1-i])
    {
      return ("False");
    }
  }
  return("True"); 
}


// Question 9 : Reverse_String function
var Reverse_String = (str) => 
{
  return str.split("").reverse().join("");   
};


// Question 10 : String_Match function
var String_Match = (S1,S2) => 
{
  if(S1 == S2)
  {
    return("YES");
  }
  else
  {
    return("NO");
  }    
};


// Question 11 : Replace function. 
var Replace = (S, pattern , text) => 
{
  return (S.replace(pattern,text)) ;    
};


// Question 12 : Split_the_String function
var Split_the_string = (S) => 
{
  
  return S.split(" ");      
};


// Question 13 : Count_Vowels function and Count_Consonants function. 
var Count_Vowels= (S) => 
{
  let vowel_list = 'aeiouAEIOU';
  let count = 0;
  
  for(let i = 0; i < S.length ; i++)
  {
    if (vowel_list.indexOf(S[i]) !== -1)
    {
      count ++;
    }
  }
  return count;
};
var Count_Consonants= (S) => 
{
  let cons_list = 'aeiouAEIOU';
  let count1 = 0;
  
  for(let j = 0; j < S.length ; j++)
  {
    if (cons_list.indexOf(S[j]) == -1)
    {
      count1++;
    }
  }
  return count1;     
};



