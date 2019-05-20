import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import car2goIcon from "../../assets/c2g-icon.png"
import "./car2go.css"

const Car2GoMapBox = ({ myTaxiData, car2goData }) => {

    const [selectedCar, setSelectedCar] = useState(null)

    const [viewport, setViewport] = useState({
        latitude: 53.5529,
        longitude: 10.0066,
        zoom: 13,
        width: "80vw",
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

            {
                car2goData.map(item =>
                    <Marker key={item.id}
                        latitude={item.coordinates[1]}
                        longitude={item.coordinates[0]} >
                        <button className="marker-btn" onClick={e => {
                            e.preventDefault();
                            setSelectedCar(selectedCar);
                        }}>
                            <div className="vehicle-icon">
                                <img src={car2goIcon} alt="car2go-icon" />
                            </div>
                        </button>
                    </Marker>
                )
            }
        </ReactMapGL>
    )
}

export default Car2GoMapBox;