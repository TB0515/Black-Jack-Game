window.addEventListener("load", function () {
  let dealerCard = document.getElementById("dealer-cards"); // for calscore and display each time dealt
  let dealerCardDealt = document.getElementById("dcard"); //needs to display text
  let playerCard = document.getElementById("player-cards"); // for calscore and display each time dealt
  let playerCardDealt = document.getElementById("pcard"); //needs to display text
  let playerScoreBoard = document.getElementById("player-score"); //needs to display text
  let dealerScoreBoard = document.getElementById("dealer-score"); //needs to display text
  let hitButton = document.getElementById("hit-btn"); // event-listener click
  let standButton = document.getElementById("stand-btn"); // event-listener click
  let restartButton = document.getElementById("restart-btn"); // event-listener click
  let messageBoard = document.getElementById("message"); //needs to display text

  const suits = ["&spades;", "&hearts;", "&diams;", "&clubs;"];
  const values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];

  let deck = []; // main deck

  let playerHand = [];
  let dealerHand = [];
  let playerScore = 0;
  let dealerScore = 0;

  let isGameOver = false;

  // creates 52 cards in sequence
  function createDeck() {
    deck = [];
    for (let sym of suits) {
      for (let value of values) {
        deck.push({ sym, value });
      }
    }
  }

  // To make cards in the deck random (swaping elements many times) or could be done by generating a array of random no from 1-52 and changing the value of key in the deck and sorting the deck)
  function shuffleDeck() {
    for (let i = deck.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
  }

  function getCardValue(card) {
    if (card.value === "A") {
      return 11;
    } else if (["J", "Q", "K"].includes(card.value)) {
      return 10;
    } else {
      return parseInt(card.value);
    }
  }

  function calculateScore(hand) {
    let score = 0;
    let aces = 0;
    for (let card of hand) {
      score += getCardValue(card);
      if (card.value === "A") {
        aces++;
      }
    }
    while (score > 21 && aces > 0) {
      score -= 10;
      aces--;
    }
    return score;
  }

  function renderHands() {
    dealerCardDealt.innerHTML = "";
    dealerHand.forEach((card, index) => {
      if (index === 1 && !isGameOver) {
        dealerCardDealt.innerHTML += "?";
      } else {
        dealerCardDealt.innerHTML += " " + card.value + card.sym;
      }
    });

    playerCardDealt.innerHTML = "";

    playerHand.forEach((card) => {
      playerCardDealt.innerHTML += " " + card.value + card.sym;
    });

    playerScoreBoard.innerHTML = calculateScore(playerHand);

    if (isGameOver) {
      dealerScoreBoard.innerHTML = calculateScore(dealerHand);
    } else {
      dealerScoreBoard.innerHTML = getCardValue(dealerHand[0]);
    }
  }

  function dealerTurn() {
    dealerScore = calculateScore(dealerHand);
    while (dealerScore < 17) {
      dealerHand.push(deck.pop());
      dealerScore = calculateScore(dealerHand);
    }
  }

  function showMessage(msg) {
    messageBoard.innerHTML = msg;
  }

  function endGame() {
    isGameOver = true;
    hitButton.style.display = "none";
    standButton.style.display = "none";
    restartButton.style.display = "inline-block";
    renderHands();
  }

  function checkForEnd() {
    playerScore = calculateScore(playerHand);
    if (playerScore > 21) {
      showMessage("You busted! Dealer wins.");
      endGame();
      return true;
    }
    return false;
  }

  hitButton.addEventListener("click", () => {
    playerHand.push(deck.pop());
    renderHands();
    if (checkForEnd()) {
      endGame();
    }
  });

  standButton.addEventListener("click", () => {
    dealerTurn();
    playerScore = calculateScore(playerHand);
    dealerScore = calculateScore(dealerHand);
    if (dealerScore > 21 || playerScore > dealerScore) {
      showMessage("You Win!");
    } else if (dealerScore === playerScore) {
      showMessage("It's a Draw");
    } else {
      showMessage("Dealer Win!");
    }
    endGame();
  });

  restartButton.addEventListener("click", () => {
    startGame();
  });

  function startGame() {
    createDeck();
    shuffleDeck();
    playerHand = [deck.pop(), deck.pop()];
    dealerHand = [deck.pop(), deck.pop()];
    isGameOver = false;
    messageBoard.innerHTML = "";
    hitButton.style.display = "inline-block";
    standButton.style.display = "inline-block";
    restartButton.style.display = "none";
    renderHands();
  }

  startGame();
});
