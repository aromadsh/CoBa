let availableAImages = Array.from({ length: 12 }, (_, i) => `a-images/A${i + 1}.png`);
let currentCard = null;

function drawCard() {
  const totalCards = 14;
  const randomIndex = Math.floor(Math.random() * totalCards) + 1;
  const cardImage = `cards/${randomIndex}.PNG`;

  currentCard = randomIndex;
  hideAlert();

  const card = document.getElementById('card');
  card.style.transform = 'scale(0)';

  setTimeout(() => {
    card.src = cardImage;
    card.style.transform = 'scale(1)';
  }, 200);
}

document.getElementById('card').addEventListener('click', () => {
  if (currentCard === 1) {
    if (availableAImages.length > 0) {
      const randIdx = Math.floor(Math.random() * availableAImages.length);
      const selectedAImage = availableAImages.splice(randIdx, 1)[0];
      const card = document.getElementById('card');

      card.style.transform = 'scale(0)';
      setTimeout(() => {
        card.src = selectedAImage;
        card.style.transform = 'scale(1)';
      }, 200);
    } else {
      showAlert();
    }
  }
});

function showAlert() {
  document.getElementById('alert-box').style.display = 'block';
}

function hideAlert() {
  document.getElementById('alert-box').style.display = 'none';
}

function resetAImages() {
  availableAImages = Array.from({ length: 12 }, (_, i) => `a-images/A${i + 1}.PNG`);
  hideAlert();
}
