import React from "react";

export const VehicleStateSelect = (props) => {

    return (
        <select
            onChange={props.onStateSelect}
            value={props.selectedVehicles}
        >
            <option>Choose availability</option>
            <option>ACTIVE</option>
            <option>INACTIVE</option>
        </select>
    )
}
