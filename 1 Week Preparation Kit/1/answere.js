'use strict';


function plusMinus(arr) {
    let pos = 0
    let neg = 0
    let zero = 0

    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i] > 0) {
            pos++
        } else if (arr[i] < 0) {
            neg++
        } else {
            zero++
        }
        
    }

     // recibir 6 digitos despues del punto
        
     pos = (pos/arr.length).toFixed(6)
     neg = (neg/arr.length).toFixed(6)
     zero = (zero/arr.length).toFixed(6)
     console.log(pos)
     console.log(neg)
     console.log(zero)

     return(pos, neg, zero)



}

plusMinus([1, 1, 0, -1, -1]);