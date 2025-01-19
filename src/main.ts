import '../styles/styles.scss'


// let boxes = {
//   1 : [letter]
//   2
// }

let letter1 = document.querySelector<HTMLInputElement>('#first-1')
let letter2 = document.querySelector<HTMLInputElement>('#first-2')
let letter3 = document.querySelector<HTMLInputElement>('#first-3')
let letter4 = document.querySelector<HTMLInputElement>('#first-4')
let letter5 = document.querySelector<HTMLInputElement>('#first-5')
let tryButton = document.querySelector('button')


const mystery = 'hills'

const wordArr = [letter1, letter2, letter3, letter4, letter5]

if (!letter1 || !letter2 || !letter3 || !letter4 || !letter5){
  throw new Error('I am trying to avoid null???');
}

//handler listener

function handler1 (event: Event) {
  const target = event.target as HTMLInputElement
  const currentValue: string = target.value
  if (letter1) {letter1.innerText = currentValue
  console.log(letter1.textContent)
}
}
function handler2 (event: Event) {
  const target = event.target as HTMLInputElement
  const currentValue: string = target.value
  if (letter2) {letter2.innerText = currentValue
  console.log(letter2.textContent)}
}
function handler3 (event: Event) {
  const target = event.target as HTMLInputElement
  const currentValue: string = target.value
  if (letter3) {letter3.innerText = currentValue
  console.log(letter3.textContent)}
}
function handler4 (event: Event) {
  const target = event.target as HTMLInputElement
  const currentValue: string = target.value
  if (letter4) {letter4.innerText = currentValue
  console.log(letter4.textContent)}
}
function handler5 (event: Event) {
  const target = event.target as HTMLInputElement
  const currentValue: string = target.value
  if (letter5) {letter5.innerText = currentValue
  console.log(letter5.textContent)}
}

letter1.addEventListener('input', handler1)
letter2.addEventListener('input', handler2)
letter3.addEventListener('input', handler3)
letter4.addEventListener('input', handler4)
letter5.addEventListener('input', handler5)

if(!tryButton){
  throw new Error('I am trying to avoid null???');
  }

tryButton.addEventListener('click', () => {
  console.log('start')
  let currentRow = 1
  letter1.addEventListener('input', handler1)
  letter2.addEventListener('input', handler2)
  letter3.addEventListener('input', handler3)
  letter4.addEventListener('input', handler4)
  letter5.addEventListener('input', handler5)

  let l1 = letter1.textContent
  let l2 = letter2.textContent
  let l3 = letter3.textContent
  let l4 = letter4.textContent
  let l5 = letter5.textContent
  
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
  for(let k = 1; k <= wordArr.length; k++){
      document.querySelector<HTMLInputElement>(`#b${currentRow}-${k}`).disabled = false
  }
  
  
  console.log('end')


})



console.log(wordArr)



