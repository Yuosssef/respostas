
        
  function lista1(){     
    
    function L1A1(qnt) {
    
        let soma = 0
    
        for(let i = 1; i <= qnt; i++){
    
            let num = Number(prompt(`Digite o ${i}º número:`));
            soma += num;
        }
        
        let resultado = soma / qnt;
        alert(`O resultado das médias é ${resultado.toFixed(2)}`);
    
    }
    
    
    
    
    function L1A2(num1, num2) {
        
      
        if (num1 > num2) {
          alert(`O número ${num1} é maior que o número ${num2}`);
        } else if (num1 < num2) {
          alert(`O número ${num2} é maior que o número ${num1}`);
        } else {
          alert(`O número ${num1} é igual ao número ${num2}`);
        }
      }
      
    
    
    
    function L1A3(venda) {
        const comi = 0.05;
        let salario = venda * comi;
      
        alert(`A comissão da venda é R$ ${salario.toFixed(2)}`);
      }
      
    
    
    
    function L1A4(kmini, kmfim, tempo) {
      
    
        let dist = kmfim - kmini;
        let velo = dist / tempo;
        let acel = velo / tempo;
      
        alert(`A aceleração foi de ${acel.toFixed(2)} metros por segundo ao quadrado`);
      }
      
    
    
    
    
    function L1A5(val1, val2, des1, des2) {
        
        if (val1 < 0) {
          alert("O valor não pode ser negativo. Por favor, insira um valor positivo.");
          return;
        }
      

        if (val2 < 0) {
          alert("O valor não pode ser negativo. Por favor, insira um valor positivo.");
          return;
        }
      
        if (des1 < 0) {
          alert("O desconto não pode ser negativo. Por favor, insira um valor positivo.");
          return;
        }
      
        if (des2 < 0) {
          alert("O desconto não pode ser negativo. Por favor, insira um valor positivo.");
          return;
        }
      
        let val1ComDesconto = val1 - (val1 * (des1 / 100));
        let val2ComDesconto = val2 - (val2 * (des2 / 100));
      
        alert(`O primeiro valor com desconto é R$ ${val1ComDesconto.toFixed(2)}`);
        alert(`O segundo valor com desconto é R$ ${val2ComDesconto.toFixed(2)}`);
      }
      
    
    
    
    
    
    
    
    
    
    
    function L1A6(letra) {
        
        if (letra[0] === letra[1] && letra[2] === letra[3]) {
          alert("Letras Iguais");
        } else {
          alert("Letras Diferentes");
        }
      }
    
    
    
    
    function L1A7(altura, peso) {

        let imc;
       
      
        altura = Number(altura);
        peso = Number(peso);
      
        altura = altura / 100; 
        imc = peso / (altura * altura);
        imc = imc.toFixed(2);
      
        alert("O seu IMC é: " + imc);
      }
      
    
    
    
    
    
    
    
    function L1A8(fahrenheit) {
        let celsius;
      
        celsius = (fahrenheit - 32) * (5 / 9);
      
        alert("A temperatura em Celsius é: " + celsius.toFixed(2));
  }
      
    
      
    function L1A9(Num, Num2) {
        
    do {
        if (Num % 2 === 0 && Num2 % 2 === 0) {
            alert("Dois números são pares");
        } else if (Num % 2 === 1 && Num2 % 2 === 1) {
            alert("Dois números são ímpares");
        } else {
            alert("Um número é ímpar e um número é par");
        }
    }while( isNaN(Num) || isNaN(Num2) )
  }
    
    
    
    
    
    function L1A10(Altura, Base) {

    let area = (Altura * Base) / 2;
    alert(`A área do triângulo é ${area}`);
  }
    
      
    
    function L1A11(reais, taxa) {

      let dolar = reais / taxa;
      alert(`O valor em dólar é de ${dolar}`);
    }
    
    
    
    function L1A12(NUM1, NUM2, NUM3) {
      
      
      if (NUM1 > NUM2 && NUM1 > NUM3) {
        alert("O número 1 é o maior");
      } else if (NUM2 > NUM1 && NUM2 > NUM3) {
        alert("O número 2 é o maior");
      }
    }
    
    
    function L1A13(Reais, Taxa) {
    
    
      let euro = Reais / Taxa;
    
      alert(`O valor em euro é de ${euro.toFixed(2)} €`);
    }
    
    

  let opcao2 = Number(prompt(
      '1- Calcular Média\n' +
      '2- Comparar Números\n' +
      '3- Calcular Comissão\n' +
      '4- Calcular Aceleração\n' +
      '5- Calcular Descontos\n' +
      '6- Verificar Letras\n' +
      '7- Calcular IMC\n' +
      '8- Conversor Fahrenheit para Celsius\n' +
      '9- Verificar Par ou Impar\n' +
      '10- Calcular Area do Triangulo\n' +
      '11- Converter Reais para Dolar\n' +
      '12- Encontrar Maior Número\n' +
      '13- Converter Reais para Euro'
  ));




  switch (opcao2) {
      case 1:
          const qnt = Number(prompt("Digite a quantia de números que você deseja calcular a média"));

          L1A1(qnt);
          break;
      case 2:
          let num1 = Number(prompt("Digite o primeiro número"));
          let num2 = Number(prompt("Digite o segundo número"));
          L1A2(num1, num2);
          break;
      case 3:
          let venda = Number(prompt("Digite o valor da venda"));
          L1A3(venda);
          break;
      case 4:
          do{
              let kmini = Number(prompt("Digite o km inicial "));
      
              if(kmini < 0){
                  alert(`O Km inícial não pode ser menor que 0 !`)
              }
      
          }  while(  kmini < 0)
      
          do{
              let kmfim = Number(prompt("Digite o km final "));
      
              if(kmfim < kmini){
                  alert(`O Km final não pode ser menor que o Km  Inícial !`)
              }
      
          } while(kmfim < kmini)
      
          
          do {
      
              let tempo = Number(prompt("Digite o tempo em segundos:"));
              
              if(tempo < 0){
                  alert(`O tempo não pode ser negativo !`)
              }
      
          } while (tempo <= 0);
          L1A4(kmini, kmfim, tempo);
          break;
      case 5:

        let val1 = Number(prompt("Digite o primeiro valor:"));
        let val2 = Number(prompt("Digite o segundo valor:"));
        let des1 = Number(prompt("Digite o primeiro desconto (%):"));
        let des2 = Number(prompt("Digite o segundo desconto (%):"));


          L1A5(val1, val2, des1, des2);
          break;
      case 6:

      let letra;
      
        do {
          letra = prompt("Digite quatro letras: ");
      
          if (letra.length !== 4 || /[^a-zA-Z]/.test(letra)) {
            alert("Entrada inválida. Por favor, insira exatamente quatro letras.");
          }
        } while (letra.length !== 4 || /[^a-zA-Z]/.test(letra));
      
          L1A6(letra);
          break;
      case 7:

      let altura, peso;
      
      do {
        altura = prompt("Digite a sua altura em cm:");
        peso = prompt("Digite o seu peso em kg:");
    
        if (isNaN(altura) || isNaN(peso)) {
          alert("Por favor, insira valores numéricos para altura e peso.");
        }
      } while (isNaN(altura) || isNaN(peso));

          L1A7(altura, peso);
          break;
      case 8:

      let fahrenheit;
      
        do {
          fahrenheit = prompt("Digite a temperatura em Fahrenheit:");
          if (isNaN(fahrenheit)) {
            alert("Por favor, insira um valor numérico para a temperatura.");
          }
        } while (isNaN(fahrenheit));

          L1A8(fahrenheit);
          break;
      case 9:

        let Num = Number(prompt(`Digite um número:`));
        let Num2 = Number(prompt(`Digite outro número:`));


          L1A9(Num, Num2);

          break;
      case 10:

      let Altura, Base;
      do {
        Altura = Number(prompt("Digite a altura do triângulo:"));
        Base = Number(prompt("Digite a base do triângulo:"));
    
        if (Altura <= 0 || Base <= 0 || isNaN(Altura) || isNaN(Base)) {
          console.log("Por favor, digite valores válidos para altura e base.");
        }
      } while (Altura <= 0 || Base <= 0 || isNaN(Altura) || isNaN(Base));
    
          L1A10(Altura, Base);
          break;
      case 11:

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
    
          L1A11(reais, taxa);
          break;
      case 12:

      let NUM1, NUM2, NUM3;
      
      do {
        NUM1 = Number(prompt("Digite o primeiro número"));
        if (isNaN(NUM1)) {
          alert("Por favor, digite um número válido.");
        }
      } while (isNaN(NUM1));
      
      do {
        NUM2 = Number(prompt("Digite o segundo número"));
        if (isNaN(NUM2)) {
          alert("Por favor, digite um número válido.");
        }
      } while (isNaN(NUM2));
      
      do {
        NUM3 = Number(prompt("Digite o terceiro número"));
        if (isNaN(NUM3)) {
          alert("Por favor, digite um número válido.");
        }
      } while (isNaN(NUM3));

          L1A12(NUM1, NUM2, NUM3);
          break;
      case 13:
        let Reais = Number(prompt("Digite o valor em reais:"));
        let Taxa = Number(prompt("Digite a taxa de conversão:"));
          L1A13(Reais, Taxa);
          break;
      default:
        alert("Opção inválida. Por favor, escolha uma opção entre 1 e 8.");
        break;
  }
}




















