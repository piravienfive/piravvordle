import '../styles/styles.scss'
import {multiBackspace, captureInput, multiCaptureInput} from './backspace.ts' 


// let boxes = {
//   1 : [letter]
//   2
// }

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

const mystery = 'HILLS'

const wordArr = [letter1, letter2, letter3, letter4, letter5]

if (!letter1 || !letter2 || !letter3 || !letter4 || !letter5){
  throw new Error('I am trying to avoid null???');
}

//handler listener

multiCaptureInput(wordArr, buttons, currentRow, 0)

// captureInput(wordArr, buttons, currentRow, 0)
// captureInput(wordArr, buttons, currentRow, 1)
// captureInput(wordArr, buttons, currentRow, 2)
// captureInput(wordArr, buttons, currentRow, 3)
// captureInput(wordArr, buttons, currentRow, 4)

// function handler1 (event: Event) {
//   let target = event.target as HTMLInputElement
//   let currentValue: string = target.value
//   if (wordArr[0]) {wordArr[0].innerText = currentValue.toUpperCase()
//     wordArr[1]?.focus()
//     console.log(wordArr[0].textContent)
//   }
//   if(wordArr[0]?.textContent == ''){
//     wordArr[0]?.focus()
//   }

//   if(wordArr[0]?.textContent && wordArr[1]?.textContent  && wordArr[2]?.textContent  && wordArr[3]?.textContent  && wordArr[4]?.textContent){
//     buttons[currentRow-1].disabled = false}
//   else{
//     buttons[currentRow-1].disabled = true
//   }
// }
// function handler2 (event: Event) {
//   let target = event.target as HTMLInputElement
//   let currentValue: string = target.value
//   if (wordArr[1]) { wordArr[1].innerText = currentValue.toUpperCase()
//     wordArr[2]?.focus()
//     console.log(wordArr[1].textContent)}
//   if(wordArr[1]?.textContent == ''){
//       wordArr[1]?.focus()
//     }
//   if(wordArr[0]?.textContent && wordArr[1]?.textContent  && wordArr[2]?.textContent  && wordArr[3]?.textContent  && wordArr[4]?.textContent){
//     buttons[currentRow-1].disabled = false}
//   else{
//     buttons[currentRow-1].disabled = true
//   }
// }
// function handler3 (event: Event) {
//   const target = event.target as HTMLInputElement
//   const currentValue: string = target.value
//   if (wordArr[2]) { wordArr[2].innerText = currentValue.toUpperCase()
//     wordArr[3]?.focus()
//     console.log(wordArr[2].textContent)}
//   if(wordArr[2]?.textContent == ''){
//       wordArr[2]?.focus()
//     }
//   if(wordArr[0]?.textContent && wordArr[1]?.textContent  && wordArr[2]?.textContent  && wordArr[3]?.textContent  && wordArr[4]?.textContent){
//     buttons[currentRow-1].disabled = false}
//   else{
//     buttons[currentRow-1].disabled = true
//   }
// }
// function handler4 (event: Event) {
//   const target = event.target as HTMLInputElement
//   const currentValue: string = target.value
//   if (wordArr[3]) {wordArr[3].innerText = currentValue.toUpperCase()
//     wordArr[4]?.focus()
//     console.log(wordArr[3].textContent)}
//   if(wordArr[3]?.textContent == ''){
//       wordArr[3]?.focus()
//     }
//   if(wordArr[0]?.textContent && wordArr[1]?.textContent  && wordArr[2]?.textContent  && wordArr[3]?.textContent  && wordArr[4]?.textContent){
//       buttons[currentRow-1].disabled = false}
//     else{
//       buttons[currentRow-1].disabled = true
//     }
// }
// function handler5 (event: Event) {
//   const target = event.target as HTMLInputElement
//   const currentValue: string = target.value
//   if (wordArr[4]) {wordArr[4].innerText = currentValue.toUpperCase()
//     console.log(wordArr[4].textContent)
//     buttons[currentRow-1]?.focus()}

//   if(wordArr[4]?.textContent == ''){
//       wordArr[4]?.focus()
//     }

