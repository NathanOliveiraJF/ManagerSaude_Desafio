import React from "react";
import { BrowserRouter, Route ,Switch } from "react-router-dom";

import Home from './pages/Home';
import Album from './pages/Album';
import ConsultarAlbum from './components/consultarAlbum';
import CriarAlbum from './components/criarAlbum';
import ExcluirAlbum from './components/excluirAlbum';
import AlterarAlbum from './components/alterarAlbum';


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact  component={Home}/>
        <Route path="/albuns"  component={Album}/>
        <Route path="/album/excluir/:id"  component={ExcluirAlbum}/>
        <Route path="/album/consultar/:id"  component={ConsultarAlbum}/>
        <Route path="/album/alterar/:id"  component={AlterarAlbum}/>

        <Route path="/album/novo" component={CriarAlbum} />
      </Switch>
    </BrowserRouter>
  );
}