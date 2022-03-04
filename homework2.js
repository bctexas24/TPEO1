function sumOfSquareAreas(a, b){
    return (a*a)+(b*b);
}

var test1 = sumOfSquareAreas(2 , 48);
var test2 = sumOfSquareAreas(9 , 3);
var test3 = sumOfSquareAreas(24 , 19);

console.log(test1);
console.log(test2);
console.log(test3);

function gradeCalculator(homeworkAvg, quizAvg, examAvg){
 return homeworkAvg*.10+.15*quizAvg+.75*examAvg;
}

var test1 = gradeCalculator(100, 93 , 90);
var test2 = gradeCalculator(98 , 78, 67);
var test3 = gradeCalculator(95, 84 , 82);

console.log(test1);
console.log(test2);
console.log(test3);
