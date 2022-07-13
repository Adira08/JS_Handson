// Question 1 : Create a Function
function Check(obj1){
    obj1.setter = function()
    {
      console.log(this.name);
    } 
  }


// Question 2 : Delete a Parameter
function Check(obj1) {
    delete obj1.rollno;
    return obj1;   
  }


// Question 3 : Check whether the Package is Dream Package or not
function Check(obj1) {
    if(obj1.salary > 500000)
    {
      return "Dream";
    }
    else
    {
      return "NotDream";
    }  
  }


// Question 4 : Check whether the Object has a parameter or not
function Check(obj1) {
    if (Object.entries(obj1).length === 0)
    {
      return "false";
    }
    else
    {
      return "true";
    } 
  }


// Question 5 : Merge the Objects
function Check(obj1,obj2) {
    return Object.assign(obj1,obj2);  
  }


// Question 6 : Object Multiplyer
function Check(a,obj1) {
    obj1.id *= a;
    obj1.houseno *= a;
    return (obj1);
  }


// Question 7 : Find the  sum of Object Members
function Check(obj1) {
    return obj1.p1+obj1.p2+obj1.p3;  
  }


// Question 8 : Check whether the Objects are same or not.
function check(obj1,a,b) {
    if(obj1.name == a && obj1.id == b)
    {
      return "true";
    }
    else
    {
      return "false";
    }  
  }
