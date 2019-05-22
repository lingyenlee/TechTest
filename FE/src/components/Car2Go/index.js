import React from "react";
import { NavBar } from "../NavBar"
import { Car2GoCard } from "./Car2GoCard"
import { Car2GoStore } from "./Car2GoStore"

export const Car2GoContainer = () => {
    return (
        <Car2GoStore>
            <NavBar />
            <Car2GoCard />
        </Car2GoStore>
    )
}

