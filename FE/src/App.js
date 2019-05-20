import React from 'react';
import { BrowserRouter, Route } from "react-router-dom"
import LandingPage from "./components/LandingPage"
import Car2Go from "./components/Car2Go"
import MyTaxi from "./components/MyTaxi"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={LandingPage} />
        <Route path="/car2go" component={Car2Go} />
        <Route path="/mytaxi" component={MyTaxi} />

      </div>
    </BrowserRouter>

  );
}

export default App;
