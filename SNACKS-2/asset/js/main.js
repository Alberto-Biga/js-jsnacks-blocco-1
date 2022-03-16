let first = prompt("La prima parola che ti viene in mente")
let second = prompt("La seconda parola che ti viene in mente")



if (first.length > second.length) {
    document.getElementById("target").innerHTML = second +  first
} else {
    document.getElementById("target").innerHTML = first +  second
}