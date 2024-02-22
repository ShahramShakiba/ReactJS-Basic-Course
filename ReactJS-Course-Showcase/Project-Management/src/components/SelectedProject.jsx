import Tasks from './Tasks';

export default function SelectedProject({
  project,
  onDeleteProject,
  onAddTask,
  onDeleteTask,
  tasks,
}) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-amber-300 border-opacity-30">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>

          <button
            onClick={onDeleteProject}
            className="px-1 text-stone-400 text-sm hover:text-base hover:font-semibold hover:text-rose-500 hover:border-r-8 hover:border-rose-600 transition-color ease-in-out duration-200 "
          >
            Delete
          </button>
        </div>

        <p className="mb-4 text-stone-400"> {formattedDate} </p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>

      <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
    </div>
  );
}
