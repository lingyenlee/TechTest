import React, { useState, useEffect } from 'react';
import "./car2go.css"
import { NavBar } from "../NavBar"
import { Car2GoCard } from "./Car2GoCard";
import { SelectVehicle } from '../SelectVehicle';
import { Car2GoMap } from "./Car2GoMap"
import axios from "axios"

//MyTaxiContainer Parent component - has 3 child components
export const Car2GoContainer = () => {

    //define initial and update states
    const [vehicles, setVehicles] = useState([]);
    const [selected, setSelected] = useState([])
    const [isLoading, setIsLoading] = useState(false);

    //create options for select menu
    const options = ["GOOD", "UNACCEPTABLE"]

    //call fetch function by useEffect hook
    useEffect(() => {
        fetchData()
    }, [])

    //function used to fetch data from backend server API route
    async function fetchData() {
        setIsLoading(true)
        try {
            let result = await axios.get("/car2go/vehicles")
            setVehicles(result.data.placemarks)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    //function for handling exterior and interior filter
    const exteriorSelectHandler = e => {
        e.preventDefault();
        const vehicleCondition = e.target.value;

        const filterVehicles = vehicles.filter(vehicle => vehicle.exterior === vehicleCondition)
        setSelected(filterVehicles)
    }

    const interiorSelectHandler = e => {
        e.preventDefault();
        const vehicleCondition = e.target.value;
        const filterVehicles = vehicles.filter(vehicle => vehicle.interior === vehicleCondition)
        setSelected(filterVehicles)
    }

    let content = <p> Loading data.... </p>

    if (!isLoading) {
        content = (
            <div>
                <NavBar />
                <div className="car2GoCardContainer" >
                    {/* ----left section showing individual car2go data ----------- */}
                    <div className="car2GoCard">
                        {selected.length === 0
                            ? <Car2GoCard vehicles={vehicles} />
                            : <Car2GoCard vehicles={selected} />}
                    </div>
                    <div className="myTaxiCard">
                    </div>
                    <div className="car2GoMapBox">
                        {/* --------- dropdown menu ------------- */}
                        <div className="car2GoSelect">
                            <SelectVehicle
                                title={"Interior Condition"}
                                placeholder={"Choose"}
                                options={options}
                                onChangeSelect={interiorSelectHandler}
                            >
                            </SelectVehicle>
                            <SelectVehicle
                                title={"Exterior Condition"}
                                placeholder={"Choose"}
                                options={options}
                                onChangeSelect={exteriorSelectHandler}
                            >
                            </SelectVehicle>
                        </div>
                        {/* ----------Map showing car2Go locations ------------- */}
                        <div className="car2GoMap">
                            <div className="myTaxiMap">
                                {selected.length === 0
                                    ? <Car2GoMap vehicles={vehicles} />
                                    : <Car2GoMap vehicles={selected} />}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
    return content;
}