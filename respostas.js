function toggleOpcoes(listaId) {
  var lista = document.getElementById(listaId);
  lista.classList.toggle("hidden");
}








function L1A1() {

    const qnt = Number(prompt("Digite a quantia de números que você deseja calcular a média"));
    let soma = 0

    for(let i = 1; i <= qnt; i++){

        let num = Number(prompt(`Digite o ${i}º número:`));
        soma += num;
    }
    
    let resultado = soma / qnt;
    alert(`O resultado das médias é ${resultado.toFixed(2)}`);

}










function L1A2() {
    let num1 = Number(prompt("Digite o primeiro número"));
    let num2 = Number(prompt("Digite o segundo número"));
  
    if (num1 > num2) {
      alert(`O número ${num1} é maior que o número ${num2}`);
    } else if (num1 < num2) {
      alert(`O número ${num2} é maior que o número ${num1}`);
    } else {
      alert(`O número ${num1} é igual ao número ${num2}`);
    }
  }
  







  function L1A3() {
    const comi = 0.05;
    let venda = Number(prompt("Digite o valor da venda"));
    let salario = venda * comi;
  
    alert(`A comissão da venda é R$ ${salario.toFixed(2)}`);
  }
  












  function L1A4() {
    let kmini;
    let kmfim;
    let tempo;
    do{
        kmini = Number(prompt("Digite o km inicial "));

        if(kmini < 0){
            alert(`O Km inícial não pode ser menor que 0 !`)
        }

    }  while(  kmini < 0)

    do{
        kmfim = Number(prompt("Digite o km final "));

        if(kmfim < kmini){
            alert(`O Km final não pode ser menor que o Km  Inícial !`)
        }

    } while(kmfim < kmini)

    
    do {

        tempo = Number(prompt("Digite o tempo em segundos:"));
        
        if(tempo < 0){
            alert(`O tempo não pode ser negativo !`)
        }

    } while (tempo <= 0);

    let dist = kmfim - kmini;
    let velo = dist / tempo;
    let acel = velo / tempo;
  
    alert(`A aceleração foi de ${acel.toFixed(2)} metros por segundo ao quadrado`);
  }
  









  function L1A5() {
    let val1 = Number(prompt("Digite o primeiro valor:"));
    if (val1 < 0) {
      alert("O valor não pode ser negativo. Por favor, insira um valor positivo.");
      return;
    }
  
    let val2 = Number(prompt("Digite o segundo valor:"));
    if (val2 < 0) {
      alert("O valor não pode ser negativo. Por favor, insira um valor positivo.");
      return;
    }
  
    let des1 = Number(prompt("Digite o primeiro desconto (%):"));
    if (des1 < 0) {
      alert("O desconto não pode ser negativo. Por favor, insira um valor positivo.");
      return;
    }
  
    let des2 = Number(prompt("Digite o segundo desconto (%):"));
    if (des2 < 0) {
      alert("O desconto não pode ser negativo. Por favor, insira um valor positivo.");
      return;
    }
  
    let val1ComDesconto = val1 - (val1 * (des1 / 100));
    let val2ComDesconto = val2 - (val2 * (des2 / 100));
  
    alert(`O primeiro valor com desconto é R$ ${val1ComDesconto.toFixed(2)}`);
    alert(`O segundo valor com desconto é R$ ${val2ComDesconto.toFixed(2)}`);
  }
  










  function L1A6() {
    let letra;
  
    do {
      letra = prompt("Digite quatro letras: ");
  
      if (letra.length !== 4 || /[^a-zA-Z]/.test(letra)) {
        alert("Entrada inválida. Por favor, insira exatamente quatro letras.");
      }
    } while (letra.length !== 4 || /[^a-zA-Z]/.test(letra));
  
    if (letra[0] === letra[1] && letra[2] === letra[3]) {
      alert("Letras Iguais");
    } else {
      alert("Letras Diferentes");
    }
  }










  function L1A7() {
    let altura, peso, imc;
  
    do {
      altura = prompt("Digite a sua altura em cm:");
      peso = prompt("Digite o seu peso em kg:");
  
      if (isNaN(altura) || isNaN(peso)) {
        alert("Por favor, insira valores numéricos para altura e peso.");
      }
    } while (isNaN(altura) || isNaN(peso));
  
    altura = Number(altura);
    peso = Number(peso);
  
    altura = altura / 100; 
    imc = peso / (altura * altura);
    imc = imc.toFixed(2);
  
    alert("O seu IMC é: " + imc);
  }
  







  function L1A8() {
    let fahrenheit, celsius;
  
    do {
      fahrenheit = prompt("Digite a temperatura em Fahrenheit:");
      if (isNaN(fahrenheit)) {
        alert("Por favor, insira um valor numérico para a temperatura.");
      }
    } while (isNaN(fahrenheit));
  
    celsius = (fahrenheit - 32) * (5 / 9);
  
    alert("A temperatura em Celsius é: " + celsius.toFixed(2));
  }
  

  
  function L1A9() {
    let num = Number(prompt(`Digite um número:`));
    let num2 = Number(prompt(`Digite outro número:`));

    if (num % 2 === 0 && num2 % 2 === 0) {
        alert("Dois números são pares");
    } else if (num % 2 === 1 && num2 % 2 === 1) {
        alert("Dois números são ímpares");
    } else {
        alert("Um número é ímpar e um número é par");
    }
}





function L1A10() {
  let altura, base;
  do {
      altura = Number(prompt("Digite a altura do triângulo:"));
      base = Number(prompt("Digite a base do triângulo:"));

      if (altura <= 0 || base <= 0 || isNaN(altura) || isNaN(base)) {
          console.log("Por favor, digite valores válidos para altura e base.");
      }
  } while (altura <= 0 || base <= 0 || isNaN(altura) || isNaN(base));

  let area = (altura * base) / 2;
  alert(`A área do triângulo é ${area}`);
}




  

function L1A11() {
  let reais, taxa;
  do {
      reais = Number(prompt("Digite o valor em reais:"));
      if (reais <= 0 || isNaN(reais)) {
          alert("Por favor, digite um valor válido para reais.");
      }
  } while (reais <= 0 || isNaN(reais));

  do {
      taxa = Number(prompt("Digite a taxa de conversão:"));
      if (taxa <= 0 || isNaN(taxa)) {
          alert("Por favor, digite uma taxa válida de conversão.");
      }
  } while (taxa <= 0 || isNaN(taxa));

  let dolar = reais / taxa;
  alert(`O valor em dólar é de ${dolar}`);
}



function L1A12() {
  let num1 = Number(prompt("Digite o primeiro número"));
  let num2 = Number(prompt("Digite o segundo número"));
  let num3 = Number(prompt("Digite o terceiro número"));

  if (num1 > num2 && num1 > num3) {
      alert("O número 1 é o maior");
  } else if (num2 > num1 && num2 > num3) {
      alert("O número 2 é o maior");
  } else {
      alert("O número 3 é o maior");
  }
}



function L1A13() {
  let reais = Number(prompt("Digite o valor em reais:"));
  let taxa = Number(prompt("Digite a taxa de conversão:"));

  let euro = reais / taxa;

  alert(`O valor em euro é de ${euro.toFixed(2)} €`);
}




