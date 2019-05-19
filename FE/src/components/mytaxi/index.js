import React, { useState, useEffect } from "react";
import MapBox from "../Map/MapBox";

const MyTaxiBox = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        const response = await fetch("/mytaxi/vehicles")
        const carData = await response.json()
        setData(carData.poiList)
        console.log(carData)
    }

    return (

        <div>
            <MapBox car2goData={data} />
        </div>
    )
}

export default MyTaxiBox;