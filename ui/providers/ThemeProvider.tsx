import { Theme } from "@radix-ui/themes";
import { FunctionComponent, ReactNode } from "react";

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({ children }) => {
  return <Theme>{children}</Theme>;
};

export default ThemeProvider;
