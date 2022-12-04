let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 350, 227];
// let soma = 0;
//   for (i=0; i<numbers.length; i+=1) {
  //     soma += numbers[i];
  //   }
  
  // let media = soma / numbers.length
  //   if (media > 20) {
    //     console.log('Valor maior que 20');
    //   } else if (media <=20) {
      //     console.log('Valor menor ou igual a 20')
      //   }
      // let maiorN = numbers[0];
      // let menorN = numbers[1];
      

let maiorN = numbers[0];
  for (let idx=0; idx<numbers.length;idx+=1) {
    if (numbers[idx] > maiorN) {
      maiorN = numbers[idx];
    }
  }

  console.log (maiorN);

// let caixa = [];
// let caixa2 = [];
// for (i=1; i<26; i+=1) {
//   caixa.push(i);
//   for (j=0;j<caixa.length;j+=1){
//     caixa2.push(caixa[j]/2);
//   }
   
// }
// console.log(caixa);



// console.log(caixa2);

// let array = ['java', 'javascript', 'python', 'html', 'css'];
//   for (i=0; i<array.length; i+=1){
//     if (array[i].length<array[i-1].length){
//         value = array[i+1].length;
//     }} 
//   console.log(value)


let arraia = [1, 2, 4, 5 , 6, 8 , 9];

for (let pixel in arraia){
  console.log(pixel);
}