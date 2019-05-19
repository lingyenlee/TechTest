import React, { useState, useEffect } from "react";

const car2goBox = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("/car2go/vehicles")
            const data = await response.json();
            setData(data)
        }
        fetchData()
    }, [])
}

export default car2goBox;

// const useFetch = (url) => {
//     const [data, setData] = useState([]);

//     useEffect(() => { fetchData() }, [])

//     async function fetchData() {
//         await axios.get(url).then(result => setData(result.data))

//     }
//     return data;

// }

// const carData = useFetch("/car2go/vehicles")
// console.log(carData)

{/* <ul>
                {carData.placemarks.map(item => (
                    <li key={item.id}>
                        {item.address}
                    </li>
                ))}
            </ul> */}



// const data = useFetch("/car2go/vehicles")
// console.log(data.placemarks)
// const [viewport, setViewport] = useState({
//     latitude: 53.550341,
//     longitude: 10.000654,
//     zoom: 15,
//     width: "100vw",
//     height: "100vh"
// })


// return (
//     <div>

//         {/* {this.data.placemarks.map(({ address }) => <p>{address}</p>)} */}
//     </div>

// )