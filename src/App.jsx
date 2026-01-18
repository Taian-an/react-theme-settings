import "./App.css";
import { SettingsProvider, useSettings } from "./contexts";
import Header from "./Components/header"; 
import SettingsPanel from "./Components/settings_panel"; 
import PreviewCard from "./Components/PreviewCard";

function AppContent() {
  const { theme } = useSettings();
  
  // 確保 theme 有值，避免 className 變成 undefined
  return (
    <div className={`app-container ${theme || 'light'}`}>
      <Header />
      <SettingsPanel />
      <PreviewCard />
    </div>
  );
}

function App() {
  return (
    <SettingsProvider>
      <AppContent />
    </SettingsProvider>
  );
}

export default App;