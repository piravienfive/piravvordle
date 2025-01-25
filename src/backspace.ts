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
    backspace(arr, bttnArr, currentRow, n, 0)
    backspace(arr, bttnArr, currentRow, n + 1)
    backspace(arr, bttnArr, currentRow, n + 2)
    backspace(arr, bttnArr, currentRow, n + 3)
    backspace(arr, bttnArr, currentRow, n + 4)
}



export function captureInput(arr: Array<any>, bttnArr: Array<any>, currentRow: number, n: number, p=n+1){
    arr[n].addEventListener('input', () => {
    // let target = e.target as HTMLInputElement
    // console.log(target)
    // let currentValue: string = target.value
    // console.log(currentValue)
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
          
            let l1 = arr[0]?.value
            let l2 = arr[1]?.value
            let l3 = arr[2]?.value
            let l4 = arr[3]?.value
            let l5 = arr[4]?.value
            
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


export function playAgain (arr: Array<any>, bttnArr: Array<any>, word: string, options : string[] =['HILLS', 'CHEAT', 'CRASH', 'LARGE', 'CAKES', 'BREAD', 'HONEY', 'FAKES', 'PROXY', 'SHOES', 'TAUNT', 'PUNCH', 'BREED', 'PROVE' ]) {
    let playAgainButton = document.querySelectorAll<HTMLButtonElement>('#playAgainBttn')
    for(let i = 0; i < playAgainButton.length; i++){
    playAgainButton[i]?.addEventListener('click', () => {

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

        const newGameBttnArr = [tryButton1, tryButton2, tryButton3, tryButton4, tryButton5, tryButton6]


        const newGameArr = [letter1, letter2, letter3, letter4, letter5]


        if (!letter1 || !letter2 || !letter3 || !letter4 || !letter5){
            throw new Error('I am trying to avoid null???');}

        let allBoxes = document.querySelectorAll<HTMLInputElement>('.inputBox')
        console.log(allBoxes)
        
        for(let i = 0; i < allBoxes.length; i++){
            allBoxes[i].value = ''
            allBoxes[i].style.backgroundColor = 'white'
            allBoxes[i].disabled = true
        }
        letter1.disabled = false
        letter2.disabled = false
        letter3.disabled = false
        letter4.disabled = false
        letter5.disabled = false
        letter1.focus()


        for(let i = 0; i < newGameBttnArr.length; i++){
            if(!newGameBttnArr[i]){
                throw new Error('I am trying to avoid null???')
            }
            newGameBttnArr[i].disabled = true
        }
    
        let winPopup = document.querySelector<HTMLDivElement>('.winPop')
        let lossPopup = document.querySelector<HTMLDivElement>('.lossPop')

        if(!winPopup || !lossPopup){
            throw new Error('I am trying to avoid null???');
        }

        lossPopup.style.display = 'none'
        winPopup.style.display = 'none'

        let currentRow = 1
        let mystery = options[randomInt(options.length)]

        // bttnArr[0].replaceWith(bttnArr[0].cloneNode(true))
        // bttnArr[0].appendChild(document.querySelector('div.guess1 .letterBoxes'))
        // console.log(bttnArr[0].disabled, 'heree')
        // bttnArr[0].disabled = false
        // console.log(bttnArr[0].disabled, 'heree')
        // console.log(bttnArr, 'here')

    //     bttnArr[0].addEventListener('click', () => {
          
    //         let l1 = arr[0]?.textContent
    //         let l2 = arr[1]?.textContent
    //         let l3 = arr[2]?.textContent
    //         let l4 = arr[3]?.textContent
    //         let l5 = arr[4]?.textContent
            
    //         if(!l1 || !l2 || !l3|| !l4|| !l5){
    //           throw new Error('I am trying to avoid null???');
    //         }
            
    //         let guess = l1 + l2 + l3 + l4 + l5
    //         let mysArr = word.split('')
          
    //         for(let i = 0; i < arr.length; i++){
    //           if (word.charAt(i) == guess.charAt(i)){
    //             arr[i].style.backgroundColor = "green";
    //             arr[i].disabled = true;
    //           }
    //           else if(mysArr.includes(guess.charAt(i))){
    //             console.log(mysArr)
    //             arr[i].style.backgroundColor = "yellow";
    //             arr[i].disabled = true;
    //           }
    //           else {
    //             arr[i].style.backgroundColor = "red";
    //             arr[i].disabled = true;
    //           }
    //         }

    //         let winPopup = document.querySelector<HTMLDivElement>('.winPop')
    //         let lossPopup = document.querySelector<HTMLDivElement>('.lossPop')
    //         let wordReveal = document.querySelector<HTMLHeadingElement>('.lossMess3')
    //         if(!winPopup || !lossPopup || !wordReveal){
    //             throw new Error('I am trying to avoid null???');
    //         }

    //         if(word != guess && currentRow < 6){
    //             console.log(currentRow, 'before increment')
    //             currentRow += 1
    //             console.log(currentRow, 'after increment')
    //             bttnArr[currentRow-1].disabled = true
    //             for(let k = 1; k <= arr.length; k++){
    //                 arr[k-1] = document.querySelector<HTMLInputElement>(`#b${currentRow}-${k}`)
    //                 arr[k-1].disabled = false
    //             }
    //             multiCaptureInput(arr, bttnArr, currentRow, 0)
    //             multiBackspace(arr, bttnArr, currentRow, 0)

    //             arr[0]?.focus()
    //             }
    //         else if (word != guess && currentRow == 6){
    //             wordReveal.innerText = word
    //             lossPopup.style.display = 'flex'

    //         }
    //         else if (word == guess){
    //             winPopup.style.display = 'flex'
    //             }

    // })

        // console.log(bttnArr[0].disabled, 'heree')
        // bttnArr[0].disabled = false
        // console.log(bttnArr[0].disabled, 'heree')
        multiCaptureInput(newGameArr, bttnArr, currentRow, 0)
        multiBackspace(newGameArr, bttnArr, currentRow, 0)
        allAttempts(newGameArr, bttnArr, word=mystery)

      })}
}