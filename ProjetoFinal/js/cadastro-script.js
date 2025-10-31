const form = document.querySelector(".cadastro-form"); //"pega" o formulário

form.addEventListener("submit", async function(event){
    event.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const configSenha = document.getElementById("confg-senha").value;

    if(senha !== configSenha){
        alert("As senhas não coincidem!");
        return;
    }

    if(email == "" || senha == "" || configSenha == ""){
        alert("Preencha todos os campos!");
        return;
    }

    try {
        const resposta = await fetch("http://localhost:3000/cadastro", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ email, senha })
        });

        const resultado = await resposta.text();
        alert(resultado); // Mostra a mensagem vinda do servidor
        form.reset(); // Limpa o formulário
    } 
    catch (erro) {
        console.error("Erro ao enviar dados:", erro);
        alert("Erro ao conectar com o servidor.");
    }

    alert("Cadastro realizado com sucesso!");
});

/*
Host: mysql-nutricode.alwaysdata.net 
Database: nutricode_mysql 
User: nutricode
Password: Nutr1c@dE
Port: 3306 (padrão)
*/