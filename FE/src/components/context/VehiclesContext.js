import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const Context = createContext(null);

export const Provider = props => {

    //get initial values from props
    const {
        vehicles: initialVehicles,
        selectedVehicle: initialSelectedVehicle,
        children
    } = props;

    //use state to keep the values
    const [vehicles, setVehicles] = useState(initialVehicles);
    const [selectedVehicle, setselectedVehicle] = useState(initialSelectedVehicle);

    //make context object

    const vehiclesContext = {
        vehicles, setVehicles,
        selectedVehicle, setselectedVehicle
    };

    //pass value in provider and return
    return <Context.Provider value={vehiclesContext}>{children}</Context.Provider>
}

export const { Consumer } = Context;

Provider.propTypes = {
    vehicles: PropTypes.array,
    selectedVehicle: PropTypes.object
};

Provider.defaultProps = {
    vehicles: [],
    selectedVehicle: {}
};