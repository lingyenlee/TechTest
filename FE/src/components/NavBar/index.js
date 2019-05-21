import React from "react";
import { Link } from "react-router-dom";
import myTaxiLogo from "../../assets/mytaxi_logo.png"
import car2goLogo from "../../assets/car2go_logo.svg"
import "./navBar.css"


const NavBar = () => {
    return (
        // <div className="navBarContainer">
        <div className="navBar">
            <div className="row">
                <Link to="/mytaxi" >
                    <div className="navLogoContainer">
                        <img src={myTaxiLogo} alt="Logo of myTaxi" />
                    </div>
                </Link>
                <Link to="/car2go" >
                    <div className="navLogoContainer">
                        <img src={car2goLogo} alt="Logo of car2go" />
                    </div>
                </Link>
            </div>
        </div>
        // </div>


    )
}

export default NavBar;