const botaoMensagem = document.querySelector(".btn-mensagem")
const formularioContato = document.querySelector(".formulario-contato")
const inputNome = document.querySelector(".input-nome")
const feedback = document.querySelector(".feedback")



// evento: click
botaoMensagem.addEventListener("click", () =>{
    console.log("meu deus")
    formularioContato.classList.toggle("escondido")

    if( formularioContato.classList.contains("escondido")){
        botaoMensagem.textContent = "Enviar mensagem" 
    } else{
        botaoMensagem.textContent = "Cancelar envio"
    }
})

// envio do formulario
formularioContato.addEventListener("submit", (event) => {
 event.preventDefault();
 const nome = inputNome.value;

 feedback.innerHTML = `
 <div class="feedback-sucesso">
    <span>Mensagem enviada com sucesso ${nome}!</span>

    <button class="fechar-feedback">x</button>
</div>
 `;

 const botaoFechar = document.querySelector(".fechar-feedback");
 botaoFechar.addEventListener("click", () =>{
  feedback.innerHTML="";
 })
})