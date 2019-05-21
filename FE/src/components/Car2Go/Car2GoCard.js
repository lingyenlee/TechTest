import React from 'react';
import "./car2go.css";

//Child component of MyTaxi component
const Car2GoCard = ({ car2goData }) => {

    return (
        <div className="car2GoCardContainer">
            {
                car2goData.map(car =>
                    <div className="car2GoCardBody" key={car.id}>
                        <div className="car2GoCardText">
                            <p>Car Id</p>
                            <span>{car.id}</span>

                            <p>License Plate</p>
                            <span>{car.name}</span>

                            <p>Location</p>
                            <span>{car.address}</span>

                            <p>Car interior</p>
                            <span> {car.interior === "GOOD"
                                ? <i className="material-icons">thumb_up</i>
                                : <i className="material-icons">thumb_down</i>}
                            </span>

                            <p>Car exterior</p>
                            <span>{car.exterior === "GOOD"
                                ? <i className="material-icons">thumb_up</i>
                                : <i className="material-icons">thumb_down</i>}
                            </span>
                            <p>Engine Type</p>
                            <span>{car.engineType}</span>

                            <p>Fuel</p>
                            <span>{car.fuel}</span>

                            <p>Vin</p>
                            <span>{car.vin}</span>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default Car2GoCard;