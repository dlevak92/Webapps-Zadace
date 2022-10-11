//Napiši funkciju koja vraća predano polje obrnutim redosljedom
//Ispis : [3,4,5,6] -> [6,5,4,3]

function reverseArray(polje) {  
    return polje.reverse()  
 }

var polje = [3, 4, 5, 6];
console.log("[3,4,5,6] ->"+" "+reverseArray(polje));