import { useRef, useState } from "react";
import Input from "./Input";
import Modal from "./Modal";
export default function NewProject({ addProject, cancelProject }) {
  const modal = useRef()
    const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    dueDate: "",
  });
  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
        modal.current.open();
        return;
    }

    addProject({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="my-2 font-bold text-xl ">Invalid Input</h2>
        <p>Looks like you forgot to add a value</p>
        <p className="mb-4">Please make sure you add a valid value for every input field</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex justify-end gap-4 items-center my-4">
          <li>
            <button
              onClick={cancelProject}
              className="text-stone-800 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="bg-stone-800 rounded-md text-stone-50 px-4 py-2 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" label="Title" ref={title} />
          <Input textarea label="Description" ref={description} />
          <Input type="date" label="Due Date" ref={dueDate} />
        </div>
      </div>
    </>
  );
}
