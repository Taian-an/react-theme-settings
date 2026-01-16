// Header.js
const Header = () => {
  const { language } = useSettings();
  const content = {
    en: "Welcome",
    th: "ยินดีต้อนรับ",
  };
  return <header><h1>{content[language]}</h1></header>;
};

// SettingsPanel.js
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

// PreviewCard.js
const PreviewCard = () => {
  const { theme, language } = useSettings();
  const messages = {
    en: "This is your preference preview.",
    th: "นี่คือหน้าตัวอย่างการตั้งค่า",
  };

  return (
    <div className={`card ${theme}`}>
      <p><strong>Theme:</strong> {theme}</p>
      <p><strong>Language:</strong> {language}</p>
      <p>{messages[language]}</p>
    </div>
  );
};