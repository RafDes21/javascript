alert("Un jueguito por este mes de Febrero")
let name = prompt("Hola, ingrese su nombre para jugar")
let palabra = ""
let contador = 0;

while (palabra != "respeto") {
    
    palabra = prompt("¿Cuál es la palabra escondida? reddspaeesstfgfo")
    contador ++

    
    if (palabra == "respeto") {
        
        document.write(`!!!GAAAANAAAAASSSSTEEEE!!!--   ${name}<br>`)
      
    }
    if (contador == 5) {
        document.write(`Lo siento ${name} perdiste...`)
        break
    }
   
}

