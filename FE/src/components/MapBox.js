import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import axios from "axios";
require("dotenv").config();



const MapBox = () => {

    const [viewport, setViewport] = useState({
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 15,
        width: "100vw",
        height: "100vh"
    })


    return (
        <ReactMapGL
            {...viewport}
            mapboxApiAccessToken="pk.eyJ1IjoieGthMTMzIiwiYSI6ImNqdnRqb3RnNDBjMDE0M3BoYmxjMHdkbjgifQ.-oSCRzQIEqwToXKKx01syA"
            mapStyle="mapbox://styles/xka133/cjvtmjxon14j31cq516z44i5v"
            onViewportChange={viewport => {
                setViewport(viewport)
            }}>


        </ReactMapGL>
    )

}



export default MapBox;


