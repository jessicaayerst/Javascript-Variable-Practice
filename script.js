// alert(
//     "hello, world"
// )

// var myName = "Jessica Ayerst"
// console.log(myName)

// // We declare the variable just like we did before
// var myName = "Dwayne Johnson";

// // Except this time we reassign it to hold a different value. Notice we don't have to use the var keyword for reassignments.
// myName = "The Rock";

// // This should log "The Rock" to the console
// console.log("myName");

// var totalCost;
// var totalWithTax;

// var costPerItem = 2.50;
// var numberOfItems = 4;
// var taxRate = 0.06;
 
// totalCost = costPerItem * numberOfItems;
// totalWithTax = totalCost + (taxRate * totalCost);

// console.log(totalWithTax);

// var likesDogs = true;



// var firstName = "Dwayne";
// var lastName = "Johnson";

// // There are a couple different ways to combine strings. These two examples produce the same result:

// // Option A: String Concatenation with the + symbol
// var fullName = firstName + " " + lastName;

// // Option B: String template literals (probably easier once you get used to them)
// fullName = `${firstName} ${lastName}`;

// console.log(fullName);

// firstName should hold a string of your first name
// lastName should hold a string of your last name
// age should hold a number of your age
// likesTravel should hold a boolean representing whether or not you like to travel
// Log each variable to the console.


// var firstName = "Jessica";
// var lastName = "Ayerst";
// fullName = `${firstName} ${lastName}`;
// var age = 38;
// var likesTravel = true;


// console.log(fullName);
// console.log(age);
// console.log(likesTravel);


// var gradesArray = [97, 55, 62, 82, 79, 91, 74, 86];
// var firstItem = gradesArray[0] // 97
// var secondItem = gradesArray[1] // 55
// var thirdItem = gradesArray[2] // 62



// // Add a grade to the array
// gradesArray.push(92);

// // You can also add a grade (or replace one that's already in there) by accessing its index
// gradesArray[8] = 83;

// console.log(gradesArray.length); // 8

// var months = ['Jan', 'March', 'April', 'June'];

// // Inserts 'Feb' at an index of 1 and removes 0 elements 
// months.splice(1, 0, 'Feb');

// // Inserts 'May' at an index of 4 and removes one item (i.e. replaces 'June')
// months.splice(4, 1, 'May')


// In your JavaScript file, instantiate and assign a variable called movieArray. This variable should hold an array of your favorite movie titles. (Don't go overboard- two or three is fine).
// Log each movie in the array to the console


// 
// var leahObject = {
//     firstName: "Leah",
//     lastName: "Gwin",
//     age: 27
//   }
  
//   console.log(leahObject.firstName); // "Leah"
//   console.log(leahObject.age); // 27



// var robertObject = {
//     firstName: "Robert",
//     lastName: "Leedy",
//     age: 32,
//     hobbies: ["cooking", "rock climbing"]
//   }
  
//   var williamObject = {
//     firstName: "William",
//     lastName: "Kimball",
//     age: 21,
//     hobbies: ["calligraphy", "travel", "banjo"]
//   }
  
//   console.log(williamObject.hobbies[0]); // "calligraphy"

//   var studentsArray = [leahObject, robertObject, williamObject];
// console.log(studentsArray[2].lastName); // "Leah"


// var movieArray = ["Halloween", "Poltergeist", "Devils Rejects"];

// console.log(movieArray [0]);
// console.log(movieArray [1]);
// console.log(movieArray [2]);

var movieObject = {
    firstName: "Jessica", 
    lastName: "Ayerst", 
    age: 38, 
    likesToTravel: "true",
    favoriteMovies: ["Halloween", "Poltergeist", "Devils Rejects"]
}

console.log(movieObject.favoriteMovies [0]);



