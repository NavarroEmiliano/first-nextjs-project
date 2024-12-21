import SearchIcon from "./icons/SearchIcon";

interface Props {
  getUser: (username: string) => Promise<void>;
}

const FormSearchUser = ({ getUser }: Props) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = e.currentTarget.username.value;
    if (!username) return;
    await getUser(username);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-between gap-4 rounded-2xl shadow-md dark:shadow-none dark:bg-slate-900 p-4 text-white"
    >
      <SearchIcon className="w-7 min-w-7 fill-blue-800 dark:fill-slate-500" />
      <input
        name="username"
        type="text"
        autoComplete="off"
        placeholder="Search Github username..."
        className="w-full rounded-2xl bg-transparent p-2 text-blue-950 dark:text-white placeholder:text-slate-500 dark:placeholder:text-white focus:outline-none focus:outline-slate-600"
      />
      <button className="rounded-xl bg-blue-800 dark:bg-slate-500 px-4 py-4 font-semibold">
        Search
      </button>
    </form>
  );
};

export default FormSearchUser;
