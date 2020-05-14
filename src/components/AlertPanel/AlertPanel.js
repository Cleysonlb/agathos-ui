// @flow
import * as React from "react";
import classNames from "classnames";
import styles from "./AlertPanel.css";

export type Props = {
  mode: "success" | "warning" | "danger",
  children: React.Node,
};

const AlertPanel = (props: Props) => {
  const { mode, children } = props;

  const alertPanelClassName = classNames(styles.AlertPanel, {
    [styles[mode]]: mode,
  });

  return <div className={alertPanelClassName}>{children}</div>;
};

export default AlertPanel;
