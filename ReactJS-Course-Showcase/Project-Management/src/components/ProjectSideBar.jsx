export default function ProjectSideBar() {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-amber-400 ">
        Your Projects
      </h2>

      <div>
        <button className="px-4 py-2 bg-stone-700 text-amber-200 text-xs md:text-base rounded-md hover:bg-stone-600 hover:text-amber-400 transition-all ease-in duration-200">
          + Add Project
        </button>
      </div>

      <ul></ul>
    </aside>
  );
}
