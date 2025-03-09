import React from "react";

function Input({ type, id, placeholder, value, onChange }) {
  const base =
    "appearance-none relative block w-full px-1 py-2 border focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm text-stone-900";

  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      className={base}
      value={value}
      onChange={onChange}
    ></input>
  );
}

export default Input;
