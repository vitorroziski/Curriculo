document.addEventListener('DOMContentLoaded', function() {
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');
    const botaoContraste = document.getElementById('contraste');
    botaoDeAcessibilidade.addEventListener('click', function() {
    botaoDeAcessibilidade.classList.toggle('rotacao-botao');
    opcoesDeAcessibilidade.classList.toggle('apresenta-lista');
    opcoesDeAcessibilidade.style.display =
    (opcoesDeAcessibilidade.style.display === 'none' || opcoesDeAcessibilidade.style.display
    === '')
    ? 'block' : 'none';
    });
    botaoContraste.addEventListener('click', function() {
    document.body.classList.toggle('alto-contraste');
    });
    });