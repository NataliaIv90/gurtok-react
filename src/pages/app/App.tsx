import { Header, Main, Footer } from '@pages/index';
import { ThemeProvider, useTheme } from '@/context/ThemeContext';
import './App.css';

export const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

const AppContent = () => {
  const { theme } = useTheme();

  return (
    <div className={theme}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};