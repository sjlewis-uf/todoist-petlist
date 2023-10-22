import React, { createContext, useContext, useState } from 'react';


export const SelectedProviderContext = createContext();
export const SelectedProjectProvider = ({children}) => {
    const [selectedProject, setSelectedProject] = useState('INBOX');

    return (
        <SelectedProjectContext.Provider 
        value={{ selectedProject, setSelectedProject }}>
            {children}
        </SelectedProjectContext.Provider>
    );
};

export const useSelectedProjectValue = () => useContext(SelectedProjectContext);