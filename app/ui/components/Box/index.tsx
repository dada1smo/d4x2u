import { Box, type BoxProps } from "@radix-ui/themes";
import { type FunctionComponent, type ReactNode } from "react";

interface UIBoxProps {
  children: ReactNode;
}

const UIBox: FunctionComponent<UIBoxProps & BoxProps> = ({
  children,
  ...props
}) => {
  return <Box {...props}>{children}</Box>;
};

export default UIBox;
