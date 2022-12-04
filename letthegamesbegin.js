// let base = Math.floor(Math.random() * 100);

// if (base >= 80) {
//   console.log('Parabéns, você foi aprovado(a)', 'Sua nota foi:', base);
// }
// else if (base < 60) {
//   console.log('Você foi reprovado(a).', 'Sua nota foi:', base)
// } if (base >= 60 && base < 80) {
//   console.log('Você está na nossa lista de espera.', 'Sua nota foi:', base)
// }
//   console.log ('______');

// let currentHour = 7;
// let message= '';
// if  (currentHour>=22) {
//   message = 'Não deveríamos comer nada, é hora de dormir.'
// } else if (currentHour>=18 && currentHour < 22) {
//   message = 'Rango da noite, vamos jantar :D'
// } else if (currentHour>= 14 && currentHour < 18) {
//   message = 'Vamos fazer um bolo pro café da tarde?'
// } else if (currentHour>11 && currentHour < 14) {
//   message = 'Hora do almoço!'
// } else if (currentHour>4 && currentHour<11) {
//   message = 'Hmmmm, cheiro de café passado.'
// }

//   console.log(message)
//   console.log ('______');

//   let condicao = '';

// switch (condicao) {
//   case 'aprovada':
//     console.log('Parabéns, você foi aprovada(o)!');
//     break;
//   case 'lista':
//     console.log('Você está na nossa lista de espera');
//     break;
//   case 'reprovada':
//     console.log('Você foi reprovado(a)');
//     break;
//   default:
//     console.log('Informação incorreta');
//     break;
// }

// console.log('________');

// let termA = 15;
// let termB = 10;
// let termC = 20;

//   console.log(
//     'Soma', (termA+termB),
//     'Subtração', (termA-termB),
//     'Multiplicação', (termA*termB),
//     'Divisão', (termA/termB),
//     'Resto', (termA%termB)
//   )
// console.log ('______');

// if (termA>termB) {
//   console.log('termA', termA)
// } else {
//   console.log('termB', termB)
// }

// console.log ('______');

// if (termA>termB && termA>termC) {
//   console.log ('termA é maior', termA);
// } else if (termB > termA && termB > termC) {
//   console.log ('termB é maior', termB);
// } else {
//   console.log ('termC é maior', termC)
// }

// console.log ('______');

// let parametro = 0;

// if (parametro>0) {
//   console.log('positive');
// } else if (parametro<0) {
//   console.log('negative');
// } else if (parametro == 0) {
//   console.log('zero');
// }



// let lesgo='1 cachaça, 5 cervejas e 1 copo de vinho';
// let result = lesgo.match(/\d/g);
// let result2 = result.map(str =>{ return Number(str);
// });
// let final =  0;
//   for (i=0;i<result2.length;i+=1){
//     final+=result2[i];
//   }
//   if (final==1){
//     console.log (final + 'copo de água')
//   } else {
//     console.log (final + 'copos de água')
//   }
// console.log(final + " copos de água")
let phone = [1, 2, 3, 4, 5, 6, 9, 9, 8, 0, 1];
function phoneGenerator(phone) {
  phone.join();
  console.log(phone);
  function (phone) {
    if (phone.lenght !== 11) {
      phone = "Array com tamanho incorreto."
    }
    return phone
  }

} console.log(phoneGenerator(phone))



let digit = [1, 2, 3, 4, 5, 6, 9, 9, 8, 0, 1];
function whatIsYourPhone(digit) {
  let completeNumber = ''
  let contador = 0
  if (digit.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (number = 0; number < digit.length; number += 1) {
    if (digit[number] < 0 || digit[number] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    };
    completeNumber += digit[number]
    let search = digit[number];
    for (comp = 0; comp < digit.length; comp += 1) {
      if (digit[comp] === search) {
        contador += 1;
      }
      if (contador > 2) {
        return 'não é possível gerar um número de telefone com esses valores'
      }
    } contador = 0;
  }
  let a = completeNumber.slice(0, 2);
  let b = completeNumber.slice(2, 7);
  let c = completeNumber.slice(7, 11);
  let d = "(" + a + ") " + b + "-" + c;

  return d
} console.log(whatIsYourPhone(digit));

//  Como verificar um número Primo (O melhor jeito é sabendo se ele não é primo);
// let numberToCheck = 14451;

// function checkPrime(numberToCheck) {
//   let numberOfDividers = 0
//   for (number = 1; number < numberToCheck; number +=1){
//     if (numberToCheck % number === 0) numberOfDividers +=1
//     if (numberOfDividers > 2) return 'Não é primo'
//   }
//   return 'É primo';
// }
//   console.log (checkPrime(numberToCheck))

// Gerador de Cor Estática na Paleta (Desafio 2 e 3)
function geradorDivCor(cor, number) {
  String = cor;
  const divCor = document.getElementById("color-palette");
  const divName = document.createElement("div");
  divName.className = "color";
  divName.id = "color" + number;
  divName.style.backgroundColor = cor
  divName.addEventListener("click", clicador);
  return divCor.appendChild(divName);
}
const div1 = geradorDivCor("black", 1);
const div2 = geradorDivCor("cyan", 2);
const div3 = geradorDivCor("indigo", 3);
const div4 = geradorDivCor("indianred", 4);
div1.classList.add("selected");
// Botão de cor aleatória
const botao = document.getElementById("button-random-color");
// Cor aleatória
function randomColor() {
  let a = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let c = Math.floor(Math.random() * 256);
  let cor = "rgb(" + a + "," + b + "," + c + ")";
    return cor;
}
// Evento do botão Cores Aleatórias
botao.addEventListener("click", () => {
  let rumor = 1;
  for (i = 2; i <= 4; i += 1) {
    rumor += 1;
    if (rumor !== 1) {
      const evento = document.getElementById(`color${rumor}`);
      evento.style.backgroundColor = randomColor();
    }
  }
});
// Evento do botão Limpar
const botao2 = document.getElementById("clear-board");

botao2.addEventListener("click", () => {
  const pixels = document.getElementsByClassName("pixel");
  let quadrado = []
  for (i=0; i<25; i+=1){
    quadrado.push(i);
  }
  for (let i=0;i<quadrado.length;i+=1){
    pixels.style.remove;
}}
)
//Desenho do quadro
function desenhoQuadro () {
  let quadrado = []
  for (i=0; i<25; i+=1){
    quadrado.push(i);
  }
  for (let i=0;i<quadrado.length;i+=1){
    const square = document.createElement("div");
    square.className= "pixel";
    square.style.backgroundColor = "white";
    document.getElementById("pixel-board").appendChild(square);
    square.addEventListener("click", pintar);
  }
} desenhoQuadro();


// Seleção de cor
function pintar (event){
  const nome = document.querySelector(".selected");
  this.setAttribute("style", `background-color: ${nome.value}`)

}
function clicador(event) {
  const nome = document.querySelector(".selected");
  nome.classList.remove("selected");
  event.target.classList.add("selected");
}
