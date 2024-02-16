import React from 'react';
import { createPortal } from 'react-dom';

import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

// PORTAL - Port to the specified place
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>

      <div className={classes.content}>
        <p>{props.message}</p>
      </div>

      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

export default function ErrorModal(props) {
  return (
    <React.Fragment>
      {createPortal(
        <Backdrop onConfirm={props.onConfirm} />,

        document.getElementById('backdrop-root')
      )}

      {createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,

        document.getElementById('overlay-root')
      )}
    </React.Fragment>
  );
}
