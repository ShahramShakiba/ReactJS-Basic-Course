import { useRef } from 'react';
import Input from '../Helpers/Input';
import Modal from '../Helpers/Modal';
import './newProject.css';

export default function NewProject({ onAddProject, onCancel }) {
  const title = useRef(),
    description = useRef(),
    dueDate = useRef(),
    modal = useRef();

  const handleSave = () => {
    const enteredTitle = title.current.value,
      enteredDescription = description.current.value,
      enteredDueDate = dueDate.current.value;

    //  validation ....
    if (
      enteredTitle.trim() === '' ||
      enteredDescription.trim() === '' ||
      enteredDueDate.trim() === ''
    ) {
      modal.current.open();
      return;
    }
    
    onAddProject({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  };

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="modalHeader">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>

      {/*  Project Buttons */}
      <div className="w-[35rem] mt-16">
        <menu className="menu">
          <li>
            <button onClick={onCancel} className="cancelCSS">
              Cancel
            </button>
          </li>
          <li>
            <button onClick={handleSave} className="saveCSS">
              Save
            </button>
          </li>
        </menu>
        {/* Project Inputs */}
        <div>
          <Input type="text" label="Title" ref={title} />
          <Input textarea label="Description" ref={description} />
          <Input type="date" label="Due Date" ref={dueDate} />
        </div>
      </div>
    </>
  );
}
