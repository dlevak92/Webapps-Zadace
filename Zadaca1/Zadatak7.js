//Napiši funkciju koja za dani broj X provjeri nalazi li se unutar [0, 1000], te
//množi sve višekratnike broja 7 do X te ispisuje rezultat.
//Ispis : 23 -> 2058

let x = Number(prompt("Unesi broj:"));

const nula = 0;
const tisucu = 1000;

function provjeri(){
if (x > nula && x < tisucu) {
  console.log(x+"->je izmedu 0 i 1000");
  } else {
  console.log(x+ "->nije izmedu 0 i 1000");
    }
var visekratnik = 0;
for (var i = 1; i <= x; i++) {
  if (visekratnik%7){
    console.log(visekratnik);
    }
  }
}
console.log(provjeri(x,nula,tisucu));