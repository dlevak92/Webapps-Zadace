//2. Napiši funkciju koja pretvara HRK u EUR

let hrk = Number(prompt("Unesi kolicinu kuna:"));
const tecaj = 7.5345;
function konvertiraj(hrk,tecaj) {
  return hrk * tecaj;
}
console.log("Konverzija unesene kolicine Kuna u Eure iznosi:"+konvertiraj(hrk,tecaj)+"€");