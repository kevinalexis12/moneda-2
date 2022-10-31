const prompt = require("prompt-sync")(); 
const moneda = Math.random();

option = prompt("cara a jugar : ", "");
apuesta = parseFloat(prompt("valor a apostar : ", ""));
  

while (seguir==1){
  switch (option) {
    case "cara":
      if (moneda < 0.5) {
        console.log("gano");
        total = apuesta+apuesta;
        console.log(`su apuesta actual es ${total}`);
      } else if (moneda > 0.5) {
        console.log("perdio");
        total = apuesta-apuesta;
        console.log(`su apuesta actual es ${total}`);
      }
      break;
    case "cruz":
      if (moneda > 0.5) {
        console.log("gano");
        total = apuesta+apuesta;
        console.log(`su apuesta actual es ${total}`);
      } else if (moneda < 0.5) {
        console.log("perdio");
        total = apuesta-apuesta;
        console.log(`su apuesta actual es ${total}`);
      }
     
    break;
   
  }  
 
} 
  seguir= parseInt(prompt('desea seguir 1. si  2. no :" ',1));