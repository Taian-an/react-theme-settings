import { useSettings } from "../contexts";

const PreviewCard = () => {
  const { theme, language } = useSettings();
  const message = language === "en" ? "This is your preference preview." : "นี่คือหน้าตัวอย่างการตั้งค่า";

  return (
    <div className={`card ${theme}`}>
      <p>Current Theme: {theme}</p>
      <p>Current Language: {language}</p>
      <p>{message}</p>
    </div>
  );
};
export default PreviewCard;