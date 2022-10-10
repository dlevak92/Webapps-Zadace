//4. Napiši funkciju koja pretvara broj X u sate i minute
//Ispis : 120 -> “Ovo je 2 sata i 0 minuta”
let broj = Number(prompt("Unesi neki broj:"));

function pretvorba(broj)
 { 
  var sati = Math.floor(broj / 60);  
  var minute = broj % 60;
  return "Ovo je"+" "+sati + " "+"sati i"+" " + minute+" "+"minuta";         
}
console.log(pretvorba(broj));