import React, { createContext, ReactNode, useContext } from "react";
import { listBreweriesProps, breweriesProps } from '../../src/types/beesModel'
import Breweries from '../../src/services/listBreweries'

interface BreweriesContextProps {
    listBreweries: breweriesProps | any
}
interface ProviderProps {
    children: ReactNode
}

const BreweriesContext = createContext({} as BreweriesContextProps);

const BreweriesContextProvider: React.FC<ProviderProps> = ({ children }) => {
    const listBreweries: listBreweriesProps | undefined = Breweries()
    return (
        <BreweriesContext.Provider value={{ listBreweries }}>
            {children}
        </BreweriesContext.Provider>
    );
};

export const useData = () => {
    const context = useContext(BreweriesContext);
    const { listBreweries } = context;
    return { listBreweries };
}
export default BreweriesContextProvider;


