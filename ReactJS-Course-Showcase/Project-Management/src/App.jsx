import { useState } from 'react';
import NewProject from './components/Projects/NewProject';
import NoProjectSelected from './components/Projects/NoProjectSelected';
import ProjectSideBar from './components/Projects/ProjectSideBar';
import SelectedProject from './components/SelectedProject';

const project = {
  selectedProjectID: undefined,
  projects: [],
  tasks: [],
};

export default function App() {
  const [projectsState, setProjectsState] = useState(project);

  const handleStartProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectID: null,
      };
    });
  };

  const handleAddProject = (projectData) => {
    setProjectsState((prevState) => {
      const projectID = Math.random();
      const newProject = {
        ...projectData,
        id: projectID,
      };

      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
        selectedProjectID: projectID,
        // back to Newly created project
      };
    });
  };

  const handleCancelProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectID: undefined,
      };
    });
  };

  const handleSelectProject = (id) => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectID: id,
      };
    });
  };

  const handleDeleteProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectID: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectID
        ),
      };
    });
  };

  const handleAddTask = (text) => {
    setProjectsState((prevState) => {
      const taskID = Math.random();
      const newTask = {
        text: text,
        projectID: prevState.selectedProjectID,
        id: taskID,
      };

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  };

  const handleDeleteTask = (id) => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  };

  // Derive selectedProjectID - find selected Project to display
  const selectedProjectID = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectID
  );
  // Filter Tasks by selected Project
  const filteredTasks = projectsState.tasks.filter(
    (task) => task.projectID === projectsState.selectedProjectID
  );

  let content = (
    <SelectedProject
      project={selectedProjectID}
      onDeleteProject={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={filteredTasks}
    />
  );
  if (projectsState.selectedProjectID === null) {
    content = (
      <NewProject
        onAddProject={handleAddProject}
        onCancel={handleCancelProject}
      />
    );
  } else if (projectsState.selectedProjectID === undefined) {
    content = <NoProjectSelected onStartProject={handleStartProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar
        onStartProject={handleStartProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectID={projectsState.selectedProjectID}
      />

      {content}
    </main>
  );
}

/* Control what's being displayed
const project = {
  => to Store the ID of the project that was selected
  => "undefined" : not adding a new project & not select any project
  => "null" : this's a signal that we're going to add a new project
* selectedProjectID: undefined,

  projects: [],
  tasks: [],
};
*/
