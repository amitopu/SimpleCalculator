import { createContext, useContext, useState } from "react";

const DataContext = createContext(null);
// eslint-disable-next-line react/prop-types
export default function DataContextProvider({ children }) {
    const [numString, setNumString] = useState("");
    const data = { numString: numString, updateNumString: setNumString };
    return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const useDataContext = () => {
    const context = useContext(DataContext);
    return context;
};
