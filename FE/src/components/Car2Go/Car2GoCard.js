import React from 'react';
import "./car2go.css"
// import redTaxi from "../../assets/redCar.png"
// import greenTaxi from "../../assets/greenCar.png"

//Child component of MyTaxi component
const Car2GoCard = ({ car2goData }) => {

    return (
        <div className="car2GoCardContainer">
            {
                car2goData.map(car =>
                    <div className="car2GoCardBody">
                        <div className="car2GoText">
                            <span>Car Id: {car.id}</span>
                            <span>Address: {car.address}</span>
                        </div>
                        <div className="car2GoStateBox">

                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default Car2GoCard;