export default function Button({ children, ...props }) {
  const btnClasses =
    'px-4 py-2 bg-stone-700 text-stone-400 text-xs md:text-base rounded-md hover:bg-stone-600 hover:text-amber-200 transition-all ease-in duration-200';

  return (
    <button className={btnClasses} {...props}>
      {children}
    </button>
  );
}