//   if(wordArr[0]?.textContent && wordArr[1]?.textContent  && wordArr[2]?.textContent  && wordArr[3]?.textContent  && wordArr[4]?.textContent){
//     buttons[currentRow-1].disabled = false
//     buttons[currentRow-1]?.focus()
//   }
//   else{
//     buttons[currentRow-1].disabled = true
//   }
// }


// function backKey (event: Event){
//   const target = event.target as HTMLInputElement
//   const currentValue: string = target.value
//   if(wordArr[4]) {wordArr[4].k === }
//     wordArr[3]?.focus()
//   }
// }

// wordArr[0]?.addEventListener('keydown',(pressed) => {
//   if(pressed.key === 'Backspace' && wordArr[0]?.value == ''){
//     wordArr[0]?.focus()
//   }
// })

// backspace(wordArr, 0, 0)
// backspace(wordArr, 1)
// backspace(wordArr, 2)
// backspace(wordArr, 3)
// backspace(wordArr, 4)

multiBackspace(wordArr, buttons, currentRow, 0)



// wordArr[1]?.addEventListener('keydown',(pressed) => {
//   if(pressed.key === 'Backspace' && wordArr[1]?.value == ''){
//     wordArr[0]?.focus()
//   }
// })
// wordArr[2]?.addEventListener('keydown',(pressed) => {
//   if(pressed.key === 'Backspace' && wordArr[2]?.value == ''){
//     wordArr[1]?.focus()
//   }
// })
// wordArr[3]?.addEventListener('keydown',(pressed) => {
//   if(pressed.key === 'Backspace' && wordArr[3]?.value == ''){
//     wordArr[2]?.focus()
//   }
// })

// wordArr[4]?.addEventListener('keydown',(pressed) => {
//   if(pressed.key === 'Backspace' && wordArr[4]?.value == ''){
//     wordArr[3]?.focus()
//   }
// })




// wordArr[0]?.addEventListener('input', function(){handler1(event, 0)})
// wordArr[1]?.addEventListener('input', function(){handler1(event, 1)})
// wordArr[2]?.addEventListener('input', function(){handler1(event, 2)})
// wordArr[3]?.addEventListener('input', function(){handler1(event, 3)})
// wordArr[4]?.addEventListener('input', function(){handler1(event, 4)})
// wordArr[0]?.addEventListener('input', handler1)
// wordArr[1]?.addEventListener('input', handler2)
// wordArr[2]?.addEventListener('input', handler3)
// wordArr[3]?.addEventListener('input', handler4)
// wordArr[4]?.addEventListener('input', handler5)


if(!tryButton1 || !tryButton2 || !tryButton3 || !tryButton4 || !tryButton5){
  throw new Error('I am trying to avoid null???');
  }

tryButton1.addEventListener('click', () => {
  console.log('start')

  let l1 = wordArr[0]?.textContent
  let l2 = wordArr[1]?.textContent
  let l3 = wordArr[2]?.textContent
  let l4 = wordArr[3]?.textContent
  let l5 = wordArr[4]?.textContent
  
  if(!l1 || !l2 || !l3|| !l4|| !l5){
    throw new Error('I am trying to avoid null???');
  }
  
  let word = l1 + l2 + l3 + l4 + l5
  let mysArr = mystery.split('')

  for(let i = 0; i < wordArr.length; i++){
    if (word.charAt(i) == mystery.charAt(i)){
      wordArr[i].style.backgroundColor = "green";
      wordArr[i].disabled = true;
    }
    else if(mysArr.includes(word.charAt(i))){
      console.log(mysArr)
      wordArr[i].style.backgroundColor = "yellow";
      wordArr[i].disabled = true;
    }
    else {
      wordArr[i].style.backgroundColor = "red";
      wordArr[i].disabled = true;
    }
  }
  console.log(tryButton1)
  currentRow += 1
  tryButton1.disabled = true
  // tryButton1 = document.querySelector(`#bb${currentRow}`)
  console.log(tryButton1)
  for(let k = 1; k <= wordArr.length; k++){
    console.log(wordArr)
    wordArr[k-1] = document.querySelector<HTMLInputElement>(`#b${currentRow}-${k}`)
    wordArr[k-1].disabled = false
    console.log(wordArr[0])
  }
  console.log(wordArr)

  

  multiCaptureInput(wordArr, buttons, currentRow, 0)
  multiBackspace(wordArr, buttons, currentRow, 0)
  wordArr[0]?.focus()
  console.log('end')
})


