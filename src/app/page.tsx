import SearchIcon from "./components/icons/SearchIcon";

const Home = () => {
  return (
    <>
      <form className="flex items-center gap-2 rounded-3xl bg-sky-900 p-2">
        <SearchIcon className="w-[30px] min-w-[30px] fill-sky-500" />
        <input
          type="text"
          placeholder="Search Github username..."
          className="h-14 flex-1 rounded-2xl bg-transparent p-2 text-white placeholder-white focus:outline-none focus:outline-sky-500"
        />
        <button className="rounded-2xl bg-sky-500 px-4 py-4 font-semibold text-white">
          Search
        </button>
      </form>
      <article>todo el chamullo de la pagina</article>
    </>
  );
};

export default Home;
