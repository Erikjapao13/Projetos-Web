let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function() {
    let meuSrc = minhaImagem.getAttribute('src');
    if(meuSrc === 'imagens/firefox-icon.png') {
      minhaImagem.setAttribute ('src','imagens/firefox2.png');
    } else {
      minhaImagem.setAttribute ('src','imagens/firefox-icon.png');
    }
}

let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');

function defineNomeUsuario() {
  let meuNome = prompt('Por favor, digite seu nome.');
  if(!meuNome || meuNome == null) {
    defineNomeUsuario();
  } else {
    localStorage.getItem('nome', meuNome);
    meuCabecalho.innerHTML = 'Mozilla é legal, ' + meuNome;
  }
}

meuBotao.onclick = function() {
  defineNomeUsuario();
}