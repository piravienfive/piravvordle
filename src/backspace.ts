import '../styles/styles.scss'

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
    backspace(arr, bttnArr, currentRow, n, n)
    backspace(arr, bttnArr, currentRow, n + 1)
    backspace(arr, bttnArr, currentRow, n + 2)
    backspace(arr, bttnArr, currentRow, n + 3)
    backspace(arr, bttnArr, currentRow, n + 4)
}



export function captureInput(arr: Array<any>, bttnArr: Array<any>, currentRow: number, n: number, p=n+1){
    arr[n].addEventListener('input', (e: Event) => {
    let target = e.target as HTMLInputElement
    let currentValue: string = target.value
    if (arr[n]) {arr[n].innerText = currentValue.toUpperCase()
        arr[p]?.focus()
        console.log(arr[n].textContent)
      }
      if(arr[n]?.textContent == ''){
        arr[n]?.focus()
      }
    
    if(arr[n]?.textContent && arr[n-1]?.textContent  && arr[n-2]?.textContent  && arr[n-3]?.textContent  && arr[n-4]?.textContent){
    bttnArr[currentRow-1].disabled = false
    bttnArr[currentRow-1]?.focus()
    }
    else{
    bttnArr[currentRow-1].disabled = true
    }

})}

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
    bttnArr[currentRow - 1].addEventListener('click', () => {
          
            let l1 = arr[0]?.textContent
            let l2 = arr[1]?.textContent
            let l3 = arr[2]?.textContent
            let l4 = arr[3]?.textContent
            let l5 = arr[4]?.textContent
            
            if(!l1 || !l2 || !l3|| !l4|| !l5){
              throw new Error('I am trying to avoid null???');
            }
            
            let guess = l1 + l2 + l3 + l4 + l5
            let mysArr = word.split('')
          
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
                currentRow += 1
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
                }

    })
}

export function allAttempts(arr: Array<any>, bttnArr: Array<any>, word: string){
    attempt(arr, bttnArr, word, 1)
    attempt(arr, bttnArr, word, 2)
    attempt(arr, bttnArr, word, 3)
    attempt(arr, bttnArr, word, 4)
    attempt(arr, bttnArr, word, 5)
    attempt(arr, bttnArr, word, 6)
}