tryButton2.addEventListener('click', () => {
  console.log('start')


  let l1 = wordArr[0].textContent
  let l2 = wordArr[1].textContent
  let l3 = wordArr[2].textContent
  let l4 = wordArr[3].textContent
  let l5 = wordArr[4].textContent
  
  if(!l1 || !l2 || !l3|| !l4|| !l5){
    throw new Error('I am trying to avoid null???');
  }
  
  let word = l1 + l2 + l3 + l4 + l5
  let mysArr = mystery.split('')

  for(let i = 0; i < wordArr.length; i++){
    if (word.charAt(i) == mystery.charAt(i)){
      wordArr[i].style.backgroundColor = "green";
      wordArr[i].disabled = true;
    }
    else if(mysArr.includes(word.charAt(i))){
      console.log(mysArr)
      wordArr[i].style.backgroundColor = "yellow";
      wordArr[i].disabled = true;
    }
    else {
      wordArr[i].style.backgroundColor = "red";
      wordArr[i].disabled = true;
    }
  }
  console.log(tryButton2)
  currentRow += 1
  console.log(currentRow)
  tryButton2.disabled = true
  // tryButton1 = document.querySelector(`#bb${currentRow}`)
  console.log(tryButton1)
  for(let k = 1; k <= wordArr.length; k++){
    console.log(wordArr)
    wordArr[k-1] = document.querySelector<HTMLInputElement>(`#b${currentRow}-${k}`)
    console.log(wordArr)
    wordArr[k-1].disabled = false
    console.log(wordArr[0])
  }
  console.log(wordArr)

  wordArr[0]?.focus()

  multiCaptureInput(wordArr, buttons, currentRow, 0)
  multiBackspace(wordArr, buttons, currentRow, 0)



  console.log('end')
})


tryButton3.addEventListener('click', () => {
  console.log('start')

  let l1 = wordArr[0].textContent
  let l2 = wordArr[1].textContent
  let l3 = wordArr[2].textContent
  let l4 = wordArr[3].textContent
  let l5 = wordArr[4].textContent
  
  if(!l1 || !l2 || !l3|| !l4|| !l5){
    throw new Error('I am trying to avoid null???');
  }
  
  let word = l1 + l2 + l3 + l4 + l5
  let mysArr = mystery.split('')

  for(let i = 0; i < wordArr.length; i++){
    if (word.charAt(i) == mystery.charAt(i)){
      wordArr[i].style.backgroundColor = "green";
      wordArr[i].disabled = true;
    }
    else if(mysArr.includes(word.charAt(i))){
      console.log(mysArr)
      wordArr[i].style.backgroundColor = "yellow";
      wordArr[i].disabled = true;
    }
    else {
      wordArr[i].style.backgroundColor = "red";
      wordArr[i].disabled = true;
    }
  }
  currentRow += 1
  tryButton3.disabled = true

  console.log(currentRow)
  for(let k = 1; k <= wordArr.length; k++){
  
    wordArr[k-1] = document.querySelector<HTMLInputElement>(`#b${currentRow}-${k}`)
    wordArr[k-1].disabled = false
    console.log(wordArr[0])
  }
  console.log(wordArr)


  multiCaptureInput(wordArr, buttons, currentRow, 0)
  multiBackspace(wordArr, buttons, currentRow, 0)



  wordArr[0]?.focus()


  console.log('end')
})

