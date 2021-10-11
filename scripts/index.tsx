import "../assets/tailwind.css"
import "../assets/style.scss"

import {render} from "preact";

import React from "react";
import {ConstructionHint} from "./components/constructionHint"

const Portfolio = (): JSX.Element => {
    return (
        <>
            <ConstructionHint/>
        </>
    )
}

render(<Portfolio/>, document.body);
