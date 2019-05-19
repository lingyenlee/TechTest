import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import mytaxiIcon from "../../assets/taxi2.jpg"
import "./MapBox.css"

const MapBox = ({ car2goData }) => {

    const [selectedCar, setSelectedCar] = useState(null)

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

            {car2goData.map(item =>
                <Marker key={item.id} latitude={item.coordinate.latitude} longitude={item.coordinate.longitude} >
                    <button className="marker-btn" onClick={e => {
                        e.preventDefault();
                        setSelectedCar(selectedCar);
                    }}>
                        <div className="vehicle-icon">
                            <img src={mytaxiIcon} alt="taxi-icon" />
                        </div>

                    </button>
                </Marker>

            )}
        </ReactMapGL>
    )

}

export default MapBox;


