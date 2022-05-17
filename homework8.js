function returnSquaredNumbers(numbers){
    const squared = numbers.map(x => x**2);
    console.log(squared);
}

returnSquaredNumbers([1,2,3]);
returnSquaredNumbers([4,8,12]);
returnSquaredNumbers([3,6,9]);

function Car(model, year, color){
    this.model=model;
    this.year = year;
    this.color = color;
}
var cars=[];
var combine=[];
for(let i=0; i<10; i++){
    cars[i] =new Car("Subaru",2018,"Silver");
}
const vehicle = {
    mpg: 30.0
}
for(let i=0; i<cars.length; i++){
    combine[i]={...cars[i], ...vehicle};
}

console.log(combine);