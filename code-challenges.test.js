// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest







// 
//1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.
//Pseudo Code 
//Crete a describe statement
// Create an it statement that takes in an arguement.
// create the arrays.
// create expect statements that returns the array containing numbers of fibonacci sequence.
// a) Create a test with expect statements for each of the variables provided.
describe("fibonacciReturner",()=>{
  it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.",()=>{
    const fibLength1 = 6
    const fibLength2 = 10
     expect(fibonacciReturner(fibLength1).toEqual(1,1,2,3,5,8))
     expect(fibonacciReturner(fibLength2).toEqual(1,1,2,3,5,8,13,21,34,55))
  })
})




const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.
// This code should log an array and loop it to keep adding 2 to the value &  get a fibonacci sequence array.


function fibonacciReturner(fibLength1) {
    if (fibLength1.length === 0){
      return [];
    }
    let result = [fibLength1[0]];
    for (let i = 0; i< fibLength1.length; i++){
      result.push(result[i+2]+ fibLength1[i]);
    }
    return result;
  }
    
  console.log(fibonacciReturner(fibLength1));












//2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.
//Psuedo Code 
// Create a describe statement
//Create an It statement that takes in an arguement " It takes in an object and returns an array of values sorted from least to greatest"
//Add the const array with the values needed to sort the numbers from least to greatest.
// Create an expect statement within the IT statement that returns all the values from least to greatest.

describe("studyMinutesArranger",()=>{
  it("returns an array of values sorted from least to greatest",()=>{
    const studyMinutesWeek1 = {
      sunday: 90,
      monday: 30,
      tuesday: 20,
      wednesday: 15,
      thursday: 30,
      friday: 15,
      saturday: 60
    
    }
    
const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
    
     expect(studyMinutesArranger(studyMinutesWeek1).toEqual(15,15,20,30,30,60,90))
     expect(studyMinutesArranger(studyMinutesWeek2).toEqual(10,15,20,45,60,65,100))
  })
})


// FAIL  ./jest.test.js
// studyMinutesArranger
//   ✕ returns an array of values sorted from least to greatest (1 ms)

// ● studyMinutesArranger › returns an array of values sorted from least to greatest

//   ReferenceError: studyMinutesArranger is not defined

//     22 |   }
//     23 |       
//   > 24 |        expect(studyMinutesArranger(studyMinutesWeek1).toEqual(15,15,20,30,30,60,90))
//        |        ^
//     25 |        expect(studyMinutesArranger(studyMinutesWeek2).toEqual(10,15,20,45,60,65,100))
//     26 |     })
//     27 |   })

//     at Object.expect (jest.test.js:24:8)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.413 s, estimated 1 s
// Ran all test suites.
// error Command failed with exit code 1.



// b) Create the function that makes the test pass.
// Expected output: [10, 15, 20, 45, 60, 65, 100]
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60

}
const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
//Pseudo code to make it pass
//Create a function for studyMinutesArranger
// Use sort to sort the objects into an array from least to greatest.
// const studyMinutesArranger=(studyMinutesWeek1||studyMinutesWeek2) =>{
//        return studyMinutesArranger.sort
// }
 const studyMinutesArranger1=(studyMinutesWeek1) => {
  return studyMinutesWeek1.sort((a,b)=> a-b)
 }

  const studyMinutesArranger2=(studyMinutesWeek2)=>{
    return studyMinutesWeek2.sort((a,b)=> a-b)
  }
    

console.log(studyMinutesArranger1(studyMinutesWeek1));
console.log(studyMinutesArranger2(studyMinutesWeek2));










//3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.
//
// a) Create a test with expect statements for each of the variables provided.
//Psuedo Code 
// Create a describe statement
//Create an It statement that takes in an arguement " It takes in an array and returns an array of the accumulating sum , if its empty it should return an empty array"
// Add the const arrays 
// Create an expect statement within the IT statement that returns all the values sum.
describe("atAccumulatinSum",()=>{
  it("It takes in an array and returns an array of the accumulating sum , if its empty it should return an empty array",()=>{
    const accountTransactions1 = [100, -17, -23, -9]
    const accountTransactions2 = [250, -89, 100, -96]
    const accountTransactions3 = []
     expect(atAccumulatinSum(accountTransactions1).toEqual(51))
     expect(atAccumulatinSum(accountTransactions2).toEqual(89))
     expect(atAccumulatinSum(accountTransactions3).toEqual())
    
  })
})


// FAIL  ./jest.test.js
// atAccumulatinSum
//   ✕ It takes in an array and returns an array of the accumulating sum , if its empty it should return an empty array (1 ms)

// ● atAccumulatinSum › It takes in an array and returns an array of the accumulating sum , if its empty it should return an empty array

//   ReferenceError: atAccumulatinSum is not defined

//     4 |       const accountTransactions2 = [250, -89, 100, -96]
//     5 |       const accountTransactions3 = []
//   > 6 |        expect(atAccumulatinSum(accountTransactions1).toEqual(51))
//       |        ^
//     7 |        expect(atAccumulatinSum(accountTransactions2).toEqual(89))
//     8 |        expect(atAccumulatinSum(accountTransactions3).toEqual())
//     9 |       

//     at Object.expect (jest.test.js:6:8)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.755 s
// Ran all test suites.
// error Command failed with exit code 1.


const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// // Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// // Expected output: []

// // b) Create the function that makes the test pass.

//Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.
//Pseudo Code
// Create a function called atAccumulatinSum.
// Input takes in an array, will be called array.
// Output returns an array of accumulating sum.

//Example 
  // input [100, -17, -23, -9]
  // output [100, 83, 60, 51]
  // 100 - 17= 83 
  // 83 -23= 60
  //60-9 = 51
    function accumulatinSum(accountTransactions3) {
      if ( accountTransactions3.length === 0){
        return [];
      }
      let result = [accountTransactions3[0]];
      for (let i = 1; i< accountTransactions3.length; i++){
        result.push(result[i-1]+ accountTransactions3[i]);
      }
      return result;
    }
    console.log(accumulatinSum(accountTransactions3));
// Code works but I don't know how to make it so that it can do the three arrays at the same time. I think it'd be "function accumulatinSum(accountTransactions1, accountTransactions2,accountTransactions3". But do it for every time it calls the const. 