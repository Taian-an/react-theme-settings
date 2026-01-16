import { useSettings } from "../contexts";

const SettingsPanel = () => {
  const { theme, language, setTheme, setLanguage, resetSettings } = useSettings();

  return (
    <div className="panel">
      <div>
        <button onClick={() => setTheme("light")} disabled={theme === "light"}>Light</button>
        <button onClick={() => setTheme("dark")} disabled={theme === "dark"}>Dark</button>
      </div>
      <div>
        <button onClick={() => setLanguage("en")} disabled={language === "en"}>EN</button>
        <button onClick={() => setLanguage("th")} disabled={language === "th"}>TH</button>
      </div>
      <button onClick={resetSettings} style={{ marginTop: "10px" }}>Reset Settings</button>
    </div>
  );
};
export default SettingsPanel;