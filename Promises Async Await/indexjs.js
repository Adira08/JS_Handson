//Question1.
//Write one example explaining how you can write a callback function?

const message = function() {  
    console.log("This message is shown after 3 seconds");
    console.log("===============================================================");
}
 
setTimeout(message,1000);


//Question2.
//Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 
//Explain callback hell.
//Numbers
//1
// 2
// 3
// 4
// 5
// 6
// 7

const one = function () {
    console.log("1");  
    console.log("===============================================================");
}
const two = function () {
    console.log("2");  
    console.log("===============================================================");
}
const three = function () {
    console.log("3");  
    console.log("===============================================================");
}
const four = function () {
    console.log("4");  
    console.log("===============================================================");
}
const five = function () {
    console.log("5");  
    console.log("===============================================================");
}
const six = function () {
    console.log("6");  
    console.log("===============================================================");
}
const seven = function () {
    console.log("7");  
    console.log("===============================================================");
}

setTimeout(one,1000);
setTimeout(two,2000);
setTimeout(three,3000);
setTimeout(four,4000);
setTimeout(five,5000);
setTimeout(six,6000);
setTimeout(seven,7000);



//Question3.
//Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 
// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7

let promiseOne = new Promise((resolve,reject) => {
    resolve();
})

promiseOne
.then(() => {
    setTimeout(() => {
        console.log("1");
        console.log("===============================================================");
        
    }, 1000);
})

.then(() => {
    setTimeout(() => {
        console.log("2");
        console.log("===============================================================");
        
    }, 2000);
})
.then(() => {
    setTimeout(() => {
        console.log("3");
        console.log("===============================================================");
        
    },3000);
})
.then(() => {
    setTimeout(() => {
        console.log("4");
        console.log("===============================================================");
        
    },4000);
})
.then(() => {
    setTimeout(() => {
        console.log("5");
        console.log("===============================================================");
        
    },5000);
})
.then(() => {
    setTimeout(() => {
        console.log("6");
        console.log("===============================================================");
        
    },6000);
})
.then(() => {
    setTimeout(() => {
        console.log("7");
        console.log("===============================================================");
        
    },7000);
})


//Question4.
//Create a promise function accepting a argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing is passed then it should go to reject state and catch the error and print Promise Rejected.

const promiseTwo = new Promise((resolve,reject) => {
    resolve();
    //reject();
    
})

promiseTwo
.then((data) => {
    console.log("Promise resolved");
})
.catch((error) => {
    console.log("promise rejected");
})

//Question5.
//Create examples to explain callback function.

const messageOne = function() {  
    console.log("This is call backBack example");
    console.log("===============================================================");
}

setTimeout(messageOne,2000);


//Question6.
//Create examples to explain callback hell function.

const getEmpId = () =>{
    setTimeout(() => {
        console.log("Fetching the Id's");
        let id = [1,2,3,4,5];
        console.log(id);

        setTimeout(() => {
            let empDetails = {
                fName:"harsh",
                lName :"Bajaj",
                age : 28,
            }
            console.log(`The name of the employee is ${empDetails.fName} ${empDetails.lName} and the age id ${empDetails.age}`);

            setTimeout(() => {
                empDetails.gender = "Male";
                console.log(`The name of the employee is ${empDetails.fName} ${empDetails.lName} and the age id ${empDetails.age} and the gender is ${empDetails.gender}`);
                console.log("===============================================================");
                
            }, 2000);
            
        }, 2000);
        
    }, 2000);
}
getEmpId();


//Question7.
//Create examples to explain promises function.

const newPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
        let Name = "Aditya";
        resolve(Name);
        //reject("Error in reading data");

        
    }, 3000);
})

newPromise
.then((data) => {
    console.log(`Name printed successfully : ${data}`);
})
.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log("successfully executed");
    console.log("===============================================================");
})


//Question8.
//Create examples to explain async await function.

let promiseNew = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve('Promise resolved')}, 4000); 
});

// async function
async function asyncFunc() {

    // wait until the promise resolves 
    let result = await promiseNew; 

    console.log(result);
    console.log('hello');
    console.log("===============================================================");
}

// calling the async function
asyncFunc();

//Question9.
//Create examples to explain promise.all function.

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
  console.log("===============================================================");
});