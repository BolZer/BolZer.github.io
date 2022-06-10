import "../assets/style.css"

import {render} from "preact";

import React from "react";
import {DesktopSideBar} from "./components/DesktopSideBar";
import {Section} from "./components/Section";
import {WorkExample} from "./components/WorkExample";
import {MobileNavBar} from "./components/MobileNavBar";

const Portfolio = (): JSX.Element => {
    return (
        <>
            <MobileNavBar/>
            <DesktopSideBar/>
            <div className={"container mx-auto"}>
                <Section id={"home"} title={"Welcome"}>
                    <span>Home</span>
                </Section>
                <Section id={"cv"} title={"CV"}>
                    <span>CV</span>
                </Section>
                <Section id={"work"} title={"Work Examples"}>
                    <div className={"work-example-container"}>
                        <WorkExample/>
                        <WorkExample/>
                        <WorkExample/>
                        <WorkExample/>
                        <WorkExample/>
                        <WorkExample/>
                        <WorkExample/>
                    </div>
                </Section>
                <Section id={"contact"} title={"Contact Me"}>
                    <div className="container mx-auto px-8">
                        <span>Contact</span>
                    </div>
                </Section>
            </div>
        </>
    )
}

render(<Portfolio/>, document.body);
