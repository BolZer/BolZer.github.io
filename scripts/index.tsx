import "../assets/style.css"

import {render} from "preact";

import React from "react";
import {DesktopSideBar} from "./components/DesktopSideBar";
import {Section} from "./components/Section";
import {WorkExample} from "./components/WorkExample";
import {MobileNavBar} from "./components/MobileNavBar";
import {LocationProvider} from "./provider/LocationProvider";

const Portfolio = (): JSX.Element => {
    return (
        <>
            <LocationProvider>
                <MobileNavBar/>
                <DesktopSideBar/>
                <div className={"portfolio"}>
                    <Section id={"home"} title={"Welcome"}>
                        <span>Home</span>
                    </Section>
                    <Section id={"cv"} title={"Circum Vitae"}>
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
            </LocationProvider>
        </>
    )
}

render(<Portfolio/>, document.body);
