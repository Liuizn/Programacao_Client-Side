var num1, num2, num3, soma, media, resul;

num1 = 6;

num2 = 6;

num3 = 6;

soma = num1 + num2 + num3;

media = soma / 3;

resul = media;

if (resul >= 7) {
    console.log("você tirou", resul, "com esta nota você foi APROVADO.")
} else if (resul < 7 && resul >= 5) {
    console.log("você tirou", resul, "com esta nota você está na RECUPERAÇÃO")
} else {
    console.log("você tirou", resul, "com esta nota você está REPROVADO")
}









// else {

//     if (resul < 5) {
//         console.log ("você tirou", resul, "com esta nota você  ")
//     } 
// }