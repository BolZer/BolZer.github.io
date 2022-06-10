import React from "react";

interface ILocationProviderState {
    currentLocation: string;
    previousLocation: string | null;
}

const initialState: ILocationProviderState = {
    currentLocation: "home",
    previousLocation: null,
}

export const LocationContext = React.createContext<ILocationProviderState>(initialState)

export const LocationProvider = ({children}: {children: JSX.Element | JSX.Element[]}): JSX.Element => {

    React.useEffect(() => {
        window.addEventListener("hashchange", (event) => {
            const hash = event.newURL.split("#").slice(-1).pop();

            if (!hash) {
                return;
            }

            setState({
                currentLocation: event.newURL.split("#").slice(-1).pop() as string,
                previousLocation: state.currentLocation,
            });
        })
    }, [])

    const [state, setState] = React.useState<ILocationProviderState>({
        currentLocation: "home",
        previousLocation: null,
    });

    return <LocationContext.Provider value={state}>
        {children}
    </LocationContext.Provider>
}