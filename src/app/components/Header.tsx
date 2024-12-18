import SunIcon from "./icons/SunIcon";

const Navbar = () => {
  return (
    <header className="flex justify-between py-2">
      <h1 className="text-4xl font-semibold text-white">devfinder</h1>
      <div className="flex items-center gap-2">
        <span className="uppercase text-white">Light</span>
        <button>
          <SunIcon className="fill-white" width={25} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;