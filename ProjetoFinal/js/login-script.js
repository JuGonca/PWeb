const form = document.querySelector(".login-form"); //"pega" o formulário

form.addEventListener("submit", function(event){
    event.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
});