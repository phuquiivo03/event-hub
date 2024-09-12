import { createContext } from "react";

export interface ContextProps {
    activeBtn: number,
    setActiveBtn: (index: number) => void,
    children: React.ReactNode
}

export const AppContext = createContext<ContextProps | undefined>(undefined);
function AppProvider(props: ContextProps) {
    return ( <AppContext.Provider value={props}>
        {props.children}
    </AppContext.Provider> );
}

export default AppProvider;