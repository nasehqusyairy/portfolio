import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "./providers/theme-provider";

export default function ThemeButton() {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return <Button size={"icon"} variant={theme === 'dark' ? 'outline' : 'default'} onClick={toggleTheme}>{theme === 'dark' ? <Sun /> : <Moon />}</Button>
}
