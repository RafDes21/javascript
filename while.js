alert("Un jueguito por este mes de Febrero")
let name = prompt("Hola, ingrese su nombre para jugar")
let palabra = ""

while (palabra != "respeto") {

    palabra = prompt("ingrese una palabra")
    if (palabra == "respeto") {

        document.write(`!!!GAAAANAAAAASSSSTEEEE ${name}, respeto era la palabra escondida`)
        
    }

}

