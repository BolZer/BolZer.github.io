import React from "react";
import {Avatar} from "./Avatar";
import {LocationContext} from "../provider/LocationProvider";

export const DesktopSideBar = (): JSX.Element => {
    const locationContext = React.useContext(LocationContext);

    return (
        <div className={"sidebar"}>
            <Avatar/>
            <div className={"sidebar-button-container"}>
                <SideBarLink icon={"fa-solid fa-house fa-fw"}
                             text={"Home"}
                             href={"#home"}
                             active={locationContext.currentLocation === "home"}
                />
                <SideBarLink icon={"fa-solid fa-user fa-fw"}
                             text={"Circum Vitae"}
                             href={"#cv"}
                             active={locationContext.currentLocation === "cv"}
                />
                <SideBarLink icon={"fa-solid fa-flask-vial fa-fw"}
                             text={"Work Examples"}
                             href={"#work"}
                             active={locationContext.currentLocation === "work"}
                />
                <SideBarLink icon={"fa-solid fa-envelope fa-fw"}
                             text={"Contact me"}
                             href={"#contact"}
                             active={locationContext.currentLocation === "contact"}
                />
            </div>
            <div className={"sidebar-social-container"}>
                <SideBarSocialLink icon={"fab fa-linkedin-in fa-fw"} text={"Visit me @ LinkedIn"}/>
                <SideBarSocialLink icon={"fab fa-github fa-fw"} text={"Visit me @ Github"}/>
            </div>
        </div>
    );
}

export const SideBarLink = ({icon, text, href, active}: {icon: string, text: string , href: string, active: boolean}): JSX.Element => {
    return (
        <a className={`sidebar-icon group ${active ? 'active' : ''}`} href={href}>
            <i className={icon}/>

            <span className={"sidebar-label group-hover:scale-100"}>
                {text}
            </span>
        </a>
    );
}

export const SideBarSocialLink = ({icon, text}: {icon: string, text: string}): JSX.Element => {
    return (
        <a className={"sidebar-social-icon group"} href={'#'}>
            <i className={icon}/>

            <span className={"sidebar-label group-hover:scale-100"}>
                {text}
            </span>
        </a>
    );
}