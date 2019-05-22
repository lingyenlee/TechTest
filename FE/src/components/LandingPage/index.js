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
                <div className="landingLogoContainer">
                    <Link to="/mytaxi" >
                        <img src={myTaxiLogo} alt="Logo of myTaxi" />
                    </Link>
                </div>
                <div className="landingLogoContainer">
                    <Link to="/car2go" >
                        <img src={car2goLogo} alt="Logo of car2go" />
                    </Link>
                </div>

            </div>
        </div>

    )
}

export default LandingPage;