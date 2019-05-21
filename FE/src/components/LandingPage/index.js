import React from "react";
import { Link } from "react-router-dom";
import "./landingPage.css"
import myTaxiLogo from "../../assets/mytaxi_logo.png"
import car2goLogo from "../../assets/car2go_logo.svg"


const LandingPage = () => {

    return (
        <div className="landingPageContainer">
            <div className="landingText">
                <span>Find your ride</span>
            </div>
            <div className="landingRow">
                <Link to="/mytaxi" >
                    <div className="landingLogoContainer">
                        <img src={myTaxiLogo} alt="Logo of myTaxi" />
                    </div>
                </Link>
                <Link to="/car2go" >
                    <div className="landingLogoContainer">
                        <img src={car2goLogo} alt="Logo of car2go" />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default LandingPage;