import React from "react";

export const SideBar = (): JSX.Element => {
    return (
        <div className={"sidebar"}>
            <div className={"sidebar-avatar-container"}>
                <div className={"sidebar-avatar-text"}>JN</div>
            </div>
            <div className={"sidebar-button-container"}>
                <SideBarLink icon={"fa-solid fa-house fa-fw"} text={"Home"}/>
                <SideBarLink icon={"fa-solid fa-user fa-fw"} text={"Circum Vitae"}/>
                <SideBarLink icon={"fa-solid fa-flask-vial fa-fw"} text={"Work Examples"}/>
                <SideBarLink icon={"fa-solid fa-envelope fa-fw"} text={"Contact me"}/>
            </div>
            <div className={"sidebar-social-container"}>
                <SideBarSocialLink icon={"fab fa-linkedin-in fa-fw"} text={"Visit me @ LinkedIn"}/>
                <SideBarSocialLink icon={"fab fa-github fa-fw"} text={"Visit me @ Github"}/>
            </div>
        </div>
    );
}

export const SideBarLink = ({icon, text}: {icon: string, text: string}): JSX.Element => {
    return (
        <a className={"sidebar-icon group"} href={'#'}>
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