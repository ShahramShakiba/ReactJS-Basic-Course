import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import ProjectSideBar from './components/ProjectSideBar';

export default function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar />
      <NoProjectSelected />
      {/* <NewProject /> */}
    </main>
  );
}
