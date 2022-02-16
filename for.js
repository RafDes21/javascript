

let number = prompt("Del 1, hasta que número deseas (en números por favor)")
let pot =prompt ("A que potencia deseas elevarlo (en números, por favor)")

for (let i = 1; i <= number ;  i++) {
    let result = i ** pot
    
   
   document.write(` potencia de ${i} ^ ${pot} = ${result} <br><br>` )
   
}