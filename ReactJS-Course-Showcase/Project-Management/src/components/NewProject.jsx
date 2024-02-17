import Input from './Input';

export default function NewProject() {
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-600 hover:text-rose-500 hover:border-b hover:border-rose-600 transition-color ease-in-out duration-300">
            Cancel
          </button>
        </li>
        <li>
          <button className="px-6 py-2 rounded-md bg-amber-300 text-stone-700 font-semibold hover:bg-amber-400 transition-all ease-in duration-150 shadow-md">
            Save
          </button>
        </li>
      </menu>

      <div>
        <Input label="Title" />
        <Input label="Description" textarea />
        <Input label="Due Date" />
      </div>
    </div>
  );
}
