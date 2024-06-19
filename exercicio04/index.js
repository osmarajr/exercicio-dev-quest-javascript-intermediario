/*
**Descrição da tarefa:**  Nessa tarefa, você deve criar um ou mais inputs na tela. Ao digitar qualquer texto em um desses inputs, a sua borda deverá ficar com a cor verde. Caso o input estiver vazio, a cor da borda deverá voltar ao normal.
*/
//obter elemento dos inputs 
const inputs = document.querySelector('.inputs');

inputs.addEventListener('input', function(){
    if(inputs.value === ''){
        inputs.classList.remove('corBordaInput')
    }else{
        inputs.classList.add('corBordaInput')
    }
})