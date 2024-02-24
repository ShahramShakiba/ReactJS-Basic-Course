import { useState } from 'react';

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState('');

  const handleChange = (e) => {
    setEnteredTask(e.target.value);
  };

  const handleClick = () => {
    if (enteredTask.trim() === '') {
      return alert('🚨 Please Enter A Task To Proceed');
    }
    onAdd(enteredTask);
    setEnteredTask('');
  };

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        onChange={handleChange}
        value={enteredTask}
        className="w-64 px-2 py-1 rounded-sm bg-stone-200 focus:outline-white shadow-sm "
      />

      <button
        onClick={handleClick}
        className=" px-1 text-stone-500 hover:text-amber-600 font-medium hover:border-r-8 hover:border-amber-300 transition-all ease-out duration-200"
      >
        Add Task
      </button>
    </div>
  );
}
