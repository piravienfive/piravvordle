import '../styles/styles.scss'


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

const buttons = [tryButton1, tryButton2, tryButton3, tryButton4, tryButton5]

const mystery = 'HILLS'

const wordArr = [letter1, letter2, letter3, letter4, letter5]

if (!letter1 || !letter2 || !letter3 || !letter4 || !letter5){
  throw new Error('I am trying to avoid null???');
}

//handler listener

function handler1 (event: Event) {
  let target = event.target as HTMLInputElement
  let currentValue: string = target.value
  if (wordArr[0]) {wordArr[0].innerText = currentValue
  
  console.log(wordArr[0].textContent)}
}
function handler2 (event: Event) {
  let target = event.target as HTMLInputElement
  let currentValue: string = target.value
  if (wordArr[1]) { wordArr[1].innerText = currentValue
  console.log(wordArr[1].textContent)}
}
function handler3 (event: Event) {
  const target = event.target as HTMLInputElement
  const currentValue: string = target.value
  if (wordArr[2]) { wordArr[2].innerText = currentValue
  console.log(wordArr[2].textContent)}
}
function handler4 (event: Event) {
  const target = event.target as HTMLInputElement
  const currentValue: string = target.value
  if (wordArr[3]) {wordArr[3].innerText = currentValue
  console.log(wordArr[3].textContent)}
}
function handler5 (event: Event) {
  const target = event.target as HTMLInputElement
  const currentValue: string = target.value
  if (wordArr[4]) {wordArr[4].innerText = currentValue
  console.log(wordArr[4].textContent)}
}

wordArr[0].addEventListener('input', handler1)
wordArr[1].addEventListener('input', handler2)
wordArr[2].addEventListener('input', handler3)
wordArr[3].addEventListener('input', handler4)
wordArr[4].addEventListener('input', handler5)


if(!tryButton1 || !tryButton2 || !tryButton3 || !tryButton4 || !tryButton5){
  throw new Error('I am trying to avoid null???');
  }

tryButton1.addEventListener('click', () => {
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
  wordArr[0].addEventListener('input', handler1)
  wordArr[1].addEventListener('input', handler2)
  wordArr[2].addEventListener('input', handler3)
  wordArr[3].addEventListener('input', handler4)
  wordArr[4].addEventListener('input', handler5)

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
  wordArr[0].addEventListener('input', handler1)
  wordArr[1].addEventListener('input', handler2)
  wordArr[2].addEventListener('input', handler3)
  wordArr[3].addEventListener('input', handler4)
  wordArr[4].addEventListener('input', handler5)

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
  wordArr[0].addEventListener('input', handler1)
  wordArr[1].addEventListener('input', handler2)
  wordArr[2].addEventListener('input', handler3)
  wordArr[3].addEventListener('input', handler4)
  wordArr[4].addEventListener('input', handler5)

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
  wordArr[0].addEventListener('input', handler1)
  wordArr[1].addEventListener('input', handler2)
  wordArr[2].addEventListener('input', handler3)
  wordArr[3].addEventListener('input', handler4)
  wordArr[4].addEventListener('input', handler5)

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
  wordArr[0].addEventListener('input', handler1)
  wordArr[1].addEventListener('input', handler2)
  wordArr[2].addEventListener('input', handler3)
  wordArr[3].addEventListener('input', handler4)
  wordArr[4].addEventListener('input', handler5)

  console.log('end')
})



