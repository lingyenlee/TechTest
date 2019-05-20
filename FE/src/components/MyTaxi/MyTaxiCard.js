import React from 'react';
import "./myTaxi.css"
import redTaxi from "../../assets/redCar.png"
import greenTaxi from "../../assets/greenCar.png"

//Child component of MyTaxi component
const MyTaxiCard = ({ myTaxiData }) => {

    return (
        <div className="cardContainer">
            {
                myTaxiData.map(car =>
                    <div className="cardBody">
                        <div className="carID">
                            <span>Taxi Id: {car.id}</span>
                        </div>
                        <div className="carStateBox">
                            {/* show green color car if car state is ACTIVE */}
                            {car.state === "ACTIVE" && <img src={greenTaxi} alt="greencar" />}
                            {/* show red color car if car state is INACTIVE*/}
                            {car.state === "INACTIVE" && <img src={redTaxi} alt="redcar" />}
                        </div>
                    </div>
                )
            }
        </div>
    );
}


export default MyTaxiCard;