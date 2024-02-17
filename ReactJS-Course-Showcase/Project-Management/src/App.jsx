import { useState } from 'react';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import ProjectSideBar from './components/ProjectSideBar';

export default function App() {
  const [projectsState, setProjectsState] = useState({
    // undefined: not adding a new project & not select any project
    selectedProjectID: undefined,
    projects: [],
  });

  const handleStartAddProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectID: null,
        // null: this's a signal that we're going to add a new project
      };
    });
  };

  let content;
  if (projectsState.selectedProjectID === null) {
    content = <NewProject />;
  } else if (projectsState.selectedProjectID === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}
