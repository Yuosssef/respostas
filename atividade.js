
        
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
          alert("Opção inválida.");
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
  }
}

lista2();








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
// Lógica para subtrair os números
break;
case 4:
// Lógica para multiplicar os números
break;
default:
alert("Opção inválida. Por favor, escolha uma opção entre 1 e 4.");
}
