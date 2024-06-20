/*
**Descrição da tarefa:**  Nessa tarefa, você deve criar um ou mais inputs na tela. Ao digitar qualquer texto em um desses inputs, a sua borda deverá ficar com a cor verde. Caso o input estiver vazio, a cor da borda deverá voltar ao normal.
*/
//obter elemento dos inputs 

//obter o elemento
const inputText = document.querySelectorAll(".input-text");
//Percorrer todos elementos
inputText.forEach(indice=> {
    //se campo tiver mudança, então realizar os procedimentos
    indice.addEventListener('change', () => {
        if(indice !== ""){
            indice.classList.add("campo-preenchido");
        }else{
            indice.classList.remove("campo-preenchido")
        }
    });
});