import "../assets/style.css"

import {render} from "preact";

import React from "react";
import {SideBar} from "./components/SideBar";
import {Section} from "./components/Section";
import {WorkExample} from "./components/WorkExample";

const Portfolio = (): JSX.Element => {
    return (
        <>
            <SideBar/>
            <Section id={"home"} title={"Welcome"}>
                <span>Home</span>
            </Section>
            <Section id={"cv"} title={"CV"}>
                <span>CV</span>
            </Section>
            <Section id={"work"} title={"Work Examples"}>
                <div className="container mx-auto">
                    <div className="grid grid-cols-3 gap-3">
                        <WorkExample/>
                        <WorkExample/>
                        <WorkExample/>
                        <WorkExample/>
                        <WorkExample/>
                        <WorkExample/>
                        <WorkExample/>
                    </div>
                </div>
            </Section>
            <Section id={"contact"} title={"Contact Me"}>
                <div className="container mx-auto px-8">
                    <span>Contact</span>
                </div>
            </Section>
        </>
    )
}

render(<Portfolio/>, document.body);
