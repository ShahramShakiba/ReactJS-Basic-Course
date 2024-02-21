import { useState } from 'react';
import NewProject from './components/NewProject/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import ProjectSideBar from './components/ProjectSideBar';
import SelectedProject from './components/SelectedProject';

const project = {
  selectedProjectID: undefined,
  projects: [],
  tasks: [],
};

export default function App() {
  const [projectsState, setProjectsState] = useState(project);

  const handleAddTask = (taskText) => {
    setProjectsState((prevState) => {
      const taskID = Math.random();
      const newTask = {
        text: taskText,
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

  const handleStartAddProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectID: null,
      };
    });
  };

  const handleCancel = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectID: undefined,
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
        selectedProjectID: undefined,
        // back to NoProjectSelected page
      };
    });
  };

  const handleDelete = () => {
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

  // Derive selectedProjectID
  const selectedProjectID = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectID
  );
  const filteredTasks = projectsState.tasks.filter(
    (task) => task.projectID === projectsState.selectedProjectID
  );

  let content = (
    <SelectedProject
      project={selectedProjectID}
      onDelete={handleDelete}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={filteredTasks}
    />
  );
  if (projectsState.selectedProjectID === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancel} />;
  } else if (projectsState.selectedProjectID === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  const handleSelectProject = (id) => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectID: id,
      };
    });
  };

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectID={projectsState.selectedProjectID}
      />

      {content}
    </main>
  );
}

/* undefined & null, meaning
const project = {
  => undefined: not adding a new project & not select any project
* selectedProjectID: undefined,
  projects: [],
  tasks: [],
};

 const handleStartAddProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
*       selectedProjectID: null,
        => null: this's a signal that we're going to add a new project
      };
    });
  };
*/
