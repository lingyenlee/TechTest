// import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";

// //fetch data from backend API and store in context 
// export const MyTaxiContext = React.createContext(null)

// export const MyTaxiStore = ({ children }) => {

//     // return useState hook with current and updated state
//     const [vehicles, setVehicles] = useState([])

//     //call fetch function by useEffect hook
//     useEffect(() => {
//         fetchData()
//     }, [])

//     //function used to fetch data from server API route
//     async function fetchData() {
//         const response = await fetch("/mytaxi/vehicles")
//         const carData = await response.json()
//         setVehicles(carData.poiList)
//         console.log(carData.poiList)
//     }

//     return (
//         <MyTaxiContext.Provider value={[vehicles, setVehicles]}>
//             {children}
//         </MyTaxiContext.Provider>
//     )
// }

// MyTaxiStore.propTypes = {
//     vehicles: PropTypes.array,
//     setVehicles: PropTypes.object
// };
