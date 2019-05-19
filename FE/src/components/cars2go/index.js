import React, { useState, useEffect } from "react";

const Car2GoBox = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        const response = await fetch("/car2go/vehicles")
        const carData = await response.json();
        setData(carData.placemarks)
        console.log(carData.placemarks)
    }

    return (
        <div>
            {data.map(item =>
                <div>{item.address}</div>
            )}
            This is car2go Page.
        </div>
    )
}

export default Car2GoBox;

