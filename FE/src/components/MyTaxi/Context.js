import React from "react";

const initialState = {}

export const myTaxiContext = React.createContext(initialState);

export const myTaxiProvider = (props) => {
    return (
        <myTaxiContext.Provider value={initialState}>
            {props.children}
        </myTaxiContext.Provider>
    )
}

