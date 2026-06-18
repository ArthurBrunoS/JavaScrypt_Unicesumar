//selecionar os elementos que a API vai usar

const fotoPerfil = document.querySelector(`header img`);
const nomePerfil = document.querySelector(`header h1`);
const cargoPerfil = document.querySelector(`.cargo`);

const containerProjetos = document.querySelector(`.projetos`);

//de quem eu vou pegar essas informações?
const usuarioGithub = "Arthusao22";

//dados do perfil vinda da API

const carregarPerfil = async () => {
    try {
        const resposta = await fetch(`https://api.github.com/users/${usuarioGithub}`);
        if(!resposta.ok){
            throw new Error("Não foi possível carregar o perfil do Github");
        }

        const dadosPerfil = await resposta.json();

        //tratar os dados que podem vir vazios
        fotoPerfil.src = dadosPerfil.avatar_url;
        nomePerfil.textContent = dadosPerfil.name || "Arthur Bruno da Silva";
        cargoPerfil.textContent = dadosPerfil.bio || "Estudante de Engenharia de Software";
    } catch (erro){
        console.log(`Não foi possível carregar o perfil do Github`, erro);
    }
}

//Projetos do Github

const gradients = ["projeto-1" , "projeto-2", "projeto-3"];

const carregarPrejetos = async () => {
    //loading
    containerProjetos.innerHTML = `<p>Carregando projetos...</p>`;
    try{
    const resposta = await fetch(`https://api.github.com/users/${usuarioGithub}/repos?sort=update&per_page=6`);
        if(!resposta.ok){
            throw new Error("Não foi possível carregar os projetos do Github");
        }
    const repos = await resposta.json();
    console.log(repos);
    //atualizar o HTML com os projetos
    }catch(erro){

    }
}


carregarPerfil();
carregarPrejetos();
//chamar a função carregaPrejetos()