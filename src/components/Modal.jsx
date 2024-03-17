import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ children, buttonCaption },ref) {
    const dialog= useRef()
    useImperativeHandle(ref,()=>{
        return{
            open(){
                dialog.current.showModal()
            }
        }
    })
  return createPortal(
    <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
        {children}
        <form method="dialog" className="text-right">
            <button className="bg-stone-800 text-stone-200 px-3 py-2 rounded-md text-sm hover:bg-stone-600 ">{buttonCaption}</button>
        </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
