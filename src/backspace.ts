
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
