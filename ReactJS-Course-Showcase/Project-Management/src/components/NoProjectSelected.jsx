import noProjectImg from '../assets/no-projects.png';
import Button from './Helpers/Button';

export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="mt-2 text-center w-2/3">
      <img
        src={noProjectImg}
        alt="An empty task list with a pen on it"
        className="w-16 h-16 object-contain mx-auto"
      />

      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project from the sidebar or add a new one to get started.{' '}
      </p>

      <p className="mt-8">
        <Button onClick={onStartAddProject}>Create New Project</Button>
      </p>
    </div>
  );
}
