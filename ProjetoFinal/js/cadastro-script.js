const form = document.querySelector(".cadastro-form"); //"pega" o formulário

form.addEventListener("submit", function(event){
    event.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const configSenha = document.getElementById("confg-senha").value;
});

/*
Host: mysql-nutricode.alwaysdata.net 
Database: nutricode_mysql 
User: nutricode_admin
Password: Nutr1c@dE
Port: 3306 (padrão)
*/