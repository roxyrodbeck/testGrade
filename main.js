// Grades
// 1. Create a variable called "testGrade" which is a random number between 0 and 100.
// 2. Create a series of conditionals that returns which letter grade corresponds with the score. For reference:
// 0 to 65 is an "F" prob 0 to 64
// 65 to 70 is a "D"
// 71 to 79 is a "C"
// 80 to 89 is a "B"
// 90 to 100 is an "A"

let testGrade = Math.floor(Math.random() * 101); 
    for (i = 0; i < testGrade; i++) {
       if (i < 65) {
        console.log("F");
       } else if (64 < i && i < 71) {
        console.log("D");
    } else if (70 < i && i < 80) {
        console.log("C");
    } else if (79 < i && i < 90) {
        console.log("B");
    } else if (89 < i && i <= 100) {
        console.log("A");
    }
    }