tryButton4.addEventListener('click', () => {
  console.log('start')


  let l1 = wordArr[0].textContent
  let l2 = wordArr[1].textContent
  let l3 = wordArr[2].textContent
  let l4 = wordArr[3].textContent
  let l5 = wordArr[4].textContent
  
  if(!l1 || !l2 || !l3|| !l4|| !l5){
    throw new Error('I am trying to avoid null???');
  }
  
  let word = l1 + l2 + l3 + l4 + l5
  let mysArr = mystery.split('')

  for(let i = 0; i < wordArr.length; i++){
    if (word.charAt(i) == mystery.charAt(i)){
      wordArr[i].style.backgroundColor = "green";
      wordArr[i].disabled = true;
    }
    else if(mysArr.includes(word.charAt(i))){
      console.log(mysArr)
      wordArr[i].style.backgroundColor = "yellow";
      wordArr[i].disabled = true;
    }
    else {
      wordArr[i].style.backgroundColor = "red";
      wordArr[i].disabled = true;
    }
  }
  currentRow += 1
  tryButton4.disabled = true

  console.log(currentRow)
  for(let k = 1; k <= wordArr.length; k++){
  
    wordArr[k-1] = document.querySelector<HTMLInputElement>(`#b${currentRow}-${k}`)
    wordArr[k-1].disabled = false
    console.log(wordArr[0])
  }
  console.log(wordArr)

  multiCaptureInput(wordArr, buttons, currentRow, 0)
  multiBackspace(wordArr, buttons, currentRow, 0)



  wordArr[0]?.focus()


  console.log('end')
})

tryButton5.addEventListener('click', () => {
  console.log('start')

  let l1 = wordArr[0].textContent
  let l2 = wordArr[1].textContent
  let l3 = wordArr[2].textContent
  let l4 = wordArr[3].textContent
  let l5 = wordArr[4].textContent
  
  if(!l1 || !l2 || !l3|| !l4|| !l5){
    throw new Error('I am trying to avoid null???');
  }
  
  let word = l1 + l2 + l3 + l4 + l5
  let mysArr = mystery.split('')

  for(let i = 0; i < wordArr.length; i++){
    if (word.charAt(i) == mystery.charAt(i)){
      wordArr[i].style.backgroundColor = "green";
      wordArr[i].disabled = true;
    }
    else if(mysArr.includes(word.charAt(i))){
      console.log(mysArr)
      wordArr[i].style.backgroundColor = "yellow";
      wordArr[i].disabled = true;
    }
    else {
      wordArr[i].style.backgroundColor = "red";
      wordArr[i].disabled = true;
    }
  }
  currentRow += 1
  tryButton5.disabled = true

  console.log(currentRow)
  for(let k = 1; k <= wordArr.length; k++){
  
    wordArr[k-1] = document.querySelector<HTMLInputElement>(`#b${currentRow}-${k}`)
    wordArr[k-1].disabled = false
    console.log(wordArr[0])
  }
  console.log(wordArr)

  multiCaptureInput(wordArr, buttons, currentRow, 0)
  multiBackspace(wordArr, buttons, currentRow, 0)


  wordArr[0]?.focus()


  console.log('end')
})

tryButton6.addEventListener('click', () => {
  console.log('start')

  let l1 = wordArr[0].textContent
  let l2 = wordArr[1].textContent
  let l3 = wordArr[2].textContent
  let l4 = wordArr[3].textContent
  let l5 = wordArr[4].textContent
  
  if(!l1 || !l2 || !l3|| !l4|| !l5){
    throw new Error('I am trying to avoid null???');
  }
  
  let word = l1 + l2 + l3 + l4 + l5
  let mysArr = mystery.split('')

  for(let i = 0; i < wordArr.length; i++){
    if (word.charAt(i) == mystery.charAt(i)){
      wordArr[i].style.backgroundColor = "green";
      wordArr[i].disabled = true;
    }
    else if(mysArr.includes(word.charAt(i))){
      console.log(mysArr)
      wordArr[i].style.backgroundColor = "yellow";
      wordArr[i].disabled = true;
    }
    else {
      wordArr[i].style.backgroundColor = "red";
      wordArr[i].disabled = true;
    }
  }

  if (word !== mystery){
    //loserrr
  }
  currentRow += 1
  tryButton6.disabled = true

  console.log(wordArr)

  console.log('end')


})



