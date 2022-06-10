import React from "react"
import {Avatar} from "./Avatar";
import {LocationContext} from "../provider/LocationProvider";

export const MobileNavBar = (): JSX.Element => {
    const locationContext = React.useContext(LocationContext);

    const [state, setState] = React.useState<boolean>(false)

    const closeMenu = (): void => {
        setState(false);
    }

    return (
        <>
            <div className={"navbar"}>
                <a href={"#home"}>
                    <Avatar/>
                </a>
                <button className={"navbar-icon"} onClick={() => {
                    setState(!state)
                }}>
                    {
                        !state
                            ? <i className={"fas fa-bars fa-fw"}></i>
                            : <i className={"fas fa-times fa-fw"}></i>
                    }
                </button>
            </div>
            <div className={`navbar-links ${!state ? "hidden" : ""}`}>
                <a href="#home"
                    className={`${locationContext.currentLocation === "home" ? "active" : ""}`}
                    onClick={() => {
                        closeMenu()
                    }}
                >
                    Home
                </a>
                <a href="#cv"
                    className={`${locationContext.currentLocation === "cv" ? "active" : ""}`}
                    onClick={() => {
                        closeMenu()
                    }}
                >
                    Circum Vitae
                </a>
                <a href="#work"
                    className={`${locationContext.currentLocation === "work" ? "active" : ""}`}
                    onClick={() => {
                        closeMenu()
                    }}
                >
                    Work Examples
                </a>
                <a href="#contact"
                    className={`${locationContext.currentLocation === "contact" ? "active" : ""}`}
                    onClick={() => {
                        closeMenu()
                    }}
                >
                    Contact
                </a>
            </div>
        </>
    )
}