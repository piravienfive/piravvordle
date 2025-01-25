import {multiBackspace, multiCaptureInput} from './backspace.ts' 
import data from './../words.json'


const wordList = data.wordBank




export function captureInputHandler (event: Event, arr: Array<any>, bttnArr : Array<any>, currentRow: number, n: number, p=n+1) {
    console.log(event)
    if (arr[n]) {arr[n].value = arr[n].value.toUpperCase()
        arr[p]?.focus()
      }
      if(arr[n]?.value == ''){
        arr[n]?.focus()
      }
    
    if(arr[n]?.value && arr[n-1]?.value  && arr[n-2]?.value  && arr[n-3]?.value  && arr[n-4]?.value){
      bttnArr[currentRow-1].disabled = false
      bttnArr[currentRow-1]?.focus()
    }
    else{
      bttnArr[currentRow-1].disabled = true
    }

}



// export function backspaceHandler(event: Event, arr: Array<any>, bttnArr: Array<any>, currentRow: number, n: number, p: number = n - 1 ){
//   console.log(event)
//   if(oninput.key === 'Backspace' && arr[n]?.value == ''){
//     arr[p]?.focus()
//     }
// })
// }

export function attemptHandler (event: Event,arr: Array<any>, bttnArr: Array<any>, word: string, currentRow: number) {
  console.log(event)
  let l1 = arr[0].value
  console.log(l1, 'here')
  let l2 = arr[1]?.value
  let l3 = arr[2]?.value
  let l4 = arr[3]?.value
  let l5 = arr[4]?.value
  
  if(!l1 || !l2 || !l3|| !l4|| !l5){
    throw new Error('I am trying to avoid null???');
  }
  
  let guess = l1 + l2 + l3 + l4 + l5
  console.log(guess.toLowerCase())
  let mysArr = word.split('')
  console.log(wordList)
  if (wordList.includes(guess.toLowerCase())){

    for(let i = 0; i < arr.length; i++){
      if (word.charAt(i) == guess.charAt(i)){
        arr[i].style.backgroundColor = "green";
        arr[i].disabled = true;
      }
      else if(mysArr.includes(guess.charAt(i))){
        console.log(mysArr)
        arr[i].style.backgroundColor = "yellow";
        arr[i].disabled = true;
      }
      else {
        arr[i].style.backgroundColor = "red";
        arr[i].disabled = true;
      }
    }

    let winPopup = document.querySelector<HTMLDivElement>('.winPop')
    let lossPopup = document.querySelector<HTMLDivElement>('.lossPop')
    let wordReveal = document.querySelector<HTMLHeadingElement>('.lossMess3')
    if(!winPopup || !lossPopup || !wordReveal){
        throw new Error('I am trying to avoid null???');
    }

    if(word != guess && currentRow < 6){
        console.log(currentRow, 'before increment')
        currentRow += 1
        console.log(currentRow, 'after increment')
        bttnArr[currentRow-1].disabled = true
        for(let k = 1; k <= arr.length; k++){
            arr[k-1] = document.querySelector<HTMLInputElement>(`#b${currentRow}-${k}`)
            arr[k-1].disabled = false
        }
        multiCaptureInput(arr, bttnArr, currentRow, 0)
        multiBackspace(arr, bttnArr, currentRow, 0)

        arr[0]?.focus()
        }
    else if (word != guess && currentRow == 6){
        wordReveal.innerText = word
        lossPopup.style.display = 'flex'

    }
    else if (word == guess){
        winPopup.style.display = 'flex'
        let allBoxes = document.querySelectorAll<HTMLInputElement>('.inputBox')
        for(let i = 0; i < allBoxes.length; i++){
          allBoxes[i].disabled = true
      }

        }

  }
  else {
    let nawPop = document.querySelector<HTMLDivElement>('.not-a-word')
    if (!nawPop){
      throw new Error('I am trying to avoid null???');
    }
    nawPop.style.display = 'flex'
    setTimeout(function(){
    nawPop.style.display = 'none'}, 1500)

  }
}
