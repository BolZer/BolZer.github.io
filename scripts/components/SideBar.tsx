import React from "react";

export const SideBar = (): JSX.Element => {
    return (
        <div className={"sidebar"}>
            <SideBarButton icon={"fas fa-file fa-fw"} text={"1"}/>
            <SideBarButton icon={"fas fa-file fa-fw"} text={"2"}/>
            <SideBarButton icon={"fas fa-file fa-fw"} text={"3"}/>
        </div>
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
    )
}