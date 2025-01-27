import { type FunctionComponent, type ReactNode } from "react";

import UIBox from "../Box";
import UIFlex from "../Flex";

import styles from "./styles.module.css";

interface UICardProps {
  header: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
}

const UICard: FunctionComponent<UICardProps> = ({
  header,
  children,
  footer,
}) => {
  return (
    <UIFlex
      direction="column"
      className={styles.card}
      gap="4"
      p="5"
      justify="center"
    >
      <UIBox>{header}</UIBox>
      {children}
      {footer ? footer : null}
    </UIFlex>
  );
};

export default UICard;
