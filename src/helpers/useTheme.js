import { useEffect, useState } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState(localStorage.theme);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList = "";
    root.classList.add(theme);

    localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme, setTheme];
};

export default useTheme;