function lista2() {

  function L2A1(escolha) {
      let temp;

      switch (escolha) {
          case 1:
              temp = Number(prompt("Digite a temperatura em Celsius: "));
              alert(`${temp}°C equivale a ${(temp + 273.15).toFixed(2)}°K`);
              break;

          case 2:
              temp = Number(prompt("Digite a temperatura em Kelvin: "));
              alert(`${temp}°K equivale a ${(temp - 273.15).toFixed(2)}°C`);
              break;

          case 3:
              temp = Number(prompt("Digite a temperatura em Celsius: "));
              alert(`${temp}°C equivale a ${((temp * 9/5) + 32).toFixed(2)}°F`);
              break;

          case 4:
              temp = Number(prompt("Digite a temperatura em Fahrenheit: "));
              alert(`${temp}°F equivale a ${((temp - 32) * 5/9).toFixed(2)}°C`);
              break;

          case 5:
              temp = Number(prompt("Digite a temperatura em Fahrenheit: "));
              alert(`${temp}°F equivale a ${((temp - 32) * 5/9 + 273.15).toFixed(2)}°K`);
              break;

          case 6:
              temp = Number(prompt("Digite a temperatura em Kelvin: "));
              alert(`${temp}°K equivale a ${((temp - 273.15) * 9/5 + 32).toFixed(2)}°F`);
              break;

          default:
              alert("Número inválido! Por favor, digite um número entre 1 e 6.");
              break;
      }
  }

  function L2A2(palavra) {
      let palindro = ``;

      for (let i = 0; i < palavra.length; i++) {
          palindro = palavra[i] + palindro;
      }

      if (palavra === palindro) {
          alert(`A palavra ${palavra} é um palíndromo`);
      } else {
          alert(`A palavra ${palavra} não é um palíndromo`);
      }
  }

  function L2A3(NUM) {
      do {
          if (NUM % 3 === 0 && NUM % 5 === 0) {
              alert("Múltiplo de 3 e 5");
          } else if (NUM % 3 === 0) {
              alert("Múltiplo de 3");
          } else if (NUM % 5 === 0) {
              alert("Múltiplo de 5");
          } else {
              alert("Não é múltiplo de 3 nem de 5");
          }

          if (isNaN(NUM)) {
              alert("Por favor, digite um número válido.");
          }
      } while (isNaN(NUM))
  }

  function L2A4(dist, vel) {
      const tempo = dist / vel;
      alert(`Tempo de viagem: ${tempo} horas`);
  }

  function L2A5(valorC) {
      let desconto;
      let valorD;
      let valorF;

      if (valorC <= 200) {
          desconto = 0.05;
      } else if (valorC < 450) {
          desconto = 0.08;
      } else {
          desconto = 0.10;
      }

      valorD = valorC * desconto;
      valorF = valorC - valorD;

      alert(`Valor integral: R$ ${valorC}`);
      alert(`Valor do desconto: R$ ${valorD}`);
      alert(`Valor com desconto: R$ ${valorF}`);
  }

  function L2A6(nota1, nota2) {
      let media, novaMedia, exame;

      media = (nota1 + nota2) / 2;

      if (media >= 7) {
          alert(`Média: ${media.toFixed(2)}`);
          alert(`Aprovado`);
      } else if (media < 3) {
          alert(`Média: ${media.toFixed(2)}`);
          alert(`Reprovado`);
      } else {
          exame = Number(prompt("Digite a nota do exame:"));
          novaMedia = (media + exame) / 2;

          if (novaMedia >= 5) {
              alert(`Média: ${novaMedia.toFixed(2)}`);
              alert(`Aprovado`);
          } else {
              alert(`Média: ${novaMedia.toFixed(2)}`);
              alert(`Reprovado`);
          }
      }
  }

  function L2A7(produto1, produto2) {
      if (produto1.valor > produto2.valor) {
          alert(`Produto com maior valor: Código ${produto1.codigo}\n Nome ${produto1.nome}\n Valor R$ ${produto1.valor}`);
          alert(`Produto com menor valor: Código ${produto2.codigo}\n Nome ${produto2.nome}\n Valor R$ ${produto2.valor}`);
      } else {
          alert(`Produto com maior valor: Código ${produto2.codigo}\n Nome ${produto2.nome}\n Valor R$ ${produto2.valor}`);
          alert(`Produto com menor valor: Código ${produto1.codigo}\n Nome ${produto1.nome}\n Valor R$ ${produto1.valor}`);
      }
  }

  const Opcao = Number(prompt(
      '1- Converter Temperaturas\n' +
      '2- Verificar Palíndromo\n' +
      '3- Verificar Múltiplo de 3 e/ou 5\n' +
      '4- Calcular Tempo de Viagem\n' +
      '5- Calcular Desconto\n' +
      '6- Verificar Média e Aprovação\n' +
      '7- Comparar Produtos\n'
  ));


  switch (Opcao) {
      case 1:
          const escolha = Number(prompt(
              'Digite um número de (1-6) para definir qual temperatura deseja ser convertida:\n' +
              '1: Celsius para Kelvin\n' +
              '2: Kelvin para Celsius\n' +
              '3: Celsius para Fahrenheit\n' +
              '4: Fahrenheit para Celsius\n' +
              '5: Fahrenheit para Kelvin\n' +
              '6: Kelvin para Fahrenheit\n'
          ));
          L2A1(escolha);
          break;
      case 2:
          const palavra = prompt(`Digite a palavra que você deseja verificar se é palíndromo`);
          L2A2(palavra);
          break;
      case 3:
          const NUM = Number(prompt("Digite um número para verificar se é múltiplo de 3 e/ou 5:"));
          L2A3(NUM);
          break;
      case 4:
          const dist = Number(prompt("Digite a distância em km:"));
          const vel = Number(prompt("Digite a velocidade do carro em km/h:"));
          L2A4(dist, vel);
          break;
      case 5:
          const valorC = Number(prompt("Digite o valor da compra:"));
          L2A5(valorC);
          break;
      case 6:
          let nota1 = Number(prompt("Digite a nota da primeira prova:"));
          let nota2 = Number(prompt("Digite a nota da segunda prova:"));
          L2A6(nota1, nota2);
          break;
      case 7:
          let produto1 = {};
          let produto2 = {};

          produto1.codigo = Number(prompt("Digite o código do primeiro produto:"));
          produto1.nome = prompt("Digite o nome do primeiro produto:");
          produto1.valor = Number(prompt("Digite o valor do primeiro produto:"));

          produto2.codigo = Number(prompt("Digite o código do segundo produto:"));
          produto2.nome = prompt("Digite o nome do segundo produto:");
          produto2.valor = Number(prompt("Digite o valor do segundo produto:"));

          L2A7(produto1, produto2);
          break;
      default:
          alert("Número inválido! Por favor, digite um número entre 1 e 7.");
          break;
  }
}













