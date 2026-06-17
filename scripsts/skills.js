const formSkill = document.querySelector(".form-skill")
const inputSkill = document.getElementById("nova-skill")
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