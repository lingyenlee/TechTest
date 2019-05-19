import React from 'react';
import MapBox from "./components/MapBox"
import { BrowserRouter, Route } from "react-router-dom"
import LandingPage from "./components/LandingPage"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={LandingPage} />
        {/* <Route path="/cars2go" component={} /> */}
        {/* <MapBox /> */}
      </div>
    </BrowserRouter>

  );
}

export default App;
