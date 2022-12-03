const cards = document.querySelectorAll('.memory-card');
var clicks = document.getElementById("click");
let clickNum = 0;
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
clicks.innerHTML=clickNum;

function flipCard() {
  clicks.innerHTML=clickNum
  if (lockBoard) return;
  if (this === firstCard) return;
  
  this.classList.add('flip');

  if (!hasFlippedCard) {
    // first click
    hasFlippedCard = true;
    firstCard = this;
    clickNum++;
    clicks.innerHTML=clickNum;
    return;
  }

  // second click
  secondCard = this;
  clickNum++;
  clicks.innerHTML=clickNum;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

function reset(){
  document.location.reload();

}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));
