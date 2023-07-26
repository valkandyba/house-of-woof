import React, { FC, Fragment, ReactNode } from 'react';
import ReactDOM from 'react-dom';

import classes from './ModalWindow.module.scss';

interface BackdropProps {
  onClose: () => void;
}

const Backdrop: FC<BackdropProps> = ({ onClose }) => {
  return <div className={classes.backdrop} onClick={onClose} />;
};

interface ModalOverlayProps {
  children: ReactNode;
}

const ModalOverlay: FC<ModalOverlayProps> = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

interface ModalWindowProps {
  onClose: () => void;
  children: ReactNode;
}

const ModalWindow: FC<ModalWindowProps> = ({ onClose, children }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={onClose} />,
        portalElement as Element,
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement as Element,
      )}
    </Fragment>
  );
};

export default ModalWindow;
