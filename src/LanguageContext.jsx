import { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState("es"); // Default: Spanish

    const toggleLanguage = () => {
        setLanguage((prevLang) => (prevLang === "es" ? "en" : "es"));
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

// Custom hook for easy use
export const useLanguage = () => useContext(LanguageContext);
