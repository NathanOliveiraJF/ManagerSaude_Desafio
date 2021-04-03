import React from "react";
import { BrowserRouter, Route ,Switch } from "react-router-dom";

import Home from './pages/Home';
import Album from './pages/Album';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact  component={Home}/>
        <Route path="/albuns"  component={Album}/>
      </Switch>
    </BrowserRouter>
  );
}