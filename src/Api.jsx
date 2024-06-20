import NovoMeme from './novoMeme.jsx'; 

fetch('https://api.imgflip.com/get_memes').
then(api=>api.json().
then(dados => mostrarMemes(dados)))

fetch('https://api.quotable.io/random').
then(api2=>api2.json().
then(legendas => mostrarLegenda(legendas)))


function mostrarMemes(dados){
const posicao = Math.floor(Math.random()*100)
    const nomeMeme = document.querySelector('#nome')
    const imagemMeme = document.querySelector('#imagem')
    nomeMeme.textContent = dados.data.memes[posicao].name
    imagemMeme.src = dados.data.memes[posicao].url

    
}

function mostrarLegenda(legendas){
    const legendamemes = document.querySelector('#legenda')
    legendamemes.textContent = legendas.content
}



function Api(){
    return(
        <>

        
        <h1 id="nome"></h1>
        <img src="" alt="" id="imagem" width={500}/>
        <h4 id="legenda"></h4>
        <NovoMeme />
        
        
        </>
    )
}

export default Api