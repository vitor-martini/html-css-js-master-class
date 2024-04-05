const openCookieElement = document.querySelector("#open-cookie")
const openAnotherElement = document.querySelector("button")
const fortuneElement = document.querySelector(".message p")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

openCookieElement.addEventListener("click", openCookie)
openAnotherElement.addEventListener("click", toggleScreen)

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function openCookie() {
  const randomIndex = Math.floor(Math.random() * fortunes.length)
  fortuneElement.innerHTML = fortunes[randomIndex]
  toggleScreen()
}

const fortunes = [
  "Grandes jornadas começam com um simples passo.",
  "A sorte favorece o corajoso.",
  "Seja o arquiteto de seu próprio destino.",
  "A verdadeira sabedoria é aquela que encontramos nas surpresas da vida.",
  "O sucesso será seu quando você escolher não parar de dar o melhor de si.",
  "Acredite no poder dos seus sonhos.",
  "Um ato de bondade é como um eco – sempre retorna.",
  "A mudança começa na sua decisão de tentar.",
  "Novas experiências estão à sua espera. Esteja aberto às possibilidades.",
  "A persistência é o que transforma o impossível em possível.",
  "Oportunidades e aventuras aguardam aqueles que têm coragem de buscar.",
  "A felicidade muitas vezes se infiltra por uma porta que você não sabia que estava aberta.",
  "Sua capacidade de aprender sempre o torna mais forte.",
  "Conhecimento é o tesouro, mas a prática é a chave para ele.",
  "Uma mente positiva encontra oportunidade em tudo.",
  "O caminho menos percorrido é muitas vezes o que leva às maiores recompensas.",
  "Seja paciente. As melhores coisas acontecem inesperadamente.",
  "A vida é uma tela. Pinte-a com cores vibrantes.",
  "Crie a sua própria sorte com ação.",
  "A amizade é um abrigo em qualquer tempestade.",
  "Uma vida criativa é cheia de desafios superados.",
  "Faça mais do que existir: viva.",
  "Você está prestes a conquistar algo grandioso.",
  "O sucesso é frequentemente um resultado de se agarrar quando outros já soltaram.",
  "A sua felicidade está interligada com a sua atitude perante a vida.",
  "A coragem não é a ausência de medo, mas a conquista sobre ele.",
  "Você irá descobrir uma coisa incrível que trará alegria.",
  "Esteja presente. É o único momento que importa.",
  "A cada dia, dê a si mesmo a permissão para sonhar.",
  "A aventura te aguarda, apenas siga o chamado."
]