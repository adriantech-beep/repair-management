function Button({ children, type, onClick }) {
  const base =
    "uppercase tracking-wide text-stone-800 inline-block transition-all-colors duration-300 focus:outline-none focus:ring focus:ring-blue-300 focus:bg-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disable:cursor-not-allowed ";

  const styles = {
    primary: base + "bg-blue-600 py-1 px-4 text-white ",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    secondary:
      "bg-red-500 uppercase tracking-wide text-stone-100 inline-block hover:bg-red-500 hover:text-white-800 transition-all-colors duration-300 focus:outline-none focus:ring focus:ring-red-600 focus:bg-red-500 focus:ring-offset-2 disabled:cursor-not-allowed disable:cursor-not-allowed border-2 border-stone-300 py-1 px-4",
  };

  return (
    <button className={styles[type]} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
