let numeros = [];
for (let i=1; i<11; i+=1) {
  numeros.push(i);
}
console.log(numeros)

let fatorial=1;

for (let index=numeros.length-1; index>0; index-=1){
  fatorial*=index;
}

console.log(fatorial)
console.log('________________')

let palavra = 'tryber'
let novaPalavra = ""
  for (let int=palavra.length -1; int>=0; int-=1) {
    novaPalavra += palavra[int];
  }

  console.log(novaPalavra)
  console.log('________________')

let numbers = ['java', 'javascript', 'python', 'html', 'css'];
  for (let i=0; i<numbers.length; i+=1) {
    let newArray = numbers[i];
    console.log (newArray)
    for (let idx=0; idx < newArray.length; idx+=1) {
      console.log(newArray[idx])
    }
  
  } 


  let numbers = ['java', 'javascript', 'python', 'html', 'css'];

  function teste ({tech, name} = {}, final) {
    let numbers = ['java', 'javascript', 'python', 'html', 'css'];
    let void = ['Jonas', 'João'];
      for (i=0;i<numbers.length;i+=1){
        tech.push(numbers[i]);
      }
    
  }

  let array = [ 1, 2, 3, 3, 9, 5, 7, 6, 4, 9, 4];
  let maiorN = array[0];
  let contador=0;
  for (i=0; i<array.length;i+=1){
    if (maiorN<array[i]){
      maiorN = array[i];
    } 
    console.log(maiorN)
  } 