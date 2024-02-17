import { useRef } from 'react';
import Input from './Input';
import Modal from './Modal';

export default function NewProject({ onAdd }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modal = useRef();

  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    //  validation ....
    if (
      enteredTitle.trim() === '' ||
      enteredDescription.trim() === '' ||
      enteredDueDate.trim() === ''
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  };

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2> Invalid Input </h2>
        <p> Oops ... looks like you forgot to enter a value. </p>
        <p>Please make sure you provide a valid value for every input field.</p>
      </Modal>

      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="text-stone-600 hover:text-rose-500 hover:border-b hover:border-rose-600 transition-color ease-in-out duration-200">
              Cancel
            </button>
          </li>

          <li>
            <button
              onClick={handleSave}
              className="px-6 py-2 rounded-md bg-amber-300 text-stone-700 font-semibold hover:bg-amber-400 transition-all ease-in duration-150 shadow-md"
            >
              Save
            </button>
          </li>
        </menu>

        <div>
          <Input type="text" label="Title" ref={title} />
          <Input label="Description" textarea ref={description} />
          <Input type="date" label="Due Date" ref={dueDate} />
        </div>
      </div>
    </>
  );
}
