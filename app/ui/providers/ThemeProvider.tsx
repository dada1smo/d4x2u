import { Theme } from "@radix-ui/themes";
import { FunctionComponent, ReactNode } from "react";

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({ children }) => {
  return (
    <Theme
      accentColor="amber"
      grayColor="slate"
      panelBackground="solid"
      scaling="100%"
      radius="medium"
    >
      {children}
    </Theme>
  );
};

export default ThemeProvider;
