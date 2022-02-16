

let number = prompt("ingresa un número chavon")
let pot = prompt ("a que potencia queres")

for (let i = 1; i <= number ;  i++) {
    let result = i ** pot
    
   
   document.write(` potencia de ${i} ^ ${pot} = ${result} <br><br>` )
   
}