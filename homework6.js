function reverse(string){
    var reverse="";
    for(var i=string.length-1; i>=0; i--){
        reverse = reverse+string[i];
    }   
    return reverse
}
console.log(reverse("basketball"));
console.log(reverse("Brian"));
console.log(reverse("passion"));

function numVowels(string){
    var vowels=0;
    string = string.toLowerCase();
    
    for(var i=0; i<string.length; i++){
        //console.log(vowels);
        if(string[i]=="a"||string[i]=="e"||string[i]=="i"||string[i]=="o"||string[i]=="u"){
            vowels++;
        }
    }
    return vowels;
}
console.log(numVowels("Rocks"));
console.log(numVowels("Texans"));
console.log(numVowels("Possibility"));

function numStringShorterThanLength(strings, length){
    var count=0;
    for(var i=0; i<strings.length; i++){
        if(strings[i].length > length){
            count++;
        }
    }
    return count;
}
console.log(numStringShorterThanLength(["Pelicans", "Spurs", "Hawks", "Hornets"],5));
console.log(numStringShorterThanLength(["Clippers", "Timberwolves", "Cavs", "Nets"],6));
console.log(numStringShorterThanLength(["Case", "Laptop", "Coinbase", "Quest"],4));