# Blackjack Game

Live demo: https://tb0515.github.io/Black-Jack-Game/

## Overview

The Blackjack Game is a simple web-based implementation of the classic card game Blackjack. The game allows players to compete against a dealer, aiming to get a hand value as close to 21 as possible without exceeding it. The game features a user-friendly interface and follows the standard rules of Blackjack.

## Features

- Deal, Hit, Stand, Restart
- Dealer follows standard rule (hit until 17)
- Aces count as 1 or 11

## How to Play

1. **Start the Game**: Click the "Restart" button to begin a new game. The player and dealer will each be dealt two cards.
2. **Hit**: Click the "Hit" button to receive another card. You can continue to hit until you choose to stand or exceed a total of 21.
3. **Stand**: Click the "Stand" button to end your turn. The dealer will then play according to the rules (drawing cards until reaching a score of 17 or higher).
4. **Game Outcome**: The game will display a message indicating whether you win, lose, or draw based on the final scores.
5. **Restart**: Click the "Restart" button to play again.

## Files

- **index.html**: The main HTML document that sets up the structure of the game interface, including sections for the dealer's hand, player's hand, buttons for game actions, and a message display area.
- **app.js**: Contains the JavaScript code that implements the game logic. It handles the creation and shuffling of the deck, dealing cards, calculating scores, rendering hands, and managing game states (hit, stand, restart).

- **styles.css**: Defines the visual appearance of the game elements, including layout, colors, fonts, and button styles.

- **README.md**: This documentation file provides an overview of the game, instructions on how to play, and details on how to set up and run the project.

## Setup and Running the Project

1. Clone the repository or download the project files.
2. Open the `index.html` file in a web browser to play the game.
3. Ensure that all files (`index.html`, `app.js`, and `styles.css`) are in the same directory for proper functionality.

## License

This project is open-source and available for anyone to use and modify. Enjoy playing Blackjack!