function lista3() {

  function L3A1(num) {
      let fibonacci, numf1 = 1, numf2 = 1;

      if (num === 1 || num === 2) {
          alert(`O número de Fibonacci na posição ${num} é 1.`);
      } else {
          for (let i = 2; i < num; i++) {
              fibonacci = numf1 + numf2;
              numf1 = numf2;
              numf2 = fibonacci;
          }
          alert(`O número de Fibonacci na posição ${num} é ${numf2}.`);
      }
  }

  function L3A2(num1, num2) {
      let pares = 0;
      let impares = 0;

      if (num1 % 2 === 0) {
          pares++;
      } else {
          impares++;
      }

      if (num2 % 2 === 0) {
          pares++;
      } else {
          impares++;
      }

      alert(`Quantidade de números pares:  ${pares}`);
      alert(`Quantidade de números ímpares: ${impares}`);
  }

  function L3A3(num1, num2, num3) {
      let maiorNumero;

      if (num1 >= num2 && num1 >= num3) {
          maiorNumero = num1;
      } else if (num2 >= num1 && num2 >= num3) {
          maiorNumero = num2;
      } else {
          maiorNumero = num3;
      }

      alert(`O maior número é ${maiorNumero}`);
  }

  function L3A4() {
      for (let i = 1; i <= 100; i++) {
          alert(`${i}`);
      }
  }

  function L3A5() {
      let par = 0;

      for (let i = 0; i <= 100; i++) {
          if (i % 2 === 0) {
              par++;
          }
      }

      alert(`A quantidades de números pares de 1 até 100 é ${par}`);
  }

  function L3A6() {
      let soma = 0;

      for (let i = 0; i <= 100; i++) {
          soma += i;
      }

      alert(`A soma de todos os números de 1 até 100 é: ${soma}`);
  }

  function L3A7(palavra1, palavra2) {
      let palavraEmVetor1 = [];

      for (let x = 0; x < palavra1.length; x++) {
          palavraEmVetor1[x] = palavra1[x];
      }

      for (let x = 0; x < palavraEmVetor1.length; x++) {
          for (let y = 0; y < palavraEmVetor1.length; y++) {
              if (palavraEmVetor1[x] < palavraEmVetor1[y]) {
                  let auxiliar = palavraEmVetor1[x];
                  palavraEmVetor1[x] = palavraEmVetor1[y];
                  palavraEmVetor1[y] = auxiliar;
              }
          }
      }

      let palavraOrdenada1 = '';

      for (let x = 0; x < palavraEmVetor1.length; x++) {
          palavraOrdenada1 += palavraEmVetor1[x];
      }

      let palavraEmVetor2 = [];

      for (let x = 0; x < palavra2.length; x++) {
          palavraEmVetor2[x] = palavra2[x];
      }

      for (let x = 0; x < palavraEmVetor2.length; x++) {
          for (let y = 0; y < palavraEmVetor2.length; y++) {
              if (palavraEmVetor2[x] < palavraEmVetor2[y]) {
                  let auxiliar = palavraEmVetor2[x];
                  palavraEmVetor2[x] = palavraEmVetor2[y];
                  palavraEmVetor2[y] = auxiliar;
              }
          }
      }

      let palavraOrdenada2 = '';

      for (let x = 0; x < palavraEmVetor2.length; x++) {
          palavraOrdenada2 += palavraEmVetor2[x];
      }

      if (palavraOrdenada1 == palavraOrdenada2) {
          alert('As palavras são anagramas');
      } else {
          alert('As palavras não são anagramas');
      }
  }

  function L3A8(numElementos, elementos) {
      const vetor = elementos;

      for (let i = 0; i < vetor.length; i++) {
          alert(vetor[i]);
      }
  }

  function L3A9(numElementos, elementos) {
      const vetor = elementos;

      let maiorElemento = vetor[0];

      for (let i = 1; i < vetor.length; i++) {
          if (vetor[i] > maiorElemento) {
              maiorElemento = vetor[i];
          }
      }

      alert("O maior elemento é: " + maiorElemento);
  }

  const Opcao = Number(prompt(
      '1- Fibonacci\n' +
      '2- Contar pares e ímpares\n' +
      '3- Encontrar o maior número\n' +
      '4- Listar números de 1 a 100\n' +
      '5- Contar pares de 1 a 100\n' +
      '6- Somar números de 1 a 100\n' +
      '7- Verificar anagramas\n' +
      '8- Adicionar elementos a um vetor\n' +
      '9- Encontrar o maior elemento de um vetor\n'
  ));

  alert(`Você escolheu a opção: ${Opcao}`);

  switch (Opcao) {
      case 1:
          const num = Number(prompt(`Digite a posição desejada do Fibonacci:`));
          L3A1(num);
          break;
      case 2:
          const num1 = Number(prompt("Digite o primeiro número inteiro: "));
          const num2 = Number(prompt("Digite o segundo número inteiro: "));
          L3A2(num1, num2);
          break;
      case 3:
          const num3 = Number(prompt("Digite o primeiro número: "));
          const num4 = Number(prompt("Digite o segundo número: "));
          const num5 = Number(prompt("Digite o terceiro número: "));
          L3A3(num3, num4, num5);
          break;
      case 4:
          L3A4();
          break;
      case 5:
          L3A5();
          break;
      case 6:
          L3A6();
          break;
      case 7:
          const palavra1 = prompt("Digite a primeira palavra:");
          const palavra2 = prompt("Digite a segunda palavra:");
          L3A7(palavra1, palavra2);
          break;
      case 8:
          const numElementos1 = Number(prompt("Quantos elementos você quer adicionar ao vetor?"));
          const elementos1 = [];
          for (let i = 0; i < numElementos1; i++) {
              elementos1[i] = prompt(`Digite o elemento ${i + 1}:`);
          }
          L3A8(numElementos1, elementos1);
          break;
      case 9:
          const numElementos2 = Number(prompt("Quantos elementos você quer adicionar ao vetor?"));
          const elementos2 = [];
          for (let i = 0; i < numElementos2; i++) {
              elementos2[i] = Number(prompt(`Digite o elemento ${i + 1}:`));
          }
          L3A9(numElementos2, elementos2);
          break;
      default:
          alert("Número inválido! Por favor, digite um número entre 1 e 9.");
          break;
  }
}















