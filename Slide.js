const options = document.querySelectorAll(".option");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");

let currentIndex = 0;

// Function to update active option
function updateSlider() {
    options.forEach((option, index) => {
        option.classList.toggle("active", index === currentIndex);
    });
}

// Move left
leftArrow.addEventListener("click", () => {
    currentIndex = (currentIndex === 0) ? options.length - 1 : currentIndex - 1;
    updateSlider();
});

// Move right
rightArrow.addEventListener("click", () => {
    currentIndex = (currentIndex === options.length - 1) ? 0 : currentIndex + 1;
    updateSlider();
});

// Initial state
updateSlider();

// const smallDivs = document.querySelectorAll('.small');
// const leftBtn =  document.getElementById("arrow-left")
// const rightBtn =  document.getElementById("arrow-right")
// console.log(smallDivs)
// const length = smallDivs.length ; 
// const color = "red" ; 
// let currIndex = 0 ; 
// function changeColor(index){
  
//   for( let i = 0 ; i < length ; i++) {
//     if( i == index ) {
//       smallDivs[index].style.backgroundColor = color ; 
//     }
//     else {
//       smallDivs[i].style.backgroundColor = "white" ; 
//     }
//   }
  
// }
// leftBtn.addEventListener("click", ( ) => {
//    currIndex-- ; 
//    currIndex = currIndex % length ;
//    if(currIndex < 0 ) currIndex = length - 1 ;
//   changeColor(currIndex) ; 
//    console.log("left" , currIndex ) ;
// })
// rightBtn.addEventListener("click" , ( ) => {
//    currIndex++ ;
//    currIndex = currIndex % length ; 
//   changeColor(currIndex) ; 
//    console.log("right" , currIndex) ;
// })
// changeColor(currIndex) ;
