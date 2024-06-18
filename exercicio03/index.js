/*
**Descrição da tarefa**: Inicialmente, temos um quadrado com o fundo preto em que o objetivo desse exercício é que ao clicar nele, seja feita uma verificação se ele possui a classe “azul”. Se ele não possuir, devemos adicionar essa classe usando o método add do classList para adicionar essa classe ao elemento, **lembrando que essa classe deve ser criada previamente no CSS**. Após adicionada a classe, ele ficará com a cor azul, só que ao clicar novamente, deverá retornar a cor original, removendo a classe azul, com a utilização do método **remove.**
*/

//obter o elemento quadrado
const quadrado = document.querySelector('.quadrado');

//ao clicar verificar se possui classe azul senao adicionar, e ao clicar novamente retornar para a classe original
function verificarCor(){
    const classeAzulExiste = quadrado.classList.contains('azul')

    console.log(classeAzulExiste);

    if(classeAzulExiste){
        quadrado.classList.remove('azul');
    }else{
        quadrado.classList.add('azul');
    }
}