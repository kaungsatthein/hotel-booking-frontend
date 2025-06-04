import { ThemeProvider } from "next-themes";
import LandingPage from "../components/LandingPage";

export default function Home() {
  return (
    <div>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <LandingPage />
      </ThemeProvider>
    </div>
  );
}
