//Challenge 1: Student Grade Generator (Toy Problem)
//run "npm install prompt-sync" on the termminal for the prompt command to work

const prompt = require("prompt-sync")();

function grading () {
    let studentMark = prompt("Please enter student mark: ")

    if (studentMark > 79 && studentMark <= 100) {
        return "A"
    } else if (studentMark >= 60 && studentMark <= 79) {
        return "B"
    } else if (studentMark >= 50 && studentMark <= 59) {
        return "C"
    } else if (studentMark >= 40 && studentMark <= 49) {
        return "D"
    } else if (studentMark >= 0 && studentMark <= 39) {
        return "E"
    }
}
console.log(grading())
