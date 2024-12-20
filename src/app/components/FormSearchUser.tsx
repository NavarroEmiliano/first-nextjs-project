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
      className="flex justify-between gap-4 rounded-2xl bg-slate-900 p-4 text-white"
    >
      <SearchIcon className="w-7 min-w-7 fill-slate-500" />
      <input
        name="username"
        type="text"
        placeholder="Search Github username..."
        className="w-full rounded-2xl bg-transparent p-2 placeholder:text-white focus:outline-none focus:outline-sky-500"
      />
      <button className="rounded-xl bg-slate-500 px-4 py-4 font-semibold">
        Search
      </button>
    </form>
  );
};

export default FormSearchUser;
