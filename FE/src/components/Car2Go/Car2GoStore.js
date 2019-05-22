import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

//fetch data from backend API and store in context 
export const Car2GoContext = React.createContext(null)

export const Car2GoStore = ({ children }) => {

    // return useState hook with current and updated state
    const [vehicles, setVehicles] = useState([])

    //call fetch function by useEffect hook
    useEffect(() => {
        fetchData()
    }, [])

    // function used to fetch data from server API route
    async function fetchData() {
        const response = await fetch("/car2go/vehicles")
        const carData = await response.json();
        setVehicles(carData.placemarks)
    }

    return (
        <Car2GoContext.Provider value={[vehicles, setVehicles]}>
            {children}
        </Car2GoContext.Provider>
    )
}


Car2GoStore.propTypes = {
    vehicles: PropTypes.array,
    setVehicles: PropTypes.object
};