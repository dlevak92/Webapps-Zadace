//3. Napiši funkciju koja provjerava nalazi li se dani broj X unutar [100,150000]
//Ispis : 53 -> “53 nije unutar [100,150000]”

let broj = Number(prompt("Unesi broj:"));

const veci = 100;
const manji = 150000;

function provjeri(){
if (broj > manji && broj < veci) {
  console.log(broj+"->je unutar [100,150000]");
  } else {
  console.log(broj+ "->nije unutar [100,150000]");
    }
}
console.log(provjeri(broj,manji,veci));