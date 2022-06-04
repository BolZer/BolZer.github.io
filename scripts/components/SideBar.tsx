import React from "react";
import Avatar from "../../assets/avatar.jpg";


export const SideBar = (): JSX.Element => {
    return (
        <div className={"sidebar"}>
            <div className={"sidebar-avatar-container"}>
                <SideBarAvatar/>
                <div className={"sidebar-avatar-text"}>JN</div>
            </div>
            <div className={"sidebar-button-container"}>
                <SideBarButton icon={"fa-solid fa-house fa-fw"} text={"Home"}/>
                <SideBarButton icon={"fa-solid fa-user fa-fw"} text={"Circum Vitae"}/>
                <SideBarButton icon={"fa-solid fa-flask-vial fa-fw"} text={"Work Examples"}/>
            </div>
            <div className={"sidebar-social-container"}>
                <SideBarButton icon={"fa-solid fa-envelope fa-fw"} text={"Contact me"}/>
            </div>
        </div>
    );
}

export const SideBarAvatar = (): JSX.Element => {
    return (
        <div className={"sidebar-avatar"}  style={{backgroundImage: `url("${Avatar}")`}}/>
    );
}

export const SideBarButton = ({icon, text}: {icon: string, text: string}): JSX.Element => {
    return (
        <button className={"sidebar-icon group"}>
            <i className={icon}/>

            <span className={"sidebar-label group-hover:scale-100"}>
                {text}
            </span>
        </button>
    );
}