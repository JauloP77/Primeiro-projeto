alert('Bora testar esse joguinho aqui');
let numeroMaximo = 100
let numeroSecreto = parseInt(Math.random () * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto chute não for igual ao numeroSecreto
while (chute != numeroSecreto) {
    chute = prompt (`Escolha o número entre 1 e ${numeroMaximo}`);
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else { 
            alert (`O número secreto é maior que ${chute}`);
        }
        // tentativas = tentativas + 1;
        tentativas++;
    }   
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Boa queride, acertou a brincadeira. O número é ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

// } else {
// if (tentativas > 1) { 
//     alert(`Boa queride, acertou a brincadeira. O número é ${numeroSecreto} com ${tentativas} tentativas.`);
// } else {
//     alert(`Boa queride, acertou a brincadeira. O número é ${numeroSecreto} com ${tentativas} tentativa.`);
// }
