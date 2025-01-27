import { IconButton, type IconButtonProps } from "@radix-ui/themes";
import { Link } from "@remix-run/react";
import { forwardRef, type ReactNode } from "react";

interface UIIconButtonProps extends IconButtonProps {
  href?: string;
  children?: ReactNode;
}

const UIIconButton = forwardRef<HTMLButtonElement, UIIconButtonProps>(
  ({ href, children, ...props }, ref) => {
    if (href) {
      return (
        <IconButton {...props} ref={ref} asChild>
          <Link to={href}>{children}</Link>
        </IconButton>
      );
    }

    return (
      <IconButton {...props} ref={ref}>
        {children}
      </IconButton>
    );
  },
);

UIIconButton.displayName = "UIButton";

export default UIIconButton;
