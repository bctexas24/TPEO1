var Car=[];

for(var i=0; i<10; i++){
    Car[i]={
        model: "Subaru",
        year: "2018",
        color: "Silver",
        mpg: 24,
        id: i
    }
}
console.log(Car[2]);

var nCar=[];
function getCarsBetweenIdes(idMin, idMax){
    nCar = [];
    for(var i=0; i<Car.length;i++){
        Car[i].color ="blue";
        if(Car[i].id<=idMax && Car[i].id>=idMin){
            nCar.push(Car[i]);
        }
    }
    return nCar;
}

console.log(getCarsBetweenIdes(3,7));
console.log(getCarsBetweenIdes(1,9));
console.log(getCarsBetweenIdes(2,4));