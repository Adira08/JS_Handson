//Question1
//Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype.


const firstParent = {
    calculateAge(){
        console.log(`My name is ${this.fName} ${this.lName} and current age is ${2022 - this.bYear}`);
    }
}

const firstObj = Object.create(firstParent);
firstObj.fName = "Aditya";
firstObj.lName = "Raj";
firstObj.bYear = 1996;
firstObj.calculateAge();

const childObj = Object.create(firstParent);
childObj.fName = "Rishi";
childObj.lName = "Raj";
childObj.bYear = 2005;
childObj.calculateAge();

//Question2
//Write code to explain prototype chaining.

const firstPerson = {
    profile(){
        console.log(`My name is ${this.name} ,rollno is ${this.rollno} and current age is ${2022 - this.DOB}.`);
    },
    initialise(name,rollno,DOB){
        this.name = name;
        this.rollno = rollno;
        this.DOB = DOB;
    }
}

const arpana = Object.create(firstPerson);
arpana.initialise("Aditya",22,1996);
arpana.profile();
console.log(arpana);

const studentProto = Object.create(firstPerson);
studentProto.initial = function (name,rollno,DOB,course) {
    firstPerson.initialise.call(studentProto,name,rollno,DOB);
    this.course = course;    
}

studentProto.introduce = function(){
    console.log(`Student name is ${this.name} and his DOB is ${this.DOB}.`);
}


const newProto = Object.create(studentProto);
newProto.initial("Sneha",20,1997,"CSE");
newProto.introduce();
newProto.profile();


//Question3
//Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays.

function arraySum(a){
    let sum=0;
    for(let i in a) { 
        sum += a[i];
    }
    return sum;
}
let array = [1,3,5,8]; 
let tSum= arraySum(array);


//Question4
//Write a JavaScript function to retrieve all the names of object's own and inherited properties.

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
  
Person.prototype.nationality = "English";
const myFather = new Person("John", "Doe", 50, "blue");
console.log(myFather);
console.log("The nationality of my father is " + myFather.nationality);