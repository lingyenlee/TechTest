import React from "react";
import { Link } from "react-router-dom";
import myTaxiLogo from "../../assets/mytaxi_logo.png"
import car2goLogo from "../../assets/car2go_logo.svg"
import "./navBar.css"

export const NavBar = () => {
    return (
        <div className="navBar">
            <div className="row">
                <div className="navLogoContainer">
                    <div className="navLogo">
                        <Link to="/mytaxi" >
                            <img src={myTaxiLogo} alt="Logo of myTaxi" />
                        </Link>
                    </div>
                    <div className="navLogo">
                        <Link to="/car2go" >
                            <img src={car2goLogo} alt="Logo of car2go" />
                        </Link>
                    </div>
                </div>
                <div className="homeLogo">
                    <Link to="/" >
                        <i className="material-icons homeLink">
                            home
                    </i>
                    </Link>
                </div>
            </div>
        </div>
    )
}
