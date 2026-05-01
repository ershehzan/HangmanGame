# 🎯 Hangman Elite - Modern Web UI & Classic C++

## 🕹️ Overview

**Hangman Elite** is a premium, full-featured word-guessing game. Originally built as a robust console application in **C++**, it has now been evolved into a stunning **Modern Web Experience** with high-fidelity graphics and smooth animations.

The player tries to guess a randomly selected **fruit name** within a limited number of attempts before the hangman is fully drawn.

---

## ✨ New: Hangman Elite Web UI

Experience the game in a beautiful, modern interface featuring:

*   **Premium Aesthetics**: Sleek dark mode with deep gradients and frosted-glass (glassmorphism) containers.
*   **Dynamic SVG Hangman**: A progressive line-art gallows that draws itself as mistakes are made.
*   **Dual-Input Support**: Full support for both on-screen virtual keyboard and physical keyboard input.
*   **Fluid Animations**: Smooth CSS transitions, feedback vibrations for mistakes, and "pop" animations for correct guesses.
*   **Responsive Design**: Fully optimized for mobile, tablet, and desktop screens.

---

## ⚙️ Features (Both Versions)

✅ Random fruit selection from a comprehensive list of 40+ words.
✅ Real-time tracking of all guessed letters.
✅ Visual hangman progress (ASCII for C++, SVG for Web).
✅ Prevents duplicate guesses with visual feedback.
✅ Instant replay functionality.

---

## 🏗️ Project Structure

```bash
📂 HangmanGame/
 ├── index.html        # Web UI structure & SEO
 ├── style.css         # Premium CSS design system
 ├── script.js         # ES6 Game logic & Animations
 ├── H.M.Game.cpp      # Classic C++ implementation
 ├── hangmanc.cpp      # Alternative C++ implementation
 └── README.md         # Documentation
```

---

## 🚀 How to Run

### 🌐 Web Version (Recommended)
Simply open **`index.html`** in any modern web browser (Chrome, Firefox, Edge, Safari). No installation or compilation required!

### 💻 Classic C++ Version
1. Compile using `g++`:
   ```bash
   g++ H.M.Game.cpp -o hangman
   ```
2. Run the executable:
   ```bash
   ./hangman
   ```

---

## 🛠️ Technology Stack

*   **Frontend**: HTML5, CSS3 (Vanilla), ES6 Javascript
*   **Design**: Glassmorphism, CSS Flexbox/Grid, SVG Line Art
*   **Backend (Classic)**: C++11, STL (Vector, String, Algorithm)

---

## 👨‍💻 Author

**Shehzan Khan**
💻 *Aspiring Software Developer | Web Enthusiast | C++ Developer*
📫 [GitHub](https://github.com/ershehzan) | [LinkedIn](https://www.linkedin.com/in/shehzankhan/)

---

## 🌟 Future Enhancements (Roadmap)

- [x] Create a stunning graphical web version
- [ ] Add multiple difficulty levels
- [ ] Include additional categories (Animals, Countries)
- [ ] Implement global score tracking using LocalStorage

---

## 🪄 License

This project is open-source and available under the **MIT License**.
