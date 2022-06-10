import React from "react"
import {Avatar} from "./Avatar";

export const MobileNavBar = (): JSX.Element => {
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
            <div className={`navbar-links ${!state ? 'hidden' : ''}`}>
                <a href="#home" onClick={() => {closeMenu()}}>Home</a>
                <a href="#cv" onClick={() => {closeMenu()}}>Circum Vitae</a>
                <a href="#work" onClick={() => {closeMenu()}}>Work Examples</a>
                <a href="#contact" onClick={() => {closeMenu()}}>Contact</a>
            </div>
        </>
    )
}