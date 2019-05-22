import React from 'react';
import { BrowserRouter, Route } from "react-router-dom"
import LandingPage from "./components/LandingPage"
import { Car2GoContainer } from "./components/Car2Go"
import { MyTaxiContainer } from "./components/MyTaxi"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={LandingPage} />
        <Route path="/car2go" component={Car2GoContainer} />
        <Route path="/mytaxi" component={MyTaxiContainer} />

      </div>
    </BrowserRouter>

  );
}

export default App;
