import React, { useState, useEffect } from "react";
// import ReactMapGL, { Marker } from "react-map-gl";
import axios from "axios";

// class MapBox extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             data: []
//         }
//     }
//     componentDidMount() {
//         axios.get("/car2go/vehicles").then(res => console.log(res.data))
//     }
//     render() {
//         return (
//             <div>Hello</div>
//         )
//     }
// }
const MapBox = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios("/car2go/vehicles")
            setData(result.data.placemarks)
        };
        fetchData()
    }, [])

    // const [viewport, setViewport] = useState({
    //     latitude: 53.550341,
    //     longitude: 10.000654,
    //     zoom: 15,
    //     width: "100vw",
    //     height: "100vh"
    // })
    console.log(data)
    return (
        <ul>
            {data.map(({ address, id, coordinates }) => (
                <li key={id}>
                    <p>{address}</p>
                    <p>{coordinates[0]}</p>
                </li>
            ))}
        </ul>

    )
}

export default MapBox;


