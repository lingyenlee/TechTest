import React from "react";
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Link } from "react-router-dom";
import myTaxiLogo from "../../assets/mytaxi_logo.png"
import car2goLogo from "../../assets/car2go_logo.svg"
import "./navBar.css"


const NavBar = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit">
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
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar;