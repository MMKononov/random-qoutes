import { quoteFavoriteBtn, removeFavoriteQuote } from '../../index.js';

function toggleFavoriteCard(quote, container) {
  quote.isFavorite
    ? showFavoriteCard(quote, container)
    : removeFavoriteCard(quote.id);
}

function showFavoriteBtn(isFavorite) {
  const btn = quoteFavoriteBtn;
  if (btn.style.display === 'none') btn.style.display = 'inline-block';
  btn.classList.toggle('fa-solid', isFavorite);
  btn.classList.toggle('fa-regular', !isFavorite);
}
function hideFavoriteBtn() {
  quoteFavoriteBtn.style.display = 'none';
}

function showFavoriteCard(quote, container) {
  const { id, text, author } = quote;
  const favoriteCard = document.createElement('div');
  favoriteCard.classList.add('favorite-card');
  favoriteCard.dataset.favoriteQuoteId = id;
  favoriteCard.innerHTML = `
  <p>${text}</p>
  <p class="favorite-card-author">${author}</p>
  <button class="btn btn-danger"><i class="far fa-trash-alt"></i> Remove from favorites</button>
  `;
  container.appendChild(favoriteCard);
  const removeButton = favoriteCard.querySelector('.btn-danger');
  removeButton.addEventListener('click', () => removeFavoriteQuote(id));
}

function removeFavoriteCard(id) {
  const card = document.querySelector(`[data-favorite-quote-id="${id}"]`);

  if (card) {
    card.remove();
  }
}

export {
  toggleFavoriteCard,
  hideFavoriteBtn,
  showFavoriteCard,
  showFavoriteBtn,
  removeFavoriteCard,
};
