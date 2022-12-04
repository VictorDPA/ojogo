// Você é um funcionário da Ebytr, empresa especializada em desenvolver sites para Pet Shops. Seu chefe te pediu para criar um software que permita o cadastro de novas pessoas usuárias no sistema da empresa.

// O seu software deve ser capaz de gerar senhas automaticamente para todos os novos usuários, além de inserir as pessoas no sistema da empresa.

let novasPessoasUsuarias = [
  'Marcos',
	'Camila',
	'Adriana',
	'Karla',
	'José',
	'Márcia',
];

let sistemas = ['Folha de Pagamento', 'RH', 'Treinamento', 'Slack', 'Zoom'];

// 1 - O sistema deve fazer um controle de acesso e só liberar a sua execução das atividades se a pessoa usuária realizar o login no sistema e tiver acesso liberado para realizar essas operações (Login: 'usuarioTrybe' e Senha: 'trybe2022');
// Se a pessoa usuária tiver acesso o sistema deve imprimir a mensagem "Acesso permitido!", caso contrário exiba "Acesso negado!"
// O que fazer primeiro?
// Entender o problema
// - Onde guardar o login e a senha

let login = 'usuarioTrybe';
let senha = 'trybe2022';
let temAcesso = false;

if (login === 'usuarioTrybe' && senha === 'trybe2022') {
  console.log("Acesso permitido!");
  temAcesso = true;
} else {
  console.log("Acesso negado!");
  temAcesso = false;
}

// 2 - o sistema deve criar senhas iniciais aleatórias para os novos usuários no padrão "nome" + "_" + numero aleatório
// Obs. A operação só deve ser realizada se a pessoa usuária tiver acesso a ela!
// Novamente, dividir o problema em partes menores
// Primeiro: Como verificar que tenho acesso?
// Segundo: Como percorrer cada pessoa para gerar uma senha?
// Terceiro: Como gerar números aleatórios?

if (temAcesso === true) {
  for (let index = 0; index < novasPessoasUsuarias.length; index += 1) {
    let novaSenha = novasPessoasUsuarias[index] + '_' + Math.floor(Math.random()*1000000);
    console.log(novaSenha);
  }
}

// 3 = Inserir as novas pessoas usuárias nos sistemas da empresa (Criar uma lista do sistema e o nome das novas pessoas usuárias cadastradas);
// Exemplo:
// Sistema: Folha de Pagamento
// 	Pessoas Usuárias:
//		0 - Marcos
//		1 - Camila
// 		2 - Adriana
//		3 - Karla
//		4 - José
//		5 - Márcia
// Sistema: RH
// 	Pessoas Usuárias:
//		0 - Marcos
//		1 - Camila
// 		2 - Adriana
//		3 - Karla
//		4 - José
//		5 - Márcia

// Obs: A operação só deve ser realizada se a pessoa usuária tiver acesso a ela!
// Temos 2 arrays.
// Como percorrer o primeiro array?
// Como percorrer o segundo array?

if (temAcesso === true) {
  for (let index = 0; index < sistemas.length; index += 1) {
    console.log('Sistema: ' + sistemas[index]);
    console.log('\tPessoas usuárias:');
    for (let pessoa = 0; pessoa < novasPessoasUsuarias.length; pessoa += 1) {
      console.log('\t\t' + pessoa + ' - ' + novasPessoasUsuarias[pessoa]);
    }
  }
}