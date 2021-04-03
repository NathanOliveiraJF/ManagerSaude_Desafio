import React from 'react';
import { useHistory } from 'react-router-dom';
import inicioImg from '../../assets/imagem_inicio.svg';

function Home() {
  const history = useHistory();
  return (
    <div className="row mt-3 align-items-center">
      <div className="col-md-4">
        <h1 className="text-green">Album Manager</h1>
        <p className="fs-5 mt-4">Crie seus albuns de música agora mesmo!</p>
        <button onClick={() => {history.push('/criarAlbum')}} className="btn-create rounded-pill btn-lg border-0 px-4">Criar Album</button>
      </div>
      <div className="col-md-3">
        <img src={inicioImg} alt="imagem inicio" width="770" height="520"/>
      </div>
    </div>
  );
}

export default Home;