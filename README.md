# PiraVVordle Project Breakdown

- Create a clone of the 'wordle' game.
- Connect to an english dictionary API to select a random 5 letter word to be the mystery word.
- Take typed input from user as an attempt, but the attempt must be an English word, so we must check if the input exists in the english dictionary API.
- Take 5 attempts to guess the mystery word.
- After each guess respond with colours to show whether the letters used are in the correct position or at least included in the mystery word.


## HTML / SCSS

- The input boxes should be in the center of the screen.
    - 1 large input box or 5 small input boxes??
- The colours response should appear directly beneath each guess.


## TypeScript Logic

- eventListeners will need to maybe look out for clicks or enter key?

- A function that selects a random 5 letter word from the dictionary API.

- We need a function that takes the user input and only accepts it if it exists in the English dictionary.

- Then a function the compare against the mystery word and provide feedback with colors.

- Success/failure messages.
