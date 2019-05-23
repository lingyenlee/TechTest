import React from "react";

export const SelectVehicle = (props) => {

    return (
        <select
            onChange={props.onChangeSelect}
            value={props.selectedVehicles}
        >
            <option value=""> {props.placeholder}</option>
            {props.options.map((item) =>
                <option
                    key={item}
                    value={item}
                >{item}</option>)}
        </select>
    )
}