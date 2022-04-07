function Car(model, year, color, mpg){
    this.model = model;
    this.year = year;
    this.color = color;
    this.mpg = mpg;
}
var car1 = new Car("Honda", 2008, "blue", 120);
var car2 = new Car("Subaru", 2018, "silver", 240);
var car3 = new Car("Toyota", 2011, "white", 190);

console.log(car1.mpg);
console.log(car2.mpg);
console.log(car3.mpg);

function Vehicle(car){
    this.car = car;
}

var Vehicle1 = new Vehicle(car1);
var Vehicle2 = new Vehicle(car2);
var Vehicle3 = new Vehicle(car3);

console.log(Vehicle1.car.mpg);
console.log(Vehicle2.car.mpg);
console.log(Vehicle3.car.mpg);