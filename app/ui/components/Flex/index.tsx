import { Flex, type FlexProps } from "@radix-ui/themes";
import { type FunctionComponent, type ReactNode } from "react";

interface UIFlexProps {
  children: ReactNode;
}

const UIFlex: FunctionComponent<UIFlexProps & FlexProps> = ({
  children,
  ...props
}) => {
  return <Flex {...props}>{children}</Flex>;
};

export default UIFlex;
