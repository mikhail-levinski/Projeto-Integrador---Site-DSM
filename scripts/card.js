let cardAberto = null;

function exibirInformacao(card) {
  // Verifica se o card clicado já está aberto
  if (cardAberto === card) {
    // Fecha o card se ele já estiver aberto
    card.innerHTML = `
      <div class="card-body">
        <h5 class="card-title">${card.dataset.title}</h5>
        <p class="card-text">Clique para mais informações.</p>
      </div>
    `;
    cardAberto = null; // Limpa a referência para o card aberto
    return;
  }

  // Fecha o card anterior, se houver um aberto
  if (cardAberto) {
    cardAberto.innerHTML = `
      <div class="card-body">
        <h5 class="card-title">${cardAberto.dataset.title}</h5>
        <p class="card-text">Clique para mais informações.</p>
      </div>
    `;
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

  // Atualiza a referência para o card atualmente aberto
  cardAberto = card;
}