const words = [
    "apple", "banana", "mango", "orange", "papaya",
    "pineapple", "watermelon", "grapes", "strawberry",
    "blueberry", "raspberry", "cherry", "kiwi",
    "pomegranate", "guava", "peach", "pear", "plum",
    "lychee", "coconut", "lemon", "lime", "fig",
    "apricot", "dragonfruit", "starfruit",
    "passionfruit", "blackcurrant", "gooseberry",
    "mulberry", "custardapple", "jackfruit", "dates",
    "cranberry", "avocado", "persimmon", "tamarind",
    "cantaloupe", "honeydew", "sapodilla", "rambutan",
    "durian", "elderberry", "mangosteen", "bael",
    "acerola", "longan", "loquat", "breadfruit"
];

let selectedWord = "";
let guessedLetters = [];
let mistakes = 0;
const maxMistakes = 6;

const wordDisplay = document.getElementById('word-display');
const keyboard = document.getElementById('keyboard');
const attemptsDisplay = document.getElementById('attempts');
const modalOverlay = document.getElementById('modal-overlay');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const secretWordDisplay = document.getElementById('secret-word-display');
const playAgainBtn = document.getElementById('play-again-btn');
const gameContainer = document.getElementById('game-container');

// Hangman body parts in order
const bodyParts = ['head', 'body', 'left-arm', 'right-arm', 'left-leg', 'right-leg'];

function initGame() {
    selectedWord = words[Math.floor(Math.random() * words.length)].toLowerCase();
    guessedLetters = [];
    mistakes = 0;
    
    // Reset UI
    attemptsDisplay.innerText = maxMistakes;
    wordDisplay.innerHTML = '';
    keyboard.innerHTML = '';
    modalOverlay.classList.remove('active');
    modal.classList.remove('win', 'loss');
    
    // Reset Hangman SVG
    bodyParts.forEach(part => {
        document.getElementById(part).classList.remove('visible');
    });

    // Create word slots
    for (let i = 0; i < selectedWord.length; i++) {
        const slot = document.createElement('div');
        slot.classList.add('letter-slot');
        wordDisplay.appendChild(slot);
    }

    // Create Keyboard
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    alphabet.split('').forEach(letter => {
        const key = document.createElement('button');
        key.innerText = letter;
        key.classList.add('key');
        key.setAttribute('id', `key-${letter}`);
        key.addEventListener('click', () => handleGuess(letter));
        keyboard.appendChild(key);
    });

    // Handle physical keyboard
    window.addEventListener('keydown', handlePhysicalKeyPress);
}

function handlePhysicalKeyPress(e) {
    const letter = e.key.toLowerCase();
    if (letter >= 'a' && letter <= 'z' && !modalOverlay.classList.contains('active')) {
        handleGuess(letter);
    }
}

function handleGuess(letter) {
    if (guessedLetters.includes(letter) || mistakes >= maxMistakes) return;

    guessedLetters.push(letter);
    const key = document.getElementById(`key-${letter}`);
    
    if (selectedWord.includes(letter)) {
        // Correct Guess
        key.classList.add('correct', 'disabled');
        updateWordDisplay(letter);
        checkWin();
    } else {
        // Wrong Guess
        key.classList.add('wrong', 'disabled');
        mistakes++;
        updateHangman();
        attemptsDisplay.innerText = maxMistakes - mistakes;
        
        // Shake effect
        gameContainer.classList.add('shake');
        setTimeout(() => gameContainer.classList.remove('shake'), 500);

        if (mistakes === maxMistakes) {
            gameOver(false);
        }
    }
}

function updateWordDisplay() {
    const slots = document.querySelectorAll('.letter-slot');
    selectedWord.split('').forEach((letter, index) => {
        if (guessedLetters.includes(letter)) {
            slots[index].innerText = letter;
            slots[index].classList.add('revealed');
        }
    });
}

function updateHangman() {
    const partIndex = mistakes - 1;
    if (partIndex >= 0 && partIndex < bodyParts.length) {
        document.getElementById(bodyParts[partIndex]).classList.add('visible');
    }
}

function checkWin() {
    const isWin = selectedWord.split('').every(letter => guessedLetters.includes(letter));
    if (isWin) {
        gameOver(true);
    }
}

function gameOver(isWin) {
    modalOverlay.classList.add('active');
    modal.classList.add(isWin ? 'win' : 'loss');
    modalTitle.innerText = isWin ? 'Victory!' : 'Game Over';
    secretWordDisplay.innerText = selectedWord;
    
    // Remove event listener to prevent further input
    window.removeEventListener('keydown', handlePhysicalKeyPress);
}

playAgainBtn.addEventListener('click', initGame);

// Start game on load
window.onload = initGame;
