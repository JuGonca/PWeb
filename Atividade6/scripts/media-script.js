//Capturando formulário
const form = document.getElementById('formulario');

//Recebendo valores
form.addEventListener('submit', function(event){
    event.preventDefault();
    const nome = document.getElementById('nomeAluno');
    const nota1 = document.getElementById('nota1');
    const nota2 = document.getElementById('nota2');
    const nota3 = document.getElementById('nota3');
    const nota4 = document.getElementById('nota4');

    console.log('Nome: ', nome);
}
);
