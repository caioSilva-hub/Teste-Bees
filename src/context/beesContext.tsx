import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface NameProps {
    name: string
    setName:(value:string)=>void
}
interface ProviderProps {
    children:ReactNode
}
const NameContext = createContext({} as NameProps);

const NameContextProvider: React.FC<ProviderProps> = ({ children }) => {
    const [name, setName] = useState('')

    useEffect(() => {
        if (typeof window !== "undefined") {
            const response = window.localStorage.getItem('@User')
            if(response) setName(response)
          }
    }, [])

    return (
        <NameContext.Provider value={{ name, setName }}>
            {children}
        </NameContext.Provider>
    );
};

export const useName = () => {
    const context = useContext(NameContext);
    const { name, setName } = context;
    return { name, setName };
}
export default NameContextProvider;


