const botaoMensagem = document.querySelector(".btn-mensagem")
const formularioContato = document.querySelector(".formulario-contato")
const inputNome = document.querySelector(".input-nome")
const feedback = document.querySelector(".feedback")
const formSkill = document.querySelector(".form-skill")
const inputSkill = document.getElementById("nova-skill")


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

// Aula 5
const listaSkills = document.querySelector(".lista-skills");
const skillsPadrao = [
    "HTML", 
    "CSS", 
    "Javascript",
    "Flexbox", 
    "Responsividade", 
    "Arrow Function" ,
    "DOM",
    "Template literals",
];

let skills = skillsPadrao;

function renderizarSkills () {
    const skillsHTML = skills.map((skill) => { return `<li>${skill}</li>` })

    listaSkills.innerHTML = skillsHTML.join("")
}

//pegar um valor em Local storage
const skillsSalvas = localStorage.getItem("skills");


if(skillsSalvas){
    skills = JSON.parse(skillsSalvas);
}



const salvarSkills = () => {
    console.log("Salvando...")
    localStorage.setItem("skills", JSON.stringify(skills));
};

formSkill.addEventListener("submit", (evento) => {
evento.preventDefault

const novaSkill = inputSkill.value.trim();
if(!novaSkill){
    return;
}

skills.push(novaSkill);
salvarSkills();
renderizarSkills();

formSkill();
inputNome.focus()

})

renderizarSkills();