import React, { useEffect, useState } from "react";
import api from "../Api";
import Layout from "./layout";
import { useHistory } from "react-router-dom";
import Musica from "./musica";

function ExcluirAlbum(props) {
  const [album, setAlbum] = useState({});
  const history = useHistory();
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function fechData() {
      try {
        const response = await api.get(`/api/Album/${props.match.params.id}`);
        setAlbum(response.data);
        setLoading(false);
      } catch (err) {
        console.log("error" + err);
      }
    }
    fechData();
  }, [props]);

  function excluir() {
    api.delete(`/api/album/${album.albumId}`).then((result) => {
      if (result.status === 204) {
        history.push("/albuns");
      }
    });
  }

  return (
    <>
    <Layout>
      <div className="row mt-4">
        <h2 className="h4">Excluir Album</h2>
        <div className="col-md-6 border rounded shadow-lg p-5">
          <form className="mt">
            <div className="mb-3">
              <label htmlFor="music-name">
                Deseja realmente excluir o Album{" "}
                <strong className="text-green">{album.nome} ?</strong>
              </label>
            </div>

            <button
              type="button"
              className="btn-create rounded-pill btn-lg border-0 px-4"
              onClick={() => {
                excluir();
              }}
            >
              Excluir
            </button>
            <button
              type="button"
              className="btn-create rounded-pill btn-lg border-0 px-4 ms-3"
              onClick={() => {
                history.push("/albuns/");
              }}
            >
              Voltar
            </button>
          </form>
        </div>
      </div>

      {!loading && (
        <div className="row mt-5">
          <div className="col-md-11">
            <h2 className="text-green w-25 mb-4">Músicas</h2>
            <Musica musicas={album.musicas} />
          </div>
        </div>
      )}
    </Layout>
    
    </>
  );
}

export default ExcluirAlbum;
