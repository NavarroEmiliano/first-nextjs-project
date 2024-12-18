import SunIcon from "./icons/SunIcon";

const Navbar = () => {
  return (
    <header className="flex justify-between mb-4">
      <h1 className="text-4xl font-semibold text-white">devfinder</h1>
      <div className="flex items-center gap-2">
        <span className="uppercase text-white">Light</span>
        <button className="hover:rotate-45 duration-200 ">
          <SunIcon className="fill-white" width={25} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
