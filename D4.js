/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let base = 48
// let altezza = 24

// risulato = area(base, altezza)
// console.log(risultato)


// function area(numero1, numero2){
//   risultato = numero1*numero2
//   return risultato
// }


/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let valore1 = parseInt(prompt("inserisci un valore1"))
// let valore2 = parseInt(prompt("inserisci un valore 2"))


// somma= crazySum(valore1,valore2)
// console.log(somma)

// function crazySum (numero1, numero2) {
//   if(numero1 === numero2){
//     somma = Math.floor((numero1+numero2)*3)
//     console.log(`${somma} è la somma di ${valore1} + ${valore2} per 3`)
//     return somma
//   }
//   somma = (numero1+numero2)
//   console.log(`${somma} è la somma di ${valore1} + ${valore2}`)
//   return somma
// }

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// var numero = parseInt(prompt("Inserisci un numero"))

// controllo = crazyDiff(numero)
// console.log(controllo)

// function crazyDiff(numero){
//   numeroParametro = numero-19
//   if(numeroParametro<0){
//     numeroParametroDef = Math.abs(numeroParametro)
//     return numeroParametroDef
//   }
//   if(numero >= 19){
//     let numeroMoltiplicato = 0
//     numeroMoltiplicato = (numeroParametro * 3)
//     console.log(`${numeroParametro} sarà moltiplicato per 3`)
//     return numeroMoltiplicato
//   }
// }

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let input = parseInt(prompt("esercizio 4 input"))

// inputElab = boundary(input)

// console.log(inputElab)

// function boundary(n){
//   if (n>=20 && n<=100||n===400){
//     return true;
//   }else{
//     return false;
//   }
// }

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let frase = "if there is something strange ,in your neighborhood, who you gonna call?"
// let frase2 = "EPICODE!!!!"

// prodottoPiazzamento = epify(frase)
// console.log(prodottoPiazzamento)


// function epify(stringa){
//   epicode = stringa.indexOf("EPICODE")
//   if(epicode < 0){
//     nuovaStringa ="EPICODE " + stringa 
//     return nuovaStringa
    
//   }
//   else{
//     return stringa
//   }
// }

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let numeroE6=parseInt(prompt("inserisci un numero per controllare se è un multiplo di 3 o 7"))

// verifica = check3and7(numeroE6)

// function check3and7(numero){
//   if(numero % 3 === 0 || numero % 7 === 0 ){
//     console.log(`${numeroE6} è un multiplo di 3 o 7`)
//     return
//   }
//     console.log(`${numeroE6} non è un multiplo di 3 o 7`)
//   return
// }

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// let frase = "I topi non avevano nipoti"

// reversify = reverseString(frase)
// console.log(reversify)
// console.log(frase)

// function reverseString(stringa){
//   let firstStep = stringa.split("")
//   secondStep = firstStep.reverse()
//   thirdStep = secondStep.join("")
//   fourthStep = thirdStep.trim()
//   return fourthStep
// }


/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let frase3 = "giovanni muciaccia utilizza le forbici dalla punta arrotondata"

// caps = upperFirst(frase3)
// console.log(caps)

// function upperFirst(stringa){
//   const fraseCambiata=[]
//   let firstStep = stringa.split(" ")

//   for(parola of firstStep){
//     toChange = parola.charAt(0)
//     upperChanged = toChange.toUpperCase()    
//     parolaCambiata = parola.replace(toChange,upperChanged)
//     fraseCambiata.push(parolaCambiata)
    
//   }
//   let secondStep = fraseCambiata.join(" ")
//   return secondStep
// }




/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let frase4 = "Roberto Baggio era un grande calciatore"

// taglio = cutString(frase4)
// console.log(taglio)

// function cutString(stringa){
//  let arrayStringa = stringa.split("")
//  let ultimoChar = stringa.length

//  delete arrayStringa[0]
//  delete arrayStringa[ultimoChar -1]

//   almost = arrayStringa.join("").trim()
//  return almost
// }

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// const randomArray=[]
// let random = Math.floor(Math.random()* 11);
// console.log(random)

// randomNumbers= giveMeRandom(randomArray, random)
// console.log(randomNumbers)

// function giveMeRandom(randomArray,number)
// {

//   for(i=0;i<=number-1;i++){
//     randomNumber= Math.floor(Math.random()* 11);
      
//     randomArray.push(randomNumber)
//   }
//   console.log(randomArray)
// }
