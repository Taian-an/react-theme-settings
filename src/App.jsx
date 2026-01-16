import "./App.css";
import { SettingsProvider, useSettings } from "./contexts"; // 確保路徑指向你的 contexts.jsx
import Header from "./Components/header";
import SettingsPanel from "./components/SettingsPanel";
import PreviewCard from "./Components/PreviewCard";

function AppContent() {
  const { theme } = useSettings();
  
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