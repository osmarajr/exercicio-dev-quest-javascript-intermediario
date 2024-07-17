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

    mostrarImagem();

    esconderOuMostrarSeta();
})

setaVoltar.addEventListener('click', function(){
    if(imagemAtual <= 0){
        return
    }

    esconderImagemAberta();
    imagemAtual--;
    mostrarImagem();

    esconderOuMostrarSeta()
})

function esconderImagemAberta(){
    const imagemAberta =  document.querySelector('.mostrar');

    imagemAberta.classList.remove('mostrar')
}

function mostrarImagem(){
    
    imagens[imagemAtual].classList.add('mostrar');
}

function esconderOuMostrarSeta(){

    const naoEhAPrimeiraImagem =  imagemAtual !== 0;
    if(naoEhAPrimeiraImagem){
        setaVoltar.classList.remove('opacidade')
    }else{
        setaVoltar.classList.add('opacidade')
    }

    const naoEhAUltimaImagem =  imagemAtual !== imagens.length;
    if(naoEhAUltimaImagem){
        setAvancar.classList.remove('opacidade')
    }else{
        setAvancar.classList.add('opacidade')
    }
}
