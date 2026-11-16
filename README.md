# Página pessoal — Arthur Bruno

Portfólio de estudo com apresentação, seleção de projetos, consulta ao perfil do GitHub e competências persistidas no navegador.

## Tecnologias

HTML5, CSS3 e JavaScript puro. Integração com a API pública do GitHub.

## Funcionalidades

- Seleção curada de projetos, independente da disponibilidade da API.
- Consulta ao perfil ArthurBrunoS com identidade de reserva e limite de espera.
- Competências com prevenção de duplicatas e recuperação de dados inválidos.
- Inserção de texto sem interpretar HTML informado pelo visitante.
- Formulário acessível de demonstração.

## Executar localmente

1. Clone este repositório e abra a pasta no VS Code.
2. Abra `index.html` com a extensão Live Server, ou sirva a pasta com um servidor HTTP estático.
3. Acesse a página no navegador. O `index.html` da raiz é o ponto de entrada.

É necessária conexão com a internet para consultar a API. As mensagens e os dados de reserva documentam o comportamento quando o serviço não responde.

## Validação

Checklist de navegador:

- [ ] Bloquear a API do GitHub; nome, apresentação e projetos devem continuar visíveis.
- [ ] Adicionar competência, recarregar, tentar duplicata e testar armazenamento inválido/bloqueado.
- [ ] Informar texto com marcação HTML; deve ser mostrado como texto.
- [ ] Abrir e fechar o formulário por teclado; conferir a mensagem explícita de simulação.
- [ ] Conferir a leitura em tela pequena.

A verificação visual e as capturas de tela devem ser feitas após abrir a versão atual no navegador. Não há capturas publicadas nem garantia de validação visual nesta revisão.

## Demonstração e publicação

Não há URL de demonstração pública validada nesta revisão. As alterações propostas não configuram nem publicam uma hospedagem. Para uma publicação futura, utilize o ponto de entrada da raiz e confira os caminhos dos arquivos.

## Limitações e autoria

O formulário não envia nem armazena mensagens. Competências ficam somente no navegador do visitante e não alteram o perfil público. O blog está identificado como privado, sem link público de demonstração. Capas em gradiente são elementos visuais, não capturas das aplicações.

Este README descreve a versão proposta nesta revisão. O histórico do Git preserva os autores e as contribuições anteriores. Materiais de curso, imagens e serviços de terceiros devem ter suas condições de uso verificadas antes de uma redistribuição; esta revisão não atribui autoria exclusiva nem adiciona uma licença aos recursos existentes.
