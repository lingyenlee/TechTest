import React, { useState, useEffect } from "react";
import { MyTaxiMap } from "./MyTaxiMap";
import NavBar from "../NavBar"
import { MyTaxiCard } from "./MyTaxiCard"

export const MyTaxiContext = React.createContext(null)

//This is the main parent component with 3 child components
export const MyTaxi = () => {

    // return useState hook with current and updated state
    const [vehicles, setVehicles] = useState([])

    //call fetch function by useEffect hook
    useEffect(() => {
        fetchData()
    }, [])

    // //function used to fetch data from server API route
    async function fetchData() {
        const response = await fetch("/mytaxi/vehicles")
        const carData = await response.json()
        setVehicles(carData.poiList)
    }

    return (
        <div>
            <MyTaxiContext.Provider value={[vehicles]}>
                <NavBar />
                <div className="myTaxiContainer">
                    {/* <MyTaxiMap myTaxiData={data} /> */}
                    <MyTaxiCard />

                </div>
            </MyTaxiContext.Provider>
        </div>
    )
}