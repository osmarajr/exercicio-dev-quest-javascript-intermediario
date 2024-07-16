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
    esconderImagemAberta();

    imagemAtual++;

    mostrarImagem(imagens);
})

function esconderImagemAberta(){
    const imagemAberta =  document.querySelector('.mostrar');

    imagemAberta.classList.remove('mostrar')
}

function mostrarImagem(imagens){
    
    imagens[imagemAtual].classList.add('mostrar');
}

setaVoltar.addEventListener('click', function(){
    if(imagemAtual <= 0){
        return
    }

    esconderImagemAberta();
    imagemAtual--;
    mostrarImagem(imagens);
})
