import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import api from "../Api";
import useForm from "../hooks/useForm";
import Album from "../pages/Album";
import Layout from "./layout";
import Musica from "./musica";

const campos = {
  album: "",
  anoLancamento: "",
  musica: "",
  duracao: "",
  musicas: [],
};

function AlterarAlbum(props) {
  const { propriedade, handleChange } = useForm(campos);
  const [album, setAlbum] = useState({});
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const [atualizar, setAtualizar] = useState(false);
  async function fechData() {
    try {
      const response = await api.get(`/api/Album/${props.match.params.id}`);
      setAlbum(response.data);
      setLoading(false);
    } catch (err) {
      console.log("error" + err);
    }
  }
  
  useEffect(() => {
    fechData();
  }, [album]);

  function salvarNaBase(obj) {
    try {
      api.put(`/api/album/${obj.albumId}`, obj);
    } catch (err) {
      alert("Erro ao salvar");
    }
    setAtualizar(true);
  }

  async function salvarMusica(e) {
    e.preventDefault();

    let obj = { ...album };

    obj.musicas.push({
      nome: propriedade.musica,
      duracao: propriedade.duracao,
      albumId: album.albumId,
    });

    salvarNaBase(obj);
  }

  function salvar(e) {
    e.preventDefault();

    const obj = { ...album };
    obj.nome = propriedade.album;
    obj.anoLancamento = propriedade.anoLancamento;
    salvarNaBase(obj);
  }

  function excluir(id) {
    try {
      api.delete(`/api/Album/musica/${id}`);
    } catch (err) {
      alert("Erro ao excluir, confira a api");
    }
  }

  return (
    <Layout>
      <div className="row mt-4">
        <h2 className="h4">Editar Album</h2>

        <div className="col-md-5 border rounded shadow-lg p-5">
          <button
            type="button"
            className="btn-create rounded-pill btn-lg border-0"
            onClick={(e) => {
              salvar(e);
              history.push("/albuns/");
            }}
          >
            Salvar Alterações
          </button>

          <form className="mt-5">
            <div className="mb-3">
              <label className="text-green">
                <strong>Nome Atual</strong>
              </label>
              <input
                className="form-control"
                readOnly
                disabled
                value={album.nome || ""}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="album-name" className="text-green">
                <strong>Novo Nome do album</strong>
              </label>
              <input
                type="text"
                className="form-control"
                id="album-name"
                name="album"
                onChange={handleChange}
                placeholder="Novo Nome do album"
                required
              />
            </div>
            <div className="mb-3">
              <label className="text-green">
                <strong>Ano de lançamento atual</strong>
              </label>
              <input
                className="form-control"
                value={album.anoLancamento || ""}
                disabled
                readOnly
              />
            </div>
            <div className="mb-3">
              <label htmlFor="album-time" className="text-green">
                <strong>Novo Ano de lançamento</strong>
              </label>
              <input
                type="text"
                className="form-control"
                id="album-time"
                name="anoLancamento"
                onChange={handleChange}
                placeholder="Novo Ano de lançamento"
                required
              />
            </div>
          </form>
        </div>
        <div className="col-md-1"></div>

        <div className="col-md-6">
          <h2 className="h4">Criar Música</h2>
          <div className="border rounded shadow-lg p-5">
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
                  name="duracao"
                  // value={propriedade.nome}

                  onChange={handleChange}
                  // placeholder="nome da música"
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
            </form>
          </div>
        </div>
      </div>

      {/* chamar o consultar musica */}

      {!loading && (
        <div className="row mt-5">
          <div className="col-md-11">
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
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {album.musicas.map((x, index) => {
                      return (
                        <tr key={index}>
                          <th scope="col">{index}</th>
                          <td>{x.nome}</td>
                          <td>{x.duracao}</td>
                          <td>
                            <button
                              onClick={() => {
                                excluir(x.musicaId);
                              }}
                              className="btn btn-outline-dark mx-3"
                            >
                              Remover
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default AlterarAlbum;
