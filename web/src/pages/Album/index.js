import React, { useEffect, useState } from "react";
import vazioImg from "../../assets/imagem_album_vazio.svg";
import albumImg from "../../assets/imagem_album.svg";
import iconArrow from "../../assets/icon_arrow-down.svg";

import api from "../../Api";

function Album() {
  const [albuns, setAlbuns] = useState([]);
  const [loading, setLoading] = useState(true);
  async function fechData() {
    try {
      const response = await api.get("https://localhost:44351/api/Album");
      setAlbuns(response.data);
      setLoading(false);
    } catch (err) {
      alert("error get api");
    }
  }

  useEffect(() => {
    fechData();
  }, []);

  return (
    <>
      <div className="row mt-3 align-items-center">
        <div className="col-md-4">
          <h1 className="text-green">Album</h1>
          <p className="fs-5 mt-4">Aqui estão todos os seus albuns.</p>
          <div class="input-group mb-3">
            <label for="search">
              <img
                src={iconArrow}
                alt="imagem inicio"
                className="img-search rounded btn-lg border-0 px-4"
                id="inputGroupFile03"
              />
            </label>
            <input type="text" class="form-control" id="search" />
          </div>
        </div>
        <div className="col-md-3">
          <img src={albumImg} alt="imagem inicio" width="778" height="369" />
        </div>
      </div>

      {loading && <p>Loading...</p>}
      {!loading && (
        <div className="row justify-content-center">
          <div className="col">
            <table className="table mt-4">
              <thead>
                <tr>
                  <th scope="col">Nome</th>
                  <th scope="col">Data de Lançamento</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {albuns.map((x) => {
                  return (
                    <tr key={x.albumId}>
                      <td>{x.nome}</td>
                      <td>{x.anoLancamento}</td>
                      <td>
                        <a
                          href={`/album/consultar/${x.albumId}`}
                          className="btn btn-outline-dark"
                        >
                          Consultar
                        </a>
                        <a
                          href={`/album/alterar/${x.albumId}`}
                          className="btn btn-outline-dark mx-3"
                        >
                          Alterar
                        </a>
                        <a
                          href={`/album/editar/${x.albumId}`}
                          className="btn btn-outline-dark"
                        >
                          Editar
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}
export default Album;
