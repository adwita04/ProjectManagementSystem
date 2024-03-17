import Button from "./Button";

export default function Sidebar({ onStartAddProject, projects, onSelectProject, selectedProjectId}) {
  return (
    <aside className="bg-stone-900 w-1/3 py-16 px-8 rounded-r-xl text-stone-50 md:w-72 ">
      <h2 className="mb-8 font-bold md:text-xl text-stone-200">
        YOUR PROJECTS
      </h2>
      <Button onClick={onStartAddProject}>+ Add a project</Button>
      <ul className="mt-8">
        {projects.map((project) => {
          let cssclasses ="w-full text-left px-2 py-1 rounded-sm hover:text-stone-200 hover:bg-stone-800"
          
          if (project.id === selectedProjectId){
            cssclasses += " bg-stone-800 text-stone-200"
          }
          else{
            cssclasses += " text-stone-400"
          }
          return (
            <li key={project.id}>
              <button onClick={()=>onSelectProject(project.id)} className={cssclasses}>
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
