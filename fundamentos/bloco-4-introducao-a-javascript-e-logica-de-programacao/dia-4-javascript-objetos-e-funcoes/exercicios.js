// PARTE I
// 1
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
console.log(`Bem vinda ${info.personagem}`);

// 2
info['recorrente'] = 'sim';
console.log(info);

// 3
for(let k in info){
  console.log(k);
}

// 4
for(let k in info){
  console.log(info[k]);
}

// 5
let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'sim'
};
console.log(info.personagem + ' e ' + info2.personagem);
console.log(info.origem + ' e ' + info2.origem);
console.log(info.nota + ' e ' + info2.nota);
function checkRecorrentes(personagem, personagem2){
  if(info.recorrente === 'sim' && info2.recorrente === 'sim'){
    return 'Ambos recorrentes'
  } return 'São diferentes'
}
console.log(checkRecorrentes(info.recorrente, info2.recorrente));

// 6
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};
for (let k in leitor.livrosFavoritos){
  let titulo = leitor.livrosFavoritos[0]
}

console.log(`O livro favorito de ${leitor.nome} ${leitor.sobrenome} se chama '${leitor.livrosFavoritos[0].titulo}'`);

// 7
leitor.livrosFavoritos.push({
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
})
console.log(leitor.livrosFavoritos);

// 8
console.log(`${leitor.nome} tem ${leitor.livrosFavoritos.length} livros favoritos`);