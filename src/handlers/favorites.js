import { quoteFavoriteBtn, removeFavoriteQuote } from '../../index.js';

function toggleFavoriteCard(quote, container) {
  quote.isFavorite
    ? showFavoriteCard(quote, container)
    : removeFavoriteCard(quote.id);
}

function handleFavorite(isFavorite) {
  toggleFavoriteBtnIcon(isFavorite);
}

function toggleFavoriteBtnIcon() {
  const btn = quoteFavoriteBtn;
  if (btn.classList.contains('fa-solid')) {
    btn.classList.remove('fa-solid');
    btn.classList.add('fa-regular');
  } else if (btn.classList.contains('fa-regular')) {
    btn.classList.remove('fa-regular');
    btn.classList.add('fa-solid');
  }
}

function showFavoriteBtn(isFavorite) {
  const btn = quoteFavoriteBtn;
  btn.style.display = 'inline-block';
  if (isFavorite) {
    btn.classList.remove('fa-regular');
    btn.classList.add('fa-solid');
  } else {
    btn.classList.remove('fa-solid');
    btn.classList.add('fa-regular');
  }
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
  handleFavorite,
  toggleFavoriteCard,
  hideFavoriteBtn,
  showFavoriteCard,
  toggleFavoriteBtnIcon,
  showFavoriteBtn,
  removeFavoriteCard,
};
