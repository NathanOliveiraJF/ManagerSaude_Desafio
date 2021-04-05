import React from "react";

function Musica(props) {
  return (
    <div className="card">
      <div className="card-header">
        <strong className="card-title">Músicas</strong>
      </div>
      <div className="card-body">
        <table className="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Musica</th>
              <th scope="col">Duracao</th>
            </tr>
          </thead>
          <tbody>
            {props.musicas.map((x, index) => {
              return (
                <tr key={index}>
                  <th scope="col">{index}</th>
                  <td>{x.nome}</td>
                  <td>{x.duracao}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Musica;
