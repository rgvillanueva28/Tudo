/* eslint-disable import/no-anonymous-default-export */
import { createContext, useState } from "react";

export const Context = createContext();

export default ({ children }) => {
    const [currentCategory, setCurrentCategory] = useState("todo")

   const value = {
        currentCategory,
        setCurrentCategory
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}
