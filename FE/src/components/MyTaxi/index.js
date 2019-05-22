import React, { useState, useEffect } from 'react';
import "./myTaxi.css"
import { MyTaxiCard } from "./MyTaxiCard"
import { VehicleStateSelect } from "./MyTaxiFilter"
import { NavBar } from "../NavBar"
import { MyTaxiMap } from "./MyTaxiMap";

//MyTaxiContainer Parent component - has 3 child components
export const MyTaxiContainer = () => {

    //define initial and update states
    const [vehicles, setVehicles] = useState([]);
    const [selectedVehicles, setSelectedVehicles] = useState([])


    //call fetch function by useEffect hook
    useEffect(() => {
        fetchData()
    }, [])

    //function used to fetch data from server API route
    async function fetchData() {
        const response = await fetch("/mytaxi/vehicles")
        const carData = await response.json()
        setVehicles(carData.poiList)
    }

    //function for handling "active" and "inactive" filter
    const stateSelectHandler = e => {
        e.preventDefault();
        const vehicleState = e.target.value;
        const filterVehicles = vehicles.filter(vehicle => vehicle.state === vehicleState)
        setSelectedVehicles(filterVehicles)
    }

    return (
        <div>
            <NavBar />
            <div className="myTaxiCardContainer" >
                {/* ----left section showing individual myTaxi data ----------- */}
                <div className="myTaxiCard">
                    {selectedVehicles.length === 0
                        ? <MyTaxiCard vehicles={vehicles} />
                        : <MyTaxiCard vehicles={selectedVehicles} />}
                </div>
                {/* ----------Map showing myTaxi locations ------------- */}
                <div className="myTaxiMapBox">
                    <div className="myTaxiSelect">
                        <VehicleStateSelect
                            onStateSelect={stateSelectHandler} />
                    </div>
                    <div>
                        {selectedVehicles.length === 0
                            ? <MyTaxiMap vehicles={vehicles} />
                            : <MyTaxiMap vehicles={selectedVehicles} />}
                    </div>


                </div>
            </div>
        </div>
    );
}