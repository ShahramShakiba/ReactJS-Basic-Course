export default function NewTask() {
  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200 focus:outline-white "
      />
      <button className=" px-1 text-stone-700 hover:text-amber-600  hover:border-r-8 hover:border-amber-300 transition-all ease-in-out duration-200">
        Add Task
      </button>
    </div>
  );
}
