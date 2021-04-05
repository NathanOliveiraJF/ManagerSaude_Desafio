import React, { useState } from "react";
import Layout from "./layout";
import useForm from "./../hooks/useForm";
import api from "./../Api";
import { useHistory } from "react-router";
import Musica from "./musica";

const campos = {
  album: "",
  anoLancamento: "",
  musica: "",
  duracao: "",
  musicas: [],
};

function CriarAlbum() {
  const { propriedade, handleChange } = useForm(campos);
  const [albumCriado, setAlbumCriado] = useState(false);
  const [musicaCriado, setMusicaCriado] = useState(false);

  const [album, setAlbum] = useState({});
  const [concluido, setConcluido] = useState(false);
  const history = useHistory();
  function salvarAlbum(e) {
    e.preventDefault();
    console.log(propriedade.album);
    console.log(propriedade.anoLancamento);
    setAlbumCriado(true);
  }

  function salvarMusica(e) {
    e.preventDefault();

    propriedade.musicas.push({
      nome: propriedade.musica,
      duracao: propriedade.duracao,
    });

    setAlbum({
      nome: propriedade.album,
      anoLancamento: propriedade.anoLancamento,
      musicas: propriedade.musicas,
    });

    setMusicaCriado(true);
    setConcluido(true);
  }

  async function salvar(e) {
    e.preventDefault();

    try {
      const response = await api.post("/api/Album", album);
      setAlbum(response.data);
     
      history.push("/albuns");
    } catch (err) {
      console.log("falhou ao salvar");
    }
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
                  name="album"
                  // value={propriedade.nome}

                  onChange={handleChange}
                  placeholder="nome do album"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="album-time" className="text-green">
                  <strong>Ano de lançamento</strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="album-time"
                  name="anoLancamento"
                  // value={propriedade.nome}

                  onChange={handleChange}
                  placeholder="Ano de lançamento"
                />
              </div>
              <button
                type="button"
                className="btn-create rounded-pill btn-lg border-0 px-4"
                onClick={(e) => {
                  salvarAlbum(e);
                }}
              >
                Cadastrar Album
              </button>
            </form>
          </div>
        </div>
      )}

      {albumCriado && (
        <div className="row mt-4">
          {concluido && (
            <div className="alert alert-success" role="alert">
             Musica Cadastrada!
            </div>
          )}
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
                  name="musica"
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
                  name="duracao"
                  onChange={handleChange}
                />
              </div>
              <button
                type="button"
                className="btn-create rounded-pill btn-lg border-0 px-4"
                onClick={(e) => {
                  salvarMusica(e);
                }}
              >
                Cadastrar Musica
              </button>
              <button
                type="button"
                className="btn-create rounded-pill btn-lg border-0 px-4 ms-3"
                onClick={(e) => {
                  salvar(e);
                }}
              >
                Concluir
              </button>
            </form>
          </div>
        </div>
      )}

      {musicaCriado && (
        <div className="row mt-5">
          <div className="col-md-11">
            <h2 className="text-green w-25 mb-4">Músicas</h2>
            <Musica musicas={album.musicas} />
          </div>
        </div>
      )}
    </Layout>
  );
}

export default CriarAlbum;
