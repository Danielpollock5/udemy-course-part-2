///////////////////////////////////////
// Lecture: Hoisting


// calculateAge(1965);
// function calculateAge(year){
//     console.log(2016 - year);
// }
// //////hoisting only works with function declarations
// //retirement(1965)
// //expression function
// var retirement = function(year){
//     console.log(65 - (2016 - year));
// }


// //variables
// console.log(age)
// var age = 23;


// function foo(){
//     var age = 65;
//     consolelog(age);
// }
// foo();
//console.log(age)
///////////////////////////////////////
// Lecture: Scoping


// First scoping example


// var a = 'Hello! ';
// first();

// function first() {
//     var b = 'Hi! ';
//     second();

//     function second() {
//         var c = 'Hey!';
//         console.log(a + b + c);
//     }
// }




// Example to show the differece between execution stack and scope chain


// var a = 'Hello! ';
// first();

// function first() {
//     var b = 'Hi! ';
//     second();

//     function second() {
//         var c = 'Hey! ';
//         third()
    

// function third() {
//     var d = 'John';
//     console.log(a + b + c + d);
//         }
//     }   
// }



///////////////////////////////////////
// Lecture: The this keyword


//console.log(this)
//  
// var john = {
//     name: "John",
//     yearOfBirth: 1990,
//     calculateAge: function(){
//         console.log(this);
//         console.log(2016 - this.yearOfBirth);

//     //     function innerFunction(){
//     //         console.log(this)
//     //     }
//     //     innerFunction()
//      }
// }

// john.calculateAge();

// var mike = {
//     name: 'mike',
//     yearOfBirth: 1994
// }
//  mike.calculateAge = john.calculateAge;
//  mike.calculateAge()


// DOM manipulation and events




















