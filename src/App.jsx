import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectDetail from "./components/ProjectDetail";
import Sidebar from "./components/Sidebar";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProject: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(text) {
    setProjectState((prevState) => {
      const newTask = {
        text: text,
        projectId: prevState.selectedProject,
        id: Math.random(),
      };
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.projects.filter((task) => task.id !== id),
      };
    });
  }

  function handleStartAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProject: null,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const newProject = { ...projectData, id: Math.random() };
      return {
        ...prevState,
        selectedProject: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleCancel() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProject: undefined,
      };
    });
  }

  function handleProjectSelected(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProject: id,
      };
    });
  }

  function handleDelete() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProject: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProject
        ),
      };
    });
  }

  const selectedProject = projectState.projects.find(
    (project) => project.id == projectState.selectedProject
  );

  let content = (
    <ProjectDetail
      project={selectedProject}
      onDelete={handleDelete}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectState.tasks}
    />
  );

  if (projectState.selectedProject === null) {
    content = (
      <NewProject addProject={handleAddProject} cancelProject={handleCancel} />
    );
  } else if (projectState.selectedProject === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onStartAddProject={handleStartAddProject}
        projects={projectState.projects}
        onSelectProject={handleProjectSelected}
        selectedProjectId={projectState.selectedProject}
      />
      {content}
    </main>
  );
}

export default App;
