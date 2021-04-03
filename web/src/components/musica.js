import React from "react";

function Musica(props) {
  console.log(props.musicas);
  return(
  <table className="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nome</th>
        <th scope="col">Duracao</th>
      </tr>
    </thead>
    <tbody>
      {props.musicas.map((x, index) => {
        return (
          <tr key={x.musicaId}>
            <th scope="col">{index}</th>
            <td>{x.nome}</td>
            <td>{x.duracao}</td>
          </tr>
        );
      })}
    </tbody>
  </table>);
}

export default Musica;
