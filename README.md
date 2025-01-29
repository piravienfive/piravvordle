# PiraVVordle Project Breakdown

- Create a clone of the 'wordle' game.
- Connect to an english dictionary API to select a random 5 letter word to be the mystery word.
- Take typed input from user as an attempt, but the attempt must be an English word, so we must check if the input exists in the english dictionary API.
- Take 6 attempts to guess the mystery word.
- After each guess respond with colours to show whether the letters used are in the correct position or at least included in the mystery word.


## HTML / SCSS

- The input boxes should be in the center of the screen.
- Upon guessing the inpt box should change colour to give feedback as to whether the inputt letter is in the mystery word or not.
- Pop up screens upon finishing the round, either win or loss screen with an option to play again.


## TypeScript Logic

- Event listeners on all input boxes and try buttons.
- A function that selects a random 5 letter word from the word array provided in the json file.
- We need a function that takes the user input and only accepts it if it exists in the English dictionary.
- Then a function the compare against the mystery word and provide feedback with colors.
- Success/failure messages.
