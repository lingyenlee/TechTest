import React, { useContext } from 'react';
import "./myTaxi.css"
import redTaxi from "../../assets/redCar.png"
import greenTaxi from "../../assets/greenCar.png"
import { MyTaxiContext } from "./index"


//Child component of MyTaxi component
export const MyTaxiCard = () => {

    const [vehicles, setVehicles] = useContext(MyTaxiContext)

    return (
        <div className="cardContainer" >

            {
                vehicles.map(vehicle =>
                    <div className="myTaxiCardBody" key={vehicle.id} >
                        <div className="myTaxiCardText" >
                            <p>{vehicle.state === "ACTIVE" ? "ACTIVE" : "INACTIVE"}</p>
                            <p className="carID">Taxi Id</p>
                            <span>{vehicle.id}</span>
                            <div className="myTaxiStateBox" >
                                {/* show green color car if car state is ACTIVE */}
                                {vehicle.state === "ACTIVE" && <img src={greenTaxi} alt="greencar" />}
                                {/* show red color car if car state is INACTIVE*/}
                                {vehicle.state === "INACTIVE" && <img src={redTaxi} alt="redcar" />}

                            </div>
                        </div>

                    </div>
                )
            }

        </div>
    );
}