var velocidadeMotorista = 120;
var velocidadeMax = 100;
var limiteUltrapassado = (velocidadeMotorista - velocidadeMax);
var precoMulta;


if (limiteUltrapassado == 0) {
    precoMulta = 0;
} else if ((limiteUltrapassado >= 1) && (limiteUltrapassado <= 10)) {
    precoMulta = 50;
} else  if ((limiteUltrapassado >= 11) && (limiteUltrapassado <=30)) {
    precoMulta = 100;
} else if (limiteUltrapassado >= 31){
    precoMulta = 200;
}

console.log (precoMulta)

    
