var a = 20;
var b = 15;
var c = 40;

var maior;
var menor;

if (a > b && a > c) {
    maior = a;
} else if (b > a && b > c) {
    maior = b;
} else {
    maior = c;
}

if (a < b && a < c) {
    menor = a;
} else if (b < a && b < c) {
    menor = b;
} else {
    menor = c;
}

console.log("Seu maior número é o", maior);
console.log("Seu menor número é o", menor);