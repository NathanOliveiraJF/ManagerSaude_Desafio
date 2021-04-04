import React, { useState } from "react";
import Layout from "./layout";
import useForm from "./../hooks/useForm";


function CriarAlbum() {
  const { propriedade, handleChange } = useForm({});
  const [albumCriado, setAlbumCriado] = useState(false);
  function salvar(e) {
    e.preventDefault();
    console.log(propriedade);
    setAlbumCriado(true);
  }

  return (
    <Layout>
      {!albumCriado && (
        <div className="row mt-4">
          <h2 className="h4">Criar Album</h2>

          <div className="col-md-6 border rounded shadow-lg p-5">
            <form className="mt">
              <div className="mb-3">
                <label htmlFor="album-name" className="text-green">
                  <strong>Nome do album</strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="album-name"
                  name="nome"
                  // value={propriedade.nome}

                  onChange={handleChange}
                  placeholder="nome do album"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="album-date" className="text-green">
                  <strong>Data de lançamento</strong>
                </label>
                <input
                  type="date"
                  name="data"
                  className="form-control"
                  id="album-date"
                  // value={propriedade.data}

                  onChange={handleChange}
                />
              </div>
              <button
                type="button"
                className="btn-create rounded-pill btn-lg border-0 px-4"
                onClick={(e) => {
                  salvar(e);
                }}
              >
                Cadastrar
              </button>
            </form>
          </div>
        </div>
      )}

      {albumCriado && (
        <div className="row mt-4">
          <h2 className="h4">Criar Música</h2>
          <div className="col-md-6 border rounded shadow-lg p-5">
            <form className="mt">
              <div className="mb-3">
                <label htmlFor="music-name" className="text-green">
                  <strong>Nome do Música</strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="music-name"
                  name="nome"
                  // value={propriedade.nome}

                  onChange={handleChange}
                  placeholder="nome da música"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="music-time" className="text-green">
                  <strong>Duração da Música</strong>
                </label>
                <input
                  type="time"
                  className="form-control"
                  id="music-time"
                  name="tempo"
                  // value={propriedade.nome}

                  onChange={handleChange}
                  // placeholder="nome da música"
                />
              </div>
              <button
                type="button"
                className="btn-create rounded-pill btn-lg border-0 px-4"
                onClick={(e) => {
                  salvar(e);
                }}
              >
                Cadastrar
              </button>
            </form>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default CriarAlbum;
