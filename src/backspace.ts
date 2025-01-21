
export function backspace(arr: Array<any>, n: number, p=n - 1 ) {
    arr[n]?.addEventListener('keydown',(pressed: any) => {
        if(pressed.key === 'Backspace' && arr[n]?.value == ''){
        arr[p]?.focus()
        }
    })
}

export function multiBackspace(arr: Array<any>, n: number){
    backspace(arr, n, n)
    backspace(arr, n + 1)
    backspace(arr, n + 2)
    backspace(arr, n + 3)
    backspace(arr, n + 4)
}