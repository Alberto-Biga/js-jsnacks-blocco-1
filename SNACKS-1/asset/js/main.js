//definisco numeri utente
let numberOne = prompt("Inserisci un numero")
let numberTwo = prompt("Inserisci un numero diverso dal precedente")

//da string a number
numberOne = parseInt(numberOne)
numberTwo = parseInt(numberTwo)

//logica per stampare il numero maggiore
if ( numberOne > numberTwo ) {
    document.getElementById("target").innerHTML = numberOne
} else {
    document.getElementById("target").innerHTML = numberTwo
}