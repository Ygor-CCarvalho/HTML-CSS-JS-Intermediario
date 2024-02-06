const form = document.getElementById("form");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const mensagem = document.getElementById("mensagem");


form.addEventListener("submit", (e) => {
    e.preventDefault();

    verificarEntradas();

  });

function verificarEntradas(){
    const valorNome = nome.value;
    const valorEmail = email.value;
    const valorTelefone = telefone.value;
    const valorMensagem = mensagem.value;

    if (valorNome === ""){
        entradaVazia(nome);
    }else {
        entradaPreenchida(nome);
    }
    
    if (valorEmail === ""){
        entradaVazia(email);
    }else {
        entradaPreenchida(email);
    }

    if (valorTelefone === ""){
        entradaVazia(telefone);
    }else {
        entradaPreenchida(telefone);
    }

    if (valorMensagem === ""){
        entradaVazia(mensagem);
    }else {
        entradaPreenchida(mensagem);
    }
};
 
function entradaVazia(input){

    const formControl = input.parentElement;

    formControl.className = "form-control erro"
};

function entradaPreenchida(input){

    const formControl = input.parentElement;

    formControl.className = "form-control sucesso"
};

