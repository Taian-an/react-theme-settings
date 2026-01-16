import "./App.css";
import { SettingsProvider, useSettings } from "./contexts";
import Header from "./Components/header";
import SettingsPanel from "./Components/settings_panel";
import PreviewCard from "./Components/PreviewCard";

function AppContent() {
  const { theme } = useSettings();
  
  // 這裡根據主題切換最外層的 class
  return (
    <div className={`app-container ${theme}`}>
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