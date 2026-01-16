import React, { createContext, useContext, useState, useEffect } from "react";

const SettingsContext = createContext();

const DEFAULTS = { theme: "light", language: "en" };

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem("app-settings");
    return saved ? JSON.parse(saved) : DEFAULTS;
  });

  // Persist to localStorage whenever settings change
  useEffect(() => {
    localStorage.setItem("app-settings", JSON.stringify(settings));
  }, [settings]);

  const setTheme = (theme) => setSettings((s) => ({ ...s, theme }));
  const setLanguage = (language) => setSettings((s) => ({ ...s, language }));
  const resetSettings = () => setSettings(DEFAULTS);

  return (
    <SettingsContext.Provider 
      value={{ ...settings, setTheme, setLanguage, resetSettings }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);