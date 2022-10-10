//Napiši funkciju kojoj se predaje string, te ona ispisuje bez razmaka svaku
//rijec velikim slovom (cammelCase)
//Ispis : “web apps vjezbe” -> “webAppsVjezbe”

var string = prompt("Unesi nekakav string:");
function camelize(string) {
  return string
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (letter, index) =>
      index === 0
        ? letter.toLowerCase()
        : letter.toUpperCase()
    )
    .replace(/\s+/g, '');
}

console.log(camelize(string));
console.log(camelize('web apps vjezbe'));