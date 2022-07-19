import React, { Component } from "react";


const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends Component {
  render() {
    return (
      <div className="content-container"> {conteudos.map((el) =>
        <>
          <div className="p-container">
            <div className="individual-card">
            <p className="p-content">O conteúdo é: {el.conteudo}</p>
            <p className="p-content">Status: {el.status}</p>
            <p className="p-content">Bloco: {el.bloco}</p>
            </div>
          </div>
        </>
)} </div>
    )
  }
}

export default Content;