import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Musica from "./musica";
import api from "./../Api";
import Layout from "./layout";
import albumImg from "../assets/imagem_album.svg";
import consultImg from "../assets/imagem_consultando_music.svg";

function ConsultarAlbum(props) {
  const [album, setAlbum] = useState({});
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  useEffect(() => {
    async function fechData() {
      try {
        const response = await api.get(
          `/api/Album/${props.match.params.id}`
        );
        setAlbum(response.data);
        setLoading(false);
      } catch (err) {
        console.log("error" + err);
      }
    }
    fechData();
  }, [props]);


  return (
    <Layout>
      {loading && <p>Loading...</p>}
      {!loading && (
        <>
          <div className="row mt-3 align-items-center">
            <div className="col-md-4">
              <h1 className="text-green w-25">Consultando Album</h1>
              <p className="fs-5 mt-4">
                Consultando Album{" "}
                <span className="text-green">{album.nome} </span>
                Lançado em{" "}
                <span className="text-green">{album.anoLancamento}</span>
              </p>

              <button
                onClick={() => {
                  history.push("/albuns");
                }}
                className="btn-create rounded-pill btn-lg border-0 px-4"
              >
                Voltar para Albuns
              </button>
            </div>
            <div className="col-md-3">
              <img
                src={consultImg}
                alt="imagem consultando"
                width="778"
                height="369"
              />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-11">
              <h2 className="text-green w-25 mb-4">Músicas</h2>
              <Musica musicas={album.musicas}  />
            </div>
          </div>
        </>
      )}
    </Layout>
  );
}

export default ConsultarAlbum;
