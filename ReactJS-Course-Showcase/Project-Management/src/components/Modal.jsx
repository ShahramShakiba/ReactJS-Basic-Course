import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog}>
      {children}

      <form method="dialog">
        <button> {buttonCaption} </button>
      </form>
    </dialog>,
    document.getElementById('modal-root')
  );
});

export default Modal;

/* Make it flexible and reusable
* Now it should become even more flexible and reusable.
I wanna make sure that we can open this dialog by calling a function that should be exposed by my custom component that does not require the calling component.

So another component that uses the modal to know that a dialog is used internally.
That should not be information that's needed by the component that uses my modal component.

by using two features provided by React:
*1. the forwardRef feature,
*2. the useImperativeHandle hook :
To now expose a function that can be called from outside this component function, we must use useImperativeHandle.

*/
