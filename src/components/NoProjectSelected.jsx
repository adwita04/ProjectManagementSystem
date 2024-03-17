import noProjectImage from '../assets/no-projects.png'
import Button from './Button';
export default function NoProjectSelected({onStartAddProject})
{
    return (
        <div className="mt-24 text-center w-2/3">
            <img src={noProjectImage} className="w-16 h-16 object-contain mx-auto"></img>
            <h2 className="font-bold text-stone-600 text-l mt-2">No Project Selected</h2>
            <h2 className="text-md text-stone-500 mb-4">Select a project or get started with a new one</h2>
            <Button onClick={onStartAddProject}>Create new project</Button>
        </div>
    );
}