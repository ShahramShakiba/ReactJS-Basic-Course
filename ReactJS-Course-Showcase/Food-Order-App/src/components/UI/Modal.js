import classes from './Modal.module.css';
import ReactDOM from 'react-dom';

const Backdrop = ({ onClose }) => {
  return <div onClick={onClose} className={classes.backdrop} />;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}> {children} </div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

export default function Modal({ children, onHide }) {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onHide} />, portalElement)}

      {ReactDOM.createPortal(
        <ModalOverlay> {children} </ModalOverlay>,
        portalElement
      )}
    </>
  );
}
