import '../styles/styles.scss'
import {multiBackspace, randomInt, playAgain} from './backspace.ts' 
import {attemptHandler, captureInputHandler} from './utils.ts'
import data from './../words.json'

let currentRow = 1

let letter1 = document.querySelector<HTMLInputElement>('#b1-1')
let letter2 = document.querySelector<HTMLInputElement>('#b1-2')
let letter3 = document.querySelector<HTMLInputElement>('#b1-3')
let letter4 = document.querySelector<HTMLInputElement>('#b1-4')
let letter5 = document.querySelector<HTMLInputElement>('#b1-5')
let tryButton1 = document.querySelector<HTMLButtonElement>('#bb1')
let tryButton2 = document.querySelector<HTMLButtonElement>('#bb2')
let tryButton3 = document.querySelector<HTMLButtonElement>('#bb3')
let tryButton4 = document.querySelector<HTMLButtonElement>('#bb4')
let tryButton5 = document.querySelector<HTMLButtonElement>('#bb5')
let tryButton6 = document.querySelector<HTMLButtonElement>('#bb6')

const buttons = [tryButton1, tryButton2, tryButton3, tryButton4, tryButton5, tryButton6]

const wordArr = [letter1, letter2, letter3, letter4, letter5]

const wordList = data.wordBank

let mystery = wordList[randomInt(wordList.length)].toUpperCase()

if (!letter1 || !letter2 || !letter3 || !letter4 || !letter5){
  throw new Error('I am trying to avoid null???');
}

if(!tryButton1 || !tryButton2 || !tryButton3 || !tryButton4 || !tryButton5){
  throw new Error('I am trying to avoid null???');
  }

var doInput1 = (event: Event) => captureInputHandler(event, wordArr, buttons, currentRow, 0)
var doInput2 = (event: Event) => captureInputHandler(event, wordArr, buttons, currentRow, 1)
var doInput3 = (event: Event) => captureInputHandler(event, wordArr, buttons, currentRow, 2)
var doInput4 = (event: Event) => captureInputHandler(event, wordArr, buttons, currentRow, 3)
var doInput5 = (event: Event) => captureInputHandler(event, wordArr, buttons, currentRow, 4)



wordArr[0]?.addEventListener('input', doInput1)
wordArr[1]?.addEventListener('input', doInput2)
wordArr[2]?.addEventListener('input', doInput3)
wordArr[3]?.addEventListener('input', doInput4)
wordArr[4]?.addEventListener('input', doInput5)

multiBackspace(wordArr, buttons, currentRow, 0)

var doAttempt1 = (event: Event) => attemptHandler(event, wordArr, buttons, mystery, currentRow)
var doAttempt2 = (event: Event) => attemptHandler(event, wordArr, buttons, mystery, currentRow+1)
var doAttempt3 = (event: Event) => attemptHandler(event, wordArr, buttons, mystery, currentRow+2)
var doAttempt4 = (event: Event) => attemptHandler(event, wordArr, buttons, mystery, currentRow+3)
var doAttempt5 = (event: Event) => attemptHandler(event, wordArr, buttons, mystery, currentRow+4)
var doAttempt6 = (event: Event) => attemptHandler(event, wordArr, buttons, mystery, currentRow+5)

buttons[currentRow-1]?.addEventListener('click', doAttempt1)
buttons[currentRow]?.addEventListener('click', doAttempt2)
buttons[currentRow+1]?.addEventListener('click', doAttempt3)
buttons[currentRow+2]?.addEventListener('click', doAttempt4)
buttons[currentRow+3]?.addEventListener('click', doAttempt5)
buttons[currentRow+4]?.addEventListener('click', doAttempt6)


playAgain(wordArr, buttons, mystery)



