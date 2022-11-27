//Challenge 2: Speed Detector (Toy Problem)

const prompt = require("prompt-sync")()
/*
let speed = prompt("Speed in km: ")

function carSpeed () {

    if (speed > 0 && speed < 70){
        return "Ok"
    } else if (speed > 70 && speed <= 210) {
        for (speedLimit = 70; speedLimit < 210; speedLimit += 5) {
            function demeritPoints () {
                for (let i = 1; i <= 12; i++) {
                    console.log(`Points: ${i}`)
                }
            } console.log(demeritPoints())
        } return demeritPoints
    }
}
console.log(carSpeed())
/*
function demerit(speedPoints) {
    for (let points = 1; points <= 12; points++) {
        console.log(point)
    }
    *
    //speedPoints
    if (speedPoints > 0 && speedPoints <= 12) {
        for (let i = 1; i <= 12; i++) {
            console.log("Points:", i)
        }
    } else {
        return "License suspended"
    }
}
console.log(demerit(1))

let speedL = 70
dem = speed - speedL 
return dem
*/
/*
function speedDetector() {
    for (let speedInKm = 0; speedInKm <= 100; speedInKm++) {
        console.log(speedInKm)
    }
}
speedDetector()
*/
function pointGenerator () {
    let speedLimit = 70
    while (speedLimit <= 100) {
        for (let point = 1; point <= 12; point += 5) {
            console.log("Points: 1")
        }
    } speedLimit += 5
}
pointGenerator()


