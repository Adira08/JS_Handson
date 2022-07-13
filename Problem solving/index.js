// Question 1 : PrepBuddy has an analog clock which consists of two hands one for hour and another for minute. She wants to calculate the shorter angle formed between hour and minute hand at any given time.
// Note: You have to complete Minimal_Angle function. No need to take any input.
var Minimal_Angle = (h, m) => 
{
  const minuteAngle = m * 6;
  const hourAngle = (h * 30) + (m * 0.5);
  const angle = Math.abs(hourAngle - minuteAngle);
  return Math.min(angle, 360 - angle);     
};


// Question 2 : Check_Leap function
var Check_Leap = (year) => 
{
  if (year % 400 === 0)
  {
    return ("Leap Year");
  }
  else if(year % 100 === 0)
  {
    return ("Non Leap Year");
  }
  else if(year % 4 === 0)
  {
    return ("Leap Year");
  }
  else
  {
    return ("Non Leap Year");
  }
  

};


// Question 3 : Perfect _Check function
var Perfect_Check = (N) => 
{
  let sum = 1;
  for(let i = 2;i*i<=N;i++)
  {
    if (i%N === 0)
    {
      if(i*i !== N)
      {
        sum = sum + i + N/i;
      }
      else
      {
        sum = sum + i;
      }
    }
  }
  if(sum == N)
  {
    return ("YES");
  }
  else
  {
    return ("NO");
  }    
        
};



// Question 4 : Reverse_Number function
var Reverse_Number = (N) => 
{
  let rev = 0;
  while(N>0)
  {
    rev = rev * 10 + N % 10;
    N = parseInt(N / 10);
  }
  return rev;

};



// Question 5 : Substring_Check function

var Substring_Check = (S1, S2) => 
{
  if(S1.indexOf(S2) !== -1)
  {
    return ("YES");
  }
  else
  {
    return ("NO");
  }   
};