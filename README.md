# 🎯 Hangman Game in C++

## 🕹️ Overview

**Hangman Game** is a fun, console-based word-guessing game written in **C++**.
The player tries to guess a randomly selected **fruit name** within a limited number of attempts before the hangman is fully drawn.

This project showcases **object-oriented programming (OOP)** concepts, **string handling**, **randomization**, and **ASCII art visualization**.

---

## ⚙️ Features

✅ Random fruit selection from a predefined list
✅ Tracks all guessed letters
✅ Displays the hangman as you lose attempts
✅ Prevents duplicate guesses
✅ Simple, beginner-friendly, and written in pure C++

---

## 🧩 How to Play

1. Run the program.
2. The game randomly selects a **fruit name** and hides it with underscores (`_`).
3. Guess one letter at a time.
4. Each wrong guess decreases your remaining attempts and adds a part to the hangman.
5. You win if you guess all letters before the hangman is complete!

---

## 💻 Example Gameplay

```
Welcome to Hangman!
Category: Fruits
You have 6 attempts to guess the fruit name.
Word: _____
Attempts left: 6
Guessed letters:
Guess a letter: a
Good guess!
Word: a___a
Attempts left: 6
Guessed letters: a
Guess a letter: p
Incorrect guess.
 _____
 |
 O
Word: a___a
Attempts left: 5
Guessed letters: a p
...
```

---

## 🧠 Concepts Used

* **Object-Oriented Programming (OOP)**

  * Class-based structure for better code organization
* **STL (Standard Template Library)**

  * `vector`, `string`, `algorithm`
* **Randomization**

  * `rand()` and `srand()` for word selection
* **Character Validation**

  * `isalpha()` and `tolower()`
* **Control Flow**

  * Loops and conditionals for game logic

---

## 🏗️ Project Structure

```
📂 Hangman-Game/
 ├── hangman.cpp       # Main game source code
 ├── README.md         # Project documentation
```

---

## 🚀 How to Run

### 💻 Using g++

```bash
g++ hangman.cpp -o hangman
./hangman
```

### 🪟 Using Visual Studio Code

1. Open the project folder in **VS Code**
2. Install the **C/C++ extension**
3. Press **Ctrl + Shift + B** to build and **F5** to run

---

## 🧰 Requirements

* C++11 or higher
* A C++ compiler (g++, clang, or MSVC)

---

## 👨‍💻 Author

**Shehzan Khan**
💻 *Aspiring Software Developer | C++ Enthusiast | Problem Solver*
📫 [GitHub]([https://github.com/yourusername](https://github.com/ershehzan)) | [LinkedIn]([https://linkedin.com/in/yourprofile](https://www.linkedin.com/in/shehzankhan/))

---

## 🌟 Future Enhancements

* Add difficulty levels (Easy / Medium / Hard)
* Include multiple categories (Fruits, Animals, Countries, etc.)
* Implement score tracking
* Create a graphical version using SFML or SDL

---

## 🪄 License

This project is open-source and available under the **MIT License**.
