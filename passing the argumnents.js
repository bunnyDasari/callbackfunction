//**function displayGreeting(displayName) { //passing the function as arguments
// console.log("hello");
// displayName(); //calling the function
//console.log("good mnrg");
//}
//displayGreeting(function() {
//console.log("Rohan");
//});

//function displayRahul() {
//console.log("hi hello");
//}
//displayGreeting(displayRahul); //passing the function as the value



//let displayRam = function(){
//console.log("Namaste");
//}
//displayGreeting(displayRam);



let setIntervalBtn = document.getElementById("setIntervalBtn");
let clearIntervalBtn = document.getElementById("clearItervalBtn");

let uniqueId = null;


setIntervalBtn.onclick = function() {
    let counter = 0; //setInterval function with time duration
    uniqueId = setInterval(function() {
        console.log(counter);
        counter = counter + 1;
    }, 2000);
}


clearIntervalBtn.onclick = function() {
    clearInterval(uniqueId);
}