import React, { useContext } from 'react';
import { Car2GoContext } from "./Car2GoStore"
import { Car2GoMap } from "./Car2GoMap"
import "./car2go.css";

//Level 1 child component of Car2GoComponent - contains Level 2 child component
export const Car2GoCard = () => {

    //consume context from store
    const [vehicles] = useContext(Car2GoContext)

    return (
        <div className="car2GoCardContainer">
            {/* ----left section showing individual car2Go data ----------- */}
            <div className="car2GoData">
                {
                    vehicles.map(vehicle =>
                        <div className="car2GoCardBody" key={vehicle.id}>
                            <div className="car2GoCardText">
                                <p>Car Id</p>
                                <span>{vehicle.id}</span>

                                <p>License Plate</p>
                                <span>{vehicle.name}</span>

                                <p>Location</p>
                                <span>{vehicle.address}</span>

                                <p>Car interior</p>
                                <span> {vehicle.interior === "GOOD"
                                    ? <i className="material-icons">thumb_up</i>
                                    : <i className="material-icons">thumb_down</i>}
                                </span>

                                <p>Car exterior</p>
                                <span>{vehicle.exterior === "GOOD"
                                    ? <i className="material-icons">thumb_up</i>
                                    : <i className="material-icons">thumb_down</i>}
                                </span>
                                <p>Engine Type</p>
                                <span>{vehicle.engineType}</span>

                                <p>Fuel</p>
                                <span>{vehicle.fuel}</span>

                                <p>Vin</p>
                                <span>{vehicle.vin}</span>
                            </div>
                        </div>
                    )
                }
            </div>
            {/* ----------Map showing car2Go locations ------------- */}
            <div className="car2GoMap">
                <div className="stickyContainer">
                    <Car2GoMap />
                </div>
            </div>
        </div>
    );
}
