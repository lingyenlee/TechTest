import React, { useState, useEffect } from "react";
import Car2GoMap from "./Car2GoMap";
import NavBar from "../NavBar"
import Car2GoCard from "./Car2GoCard"

const Car2Go = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        const response = await fetch("/car2go/vehicles")
        const carData = await response.json();
        setData(carData.placemarks)

    }

    return (
        <div>
            <NavBar />
            <div className="car2GoContainer">
                <Car2GoMap car2goData={data} />
                <Car2GoCard car2goData={data} />
            </div>

        </div>
    )
}

export default Car2Go;

