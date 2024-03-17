 import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, textarea, ...props },ref) {
  const classes =
    "w-full p-1 bg-stone-200 text-stone-600 border-b-2 rounded-sm border-stone-300 focus:border-stone-400 focus:outline-none";
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="uppercase text-stone-500 text-sm font-semibold">
        {label}
      </label>
      {textarea ? (
        <textarea ref={ref} {...props} className={classes} />
      ) : (
        <input ref={ref} {...props} className={classes} />
      )}
    </p>
  );
})
export default Input
