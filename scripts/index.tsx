import "../assets/style.css"

import {render} from "preact";

import React from "react";
import {SideBar} from "./components/SideBar";

const Portfolio = (): JSX.Element => {
    return (
        <>
            <SideBar/>
            <div className={"w-screen h-screen text-center flex justify-center items-center"}>Content</div>
        </>
    )
}

render(<Portfolio/>, document.body);
