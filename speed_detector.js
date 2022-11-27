//Challenge 2: Speed Detector (Toy Problem)
//run "npm install prompt-sync" on the termminal for the prompt command to work

const prompt = require("prompt-sync")()

//a prompt is create for the user to input 
let speed = prompt("Speed in km: ")

//function to calculate demerit points for every 5km above speed limit of 70km
//demerit points should be a max of 12 points. Beyond that license is suspended
function carSpeed () {
    let points = ((speed - 70) / 5)
    if (speed <= 70){
        return "Ok"
    } else if (speed > 70 && points <= 12) {
        return `Points: ${points}`
    } else {
        return "License suspended"
    }
}
console.log(carSpeed())
