import "./App.css"; // Include logic for .light and .dark classes

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

export default function App() {
  return (
    <SettingsProvider>
      <AppContent />
    </SettingsProvider>
  );
}