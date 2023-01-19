import React, {ReactNode, useEffect, useRef, useState} from "react";
import {CSSTransition} from "react-transition-group";

import {ANIMATION_TIME} from "./const";
import styles from "./styles.module.scss";
import animationStyles from "./animation.module.scss";

const overlayAnimation = {
  enter: animationStyles.overlayEnter,
  enterActive: animationStyles.overlayEnterActive,
  exit: animationStyles.overlayExit,
  exitActive: animationStyles.overlayExitActive,
};

const contentAnimation = {
  enter: animationStyles.contentEnter,
  enterActive: animationStyles.contentEnterActive,
  exit: animationStyles.contentExit,
  exitActive: animationStyles.contentExitActive,
};

type LayoutType = {
    onClose: () => void
    children: ReactNode
    opened: boolean
}

export const Layout: React.FC<LayoutType> = ({ onClose, children, opened }) => {
  const overlayRef = useRef<any>();
  const contentRef = useRef<any>();

  const [animationIn, setAnimationIn] = useState(false);

  useEffect(() => {
    setAnimationIn(opened);
  }, [opened]);

  return (
    <div className={styles.container}>
      <CSSTransition
        in={animationIn}
        nodeRef={overlayRef}
        timeout={ANIMATION_TIME}
        mountOnEnter
        unmountOnExit
        classNames={overlayAnimation}
      >
        <div ref={overlayRef} className={styles.overlay} onClick={onClose} />
      </CSSTransition>
      <CSSTransition
        in={animationIn}
        nodeRef={contentRef}
        timeout={ANIMATION_TIME}
        mountOnEnter
        unmountOnExit
        classNames={contentAnimation}
      >
        <div ref={contentRef} className={styles.content}>
          {children}
        </div>
      </CSSTransition>
    </div>
  );
};
