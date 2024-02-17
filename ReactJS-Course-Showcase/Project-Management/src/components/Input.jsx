export default function Input({ label, textarea, ...props }) {
  const classes =
    'w-full p-1 border-b-2 rounded-md border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-amber-200 shadow-md';

  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {textarea ? (
        <textarea
          cols="10"
          rows="5"
          className={`${classes} resize-none`}
          {...props}
        />
      ) : (
        <input className={classes} {...props} />
      )}
    </p>
  );
}
