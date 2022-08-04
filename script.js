alert("Preencha os campos a seguir.");

let numberFirst = Number(prompt("Digite qualquer número."));
let numberTwo = Number(prompt("Digite outro número."));

sum = numberFirst + numberTwo;
sub = numberFirst - numberTwo;
multip = numberFirst * numberTwo;
divi = (numberFirst / numberTwo).toFixed(2);
rdiv = numberFirst % numberTwo;

  alert(`Somando o resultado é: ${sum}.`);
  alert(`Subttraindo o resultado é: ${sub}.`);
  alert(`Multiplicando o resultado é: ${multip}.`);
  alert(`Dividindo o resultado é: ${divi}.`);
  alert(`O resta da divisão é: ${rdiv}.`);

 // Verifique se a soma dos dois números é par (ou ímpar);
 
 let result = sum % 2;

 if(result == 0){
  alert(`A soma dos numeros é PAR, devido ao resultado ${sum}`);
 } else{
  alert(`A soma dos numeros é ÍMPAR, devido ao resultado ${sum}`)
 }

 //Verifique se os dois números inseridos são iguais
  
 if(numberFirst == numberTwo){
   alert(`Os numéros digitados são sendo iguais.`)
} else {
  alert(`Os números digitados são diferentes.`)
 }