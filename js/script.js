// menu ativado
const links = document.querySelectorAll(".header-menu a");
function ativarLink(link) {
  const url = window.location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}
links.forEach(ativarLink);
// Ativar items do orçamento
const parametros = new URLSearchParams(location.search);
function ativarproduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}
parametros.forEach(ativarproduto);

// Perguntas frenquentes
const perguntas = document.querySelectorAll(".perguntas button"); //seleciona o botão
// função para ativar a pergunta
function ativarpergunta(event) {
  const pergunta = event.currentTarget; //para puxar dados da pergunta
  const controls = pergunta.getAttribute("aria-controls"); //puxa atributo dentro da classe inicial
  const resposta = document.getElementById(controls); //puxa id pela resposta
  resposta.classList.toggle("ativa"); //cria uma classe nova (ativa)
  const ativa = resposta.classList.contains("ativa"); // pra consultar se está ativa ou não
  pergunta.setAttribute("aria-expanded", ativa); //muda o atributo aria-expanded para true quando tiver ativado/false
}
function eventosperguntas(pergunta) {
  pergunta.addEventListener("click", ativarpergunta); //evento para clicar no botão ativar pergunta
}
perguntas.forEach(eventosperguntas); // botão/evento

// Galeria

const galeria = document.querySelectorAll(".bicicleta-imagens img"); //seleciona as img
const galeriacontainer = document.querySelector(".bicicleta-imagens"); //seleciona a div que segura as imagens
function trocarimagem(event) {
  //função para quando acionar a função click
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 1000px)").matches; //para só acontecer caso a tela esteja maior q 1000px
  if (media) {
    galeriacontainer.prepend(img); // para adicionar a imagem no local da outra
  }
}
function eventosgaleria(img) {
  img.addEventListener("click", trocarimagem); //adicionando o evento
}
galeria.forEach(eventosgaleria);
