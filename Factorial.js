//Factorial of number

// let num = 5;
// let fact = 1;
// for(let i=1;i<=num;i++){
//     fact *= i;
// }
// console.log(fact);

//Binary Search

let arr = [10,20,30,40,50];
let target = 30;
let low = 0;
let high = arr.length -1;

while(low<=high){
    let mid = Math.floor((low + high) / 2);
    if(arr[mid]==target){
        console.log(`target element found at ${mid} index of the array`);
        break;
    }else if(target>arr[mid]){
        low = mid +1;
    }else {
        high = mid -1;
    }
}
if(low>high){
    console.log("Element Not found");
}