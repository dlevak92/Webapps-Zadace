//5. Napiši funkciju kojoj se predaje polje brojeva, te ona ispisuje brojeve
//djeljive s 3
//Ispis : [1,2,3,4,5,6,7,8,9,10] -> “Brojevi djeljivi s 3: 3,6,9”
var polje = [];
var velicina = 10;

for(var i=0; i<velicina; i++) {
  polje[i] = prompt('Unesite broj' + (i+1));
}

console.log(polje+"->Brojevi djeljivi s 3:"+polje.filter(function(a){return a%3===0;}));