import Button from './Button';

export default function ProjectSideBar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectID,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-amber-400 ">
        Your Projects
      </h2>

      <div>
        <Button onClick={onStartAddProject}> + Add Project </Button>
      </div>

      <ul className="mt-8">
        {projects.map((project) => {
          let selectedCSS =
            'w-full text-left px-2 py-1 rounded-md my-1 hover:text-amber-200 hover:bg-stone-800';

          if (project.id === selectedProjectID) {
            selectedCSS +=
              ' bg-stone-700 text-amber-400 hover:text-amber-400 hover:bg-stone-700';
          } else {
            selectedCSS += ' text-stone-400';
          }

          return (
            <li key={project.id}>
              <button
                className={selectedCSS}
                onClick={() => onSelectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
