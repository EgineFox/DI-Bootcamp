import './App.css';
import ThemeProvider, { ThemeSwitcher, useTheme } from "./components/ThemeSwitcher";

function AppComponent() {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <h1>Hello, Theme Switcher!</h1>
      <ThemeSwitcher />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppComponent />
    </ThemeProvider>
  );
}

export default App;