import React, { useState, useEffect } from 'react';
import "./myTaxi.css"
import { MyTaxiCard } from "./MyTaxiCard"
import { NavBar } from "../NavBar"
import { MyTaxiMap } from "./MyTaxiMap";
import { SelectVehicle } from '../SelectVehicle';
import axios from "axios"

//MyTaxiContainer Parent component - has 3 child components
export const MyTaxiContainer = () => {

    //define initial and update states
    const [vehicles, setVehicles] = useState([]);
    const [selected, setSelected] = useState([])
    const [isLoading, setIsLoading] = useState(false);

    //create options for select menu
    const options = ["ACTIVE", "INACTIVE"]

    //call fetch function by useEffect hook
    useEffect(() => {
        fetchData()
    }, [])

    //function used to fetch data from server API route
    async function fetchData() {
        setIsLoading(true)
        try {
            let result = await axios.get("/mytaxi/vehicles")
            setVehicles(result.data.poiList)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    //function for handling "active" and "inactive" filter
    const stateSelectHandler = e => {
        e.preventDefault();
        const vehicleState = e.target.value;
        const filterVehicles = vehicles.filter(vehicle => vehicle.state === vehicleState)
        setSelected(filterVehicles)
    }

    let content = <p> Loading data.... </p>

    if (!isLoading) {
        content = (
            <div>
                <NavBar />
                <div className="myTaxiCardContainer" >
                    {/* ----left section showing individual myTaxi data ----------- */}
                    <div className="myTaxiCard">
                        {selected.length === 0
                            ? <MyTaxiCard vehicles={vehicles} />
                            : <MyTaxiCard vehicles={selected} />}
                    </div>
                    <div className="myTaxiMapBox">
                        {/* --------- dropdown menu ------------- */}
                        <div className="myTaxiSelect">
                            <SelectVehicle
                                title={"Availability Status"}
                                placeholder={"Choose"}
                                options={options}
                                onChangeSelect={stateSelectHandler} />
                        </div>
                        {/* ----------Map showing myTaxi locations ------------- */}
                        <div className="myTaxiMap">
                            {selected.length === 0
                                ? <MyTaxiMap vehicles={vehicles} />
                                : <MyTaxiMap vehicles={selected} />}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return content;
}