import React, { useEffect, useState } from "react";
import Musica from "./musica";
import api from "./../Api";

function ConsultarAlbum(props) {
  const [album, setAlbum] = useState({});

  useEffect(() => {
    async function fechData() {
      try {
        const response = await api.get(
          `https://localhost:44351/api/Album/${props.match.params.id}`
        );
        setAlbum(response.data);
      } catch (err) {
        console.log("error" + err);
      }
    }
    fechData();
  }, [props]);

  console.log(album);

  return (
    <div className="row w-25">
      <div className="col-md-6">
        <div className="card border-0">
          <p className="card-title">Consultando album</p>
          <div className="card-body">
            <div className="row g-3">
              <div className="col-auto">
                <label className="col-form=label">Album</label>
              </div>
              <div className="col-auto">
                <span className="form-text text-dark">{album.nome}</span>
              </div>
              <div className="col-auto ps-4">
                <label className="col-form=label">Ano Lançamento</label>
              </div>
              <div className="col-auto">
                <span className="form-text">{album.anoLancamento}</span>
              </div>
            </div>
            
            {/* <div className="col-md-6 mt-5">
              <Musica musicas={album.musicas} />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConsultarAlbum;
