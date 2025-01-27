import '../styles/styles.scss'
import data from './../words.json'
import { attemptHandler, captureInputHandler } from './utils'


const wordList = data.wordBank

let mysteryWord: string = wordList[randomInt(wordList.length)].toUpperCase()

export function backspace(arr: Array<any>, bttnArr: Array<any>, currentRow: number, n: number, p: number = n - 1 ) {
    arr[n]?.addEventListener('keydown', (pressed: any) => {
        if(pressed.key === 'Backspace' && arr[n]?.value == ''){
        arr[p]?.focus()
        }
    })
    arr[n]?.addEventListener('keydown', (pressed: any) => {
        if(pressed.key === 'Backspace' && arr[n]?.value == ''){
        arr[p]?.focus()
        }
    })

    bttnArr[currentRow-1]?.addEventListener('keydown', (pressed: any) => {
        if(pressed.key === 'Backspace'){
        arr[n]?.focus()
        }})
}

export function multiBackspace(arr: Array<any>, bttnArr: Array<any>, currentRow: number, n: number){
    backspace(arr, bttnArr, currentRow, n, 0)
    backspace(arr, bttnArr, currentRow, n + 1)
    backspace(arr, bttnArr, currentRow, n + 2)
    backspace(arr, bttnArr, currentRow, n + 3)
    backspace(arr, bttnArr, currentRow, n + 4)
}



export function captureInput(arr: Array<any>, bttnArr: Array<any>, currentRow: number, n: number, p=n+1){

    var doInput1 = (event: Event) => captureInputHandler(event, arr, bttnArr, currentRow, 0)
    var doInput2 = (event: Event) => captureInputHandler(event, arr, bttnArr, currentRow, 1)
    var doInput3 = (event: Event) => captureInputHandler(event, arr, bttnArr, currentRow, 2)
    var doInput4 = (event: Event) => captureInputHandler(event, arr, bttnArr, currentRow, 3)
    var doInput5 = (event: Event) => captureInputHandler(event, arr, bttnArr, currentRow, 4)


    arr[0]?.addEventListener('input', doInput1)
    arr[1]?.addEventListener('input', doInput2)
    arr[2]?.addEventListener('input', doInput3)
    arr[3]?.addEventListener('input', doInput4)
    arr[4]?.addEventListener('input', doInput5)

}

export function multiCaptureInput(arr: Array<any>, bttnArr: Array<any>, currentRow: number, n: number){
    captureInput(arr, bttnArr, currentRow, 0)
    captureInput(arr, bttnArr, currentRow, 1)
    captureInput(arr, bttnArr, currentRow, 2)
    captureInput(arr, bttnArr, currentRow, 3)
    captureInput(arr, bttnArr, currentRow, 4)

}


export function randomInt(max: number){
    return Math.floor(Math.random() * max)
}


export function attempt(arr: Array<any>, bttnArr: Array<any>, word: string, currentRow: number){


    mysteryWord = wordList[randomInt(wordList.length)].toUpperCase()
    
    var doAttempt1 = (event: Event) => attemptHandler(event, arr, bttnArr, word, currentRow)
    var doAttempt2 = (event: Event) => attemptHandler(event, arr, bttnArr, word, currentRow+1)
    var doAttempt3 = (event: Event) => attemptHandler(event, arr, bttnArr, word, currentRow+2)
    var doAttempt4 = (event: Event) => attemptHandler(event, arr, bttnArr, word, currentRow+3)
    var doAttempt5 = (event: Event) => attemptHandler(event, arr, bttnArr, word, currentRow+4)
    var doAttempt6 = (event: Event) => attemptHandler(event, arr, bttnArr, word, currentRow+5)
    
    bttnArr[currentRow-1]?.addEventListener('click', doAttempt1, true)
    bttnArr[currentRow]?.addEventListener('click', doAttempt2, true)
    bttnArr[currentRow+1]?.addEventListener('click', doAttempt3, true)
    bttnArr[currentRow+2]?.addEventListener('click', doAttempt4, true)
    bttnArr[currentRow+3]?.addEventListener('click', doAttempt5, true)
    bttnArr[currentRow+4]?.addEventListener('click', doAttempt6, true)
}


export function allAttempts(arr: Array<any>, bttnArr: Array<any>, word: string){
    attempt(arr, bttnArr, word, 1)
    attempt(arr, bttnArr, word, 2)
    attempt(arr, bttnArr, word, 3)
    attempt(arr, bttnArr, word, 4)
    attempt(arr, bttnArr, word, 5)
    attempt(arr, bttnArr, word, 6)
}


export function playAgain (arr: Array<any>, bttnArr: Array<any>, word: string, options : string[] = wordList) {
    let playAgainButton = document.querySelectorAll<HTMLButtonElement>('#playAgainBttn')
    for(let i = 0; i < playAgainButton.length; i++){
    playAgainButton[i]?.addEventListener('click', () => {

        console.log(arr, 'yooo')

        let allBoxes = document.querySelectorAll<HTMLInputElement>('.inputBox')
        console.log(allBoxes)
        
        for(let i = 0; i < allBoxes.length; i++){
            allBoxes[i].value = ''
            allBoxes[i].style.backgroundColor = 'white'
            allBoxes[i].disabled = true
        }

        allBoxes[0].disabled = false
        allBoxes[1].disabled = false
        allBoxes[2].disabled = false
        allBoxes[3].disabled = false
        allBoxes[4].disabled = false
        allBoxes[0].focus()



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

        bttnArr = [tryButton1, tryButton2, tryButton3, tryButton4, tryButton5, tryButton6]

        arr = [letter1, letter2, letter3, letter4, letter5]

        console.log(arr, 'excuse me')
        for(let i = 0; i < bttnArr.length; i++){
            if(!bttnArr[i]){
                throw new Error('I am trying to avoid null???')
            }
            bttnArr[i].disabled = true
        }
    
        let winPopup = document.querySelector<HTMLDivElement>('.winPop')
        let lossPopup = document.querySelector<HTMLDivElement>('.lossPop')

        if(!winPopup || !lossPopup){
            throw new Error('I am trying to avoid null???');
        }

        lossPopup.style.display = 'none'
        winPopup.style.display = 'none'

        let currentRow = 1
        word = options[randomInt(options.length)].toUpperCase()

        multiCaptureInput(arr, bttnArr, currentRow, 0)
        multiBackspace(arr, bttnArr, currentRow, 0)
        attempt(arr, bttnArr, word, currentRow)
      })}
}