function lista4() {
  function L4A1(numero) {
      let resultado;
      if (numero < 0) {
          resultado = "O fatorial não pode ser calculado para números negativos.";
      } else {
          let fatorial = 1;
          for (let i = 1; i <= numero; i++) {
              fatorial *= i;
          }
          resultado = `O fatorial de ${numero} é: ${fatorial}`;
      }
      alert(resultado);
  }

  function L4A2() {
      let resultado = "";
      for (let i = 1; i <= 100; i++) {
          if (i % 3 === 0 && i % 5 === 0) {
              resultado += "FizzBuzz\n";
          } else if (i % 3 === 0) {
              resultado += "Fizz\n";
          } else if (i % 5 === 0) {
              resultado += "Buzz\n";
          } else {
              resultado += i + "\n";
          }
      }
      alert(resultado);
  }

  function L4A3(palavra) {
      let palavraInvertida = "";
      for (let i = palavra.length - 1; i >= 0; i--) {
          palavraInvertida += palavra[i];
      }
      alert(`String original: ${palavra}\nString invertida: ${palavraInvertida}`);
  }

  function L4A4(num) {
      let resultado;
      if (num <= 1) {
          resultado = "O número tem que ser maior que 1.";
      } else if (num == 2 || num == 3 || num == 5) {
          resultado = "Esse número é primo.";
      } else if (num % 2 == 0 || num % 3 == 0 || num % 5 == 0) {
          resultado = "Esse número não é primo.";
      } else {
          resultado = "Esse número é primo.";
      }
      alert(resultado);
  }

  function L4A5(numeros) {
      for (let i = 0; i < numeros.length; i++) {
          for (let j = 0; j < numeros.length; j++) {
              if (numeros[i] < numeros[j]) {
                  let aux = numeros[i];
                  numeros[i] = numeros[j];
                  numeros[j] = aux;
              }
          }
      }
      alert(numeros);
  }

  function L4A6(tamanhoDaPiramide) {
      let resultado = "";
      for (let i = 0; i < tamanhoDaPiramide; i++) {
          let linhaAtual = "";
          for (let j = 0; j < tamanhoDaPiramide - i - 1; j++) {
              linhaAtual += " ";
          }
          for (let k = 1; k <= i + 1; k++) {
              linhaAtual += k + " ";
          }
          resultado += linhaAtual + "\n";
      }
      alert(resultado);
  }

  function L4A7(numeros) {
      for (let i = 0; i < numeros.length; i++) {
          for (let j = 0; j < numeros.length; j++) {
              if (numeros[i] > numeros[j]) {
                  let aux = numeros[i];
                  numeros[i] = numeros[j];
                  numeros[j] = aux;
              }
          }
      }
      alert(numeros);
  }

  function L4A8(numeros) {
      let soma = 0;
      for (let i = 0; i < numeros.length; i++) {
          soma += numeros[i];
      }
      let media = soma / numeros.length;
      alert(media);
  }

  const Opcao = Number(prompt(
      '1- Fatorial\n' +
      '2- FizzBuzz até 100\n' +
      '3- Inverter Palavra\n' +
      '4- Verificar Primo\n' +
      '5- Ordenar Números\n' +
      '6- Pirâmide Numérica\n' +
      '7- Ordenar Números Decrescente\n' +
      '8- Média dos Números\n'
  ));



  switch (Opcao) {
      case 1:
          let numero;
          do {
              numero = Number(prompt("Digite um número inteiro para calcular o fatorial:"));
              if (isNaN(numero)) {
                  alert("Por favor, digite um número válido.");
              }
          } while (isNaN(numero));
          L4A1(numero);
          break;

      case 2:
          L4A2();
          break;

      case 3:
          let palavra;
          do {
              palavra = prompt("Digite uma palavra:");
              if (!palavra) {
                  alert("Por favor, digite uma palavra válida.");
              }
          } while (!palavra);
          L4A3(palavra);
          break;

      case 4:
          let num;
          do {
              num = Number(prompt("Digite um número inteiro positivo:"));
              if (isNaN(num) || num <= 0) {
                  alert("Por favor, digite um número válido.");
              }
          } while (isNaN(num) || num <= 0);
          L4A4(num);
          break;

      case 5:
          let arrayNumeros = [];
          for (let i = 0; i < 4; i++) {
              let numero;
              do {
                  numero = Number(prompt(`Digite o ${i + 1}º número:`));
                  if (isNaN(numero)) {
                      alert("Por favor, digite um número válido.");
                  }
              } while (isNaN(numero));
              arrayNumeros.push(numero);
          }
          L4A5(arrayNumeros);
          break;

      case 6:
          let tamanhoPiramide;
          do {
              tamanhoPiramide = Number(prompt("Digite o tamanho da pirâmide:"));
              if (isNaN(tamanhoPiramide) || tamanhoPiramide <= 0) {
                  alert("Por favor, digite um número válido.");
              }
          } while (isNaN(tamanhoPiramide) || tamanhoPiramide <= 0);
          L4A6(tamanhoPiramide);
          break;

      case 7:
          let arrayNumerosDesc = [];
          for (let i = 0; i < 4; i++) {
              let numero;
              do {
                  numero = Number(prompt(`Digite o ${i + 1}º número:`));
                  if (isNaN(numero)) {
                      alert("Por favor, digite um número válido.");
                  }
              } while (isNaN(numero));
              arrayNumerosDesc.push(numero);
          }
          L4A7(arrayNumerosDesc);
          break;

      case 8:
          let arrayNumerosMedia = [];
          for (let i = 0; i < 4; i++) {
              let numero;
              do {
                  numero = Number(prompt(`Digite o ${i + 1}º número:`));
                  if (isNaN(numero)) {
                      alert("Por favor, digite um número válido.");
                  }
              } while (isNaN(numero));
              arrayNumerosMedia.push(numero);
          }
          L4A8(arrayNumerosMedia);
          break;

          default:
            alert("Opção inválida. Por favor, escolha uma opção entre 1 e 8.");
            break;
            }
          }
            









function OPCAO() {

let option = Number(prompt(
      '1- Lista 1\n' +
      '2- lista 2\n' +
      '3- lista 3\n' +
      '4- lista 4\n'))

switch(option) {
case 1:
lista1();
break;
case 2:
lista2();
break;
case 3:
lista3();
break;
case 4:
lista4();
break;
default:
alert("Opção inválida. Por favor, escolha uma opção entre 1 e 4.");
break;
}

}



OPCAO();
