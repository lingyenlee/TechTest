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
                    <div className="myTaxiCardBody">
                        <div className="myTaxiCardText">
                            <p>{car.state === "ACTIVE" ? "ACTIVE" : "INACTIVE"}</p>
                            <p className="carID">Taxi Id</p>
                            <span>{car.id}</span>
                            <div className="myTaxiStateBox">
                                {/* show green color car if car state is ACTIVE */}
                                {car.state === "ACTIVE" && <img src={greenTaxi} alt="greencar" />}
                                {/* show red color car if car state is INACTIVE*/}
                                {car.state === "INACTIVE" && <img src={redTaxi} alt="redcar" />}

                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
}


export default MyTaxiCard;