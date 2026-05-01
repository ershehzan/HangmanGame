const wordCategories = {
    "Movies": ["INCEPTION", "INTERSTELLAR", "JURASSIC PARK", "PULP FICTION", "THE GODFATHER", "BLADE RUNNER", "TITANIC", "AVATAR", "CASABLANCA", "PSYCHO"],
    "Sci-Fi": ["ANDROID", "DYSTOPIAN", "CYBORG", "EXTRATERRESTRIAL", "TELEPORT", "CYBERSPACE", "NANOTECHNOLOGY", "GALACTIC", "SINGULARITY", "SPACESHIP"],
    "Gaming": ["CONTROLLER", "JOYSTICK", "MULTIPLAYER", "QUEST", "LEVEL", "STRATEGY", "CONSOLE", "CHARACTER", "HIGHSCORE", "SIMULATION"],
    "Technology": ["HARDWARE", "ALGORITHM", "DATABASE", "ENCRYPTION", "NETWORK", "PROCESSOR", "SOFTWARE", "KEYBOARD", "INTERFACE", "BANDWIDTH"],
    "Nature": ["ECOSYSTEM", "ARCHIPELAGO", "GLACIER", "PENINSULA", "BUTTERFLY", "VOLCANO", "MOUNTAIN", "SUNFLOWER", "HORIZON", "WATERFALL"]
};

const categoryIcons = {
    "Movies": "movie",
    "Sci-Fi": "rocket_launch",
    "Gaming": "sports_esports",
    "Technology": "memory",
    "Nature": "forest"
};

const categoryColors = {
    "Movies": "text-secondary",
    "Sci-Fi": "text-primary",
    "Gaming": "text-tertiary",
    "Technology": "text-secondary",
    "Nature": "text-tertiary"
};

let selectedCategory = "";
let selectedWord = "";
let guessedLetters = [];
let mistakes = 0;
let streak = 0;
const maxMistakes = 6;

const selectionScreen = document.getElementById('selection-screen');
const gameScreen = document.getElementById('game-screen');
const categoryList = document.getElementById('category-list');
const wordDisplay = document.getElementById('word-display');
const keyboard = document.getElementById('keyboard');
const attemptsDisplay = document.getElementById('attempts');
const gameCategoryDisplay = document.getElementById('game-category');
const streakDisplay = document.getElementById('streak-display');
const modalOverlay = document.getElementById('modal-overlay');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const secretWordDisplay = document.getElementById('secret-word-display');
const playAgainBtn = document.getElementById('play-again-btn');
const resetBtn = document.getElementById('reset-game');

const bodyParts = ['head', 'body', 'left-arm', 'right-arm', 'left-leg', 'right-leg'];

function initCategorySelection() {
    categoryList.innerHTML = '';
    Object.keys(wordCategories).forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'glass-panel category-glow w-full flex items-center justify-between p-5 rounded-lg group transition-all duration-300';
        btn.innerHTML = `
            <div class="flex items-center gap-4">
                <div class="w-10 h-10 flex items-center justify-center rounded bg-surface-container-high border border-white/5 ${categoryColors[cat]}">
                    <span class="material-symbols-outlined">${categoryIcons[cat]}</span>
                </div>
                <span class="font-headline-md text-headline-md text-white group-hover:text-primary transition-colors">${cat}</span>
            </div>
            <span class="material-symbols-outlined text-outline group-hover:text-primary">chevron_right</span>
        `;
        btn.addEventListener('click', () => startGame(cat));
        categoryList.appendChild(btn);
    });
}

function startGame(category) {
    selectedCategory = category;
    const words = wordCategories[category];
    selectedWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
    guessedLetters = [];
    mistakes = 0;

    // Transition Screens
    selectionScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');

    // Update UI
    gameCategoryDisplay.innerText = category.toUpperCase();
    attemptsDisplay.innerText = maxMistakes;
    wordDisplay.innerHTML = '';
    keyboard.innerHTML = '';
    modalOverlay.style.opacity = '0';
    modalOverlay.style.pointerEvents = 'none';
    modalOverlay.classList.remove('opacity-100');
    
    // Reset Hangman
    bodyParts.forEach(part => {
        document.getElementById(part).classList.remove('visible');
    });

    // Create Word Slots
    selectedWord.split('').forEach(char => {
        const slot = document.createElement('div');
        slot.classList.add('letter-slot');
        if (char === ' ') {
            slot.classList.add('border-none');
            slot.innerHTML = '&nbsp;';
            guessedLetters.push(' ');
        }
        wordDisplay.appendChild(slot);
    });

    // Create Keyboard
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    alphabet.split('').forEach(letter => {
        const key = document.createElement('button');
        key.innerText = letter;
        key.classList.add('key');
        key.setAttribute('id', `key-${letter}`);
        key.addEventListener('click', () => handleGuess(letter));
        keyboard.appendChild(key);
    });

    window.addEventListener('keydown', handlePhysicalKeyPress);
}

function handlePhysicalKeyPress(e) {
    const letter = e.key.toUpperCase();
    if (letter >= 'A' && letter <= 'Z' && !gameScreen.classList.contains('hidden')) {
        handleGuess(letter);
    }
}

function handleGuess(letter) {
    if (guessedLetters.includes(letter) || mistakes >= maxMistakes) return;

    guessedLetters.push(letter);
    const key = document.getElementById(`key-${letter}`);
    
    if (selectedWord.includes(letter)) {
        key.classList.add('correct', 'disabled');
        updateWordDisplay();
        checkWin();
    } else {
        key.classList.add('wrong', 'disabled');
        mistakes++;
        updateHangman();
        attemptsDisplay.innerText = maxMistakes - mistakes;
        
        document.getElementById('game-screen').classList.add('shake');
        setTimeout(() => document.getElementById('game-screen').classList.remove('shake'), 500);

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
    if (isWin) {
        streak++;
    } else {
        streak = 0;
    }
    streakDisplay.innerText = `${streak} WINS`;

    modalOverlay.style.opacity = '1';
    modalOverlay.style.pointerEvents = 'auto';
    modalOverlay.classList.add('opacity-100');
    
    modalTitle.innerText = isWin ? 'VICTORY' : 'MISSION FAILED';
    modalTitle.className = isWin ? 
        'font-display-xl text-4xl mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-violet-300' : 
        'font-display-xl text-4xl mb-4 bg-clip-text text-transparent bg-gradient-to-b from-error to-red-400';
    
    secretWordDisplay.innerText = selectedWord;
    playAgainBtn.innerText = isWin ? 'CONTINUE MISSION' : 'RETRY INFILTRATION';
    
    window.removeEventListener('keydown', handlePhysicalKeyPress);
}

playAgainBtn.addEventListener('click', () => {
    modalOverlay.style.opacity = '0';
    modalOverlay.style.pointerEvents = 'none';
    selectionScreen.classList.remove('hidden');
    gameScreen.classList.add('hidden');
});

resetBtn.addEventListener('click', () => {
    selectionScreen.classList.remove('hidden');
    gameScreen.classList.add('hidden');
    modalOverlay.style.opacity = '0';
    modalOverlay.style.pointerEvents = 'none';
});

// Initialize on load
window.onload = initCategorySelection;
