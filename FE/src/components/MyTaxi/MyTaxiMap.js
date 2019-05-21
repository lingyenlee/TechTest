import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import mytaxiIcon from "../../assets/myTaxi.jpg"
import "./myTaxi.css"

//Child component of MyTaxi component
const MyTaxiMap = ({ myTaxiData }) => {

    //set initial state of map
    const [viewport, setViewport] = useState({
        latitude: 53.5529,
        longitude: 10.0066,
        zoom: 13,
        width: "80vw",
        height: "100vh"
    })

    //function to define green border for active car marker in map
    const activeCar = (
        (<div className="greenCar">
            <img src={mytaxiIcon} alt="taxiIicon" />
        </div>)
    )

    // function to define red border for inactive car marker in map
    const inactiveCar = (<div className="redCar">
        <img src={mytaxiIcon} alt="taxiIcon" />
    </div>)

    return (
        <div className="mapContainer">
            <div className="stickyContainer">
                <ReactMapGL
                    {...viewport}
                    mapboxApiAccessToken="pk.eyJ1IjoieGthMTMzIiwiYSI6ImNqdnRqb3RnNDBjMDE0M3BoYmxjMHdkbjgifQ.-oSCRzQIEqwToXKKx01syA"
                    mapStyle="mapbox://styles/xka133/cjvtmjxon14j31cq516z44i5v"
                    onViewportChange={viewport => {
                        setViewport(viewport)
                    }}>
                    {
                        myTaxiData.map(car =>
                            <Marker key={car.id}
                                latitude={car.coordinate.latitude}
                                longitude={car.coordinate.longitude}>
                                {/* show color border according to state of car */}
                                {car.state === "ACTIVE" ? activeCar : inactiveCar}
                            </Marker>
                        )
                    }
                </ReactMapGL>
            </div>
        </div>

    )
}

export default MyTaxiMap;


