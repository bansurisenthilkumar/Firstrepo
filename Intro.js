// // if(true){
// //     let a = 10;
// //     var b = 20;
// //     const x = 10;
// // }
// // console.log(a+b);

// //Type Conversions

// //Implicit Conversion
// //Depends on predence and operators
// // console.log("5"+2);
// // console.log("5"-2);
// // console.log("5"*2);
// // console.log(true+1);
// // console.log(false+1);

// //Explicit Conversion

// // console.log(Number("5"));
// // console.log(String(42));

// // let c =5;
// // console.log(++c); //Pre Increment
// // console.log(c++); //Post Increment
// // console.log(c--); //Post Decrement
// // console.log(--c); //Pre Decrement

// //If-else if-else statements

// // let marks = 85;
// // if(marks>=50){
// //     console.log("Pass")
// // }else{
// //     console.log("Fail");
// // }

// // //Switch case
// // // let day =3;
// // // switch(day){
// // //     case 1:
// // //         console.log("Monday");
// // //         break;
// // //     case 2:
// // //         console.log("Tuesday");
// // //         break;
// // //     case 3:
// // //         console.log("Wednesday");
// //         default:
// //             console.log("Invalid day");

// // // }
// function procesString(str){
//     let vowels = "aeiouAEIOU";
//     let arr = str.split("");
//     let vowelArr =[];
//     let consArr =[];

//     for(let char of arr){
//         if(vowels.includes(char)){
//             vowelArr.push(char.toUpperCase());
//         }else if(char.match(/[a-zA-Z]/)){
//             consArr.push(char);
//         }
//     }
//     console.log("Array:", arr);
//     console.log("Vowels:", vowelArr);
//     console.log("Consonants:", consArr);
//     let merged = vowelArr.concat(consArr);
//     console.log("Merged: ",merged);
// }

// procesString("Zayn Malik!");





