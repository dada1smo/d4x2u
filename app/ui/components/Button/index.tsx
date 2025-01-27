import { Button, type ButtonProps } from "@radix-ui/themes";
import { Link } from "@remix-run/react";
import { forwardRef, type ReactNode } from "react";

import styles from "./styles.module.css";

export interface UIButtonProps extends ButtonProps {
  href?: string;
  children?: ReactNode;
}

const UIButton = forwardRef<HTMLButtonElement, UIButtonProps>(
  ({ href, children, ...props }, ref) => {
    const buttonStyles = styles.button;

    if (href) {
      return (
        <Button {...props} ref={ref} asChild className={buttonStyles}>
          <Link to={href}>{children}</Link>
        </Button>
      );
    }

    return (
      <Button {...props} ref={ref} className={buttonStyles}>
        {children}
      </Button>
    );
  },
);

UIButton.displayName = "UIButton";

export default UIButton;
