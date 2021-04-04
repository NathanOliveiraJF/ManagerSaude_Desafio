import React from "react";
import { BrowserRouter, Route ,Switch } from "react-router-dom";

import Home from './pages/Home';
import Album from './pages/Album';
import ConsultarAlbum from './components/consultarAlbum';
import CriarAlbum from './components/criarAlbum';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact  component={Home}/>
        <Route path="/albuns"  component={Album}/>
        <Route path="/album/consultar/:id"  component={ConsultarAlbum}/>
        <Route path="/album/novo" component={CriarAlbum} />
      </Switch>
    </BrowserRouter>
  );
}