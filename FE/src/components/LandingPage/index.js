import React from "react";
import { Link } from "react-router-dom";
import "./landingPage.css"
import myTaxiLogo from "../../assets/mytaxi_logo.png"
import car2goLogo from "../../assets/car2go_logo.svg"
import MapBox from "../Map/MapBox";

const LandingPage = () => {

    return (
        <div className="container">
        <MapBox/>
            {/* <div className="landing-text">
                <h1>Find your ride</h1>
            </div>
            <div className="row">
                <Link to="/mytaxi" >
                    <div className="logo-container">
                        <img src={myTaxiLogo} alt="Logo of myTaxi" />
                    </div>
                </Link>
                <Link to="/car2go" >
                    <div className="logo-container">
                        <img src={car2goLogo} alt="Logo of car2go" />
                    </div>
                </Link>
            </div> */}
        </div>

    )

}

export default LandingPage;