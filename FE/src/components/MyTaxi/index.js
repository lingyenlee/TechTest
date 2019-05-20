import React, { useState, useEffect } from "react";
import MyTaxiMap from "./MyTaxiMap";
import NavBar from "../NavBar"
import MyTaxiCard from "./MyTaxiCard"

//This is the main parent component with 3 child components
const MyTaxi = () => {

    // return useState hook with current and updated state
    const [data, setData] = useState([])

    //call fetch function by useEffect hook
    useEffect(() => {
        fetchData()
    }, [])

    //function used to fetch data from server API route
    async function fetchData() {
        const response = await fetch("/mytaxi/vehicles")
        const carData = await response.json()
        setData(carData.poiList)
    }

    return (
        <div>
            <NavBar />
            <div className="myTaxiContainer">
                <MyTaxiMap myTaxiData={data} />
                <MyTaxiCard myTaxiData={data} />
            </div>

        </div>
    )
}

export default MyTaxi;