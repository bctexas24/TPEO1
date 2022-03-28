function powersOfThree(){
    for(let i=1; i<=9;i++){
        console.log((3**i));
        if(3**i==27){
            console.log("This is my favorite power of three!");
        }
    }
}

var timeoutID = setTimeout(powersOfThree, 3000);

function everyTenSeconds(){
    console.log("Hello World!")
}

function clearTime(intervalId){
    clearInterval(intervalId);
}
var intervalId = setInterval(everyTenSeconds,10000);
setTimeout(clearTime, 120000, intervalId);