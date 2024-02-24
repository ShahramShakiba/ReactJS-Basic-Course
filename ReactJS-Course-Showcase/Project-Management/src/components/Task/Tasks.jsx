import NewTask from './NewTask';

export default function Tasks({ tasks, onAdd, onDelete }) {
  const taskListCSS =
    'py-1 px-4 mt-8 rounded-md bg-stone-100 shadow-lg divide-y-2 divide-amber-200 divide-opacity-45 ';
  const clearCSS =
    'px-2 text-sm hover:text-base hover:font-semibold text-stone-400 hover:text-rose-600 hover:border-r-8 hover:border-rose-600 transition-color ease-in-out duration-200';

  const noTask = (
    <p className="text-stone-700 my-4">
      This project does not have any tasks yet.
    </p>
  );

  const tasksList = (
    <ul className={taskListCSS}>
      {tasks.map((task) => (
        <li key={task.id} className="flex justify-between my-2 py-2">
          <span> {task.text} </span>
          <button onClick={() => onDelete(task.id)} className={clearCSS}>
            Clear
          </button>
        </li>
      ))}
    </ul>
  );

  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>

      <NewTask onAdd={onAdd} />

      {tasks.length === 0 && noTask}
      {tasks.length > 0 && tasksList}
    </section>
  );
}
