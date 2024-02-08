function calcular(){

    
    let numberOne = prompt('Digite o primeiro número:') // definir e atribuir valors paras variáveis
    let numberTwo = prompt('Digite o segundo número:')
    
    numberOne = Number(numberOne); // converter o tipo de dado para number 
    numberTwo = Number(numberTwo);
    
    const sum = numberOne + numberTwo; //atribuir variável de soma e operar a soma
    alert(`A soma entre ${numberOne} e ${numberTwo} é igual a ${sum}`);
    
    const sub = numberOne - numberTwo;
    if (sub < 0) {
        alert(`A subtração entre ${numberOne} e ${numberTwo} resultou em um valor negativo!`);
    } else {
        alert(`A subtração entre ${numberOne} e ${numberTwo} é igual a ${sub}`);
    }
    
    const multi = numberOne * numberTwo;
    alert(`O produto entre ${numberOne} e ${numberTwo} é igual a ${multi}`);
    
    const div = numberOne / numberTwo;
    alert(`O resultado da divisão entre  ${numberOne} por ${numberTwo} é igual a ${div}`);
}
    
    
    