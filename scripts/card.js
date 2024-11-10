let cardAberto = null;

// Função para inicializar as cores dos cards ao carregar a página
function inicializarCoresDosCards() {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.style.backgroundColor = card.dataset.color;
  });
}

// Chama a função de inicialização ao carregar a página
window.onload = inicializarCoresDosCards;

function exibirInformacao(card) {
  // Verifica se o card clicado já está aberto
  if (cardAberto === card) {
    // Fecha o card se ele já estiver aberto e volta para a cor original
    card.innerHTML = `
      <div class="card-body">
        <h5 class="card-title">${card.dataset.title}</h5>
        <p class="card-text">Clique para mais informações.</p>
      </div>
    `;
    card.style.backgroundColor = card.dataset.color; // Restaura a cor original
    cardAberto = null; // Limpa a referência para o card aberto
    return;
  }

  // Fecha o card anterior, se houver um aberto, e volta para a cor original
  if (cardAberto) {
    cardAberto.innerHTML = `
      <div class="card-body">
        <h5 class="card-title">${cardAberto.dataset.title}</h5>
        <p class="card-text">Clique para mais informações.</p>
      </div>
    `;
    cardAberto.style.backgroundColor = cardAberto.dataset.color; // Restaura a cor original do card anterior
  }

  // Define o conteúdo do card clicado com as informações específicas
  card.innerHTML = `
    <div class="card-body">
      <h5 class="card-title">Matérias do ${card.dataset.title}</h5>
      <ul class="card-text">
        ${card.dataset.info}
      </ul>
    </div>
  `;

  // Define o fundo branco para o card atualmente aberto
  card.style.backgroundColor = "white";
  
  // Atualiza a referência para o card atualmente aberto
  cardAberto = card;
}
