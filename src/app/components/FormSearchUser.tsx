import SearchIcon from "./icons/SearchIcon";

const FormSearchUser = () => {
  return (
    <form className="flex justify-between gap-2 rounded-3xl bg-sky-900 p-2">
      <SearchIcon className="w-7 min-w-7 fill-sky-500" />
      <input
        type="text"
        placeholder="Search Github username..."
        className="w-full rounded-2xl bg-transparent p-2 text-white placeholder:text-white focus:outline-none focus:outline-sky-500"
      />
      <button className="rounded-2xl bg-sky-500 px-4 py-4 font-semibold text-white">
        Search
      </button>
    </form>
  );
};

export default FormSearchUser;
