const cores = document.getElementsByClassName('color');
const tamanhoQuadro = document.querySelector('#board-size');
const board = document.getElementById('pixel-board');
let pixels = document.getElementsByClassName('pixel');
const botao = document.getElementById('button-random-color');
const botao2 = document.getElementById('clear-board');
const botao3 = document.getElementById('generate-board');

// Criar o seletor na Paleta

function selecionarCorPaleta(event) {
  const nome = document.querySelector('.selected');
  nome.classList.remove('selected');
  event.target.classList.add('selected');
}

// Criar paleta de cores

function paletaDeCores() {
  for (let i = 0; i < 4; i += 1) {
    const divName = document.createElement('div');
    divName.className = 'color';
    document.getElementById('color-palette').appendChild(divName);
    divName.addEventListener('click', selecionarCorPaleta);
  }
}

// Criar Cores Primárias da Paleta
function corDaPaleta() {
  const colors = ['black', 'cyan', 'indigo', 'indianred'];
  for (let i = 0; i < cores.length; i += 1) {
    cores[i].style.backgroundColor = colors[i];
  }
  cores[0].classList.add('selected');
}

// Gerador de cor aleatória
function randomColor() {
  const a = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const c = Math.floor(Math.random() * 256);
  const cor = `rgb(${a}, ${b}, ${c})`;
  return cor;
}
// Storage da paleta de cores
function guardarCor() {
  const guardar = [];
  for (let i = 1; i < cores.length; i += 1) {
    guardar.push(cores[i].style.backgroundColor);
    localStorage.setItem('colorPalette', JSON.stringify(guardar));
  }
}

function receberCor() {
  let receive = [];
  receive = JSON.parse(localStorage.getItem('colorPalette'));
  for (let i = 0; i < receive.length; i += 1) {
    cores[i + 1].style.backgroundColor = receive[i];
  }
}

// Botão de cor aleatória

function randomPalette() {
  for (let i = 1; i < cores.length; i += 1) {
    cores[i].style.backgroundColor = randomColor();
  }
  guardarCor();
}

// Criar o quadro de pintura
function guardarQuadro() {
  pixels = document.getElementsByClassName('pixel');
  const guardar = [];
  for (let i = 0; i < pixels.length; i += 1) {
    guardar.push(pixels[i].style.backgroundColor);
  }
  localStorage.setItem('pixelBoard', JSON.stringify(guardar));
  localStorage.setItem('boardSize', JSON.stringify(guardar));
}
// Modo Pintura
// function pintar(event) {
//   const arroz = event.target;
//   const corUsada = corSelecionada[0].style.backgroundColor;
//   arroz.style.backgroundColor = corUsada;
//   guardarQuadro();
// }

// function pegaPixel() {
//   for (let i = 0; i < pixels.length; i += 1) {
//     pixels[i].addEventListener('click', pintar);
//   }
// }
function pegaPixel() {
  const feijao = document.querySelectorAll('.pixel');
  const novaCor = document.getElementsByClassName('selected');
  for (let i = 0; i < feijao.length; i += 1) {
    feijao[i].addEventListener('click', (event) => {
      const arroz = event.target;
      const corUsada = novaCor[0].style.backgroundColor;
      arroz.style.backgroundColor = corUsada;
    });
  }
}

function desenhoQuadro(maldito) {
  for (let i = 0; i < maldito; i += 1) {
    const square = document.createElement('div');
    square.className = 'pixel';
    square.style.backgroundColor = 'white';
    board.appendChild(square);
  }
  board.style.width = `${(Math.sqrt(maldito)) * 42}px`;
  pegaPixel();
}

// Guardar o quadro já feito

function receberQuadro() {
  pixels = document.getElementsByClassName('pixel');
  const receive = JSON.parse(localStorage.getItem('pixelBoard'));
  const receive2 = JSON.parse(localStorage.getItem('boardSize'));
  desenhoQuadro(receive2.length);
  console.log(receive2);
  for (let i = 0; i < receive.length; i += 1) {
    pixels[i].style.backgroundColor = receive[i];
  }
}

// Botão de limpar o quadro

function apagador() {
  const pixels2 = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixels2.length; i += 1) {
    pixels2[i].style.backgroundColor = 'white';
  }
  guardarQuadro();
}

// Escolher tamanho do tabuleiro
function garcomDoFregues() {
  if (tamanhoQuadro.value < 5) {
    tamanhoQuadro.value = 5;
  } else if (tamanhoQuadro.value > 50) {
    tamanhoQuadro.value = 50;
  }
  const tamanhoTotal = (tamanhoQuadro.value * tamanhoQuadro.value);
  board.style.width = `${(tamanhoQuadro.value) * 42}px`;
  for (let i = 0; i < tamanhoTotal; i += 1) {
    const square = document.createElement('div');
    square.className = 'pixel';
    square.style.backgroundColor = 'white';
    document.getElementById('pixel-board').appendChild(square);
  }
}

function escolhaDoFregues() {
  const valorQuadro = tamanhoQuadro.value;
  if (!valorQuadro) {
    alert('Board inválido!');
  } if (valorQuadro > 0) {
    board.innerHTML = '';
    garcomDoFregues();
    guardarQuadro();
    pegaPixel();
  }
}

// Load do Storage
function ronaldo() {
  if (localStorage.length === 0) {
    guardarCor();
    guardarQuadro();
    desenhoQuadro(25);
  } else {
    receberCor();
    receberQuadro();
  }
}

// Funções
paletaDeCores();
corDaPaleta();
ronaldo();

botao.addEventListener('click', randomPalette);
botao3.addEventListener('click', escolhaDoFregues);
botao2.addEventListener('click', apagador);
