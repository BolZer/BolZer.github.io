import React from "react"

interface ISectionProps {
    title: string,
    id: string,
    children: JSX.Element | JSX.Element[],
}

export const Section = ({id, children, title}: ISectionProps): JSX.Element => {
    return(
        <section id={id}>
            <h1 className={"section-title"}>{title}</h1>
            <div>
                {children}
            </div>
        </section>
    )
}