function triangleArea(base, height){
    return (1/2)*base*height;
}

var area = triangleArea(5,10);
var areaAgain = triangleArea(2,4);
var areaFinal = triangleArea(8,24);

console.log(area);
console.log(areaAgain);
console.log(areaFinal);

function convertFeetToInches(length){
    return length*12;
}

var test = convertFeetToInches(3);
console.log(test);