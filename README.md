# 🎯 Hangman Elite - Premium Word Guessing Experience

## 🕹️ Overview

**Hangman Elite** is a high-fidelity, categorized word-guessing game. Originally born as a C++ console application, it has been evolved into a **Stunning Modern Web Experience** featuring premium aesthetics, interactive themes, and a futuristic "Data Infiltration" narrative.

The player chooses a theme and attempts to decrypt the sequence (guess the word) within a limited number of attempts before the system lockdown (hangman completion).

---

## ✨ Features

### 🎨 High-Fidelity UI/UX
*   **Futuristic Design**: A sleek dark mode interface utilizing **Glassmorphism**, vibrant gradients, and **Space Grotesk** typography.
*   **Dynamic SVG Visuals**: A progressive line-art hangman system that reacts in real-time to mistakes with a high-visibility white stroke.
*   **Interactive Themes**: 5 unique categories with custom icons and color schemes:
    *   🎬 **Movies**
    *   🚀 **Sci-Fi**
    *   🎮 **Gaming**
    *   💻 **Technology**
    *   🌲 **Nature**
*   **Responsive Performance**: Fully optimized for mobile, tablet, and desktop with a focus on micro-animations and smooth transitions.

### 🧠 Advanced Gameplay Logic
*   **Streak Tracker**: Keep your win streak alive and monitor your performance across multiple sessions.
*   **Dual-Input Support**: Use the on-screen futuristic keyboard or your physical keyboard for rapid guessing.
*   **System Feedback**: Visual "shake" animations for incorrect guesses and immersive win/loss modals.
*   **Instant Reset**: Quick "Quit Mission" and "Retry" options for seamless play.

---

## 🏗️ Project Structure

```bash
📂 HangmanGame/
 ├── index.html        # Core structure, SEO, and Premium Design System
 ├── script.js         # Category Logic, Word Data, and Game Engine
 ├── H.M.Game.cpp      # Classic C++ implementation (Console)
 ├── hangmanc.cpp      # Alternative C++ implementation
 └── README.md         # Documentation
```

---

## 🚀 How to Run

### 🌐 Web Version (Recommended)
Simply open **`index.html`** in any modern web browser. 
*No installation, local server, or compilation required.*

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

*   **Frontend Engine**: HTML5, ES6+ Javascript
*   **Styling**: Tailwind CSS (JIT Engine), Vanilla CSS
*   **Aesthetics**: Glassmorphism, SVG Animation, Google Fonts (Space Grotesk, Inter)
*   **Core Logic**: C++11 (Console versions)

---

## 👨‍💻 Author

**Shehzan Khan**
💻 *Aspiring Software Developer | Web Enthusiast | C++ Developer*
📫 [GitHub](https://github.com/ershehzan) | [LinkedIn](https://www.linkedin.com/in/shehzankhan/)

---

## 🌟 Project Evolution (Roadmap)

- [x] Create a stunning graphical web version
- [x] Implement multiple themed categories
- [x] Add win streak tracking
- [ ] Add difficulty levels (Short vs. Long words)
- [ ] Implement global leaderboard using Firebase or Supabase
- [ ] Add immersive sound effects and background music

---

## 🪄 License

This project is open-source and available under the **MIT License**.
