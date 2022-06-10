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
    const [state, setState] = React.useState<ILocationProviderState>({
        currentLocation: window.location.hash !== "" ? window.location.hash.substring(1) : "home",
        previousLocation: null,
    });

    React.useEffect(() => {
        window.addEventListener("hashchange", changeLocationOnHashChange)

        return () => {
            window.removeEventListener("hashchange", changeLocationOnHashChange)
        }
    }, [])

    const changeLocationOnHashChange = (event: HashChangeEvent): void  => {
        const hash = event.newURL.split("#").slice(-1).pop();

        if (!hash) {
            return;
        }

        setState({
            currentLocation: event.newURL.split("#").slice(-1).pop() as string,
            previousLocation: state.currentLocation,
        });
    }

    return <LocationContext.Provider value={state}>
        {children}
    </LocationContext.Provider>
}