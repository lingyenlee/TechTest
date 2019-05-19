import React from 'react';
import { BrowserRouter, Route } from "react-router-dom"
import LandingPage from "./components/LandingPage"
import Car2GoBox from "./components/cars2go"
import MyTaxiBox from "./components/mytaxi"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={LandingPage} />
        <Route path="/car2go" component={Car2GoBox} />
        <Route path="/mytaxi" component={MyTaxiBox} />

      </div>
    </BrowserRouter>

  );
}

export default App;
