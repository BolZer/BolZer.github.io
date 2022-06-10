import React from "react";
import {Avatar} from "./Avatar";

export const DesktopSideBar = (): JSX.Element => {
    return (
        <div className={"sidebar"}>
            <Avatar/>
            <div className={"sidebar-button-container"}>
                <SideBarLink icon={"fa-solid fa-house fa-fw"} text={"Home"} href={"#home"}/>
                <SideBarLink icon={"fa-solid fa-user fa-fw"} text={"Circum Vitae"} href={"#cv"}/>
                <SideBarLink icon={"fa-solid fa-flask-vial fa-fw"} text={"Work Examples"} href={"#work"}/>
                <SideBarLink icon={"fa-solid fa-envelope fa-fw"} text={"Contact me"} href={"#contact"}/>
            </div>
            <div className={"sidebar-social-container"}>
                <SideBarSocialLink icon={"fab fa-linkedin-in fa-fw"} text={"Visit me @ LinkedIn"}/>
                <SideBarSocialLink icon={"fab fa-github fa-fw"} text={"Visit me @ Github"}/>
            </div>
        </div>
    );
}

export const SideBarLink = ({icon, text, href}: {icon: string, text: string , href: string}): JSX.Element => {
    return (
        <a className={"sidebar-icon group"} href={href}>
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