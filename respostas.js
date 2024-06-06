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