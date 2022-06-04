import "../assets/tailwind.css"
import "../assets/style.scss"

import {render} from "preact";

import React from "react";
import {ConstructionHint} from "./components/ConstructionHint"
import {SideBar} from "./components/SideBar";

const Portfolio = (): JSX.Element => {
    return (
        <>
            <SideBar/>
            <ConstructionHint/>
        </>
    )
}

render(<Portfolio/>, document.body);
