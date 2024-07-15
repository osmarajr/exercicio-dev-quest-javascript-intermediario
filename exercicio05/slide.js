//Obter variaveis das imagens
let imagens = document.querySelectorAll('.slide');
//Obter elementos das setas
const setaVoltar = document.getElementById('seta-voltar');
const setAvancar = document.getElementById('seta-avancar') ;

let imagemAtual = 0;

setAvancar.addEventListener('click',function(){
    if(imagemAtual === imagens.length - 1){
        return
    }
    imagemAtual++;

    esconderImagemAberta();
    mostrarImagem();
    mostrarOuEsconderSetas();
})