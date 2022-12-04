let nota = Math.floor(Math.random()*100) +1;

if (nota <0 || nota > 100) {
  console.log('Erro, nota incorreta!')
} else if (nota>=90) {
  console.log('A');
} else if (nota>=80) {
  console.log('B')
} else if (nota>=80) {
  console.log('C')
} else if (nota>=70) {
  console.log('D')
} else if (nota>=60) {
  console.log('E')
} else {
  console.log('F')
}

console.log('____________');

let numA = 1;
let numB = 2;
let numC = 3;

let isOdd = false;

if (numA%2!==0 || numB%2!==0 || numC%2 !== 0) {
  isOdd = true;
}; console.log (isOdd);

console.log ('____________');

let custoProduto = 10;
let tax = 1.2;
let valorDeVenda = 20;
let valorLucro = (valorDeVenda-custoProduto) * 1000
  
if  (custoProduto>= 0 && valorDeVenda>=0) {
  let TotalProduto = custoProduto * tax;
  let valorLucroTotal = (valorDeVenda - TotalProduto) * 1000;
  console.log (valorLucroTotal);
} else {
  console.log ('Erro, valores negativos');
}

console.log('____________');

let salarioBruto = 1500.10;
let inss;
let impostoDeRenda;

  if (salarioBruto < 1556.94) {
    inss = salarioBruto * 0.08
  } else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
    inss = salarioBruto * 0.09
  } else if (salarioBruto > 2594.93 && salarioBruto <= 5189.82) {
    inss = salarioBruto * 0.11
  } else if (salarioBruto < 5189.83) {
    inss = salarioBruto - 570.88
  }

let salarioParcial = salarioBruto - inss;

  if (salarioParcial> 1903,99 && salarioParcial <=2826.65){
    impostoDeRenda = (salarioParcial*0.075) - 142.80;
  } else if (salarioParcial> 2826.66 && salarioParcial<=3751.05){
    impostoDeRenda = (salarioParcial*0.15) - 354.80;
  } else if (salarioParcial> 3751.06 && salarioParcial<=4664.68){
    impostoDeRenda = (salarioParcial*0.225) - 636.13;
  } else if (salarioParcial> 4664.68){
    impostoDeRenda = (salarioParcial*0.275) - 869.36;
  } else if (salarioParcial< 1903.08){
    impostoDeRenda = 0;
  }

  let salarioLiquido = salarioParcial - impostoDeRenda

  console.log (salarioLiquido)

  _________________________________________________
  // 1 - 
// Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
// A soma total de 1 a 50 é:
// an = a1 + (n – 1)r

let numeros= [];

for (let i=1; i< 51; i+=1) {
  numeros.push(i);
  } 
// console.log(numeros);

let contador = 0;

for (let index=0; index< numeros.length; index+=1) {
  contador += numeros[index];
}
console.log(contador);
console.log ('__________________')

// console.log (numeros.at(-1))

let pa = ((numeros[0] + numeros[numeros.length-1])*numeros.length)/2
console.log(pa);

