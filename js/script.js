// Captura o elemento que possui o ID ano-atual
const anoAtual = document.getElementById("ano-atual");

// Obtém o ano atual do computador
const ano = new Date().getFullYear();

// Insere o ano dentro do elemento HTML
anoAtual.textContent = ano;

// Captura todos os botões de filtro
const botoesFiltro = document.querySelectorAll(".filtro");

// Captura todos os cards dos produtos
const produtos = document.querySelectorAll(".produto-card");

// Percorre todos os botões de filtro
botoesFiltro.forEach(botao => {

    // Detecta quando um botão é clicado
    botao.addEventListener("click", () => {

        // Captura a categoria selecionada
        const categoriaSelecionada = botao.dataset.categoria;
        // Remove a classe ativo de todos os botões
        botoesFiltro.forEach(botao => {
        botao.classList.remove("ativo");
        });

// Adiciona a classe ativo ao botão selecionado
botao.classList.add("ativo");

        // Percorre todos os produtos
        produtos.forEach(produto => {

        // Verifica se o produto pertence à categoria selecionada
        if (
            categoriaSelecionada === "todos" ||
            produto.dataset.categoria === categoriaSelecionada
        ) {

            produto.style.display = "block";

        } else {

            produto.style.display = "none";

        }

        });
            });

});