import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "spongebob" | "doraemon";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: (newTheme: Theme) => void;
  colors: {
    background: string;
    cardBackground: string;
    text: string;
    textSecondary: string;
    border: string;
    primary: string;
    userBubble: string;
    botBubble: string;
    userText: string;
    botText: string;
    inputBackground: string;
    headerBackground: string;
    pinnedBackground: string;
    pinnedIconColor: string;
  };
  fonts: {
    regular: string;
    bold: string;
  };
  borderRadius: {
    small: number;
    medium: number;
    large: number;
  };
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    loadTheme();
  }, []);

  const loadTheme = async () => {
    const savedTheme = await AsyncStorage.getItem("appTheme");
    if (savedTheme === "dark" || savedTheme === "light" || savedTheme === "spongebob" || savedTheme === "doraemon") {
      setTheme(savedTheme);
    }
  };

  const toggleTheme = async (newTheme: Theme) => {
    setTheme(newTheme);
    await AsyncStorage.setItem("appTheme", newTheme);
  };

  const colors =
    theme === "dark"
      ? {
          background: "#000000",
          cardBackground: "#1C1C1E",
          text: "#FFFFFF",
          textSecondary: "#8E8E93",
          border: "#38383A",
          primary: "#0A84FF",
          userBubble: "#0A84FF",
          botBubble: "#1C1C1E",
          userText: "#FFFFFF",
          botText: "#FFFFFF",
          inputBackground: "#1C1C1E",
          headerBackground: "#000000",
          pinnedBackground: "#1A2332",
          pinnedIconColor: "#2196F3",
        }
      : theme === "spongebob"
      ? {
          background: "#FFE135",
          cardBackground: "#87CEEB",
          text: "#000000",
          textSecondary: "#5D4E37",
          border: "#FF6B35",
          primary: "#FF6B35",
          userBubble: "#FF6B35",
          botBubble: "#87CEEB",
          userText: "#FFFFFF",
          botText: "#000000",
          inputBackground: "#FFFFFF",
          headerBackground: "#FFE135",
          pinnedBackground: "#FFF8DC",
          pinnedIconColor: "#FF6B35",
        }
      : theme === "doraemon"
      ? {
          background: "#E8F4F8",
          cardBackground: "#0095DA",
          text: "#000000",
          textSecondary: "#666666",
          border: "#FF5A5F",
          primary: "#0095DA",
          userBubble: "#FF5A5F",
          botBubble: "#0095DA",
          userText: "#FFFFFF",
          botText: "#FFFFFF",
          inputBackground: "#FFFFFF",
          headerBackground: "#0095DA",
          pinnedBackground: "#B3E5FC",
          pinnedIconColor: "#FF5A5F",
        }
      : {
          background: "#FFFFFF",
          cardBackground: "#F2F2F7",
          text: "#000000",
          textSecondary: "#8E8E93",
          border: "#F2F2F7",
          primary: "#007AFF",
          userBubble: "#007AFF",
          botBubble: "#eeeeee",
          userText: "#FFFFFF",
          botText: "#000000",
          inputBackground: "#FFFFFF",
          headerBackground: "#FFFFFF",
          pinnedBackground: "#E3F2FD",
          pinnedIconColor: "#2196F3",
        };

  const fonts =
    theme === "spongebob"
      ? { regular: "Comic Sans MS", bold: "Comic Sans MS" }
      : theme === "doraemon"
      ? { regular: "Rounded", bold: "Rounded" }
      : { regular: "System", bold: "System" };

  const borderRadius =
    theme === "spongebob"
      ? { small: 8, medium: 16, large: 24 }
      : theme === "doraemon"
      ? { small: 20, medium: 30, large: 40 }
      : { small: 8, medium: 12, large: 18 };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, colors, fonts, borderRadius }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};
