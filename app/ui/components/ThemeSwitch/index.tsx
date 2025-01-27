import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Form, useLocation } from "@remix-run/react";
import { useRef } from "react";

import { useTheme } from "~/ui/hooks/use-theme";

import UIIconButton from "../IconButton";

const UIThemeSwitch = () => {
  const location = useLocation();
  const theme = useTheme();
  const detailsRef = useRef<HTMLDetailsElement>(null);

  return (
    <Form
      role="listbox"
      aria-roledescription="Theme switcher"
      preventScrollReset
      replace
      action="/resources/theme-switch"
      method="post"
      onSubmit={() => {
        detailsRef.current?.removeAttribute("open");
      }}
    >
      <input
        type="hidden"
        name="returnTo"
        value={location.pathname + location.search + location.hash}
      />
      {[
        { name: "light", icon: <SunIcon /> },
        { name: "dark", icon: <MoonIcon /> },
      ]
        .filter((options) => options.name !== theme)
        .map((option) => (
          <UIIconButton
            key={option.name}
            role="option"
            aria-selected={option.name === theme}
            name="theme"
            value={option.name}
          >
            {option.icon}
          </UIIconButton>
        ))}
    </Form>
  );
};

export default UIThemeSwitch;
